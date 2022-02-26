import React from 'react';
 

class UseStateTest extends React.Component {

    constructor(){
        super();
        this.state={
            name:'User',
            count:0
        };
    }

    increment=()=>{
        this.setState({count:this.state.count+1});
    }
     render(){
         return(
            <div>
           <h1> React Component Using UseState</h1>
            <p>
                Count: {this.state.count}
            </p>
            <button onClick={this.increment}>Increment</button>

            </div>

         )
     }
    }

    export default UseStateTest;