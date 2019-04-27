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
    navMatch(match, title) {
        this.props.navigation.navigate("Match",{typeMatch:match,title:title})
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
                        <MenuMatchSimple navMatch={() => this.navMatch("SH1", "Simple Homme 1")} typeMatch={"Simple Homme 1"} />
                        <MenuMatchSimple navMatch={() => this.navMatch("SH2", "Simple Homme 2")} typeMatch={"Simple Homme 2"} />
                        <MenuMatchSimple navMatch={() => this.navMatch("SH3", "Simple Homme 3")} typeMatch={"Simple Homme 3"} />
                        <MenuMatchSimple navMatch={() => this.navMatch("SD", "Simple Dame")} typeMatch={"Simple Dame"} />
                        <MenuMatchDouble navMatch={() => this.navMatch("DH", "Simple Hommes")} typeMatch={"Double Hommes"} />
                        <MenuMatchDouble navMatch={() => this.navMatch("DD", "Double Dames")} typeMatch={"Double Dames"} />
                        <MenuMatchDouble navMatch={() => this.navMatch("DM", "Double mixte")} typeMatch={"Double Mixtes"} />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default ListMatchs
