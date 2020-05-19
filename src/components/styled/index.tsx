import React from 'react';
import styled from 'styled-components';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { Task, TaskList } from '../index';
import {Colors} from '../../constants/Colors';

export const PersonalInfo = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 100px;
`;

export const Description = styled.Text`
   margin-top: 10px;
   margin-left: 30px;
   font-size: 25px;
   color: ${Colors.darkGray};
`;

export const About = styled.Text`
   margin-top: 20px;
   margin-left: 20px;
   margin-right: 15px;
   font-size: 18px;
   line-height: 25px;
   color: ${Colors.darkGray};
`;

export const Wrapper = styled.View`
   display: flex;
   justify-content: space-around;
   align-items: center;
   flex-direction: row;
   flex-wrap: wrap;
`;

export const InfoWrapper = styled(Wrapper)``;

export const ArticleImage = styled.Image`
   width: 150px;
   height: 150px;
   margin-top: 20px;
`;

export const DescriptionTextInfo = styled.Text`
   width: 50%;
   color: ${Colors.darkGray};
`;

export const ArticleInfo = styled.Text`
   width: 95%;
   color: ${Colors.darkGray};
`;

export const ArticleImageRound = styled.Image`
   width: 120px;
   height: 120px;
   margin-top: 20px;
   border-radius: 100px;
`;

export const ToDoWrapper = styled(Wrapper)``;


export const TaskWrapper = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const TaskTitle = styled.Text`
    font-size: 25px;
    line-height: 30px;
    height: 30px;
    width: 90%;
    margin: 15px auto 0 auto;
    color: ${Colors.darkGray};
`;

export const TaskDescription = styled.Text`
    width: 90%;
    margin: 0 auto;
    color: ${Colors.gray}
    font-size: 18px; 
    line-height: 24px;
    height: 24px;
`;

export const Line = styled.View`
    width: 80%;
    margin: 15px auto 0 auto;
    color: #a2aab0;
    border-bottom-width:1px;
    border-bottom-color: ${Colors.darkGray}; 
`;

export const TaskListWrapper = styled.View`

`;

export const AddTaskTitle = styled.TextInput`
    height: 40px;
    padding-left: 10px;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    border-bottom-width: 1px ;
    border-bottom-color: ${Colors.darkBlue};
`;

export const AddTaskDescriptionWrapper = styled.View`
    padding-left: 10px;    
    margin-left: 10px;
    margin-right: 10px;
    border-bottom-width: 1px;
    border-bottom-color:${Colors.darkBlue};
`;

export const AddTaskDescriptionInput = styled.TextInput`
    height: 150px;
    justify-content: flex-start;
    font-size: 20px;
`;

export const DeleteButtonText = styled.Text`
    color: ${Colors.red};
    font-size: 20px;
    width: 75px;
    line-height: 84px;
    text-align: center;
`;

export const EditButtonText = styled(DeleteButtonText)`
    color: ${Colors.blue};
`;

export const CompleteTaskText = styled(DeleteButtonText)`
    color: ${Colors.green};
`;

export const AddNewTaskButton = styled.TouchableOpacity`
    margin-top: 40px;
    border: 1px solid ${Colors.darkBlue};
    padding: 10px;  
    border-radius: 100px;
    width: 60%;
`;

export const AddNewTaskText = styled.Text`
    font-size: 25px;    
    color: ${Colors.darkBlue};
    text-align: center;
`;

export const AddTaskButton = styled(AddNewTaskButton)`    
    margin: 40px auto;
   
`;

export const AddTaskText = styled(AddNewTaskText)`
`;


