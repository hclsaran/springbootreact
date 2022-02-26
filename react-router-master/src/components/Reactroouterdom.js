//to install react-router-dom 
//npm install --save react-router-dom

import React from 'react';
import  {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

function Reactroouterdom(){
    return(
      <Router>
          <div>
        <ul>
            <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/about">About Us</Link>
              </li>
              <li>
              <Link to="/contactus">Contact Us</Link>
              </li>
        </ul>
        <hr/>
        {/*
          Switch-> looks through all its children <Route>
          elements and renders the first one whos path
          matches the current URL( mulitple routes).
          But it will render only one at a time.
        */}

        <Switch>
           <Route exact path="/">
              <Home/>
           </Route >
           <Route path="/about">
              <About/>
           </Route >
           <Route path="/contactus">
              <ContactUs/>
           </Route >
  

        </Switch>
        </div>
           
      </Router>
   
 

    );

}
function Home(){
    return(
        <div>
            <h1>Welcome Home</h1>
        </div>
    )
}
function About(){
    return(
        <div>
            <h1>Welcome About</h1>
        </div>
    )
}
function ContactUs(){
    return(
        <div>
            <h1>Contact Us </h1>
        </div>
    )
}

export default Reactroouterdom;