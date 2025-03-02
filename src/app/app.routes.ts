import { Routes } from '@angular/router';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { PatientsComponent } from './feature/patients/patients.component';
import { PriceListsComponent } from './feature/price-lists/price-lists.component';
import { ProceduresComponent } from './feature/procedures/procedures.component';
import { TreatmentsPlansComponent } from './feature/treatments-plans/treatments-plans.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard',
        data: {
            icon: 'dashboard'
        }   
    },
    {
        path: 'treatment-plans',
        component: TreatmentsPlansComponent,
        title: 'Treatment plans',
        data: {
            icon: 'fact_check'
        }   
    },
    {
        path: 'patients',
        component: PatientsComponent,
        title: 'Patients',
        data: {
            icon: 'patient_list'
        }   
    },
    {
        path: 'price-lists',
        component: PriceListsComponent,
        title: 'Price lists',
        data: {
            icon: 'request_quote'
        }   
    },
    {
        path: 'procedures',
        component: ProceduresComponent,
        title: 'Procedures',
        data: {
            icon: 'procedure'
        }   
    },
];
