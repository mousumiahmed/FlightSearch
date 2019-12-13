import React from "react";
import style from "./App.css";
import Return from "./Return.js";




export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <React.Fragment>
              <div class="jumbotron height-100 bg">          
                <h1 class="display-7 text-white m-3"><i class="fa fa-plane"></i><em>Search Your Flight here-</em></h1>
                <div className="container bg-light pb-5">
                  <Return/>
                </div>
              </div>                         
            </React.Fragment>
        )
    }

}