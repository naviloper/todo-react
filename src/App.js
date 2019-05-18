import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

class App extends React.Component {
  state = {
    todos: [
        {
            id: 1,
            title: 'Task 1',
            completed: false
        },
        {
          id: 2,
          title: 'Task 2',
          completed: true
      },
      {
          id: 3,
          title: 'Task 3',
          completed: false
      }
    ]}

    markComplete = (id) => {
      this.setState( { todos: this.state.todos.map( (todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      } 
      ) } );
    }

  //Delete Todo
  // deleteTodo = (id) => {
  //   this.setState( { todos: this.state.todos.filter( (todo) => {
  //     if (todo.id === id) {
  //       return;
  //     }
  //     return todo;
  //   } 
  //   ) } );
  // }

  deleteTodo = (id) => {
    this.setState( { todos: [...this.state.todos.filter( todo => todo.id !== id )] } );
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={ this.state.todos } markComplete={ this.markComplete } deleteTodo={ this.deleteTodo } />
        </div>
      </div>
    );
  }
}

export default App;
