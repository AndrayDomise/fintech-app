import React from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './TikTok.scss'

import TikTok1 from '../../assets/Images/TikTok1.svg'

class TikTok extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }


    render(){
        return(
        <div className = "tiktokPage">
            <Link to = "/app/learn2" className = "tiktokCancel">
                Bye
            </Link>
        </div>
        )
    }
};

export default TikTok;