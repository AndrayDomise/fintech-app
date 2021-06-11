import React from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Education2.scss'
import Learn2 from '../../assets/Images/Learn2.svg'

class Education2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
        <div className = "learnPage2">
            <Link to = "/app/tiktok" className = "link-tiktok">
                Diversify Investments
            </Link>
            <Link to = "/app/tiktok2" className = "link-tiktok2">
                Invest for Long-Term
            </Link>
        </div>
        )
    }
};

export default Education2;