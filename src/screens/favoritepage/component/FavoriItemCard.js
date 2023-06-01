import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements'


const FavoriItemCard = ({ item }) => {
    return (
        <View style={styles.container}>
        <View style={styles.row}>
          <Card containerStyle={styles.cardContainer}>
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
          <Card containerStyle={styles.cardContainer}>
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
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:3
      },
      cardContainer: {
        width: '44%',
        marginBottom: 1,
        borderRadius:10,
        margin:10
      },
      cardContent: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
      },
      image: {
        width: 130,
        height: 100,
        borderRadius: 5,
      },
      textContainer: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        marginLeft: 10,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        margin:10
      },
      description: {
        fontSize: 12,
        color: '#888',
      },
});

export default FavoriItemCard;