import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SigninComponent } from './components/signin/signin.component';
// import { SignupComponent } from './components/signup/signup.component';
// import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { Setsechedule } from './components/setsechedule/setsechedule.component';
import { GetScheduleComponent } from './components/get-schedule/get-schedule.component';
import { UpdatescheduleComponent } from './components/updateschedule/updateschedule.component'
import { SetscheduleComponent } from './components/setschedule/setschedule.component';
import { AccoplishedComponent } from './components/accoplished/accoplished.component'
import { AuthGuard } from "./shared/auth.guard";
import { IndexComponent } from './components/web/index/index.component';

import { AppComponent } from './app.component';
import { ToDoComponent } from './components/to-do/to-do.component';
// import { SnackBarExComponent } from './components/material/snack-bar-ex/snack-bar-ex.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
// import { BottomSheetComponent } from './components/material/bottom-sheet/bottom-sheet.component';
// import { AvatarComponent } from './components/avatar/avatar.component';
import { AuthoNavigativeComponent } from './components/autho-navigative/autho-navigative.component';









const routes: Routes = [
  // { path: 'home', redirectTo: 'home' },
  // { path: 'inschedule',component: AppComponent},

 
  { path: 'inschedule', component: AuthoNavigativeComponent},

  // { path: 'log-in', component: SigninComponent },
  // { path: 'log-in', component: SigninComponent },
  { path: 'home/inschedule', component: AuthoNavigativeComponent},
  // { path: 'sign-up', component: SignupComponent },
  { path: 'schedule-pg', component: SidebarComponent},

  { path: 'get-schedule', component: GetScheduleComponent},
  { path: 'get-schedule/update-schedule/:id', component: UpdatescheduleComponent},
  { path: 'set-schedule', component: SetscheduleComponent},
  { path: 'home', component: IndexComponent},
  { path: 'get-accoplished', component: AccoplishedComponent },
  // { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'to-do',component:ToDoComponent},
  // { path: 'snack-bar', component:SnackBarExComponent},
  { path: 'add-todo',component:AddTodoComponent},
  { path: 'to-do/add-todo',component:AddTodoComponent},
  { path: 'to-do/add-todo/to-do',component:ToDoComponent},
  // { path: 'bottom-sheet',component:BottomSheetComponent},
  // { path: 'avatar',component:AvatarComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
