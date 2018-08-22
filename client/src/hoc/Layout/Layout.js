import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css'

class Layout extends Component {

    render() {

        return (
            <Aux>
                <Toolbar />
                <main>
                    {this.props.children}
                </main>
            </Aux>
            )
    }
}

export default Layout;
