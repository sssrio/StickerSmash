import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { multiply } from "react-native-vt"; 

export default function App() {
  const [result, setResult] = React.useState(0);
  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!{result}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
