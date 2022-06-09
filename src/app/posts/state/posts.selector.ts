import { createFeatureSelector, createSelector } from '@ngrx/store';
import { postAdaptor, PostsState } from './posts.state';

export const POST_STATE_NAME = 'posts';
export const postsSelectors = postAdaptor.getSelectors();

const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostsState, postsSelectors.selectAll);

export const getPostById = createSelector(getPostsState, (state, props) => {
  return state.posts.find((post) => post.id === props.id);
});
