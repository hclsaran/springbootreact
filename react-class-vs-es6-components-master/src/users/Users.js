/*
class Component example
*/

import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  render(){
    return (
    <div>
      <h1>{this.props.title}</h1>
      <User></User> 
      <User age="25">Colin</User> 
      <User age="26">Castle</User>{/*print name and age*/ }
    </div>
    )
  }
}

export default Users;
