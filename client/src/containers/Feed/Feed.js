import React, { Component } from 'react';

import classes from './Feed.css';
import PostIntro from './PostIntro/PostIntro';
import FeedSidebar from './FeedSidebar/FeedSidebar';

class Feed extends Component {
    render () {

        const containerClasses = ['container-fluid', classes.Container];
        return (
            <div className={containerClasses.join(' ')}>
                <div className="row">
                    <div className="col-sm col-md-7">
                        PostList
                        <PostIntro />
                        <PostIntro />
                        <PostIntro />
                        <PostIntro />
                    </div>
                    <div className="col-sm col-md-3 offset-md-1">
                        <FeedSidebar/>                        
                    </div>
                </div>                
            </div>
        )
    }
}

export default Feed;