import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'rclave',
    loadComponent: () => import('./rclave/rclave.page').then( m => m.RclavePage)
  },
  {
    path: 'cuenta',
    loadComponent: () => import('./cuenta/cuenta.page').then( m => m.CuentaPage)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./contacto/contacto.page').then( m => m.ContactoPage)
  },
  {
    path: 'contactos',
    loadComponent: () => import('./contactos/contactos.page').then( m => m.ContactosPage)
  },
  
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },
];
