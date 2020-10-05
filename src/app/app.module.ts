import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { FeasibilityReviewComponent } from './feasibility-review/feasibility-review.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EventListComponent } from './event-list/event-list.component';
import { RecruitmentRequestComponent } from './recruitment-request/recruitment-request.component';
import { RecruitmentListComponent } from './recruitment-list/recruitment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddEventComponent,
    FeasibilityReviewComponent,
    EventListComponent,
    RecruitmentRequestComponent,
    RecruitmentListComponent
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
        { path: 'EventList', component: EventListComponent},
        { path: 'Feasable', component: FeasibilityReviewComponent},
        { path: 'Rec', component: RecruitmentRequestComponent},
        { path: 'RecList', component: RecruitmentListComponent},


    ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
