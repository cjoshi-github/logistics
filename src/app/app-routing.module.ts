import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutorialComponent } from './crud/components/add-tutorial/add-tutorial.component';
import { TutorialsListComponent } from './crud/components/tutorials-list/tutorials-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OracleComponent } from './oracle/oracle.component';
import { PackingComponent } from './packing/packing.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { AddressesComponent } from './addresses/addresses.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'packing', component: PackingComponent },
  { path: 'oracle', component: OracleComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'shipment', component: ShipmentComponent },
  { path: 'addresses', component: AddressesComponent },
  { path: 't', component: TutorialsListComponent },
  { path: 'add-t', component: AddTutorialComponent },
  { path: 'test', component: TestComponent },
  { path: 'test2', component: Test2Component },
  { path: 'test3', component: Test3Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
