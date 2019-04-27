import {StyleSheet} from "react-native"
import Global from '../../globalUtils/Globals'
import React from 'react';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Global.COLOR.mainColor,
    },
    versusIcon:{
        flex:1, height: undefined, width: undefined
    },
    leftTopContainer:{
        flex:2,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Global.COLOR.darkContainer,
    },
    middleTopContainer:{
        flex:1,
        justifyContent: 'center',
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
    containerListMatchs:{
        flex:2
    },
    colorTitleTeam:{
        color:Global.COLOR.whiteCustom,
        textAlign:'center',
    },
    detailTeamName:{
        paddingVertical: '15%'
    }
})
