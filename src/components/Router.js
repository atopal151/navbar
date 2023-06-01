import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homepage/HomeScreen';
import FavoriteScreen from '../screens/favoritepage/FavoriteScreen';
import ProfileScreen from '../screens/profilepage/ProfileScreen';
import Icon from "react-native-vector-icons/Ionicons"
import ItemCardDetailScreen from '../screens/homepage/ItemCardDetailScreen';



const HomeStack=createNativeStackNavigator();

function HomeStackScreen() {
  return (
      <HomeStack.Navigator >
          <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{tabBarShowLabel:false, headerShown:false}} />
          <HomeStack.Screen name="DetailItem" component={ItemCardDetailScreen} options={{tabBarShowLabel:false, headerShown:true}} />
      </HomeStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

const TabBarIcon = ({ focused, name }) => {
    let iconName, iconSize, iconColor;
    if (name === 'HomeStackScreen') {
      iconName = focused ? 'home' : 'home-outline';
      iconSize = focused ? 28 : 22;
      iconColor = focused ? '#f1c40f' : '#AAAAAA';
    } else if (name === 'FavoriteScreen') {
      iconName = focused ? 'heart' : 'heart-outline';
      iconSize = focused ? 28 : 22;
      iconColor = focused ? '#f1c40f' : '#AAAAAA';
    } else if (name === 'ProfilScreen') {
      iconName = focused ? 'person' : 'person-outline';
      iconSize = focused ? 28 : 22;
      iconColor = focused ? '#f1c40f' : '#AAAAAA';
    }
    return <Icon name={iconName} size={iconSize} color={iconColor}/>;
  };
  


function TabBar() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => TabBarIcon({ focused, name: route.name }),
            tabBarStyle: {
              backgroundColor: '#FFFFFF',
              borderTopWidth: 0, // Tab çubuğunun üst çerçevesini kaldırır
              elevation:0
            },
            tabBarShowLabel:false,
            headerShown:false,
            tabBarLabelStyle: {
              fontSize: 12,
            },
          })} >
            <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} />
            <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
            <Tab.Screen name="ProfilScreen" component={ProfileScreen}  />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

export default class Router extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="TabBar" component={TabBar} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
