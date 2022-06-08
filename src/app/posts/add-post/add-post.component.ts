import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  postFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(6)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get postFormVal(): { [key: string]: AbstractControl } {
    return this.postForm.controls;
  }

  onAddPost(): void {
    this.postFormSubmitted = true;

    if (this.postForm.invalid) {
      return;
      1;
    }

    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };

    this.store.dispatch(addPost({ post }));

    console.log(JSON.stringify(this.postForm.value, null, 2));
  }
}
