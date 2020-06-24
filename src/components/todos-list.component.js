import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import SimpleDialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const Todo = (props) => (
  <tr>
    <td>{props.todo.todo_description}</td>
    <td>{props.todo.todo_responsible}</td>
    <td>{props.todo.todo_priority}</td>
    <td>{props.todo.todo_completed ? "Done" : "In Progress"}</td>
    <td>
      <Link to={"/edit/" + props.todo._id}>
        <Button variant="primary">Edit</Button>{" "}
      </Link>
    </td>
  </tr>
);

function deletePlayer(props) {
  console.log("Hello, This is Shubhankar");
  axios
    .delete(`http://localhost:4000/todos/delete/${props.todo._id}`)
    .then((res) => res.data);

  setTimeout(window.helloComponent.componentDidMount(), 2000);
}

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      showLabel: true,
      label: "Days until to reset goals: 5",
      isEditing: false,
      steps: 7000,
      cal: 150,
      miles: 1,
      bikes: 4,
      isShowingDialog: false,
    };
    window.helloComponent = this;
    this.myFunction = this.myFunction.bind(this);
    this.stepChange = this.stepChange.bind(this);
    this.calChange = this.calChange.bind(this);
    this.milesChange = this.milesChange.bind(this);
    this.bikeChange = this.bikeChange.bind(this);
  }

  myFunction() {
    var sLb = !this.state.showlabel;
    this.setState({ showlabel: sLb });
  }

  componentDidUpdate() {
    setTimeout(this.myFunction, 4000);
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/")
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

    setTimeout(this.myFunction, 2000);
  }

  todoList() {
    return this.state.todos.map(function (currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  onDiaglogChange = () => {
    this.setState((state) => {
      return { isShowingDialog: !state.isShowingDialog };
    });
  };

  stepChange(e) {
    this.setState({ steps: e.target.value });
  }

  calChange(e) {
    this.setState({ cal: e.target.value });
  }

  milesChange(e) {
    this.setState({ miles: e.target.value });
  }

  bikeChange(e) {
    this.setState({ bikes: e.target.value });
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
      <div>
        <div>
          <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              Samuel has challenged you to complete goals for June 18. Would you
              like to give it a try?
            </p>
            <hr />
          </Alert>

          <div className="rowC">
            <form
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: "10px",
              }}
              onSubmit={this.handleSubmit}
            >
              <div>
                <p>Target Number of steps:</p>
                {this.state.isEditing ? (
                  <input
                    type="number"
                    value={this.state.steps}
                    onChange={this.stepChange}
                  />
                ) : (
                  <strong>{this.state.steps}</strong>
                )}
              </div>

              <div>
                <p> Target Number of Calories (kcals): </p>
                {this.state.isEditing ? (
                  <input
                    type="number"
                    value={this.state.cal}
                    onChange={this.calChange}
                  />
                ) : (
                  <strong>{this.state.cal}</strong>
                )}
              </div>

              <div>
                <p> Target Number of Miles (Walk): </p>
                {this.state.isEditing ? (
                  <input
                    type="number"
                    value={this.state.miles}
                    onChange={this.milesChange}
                  />
                ) : (
                  <strong>{this.state.miles}</strong>
                )}
              </div>

              <div>
                <p> Target Number of Miles (Bike): </p>
                {this.state.isEditing ? (
                  <input
                    type="number"
                    value={this.state.bikes}
                    onChange={this.bikeChange}
                  />
                ) : (
                  <strong>{this.state.bikes}</strong>
                )}
              </div>
            </form>
          </div>

          <br />
          <br />
        </div>
        <table className="table table-hover" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Target/Day</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>

        <br />

        <div style={{ paddingTop: "50px", paddingLeft: "10px" }}>
          <h6>
            <strong>
              Last Updated: Thurs, 18 June 2020 06:00:00 PST by Samuel{" "}
            </strong>
          </h6>
        </div>

        <br />
        <br />
        <Alert variant="info">
          Would you like to rate Samuel for today's goals?
        </Alert>
        <Rating
          name="hover-feedback"
          defaultValue={2}
          precision={0.5}
          onChange={(event, newValue) => {
            this.setState((state) => {
              return { isShowingDialog: !state.isShowingDialog };
            });
          }}
        />

        <SimpleDialog
          open={this.state.isShowingDialog}
          onClose={this.onDiaglogChange}
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Thanks for rating.
            </DialogContentText>
          </DialogContent>
        </SimpleDialog>
      </div>
    );
  }
}

/*{!this.state.isEditing ? <Button style={{alignSelf: "center"}} onClick={this.onEdit}>Edit</Button> :
                   <Button style={{alignSelf: "center"}} onClick={this.onSave}>Save</Button>}*/

/*
 <td>
      <Button variant="danger" onClick={deletePlayer.bind(this, props)}>
        {" "}
        Delete{" "}
      </Button>
    </td>
*/

/*
<div
          class="left-btn"
          style={{ paddingLeft: "10px", paddingBottom: "10px" }}
        >
          <Link to="/create">
            <Button variant="primary">Add Activity</Button>{" "}
          </Link>
        </div>
*/
