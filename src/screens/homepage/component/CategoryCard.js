import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryCard = ({ category }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{category.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f1c40f',
    borderRadius: 8,
    padding: 15,
    margin:3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color:"white",
  },

});

export default CategoryCard;