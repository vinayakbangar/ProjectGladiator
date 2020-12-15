import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddbusComponent } from './modifybus/addbus/addbus.component';
import { DisplaybusComponent } from './modifybus/displaybus/displaybus.component';
import { ModifybusComponent } from './modifybus/modifybus.component';
import { AddrouteComponent } from './modifyroute/addroute/addroute.component';
import { DisplayroutesComponent } from './modifyroute/displayroutes/displayroutes.component';
import { ModifyrouteComponent } from './modifyroute/modifyroute.component';
import { UpdaterouteComponent } from './modifyroute/updateroute/updateroute.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SearchBusComponentComponent } from './search-bus-component/search-bus-component.component';
import { SignupComponent } from './signup/signup.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AddttComponent } from './timetable/addtt/addtt.component';
import { DisplayttComponent } from './timetable/displaytt/displaytt.component';
import { TimetableComponent } from './timetable/timetable.component';
import { UpdatettComponent } from './timetable/updatett/updatett.component';
import { TrialComponent } from './trial/trial.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';

const routes: Routes = [
{ path: 'dashboard/:email', component: DashboardComponent,
  children:[{path: 'profile', component: ProfileComponent},
            { path: 'bookinghistory', component:BookingHistoryComponent},
            {path: 'cancelTicket', component: CancelTicketComponent},
            {path: 'addFeedback', component: UserFeedbackComponent}]},
// {path: 'userprofile', component: UserProfileComponent},
//{path: 'profile', component: ProfileComponent},
{ path: 'trial', component: TrialComponent},
{ path: '', component: HomeComponent},
{ path: 'home', component: HomeComponent},
{ path: 'searchbus', component: SearchBusComponentComponent},
{ path: 'checkStatus', component: CheckStatusComponent},
{ path: 'resetPwd', component: ResetPassComponent},
{ path: 'changePwd', component: ChangePassComponent},
// children:[{path: 'ticket', component: TicketsComponent}]},
{path: 'ticket/:tid', component: TicketsComponent},
 { path: 'login', component: LoginComponent},
 { path: 'signup', component: SignupComponent},
 { path: 'adminlogin', component: AdminLoginComponent},
 { path: 'admindashboard', component: AdminDashboardComponent,
    children:[{ path: 'modifyBus', component: ModifybusComponent}, 
              { path: 'modifyRoute', component: ModifyrouteComponent},
              { path: 'reviews', component: ReviewsComponent},
              { path: 'feedback', component: FeedbackComponent},
              { path: 'timetable', component: TimetableComponent},
              { path: 'addbus', component: AddbusComponent},
              { path: 'addroute', component: AddrouteComponent},
              { path: 'displayroutes', component: DisplayroutesComponent},
              { path: 'updateroutes', component:UpdaterouteComponent },
              { path: 'displaybus', component:DisplaybusComponent},
              { path: 'displaytt', component:DisplayttComponent},
              { path: 'addtt', component:AddttComponent},
              { path: 'updatett', component:UpdatettComponent}]},
              { path: '**', component: HomeComponent},


// { path: 'timetable', component: TimetableComponent},
//  { path: 'modifyBus', component: ModifybusComponent},
//  { path: 'modifyRoute', component: ModifyrouteComponent},
//  { path: 'reviews', component: ReviewsComponent},
//  { path: 'addbus', component: AddbusComponent},
//  { path: 'addroute', component: AddrouteComponent},
//  { path: 'displayroutes', component: DisplayroutesComponent},
//  { path: 'updateroutes/:id', component:UpdaterouteComponent },

//  { path: 'displayroutes/:routeId', component: DisplayroutesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
