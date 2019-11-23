import React from "react";

export class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age : props.initialAge,
            status : 0
        };
    }


    onMakeOlder(){
        this.setState({
            age : this.state.age + 3
        });
        //this.age += 3;
        console.log(this.age);
    }

    render(){
        console.log(this.props);
        let text = "Something";        
        return(
            <div>
                <p>In a new component!</p>
                <p>{text}</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
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
