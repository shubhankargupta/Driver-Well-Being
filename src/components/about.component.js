import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Link } from "react-router-dom";


export default class About extends Component {
  

  render() {

     const mystyle = {
      color: "black",
      padding: "10px",
      fontFamily: "Georgia"
    };

    const parastyle = {
      color: "green",
      padding: "10px",
      fontFamily: "Georgia"
    };

    return (
     
      <div>

      <h3 style={mystyle}> Welcome to the Well Being App!! Here, you can ask for a supporter to help you set daily goals and also help others to set goals. </h3>

      <h3 style={mystyle}> Let's walk through how you can navigate towards your well being </h3>
     
      <h1 style={parastyle}> My Info</h1>

      <h3 style={mystyle}> This tab allows to see how many steps you took, how many calories you burned and how your heart rate varied for the past 24 hours and whether you reached your goals. </h3>

      <h1 style={parastyle}> Supporter</h1>

      <h3 style={mystyle}> View the daily goals and activities set by your supporter for you to achieve in next 24 hours. Rate your supporter to reward them for their contribution towards your well being.
      </h3>

      <h1 style={parastyle}> Supportee </h1>

      <h3 style={mystyle}> Be a supporter yourself and help set goals for others. 
      </h3>

      <h1 style={parastyle}> Share Data </h1>      

      <h3 style={mystyle}> See for the top rated supporters and ask one to be your supporter.
      </h3>
      
      
      <div class="left-btn">
             <Link to="/myinfo"><Button variant="primary">Get Started</Button>{' '}</Link>
      </div>

      
      
      </div>
  
    );
  }
}




