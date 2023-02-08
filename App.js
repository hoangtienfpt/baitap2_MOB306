import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import Editprofile from './Editprofile';
const Stack  = createNativeStackNavigator();
const home=(props)=>{
  const nav =props.navigation;

  return(<View style = {styles.container}>
      <Button title='Thong tin ca nhan' onPress={()=>nav.navigate('Profile' ,
      {Name:"Quan Hoang Tien", Age:20 , Diachi:"Duy phien Tam Duong Vinh Phuc" , 
      SDT:"0383227018" , Email:"tienqhph27776@gmail.com"})}/>
  </View>)
}

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='App'>
      <Stack.Screen name='App' component={home}/>
      <Stack.Screen name='Profile' component={Profile}/>
      <Stack.Screen name='Editprofile' component={Editprofile}/>
    
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
