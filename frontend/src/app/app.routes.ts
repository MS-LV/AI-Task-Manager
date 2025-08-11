import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        pathMatch: 'full',
        path: 'auth',
        loadComponent: () => import('@pages/authorization/authorization.component').then(m => m.AuthorizationComponent),
    }
];
