//import  Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";
import { render } from "react-dom";

import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["My Info", "My Goals", "Peer Goals", "Share Data"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `This tab allows to see how many steps you took, how many calories you burned, how many miles you covered and how your heart rate varied for the past 24 hours and whether you achieved your daily targets or not.`;
    case 1:
      return "This tab allows you to view your daily targets and activities set by your supporter for you to achieve in next 24 hours. Rate your supporter to reward them for their contribution towards your well being.";
    case 2:
      return `This tab allows you to be a supporter yourself and help set daily goals for others.`;
    case 3:
      return `See for the top rated supporters and ask one to be your supporter.`;
    default:
      return "Unknown step";
  }
}

export default function About() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const mystyle = {
    color: "black",
    padding: "10px",
    fontFamily: "Georgia",
  };

  const parastyle = {
    color: "green",
    padding: "10px",
    fontFamily: "Georgia",
  };

  return (
    <div
      className={classes.root}
      style={{
        marginBottom: "80px",
        backgroundColor: "white",
      }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <div style={{ padding: "24px" }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </div>
      )}
    </div>
  );
}

/*
<div class="left-btn">
       <Link to="/myinfo"><Button variant="contained" color="primary">
  Get Started
</Button></Link>
</div>
*/

/*<div>

<h3 style={mystyle}> Welcome to the Well Being App!! Here, you can ask for a supporter to help you set daily goals and also help others to set goals. </h3>

<h3 style={mystyle}> Let's walk through how you can navigate towards your well being </h3>

<h1 style={parastyle}> My Info</h1>

<h3 style={mystyle}> This tab allows to see how many steps you took, how many calories you burned and how your heart rate varied for the past 24 hours and whether you reached your goals. </h3>

<h1 style={parastyle}> My Goals</h1>

<h3 style={mystyle}> View your daily targets and activities set by your supporter for you to achieve in next 24 hours. Rate your supporter to reward them for their contribution towards your well being.
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
*/
