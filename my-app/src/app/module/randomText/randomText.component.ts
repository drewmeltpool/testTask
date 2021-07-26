import { Component, OnInit } from '@angular/core';
import { isPolindrom, isNumber, isContainsZero, randStr } from '../../utils';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

const TIMEOUT = 3000;
const STR_LEN = 5;
const strategy = new Map();

strategy.set(isPolindrom, 'color--danger');
strategy.set(isNumber, 'color--primary');
strategy.set(isContainsZero, 'hide');

@Component({
  selector: 'app-randomText',
  templateUrl: './randomText.component.html',
  styleUrls: ['./randomText.component.scss'],
})
export class RandomText implements OnInit {
  randomText: string | null = null;
  className: string | null = null;
  ngOnInit() {
    const stream$ = timer(0, TIMEOUT).pipe(
      map(() => randStr(STR_LEN)),
      map((x) => ({
        value: x,
        className: strategy.get([...strategy.keys()].filter((f) => f(x))[0]),
      }))
    );

    stream$.subscribe(({ className, value }) => {
      this.randomText = value;
      this.className = className;
    });
  }
}
