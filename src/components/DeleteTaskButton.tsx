import React from 'react';
import {TouchableHighlight, Button, Text, View, StyleSheet} from "react-native";
import { DeleteButtonText } from './styled';

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  }
});

const DeleteTaskButton = (props) => {
  return (
      <TouchableHighlight>
          <DeleteButtonText onPress={() => props.onDeleteTask(props.id)}>Delete</DeleteButtonText>
      </TouchableHighlight>
  );
};

export default DeleteTaskButton;