import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AuthInterceptor } from './shared/authconfig.interceptors';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccoplishedComponent } from './components/accoplished/accoplished.component';
import { AccountComponent } from './components/account/account.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';



//angular modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AuthoNavigativeComponent } from './components/autho-navigative/autho-navigative.component';
import { GetScheduleComponent } from './components/get-schedule/get-schedule.component';
import { SetscheduleComponent } from './components/setschedule/setschedule.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { UpdatescheduleComponent } from './components/updateschedule/updateschedule.component';
import { IndexComponent } from './components/web/index/index.component';
import { AccoplishmodelComponent } from './components/material/accoplishmodel/accoplishmodel.component';
import { AfterDeleteSnackComponent } from './components/material/after-delete-snack/after-delete-snack.component';
import { DeletemodelComponent } from './components/material/deletemodel/deletemodel.component';
import { DirectAddMonComponent } from './components/material/directAddOns/direct-add-mon/direct-add-mon.component';
import { DirectAddTueComponent } from './components/material/directAddOns/direct-add-tue/direct-add-tue.component';
import { DirectAddWedComponent } from './components/material/directAddOns/direct-add-wed/direct-add-wed.component';
import { DirectAddThurComponent } from './components/material/directAddOns/direct-add-thur/direct-add-thur.component';
import { DirectAddFriComponent } from './components/material/directAddOns/direct-add-fri/direct-add-fri.component';
import { DirectAddSatComponent } from './components/material/directAddOns/direct-add-sat/direct-add-sat.component';
import { DirectAddSunComponent } from './components/material/directAddOns/direct-add-sun/direct-add-sun.component';
import { AccomplishedResComponent } from './components/responsive/accomplished-res/accomplished-res.component';
import { AppCompResponsiveComponent } from './components/responsive/app-comp-responsive/app-comp-responsive.component';
import { GetScheduleResComponent } from './components/responsive/get-schedule-res/get-schedule-res.component';
import { LandingPageResComponent } from './components/responsive/landing-page-res/landing-page-res.component';
import { SetScheduleResComponent } from './components/responsive/set-schedule-res/set-schedule-res.component';
import { TodoResComponent } from './components/responsive/todo-res/todo-res.component';
import { AfterDirectAddSnackComponent } from './components/material/after-direct-add-snack/after-direct-add-snack.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AccoplishedComponent,
    AccountComponent,
    AddTodoComponent,
    AuthoNavigativeComponent,
    GetScheduleComponent,
    SetscheduleComponent,
    SidebarComponent,
    ToDoComponent,
    UpdatescheduleComponent,
    IndexComponent,
    AccoplishmodelComponent,
    AfterDeleteSnackComponent,
    DeletemodelComponent,
    DirectAddMonComponent,
    DirectAddTueComponent,
    DirectAddWedComponent,
    DirectAddThurComponent,
    DirectAddFriComponent,
    DirectAddSatComponent,
    DirectAddSunComponent,
    AccomplishedResComponent,
    AppCompResponsiveComponent,
    GetScheduleResComponent,
    LandingPageResComponent,
    SetScheduleResComponent,
    TodoResComponent,
    AfterDirectAddSnackComponent,
    SigninComponent,
    SignupComponent
  ],
  entryComponents: [
    AccountComponent, DeletemodelComponent, AccoplishmodelComponent,
    DirectAddMonComponent, DirectAddTueComponent, DirectAddWedComponent, DirectAddThurComponent, DirectAddFriComponent, DirectAddFriComponent, DirectAddSatComponent, DirectAddSunComponent,
    AfterDeleteSnackComponent,AfterDirectAddSnackComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    
    MatCheckboxModule,
    MatCheckboxModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
