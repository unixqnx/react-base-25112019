import React from "react";
import {render} from "react-dom";

// import React from 'react';
// import ReactDOM from 'react-dom';

export default class App extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offet-1">
                        <h1>Hello world!</h1>                        
                    </div>
                </div>
            </div>
        );
    }
}
