import React, { FC } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

const styles = StyleSheet.create({
  sezeAndPosition: {
    width: 100,
    height: 100,
    marginTop: 30,
    marginLeft: 30,
  },
  name: {
    color: 'black',
    marginTop: 20,
    marginLeft: 30,
    fontSize: 22,
  },
  about: {
    color: 'black',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 18,
  },
});

// interface IHomeProps {
//   name: string;

// }

const Home = () => {
  return (
    <View>
      <Image style={styles.sezeAndPosition} source={require('../../assets/picture.jpg')} />
      <Text style={styles.name}>Name Surname</Text>
      <Text style={styles.about}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio, doloribus vero eius eveniet maxime, incidunt recusandae aliquid ab soluta voluptatem minima. Earum cumque, facilis ipsa placeat quis optio distinctio.</Text>

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


export default Home;
