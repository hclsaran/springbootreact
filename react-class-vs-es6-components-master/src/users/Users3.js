import React, {Component} from 'react';


class Users3 extends Component {

    state={
        name:"Saran"     

    }

    changeName=(newName)=>{
        this.setState({
            name:newName
        });
    }

    changeNameFromInput=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
  
    render(){

        return (

            <div>
                <button onClick={()=>this.changeName('Aaron')}>Change from Saran to Aaron</button>
                <br/><hr/>
              {/* bind is more efficient     */}
                <button onClick={this.changeName.bind(this,'Aaron')}>Bind function is used</button>
                <br/><hr/>
                <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
                <br/><hr/>
                


                <div>{this.state.name}</div>
            </div>

            
        
        )

    }
}

 
export default Users3;