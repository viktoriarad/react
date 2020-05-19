import React from 'react';
import Task from "./Task";
import { TaskListWrapper } from './styled';

const TaskList = (props) => {

    const list = props.list;

    return (
      <TaskListWrapper>
        {list.map(task => (
          <Task key={task.id} task={task} onDeleteTask={props.onDeleteTask} onTaskComplete={props.onTaskComplete} navigation={props.navigation}/>
        ))}
      </TaskListWrapper>
    );
};

export default TaskList;