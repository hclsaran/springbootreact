/*
es6 functional Component example
*/

import React from 'react';

const User = (props) => {
    let age = props.age ? props.age : 'NA'; //ternary operator
    if (props.children) {
        return ( <div> Name: {props.children} | Age: {age} </div>)
      }
      else {
        return <div> Invalid Entry </div>
      }
    }

export default User;
