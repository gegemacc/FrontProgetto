import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './pages/cart/cart.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgOptimizedImage} from "@angular/common";
import {AuthControllerService} from "./services/auth-controller.service";
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { AdminOrdersComponent } from './pages/admin-orders/admin-orders.component';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from "@angular/material/sort";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDialogModule, MatDialogTitle} from "@angular/material/dialog";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { AdminCategoriesComponent } from './pages/admin-categories/admin-categories.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    SearchPageComponent,
    CartComponent,
    ProductComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    CheckoutComponent,
    NewProductComponent,
    OrderDetailsComponent,
    AdminCategoriesComponent,
    NewCategoryComponent,
    ChiSiamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule,
    NgOptimizedImage,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonToggleModule,
  ],
  providers: [AuthControllerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
