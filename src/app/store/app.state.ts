import { AuthReducer } from '../auth/state/auth.reducer';
import { AUTH_STATE_NAME } from '../auth/state/auth.selector';
import { AuthState } from '../auth/state/auth.state';
import { counterReducer } from '../counter/state/counter.reducer';
import { CounterState } from '../counter/state/counter.state';
import { postsReducer } from '../posts/state/posts.reducer';
import { PostsState } from '../posts/state/posts.state';
import { sharedReducer } from './shared/shared.reducer';
import { SHARED_STATE_NAME } from './shared/shared.selector';
import { SharedState } from './shared/shared.state';

export interface AppState {
  // counter: CounterState;
  // posts: PostsState;

  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
}

export const appReducer = {
  // counter: counterReducer,
  // posts: postsReducer,

  [SHARED_STATE_NAME]: sharedReducer,
  [AUTH_STATE_NAME]: AuthReducer,
};
