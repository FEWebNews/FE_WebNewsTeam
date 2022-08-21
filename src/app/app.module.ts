import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import {HttpClientModule} from "@angular/common/http";
import { ContentComponent } from './content/content.component';
import { AdminComponent } from './admin/admin.component';
import { ThoisuComponent } from './thoisu/thoisu.component';
import { ThegioiComponent } from './thegioi/thegioi.component';
import { KinhdoanhComponent } from './kinhdoanh/kinhdoanh.component';
import { KhoahocComponent } from './khoahoc/khoahoc.component';
import { GiaitriComponent } from './giaitri/giaitri.component';
import { ThethaoComponent } from './thethao/thethao.component';
import { PhapluatComponent } from './phapluat/phapluat.component';
import { GiaoducComponent } from './giaoduc/giaoduc.component';
import { SuckhoeComponent } from './suckhoe/suckhoe.component';
import { DoisongComponent } from './doisong/doisong.component';
import { DulichComponent } from './dulich/dulich.component';
import { SohoaComponent } from './sohoa/sohoa.component';
import { XeComponent } from './xe/xe.component';
import { YkienComponent } from './ykien/ykien.component';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipe/filter.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContentComponent,
    AdminComponent,
    ThoisuComponent,
    ThegioiComponent,
    KinhdoanhComponent,
    KhoahocComponent,
    GiaitriComponent,
    ThethaoComponent,
    PhapluatComponent,
    GiaoducComponent,
    SuckhoeComponent,
    DoisongComponent,
    DulichComponent,
    SohoaComponent,
    XeComponent,
    YkienComponent,
    FilterPipe,
    LoginComponent,
    RegisterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    Ng2SearchPipeModule,
    NgxPaginationModule,

    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyChlY7LAUPB1dNSpZA27i9o95SWNx9h2Uo",
      authDomain: "loginappnews.firebaseapp.com",
      projectId: "loginappnews",
      storageBucket: "loginappnews.appspot.com",
      messagingSenderId: "1017689038903",
      appId: "1:1017689038903:web:5706dab0c33fec4a7f5fb2",
      measurementId: "G-RYT8PSQ65E"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
