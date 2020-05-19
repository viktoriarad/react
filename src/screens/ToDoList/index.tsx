import React from 'react';
import { ScrollView } from 'react-native';
import { NewTaskButton, TaskList } from "../../components";
import { ToDoWrapper } from '../../components/styled';

const ToDoListPage = (props) => {

  return (
    <ScrollView>
      <ToDoWrapper>
        <NewTaskButton navigation={props.navigation}/>
      </ToDoWrapper>
      <TaskList list={props.tasks} onDeleteTask={props.onDeleteTask} onTaskComplete={props.onTaskComplete} navigation={props.navigation} />
    </ScrollView>
  );
};

export default ToDoListPage;