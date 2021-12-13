import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './misc/home/home.component';
import { MenuComponent } from './misc/menu/menu.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorSearchPipe } from './vendor/vendor-search.pipe';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { ProductSearchPipe } from './product/product-search.pipe';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestLineComponent } from './request/request-line/request-line.component';
import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';
import { RequestReviewListComponent } from './request/request-review-list/request-review-list.component';
import { RequestSearchPipe } from './request/request-search.pipe';
import { BoolDisplayPipe } from './bool-display.pipe';
import { SearchUserPipe } from './search-user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserLoginComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorSearchPipe,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    RequestlineCreateComponent,
    RequestlineEditComponent,
    ProductSearchPipe,
    RequestListComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestLineComponent,
    RequestReviewItemComponent,
    RequestReviewListComponent,
    RequestSearchPipe,
    BoolDisplayPipe,
    SearchUserPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
