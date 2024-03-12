import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: 'admin', loadChildren: () => import('./admin/admin.module').then(adm => adm.AdminModule), canActivate: [authGuard]},
    {path: 'auth', loadChildren: () => import('./auth/auth.module').then(adm => adm.AuthModule)},
    // {path: '', redirectTo: 'auth/login'}
    // {path: '', loadComponent: () => import('./web/web.module').then(web => web.WebModule)},
];
