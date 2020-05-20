import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const Todo = props => (

    <tr>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td>{props.todo.todo_completed ? "Done" : "In Progress"}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}><Button variant="primary">Edit</Button>{' '}</Link>                                
        </td>
        <td>
            <Button variant="danger" onClick={deletePlayer.bind(this,props)} > Delete </Button>
        </td>
    </tr>
)


function deletePlayer(props)
{
    console.log('Hello, This is Shubhankar');
    axios.delete(`http://localhost:4000/todos/delete/${props.todo._id}`)
    .then(res => res.data)

    setTimeout(window.helloComponent.componentDidMount(),2000);
    
}


export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: [],
                      showLabel : true,
                      label: 'Days until to reset goals: 5'};
        window.helloComponent = this;
        this.myFunction = this.myFunction.bind(this);
    }

    myFunction(){
    var sLb = ! (this.state.showlabel);
    this.setState({showlabel: sLb});
  }

    componentDidUpdate() {
     setTimeout(this.myFunction, 4000)
  }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })

                setTimeout(this.myFunction, 2000)

    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

   

    render() {
        return (
            <div>
              <div>
              <Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, are you keeping up with your goals? 5 days left until to reset your goals!!
  </p>
  <hr />
  </Alert>
              
              </div>
                <table className="table table-hover" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Activity</th>
                            <th>Duration</th>
                            <th>Days</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
  

            <br/>
            
            
            <div class="left-btn">
             <Link to="/create"><Button variant="primary">Add Activity</Button>{' '}</Link>
           </div>
         

            
            <br/>
            <br/>
            <br/>
            <Alert  variant="info">
            Rate your supporter
            </Alert>       
            <Rating name="half-rating" defaultValue={2} precision={0.5} />



            </div>
        )
    }
}