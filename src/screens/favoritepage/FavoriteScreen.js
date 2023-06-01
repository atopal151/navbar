import React, { Component } from 'react';
import {StyleSheet, View ,ScrollView, SafeAreaView} from 'react-native';
import FavoriItemCard from './component/FavoriItemCard';

export default class FavoriteScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.bodyStyle}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <FavoriItemCard item={{
              title: "PRODUCT 1",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing "
            }} />
            <FavoriItemCard item={{
              title: "PRODUCT 1",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing "
            }} />
            <FavoriItemCard item={{
              title: "PRODUCT 1",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing "
            }} />
            <FavoriItemCard item={{
              title: "PRODUCT 1",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing "
            }} />
            <FavoriItemCard item={{
              title: "PRODUCT 1",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing "
            }} />
          </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  bodyStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
});
