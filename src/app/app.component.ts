import { Component, computed, signal } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

export type MenuItem = {
  icon: string,
  label: string,
  route: string
}
@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, RouterOutlet, RouterModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OrthoPlanner';
  opened = signal(false);
  sidenavWidth = computed(() => this.opened() ? '100px' : '250px')
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
  constructor(private router: Router) {}
  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
