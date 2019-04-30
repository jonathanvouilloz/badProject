import {StyleSheet,Dimensions} from "react-native"
import Global from '../../globalUtils/Globals'
import React from 'react';


const DeviceWidth= Dimensions.get('window').width;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Global.COLOR.mainColor,
        marginTop:Global.padding_statuts_bar
    },
    topContainer:{
        flex:1,
        backgroundColor: Global.COLOR.darkContainer,
        flexDirection: 'row',
    },
    middleContainer:{
        flex:3,
        justifyContent: 'center'
    },
    botContainer:{
        flex:2,
    },
    logoStyle:{
        flex:1, height: undefined, width: undefined
    },
    topContainerViewLogo: {
        flex: 1
    },
    topContainerViewTitle:{
        flex:2,
        justifyContent: 'center',
        alignItems:'center'
    },
    colorTitle:{
        color:Global.COLOR.whiteCustom
    },
    dateContainer:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    teamsContainer:{
        flex:2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingBottom:'10%'
    },
    teamContainer1:{
        justifyContent:'center',marginRight:'1%',flexDirection: 'row'
    },
    teamContainer2:{
        justifyContent:'center',marginLeft:'1%',flexDirection: 'row'
    },
    containerDetailTeam:{
        width: DeviceWidth*0.47, height: DeviceWidth*0.47,justifyContent:'center',alignItems:'center',paddingHorizontal:'5%',paddingVertical: '15%', backgroundColor: '#22273e'
    },
    dateContainerDetail:{
        backgroundColor:Global.COLOR.darkContainer
    },
    textDate:{
        color:Global.COLOR.whiteCustom,
        padding:'4%',
        fontWeight: 'bold'
    },
    imageTeam:{
        flex:2,
        alignItems:'center'
    },
    nameTeam:{
        flex:1,
        alignItems:'center'
    },
    teamText:{
        color:Global.COLOR.whiteCustom
    },
    squadText:{
        color:Global.COLOR.gradient2,
        textAlign:'center'
    }
})
