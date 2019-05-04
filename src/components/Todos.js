import React from 'react';
import TodosItem from './TodosItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

  itemMark = (e) => {
    console.log('Mark2');
  }
  
  render() {

    // console.log(this.props.todos);

    return this.props.todos.map( (todo) => (
      <TodosItem key={todo.id} todo={todo} itemMark={ this.props.itemMark } />
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
