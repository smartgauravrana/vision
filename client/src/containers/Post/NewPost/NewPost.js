import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './NewPost.css';

class NewPost extends Component {

    headClass = ["col-md-6 offset-md-3", classes.heading, classes.paddClass];
    textareaClass = [classes.paddClass];

    render () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className={this.headClass.join(' ')}>
                        <h3>Create A Post</h3>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-6 offset-md-3 form-group shadow-textarea">
                        <div className={this.textareaClass.join(' ')}>
                            <textarea 
                                className="form-control z-depth-1" 
                                id="exampleFormControlTextarea6" 
                                rows="2" 
                                placeholder="Add your Title">
                            </textarea>
                        </div>
                        <div className={this.textareaClass.join(' ')}>
                            <textarea 
                                className="form-control z-depth-1" 
                                id="exampleFormControlTextarea6" 
                                rows="6" 
                                placeholder="Add your Title">
                            </textarea>
                        </div>
                        <div>
                            <Button>Post Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewPost;