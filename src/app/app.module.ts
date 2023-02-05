import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {enableProdMode} from '@angular/core';

//*****************Core**************************/
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//*****************Core**************************/

//*****************Firebase**************************/
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
//*****************Firebase**************************/


//*****************Component**************************/

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToolbarModule } from 'primeng/toolbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CrudModule } from './crud/crud.module';


//*****************Component**************************/

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    //core
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RippleModule,
    FormsModule,
    ReactiveFormsModule,

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,

    //Component
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
    CrudModule,
  ],
  providers: [],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
