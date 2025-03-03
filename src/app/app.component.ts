import { Component, computed, signal, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

export type MenuItem = {
  icon: string,
  label: string,
  route: string
}
@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, RouterOutlet, RouterModule, CommonModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OrthoPlanner';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isOpened = true;
  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'fact_check',
      label: 'Treatment plans',
      route: 'treatment-plans'
    },
    {
      icon: 'patient_list',
      label: 'Patients',
      route: 'patients'
    },
    {
      icon: 'request_quote',
      label: 'Price lists',
      route: 'price-lists'
    },
    {
      icon: 'procedure',
      label: 'Procedures',
      route: 'procedures'
    },
  ]);
  constructor(private router: Router, private observer: BreakpointObserver) {}
  isActive(route: string): boolean {
    return this.router.url === route;
  }
  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isOpened = false;
    } else {
      this.sidenav.open();
      this.isOpened = !this.isOpened;
    }
  }
}
