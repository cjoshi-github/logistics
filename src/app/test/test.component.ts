import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  packings: any[];
  oracles: any[];

  constructor(private firebaseService: TestService) {}


  async ngOnInit() {
    this.packings = await this.firebaseService.getPackings(); //getting sync packing list 
    this.oracles = await this.firebaseService.getOracles();   ////getting sync oracle list
    this.oracles = this.getPackingLists(this.oracles,this.packings);
  }

  getPackingLists(oracles, packings) {
    oracles.forEach(oracle => {
      oracle.packings = []; //creating new filed called packing inside the each oracle 
      oracle.pl.forEach(id => {
        const packing = packings.find(p => p.id === id);
        packing.oracleNo = oracle.test
        if (packing) {
          oracle.packings.push(packing);
        }
      });
    });
    return oracles;
  }
}
