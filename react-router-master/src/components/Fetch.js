import React from 'react';

/*
Fetch is a part of JavaScript window object function from FetchAPI
Allows to fetch data from API asynchronously without installing any additional
libraries
FetchAPI ues Promises, which provides to avoid callbacks hell and boilerplate heavy code that XMLHttpRequest provides
The fetch function takes one mandatory argument,which is the path to the resource you want to fetch
and return a Promise that resolves to the response of that request
*/

class Fetch extends React.Component {
    state={
        persons:[]
    }
  componentDidMount() {
     
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then( res => res.json())
        .then((data)=>{
            this.setState({ persons:data });
            
      
        })
        
    }    

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.address.geo.lat}</li>)}
      </ul>
    )
  }
}
export default Fetch;
