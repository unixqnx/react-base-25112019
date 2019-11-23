import React from "react";
import {render} from "react-dom";

import {Header} from './components/Header';
import {Home} from './components/Home';

export default class App extends React.Component {
    onGreet(){
        alert("Hello!");
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offet-1">
                        <Header homeLink="Home"/>                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offet-1">
                        <Home name={"Max"} initialAge={27} greet={this.onGreet}/>
                    </div>
                </div>                
            </div>
        );
    }
}
