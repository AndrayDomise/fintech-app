import React from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './TikTok2.scss'

class TikTok2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }


    render(){
        return(
        <div className = "tiktok2Page">
            <Link to = "/app/learn2" className = "tiktokCancel">
                Bye
            </Link>
        </div>
        )
    }
};

export default TikTok2;