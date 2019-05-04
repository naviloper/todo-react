import React from 'react';
import './App.css';
import Todos from './components/Todos'

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

    itemMark = (e) => {
      console.log('Mark3');
    }
  
  render() {
    return (
      <div className="App">
        <Todos todos={ this.state.todos } itemMark={ this.itemMark } />
      </div>
    );
  }
}

export default App;
