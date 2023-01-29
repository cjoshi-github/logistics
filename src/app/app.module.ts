import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//*****************Core**************************/
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
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
import { PackingListsComponent } from './packing-lists/packing-lists.component';
import { PackingListComponent } from './packing-lists/packing-list/packing-list.component';
import { PackinglistsComponent } from './packinglists/packinglists.component';
import { PackingViewComponent } from './packing-lists/packing-view/packing-view.component';
import { PackingListViewComponent } from './packing-lists/packing-list-view/packing-list-view.component';
import { PackingListAddComponent } from './packing-lists/packing-list-add/packing-list-add.component';

//*****************Component**************************/

@NgModule({
  declarations: [AppComponent, PackingListsComponent, PackingListComponent, PackinglistsComponent, PackingViewComponent, PackingListViewComponent, PackingListAddComponent],
  imports: [
    //core
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RippleModule,
    FormsModule,

    //Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,

    //Component
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
