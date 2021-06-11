import React from 'react';
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import './AppPage.scss';

import Nav from '../../Components/Navigation/Nav'
import HomePage from '../../Components/HomePage/HomePage'
import Education from '../../Components/Education/Education'
import Education2 from '../../Components/Education/Education2'
import TikTok from '../../Components/TikTok/TikTok'
import TikTok2 from '../../Components/TikTok/TikTok2'
import Investing from '../../Components/Investing/Investing'
import BuyStock from '../../Components/BuyStock/BuyStock'


//function will load a different component, according to which navigation
//link has been clicked

class AppPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route path = '/app/home' component = {HomePage} />
                <Route path = '/app/learn' component = {Education} />
                <Route path = '/app/learn2' component = {Education2} />
                <Route path = '/app/tiktok' component = {TikTok} />
                <Route path = '/app/tiktok2' component = {TikTok2} />
                <Route path = '/app/invest' component = {Investing} />
                <Route path = '/app/buy' component = {BuyStock} />
            </Switch>
            <Nav />
        </BrowserRouter>
        )
    }
};

export default AppPage;