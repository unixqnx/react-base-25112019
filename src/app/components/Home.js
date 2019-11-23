import React from "react";

export class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age : props.initialAge,
            status : 0,
            homeLink : "Changed Link"
        };
        setTimeout(()=>{
            this.setState({status : 1});
        },3000);
    }


    onMakeOlder(){
        this.setState({
            age : this.state.age + 3
        });
        //this.age += 3;
        console.log(this.age);
    }

    changeLink(){
        this.props.changeLink(this.state.homeLink)
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
                <br/>
                <br/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <br/>
                <br/>
                <button onClick={this.changeLink.bind(this)} className="btn btn-primary">Chage Header Link</button>                
            </div>
        );
    }
}

// Home.propTypes = {
//     name : React.PropTypes.string,
//     age : React.PropTypes.number,
//     user : React.PropTypes.object
// };
