import React, { Component } from 'react';

class Welcome extends Component {

    welcomeClickHandler = () => {
        this.props.history.replace({pathname : '/username'});
    }

    render () {
        return (
            <div>
                <div>
                    <h1>Welcome to VISION</h1>
                    <button 
                        type="button" 
                        className="btn btn-info" 
                        onClick={this.welcomeClickHandler}>
                        
                        Next
    
                    </button>
                </div>
            </div>
        )
    }
}

export default Welcome;