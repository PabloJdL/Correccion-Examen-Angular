import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routeConfig: Routes = [
    {
        path: '',
        component: ProductListComponent,
        title: 'Inicio'
    },
    {
        path: 'products/:id',
        component: ProductDetailsComponent,
        title: 'Detalles Producto'
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'Carrito'
    }
];

export default routeConfig;