
import React, { useEffect, useState } from 'react';
import { View, Text , Button, LogBox, ScrollView, StyleSheet, Image, TouchableOpacity, Linking, Dimensions, TextInput} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function PortfolioScreen({ navigation }) {

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
  
  });