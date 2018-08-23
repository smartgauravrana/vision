import React from 'react';
import classes from './Toolbar.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import Logo from '../../UI/Logo/Logo';
import Searchbar from '../../../containers/Searchbar/Searchbar';
import Notification from '../../../containers/Notification/Notification';
import Username from '../../../containers/Auth/Username/Username';

const Toolbar = props => {

    const buttonClasses = ["col-md-2 offset-md-1", classes.Font];
    const logoClasses = ["col-md-1 offset-md-2", classes.LogoFont];
    const notificationClasses = ["col-md-1", classes.TopMargin, classes.navItemColors];
    const usernameClasses = ["col-md-1", classes.Font, classes.TopMargin, classes.navItemColors];
    const logoutClasses = ["col-md-1", classes.Font]

    return (
        <Aux>
            <div className={classes.Toolbar}>
                <div className="row">
                    <div className={buttonClasses.join(' ')}>
                        <Button>UPGRADE TO PRO</Button>
                    </div>
                    <div className={logoClasses.join(' ')}>
                        <Logo />
                    </div>
                    <div className="col-md-2 offset-md-1">
                        <Searchbar />
                    </div>
                    <div className={notificationClasses.join(' ')}>
                        <Notification />
                    </div>
                    <div className={usernameClasses.join(' ')}>
                        <Username />
                    </div>
                    <div className={logoutClasses.join(' ')}>
                        <Button>Logout</Button>
                    </div>
                </div>
            </div>
        </Aux>
    );

}

export default Toolbar;