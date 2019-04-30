import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text} from 'native-base'
import Global from "../globalUtils/Globals";

const MenuMatchSimple = ({player1, player2, typeMatch}) => (
    <View style={styles.containerMain}>
        <View style={styles.containerTypeMatch}>
            <Text style={styles.textTypeMatch}>{typeMatch}</Text>
        </View>
        <View style={styles.containerDetailMatch}>
            <View style={styles.containerDetailLeft}>
                <View style={styles.dividerDouble}>
                    <Text style={styles.playerText}>Clément</Text>
                    <Text style={styles.playerText}>Bourdillon</Text>
                </View>
                <View>
                    <Text style={styles.playerText}>Jean</Text>
                    <Text style={styles.playerText}>Houatai</Text>
                </View>
            </View>
            <View style={styles.containerDetailMiddle}>
                <Image
                    style={styles.divider}
                    resizeMode='contain'
                    source={require('../../assets/images/dividerVerticalListMatchs.png')}
                />
            </View>
            <View style={styles.containerDetailRight}>
                <View style={styles.dividerDouble2}>
                    <Text style={styles.playerText}>Clément</Text>
                    <Text style={styles.playerText}>Bourdillon</Text>
                </View>
                <View style={styles.alignTextDouble}>
                    <Text style={styles.playerText}>Jean</Text>
                    <Text style={styles.playerText}>Houatai</Text>
                </View>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    containerMain:{
        alignItems:'center',height:150,marginBottom:10
    },
    divider:{
        flex:1, height: undefined, width: undefined
    },
    dividerDouble:{
        borderBottomColor: Global.COLOR.whiteCustom,borderBottomWidth: 0.25
    },
    dividerDouble2:{
        borderBottomColor: Global.COLOR.whiteCustom,borderBottomWidth: 0.25, alignItems:'flex-end'
    },
    alignTextDouble:{
        alignItems:'flex-end'
    },
    playerText:{
        color:Global.COLOR.whiteCustom,
    },
    textTypeMatch:{
        color:Global.COLOR.gradient2
    },
    containerTypeMatch:{
        flex:1,justifyContent: 'flex-end',width:'90%',paddingBottom:'2%'
    },
    containerDetailMatch:{
        flexDirection: 'row',flex:3,justifyContent:'center',alignItems:'center',backgroundColor:'#22273e',width:'90%',borderRadius:5
    },
    containerDetailLeft:{
        flex:2,paddingLeft:'3%'
    },
    containerDetailMiddle:{
        flex:1
    },
    containerDetailRight:{
        flex:2,paddingRight:'3%',alignItems:'flex-end'
    }
});


export default MenuMatchSimple
