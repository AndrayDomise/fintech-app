import React from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Investing.scss'


class Investing extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }


    render(){
        return(
        <div className = "investingPage">
            <Link to = "/app/buy" className = "buyLink">
                Investing
            </Link>
        </div>
        )
    }
};

export default Investing;