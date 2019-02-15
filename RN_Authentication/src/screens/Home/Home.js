import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class HomeScreen extends Component {

  render() {
    return(
      <View style={styles.contianer}>
        <Text style={styles.text}>Hi <Text style={styles.userText}>{this.props.user}!</Text></Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "black",
    fontSize: 25
  },
  userText: {
    color: "#1E90FF",
    fontSize: 25
  }
});

export default HomeScreen;
