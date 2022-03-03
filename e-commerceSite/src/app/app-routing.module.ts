import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './auth-gaurd.service';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { OrderSuccessfulComponent } from './order-successful/order-successful.component';
import { Product } from './Product';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'login/:userId/products',component:ProductsComponent,canActivate:[AuthGaurdService]},
  {path:'login/:userId/cart',component:CartComponent,canActivate:[AuthGaurdService]},
  {path:'login/:userId/orderSuccessfull',component:OrderSuccessfulComponent},
  {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
