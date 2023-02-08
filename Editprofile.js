import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'


const Editprofile = (props) => {
    const {route} = props;
  const arrayprofile = route.params.name;
  const editage = route.params.pusheditage;
  const nav3 = props.navigation;
  const[Name , Setname] = useState('')
  const[age , Setage] = useState(0)
  const[adress , Setadress] = useState('')
  const[Sdt , SetSdt] = useState('')
  const[email , Setemail] = useState('')
  return (
    <View style={styles.contener}>
      <View >
        <Text>{}</Text>
        <TextInput placeholder='sua ten' value={arrayprofile[0]} onChangeText={(text) => {Setname(text)}} style={styles.textinput}/>
        <TextInput placeholder='sua tuoi' value={String(arrayprofile[1])} onChangeText={(text) => {Setage(text) }} style={styles.textinput}  keyboardType='numeric' />
        <TextInput placeholder='sua diachi' value={arrayprofile[2]} onChangeText={(text) => {Setadress(text) }} style={styles.textinput}/>
        <TextInput placeholder='sua sdt' value={arrayprofile[3]} onChangeText={(text) => { SetSdt(text)}} style={styles.textinput}/>
        <TextInput placeholder='sua email' value={arrayprofile[4]} onChangeText={(text) => { Setemail(text)}} style={styles.textinput}/>
      </View>

      <View style={styles.buttonn}>
        <Button title='Huy' onPress={() => {nav3.navigate('App')}} />
        <Button title='Luu' onPress={() => { }} />
      </View>
    </View>
  )
}

export default Editprofile
const styles = StyleSheet.create({
  contener: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textinput:{
      borderRadius:16,
      height: 40,
      width: 200,
      margin: 10,
      borderWidth: 1,
      padding: 10,
    },

  
  buttonn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: "50%",
  

  }
})