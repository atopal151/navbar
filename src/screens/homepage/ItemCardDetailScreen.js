import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';

export default class ItemCardDetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text> textInComponent </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center"
  }
});
