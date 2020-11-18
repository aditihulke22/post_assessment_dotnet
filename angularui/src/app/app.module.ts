import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageExchangeComponent } from './manage-exchange/manage-exchange.component';
import { UpdateIpoComponent } from './update-ipo/update-ipo.component';
import { ListIpoComponent } from './list-ipo/list-ipo.component';
import { CompareCompanyComponent } from './compare-company/compare-company.component';
import { CompareSectorComponent } from './compare-sector/compare-sector.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { NewExchangeComponent } from './new-exchange/new-exchange.component';
import { IpoDetailsComponent } from './ipo-details/ipo-details.component';
import { NewIpoComponent } from './new-ipo/new-ipo.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ExcelComponent } from './excel/excel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminLandingComponent,
    UserLandingComponent,
    ImportDataComponent,
    ManageCompanyComponent,
    ManageExchangeComponent,
    UpdateIpoComponent,
    ListIpoComponent,
    CompareCompanyComponent,
    CompareSectorComponent,
    NewCompanyComponent,
    NewExchangeComponent,
    IpoDetailsComponent,
    NewIpoComponent,
    ConfirmationComponent,
    ExcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
