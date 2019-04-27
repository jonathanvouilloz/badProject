import React from 'react';
import {View, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Text} from 'native-base'
import Global from "../globalUtils/Globals";

const MenuMatchSimple = ({player1, player2, typeMatch, navMatch}) => (
        <TouchableWithoutFeedback  onPress={() => navMatch()}>
        <View style={styles.containerMain}>
            <View style={styles.containerTypeMatch}>
                <Text style={styles.textTypeMatch}>{typeMatch}</Text>
            </View>
            <View style={styles.containerDetailMatch}>
                <View style={styles.containerDetailLeft}>
                    <Text style={styles.playerText}>Clément</Text>
                    <Text style={styles.playerText}>Bourdillon</Text>
                </View>
                <View style={styles.containerDetailMiddle}>
                    <Image
                        style={styles.divider}
                        resizeMode='contain'
                        source={require('../../assets/images/dividerVerticalListMatchs.png')}
                    />
                </View>
                <View style={styles.containerDetailRight}>
                    <Text style={styles.playerText}>Jean-Philippe</Text>
                    <Text style={styles.playerText}>Etter</Text>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    containerMain:{
        alignItems:'center',height:100,marginBottom:15
    },
    divider:{
        flex:1, height: undefined, width: undefined
    },
    playerText:{
        color:Global.COLOR.whiteCustom
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
        flex:2,alignItems:'flex-end',paddingRight:'3%'
    }
});


export default MenuMatchSimple
