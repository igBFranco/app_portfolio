import React, { useEffect, useState } from 'react';
import { View, Text , Button, LogBox, ScrollView, StyleSheet, Image, TouchableOpacity, Linking, Dimensions, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from './Modal.js';


export default function SobreScreen({ navigation }) {

    const [showModal, setModal] = useState(false);
  
    const abrirModalContato = ()=>{
      setModal(!showModal);
    }
  
    
    return (
      <View style={{ flex: 1}}>
  
        {
          (showModal) ?
          <Modal showModal={showModal} setModal={setModal} abrirModalContato={abrirModalContato}/>
          :
          <View></View>
        }
  
        <View style={{ flex: 1, padding:10}}>
          <View style={styles.containerSobre}>
                <Image source={{uri: 'http://1.gravatar.com/avatar/1f1c7c76fc6e11ae275fe52525522795?s=200'}} style={{width:100, height:100, borderRadius:100}}/>
                <Text style={styles.textHeader}>Igor Bueno Franco</Text>
                <TouchableOpacity onPress={() =>abrirModalContato()} style={styles.btnContact}>
                  <Ionicons name="ios-mail" size={25} color='white'></Ionicons>
                  <Text style={styles.btnTextContact}>Entre em Contato </Text>
                </TouchableOpacity>
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
                
              </View>
          </ScrollView>
        </View>
      </View>
    );
  }
  

const styles = StyleSheet.create({

    container:{
      backgroundColor:'white',
      borderRadius:20 
    },
    containerSobre:{
      backgroundColor:'#223656',
      borderRadius:20,
      flexDirection:'column', 
      alignItems:'center', 
      padding:20,
      marginBottom:15
    },
    textHeader:{
      color:'white',
      fontSize:25,
      margin:10,
      fontWeight:'400',
    },
    btnNavigation:{
      backgroundColor:'#223656',
      padding:20,
      marginTop:15,
      flexDirection:'row',
      borderRadius:30,
    },
    btnSite:{
      backgroundColor:'#223656',
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
      backgroundColor:'#223656',
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
    btnContact:{
      backgroundColor:'#F08C4A',
      padding:15,
      borderRadius:20,
      //shadowColor:'black',
      //shadowOpacity:1000,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      height:60,
      marginTop:10,
      width:'90%'
    },
    btnTextContact:{
      fontSize:20,
      color:'white',
      padding:5,
      fontWeight:'400',
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