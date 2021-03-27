import * as React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    ToastAndroid
} from 'react-native';
import AppHeader from '../components/AppHeader';
import firebase from 'firebase';
import db from '../config';

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            story:''
        }
    }
    handleSubmit=async()=>{
        if(this.state.story!=="" || this.state.title!=="" || this.state.author!==""){
            db.collection("Stories").add({
                Title:this.state.title,
                Author:this.state.author,
                Story:this.state.story,
            })
            this.setState({
                title:'',
                author:'',
                story:''
            })
        }else{
            ToastAndroid.show("Some box is empty Or the story is Submmited", ToastAndroid.SHORT)
        }
    }
    render(){
        return(
            <View>
                <AppHeader/>
                <View style={{alignItems:'center'}}>
                    <TextInput style={style.inputbox} placeholder={"Story Title"} onChangeText={text=>{this.setState({title:text})}}></TextInput>
                    <TextInput style={style.inputbox} placeholder={"Author"} onChangeText={text=>{this.setState({author:text})}}></TextInput>
                    <TextInput style={style.inputbox2} multiline={true} placeholder={"Write your Story"} onChangeText={text=>{this.setState({story:text})}}></TextInput>
                    <TouchableOpacity style={style.buttonstyle} onPress={()=>{this.handleSubmit()}}>
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