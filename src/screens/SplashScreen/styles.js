import {StyleSheet} from "react-native"
import Global from '../../globalUtils/Globals'

export default StyleSheet.create({
    containerBackground:{
        width: '100%',justifyContent:'center',alignItems:'center', height: '100%',backgroundColor:Global.COLOR.mainColor
    },
    containerLogo:{
        flex:10,justifyContent:'center',alignItems:'center'
    },
    containerLoader:{
        flex:2
    },
    textLoader:{
        fontSize:20,
        color:Global.COLOR.whiteCustom
    }
})
