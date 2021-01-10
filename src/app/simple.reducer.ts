import {Action} from '@ngrx/store';
export function simpleReducer (state:string = 'Hello world', action: Action){
   switch(action.type){
    case 'SPANISH':
        return state = "Hello mundo"
    
    case 'FRENCHE':
        return state = 'Bonjour le monde'

    default :
       return state;    
   }
   
}
