import React, { FC } from 'react';
import { View, ScrollView } from 'react-native';
import { Avatar, Description, About, PersonalInfo } from '../../components/styled';

const HomePage: FC = () => {
  return (
    <ScrollView>
      <PersonalInfo>
        <Avatar source={require('../../assets/portrait.jpg')} />
        <View>
          <Description>Oliver Troy</Description>
          <Description>5 years old</Description>
          <Description>Vizsla</Description>
        </View>
      </PersonalInfo>
      <About>The Vizsla is a dog breed from Hungary and belongs to the FCI group 7.
        The Hungarian or Magyar Vizsla are sporting dogs and loyal companions.
        The Vizsla's medium size is one of the breed's most appealing characteristics.
        As a hunter of fowl and upland game, the Vizsla has held a prominent position among sporting dogs
        – that of household companion and family dog.</About>
      <About>The Vizsla is a natural hunter endowed with an excellent nose and
        outstanding trainability. It was bred to work in fields, forests or bodies of water.
        Although they are lively, gentle-mannered, demonstrably affectionate and sensitive, they are also
        fearless and possess a well-developed protective instinct.</About>
    </ScrollView>
  );
};

export default HomePage;