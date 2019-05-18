import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodosItem extends Component {
  
  deleteStyle = {
    cursor: 'pointer',
    float: 'right',
    borderRadius: '50%'
  }

  getItemStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      backgroundColor: "#f4f4f4",
      padding: '10px',
      borderBottom: '1px #ccc dotted'
    }
  }

  render() {
    
    const { id, title, completed } = this.props.todo;
    
    return (
      <div>
        <p style={ this.getItemStyle() } >
          <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) } defaultChecked={ completed } />{' '}
          {title}
          <button style={ this.deleteStyle } onClick={ this.props.deleteTodo.bind(this, id) }>X</button>
        </p>
      </div>
    )
  }
}

TodosItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodosItem
