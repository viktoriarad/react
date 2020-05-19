import React from 'react';
import {TouchableHighlight, Text} from "react-native";
import { EditButtonText } from './styled';

const EditTaskButton = (props) => {
  return (
    <TouchableHighlight>
      <EditButtonText onPress={() => props.navigation.navigate('Edit Task', {id: props.id})}>Edit</EditButtonText>
    </TouchableHighlight>
  );
};

export default EditTaskButton;