import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Todo = props => (

    <tr>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>                                
        </td>
        <td>
            <a href="#!" onClick={deletePlayer.bind(this,props)}> Delete </a>
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
        this.state = {todos: []};
        window.helloComponent = this;
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

   

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}