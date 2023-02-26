import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { Packing } from '../models/packing.model';
import { NgForm } from '@angular/forms';
import { Utils } from '../utils/date.utils';
import { PackingService } from '../shared/packing.service';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { AddressService } from '../shared/address.service';
import { Address } from '../models/address.model';

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
    private messageService: MessageService,
    private ship: AddressService 
  ) {
    ship.getAll().subscribe(s=> {
      this.shipTo = s;
      this.shipFrom = s;
    })
    this.readPackingLists();
  }

  readPackingLists() {
    this.database.getAll().subscribe(data => {
      this.packingLists = data;
    })
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
    this.database.delete(this.packingList.key);
    this.clearForm();
  }

  updatePackingList() {
    this.database.update(this.packingList.key, this.packingList);
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
    this.database.delete(this.packingList.key);
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
