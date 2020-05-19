import React from 'react';
import ToDoListPage from '../screens/ToDoList';
import NewTaskPage from '../screens/NewTask';
import EditTaskPage from '../screens/EditTask'
import { connect } from 'react-redux';
import { onAddTask, onChangeTitle, onChangeDescription, onDeleteTask, onEditDescription, onEditTitle, onSaveEditedTask, onLoadEditForm, onTaskComplete } from '../actions';
import { createStackNavigator } from '@react-navigation/stack';

const mapStateToProps = state => ({ tasks: state.toDoList.tasks });

const Stack = createStackNavigator();

export default function ToDoList() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="To Do List" component={connect(mapStateToProps, { onDeleteTask, onTaskComplete })(ToDoListPage)} />
      <Stack.Screen name="Add New Task" component={connect(null, { onAddTask, onChangeTitle, onChangeDescription })(NewTaskPage)} />
      <Stack.Screen name="Edit Task" component={connect(mapStateToProps, { onLoadEditForm, onEditDescription, onEditTitle, onSaveEditedTask })(EditTaskPage)} />
    </Stack.Navigator>
  );
}