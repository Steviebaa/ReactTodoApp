import React, { Component } from 'react'

class AddTodo extends Component {
    
    state = {
        id: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            id: this.props.mainState.todos.length + 1,
            content: ''
        })
        this.props.addTodo(this.state)
        console.log(this.state)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input name="tfAdd" type="text" value={this.state.content} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default AddTodo