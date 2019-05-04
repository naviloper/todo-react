import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodosItem extends Component {
  
  getItemStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      backgroundColor: "#f4f4f4",
      padding: '10px',
      borderBottom: '1px #ccc dotted'
    }
  }

  itemMark = (e) => {
    console.log("Mark1");
    //console.log(this.props.todo);
    //console.log(e);
    //this.props.todo.completed = true;
  }
  
  render() {
    return (
      <div>
        <p style={ this.getItemStyle() } >
          <input type="checkbox" onChange={ this.props.itemMark } />{' '}
          {this.props.todo.title}
        </p>
      </div>
    )
  }
}

TodosItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodosItem
