import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Team Hortons</Text>
      <Text>Landayan, Selwyn Charlz Angelo Z.</Text>
      <Text>Marbebe, Jerome</Text>
      <Text>Matira, Neal Barton James</Text>
      <Text>Martinez, Paul Andrei</Text>
      <Text>Tayam, John Irylle Chester</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
