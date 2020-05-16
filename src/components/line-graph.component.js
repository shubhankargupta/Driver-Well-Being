import React, { Component } from "react";
import {Chart} from "react-google-charts";


//Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
import RadialSeparators from "./RadialSeparators";


export default class LineGraph extends Component
{

	constructor(props)
	{
		super(props);

		this.state={
			spercentage : 49,
            cpercentage : 56
		}
	}

	render(){
		return(
			     <div>
                 <Chart
  width={'600px'}
  height={'400px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['x', 'heart'],
    [0, 20],
    [1, 15],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    [8, 33],
    [9, 40],
    [10, 32],
    [11, 35],
  ]}
  options={{
    hAxis: {
      title: 'Time',
    },
    vAxis: {
      title: 'Number of heart-beats',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>

 
    <h3>Target Steps: 8000 </h3>
    <Example>
      <CircularProgressbarWithChildren value={66}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <img
          style={{ width: 80, marginTop: -5 }}
          src="https://i.imgur.com/mSq9VJ8.png"
          alt="doge"
        />
        <div style={{ fontSize: 25, marginTop: -7 }}>
          <strong>77% steps</strong> 
        </div>
      </CircularProgressbarWithChildren>
    </Example>
   
  
    <h3> Target Calories burned: 150 kcals </h3>
    <Example>
      <CircularProgressbarWithChildren value={49}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <img
          style={{ width: 80, marginTop: -5 }}
          src="https://i.imgur.com/kswLmbV.jpg"
          alt="doge"
        />
        <div style={{ fontSize: 25, marginTop: -5 }}>
          <strong>49% </strong> burned
        </div>
      </CircularProgressbarWithChildren>
    </Example>
    


</div>


			)
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

