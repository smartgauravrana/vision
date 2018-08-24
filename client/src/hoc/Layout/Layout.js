import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState => (
            {showSideDrawer: ! prevState.showSideDrawer}
        ));
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    render() {

        return (
            <Aux>
                <Toolbar 
                    toggle={this.sideDrawerToggleHandler} />

                <SideDrawer 
                    open={this.state.showSideDrawer}
                    close={this.sideDrawerCloseHandler} />
                <main>
                    {this.props.children}
                </main>
            </Aux>
            )
    }
}

export default Layout;
