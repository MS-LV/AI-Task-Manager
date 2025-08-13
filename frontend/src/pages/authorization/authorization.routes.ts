import { Routes } from "@angular/router";
import { AuthorizationComponent } from "./";
import { SigninComponent } from "./ui/signin";
import { SignupComponent } from "./ui/signup";

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        children: [
            { path: '', loadComponent: () => import('./').then(m => m.AuthorizationComponent) },
            { path: 'signin', loadComponent: () => import('./ui/signin').then(m => m.SigninComponent), outlet: 'signin' },
            { path: 'signup', loadComponent: () => import('./ui/signup').then(m => m.SignupComponent), outlet: 'signup' },
        ]
    }
];