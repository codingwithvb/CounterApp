import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  componentDidMount(){
    setInterval(this.incrementCounter, 1000)
  }
  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  decreaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  resetCounter = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    return (
      <View>
        <Text style={{
          fontSize:20,
          fontWeight:"bold",
          marginLeft:140,
          marginTop:100
        }}>
        {this.state.counter}</Text>
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 50 }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'lightgrey',
              width: 50,
              height: 50,
              alignItems: 'center',
              marginLeft: 50
            }}
            onPress={this.incrementCounter}>
            <Text
              style={{
                justifyContent: 'center',
                fontWeight: 'bold',
                alignSelf: 'center',
                fontSize: 30,
              }}>
              +
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'lightgrey',
              width: 50,
              height: 50,
              alignItems: 'center',
              marginLeft: 25,
            }}
            onPress={this.decreaseCounter}>
            <Text
              style={{
                justifyContent: 'center',
                fontWeight: 'bold',
                alignSelf: 'center',
                fontSize: 30,
              }}>
              -
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'lightgrey',
              width: 50,
              height: 50,
              alignItems: 'center',
              marginLeft: 25,
              justifyContent: 'center',
            }}
            onPress={this.resetCounter}>
            <Text
              style={{
                justifyContent: 'center',
                fontWeight: 'bold',
                alignSelf: 'center',
                fontSize: 15,
              }}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
