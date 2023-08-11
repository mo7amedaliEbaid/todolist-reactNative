import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task  from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.tasksWrapper}>
<Text style={styles.sectionTitle}>
    Todays tasks
</Text>
<View style={styles.items}>
    <Task text={'Task 1'} />
    <Task text={'Task 2'} />
    <Task text={'Task 3'} />
</View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#c8e8e5',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
    width:320,
    alignContent:'center'
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:30,

  },
}); 