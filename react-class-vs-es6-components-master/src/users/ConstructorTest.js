import React, {Component} from 'react';


class ConstructorTest extends Component {

      constructor(props){
         super(props);
         this.state={color:'blue'}
      }
/*
      static  getDerivedStateFromProps(props,state){
          console.log('getDerived')
          return {color:props.myColor}
          
      }*/
      /*  componentDidMount function is called after the component is rendered  */
      componentDidMount(){
          console.log('componentDidMount')
          setTimeout(()=> {

            this.setState({color:'orange'})},2000)
          
      }

      render(){
          return(
              
              <h1>My favorite color is {this.state.color}</h1>
          )
      }


    }

    export default ConstructorTest;
