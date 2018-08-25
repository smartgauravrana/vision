import React, { Component } from 'react';

import classes from './SidebarPost.css';

class SidebarPost extends Component {
    render() {

        const contentClasses = ['row', classes.Content];
        return (
                <div className={contentClasses.join(' ')} >
                    <div className="col-3">
                        img
                    </div>
                    <div className="col-9">
                        Top Nodejs article 2018 with ExpressJs
                    </div>
                </div>
        );
    }
}

export default SidebarPost;