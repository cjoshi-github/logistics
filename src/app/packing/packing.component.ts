import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { Packing } from '../models/packing.model';
import { NgForm } from '@angular/forms';
import { Address, Shipper } from '../utils/shipFrom.utils';
import { Utils } from '../utils/date.utils';
import { PackingService } from '../shared/packing.service';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-packing',
  templateUrl: './packing.component.html',
  styleUrls: ['./packing.component.scss'],
})
export class PackingComponent {
  protected packingList: Packing = new Packing();
  protected packingLists: Packing[] = [];

  shipFrom: Address[] = [];
  shipTo: Address[] = [];

  constructor(
    private database: PackingService,
    private messageService: MessageService
  ) {
    this.shipFrom = new Shipper().getShipFrom();
    this.shipTo = new Shipper().getShipFrom();
    this.readPackingLists();
  }

  readPackingLists() {
    this.database
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((data) => {
        this.packingLists = data;
      });
  }

  createPackingList(form: NgForm) {
    this.packingList = form.value;
    this.packingList.docDate = form.value.docDate.toString();
    this.packingList.isOracleGenerate = false;
    this.database.create(this.packingList);
    this.messageService.add({
      severity: 'success',
      summary: 'Created',
      detail: 
          'Packing List Created...',
    });
    this.clearForm();
  }

  deletePackingList() {
    this.database.delete(String(this.packingList.key));
    this.clearForm();
  }

  updatePackingList() {
    this.database.update(String(this.packingList.key), this.packingList);
    this.messageService.add({
      severity: 'info',
      summary: 'Updated',
      detail:
        'Packing List Updated...',
    });
    this.clearForm();
  }
  clearForm(table?: Table) {
    this.packingList = {};
    table?.clear();
  }
  onRowSelect(event: any) {
    this.packingList.docDate = Utils.anyToDate(event.data.docDate);
  }

  onConfirm() {
    this.database.delete(String(this.packingList.key));
    this.messageService.clear('c');
    this.messageService.add({
      severity: 'error',
      summary: 'Deleted',
      detail:
        'Packing List Deleted...',
    });
    this.clearForm();
  }

  onReject() {
    this.messageService.clear('c');
  }
  showConfirm() {
    this.messageService.clear();
    this.messageService.add({
      key: 'c',
      sticky: true,
      severity: 'error',
      summary: 'Are you sure?',
      detail: 'Confirm to delete packing list',
    });
  }
}
