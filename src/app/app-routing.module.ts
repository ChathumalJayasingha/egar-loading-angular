import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerPageComponent} from "./components/customer-page/customer-page.component";
import {ItemPageComponent} from "./components/item-page/item-page.component";
import {OrderPageComponent} from "./components/order-page/order-page.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";
import {OrderGuard} from "./components/guards/order.guard";
import {LoginComponent} from "./components/login/login.component";
import {SaveCustomerPageComponent} from "./components/customer-page/inner-items/save-customer-page/save-customer-page.component";
import {DeleteCustomerPageComponent} from "./components/customer-page/inner-items/delete-customer-page/delete-customer-page.component";
import {SearchCustomerPageComponent} from "./components/customer-page/inner-items/search-customer-page/search-customer-page.component";
import {UpdateCustomerPageComponent} from "./components/customer-page/inner-items/update-customer-page/update-customer-page.component";

const routes: Routes = [
  {path:"",redirectTo:"/customer",pathMatch:'full'},
  {path:'customer',component:CustomerPageComponent,children:[
      {path:'',redirectTo:'/customer/save',pathMatch:'full'},
      {path:"save",component:SaveCustomerPageComponent},
      {path:"delete/:id",component:DeleteCustomerPageComponent},
      {path:"search",component:SearchCustomerPageComponent},
      {path:"update",component:UpdateCustomerPageComponent}
    ]},
  {path:'item',component:ItemPageComponent},
  {path:'order',component:OrderPageComponent,canActivate:[OrderGuard]},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
