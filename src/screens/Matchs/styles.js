import {StyleSheet} from "react-native"
import Global from '../../globalUtils/Globals'
import React from 'react';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Global.COLOR.mainColor,
    },
    leftTopContainer:{
        flex:2,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Global.COLOR.darkContainer,
    },
    versusIcon:{
        flex:1, height: undefined, width: undefined
    },
    middleTopContainer:{
        flex:1,
        justifyContent: 'center',
    },
    colorTitleTeam:{
        color:Global.COLOR.whiteCustom,
        textAlign:'center',
    },
    colorNamePlayer:{
        color:Global.COLOR.gradient2,
        textAlign:'center',
    },
    colorWhite:{
        color:Global.COLOR.whiteCustom,
    },
    rightTopContainer:{
        flex:2,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Global.COLOR.darkContainer,
    },
    topContainer:{
        flexDirection: 'row',
        justifyContent:'center',
        paddingBottom:'3%',
        paddingTop:'5%'
    },
    detailTeamName:{
        paddingVertical: '15%'
    },
    middleContainer: {
        flex:1,
        alignItems:'center'
    },
    botContainer: {
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    textColorResume:{
        color:Global.COLOR.gradient2
    },
    botContainerDetail:{
        width:'90%',paddingVertical:'5%'
    },
    containerResumeNameScore:{
        backgroundColor:Global.COLOR.darkContainer,flexDirection:'row',borderRadius:5,paddingVertical: '2%'
    },
    containerResumeNameDetail:{
        flex:1,paddingLeft:'3%',
    },
    dividerResume:{
        height:5
    },
    containerTab:{
        flex:1,width:'90%', backgroundColor:'gray',justifyContent:'center',borderRadius:5
    },
    dividerTab:{
        height:10
    },
    containerTabContent:{
        flex:4,width:'90%', backgroundColor:Global.COLOR.darkContainer,borderRadius:5
    },
    containerTabContentDetail:{
        flex:1, justifyContent: 'center'
    },
    containerAddPlayer:{
        flex:1,flexDirection: 'row',alignItems:'flex-start',justifyContent: 'center'
    },
    containerAddPlayerDetailRight:{
        width:'40%',marginRight:'5%',height:'85%',justifyContent:'center',alignItems:'center',backgroundColor:Global.COLOR.darkContainer, borderRadius:Global.radiusView
    },
    containerAddPlayerDetailLeft:{
        width:'40%',marginLeft:'5%',height:'85%',justifyContent:'center',alignItems:'center',backgroundColor:Global.COLOR.darkContainer, borderRadius:Global.radiusView
    },
    containerImageAddUser:{
        flex:1,width:'40%'
    },
})
