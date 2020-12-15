import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TimetableComponent } from './timetable/timetable.component';
import { ModifybusComponent } from './modifybus/modifybus.component';
import { ModifyrouteComponent } from './modifyroute/modifyroute.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AddbusComponent } from './modifybus/addbus/addbus.component';
import { AddrouteComponent } from './modifyroute/addroute/addroute.component';
import { DisplayroutesComponent } from './modifyroute/displayroutes/displayroutes.component';
import { UpdaterouteComponent } from './modifyroute/updateroute/updateroute.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DisplaybusComponent } from './modifybus/displaybus/displaybus.component';
import { UpdatettComponent } from './timetable/updatett/updatett.component';
import { AddttComponent } from './timetable/addtt/addtt.component';
import { DisplayttComponent } from './timetable/displaytt/displaytt.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { SearchBusComponentComponent } from './search-bus-component/search-bus-component.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { TrialComponent } from './trial/trial.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { ChangePassComponent } from './change-pass/change-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    TicketsComponent,
    ProfileComponent,
    AdminDashboardComponent,
    TimetableComponent,
    ModifybusComponent,
    ModifyrouteComponent,
    FooterComponent,
    HeaderComponent,
    SignupComponent,
    ReviewsComponent,
    AddbusComponent,
    AddrouteComponent,
    DisplayroutesComponent,
    UpdaterouteComponent,
    AdminLoginComponent,
    DisplaybusComponent,
    UpdatettComponent,
    AddttComponent,
    DisplayttComponent,
    BookingHistoryComponent,
    SearchBusComponentComponent,
    FeedbackComponent,
    CancelTicketComponent,
    UserFeedbackComponent,
    CheckStatusComponent,
    TrialComponent,
    ResetPassComponent,
    ChangePassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
