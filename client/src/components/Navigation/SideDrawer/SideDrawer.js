import React from 'react';
import Button from '../../UI/Button/Button';
import Logo from '../../UI/Logo/Logo';
import classes from './SideDrawer.css';

const SideDrawer = props => {

    const logoClasses = ["row", classes.Logo]
    let sideDrawerClasses = ["container-fluid", classes.SideDrawer, classes.Close];

    if (props.open) {

        sideDrawerClasses = ["container-fluid", classes.SideDrawer, classes.Open];
    }

    return (
        <div className={sideDrawerClasses.join(' ')} onClick={props.close}>
            <div className={logoClasses.join(' ')}>
                <div className="col-sm-8 offset-sm-2">
                    <Logo />
                </div>
            </div>
            <div className="row">
                <Button>UPGRADE TO PRO</Button>
            </div>
            <div className="row">
                <Button>Notification</Button>
            </div>
            <div className="row">
                <Button>My Profile</Button>
            </div>
            <div className="row">
                <Button>Logout</Button>
            </div>
        </div>
    );
}

export default SideDrawer;