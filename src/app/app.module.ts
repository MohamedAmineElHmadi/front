import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LocationStrategy, HashLocationStrategy, CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ImageCropperModule} from "ngx-image-cropper";
import {FormsModule, NgModel, ReactiveFormsModule} from "@angular/forms";

import {AddCourseComponent} from "./components/Course/add-course/add-course.component";
import {EditCourseComponent} from "./components/Course/edit-course/edit-course.component";
import {FormCourseComponent} from "./components/Course/form-course/form-course.component";
import {AddLienComponent} from "./components/LienUtile/add-lien/add-lien.component";
import {EditLienComponent} from "./components/LienUtile/edit-lien/edit-lien.component";
import {FormLienComponent} from "./components/LienUtile/form-lien/form-lien.component";
import {AddUeComponent} from "./components/Ue/add-ue/add-ue.component";
import {EditUeComponent} from "./components/Ue/edit-ue/edit-ue.component";
import {FormUeComponent} from "./components/Ue/form-ue/form-ue.component";
import {CourseFilterPipePipe} from "./components/Course/course-filter-pipe.pipe";
import {LienFilterPipe} from "./components/LienUtile/lien-filter.pipe";
import {UeFilterPipe} from "./components/Ue/ue-filter.pipe";
import { QuestionsComponent } from './components/questions/questions.component';
import {ButtonsRoutingModule} from "./views/buttons/buttons-routing.module";
import {PdfViewerModule} from "ng2-pdf-viewer";
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { AnswersComponent } from './components/answers/answers.component';
import { AnswersDetailsComponent } from './components/answers-details/answers-details.component';
import {ApproveanswerComponent} from "./components/approveanswer/approveanswer.component";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ChartProfileComponent } from './components/chart-profile/chart-profile.component';
import {UsersComponent} from "./views/users/users.component";
import {OptionsComponent} from "./views/options/options.component";
import {AddOptionComponent} from "./views/options/add-option/add-option.component";
import {SingleUserComponent} from "./views/users/single-user/single-user.component";
import {ProfilComponent} from "./views/profil/profil.component";
import {AuthInterceptorInterceptor} from "./interceptors/auth-interceptor.interceptor";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    HttpClientModule,
    ImageCropperModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    PdfViewerModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,

    AddCourseComponent,
    EditCourseComponent,
    FormCourseComponent,
    AddLienComponent,
    EditLienComponent,
    FormLienComponent,
    AddUeComponent,
    EditUeComponent,
    FormUeComponent,
    CourseFilterPipePipe,
    LienFilterPipe,
    UeFilterPipe,
    QuestionsComponent,
    AddQuestionComponent,
    AnswersComponent,
    AnswersDetailsComponent,
    ApproveanswerComponent,
    UserProfileComponent,
    ChartProfileComponent,
    UsersComponent,
    OptionsComponent,
    AddOptionComponent,
    SingleUserComponent,
    ProfilComponent


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
