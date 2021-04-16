import React from 'react';
import Column from './components/Column';
import Task from './components/Task';

function App() {
  return (
    <div>

      <div>
        <button>New Task</button>
      </div>

      <div className="flexbox">
        <Column id="column-1" className="column">
          <Task id="task-1" className="task" draggable="true">
            <p>Task 1</p>
          </Task>
        </Column>

        <Column id="column-2" className="column">
          <Task id="task-2" className="task" draggable="true">
            <p>Task 2</p>
          </Task>
        </Column>

        <Column id="column-3" className="column">
          <Task id="task-3" className="task" draggable="true">
            <p>Task 3</p>
          </Task>
        </Column>
      </div>

    </div>
  );
}

export default App;
