import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import { About } from './components/pages/About';
import axios from 'axios';

class App extends React.Component {
  state = {
    todos: []
  }

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

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then( (res) => {
      this.setState( { todos: [...this.state.todos.filter( todo => todo.id !== id )] } );
    } )
    .catch()
    ;
  }

  addTodo = (title) => {
    let newToDo = {
      title,
      completed: false
    }

    axios.post("https://jsonplaceholder.typicode.com/todos", newToDo)
      .then( res => {
        this.setState( { todos: [...this.state.todos, res.data] } );
      } )
      .catch()
      ;

  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then( res => this.setState( { todos: res.data } ) );
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={ props => (
              <React.Fragment>
                <AddTodo addTodo={ this.addTodo } />
                <Todos todos={ this.state.todos } markComplete={ this.markComplete } deleteTodo={ this.deleteTodo } />
              </React.Fragment>
             ) } />

            <Route path="/about" component={ About } ></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
