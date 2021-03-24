import React, * as Reaact from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

class AppHeader extends React.Component{
    render(){
        return(
            <View style={Styles.textcontainer}>
                <Text style={Styles.textstyle}>Story Hub</Text>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    textcontainer:{
        backgroundColor:'pink',
        marginTop:26
    },
    textstyle:{
        textAlign:'center',
        fontSize:20,
        margin:10,
        fontWeight:'bold'
    }
})

export default AppHeader;