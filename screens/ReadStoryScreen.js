import * as React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config'

export default class ReadStoryScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            allStories:[]
        }
    }
    componentDidMount=async()=>{
        const queries = await db.collection("Stories").limit(10).get()
        queries.docs.map((doc)=>{
            this.setState({
                allStories:[...this.state.allStories, doc.data()] 
            })
        })
    }
    render(){
        return(
            <View>
                <AppHeader/>
                <ScrollView>
                    {this.state.allStories.map((items, index)=>{
                        return(
                            <View key={index} style={style.storyContainer}>
                                <Text style={{fontWeight:'bold'}}>{"Story Title :  " + items.Title}</Text>
                                <Text style={{fontWeight:'bold'}}>{"Author       :  " + items.Author}</Text>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
}

const style = StyleSheet.create({
    storyContainer:{
        paddingLeft:10,
        marginTop:10,
        borderWidth:1.6,
        backgroundColor:'pink'
    }
})