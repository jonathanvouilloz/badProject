import React from 'react';
import {View, Image, StyleSheet,Dimensions} from 'react-native';
import {Text} from 'native-base'
import Global from "../globalUtils/Globals";

const DeviceWidth = Dimensions.get('window').width;

const ContainerTeam = ({clubName, squadNumber}) => (

            <View style={styles.containerDetailTeam}>
                <View style={{flex: 2}}>
                    <Image
                        style={{flex: 1}}
                        resizeMode='contain'
                        source={require('../../assets/images/logoTeamHomePage.png')}
                    />
                </View>
                <View style={{height: '10%'}} />
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text numberOfLines={1} style={styles.teamText}>{clubName}</Text>
                    <Text style={styles.squadText}>{squadNumber}</Text>
                </View>
            </View>
);

const styles = StyleSheet.create({
    containerDetailTeam:{
        width: DeviceWidth*0.47,borderRadius:Global.radiusView, height: DeviceWidth*0.47,justifyContent:'center',alignItems:'center',paddingHorizontal:'5%',paddingVertical: '10%', backgroundColor: Global.COLOR.lightContainer
    },
    teamText:{
        color:Global.COLOR.whiteCustom
    },
    squadText:{
        color:Global.COLOR.gradient2,
        textAlign:'center'
    }
});

export default ContainerTeam
