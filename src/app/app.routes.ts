import { Routes } from '@angular/router';import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'proyectos'
    },
    {
        path: 'sobre-mi',
        component: AboutComponent
    },
    {
        path: 'proyectos',
        loadChildren: () => import ('./pages/work.module').then(m => m.WorkModule)
    },
    {
        path: 'contacto',
        component: ContactComponent
    },
];
