import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Icon} from 'native-base'
import styles from './styles';
import {Text} from 'native-base';
import MenuMatchSimple from '../../components/MatchSimpleListMenu'
import MenuMatchDouble from '../../components/MatchDoubleListMenu'
import resetStack from "../../navigation/resetStack";
import Global from '../../globalUtils/Globals'
import StatusBar from '../../components/StatusBar'
import StringMatch from '../../globalUtils/stringsMatch'


class ListMatchs extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <View style={{width:75,alignItems: 'center'}}>
                    <Icon
                        onPress={()=> navigation.dispatch(resetStack)}
                        name="home"
                        style={{color:Global.COLOR.whiteCustom}}
                    />
                </View>
            ),
        };
    };

    navMatch(currentCode, currentTitle) {
        this.props.navigation.navigate("Match",{currentTitle:currentTitle,currentCode:currentCode})
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar />
                <View style={styles.topContainer}>
                    <View style={styles.leftTopContainer}>
                        <View style={styles.detailTeamName}>
                            <Text style={styles.colorTitleTeam}>BC CHENOIS</Text>
                        </View>
                    </View>
                    <View style={styles.middleTopContainer}>
                        <Image
                            style={styles.versusIcon}
                            resizeMode='contain'
                            source={require('../../../assets/images/vrsus3.png')}
                        />
                    </View>
                    <View style={styles.rightTopContainer}>
                        <View style={styles.detailTeamName}>
                        <Text style={styles.colorTitleTeam}>BC POITIERS ET COMPAGNIE</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.containerListMatchs}>
                    <ScrollView>
                        <MenuMatchSimple navMatch={() => this.navMatch(StringMatch.SH1, StringMatch.SH1Title)} typeMatch={StringMatch.SH1Title} />
                        <MenuMatchSimple navMatch={() => this.navMatch(StringMatch.SH2, StringMatch.SH2Title)} typeMatch={StringMatch.SH2Title} />
                        <MenuMatchSimple navMatch={() => this.navMatch(StringMatch.SH3, StringMatch.SH3Title)} typeMatch={StringMatch.SH3Title} />
                        <MenuMatchSimple navMatch={() => this.navMatch(StringMatch.SD, StringMatch.SDTitle)} typeMatch={StringMatch.SDTitle} />
                        <MenuMatchDouble navMatch={() => this.navMatch(StringMatch.DH, StringMatch.DHTitle)} typeMatch={StringMatch.DHTitle} />
                        <MenuMatchDouble navMatch={() => this.navMatch(StringMatch.DD, StringMatch.DDTitle)} typeMatch={StringMatch.DDTitle} />
                        <MenuMatchDouble navMatch={() => this.navMatch(StringMatch.DM, StringMatch.DMTitle)} typeMatch={StringMatch.DMTitle} />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default ListMatchs
