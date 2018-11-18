import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {

    token: null,
    username: null
}

const authSuccessFB = (state, action) => {

    console.log('signin done');
}

const reducer = (state = initialState, action) = {

    switch(action.type){

        case actionTypes.SIGNIN_FACEBOOK: return authSuccessFB(state, action);
        default return state;
    }
}