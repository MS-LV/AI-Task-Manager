import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home'; // Assuming HomeComponent is imported

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent, // Assuming HomeComponent is imported
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadComponent: () => import('@pages/dashboard').then(m => m.DashboardComponent),
    },
    {
        path: 'signin',
        outlet: 'signin',
        loadComponent: () => import('@widgets/sign-in').then(m => m.SignInComponent),
    },
    {
        path: 'signup',
        outlet: 'signup',
        loadComponent: () => import('@widgets/sign-up').then(m => m.SignUpComponent)
    },
    {
        path: '**',
        loadComponent: () => import('@pages/not-found').then(m => m.NotFoundComponent)
    }
];

