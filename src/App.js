import React, { Component } from "react";
import Column from './components/Column';
import Task from './components/Task';
import NewTask from './components/NewTask';
import './App.css'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
  
        <div className="title">
          <h1>Pensieve Kanban</h1>
        </div>
  
        <div>
          <NewTask />
        </div>
  
        <div className="flexbox">
          <Column 
            id="column-1"
            className="column"
            status="To Do">
            <Task
              id="task-1"
              className="task"
              draggable="true">
            </Task>
          </Column>
  
          <Column
            id="column-2" 
            className="column"
            status="In Progress">
            <Task
              id="task-2"
              className="task"
              draggable="true">
            </Task>
          </Column>
  
          <Column
            id="column-3"
            className="column"
            status="Completed">
            <Task
              id="task-3"
              className="task"
              draggable="true">
            </Task>
          </Column>
        </div>
  
      </div>
    );
  }
}

export default App;
