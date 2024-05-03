import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import agregarDo from './src/agregarDo'

export default function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = index => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Tittle}>TO DO LIST</Text>

      <View style={styles.containerADD}>

      <TextInput
          style={styles.input}
          placeholder='Escriba una tarea'
          value={newTask}
          onChangeText={text => setNewTask(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={{ textAlign: 'center', color: 'white' }}>Agregar</Text>
        </TouchableOpacity>

      </View>

      {tasks.map((task, index) => (
        <View key={index} style={styles.containerToDo}>
          <View style={styles.containerTarea}>
            <Text style={{ width: 250 }}>{task}</Text>
            <TouchableOpacity onPress={() => handleDeleteTask(index)}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
  Tittle: {
    paddingTop: 50,
    fontSize: 25,
  },
  containerADD: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 360,
    marginTop: 20
  },
  button:{
    backgroundColor: 'blue',
    height: 30,
    width: 125,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2
  },
  input:{
    height: 40,
    width: 220,
    borderRadius: 2,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingLeft: 10
  },
  containerToDo:{
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 355,
    marginTop: 20,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#EBEBEB',
    borderRadius: 5
  },
  containerTarea:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 330,
    height: 35,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'gray',
    borderStyle: 'solid',
    backgroundColor: 'white',
    borderWidth: 1
  }

});
