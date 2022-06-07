import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});
1;
export const getProjectName = createSelector(getCounterState, (state) => {
  return state.projectName;
});
