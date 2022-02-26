import React from 'react';

import axios from 'axios';

/*
Axios
Axios is a JavaScript library for making http requests from Node.js or XmlHttpRequest or browser
As a modern library its based on Promise API
we need to install the axios library to use
*/

export default class Axios extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}
