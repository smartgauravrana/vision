import React from 'react';
import classes from './Toolbar.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import Logo from '../../UI/Logo/Logo';
import Searchbar from '../../../containers/Searchbar/Searchbar';
import Notification from '../../../containers/Notification/Notification';
import Username from '../../../containers/Auth/Username/Username';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = props => {

    const buttonClasses = ["col-md-2", classes.Font, classes.mobileSize];
    const logoClasses = ["col-md-1 col-sm-4 col-3 offset-3 offset-sm-4 offset-md-4 offset-lg-2", classes.LogoFont];
    const notificationClasses = ["col-md-1", classes.TopMargin, classes.navItemColors, classes.mobileSize];
    const usernameClasses = ["col-md-1", classes.Font, classes.TopMargin, classes.navItemColors, classes.mobileSize];
    const logoutClasses = ["col-md-1", classes.Font, classes.mobileSize];
    const searchbarClasses = ["col-md-2 offset-md-1", classes.mobileSize];

    return (
        <Aux>
            <div className={classes.Toolbar}>
                <div className="row">
                    <div className="col-md-1 col-sm-2 col-2">
                        <DrawerToggle toggle={props.toggle} />
                    </div>
                    <div className={buttonClasses.join(' ')}>
                        <Button>UPGRADE TO PRO</Button>
                    </div>
                    <div className={logoClasses.join(' ')}>
                        <Logo />
                    </div>
                    <div className={searchbarClasses.join(' ')}>
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