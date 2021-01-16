import * as PostActions from '../actions/post.action';
import {Post} from '../models/post.model';
// import {Action} from '@ngrx/store';


export type Action = PostActions.All; 
//default Post state;

const defaultState: Post = {
    text: 'This is the default state text',
    likes: 0
}

// Function to create new state object
const newState = (state:any, newData:any) => {
    return Object.assign({}, state, newData);
}

// Reducer function
export function postReducer(state: Post = defaultState, action: Action){
   switch(action.type){
       case PostActions.EDIT_TEXT:
        return newState(state, { text: action.payload });
        
        case PostActions.UPVOTE: 
            return newState(state, {likes: state.likes + 1});    

        case PostActions.DOWNVOTE:
            return newState(state, {likes: state.likes - 1})
            
        case PostActions.RESET: 
            return defaultState;    
        default:
            return state;    
   }
    
}