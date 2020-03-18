
import React, { FC } from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

const ToDoListText = styled.Text`
    margin: 120px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;

interface IToDoProps {
  name: string;

}

const ToDoList: FC<IToDoProps> = props => {
  return (
    <View>
      <ToDoListText>ToDoText {props.name}</ToDoListText>
      {/* <NewButton /> */}
    </View>

  );
};


// const NewButton = () => {
//   const handleClick = () => {
//     console.log('click')
//   }
//   return (
//     <View>
//       <Button
//         title="Press me"
//         onPress={handleClick}
//       />
//     </View>

//   );
// };


export default ToDoList;
