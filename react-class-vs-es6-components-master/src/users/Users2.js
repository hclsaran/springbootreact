import React, {Component} from 'react';
import User from './User';

class Users2 extends Component {

    state={

        users:[
         {name:'Michelle',age:25},
         {name:'Nisha',age:26},
         {name:'Rafee',age:27},
         {name:'Phisa',age:24},
         {name:'Hyunjay',age:28},
                 ],
                 title:"Users List"

    }
  //Handle to modify the state
    testFunction=()=>{
        const newState=this.state.users.map((user)=>{
            const tempUser=user;
            tempUser.age-=10;
            return tempUser;
        });
        this.setState({
            newState
        });
    }
    render(){

        return (

            <div>
                <button onClick={this.testFunction}>Make us 10 yrs Younger</button>
                <br/>
                <h1>{this.state.title}</h1>
                {
                    this.state.users.map((user)=>{
                        return <User age={user.age} > {user.name}</User>
                    })
                }
            </div>
        
        )

    }
}

export default Users2;
