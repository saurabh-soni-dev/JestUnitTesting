import { View, StatusBar, Text } from 'react-native';
import React from 'react';
import { styles } from './home.style';
import useCount from '../../../useCount';

const Home = () => {
  const {count} = useCount(); 

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>New update check! {count}</Text>
      </View>
    </View>
  );
};

export default Home;
