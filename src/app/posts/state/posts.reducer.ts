import { createReducer, on } from '@ngrx/store';
import {
  addPost,
  addPostSuccess,
  deletePost,
  loadPostsSuccess,
  updatePost,
} from './posts.actions';
import { initialState, postAdaptor } from './posts.state';

const _postsReducer = createReducer(
  initialState,
  on(addPostSuccess, (state, action) => {
    return postAdaptor.addOne(action.post, state);

    // let post = { ...action.post };

    // return {
    //   ...state,
    //   posts: [...state.posts, post],
    // };
  }),
  // on(updatePost, (state, action) => {
  //   const updatedPosts = state.posts.map((post) => {
  //     return action.post.id === post.id ? action.post : post;
  //   });

  //   return {
  //     ...state,
  //     posts: updatedPosts,
  //   };
  // }),
  on(deletePost, (state, { id }) => {
    return postAdaptor.removeOne(id, state);

    // const updatedPosts = state.posts.filter((post) => {
    //   return post.id !== id;
    // });

    // return {
    //   ...state,
    //   posts: updatedPosts,
    // };
  }),
  on(loadPostsSuccess, (state, action) => {
    return postAdaptor.setAll(action.posts, state);

    // return {
    //   // ...state,
    //   // posts: action.posts,
    // };
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
