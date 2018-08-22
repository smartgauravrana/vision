import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Searchbar.css';

class Searchbar extends Component {

    inputClasses = ["col-md-8 offset-md-2", classes.InputAdj];
    buttonClasses = ["col-md-2", classes.Button];

    render () {
        return (
            <Aux>
                <div className="row">
                    <div className={this.inputClasses.join(' ')}>
                        <Input placeholder="Search" />
                    </div>
                    <div className={this.buttonClasses.join(' ')}>
                        <Button>Search</Button>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Searchbar;