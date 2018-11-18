import React, { Component } from 'react';
// import Button from '../../components/UI/Button/Button';
import classes from './Username.css';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

class Username extends Component {

    componentDidMount () {
        console.log('username component');
        this.props.fetchUser();
    }

    headClass = ["row", classes.headClass];
    mainClass = ["container-fluid", classes.mainClass];

    render () {
        return(
            <div className={this.mainClass.join(' ')}>
                <div className={this.headClass.join(' ')}>
                    <div className="form-group">
                        <label>Choose a unique username</label>
                        <input className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="buton" className="btn btn-info">Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {

    return {

        fetchUser: () => dispatch(actions.fetchTheUser())
    }
}

export default connect(null, mapDispatchToProps)(Username);