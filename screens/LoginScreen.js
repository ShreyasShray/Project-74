import * as React from 'react';
import {
    KeyboardAvoidingView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Image
} from 'react-native';
import firebase from 'firebase';
import AppHeader from '../components/AppHeader';

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:''
        }
    }
    Login=async(email, password)=>{
        if(email && password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email, password)
                if(response ){
                    this.props.navigation.navigate('TabNavigator')
                }
            }
            catch(error){
                switch(error.code){
                    case 'auth/user-not-found':Alert.alert("user doesn't exists")
                        break
                    case 'auth/invailid-email' :Alert.alert("Incorrect email or password")
                }
            }
        }else{
            Alert.alert('Enter email and password')
        }
    }
    render(){
        return(
            <KeyboardAvoidingView>
                <AppHeader/>
                <View style={styles.boxContainer}>
                <Image source={require('../assets/bed.png')} style={{width:300, height:93, borderWidth:2, borderRadius:20, marginTop:30}}/>
                    <TextInput style={styles.inputBox} placeholder="Enter your registered Email" onChangeText={(text)=>{this.setState({emailId:text})}}></TextInput>
                    <TextInput style={styles.inputBox} placeholder="Enter your Password" onChangeText={(text)=>{this.setState({password:text})}}></TextInput>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.Login(this.state.emailId, this.state.password)}}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    inputBox:{
        marginTop:30,
        borderWidth:1.4,
        borderRadius:6,
        width:300,
        paddingLeft:4
    },
    boxContainer:{
        alignItems:'center'
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    },
    buttonStyle:{
        backgroundColor:'skyblue',
        borderRadius:4,
        padding:6,
        marginTop:60,
        width:140
    }
})