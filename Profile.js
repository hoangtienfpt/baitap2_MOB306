import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React from 'react';
import App from './App';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Editprofile from './Editprofile';




const Profile = (props) => {
    const { route } = props;
    const name = [route.params.Name, route.params.Age, route.params.Diachi, route.params.SDT, route.params.Email];
    const pusheditage = route.params.Age;

    const nav2 = props.navigation;

    return (
        <View style={styles.contener}>
            <Image source={require('./assets/anh.jpg')} style={{ width: 100, height: 100, borderRadius: 100 }} />
            <Text>Ho va ten:{name[0]}</Text>
            <Text>Tuoi:{name[1]}</Text>
            <Text>Dia chi:{name[2]}</Text>
            <Text>SDT:{name[3]}</Text>
            <Text>Email:{name[4]}</Text>
            <Button title='sua' onPress={() => { nav2.navigate('Editprofile' ,{name , pusheditage})}} />
        </View>
    )
}

export default Profile
const styles = StyleSheet.create({
    contener: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})