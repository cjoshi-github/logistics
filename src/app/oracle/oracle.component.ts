import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Packing } from '../models/packing.model';
import { PackingService } from '../shared/packing.service';
import { Oracle } from '../models/oracle.model';
import { map } from 'rxjs/internal/operators/map';
import { OracleService } from '../shared/oracle.service';

@Component({
  selector: 'app-oracle',
  templateUrl: './oracle.component.html',
  styleUrls: ['./oracle.component.scss']
})
export class OracleComponent {
  oracle: Oracle = new Oracle();

  protected packingLists: Packing[] = [];
  protected selectedPacking: Packing[] = []; 
  protected oracleList: Oracle[] = [];
  protected selectedOracle: Oracle = new Oracle();
  protected totalQty: number=0;

  protected itemTypes = [
    {type: "Merchandise"},
    {type: "Non-Merchandise"}
  ];
  protected selectedItemType: String = '';

  constructor(private packingService: PackingService, private oracleService: OracleService){
    this.readPackingLists();
    this.readOracleLists();
  }
  readPackingLists() {
    this.packingService.getAll().snapshotChanges()
    .pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))  
      )
    )
    .subscribe((data) => {
      this.packingLists = data;
    }); 
  }
  readOracleLists() {
    this.oracleService.getAll().snapshotChanges()
    .pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))  
      )
    )
    .subscribe((data) => {
      this.oracleList = data;
    }); 
  }
  readSelectedOracleList(event: any) {
    this.oracleList = event.data;
  }
  createOracle(form: NgForm) {
    this.oracleService.create(form.value);
  }
}
