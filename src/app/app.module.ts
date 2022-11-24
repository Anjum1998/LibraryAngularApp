import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministratorLoginComponent } from './administrator-login/administrator-login.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule, Routes } from '@angular/router';
const myRoute:Routes=[
  {
    path:"",
    component:AdministratorLoginComponent
  },
  {
    path:"entry",
    component:BookEntryComponent
  },
  {
    path:"view",
    component:BookViewComponent
  },
  {
    path:"search",
    component:BookSearchComponent
  },
  {
    path:"edit",
    component:BookEditComponent
  },
  {
    path:"delete",
    component:BookDeleteComponent
  },
  {
    path:"issue",
    component:BookIssueComponent
    
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdministratorLoginComponent,
    RegisterComponent,
    LoginComponent,
    BookEntryComponent,
    BookViewComponent,
    BookSearchComponent,
    BookEditComponent,
    BookDeleteComponent,
    BookIssueComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
