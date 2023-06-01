import React from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';
import { Card } from 'react-native-elements'


const ItemCard = ({ item }) => {
  return (
    <View style={styles.container}>
    <Card containerStyle={styles.cardContainer} borderRadius={10}>
      <View style={styles.cardContent}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>
           {item.description}
          </Text>
        </View>
      </View>
    </Card>
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
    marginBottom: 16,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color:"white",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
  },
  cardContainer: {
    width: '90%',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2
  },
  image: {
    width: 110,
    height: 130,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
});

export default ItemCard;