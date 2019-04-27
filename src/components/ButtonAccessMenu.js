import React from 'react';
import {View, Image, StyleSheet,TouchableWithoutFeedback} from 'react-native';
import {H1} from 'native-base'
import Global from "../globalUtils/Globals";


const ContainerTeam = ({nameButton, onPressCallBack}) => (
    <TouchableWithoutFeedback onPress={()=>onPressCallBack(nameButton)}>
        <View style={styles.containerButton}>
            <View style={styles.containerTitleButton}>
                <H1 style={styles.colorTitle}>{nameButton}</H1>
            </View>
            <View style={styles.containerImageButton}>
                <View style={styles.containerImageButtonDetail}>
                    <Image
                        style={styles.logoStyle}
                        resizeMode='contain'
                        source={require('../../assets/images/arrowHomePage.png')}
                    />
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
   containerButton:{
       backgroundColor:Global.COLOR.darkContainer,flexDirection: 'row',flex:1,borderRadius:Global.radiusView
   },
    containerTitleButton:{
        flex:3, justifyContent:'center',paddingLeft:'10%'
    },
    containerImageButton:{
        flex:2,justifyContent:'center'
    },
    containerImageButtonDetail:{
        height:'70%'
    },
    logoStyle:{
        flex:1, height: undefined, width: undefined
    },
    colorTitle:{
        color:Global.COLOR.whiteCustom
    },
});


export default ContainerTeam
