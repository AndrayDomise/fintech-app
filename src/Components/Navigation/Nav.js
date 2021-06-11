import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import HomeOutline from '../../assets/Icons/home_outline.svg';
import HomeFilled from '../../assets/Icons/home_filled.svg';
import SchoolOutline from '../../assets/Icons/school_outline.svg';
import SchoolFilled from '../../assets/Icons/school_filled.svg';
import GraphOutline from '../../assets/Icons/graph_outline.svg';
import GraphFilled from '../../assets/Icons/graph_filled.svg';
import AccountOutline from '../../assets/Icons/account_outline.svg';
import AccountFilled from '../../assets/Icons/account_filled.svg';
import './Nav.scss'


class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }


    render(){
        return(
        <footer className = "container">
                    <Link to = '/app/home'>
                        <img src = {HomeOutline} alt = 'Link to Homepage' />
                    </Link>
                    <Link to = '/app/learn'>
                        <img src = {SchoolOutline} alt = 'Link to Education Page' />
                    </Link>
                    <Link to = '/app/invest'>
                        <img src = {GraphOutline} alt = 'Link to Investing Page' />
                    </Link>
                    <img src = {AccountOutline} alt = 'Link to Account Page' />
        </footer>
        )
    }
};

export default Nav;