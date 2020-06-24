import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LineGraph from "./components/line-graph.component";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import SendMail from  "./components/send-mail.component";
import NodosList from "./components/nodos-list.component";
import About from "./components/about.component";
import CreateNodo from "./components/create-nodo.component";
import EditNodo from "./components/edit-nodo.component";
import NodosData from "./components/nodos-data.component";
import Home from "./components/home";
import logo from "./wellbeing.png";
import Scrollspy from 'react-scrollspy';
import ScrollspyNav from "react-scrollspy-nav";



class App extends Component {
  render() {
    return (
      <Router> 
          
          
          
        <Switch>
          <Route path="/myinfo" component={LineGraph} />
          <Route path="/show" component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/email" component={SendMail} />
          <Route path="/dup" component={NodosList} />
          <Route path="/nodo-create" component={CreateNodo} />
          <Route path="/nodo/edit/:id" component = {EditNodo}/>
          <Route path="/nodo-data" component= {NodosData} />
          <Route exact path="/about" component={About}/>
          <Route path="/" component={Home} />
          </Switch>
          
            
      </Router>
      
    );
  }
}
export default App;


/*
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
          
        <Switch>
          <Route path="/myinfo" component={LineGraph} />
          <Route path="/show" component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/email" component={SendMail} />
          <Route path="/dup" component={NodosList} />
          <Route path="/nodo-create" component={CreateNodo} />
          <Route path="/nodo/edit/:id" component = {EditNodo}/>
          <Route exact path="/" component={About}/>
          </Switch>
        </div> 
      </Router>
  */


  /*

<Router> 
        <div>
          <Scrollspy items={ ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'] } currentClassName="is-current">
    <li><a href="/">About</a></li>
    <li><a href="/myinfo">My Info</a></li>
    <li><a href="/show">Supporter</a></li>
    <li><a href="/dup">Supportee</a></li>
    <li><a href="/email">Share Data</a></li>
  </Scrollspy>          

          


          <br/>
          
        <Switch>
          <Route path="/myinfo" component={LineGraph} />
          <Route path="/show" component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/email" component={SendMail} />
          <Route path="/dup" component={NodosList} />
          <Route path="/nodo-create" component={CreateNodo} />
          <Route path="/nodo/edit/:id" component = {EditNodo}/>
          <Route exact path="/" component={About}/>
          </Switch>
        </div> 
      </Router>
    */