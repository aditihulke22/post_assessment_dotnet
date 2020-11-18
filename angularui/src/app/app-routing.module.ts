import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AdminLandingComponent} from './admin-landing/admin-landing.component';
import {ImportDataComponent} from './import-data/import-data.component';
import {ManageCompanyComponent} from './manage-company/manage-company.component';
import {ManageExchangeComponent} from './manage-exchange/manage-exchange.component';
import {UpdateIpoComponent} from './update-ipo/update-ipo.component';
import {ListIpoComponent} from './list-ipo/list-ipo.component';
import {CompareCompanyComponent} from './compare-company/compare-company.component';
import {CompareSectorComponent} from './compare-sector/compare-sector.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import {NewCompanyComponent} from './new-company/new-company.component';
import {NewExchangeComponent} from './new-exchange/new-exchange.component';
import {IpoDetailsComponent} from './ipo-details/ipo-details.component';
import {NewIpoComponent} from './new-ipo/new-ipo.component';
import {ExcelComponent} from './excel/excel.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin-landing', component: AdminLandingComponent},
  {path: 'import-data', component: ImportDataComponent},
  {path: 'manage-company', component: ManageCompanyComponent},
  {path: 'manage-exchange', component: ManageExchangeComponent},
  {path: 'update-ipo', component: UpdateIpoComponent},
  {path: 'user-landing', component: UserLandingComponent},
  {path: 'list-ipo', component: ListIpoComponent},
  {path: 'compare-company', component: CompareCompanyComponent},
  {path: 'compare-sector', component: CompareSectorComponent},
  {path: 'new-company', component: NewCompanyComponent},
  {path: 'new-exchange', component: NewExchangeComponent},
  {path: 'ipo-details', component: IpoDetailsComponent},
  {path: 'new-ipo', component: NewIpoComponent},
  {path: 'excel', component: ExcelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
