import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Oracle } from '../oracle/oracle.model';
import { OracleService } from '../oracle/oracle.service';
import { Invoice } from './invoice.model';
import { InvoiceService } from './invoice.service';
import { map } from 'rxjs/internal/operators/map';
import { Utils } from '../utils/date.utils';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent {
  
  invoice: Invoice = new Invoice();
  oracleList: Oracle[] = [];
  selectedOracle: Oracle[] = [];

  constructor(
    private oracleService: OracleService,
    private invoiceService: InvoiceService
  ) {
    this.readOracleList();
  }
  readOracleList() {
    this.oracleService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((data) => {
        this.oracleList = data;
      });
  }
  createInvoice(form: NgForm) {
    let tempInvoice: Invoice;
    tempInvoice = form.value;
    tempInvoice.date = Utils.anyToDate(tempInvoice.date);
    this.invoiceService.create(tempInvoice);
  }
}
