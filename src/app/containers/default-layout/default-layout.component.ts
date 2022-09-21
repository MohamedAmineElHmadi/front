import {Component} from '@angular/core';

import { Router } from '@angular/router';
import {AuthService} from "src/app/Service/auth.service"
import { UsersServicesService } from 'src/app/Service/users-services.service';
import { User } from 'src/app/Entities/user';
import {INavData} from "@coreui/angular";
import {QuestionServiceService} from "../../Service/question-service.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
   navItem: INavData[]=[];
  user:User ;
  role:any;
  src:any
  constructor(private router : Router ,private userService:UsersServicesService,private service:QuestionServiceService ){

  }
  ngOnInit() :void {



    this.userService.getinformations().subscribe(data => {
        this.user=data;
      console.log(data)
        if (data.role == "user") {
          this.navItem = [


            {

              name: 'profil',

              url: '/profil',
              icon: 'icon-user'
            },
            {
              title: true,
              name: 'Question'
            },

            {
              name: 'Questions',
              url: '/question',
              icon: 'icon-cursor',
              children: [
                {
                  name: 'All Questions',
                  url: '/question/studentQuestions',
                  icon: 'icon-cursor'
                },

                {
                  name: 'new Question',
                  url: '/question/addquestion',
                  icon: 'icon-cursor'
                },


              ]

            },

            {
              name: 'User Profile',
              url: '/userprofile',
              icon: 'icon-cursor',
            },

            {
              divider: true
            },
            {
              title: true,
              name: 'Extras',
            },


            {
              name: 'Courses',
              url: '/Courses',
              icon: 'icon-pencil'
            },
            {
              name: 'UE',
              url: '/UE',
              icon: 'icon-pencil'
            },

            {
              name: 'lien Utile',
              url: '/lienUtile',
              icon: 'icon-pencil'
            }


          ];
        } else if (data.role == "teacher") {
          this.navItem = [

            {

              name: 'Users',

              url: '/users',
              icon: 'icon-people'
            },
            {

              name: 'profil',

              url: '/profil',
              icon: 'icon-user'
            },
            {
              name: 'Options',
              url: '/options',
              icon: 'icon-options',
              children: [
                {

                  name: 'all',

                  url: '/options',
                  icon: 'icon-arrow-right'
                },
                {

                  name: 'add',

                  url: '/add-option',
                  icon: 'icon-arrow-right'
                },
              ]
            },


            {
              title: true,
              name: 'Question'
            },

            {
              name: 'Questions',
              url: '/question',
              icon: 'icon-cursor',
              children: [
                {
                  name: 'All Questions',
                  url: '/question/questions',
                  icon: 'icon-cursor'
                },
                {
                  name: 'Teacher Questions',
                  url: '/question/Teacherquestions',
                  icon: 'icon-cursor'
                },
                {
                  name: 'new Question',
                  url: '/question/addquestion',
                  icon: 'icon-cursor'
                },


              ]

            },


            {
              name: 'User Profile',
              url: '/userprofile',
              icon: 'icon-cursor',
            },
            {
              divider: true
            },
            {
              title: true,
              name: 'Extras',
            },


            {
              name: 'Courses',
              url: '/Courses',
              icon: 'icon-pencil'
            },
            {
              name: 'UE',
              url: '/UE',
              icon: 'icon-pencil'
            },

            {
              name: 'lien Utile',
              url: '/lienUtile',
              icon: 'icon-pencil'
            }


          ];
        } else {
          this.navItem = [

            {

              name: 'Users',

              url: '/users',
              icon: 'icon-people'
            },
            {

              name: 'profil',

              url: '/profil',
              icon: 'icon-user'
            },
            {
              name: 'Options',
              url: '/options',
              icon: 'icon-options',
              children: [
                {

                  name: 'all',

                  url: '/options',
                  icon: 'icon-arrow-right'
                },
                {

                  name: 'add',

                  url: '/add-option',
                  icon: 'icon-arrow-right'
                },
              ]
            },


            {
              title: true,
              name: 'Question'
            },

            {
              name: 'Questions',
              url: '/question',
              icon: 'icon-cursor',
              children: [
                {
                  name: 'All Questions',
                  url: '/question/questions',
                  icon: 'icon-cursor'
                },
                {
                  name: 'Teacher Questions',
                  url: '/question/Teacherquestions',
                  icon: 'icon-cursor'
                },
                {
                  name: 'new Question',
                  url: '/question/addquestion',
                  icon: 'icon-cursor'
                },


              ]

            },


            {
              name: 'User Profile',
              url: '/userprofile',
              icon: 'icon-cursor',
            },
            {
              divider: true
            },
            {
              title: true,
              name: 'Extras',
            },


            {
              name: 'Courses',
              url: '/Courses',
              icon: 'icon-pencil'
            },
            {
              name: 'UE',
              url: '/UE',
              icon: 'icon-pencil'
            },

            {
              name: 'lien Utile',
              url: '/lienUtile',
              icon: 'icon-pencil'
            }


          ];
        }

  if(data.image != undefined){
    this.service.DownloadImage(data.image).subscribe(src=>{
      this.src=src;
      console.log(src);
    })


      }
      else{
    this.service.DownloadImage("avatar.jpg").subscribe(src=>{
      this.src=src;
      console.log(src);
    })

  }
    }
    )
    console.log(this.user)
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/login"])

  }
  getimage(){
    this.userService.getinformations().subscribe(
      (data:User) => this.user=data
    )

  }
}
