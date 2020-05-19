import React from 'react';
import { TouchableHighlight } from "react-native";
import { DeleteButtonText } from './styled';

const DeleteTaskButton = (props) => {
  return (
      <TouchableHighlight>
          <DeleteButtonText onPress={() => props.onDeleteTask(props.id)}>Delete</DeleteButtonText>
      </TouchableHighlight>
  );
};

export default DeleteTaskButton;