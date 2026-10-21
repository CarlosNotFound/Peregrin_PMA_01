import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Zadaj ulohu...." /> 
      <Button title="ADD"/>
      </View>
      <Text>:::::UDALOSTI:::::</Text>
      <StatusBar style="auto" />


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  input: { borderWidth: 3, borderColor: "#FFFFFF", borderRadius: 8},

  flatList: {
    flex: 1,
    marginTop: 20,
  },
  
});

