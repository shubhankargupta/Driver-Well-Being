import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import SimpleDialog from "@material-ui/core/Dialog";
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const Todo = props => (

    <tr>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td>{props.todo.todo_completed ? "Done" : "In Progress"}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}><Button variant="primary">Edit</Button>{' '}</Link>
        </td>
        <td>
            <Button variant="danger" onClick={deletePlayer.bind(this, props)} > Delete </Button>
        </td>
    </tr>
)


function deletePlayer(props) {
    console.log('Hello, This is Shubhankar');
    axios.delete(`http://localhost:4000/todos/delete/${props.todo._id}`)
        .then(res => res.data)

    setTimeout(window.helloComponent.componentDidMount(), 2000);

}


export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            showLabel: true,
            label: 'Days until to reset goals: 5',
            isShowingDialog: false
        };
        window.helloComponent = this;
        this.myFunction = this.myFunction.bind(this);
    }

    myFunction() {
        var sLb = !(this.state.showlabel);
        this.setState({ showlabel: sLb });
    }

    componentDidUpdate() {
        setTimeout(this.myFunction, 4000)
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

        setTimeout(this.myFunction, 2000)

    }

    todoList() {
        return this.state.todos.map(function (currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    onDiaglogChange = () =>
    {
        this.setState( (state) => {
            return {isShowingDialog: !state.isShowingDialog}
          }) 
    }



    render() {
        return (
            <div>
                <div>
                    <Alert variant="success">
                        <Alert.Heading>Hey, nice to see you</Alert.Heading>
                        <p>
                            Samuel has challenged you to complete goals for May 25. Would you like to give it a try?
                        </p>
                        <hr />
                    </Alert>

                </div>
                <table className="table table-hover" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Activity</th>
                            <th>Target/Day</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>


                <br />


                <div class="left-btn">
                    <Link to="/create"><Button variant="primary">Add Activity</Button>{' '}</Link>
                </div>

                <br/>
                <br/>

                <h6><strong>Last Updated: Mon, 25 May 2020 06:00:00 PST by Samuel </strong></h6>


                <br />
                <br />
                <Alert variant="info">
                    Would you like to rate Samuel for supporting you?
            </Alert>
                <Rating name="hover-feedback" defaultValue={2} precision={0.5} onChange={(event, newValue) => {
                   this.setState( (state) => {
                    return {isShowingDialog: !state.isShowingDialog}
                  }) 
                }} />

      <SimpleDialog open={this.state.isShowingDialog} onClose={this.onDiaglogChange}> 
         
      <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Thanks for rating. 
          </DialogContentText>
        </DialogContent>

      </SimpleDialog>



            </div>
        )
    }
}