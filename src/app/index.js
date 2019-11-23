import React from "react";
import {render} from "react-dom";

import {Header} from './components/Header';
import {Home} from './components/Home';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            homeLink:"Home"
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

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offet-1">
                        <Header homeLink={this.state.homeLink}/>                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offet-1">
                        <Home name={"Max"} 
                              initialAge={27} 
                              greet={this.onGreet}
                              changeLink = {this.onChangeLinkName.bind(this)}
                              initialLink = {this.state.homeLink}
                        />
                    </div>
                </div>                
            </div>
        );
    }
}
