import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './misc/home/home.component';
import { MenuComponent } from './misc/menu/menu.component';

import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';

import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';

import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestReviewListComponent } from './request/request-review-list/request-review-list.component';
import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';
import { RequestLineComponent } from './request/request-line/request-line.component';

import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';

const routes: Routes = [
  {path: "", redirectTo: "/user/login", pathMatch: "full"},

  {path: "home", component: HomeComponent},
  {path: "menu", component: MenuComponent},

  {path: "user/list", component: UserListComponent},
  {path: "user/detail/:id", component: UserDetailComponent},
  {path: "user/edit/:id", component: UserEditComponent},
  {path: "user/create", component: UserCreateComponent},
  {path: "user/login", component: UserLoginComponent},

  {path: "vendor/list", component: VendorListComponent},
  {path: "vendor/detail/:id", component: VendorDetailComponent},
  {path: "vendor/edit/:id", component: VendorEditComponent},
  {path: "vendor/create", component: VendorCreateComponent},

  {path: "product/list", component: ProductListComponent},
  {path: "product/detail/:id", component: ProductDetailComponent},
  {path: "product/edit/:id", component: ProductEditComponent},
  {path: "product/create", component: ProductCreateComponent},

  {path: "request/list", component: RequestListComponent},
  {path: "request/detail/:id", component: RequestDetailComponent},
  {path: "request/edit/:id", component: RequestEditComponent},
  {path: "request/create", component: RequestCreateComponent},
  {path: "request/line/:id", component: RequestLineComponent},
  {path: "requests/request-review-list", component: RequestReviewListComponent},
  {path: "requests/request-review-item/:id", component: RequestReviewItemComponent},

  {path: "request-lines/create/:id",component: RequestlineCreateComponent},
  {path: "request-lines/edit/:id", component: RequestlineEditComponent},

  { path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
