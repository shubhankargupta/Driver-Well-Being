import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LineGraph from "./line-graph.component";
import TodosList from "./todos-list.component";
import SendMail from "./send-mail.component";
import NodosList from "./nodos-list.component";
import About from "./about.component";
import Scrollspy from "react-scrollspy";
import ScrollspyNav from "react-scrollspy-nav";

export default class Home extends Component {
  render() {
    return (
      <div style={{}}>
        <ScrollspyNav
          scrollTargetIds={[
            "section1",
            "section2",
            "section3",
            "section4",
            "section5",
          ]}
          offset={-100}
          activeNavClass="is-active"
          scrollDuration="500"
        >
          <ul
            style={{
              display: "flex",
              position: "fixed",
              listStyleType: "none",
              backgroundColor: "orange",
              color: "blue",
              fontSize: "20px",
              fontWeight: "900",
              left: 0,
              right: 0,
              top: 0,
              justifyContent: "stretch",
              zIndex: 100,
            }}
          >
            <li className="nav-item">
              <a href="#section1">Getting Started</a>
            </li>
            <li className="nav-item">
              <a href="#section2">My Info</a>
            </li>
            <li className="nav-item">
              <a href="#section3">My Goals</a>
            </li>
            <li className="nav-item">
              <a href="#section4">Peer Goals</a>
            </li>
            <li className="nav-item">
              <a href="#section5">Share Data</a>
            </li>
          </ul>
        </ScrollspyNav>

        <div style={{ marginTop: "70px", padding: "16px" }}>
          <div id="section1" style={{ display: "flex", marginBottom: "315px" }}>
            <About />
          </div>
          <div id="section2" style={{ height: "100%", marginTop: "50px" }}>
            <LineGraph />
          </div>
          <div id="section3" style={{ height: "100%", marginTop: "30px" }}>
            <TodosList />
          </div>
          <div id="section4" style={{ height: "100%", marginTop: "90px" }}>
            <NodosList />
          </div>
          <div
            id="section5"
            style={{ height: "100%", marginTop: "90px", marginBottom: "40px" }}
          >
            <SendMail />
          </div>
        </div>
      </div>
    );
  }
}
