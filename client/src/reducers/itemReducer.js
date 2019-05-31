import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/constants';

const initialState = {
    items: [
        { id: uuid(), name:'create react todo'},
        { id: uuid(), name:'deploy to firebase'},
        { id: uuid(), name:'get milk'},
        { id: uuid(), name:'send emails'}
    ]
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            }
        default:
            return state;
    }
}