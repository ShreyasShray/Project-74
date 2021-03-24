import * as React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory:{screen: WriteStoryScreen},
  ReadStory:{screen: ReadStoryScreen}
},
{defaultNavigationOptions:({navigation})=>({
  tabBarIcon:({})=>{
    const routeName = navigation.state.routeName;
    if(routeName === "WriteStory"){
      return(
        <Image
        source={require("./assets/Pen.png")}
          style={{width:40 , height:40}}
          ></Image>
          );
        }
        else if(routeName === "ReadStory"){
          return(
            <Image 
            source={require ("./assets/Reading.png")}
            style={{width:40 , height:40}}
        ></Image>
      );
    }
  }
})});

const AppContainer = createAppContainer(TabNavigator);