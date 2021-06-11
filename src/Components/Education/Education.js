import React from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Education.scss'

import Learn1 from '../../assets/Images/Learn1.svg'
import Learn2 from '../../assets/Images/Learn2.svg'

class Education extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
        <div className = "learnPage">
            <Link to = "/app/learn2" className = "learn2-link">
                Investing
            </Link>
        </div>
        )
    }
};

export default Education;