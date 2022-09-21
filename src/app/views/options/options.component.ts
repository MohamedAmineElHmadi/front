import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/Entities/options';
import { OptionsService } from 'src/app/Service/options.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  options:Option[];
  constructor(private optionsService:OptionsService,private router : Router) { }

  ngOnInit(): void {
    this.optionsService.getOptions().subscribe(
      (data:Option[]) => this.options=data)
  }
  delete(id:number){
   this.optionsService.delete(id).subscribe()
   this.router.navigate(["/theme/options"]);
  }
}
