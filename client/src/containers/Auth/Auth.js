import React, { Component } from 'react';

import classes from './Auth.css';
import Logo from '../../components/UI/Logo/Logo';
import Image from '../../assets/images/login_img.png';

class Auth extends Component {

    render () {
        return (
            <div className={classes.Container}>
                <div className={classes.Content}>
                    <div className={classes.Font}>
                        <Logo />
                    </div>
                    <p>Sign in to access your personalized homepage, follow authors and topics you love, and clap for stories that matter to you.</p>
                    <img src={Image} />
                </div>                                

                <div className={classes.Footer}>
                    <button className={classes.Google}>
                        <a href="http://google.com">Signin with <i class="fab fa-google"></i></a>
                    </button>
                    <button className={classes.Facebook}>
                        <a href="http://google.com">Signin with <i class="fab fa-facebook-square"></i></a>
                    </button>                            
                </div>
                    
            </div>
        );
    }
}

export default Auth;