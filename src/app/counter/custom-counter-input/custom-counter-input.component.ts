import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeProjectName, customIncrement } from '../state/counter.actions';
import { getProjectName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss'],
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  projectName$: Observable<string>;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.projectName$ = this.store.select(getProjectName);
    // .subscribe((data) => {
    //   console.log('project name observable called');

    //   this.projectName = data;
    // });
  }

  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }

  onChangeProjectName() {
    this.store.dispatch(changeProjectName());
  }
}
