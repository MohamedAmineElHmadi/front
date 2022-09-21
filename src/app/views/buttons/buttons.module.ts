import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonsComponent } from './buttons.component';
import { BrandButtonsComponent } from './brand-buttons.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownsComponent } from './dropdowns.component';

// Buttons Routing
import { ButtonsRoutingModule } from './buttons-routing.module';
import {AngularFileViewerModule} from "@taldor-ltd/angular-file-viewer";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {ChartProfileComponent} from "../../components/chart-profile/chart-profile.component";
import {ChartJSRoutingModule} from "../chartjs/chartjs-routing.module";
import {ChartsModule} from "ng2-charts";

// Angular

@NgModule({
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    PdfViewerModule,
    ChartJSRoutingModule,
    ChartsModule

  ],
  declarations: [
    ButtonsComponent,
    DropdownsComponent,
    BrandButtonsComponent,

  ]
})
export class ButtonsModule { }
