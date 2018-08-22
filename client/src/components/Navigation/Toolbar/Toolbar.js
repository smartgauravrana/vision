import React from 'react';
import classes from './Toolbar.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import Logo from '../../UI/Logo/Logo';
import Searchbar from '../../../containers/Searchbar/Searchbar';
import Notification from '../../../containers/Notification/Notification';

const Toolbar = props => {

    return (
        <Aux>
            <div className={classes.Toolbar}>
                <div className="row">
                    <div className="col-md-2 offset-md-1">
                        <div className={classes.Font}>
                            <Button>UPGRADE TO PRO</Button>
                        </div>
                    </div>
                    <div className="col-md-1 offset-md-2">
                        <div className={classes.Font}>
                            <Logo />
                        </div>
                    </div>
                    <div className="col-md-2 offset-md-1">
                        <Searchbar />
                    </div>
                    <div className="col-md-1">
                        <div className={classes.Notification}>
                            <Notification />
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    );

}

export default Toolbar;