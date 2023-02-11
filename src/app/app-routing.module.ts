import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutorialComponent } from './crud/components/add-tutorial/add-tutorial.component';
import { TutorialsListComponent } from './crud/components/tutorials-list/tutorials-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OracleComponent } from './oracle/oracle.component';
import { PackingComponent } from './packing/packing.component';
import { ShipmentComponent } from './shipment/shipment.component';

const routes: Routes = [
  { path: '', redirectTo: 'packing', pathMatch: 'full' },
  { path: 'packing', component: PackingComponent },
  { path: 'oracle', component: OracleComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'shipment', component: ShipmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
