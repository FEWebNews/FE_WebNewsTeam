import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from './content/content.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from "./admin/admin.component";
import {ThoisuComponent} from "./thoisu/thoisu.component";
import {ThegioiComponent} from "./thegioi/thegioi.component";
import {KinhdoanhComponent} from "./kinhdoanh/kinhdoanh.component";
import {KhoahocComponent} from "./khoahoc/khoahoc.component";
import {GiaitriComponent} from "./giaitri/giaitri.component";
import {ThethaoComponent} from "./thethao/thethao.component";
import {PhapluatComponent} from "./phapluat/phapluat.component";
import {GiaoducComponent} from "./giaoduc/giaoduc.component";
import {SuckhoeComponent} from "./suckhoe/suckhoe.component";
import {DoisongComponent} from "./doisong/doisong.component";
import {DulichComponent} from "./dulich/dulich.component";
import {SohoaComponent} from "./sohoa/sohoa.component";
import {XeComponent} from "./xe/xe.component";
import {YkienComponent} from "./ykien/ykien.component";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'content/:component/:guid', component: ContentComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'thoisu', component: ThoisuComponent},
  {path: 'thegioi', component: ThegioiComponent},
  {path: 'kinhdoanh', component: KinhdoanhComponent},
  {path: 'khoahoc', component: KhoahocComponent},
  {path: 'giaitri', component: GiaitriComponent},
  {path: 'thethao', component: ThethaoComponent},
  {path: 'phapluat', component: PhapluatComponent},
  {path: 'giaoduc', component: GiaoducComponent},
  {path: 'suckhoe', component: SuckhoeComponent},
  {path: 'doisong', component: DoisongComponent},
  {path: 'dulich', component: DulichComponent},
  {path: 'sohoa', component: SohoaComponent},
  {path: 'xe', component: XeComponent},
  {path: 'ykien', component: YkienComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
