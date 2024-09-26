import { View, StatusBar } from 'react-native';
import React from 'react';
import { styles } from './home.style';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
    </View>
  );
};

export default Home;
