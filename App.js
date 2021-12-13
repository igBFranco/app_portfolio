import React, { useEffect, useState } from 'react';
import { View, Text , Button, LogBox, ScrollView, StyleSheet, Image, TouchableOpacity, Linking, Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';


LogBox.ignoreAllLogs(true);

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding:10}}>
          <View style={styles.containerHome}>
            <Image source={{uri: 'http://1.gravatar.com/avatar/1f1c7c76fc6e11ae275fe52525522795?s=200'}} style={{width:100, height:100, borderRadius:100}}/>
            <Text style={styles.textHeader}>Igor Bueno Franco</Text>
          </View>
      <ScrollView bounces='false' contentContainerStyle={{padding:20}} style={styles.container}>
          <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Sobre')} style={styles.btnNavigation}>
              <Ionicons name="ios-information-circle" size={29} color='white'></Ionicons>
              <Text style={{color:'white', margin:8, fontWeight:'600'}}>Sobre</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ ()=>navigation.navigate('Portfolio')} style={styles.btnNavigation}>
              <Ionicons name="ios-ribbon" size={29} color='white'></Ionicons>
              <Text style={{color:'white', margin:8, fontWeight:'600'}}>Portfolio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://github.com/igBFranco')}} style={styles.btnNavigation}>
              <Ionicons name="logo-github" size={29} color='white'></Ionicons>
              <Text style={{color:'white', margin:8, fontWeight:'600'}}>GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.linkedin.com/in/igorbuenofranco/')}} style={styles.btnNavigation}>
              <Ionicons name="logo-linkedin" size={29} color='white'></Ionicons>
              <Text style={{color:'white', margin:8, fontWeight:'600'}}>LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.instagram.com/igorbfranco/')}} style={styles.btnNavigation}>
              <Ionicons name="logo-instagram" size={29} color='white'></Ionicons>
              <Text style={{color:'white', margin:8, fontWeight:'600'}}>Instagram</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </View>
  );
}

function SobreScreen({ navigation }) {

  const [showModal, setModal] = useState(false);

  const abrirModalContato = ()=>{
    setModal(!showModal);
  }

  
  return (
      <View style={{ flex: 1, padding:10}}>
        <View style={styles.containerSobre}>
              <Image source={{uri: 'http://1.gravatar.com/avatar/1f1c7c76fc6e11ae275fe52525522795?s=200'}} style={{width:100, height:100, borderRadius:100}}/>
              <Text style={styles.textHeader}>Igor Bueno Franco</Text>
        </View>
        <ScrollView bounces='true' contentContainerStyle={{backgroundColor:'#dedede'}} style={styles.container}>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Ionicons name="ios-information-circle" size={29} color='white'></Ionicons>
                <Text style={styles.cardHeaderText}>Dados</Text>
              </View>
              <Text style={styles.cardText}>21 Anos, Brasileiro e Luxemburguês</Text>
              <Text style={styles.cardText}>Itaiópolis - Santa Catarina</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Ionicons name="ios-school" size={29} color='white'></Ionicons>
                <Text style={styles.cardHeaderText}>Formação</Text>
              </View>
              <Text style={styles.cardText}>Universidade do Contestado - UnC</Text>
              <Text style={styles.cardText}>Engenharia de Software</Text>
              <Text style={styles.cardText}>Bacharelado</Text>
              <Text style={styles.cardText}>2020 - 2023</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Ionicons name="desktop" size={29} color='white'></Ionicons>
                <Text style={styles.cardHeaderText}>Tecnologias</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Ionicons name="logo-html5" size={29} color='black'></Ionicons>
                <Text style={styles.cardText}>HTML 5</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Ionicons name="logo-css3" size={29} color='black'></Ionicons>
                <Text style={styles.cardText}>CSS 3</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name="logo-react" size={29} color='black'></Ionicons>
                <Text style={styles.cardText}>React Native</Text>
              </View>
              <TouchableOpacity onPress={() =>abrirModalContato()} style={styles.cardHeaderContact}>
                <Ionicons name="ios-mail" size={29} color='white'></Ionicons>
                <Text style={styles.cardHeaderTextContact}>Entre em Contato </Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
  );
}

function PortfolioScreen({ navigation }) {

  const[images, setImages] = useState([
    {
      img: require('./resources/img.png'),
      width:0,
      height:0,
      ratio:0,
      website:'https://github.com/igBFranco/crud_codeigniter_m2'
    },
    {
      img: require('./resources/img2.png'),
      width:0,
      height:0,
      ratio:0,
      website:'https://github.com/igBFranco/projetoqualidade'
    },
  ]);

  const [windowWidth, setWindowWidth] = useState(0);

  const abrirNavegador = async(website)=>{
    let result = await WebBrowser.openBrowserAsync(website);
  }

  useEffect(()=> {
    let windowWidthN = Dimensions.get('window').width;
    setWindowWidth(windowWidthN - 30 - 40);
    let newImages = images.filter(function(val){
      let w = Image.resolveAssetSource(val.img).width;
      let h = Image.resolveAssetSource(val.img).height;

      val.width = w;
      val.height = h;
      val.ratio = h/w;

      return val;
    })

    setImages(newImages);

  }, [])

  return (
    <View style={{ flex: 1, padding:10}}>
      <ScrollView contentContainerStyle={{padding:20}} style={styles.container}>
        <Text style={styles.textHeader}>Últimos Projetos!</Text>

        {
          images.map(function(val){
            return(
              <View>
                <Image style={{width:windowWidth, height:windowWidth*val.ratio, resizeMode:'stretch'}} source={val.img}></Image>
                <TouchableOpacity onPress={()=>abrirNavegador(val.website)} style={styles.btnSite}><Text style={{color:'white', fontSize:'15'}}>Abrir no Navegador</Text></TouchableOpacity>
              </View>
            );
          })
        }
      </ScrollView>
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
  },
  btnSite:{
    backgroundColor:'#1d2e8c',
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
    backgroundColor:'#1d2e8c',
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

});