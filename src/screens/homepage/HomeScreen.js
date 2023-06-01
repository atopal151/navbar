import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import CategoryCard from './component/CategoryCard';
import ItemCard from "./component/ItemCard";


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <SafeAreaView style={styles.bodyStyle}>
        <View style={styles.body1}>
          <Text>Hi! {<Text style={{ fontWeight: 700 }}>User Surname</Text>}</Text>
        </View>
        <View style={styles.body2}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <CategoryCard category={{ title: "Electronic" }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CategoryCard category={{ title: "Car" }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CategoryCard category={{ title: "Computer" }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CategoryCard category={{ title: "Phone" }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CategoryCard category={{ title: "Tv" }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CategoryCard category={{ title: "Macbook" }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CategoryCard category={{ title: "Acer" }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CategoryCard category={{ title: "Asus" }} />
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.body3}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("DetailItem")
            }}>
              <ItemCard item={{
                title: "PRODUCT 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                  "elit.Nullam placerat ipsum et nunc pellentesque, vitae facilisis arcu malesuada."
              }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("DetailItem")
            }}>
              <ItemCard item={{
                title: "PRODUCT 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                  "elit.Nullam placerat ipsum et nunc pellentesque, vitae facilisis arcu malesuada."
              }} />
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("DetailItem")
            }}>
              <ItemCard item={{
                title: "PRODUCT 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                  "elit.Nullam placerat ipsum et nunc pellentesque, vitae facilisis arcu malesuada."
              }} />
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("DetailItem")
            }}>
              <ItemCard item={{
                title: "PRODUCT 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                  "elit.Nullam placerat ipsum et nunc pellentesque, vitae facilisis arcu malesuada."
              }} />
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("DetailItem")
            }}>
              <ItemCard item={{
                title: "PRODUCT 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                  "elit.Nullam placerat ipsum et nunc pellentesque, vitae facilisis arcu malesuada."
              }} />
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("DetailItem")
            }}>
              <ItemCard item={{
                title: "PRODUCT 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                  "elit.Nullam placerat ipsum et nunc pellentesque, vitae facilisis arcu malesuada."
              }} />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  bodyStyle: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  body1: {
    flex: 1,
    alignItems: "center", justifyContent: "flex-end",
    margin: 10
  },
  body2: {
    flex: 2,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row"
  },
  body3: {
    flex: 19,
    flexDirection: "row",
    backgroundColor: "white"
  },

});
