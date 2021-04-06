import * as React from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList
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
                <FlatList
                    data={this.state.allStories} renderItem={({item})=>(
                        <View style={{borderWidth:1.4, marginLeft:5, marginRight:5, marginTop:6, paddingLeft:4, backgroundColor:'pink'}}>
                            <Text>Title: {item.Title}</Text>
                            <Text>Author: {item.Author}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index)=>index.toString()}
                ></FlatList>
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