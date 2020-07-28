import React, { Component } from "react";
import { Chart } from "react-google-charts";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Card } from "@material-ui/core";

//Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
import RadialSeparators from "./RadialSeparators";

export default class NodosData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spercentage: 49,
      cpercentage: 56,
      name: "Samuel Miller",
      gender: "male",
      weight: 65,
      height: 162,
      isEditing: false,
      rating: 4.76,
    };

    this.nameChange = this.nameChange.bind(this);
    this.sexChange = this.sexChange.bind(this);
    this.weightChange = this.weightChange.bind(this);
    this.heightChange = this.heightChange.bind(this);
  }

  nameChange(e) {
    this.setState({ name: e.target.value });
  }

  sexChange(e) {
    this.setState({ gender: e.target.value });
  }

  weightChange(e) {
    this.setState({ weight: e.target.value });
  }

  heightChange(e) {
    this.setState({ height: e.target.value });
  }

  onEdit = () => {
    this.setState((state) => {
      return { isEditing: !state.isEditing };
    });
  };

  onSave = () => {
    this.setState((state) => {
      return { isEditing: !state.isEditing };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div style={{ padding: "16px" }}>
        <div className="rowC">
          <form
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
            onSubmit={this.handleSubmit}
          >
            <div>
              <p>Name:</p>
              <strong>{this.state.name}</strong>
            </div>

            <div>
              <p>Sex:</p>
              <select value={this.state.gender} onChange={this.sexChange}>
                <option name="male"> Male</option>
                <option name="female">Female</option>
              </select>
            </div>

            <div>
              <p> Weight (lb): </p>
              <strong>{this.state.weight}</strong>
            </div>

            <div>
              <p> Height (cm): </p>
              <strong>{this.state.height}</strong>
            </div>

            <div>
              <p> Rating: </p>
              <strong>{this.state.rating}</strong>
            </div>
          </form>
        </div>

        <br />
        <br />

        <h2>
          <strong>Samuel's Fitbit Stats for June 23, 2020:</strong>
        </h2>
        <br />
        <Card style={{ width: "1300px", height: "600px" }}>
          {" "}
          <Chart
            width={"1300px"}
            height={"600px"}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["x", "heart"],
              [0, 60],
              [1, 58],
              [2, 59],
              [3, 56],
              [4, 58],
              [5, 58],
              [6, 60],
              [7, 58],
              [8, 56],
              [9, 57],
              [10, 58],
              [11, 59],
              [12, 60],
              [13, 57],
              [14, 56],
              [15, 59],
              [16, 62],
              [17, 58],
              [18, 62],
              [19, 60],
              [20, 58],
              [21, 59],
              [22, 60],
              [23, 57],
            ]}
            options={{
              hAxis: {
                title: "Time(T hour)",
              },
              vAxis: {
                title: "Heart-beats/min",
              },
            }}
            rootProps={{ "data-testid": "1" }}
          />{" "}
        </Card>

        <br />
        <h3>Total Steps Completed: 68% of 8000 </h3>
        <Example>
          <CircularProgressbarWithChildren value={68}>
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
            <img
              style={{ width: 80, marginTop: -5 }}
              src="https://i.imgur.com/mSq9VJ8.png"
              alt="doge"
            />
            <div style={{ fontSize: 25, marginTop: -7 }}></div>
          </CircularProgressbarWithChildren>
        </Example>

        <h3> Total Calories burned: 80% of 150 kcals </h3>
        <Example>
          <CircularProgressbarWithChildren value={80}>
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
            <img
              style={{ width: 80, marginTop: -5 }}
              src="https://i.imgur.com/kswLmbV.jpg"
              alt="doge"
            />
            <div style={{ fontSize: 25, marginTop: -5 }}></div>
          </CircularProgressbarWithChildren>
        </Example>

        <h3 style={{ marginTop: "40px" }}>
          Total Miles Walked: 63% of 1 miles
        </h3>
        <Example>
          <CircularProgressbarWithChildren value={63}>
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
            <img
              style={{ width: 80, marginTop: -5 }}
              src="https://i.imgur.com/dWq6D26.png?1"
              alt="doge"
            />
            <div style={{ fontSize: 25, marginTop: -5 }}></div>
          </CircularProgressbarWithChildren>
        </Example>

        <h3 style={{ marginTop: "40px" }}>
          Total Miles Biked: 72% of 3.5 miles
        </h3>
        <Example>
          <CircularProgressbarWithChildren value={63}>
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
            <img
              style={{ width: 80, marginTop: -5 }}
              src="https://i.imgur.com/mIHW4En.png"
              alt="doge"
            />
            <div style={{ fontSize: 25, marginTop: -5 }}></div>
          </CircularProgressbarWithChildren>
        </Example>
      </div>
    );
  }
}

function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
        <div style={{ width: "70%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
