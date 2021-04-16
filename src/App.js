import React from 'react';
import Column from './components/Column';
import Task from './components/Task';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
function App() {
  return (
    <div>
      <Column>
      <Task id="task-1">
        <p>Task 1</p>
      </Task>
      </Column>
    </div>
  );
}

export default App;
