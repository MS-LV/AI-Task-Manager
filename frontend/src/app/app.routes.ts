import { Routes } from '@angular/router';
import { AUTH_ROUTES } from '@pages/authorization';
import { HomeComponent } from '@pages/home'; // Assuming HomeComponent is imported

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent, // Assuming HomeComponent is imported
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadComponent: () => import('@pages/authorization').then(m => m.AuthorizationComponent),
        children: AUTH_ROUTES
    }
];
