import React from "react";
import Home from "./Home.js";
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";



export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <React.Fragment> 
                 <Link to="/"></Link> 
                 <Route path="/"  component={Home} />
            </React.Fragment>
        )
    }
}