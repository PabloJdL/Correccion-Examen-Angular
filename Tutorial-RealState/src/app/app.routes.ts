import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { HomeComponent } from './home/home.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home Details'
    },
    {
        path: 'registro',
        component: FormUsuarioComponent,
        title: 'Formulario'
    }
];

export default routeConfig;