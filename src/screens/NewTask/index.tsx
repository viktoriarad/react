import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { AddTaskTitle, AddTaskDescriptionWrapper, AddTaskDescriptionInput, AddTaskButton, AddTaskText } from '../../components/styled';

const NewTaskPage = props => {

  const onInputChanged = (input, content) => {
    if (input === 'title') {
      props.onChangeTitle(content);
    } else if (input === 'description') {
      props.onChangeDescription(content);
    }
  };

  const addButtonHandler = () => {
    props.onAddTask();
    props.navigation.navigate('To Do List');
  };

  return (
    <View>
      <AddTaskTitle placeholder='Title' onChangeText={(text) => onInputChanged('title', text)} />

      <AddTaskDescriptionWrapper>
        <AddTaskDescriptionInput
          underlineColorAndroid="transparent"
          numberOfLines={10}
          multiline={true} placeholder='Description'
          onChangeText={(text) => onInputChanged('description', text)} />
      </AddTaskDescriptionWrapper>

      <AddTaskButton>
        <AddTaskText onPress={addButtonHandler}>Add a new task</AddTaskText>
      </AddTaskButton>
    </View>
  );
};

export default NewTaskPage;