import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackinglistAddComponent } from './packinglist-add/packinglist-add.component';
import { PackinglistComponent } from './packinglist.component';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToolbarModule } from 'primeng/toolbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';


@NgModule({
  declarations: [
    PackinglistAddComponent,
    PackinglistComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,

    ButtonModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TimelineModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputNumberModule,
    ToolbarModule,
    MultiSelectModule,
    SelectButtonModule,
  ],
  exports: [
    PackinglistAddComponent,
  ]
})
export class PackinglistModule { }
