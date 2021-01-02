import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style = {this.getStyle()}>
                <p> <input style={{marginRight: 1 + 'rem'}} type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> { title }</p>
                <button onClick={this.props.delTodo.bind(this, id)} style = {btnStyle}>x</button>
            </div>
        )
    }
}


// PropTypes
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    cursor: 'pointer'
}