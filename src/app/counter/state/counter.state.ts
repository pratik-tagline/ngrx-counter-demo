export interface CounterState {
  counter: number;
  projectName: string;
}

export const initialState: CounterState = {
  counter: 0,
  projectName: 'NgRx Counter Demo',
};
