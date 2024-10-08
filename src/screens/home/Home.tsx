import {View, StatusBar, Text} from 'react-native';
import React from 'react';
import {styles} from './home.style';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'green'} barStyle={'light-content'} />
      <View style={styles.container}>
        <Text style={styles.text}>New update check!</Text>
      </View>
    </View>
  );
};

export default Home;
