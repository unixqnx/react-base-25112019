import React from "react";

export class Home extends React.Component{
    constructor(props){
        super(props);
        this.age = props.age;
    }


    onMakeOlder(){
        this.age += 3;
        console.log(this.age);
    }

    render(){
        console.log(this.props);
        let text = "Something";        
        return(
            <div>
                <p>In a new component!</p>
                <p>{text}</p>
                <p>Your name is {this.props.name}, your age is {this.age}</p>
                <button onClick = {this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
            </div>
        );
    }
}

// Home.propTypes = {
//     name : React.PropTypes.string,
//     age : React.PropTypes.number,
//     user : React.PropTypes.object
// };
