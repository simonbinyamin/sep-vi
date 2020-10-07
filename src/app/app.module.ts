import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EventListComponent } from './event-list/event-list.component';
import { RecruitmentRequestComponent } from './recruitment-request/recruitment-request.component';
import { RecruitmentListComponent } from './recruitment-list/recruitment-list.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { FinancialRequestComponent } from './financial-request/financial-request.component';
import { FinancialListComponent } from './financial-list/financial-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddEventComponent,
    EventListComponent,
    RecruitmentRequestComponent,
    RecruitmentListComponent,
    LoggedInComponent,
    FinancialRequestComponent,
    FinancialListComponent,
    AddTaskComponent,
    TaskListComponent
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
        { path: 'Rec', component: RecruitmentRequestComponent},
        { path: 'RecList', component: RecruitmentListComponent},
        { path: 'LoggedIn', component: LoggedInComponent},
        { path: 'FinRec', component: FinancialRequestComponent},
        { path: 'FinList', component: FinancialListComponent},
        { path: 'AddTask', component: AddTaskComponent},
        { path: 'TaskList', component: TaskListComponent},


    ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
