import React from 'react';
import TodosItem from './TodosItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

  render() {

    // console.log(this.props.todos);

    return this.props.todos.map( (todo) => (
      <TodosItem key={todo.id} todo={todo} markComplete={ this.props.markComplete } deleteTodo={ this.props.deleteTodo } />
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
