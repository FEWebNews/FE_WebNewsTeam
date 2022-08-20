import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    YkienComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
