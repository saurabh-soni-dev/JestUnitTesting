import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import CodePush from 'react-native-code-push';
import Home from './src/screens/home/Home';

let codePushOptions = {
  // deploymentKey: '1vS9yFGaLUsQmfiCv9tEUc5YT57NHAfYLNKEKK',
  // updateDialog: {
  //   render: () => (
  //     <View style={styles.container}>
  //       <Text style={styles.title}>Update Available</Text>
  //       <Text style={styles.description}>
  //         An update is available for this app. You can install it now or later.
  //       </Text>
  //       <TouchableOpacity style={styles.button} onPress={() => CodePush.sync()}>
  //         <Text style={styles.buttonText}>Install Now</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity
  //         style={styles.button}
  //         onPress={() => CodePush.clearUpdates()}>
  //         <Text style={styles.buttonText}>Later</Text>
  //       </TouchableOpacity>
  //     </View>
  //   ),
  // },
  // checkFrequency: CodePush.CheckFrequency.MANUAL,
};
const App = () => {
  return <Home />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
