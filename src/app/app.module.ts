import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { FeasibilityReviewComponent } from './feasibility-review/feasibility-review.component';
import { BudgetReviewComponent } from './budget-review/budget-review.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddEventComponent,
    FeasibilityReviewComponent,
    BudgetReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
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
