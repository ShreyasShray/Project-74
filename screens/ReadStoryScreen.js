import * as React from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import AppHeader from '../components/AppHeader';
import db from '../config'
 
export default class ReadStoryScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            allStories:[],
            dataSource:[],
            search:''
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
    searchFilterFunction=(text)=>{
        const newData = this.state.allStories.filter((item)=>{
            const itemData = item.Title?item.Title.toUpperCase():'';
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            dataSource: newData,
            search:text
        });
    }
    render(){
        return(
            <View>
                <AppHeader/>
                <SearchBar
                    placeholder={"Search here..."}
                    onChangeText={(text)=>{this.searchFilterFunction(text)}}
                    onClear={(text)=>{this.searchFilterFunction('')}}
                    value={this.state.search}
                />
                <FlatList
                    data={this.state.search === ""?(this.state.allStories):(this.state.dataSource)} renderItem={({item})=>(
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