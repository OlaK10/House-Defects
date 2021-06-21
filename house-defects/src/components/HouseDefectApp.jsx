import { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../components/Header/Header.js'
import LoginComponent from './Login/LoginComponent'
import ErrorComponent from "./ErrorComponent"
import HomeComponent from "./HomeComponent"
import DefectComponent from "./DefectComponent.jsx"
import Products from "./Products.js"

class HouseDefectApp extends Component {

    // routing to different app components


    render() {
        return (
            <div className="HouseDefectApp">
                <Router>
                    <Header/>

                    <Switch>
                    <Route path="/" exact component={HomeComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <Route path="/home" component={HomeComponent}/>
                    <Route path='/reports' component={DefectComponent} />
                    <Route path='/products' component={Products} />
                    <Route component={ErrorComponent}/>
                    </Switch>

                </Router>
            </div>

        )

    }


} export default HouseDefectApp

