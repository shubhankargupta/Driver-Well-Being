import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';


export default class CreateNodo extends Component {
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
            selectedOption: {},
            selectedOption2: {},
            todo_priority: '',
            todo_completed: false
        }
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
      }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);

        const newNodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };

        axios.post('http://localhost:4000/todos/node/add', newNodo)
            .then(res => console.log(res.data));

        alert('Goal added successfully');

        
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
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

          const filteredOptions = options2.filter((o) => o.link === this.state.selectedOption.value)



        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Activity</h3>

                <form onSubmit={this.onSubmit}>
                  
                
                        <label>Activity: </label>
                        <Select
                            name="form-field-name"
                            value={{label:this.state.selectedOption.label}}
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
                    
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}



