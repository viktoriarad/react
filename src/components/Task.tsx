import React from 'react';
import { TaskTitle, TaskDescription, Line } from './styled';
import Swipeable from 'react-native-swipeable-row';
import { DeleteTaskButton, EditTaskButton, CompleteTaskButton } from './index';

const Task = (props) => {

  const task = props.task;

  const rightButtons = [
    <DeleteTaskButton id={task.id} onDeleteTask={props.onDeleteTask}/>,
    <EditTaskButton id={task.id} navigation={props.navigation} />
  ];

  if (task.completed === false) {
    rightButtons.push(<CompleteTaskButton id={task.id} onTaskComplete={props.onTaskComplete} navigation={props.navigation} />)
  }

  const completedIcon = task.completed ? " \u2705": null;
  const title = task.title || "No title";
  const description = task.description || "No description";

  return (
    <>
      <Swipeable rightButtons={rightButtons}>
        <TaskTitle>{title}{completedIcon}</TaskTitle>
        <TaskDescription>{description}</TaskDescription>
        <Line></Line>
      </Swipeable>
    </>
  );
};

export default Task;