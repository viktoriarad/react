import React from 'react';
import {TouchableHighlight, Text} from "react-native";
import { CompleteTaskText } from './styled';

const CompleteTaskButton = (props) => {
  const onPressHandler = () => {
    props.onTaskComplete(props.id);
    props.navigation.navigate('To Do List');
  };

  return (
    <TouchableHighlight>
      <CompleteTaskText onPress={onPressHandler}>Done</CompleteTaskText>
    </TouchableHighlight>
  );
};

export default CompleteTaskButton;