import { Routes } from '@angular/router';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { PatientsComponent } from './feature/patients/patients.component';
import { PriceListsComponent } from './feature/price-lists/price-lists.component';
import { ProceduresComponent } from './feature/procedures/procedures.component';
import { TreatmentsPlansComponent } from './feature/treatments-plans/treatments-plans.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'treatment-plans',
        component: TreatmentsPlansComponent
    },
    {
        path: 'patients',
        component: PatientsComponent
    },
    {
        path: 'price-lists',
        component: PriceListsComponent
    },
    {
        path: 'procedures',
        component: ProceduresComponent  
    },
];
