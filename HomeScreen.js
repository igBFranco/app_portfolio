import React, { useEffect, useState } from 'react';
import { View, Text , Button, LogBox, ScrollView, StyleSheet, Image, TouchableOpacity, Linking, Dimensions, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, padding:10}}>
            <View style={styles.containerHome}>
              <Image source={{uri: 'http://1.gravatar.com/avatar/1f1c7c76fc6e11ae275fe52525522795?s=200'}} style={{width:100, height:100, borderRadius:100}}/>
              <Text style={styles.textHeader}>Igor Bueno Franco</Text>
            </View>
        <ScrollView bounces='false' contentContainerStyle={{padding:20}} style={styles.container}>
            <View>
              <TouchableOpacity onPress={()=>navigation.navigate('Sobre')} style={styles.btnNavigation}>
                <Ionicons name="ios-information-circle" size={29} color='#EED590'></Ionicons>
                <Text style={{color:'white', margin:8, fontWeight:'600'}}>Sobre</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={ ()=>navigation.navigate('Portfolio')} style={styles.btnNavigation}>
                <Ionicons name="ios-ribbon" size={29} color='#EED590'></Ionicons>
                <Text style={{color:'white', margin:8, fontWeight:'600'}}>Portfolio</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://github.com/igBFranco')}} style={styles.btnNavigation}>
                <Ionicons name="logo-github" size={29} color='#EED590'></Ionicons>
                <Text style={{color:'white', margin:8, fontWeight:'600'}}>GitHub</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.linkedin.com/in/igorbuenofranco/')}} style={styles.btnNavigation}>
                <Ionicons name="logo-linkedin" size={29} color='#EED590'></Ionicons>
                <Text style={{color:'white', margin:8, fontWeight:'600'}}>LinkedIn</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.instagram.com/igorbfranco/')}} style={styles.btnNavigation}>
                <Ionicons name="logo-instagram" size={29} color='#EED590'></Ionicons>
                <Text style={{color:'white', margin:8, fontWeight:'600'}}>Instagram</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({

    container:{
      backgroundColor:'white',
      borderRadius:20 
    },
    containerHome:{
      backgroundColor:'#223656',
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