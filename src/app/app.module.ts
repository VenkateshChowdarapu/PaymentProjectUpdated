import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { NavitemsComponent } from './navitems/navitems.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionComponent } from './transaction/transaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
     HeaderComponent,
     NavitemsComponent,
     TransactionComponent,
     DashboardComponent,
     HomeComponent,
     HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {
      path:"login",component:LoginComponent  
    },
    {
      path:"transaction", component:TransactionComponent
    },
    {
      path:"dashboard", component:DashboardComponent
    },
    {
      path:"history", component:HistoryComponent
    },
    {
      path:"home", component:HomeComponent
    }
    

  ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
