import * as React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import AppHeader from '../components/AppHeader'

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View>
                <AppHeader/>
                <Text style={style.textstyle}>Read Story</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    textstyle:{
        textAlign:'center',
        fontSize:20,
        marginTop:150
    }
})