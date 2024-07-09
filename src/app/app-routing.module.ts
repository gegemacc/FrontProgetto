import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./pages/signup/signup.component";
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import {ProductComponent} from "./pages/product/product.component";
import {HomeComponent} from "./pages/home/home.component";
import {authGuard} from "./guard/auth.guard";
import {ProfileComponent} from "./pages/profile/profile.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {AdminProductsComponent} from "./pages/admin-products/admin-products.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {NewProductComponent} from "./pages/new-product/new-product.component";
import {adminGuard} from "./guard/admin.guard";
import {AdminOrdersComponent} from "./pages/admin-orders/admin-orders.component";
import {OrderDetailsComponent} from "./pages/order-details/order-details.component";
import {AdminCategoriesComponent} from "./pages/admin-categories/admin-categories.component";
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';

const routes: Routes = [
  {
    path: 'register',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: 'orders/:id',
    component: OrderDetailsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate:[authGuard]
  },
  {
    path: 'products/:id',
    component: ProductComponent
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'chiSiamo',
    component: ChiSiamoComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [adminGuard]
  },

  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [adminGuard]
  },

  {
    path: 'admin/products/new-product',
    component: NewProductComponent,
    canActivate: [adminGuard]
  },

  {
    path: 'admin/orders/:id',
    component: AdminOrdersComponent,
    canActivate: [adminGuard]
  },
  {
    path: 'admin/categories',
    component: AdminCategoriesComponent,
    canActivate: [adminGuard]
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [authGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
