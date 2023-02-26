import { Component } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { Test2Service } from './test2.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
})
export class Test2Component {
  packings: any[];
  oracles: any[];

  constructor(private firebaseService: Test2Service) {}

  ngOnInit() {
    const packings$ = this.firebaseService.getPackings();
    const oracles$ = this.firebaseService.getOracles();

    combineLatest([packings$, oracles$])
      .pipe(
        map(([packings, oracles]) => {
          return oracles.map((oracle) => {
            const sortedPackings = packings.filter((p) =>
              oracle.pl.includes(p.id)
            );
            return { ...oracle, packings: sortedPackings };
          });
        })
      )
      .subscribe((sortedOracles) => {
        this.oracles = sortedOracles;
      });
  }
}
