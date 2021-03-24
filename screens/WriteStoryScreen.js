import * as React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native';
import AppHeader from '../components/AppHeader'

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View>
                <AppHeader/>
                <View style={{alignItems:'center'}}>
                    <TextInput style={style.inputbox} placeholder={"Story Title"}></TextInput>
                    <TextInput style={style.inputbox} placeholder={"Author"}></TextInput>
                    <TextInput style={style.inputbox2} multiline={true} placeholder={"Write your Story"}></TextInput>
                    <TouchableOpacity style={style.buttonstyle}>
                        <Text style={style.buttontext}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    inputbox:{
        borderWidth:1.4,
        width:320,
        marginTop:20,
        borderRadius:4,
    },
    inputbox2:{
        borderWidth:1.4,
        width:320,
        marginTop:20,
        borderRadius:4,
    },
    buttontext:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    buttonstyle:{
        backgroundColor:'pink',
        alignItems:'center',
        textAlign:'center',
        width:100,
        marginTop:40
    }
})