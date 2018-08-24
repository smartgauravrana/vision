import React from 'react';
import Button from '../../UI/Button/Button';
import Notification from '../../../containers/Notification/Notification';
import Logo from '../../UI/Logo/Logo';
import classes from './SideDrawer.css';

const SideDrawer = props => {

    let sideDrawerClasses = ["container-fluid", classes.SideDrawer, classes.Close];

    if (props.open) {

        sideDrawerClasses = ["container-fluid", classes.SideDrawer, classes.Open];
    }

    return (
        <div className={sideDrawerClasses.join(' ')} onClick={props.close}>
            <div className="row">
                <Logo />
            </div>
            <div className="row">
                <Button>UPGRADE TO PRO</Button>
            </div>
            <div className="row">
                <Notification />
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