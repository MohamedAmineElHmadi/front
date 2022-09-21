import { INavData } from '@coreui/angular';
import {UsersServicesService} from "./Service/users-services.service";
import {User} from "./Entities/user";


let navItem: INavData[]=[];
if(sessionStorage.getItem("role") != undefined){
if(sessionStorage.getItem("role")=="user"){
   navItem = [


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



];}
else if(sessionStorage.getItem("role")=="teacher"){
   navItem = [

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

else{
  navItem = [

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
}
export const navItems:INavData[]=navItem;
