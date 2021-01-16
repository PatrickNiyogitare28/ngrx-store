import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Post} from './models/post.model';
import * as PostActions from './actions/post.action';

interface AppState {
  message: string;
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message$: Observable<string>;
  post$: Observable<Post>;
  text: string='';
  title = 'ngrx-starter';

  constructor(private store: Store<AppState>){
    this.message$ = this.store.select('message');
    this.post$ = this.store.select('post');
  }


  
  spanishMessage(){
    this.store.dispatch({type:'SPANISH'});
  }

  frenchMessage(){
    this.store.dispatch({type: 'FRENCHE'});
  }

  editText(){
     this.store.dispatch(new PostActions.EditText(this.text))
  }

  upvote(){
     this.store.dispatch(new PostActions.Upvote());
  }

  reset(){
     this.store.dispatch(new PostActions.Reset());
  }
  downVote(){
    this.store.dispatch(new PostActions.Downvote());
  }
}
