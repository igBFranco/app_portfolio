import { doc, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { db } from './firebase.js';


export default function Modal(props) {

  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarMensagem = ()=>{
    setDoc(doc(db, 'contato', 'contato'), {
      nome: nome,
      mensagem: mensagem});
    alert('Mensagem enviada com sucesso!');
  }


    return(
        <View style={styles.modalParent}>
          <View style={{position:'absolute', right:0, top:0, width:50, height:50, backgroundColor:'#333', zIndex:2, justifyContent:'center', borderRadius:100, margin:5}}>
            <TouchableOpacity onPress={props.abrirModalContato} style={styles.btnModal}>
              <Text style={{color:'white', textAlign:'center', fontSize:15}}>X</Text></TouchableOpacity>
          </View>
          <View style={styles.boxModal}>
              <Text style={{...styles.textHeader, fontSize:20}}>Qual o seu Nome?</Text>
              <TextInput onChangeText={(text)=>setNome(text)} style={styles.inputModal} placeholder='Digite seu nome' numberOfLines={4}></TextInput>
              <Text style={{...styles.textHeader, fontSize:20}}>Qual a sua Mensagem?</Text>
              <TextInput onChangeText={(text)=>setMensagem(text)} style={{...styles.inputModal, height:100}} placeholder='Digite sua mensagem' numberOfLines={4}></TextInput>
              <TouchableOpacity onPress={ ()=>enviarMensagem()} style={{...styles.btnNavigation, justifyContent:'center', width:'90%', marginLeft:'5%'}}>
                <Text style={{color:'white', margin:8, fontWeight:'700', fontSize:15}}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textHeader:{
      color:'#1d2e8c',
      fontSize:25,
      margin:10,
      fontWeight:'400',
    },
    btnNavigation:{
      backgroundColor:'#1d2e8c',
      padding:20,
      marginTop:15,
      flexDirection:'row',
      borderRadius:30,
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