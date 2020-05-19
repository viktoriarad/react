import React from 'react';
import { AddNewTaskButton, AddNewTaskText } from '../components/styled';

const NewTaskButton = (props) => {
  return (
      <AddNewTaskButton onPress={() => props.navigation.navigate('Add New Task')}>
        <AddNewTaskText>Create New Task</AddNewTaskText>
      </AddNewTaskButton>
  );
};

export default NewTaskButton;