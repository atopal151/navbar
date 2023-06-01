import React, { Component } from 'react';
import { Text, StyleSheet, View,Image, SafeAreaView } from 'react-native';

export default class ProfileScreen extends Component {
  render() {
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' }}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>John Doe</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla convallis consequat ligula, at dapibus tellus elementum vel.
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  profileImageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#fff',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    elevation:5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  
  },
  profileImage: {
    width: '100%',
    height: '100%',
    
  },
  nameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
  },
});
