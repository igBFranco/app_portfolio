import React, { useEffect, useState } from 'react';
import { View, Text , Button, LogBox, ScrollView, StyleSheet, Image, TouchableOpacity, Linking, Dimensions, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import HomeScreen from './HomeScreen.js'
import Modal from './Modal.js';
import PortfolioScreen from './PortfolioScreen.js';
import SobreScreen from './SobreScreen.js';


LogBox.ignoreAllLogs(true);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto"/>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Sobre') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }else if (route.name === 'Portfolio') {
              iconName = focused ? 'ios-ribbon' : 'ios-ribbon-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#223656',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
        <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;



const styles = StyleSheet.create({

  container:{
    backgroundColor:'white',
    borderRadius:20 
  },
  containerHome:{
    backgroundColor:'white',
    borderRadius:20,
    flexDirection:'row', 
    alignItems:'center', 
    padding:20,
    marginBottom:15
  },
  containerSobre:{
    backgroundColor:'white',
    borderRadius:20,
    flexDirection:'row', 
    alignItems:'center', 
    padding:20,
    marginBottom:15
  },
  textHeader:{
    color:'#011627',
    fontSize:25,
    margin:10,
    fontWeight:'400',
  },
  btnNavigation:{
    backgroundColor:'#011627',
    padding:20,
    marginTop:15,
    flexDirection:'row',
    borderRadius:30,
  },
  btnSite:{
    backgroundColor:'#011627',
    padding:15,
    margin:15,
    flexDirection:'row',
    borderRadius:20,
    justifyContent:'center'
  },
  card:{
    backgroundColor:'#dedede',
    flex:1,
    height:'100%',
    borderRadius:20,
  },
  cardHeader:{
    backgroundColor:'#011627',
    padding:15,
    borderRadius:20,
    //shadowColor:'black',
    //shadowOpacity:50,
    flexDirection:'row',
    alignItems:'center',
    height:80,
    marginBottom:10
  },
  cardHeaderText:{
    fontSize:25,
    color:'white',
    padding:5,
  },
  cardText:{
    fontSize:15,
    color:'black',
    padding:20,
    alignItems:'center'
  },
  cardHeaderContact:{
    backgroundColor:'#fca503',
    padding:15,
    borderRadius:20,
    //shadowColor:'black',
    //shadowOpacity:50,
    flexDirection:'row',
    alignItems:'center',
    height:80,
    marginTop:10
  },
  cardHeaderTextContact:{
    fontSize:25,
    color:'white',
    padding:5,
  },
  modalParent:{
    position:'absolute',
    left:0,
    top:0,
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(0,0,0,0.5)',
    zIndex:1
  },
  boxModal:{
    backgroundColor:'white',
    borderRadius:20,
    height:370,
    width:'90%',
    position:'absolute',
    left:0,
    top:'50%',
    marginTop:-185,
    marginLeft:'5%',
    padding:10,
  },
  btnModal:{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    borderRadius:20,
  },
  inputModal:{
    width:'100%',
    height:50,
    borderRadius:20,
    borderColor:'#ccc',
    borderWidth:1,
    padding:10,
  }

});