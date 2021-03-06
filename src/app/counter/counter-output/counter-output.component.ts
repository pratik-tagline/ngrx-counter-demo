import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  // @Input() counter;
  counter$: Observable<number>;
  // counter$: Observable<{counter: number}>;
  // counterSubscription: Subscription

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    // this.counterSubscription =  this.store.select('counter').subscribe(data => {
    //   this.counter = data.counter
    // })

    // this.counter$ = this.store.select('counter');
    this.counter$ = this.store.select(getCounter);
    // .subscribe((data) => {
    //   console.log('counter observable called');

    //   this.counter = data;
    // });
  }

  // ngOnDestroy(): void {
  //   if(this.counterSubscription){
  //     this.counterSubscription.unsubscribe();
  //   }
  // }
}
