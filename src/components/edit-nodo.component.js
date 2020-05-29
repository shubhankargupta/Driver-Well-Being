import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';


export default class EditNodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false,
            selectedOption: {},
            selectedOption2: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/nodo/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }

    handleChange1 = (selectedOption) => {
        this.setState({selectedOption});
        this.setState({todo_description: selectedOption.label});
      };
    
    handleChange2 = (selectedOption) => {
        this.setState({selectedOption2: selectedOption});
        this.setState({todo_responsible: selectedOption.label});
      };

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };
        console.log(obj);
        axios.post('http://localhost:4000/todos/nodo/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

            alert('Goal updated successfully');
        
        this.props.history.push('/');
    }

    render() {

        const options1 = [
            {value: 'one', label: 'Jogging'},
            {value: 'two', label: 'Biking'}
          ];
      
          const options2 = [
            {value: 'one-a', label: '10 miles', link: 'one'},
            {value: 'one-b', label: '20 miles', link: 'one'},
            {value: 'two-a', label: '4 miles', link: 'two'},
            {value: 'two-b', label: '3 miles', link: 'two'}
          ];

          var x = this.state.todo_description;
          var ans;

          for(var i=0;i<options1.length;i++)
          {
              if(options1[i].label=== this.state.todo_description)
              {
                 ans = options1[i].value;
              }
          }

          const filteredOptions = options2.filter((o) => o.link === ans)


        return (
            <div>
                <h3 align="center">Update Todo</h3>
                <form onSubmit={this.onSubmit}>
                    
                 
                <label>Activity: </label>
                        <Select
                            name="form-field-name"
                            value={{label:this.state.todo_description}}
                            onChange={this.handleChange1}
                            options={options1}
                        />
                    
                    
                <label>Target/Day: </label>
                        <Select
                            name="form-field-name"
                            value={{label: this.state.selectedOption2.label}}
                            onChange={this.handleChange2}
                            options={filteredOptions}
                        />

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.todo_priority==='Low'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.todo_priority==='Medium'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.todo_priority==='High'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeTodoCompleted}
                                checked={this.state.todo_completed}
                                value={this.state.todo_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}