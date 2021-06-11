import React from 'react';
import { withRouter } from 'react-router-dom';

import './LaunchPage.scss';
import {Link} from 'react-router-dom';

class LaunchPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }


    render(){
        return(
        <div className = "launch-container">
            <Link to = '/app/home' className = "launch-link">
                Get Started
            </Link>
        </div>
        )
    }
};

export default LaunchPage;