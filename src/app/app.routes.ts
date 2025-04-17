import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuardEcm } from '@alfresco/adf-core';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePageComponent,
        canActivate: [AuthGuardEcm]
    },
    {
        path: 'login',
        component: LoginPageComponent
    }
];
