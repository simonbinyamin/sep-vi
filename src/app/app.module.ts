import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
        { path: '', component: LoginComponent, pathMatch: 'full' },
        { path: 'Login', component: LoginComponent},
        { path: 'AddEvent', component: AddEventComponent},

    ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
