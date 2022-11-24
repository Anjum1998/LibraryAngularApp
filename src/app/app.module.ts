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

@NgModule({
  declarations: [
    AppComponent,
    AdministratorLoginComponent,
    RegisterComponent,
    LoginComponent,
    BookEntryComponent,
    BookViewComponent,
    BookSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
