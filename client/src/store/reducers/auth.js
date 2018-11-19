import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {

    token: null,
    username: null
}

const authSuccessFB = (state, action) => {

    console.log('authSuccessReducer');
    return state;
}

const fetchSuccess = (state, action) => {
    console.log('users fetched');
    return updateObject(state, {token: '123'});
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case actionTypes.SIGNIN_FACEBOOK: return authSuccessFB(state, action);
        case actionTypes.FETCH_USER: return fetchSuccess(state, action);
        default:
         return state;
    }
}

export default reducer;