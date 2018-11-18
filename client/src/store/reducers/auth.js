import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {

    token: null,
    username: null
}

const authSuccessFB = (state, action) => {

    console.log('authSuccessReducer');
    return updateObject(state, {token: '123'});
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case actionTypes.SIGNIN_FACEBOOK: return authSuccessFB(state, action);
        default:
         return state;
    }
}

export default reducer;