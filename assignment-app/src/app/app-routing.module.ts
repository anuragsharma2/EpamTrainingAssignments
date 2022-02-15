import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path:"", component:AboutComponent},
  { path:"about", component:AboutComponent},
  { path:"login", component:LoginComponent},
  { path:"product", component:ProductComponent, canActivate:[AuthGaurdService]},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path:"**", component:NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
