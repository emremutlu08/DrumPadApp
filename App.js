import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Audio } from "expo-av";

const drumKit = {
  "bass1": require("./assets/bass.mp3"),
  "bass2": require("./assets/bass2.mp3"),
  "bass3": require("./assets/bass3.mp3"),
  "cymbal": require("./assets/cymbal.mp3"),
  "cymbal2": require("./assets/cymbal2.mp3"),
  "drumstick": require("./assets/drumstick.mp3"),
  "hihat": require("./assets/hihat.mp3"),
  "snare": require("./assets/snare.mp3"),
  "tom": require("./assets/tom.mp3"),
}

const colors = {
  "bass": "#c0392b",
  "cymbal": "#2980b9",
  "drumstick": "#34495e",
  "hihat": "#8e44ad",
  "snare": "#d35400",
  "tom": "#95a5a6" 
}

export default class App extends React.Component {

  playSound = async drumKitSound => {

    try {
      
      const soundObject = new Audio.Sound();

      const path = drumKit[drumKitSound]
      await soundObject.loadAsync(path)
      await soundObject.playAsync().then(status=>{
        console.log(status)
        
        setTimeout(() => {
          soundObject.unloadAsync().then(s=>{
            console.log(s)
          })
        }, status.durationMillis);
      })

    } catch (error) {
      console.log(error)
    }

  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.rowContainer}>

          <TouchableOpacity
            onPress={()=>{
              this.playSound("bass1")
            }}
            style={[{
              backgroundColor: colors["bass"]
            },styles.button]}
          ></TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{
              this.playSound("bass2")
            }}
            style={[{
              backgroundColor: colors["bass"]
            },styles.button]}
          ></TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{
              this.playSound("bass3")
            }}
            style={[{
              backgroundColor: colors["bass"]
            },styles.button]}
          ></TouchableOpacity>

        </View>

        <View style={styles.rowContainer}>

          <TouchableOpacity
            onPress={()=>{
              this.playSound("cymbal")
            }}
            style={[{
              backgroundColor: colors["cymbal"]
            },styles.button]}
          ></TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{
              this.playSound("cymbal2")
            }}
            style={[{
              backgroundColor: colors["cymbal"]
            },styles.button]}
          ></TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{
              this.playSound("drumstick")
            }}
            style={[{
              backgroundColor: colors["drumstick"]
            },styles.button]}
          ></TouchableOpacity>
          
        </View>

        <View style={styles.rowContainer}>

          <TouchableOpacity
            onPress={()=>{
              this.playSound("hihat")
            }}
            style={[{
              backgroundColor: colors["hihat"]
            },styles.button]}
          ></TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{
              this.playSound("snare")
            }}
            style={[{
              backgroundColor: colors["snare"]
            },styles.button]}
          ></TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{
              this.playSound("tom")
            }}
            style={[{
              backgroundColor: colors["tom"]
            },styles.button]}
          ></TouchableOpacity>
          
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    justifyContent: "center"
  },
  rowContainer: {
    flexDirection: "row"
  },
  button: {
    flex: 1,
    height: 130,
    margin: 10,
    borderRadius: 4
  }
});
