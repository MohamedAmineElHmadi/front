import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {BrandButtonsComponent} from "./views/buttons/brand-buttons.component";
import {DropdownsComponent} from "./views/buttons/dropdowns.component";
import {ButtonsComponent} from "./views/buttons/buttons.component";
import {ChartJSComponent} from "./views/chartjs/chartjs.component";

import {FormCourseComponent} from "./components/Course/form-course/form-course.component";
import {AddUeComponent} from "./components/Ue/add-ue/add-ue.component";
import {FormUeComponent} from "./components/Ue/form-ue/form-ue.component";
import {EditUeComponent} from "./components/Ue/edit-ue/edit-ue.component";
import {EditCourseComponent} from "./components/Course/edit-course/edit-course.component";
import {AddCourseComponent} from "./components/Course/add-course/add-course.component";
import {AddLienComponent} from "./components/LienUtile/add-lien/add-lien.component";
import {FormLienComponent} from "./components/LienUtile/form-lien/form-lien.component";
import {ApproveanswerComponent} from "./views/chartjs/approveanswer/approveanswer.component";
import {AnswersComponent} from "./components/answers/answers.component";
import {QuestionsComponent} from "./components/questions/questions.component";
import {AnswersDetailsComponent} from "./components/answers-details/answers-details.component";
import {AddQuestionComponent} from "./components/add-question/add-question.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {ChartProfileComponent} from "./components/chart-profile/chart-profile.component";
import {OptionsComponent} from "./views/options/options.component";
import {ProfilComponent} from "./views/profil/profil.component";
import {SingleUserComponent} from "./views/users/single-user/single-user.component";
import {AddOptionComponent} from "./views/options/add-option/add-option.component";
import { EditLienComponent } from './components/LienUtile/edit-lien/edit-lien.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },







  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },

  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [

      {
        path: 'users/user/:id',
        component:SingleUserComponent ,
        data: {
          title: 'user'
        }
      },
      {
        path: 'profil',
        component: ProfilComponent,
        data: {
          title: 'usersprofil'
        }
      },
      {
        path: 'options',
        component: OptionsComponent,
        data: {
          title: 'options'
        }
      },
      {
        path: 'add-option',
        component: AddOptionComponent,
        data: {
          title: 'options'
        }
      },
      {
        path: 'userprofile',
        component:ChartProfileComponent,
        data: {
          title: 'User Profile'
        }
      },

      {
        path: 'question/addquestion',
        component: BrandButtonsComponent,
        data: {
          title: 'new Question'
        }
      },
      {
        path: 'question/Teacherquestions',
        component: ApproveanswerComponent,
        data: {
          title: 'Teacher Questions'
        }
      },
      {
        path: 'question/studentQuestions',
        component: ApproveanswerComponent,
        data: {
          title: 'Teacher Questions'
        }
      },
      {
        path: 'answers/:id',
        component: DropdownsComponent,
        data: {
          title: 'answers'
        }
      },

      {
        path: 'question/questions',
      component:ButtonsComponent,
        data: {
          title: 'questions'
        }
      },

      {
        path: 'approveanswer/:id',
        component:ChartJSComponent,
        data: {
          title: 'approve answer'
        }
      },
      {
        path: 'edit-lienUtile/:id',
        component:EditLienComponent
      },
      {
        path: 'lienUtile',
        component:FormLienComponent
      },
      {
        path: 'add-lienUtile',
        component:AddLienComponent
      },
      {
        path: 'add-course',
        component:AddCourseComponent
      },
      {
        path: 'edit-course/:id',
        component:EditCourseComponent
      },
      {
        path: 'Courses',
        component:FormCourseComponent
      }, {
        path: 'add-ue',
        component:AddUeComponent
      },
      {
        path: 'edit-ue/:id',
        component:EditUeComponent
      },
      {
        path: 'UE',
        component:FormUeComponent
      },


      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'question',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
