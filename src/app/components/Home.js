import React from "react";

export class Home extends React.Component{
    render(){
        let content = "";
        if(true){
            content = <p>Hello!</p>
        }


        return(
            <div>
                <p>In a new component!</p>
                {content}
                { 5===7 ? "Yes" : "No" }
            </div>
        );
    }
}