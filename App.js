import * as React from 'react';
import { View, Text , Button, LogBox, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';


LogBox.ignoreAllLogs(true);

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding:10}}>
      <ScrollView contentContainerStyle={{padding:20}} style={styles.container}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={{uri: 'http://1.gravatar.com/avatar/1f1c7c76fc6e11ae275fe52525522795?s=200'}} style={{width:100, height:100, borderRadius:100}}/>
            <Text style={styles.textHeader}>Igor Bueno Franco</Text>
          </View>
          <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Sobre')} style={styles.btnNavigation}>
              <Ionicons name="ios-information-circle" size={29} color='white'></Ionicons>
              <Text style={{color:'white', margin:8}}>Sobre</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Portfolio')} style={styles.btnNavigation}>
              <Ionicons name="ios-ribbon" size={29} color='white'></Ionicons>
              <Text style={{color:'white', margin:8}}>Portfolio</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </View>
  );
}

function SobreScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sobre</Text>
      <Button
        title="Ir para a tela Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function PortfolioScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Portfolio</Text>
      <Button
        title="Ir para a tela Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}


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
          tabBarActiveTintColor: '#1d2e8c',
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
  textHeader:{
    color:'#1d2e8c',
    fontSize:25,
    marginLeft:20,
    fontWeight:'400',
  },
  btnNavigation:{
    backgroundColor:'#1d2e8c',
    padding:20,
    marginTop:15,
    flexDirection:'row',
    borderRadius:30,
  }

});