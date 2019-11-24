import React from "react";
import {render} from "react-dom";

import {Header} from './components/Header';
import {Home} from './components/Home';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            homeLink : "Home",
            homeMounted : true
        };
    }

    onGreet(){
        alert("Hello!");
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink : newName
        });
    }

    onChangeHomeMounted(){
        console.log("onChangeHomeMounted");
        // this.setState({
        //     homeMounted : !this.state.homeMounted
        // });
        
        this.setState((state, props) => ({
            homeMounted : !state.homeMounted
        }));
    }

    render(){
        let homeCpm = "";

        if(this.state.homeMounted){
            homeCpm = (
                    <Home name={"Max"} 
                    initialAge={27} 
                    greet={this.onGreet}
                    changeLink = {this.onChangeLinkName.bind(this)}
                    initialLink = {this.state.homeLink}/>
            );
        }

        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offet-1">
                        <Header homeLink={this.state.homeLink}/>                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offet-1">
                        { homeCpm }
                    </div>
                </div>                
                <div className="row">
                    <div className="col-xs-10 col-xs-offet-1">
                        <button onClick = { this.onChangeHomeMounted.bind(this) } className="btn btn-primary">(Un)Mount Home Component</button>
                    </div>
                </div> 
            </div>
        );
    }
}
