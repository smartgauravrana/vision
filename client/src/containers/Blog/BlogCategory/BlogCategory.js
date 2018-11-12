import React, { Component } from 'react';
import classes from './BlogCategory.css';

class blogCategory extends Component {

    headerClass = ["col-md-12", classes.heading];
    mainClass = ["col-md-6", "offset-md-3", classes.main]
    optsClass = ["col-md-3", "offset-md-1", classes.opts]
    optClass = [classes.opt]
    rowClass = ["row", classes.rowclass];

    render () {
        return (
            <div className={this.mainClass.join(' ')}>
                <div className="row">
                    <div className={this.headerClass.join(' ')}>
                        <h3>CHOOSE CATEGORY</h3>
                    </div>
                </div>
                <div className={this.optClass.join(' ')}>
                    <div className={this.rowClass.join(' ')}>
                        <div className={this.optsClass.join(' ')}>
                            Technology
                        </div>
                        <div className={this.optsClass.join(' ')}>
                            Politics
                        </div>
                        <div className={this.optsClass.join(' ')}>
                            Cultural
                        </div>
                    </div>
                   <div className={this.rowClass.join(' ')}>
                        <div className={this.optsClass.join(' ')}>
                            Health
                        </div>
                        <div className={this.optsClass.join(' ')}>
                            Food
                        </div>
                        <div className={this.optsClass.join(' ')}>
                            Gaming
                        </div>
                   </div>
                    <div className={this.rowClass.join(' ')}>
                        <div className={this.optsClass.join(' ')}>
                            Poetry
                        </div>
                        <div className={this.optsClass.join(' ')}>
                            Sports
                        </div>
                        <div className={this.optsClass.join(' ')}>
                            Music
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default blogCategory;