import React from 'react';
import ListTask from './ListTask.jsx';

const List = (props) => (
  <div>
    <h4> List of tasks </h4>
    There are {props.tasks.length} tasks.
    {props.tasks.map(task => <ListTask task = {task} />)}
  </div>
)

export default List;