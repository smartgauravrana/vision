import React, { Component } from 'react';

import classes from './FeedSidebar.css';
import SidebarPost from './SidebarPost/SidebarPost';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

class FeedSidebar extends Component {
    render() {
        const headerClasses = ['row', classes.Header];
        return (
            <Aux>
                <div className={classes.Header + ' row'}>
                    <h4>New From Network</h4>
                </div>

                <div className='row'>
                    <SidebarPost />
                    <SidebarPost />
                    <SidebarPost />
                    <SidebarPost />
                </div>
            </Aux>
        );
    }
}

export default FeedSidebar;