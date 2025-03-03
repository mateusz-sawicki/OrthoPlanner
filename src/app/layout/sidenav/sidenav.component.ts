import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MenuItem } from './menu-items';
import { FabBtnComponent } from "../fab-btn/fab-btn.component";

@Component({
  selector: 'app-sidenav',
    imports: [MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, RouterOutlet, RouterModule, CommonModule, FabBtnComponent],
  
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Input() isMobile: boolean = false;
  @Input() isOpened: boolean = true;
  @Output() toggleSidenav = new EventEmitter<void>();
  
  toggleMenu() {
    this.toggleSidenav.emit();
  }

    constructor(private router: Router) {}
  
  isActive(route: string): boolean {
    return this.router.url === route;
  }
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
}
