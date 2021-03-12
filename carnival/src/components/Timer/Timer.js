import React, { Component } from 'react';


export default class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            time : new Date().toLocaleTimeString()
        }
    };

    componentDidMount(){
        this.intervalID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    tick(){
        this.setState({
            time : new Date().toLocaleTimeString()
        })
    }

    render(){
        return(
            <p className = 'white f3'>
                {this.state.time}
            </p>
        )
    }

}