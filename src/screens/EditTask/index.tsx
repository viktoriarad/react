import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { AddTaskTitle, AddTaskDescriptionWrapper, AddTaskDescriptionInput } from '../../components/styled';



const EditTaskPage = (props) => {

  const taskId = props.route.params.id;
  const task = props.tasks.find(task => task.id === taskId);

  props.onLoadEditForm(task);

  const onInputChanged = (input, content) => {
    if (input === 'title') {
      props.onEditTitle(content);
    } else if (input === 'description') {
      props.onEditDescription(content);
    }
  };

  const addButtonHandler = () => {
    props.onSaveEditedTask(taskId);
    props.navigation.navigate('To Do List');
  };

  return (
    <View>
      <AddTaskTitle placeholder='Title' onChangeText={(text) => onInputChanged('title', text)} >{task.title}</AddTaskTitle>

      <AddTaskDescriptionWrapper>
        <AddTaskDescriptionInput
          underlineColorAndroid="transparent"
          numberOfLines={10}
          multiline={true} placeholder='Description'
          onChangeText={(text) => onInputChanged('description', text)} >
          {task.description}
        </AddTaskDescriptionInput>
      </AddTaskDescriptionWrapper>

      <Button type='clear' onPress={addButtonHandler} title="Save" />
    </View>
    );
};

export default EditTaskPage;