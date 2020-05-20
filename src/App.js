import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LineGraph from "./components/line-graph.component";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import SendMail from  "./components/send-mail.component";
import NodosList from "./components/nodos-list.component";
import About from "./components/about.component";

import logo from "./wellbeing.png";
class App extends Component {
  render() {
    return (
      <Router> 
       <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.fitbit.com/us/home" target="_blank">
              <img src={logo} width="100" height="100" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">Home</Link>                                                                         
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                  <Link to="/myinfo" className="nav-link"><b>My Info</b></Link>
                </li>
                <li className="navbar-item">
                  <Link to="/show" className="nav-link"><b>Supporter</b></Link>
                </li>
                <li className="navbar-item">
                  <Link to="/dup" className="nav-link"><b>Supportee</b></Link>
                </li>
                <li className="navbar-item">
                  <Link to="/email" className="nav-link"><b>Share Data</b></Link>
                </li>
              </ul>
            </div>
          </nav> 

          <br/>
          
          <Route path="/" exact component={About}/>
          <Route path="/myinfo" component={LineGraph} />
          <Route path="/show" component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/email" component={SendMail} />
          <Route path="/dup" component={NodosList} />
        </div> 
      </Router>
    );
  }
}
export default App;


