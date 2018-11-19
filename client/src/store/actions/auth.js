import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const authSuccessFb = () => {

    return {        
        type: actionTypes.SIGNIN_FACEBOOK
    }
}

export const fetchUserSuccess = () => {
    return {
        type: actionTypes.FETCH_USER
    }
}

export const authFacebook = () => {

    return dispatch => {
        console.log('authFacebookAction');
        axios.get('/auth/facebook')
            .then(response => {
                console.log(response);
                dispatch(authSuccessFb);
            })
            .catch(error => console.log('error 1 : ', error));
    }
}

export const fetchTheUser = () => {

    return dispatch => {
        console.log('calling the api');
        axios.get('current_user')
            .then(response => {
                console.log(response);
                dispatch(fetchUserSuccess());
            })
            .catch(error => console.log('error 2 :', error));
    }
}