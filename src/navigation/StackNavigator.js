import React from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from '../screens/Home/Home';
import ListMatchsScreen from '../screens/ListMatchs/ListMatchs';
import ReportScreen from '../screens/Report/Report';
import TeamsScreen from '../screens/Teams/Teams';
import MatchScreen from '../screens/Matchs/Match';
import AddPlayerForMatch from '../screens/AddPlayerForMatch/AddPlayerForMatch';
import { fromRight } from 'react-navigation-transitions';

import SplashScreen from '../screens/SplashScreen/SplashScreen';
import Global from '../globalUtils/Globals'




const StackNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions:{
                header:null
            }
        },
        ListMatchs:{
            screen:ListMatchsScreen,
            navigationOptions: ({ navigation }) => ({
                title: "Liste des matchs",
                headerTintColor: Global.COLOR.whiteCustom,
                headerStyle: { backgroundColor: Global.COLOR.mainColor, elevation: 0, shadowOpacity: 0},
                headerTitleStyle: { color: Global.COLOR.whiteCustom },
            }),
        },
        Match:{
            screen:MatchScreen,
            navigationOptions: ({ navigation }) => ({
                headerTintColor: Global.COLOR.whiteCustom,
                headerStyle: { backgroundColor: Global.COLOR.mainColor, elevation: 0, shadowOpacity: 0},
                headerTitleStyle: { color: Global.COLOR.whiteCustom },
            }),
        },
        Report:{
            screen:ReportScreen,
            navigationOptions:{
            }
        },
        Teams :{
            screen:TeamsScreen,
            navigationOptions: ({ navigation }) => ({
                headerTintColor: Global.COLOR.whiteCustom,
                headerStyle: { backgroundColor: Global.COLOR.mainColor, elevation: 0, shadowOpacity: 0},
                headerTitleStyle: { color: Global.COLOR.whiteCustom },
            }),
        },
        SplashScreen:{
            screen:SplashScreen,
            navigationOptions:{
                header: null
            }
        },
        AddPlayerForMatch:{
            screen:AddPlayerForMatch,
            navigationOptions:{
                header: null
            }
        }
    }
    ,
    {
        initialRouteName:'Home',
        transitionConfig: () => fromRight(),
    }
);

export default createAppContainer(StackNavigator);
