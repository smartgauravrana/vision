import React, { Component } from 'react';

import classes from './Auth.css';

class Auth extends Component {

    render () {
        return (
            <div className={classes.Container}>
                <h1>Welcome back.</h1>
                <p>Sign in to access your personalized homepage, follow authors and topics you love, and clap for stories that matter to you.</p>
                <div className={classes.Social}>
                    <button className={classes.loginBtn + " " +  classes.loginBtnfacebook}>
                        Login with Facebook
                    </button>
                    <button className={classes.loginBtn + " " + classes.loginBtngoogle}>
                        Login with Google
                    </button>
                </div>
                
            </div>
        );
    }
}

export default Auth;