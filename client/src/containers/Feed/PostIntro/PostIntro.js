import React, { Component } from 'react';

import classes from './PostIntro.css';
import thumbnail from '../../../assets/images/login_img.png'

class PostIntro extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-9">
                    <p class={classes.Category}>Category</p>
                    <p className={classes.Title}>Travel is No Cure for the mind</p>
                    <p className={classes.Summary}>travel is often seen as the key to happiness. Here why it's not</p>
                    <p className={classes.Date}>Aug 23</p>
                </div>
                <div className="col-3">
                    <img src={thumbnail} alt="" className={classes.Thumbnail} />
                </div>
            </div>
        );
    }
}

export default PostIntro;