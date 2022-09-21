import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import {UserQuestion} from "../../Entities/user-question";
import {QuestionServiceService} from "../../Service/question-service.service";
import {TagServiceService} from "../../Service/tag-service.service";

@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent implements OnInit {
  userquestions:UserQuestion[];
  tag:String;
  role:any;
  constructor(@Inject(DOCUMENT) private _document: any,private service:QuestionServiceService,private tagService:TagServiceService) {}

  public themeColors(): void {
    Array.from(this._document.querySelectorAll('.theme-color')).forEach((el: HTMLElement) => {
      const background = getStyle('background-color', el);
      const table = this._document.createElement('table');
      table.innerHTML = `
        <table class="w-100">
          <tr>
            <td class="text-muted">HEX:</td>
            <td class="font-weight-bold">${rgbToHex(background)}</td>
          </tr>
          <tr>
            <td class="text-muted">RGB:</td>
            <td class="font-weight-bold">${background}</td>
          </tr>
        </table>
      `;
      el.parentNode.appendChild(table);
    });
  }

  ngOnInit(): void {
    this.role="teacher"
    this.service.getTeachersQuestion().subscribe(data=>{
      this.userquestions=data;
    })
    this.themeColors();
  }

  searchByTag(){

    this.tagService.getTeachersQuestionByTag(this.tag).subscribe(questions=>{
      this.userquestions=questions;
    })

  }
}
