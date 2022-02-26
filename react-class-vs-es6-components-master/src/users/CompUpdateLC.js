import React, {Component} from 'react';


class CompUpdateLC extends Component {

    constructor(props){
       super(props);
       this.state={color:'blue'}
    }


    static getDerivedStateFromProps(props,state){
        return {color:props.favColor}
    }

    changeColor=()=>{
        this.setState({color:'yellow'});
    }
    render(){
        return (

            <div>
                <h2>My favourite color is {this.state.color}</h2>
                <button type='button' onClick={this.changeColor}>Change of color</button>
            </div>
        )
    }

}
export default CompUpdateLC;