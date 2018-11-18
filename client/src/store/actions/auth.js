import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const authSuccessFb = () => {

    return {
        
        type: actionTypes.SIGNIN_FACEBOOK
    }
}

export const authFacebook = () => {

    return dispatch => {
        axios.post('auth/facebook')
            .then(response => {
                console.log(response);
                dispatch(authSuccessFb);
            })
            .catch(error => console.log('error 1 : ', error));
    }
}