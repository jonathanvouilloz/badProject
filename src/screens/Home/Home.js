import React from 'react';
import {View, Image } from 'react-native';
import styles from './styles'
import {Text, H1} from 'native-base';
import TeamContainer from '../../components/MenuTeamContainer'
import ButtonAccessMenu from '../../components/ButtonAccessMenu'
import StatusBar from '../../components/StatusBar'

class Home extends React.Component {

    navMenu(menu) {
        if(menu === "MATCHS"){
            this.props.navigation.push("ListMatchs");
        }else{
            this.props.navigation.navigate("SplashScreen");
        }
    }

    navConfigureTeam(team){
        this.props.navigation.navigate("Teams",{title:team});
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar />
                <View style={styles.topContainer}>
                    <View style={styles.topContainerViewLogo}>
                        <Image
                            style={styles.logoStyle}
                            resizeMode='contain'
                            source={require('../../../assets/logoSansTexte.png')}
                        />
                    </View>
                    <View style={styles.topContainerViewTitle}>
                        <H1 style={styles.colorTitle}>INTERBAD</H1>
                    </View>
                    <View style={styles.topContainerViewLogo} />
                </View>

                <View style={styles.middleContainer}>
                    <View style={styles.dateContainer}>
                        <View style={styles.dateContainerDetail}>
                            <Text style={styles.textDate}>Rencontre du 10 avril 2019</Text>
                        </View>
                    </View>
                    <View style={styles.teamsContainer}>
                            <View style={styles.teamContainer1}>
                                <TeamContainer squadNumber={"Equipe 2"} clubName={"BC CHENOIS"} onPressCallBack={(team) => this.navConfigureTeam(team)} />
                            </View>
                        <View style={styles.teamContainer2}>
                                <TeamContainer spin={true} squadNumber={"Equipe 1"} clubName={"BC ROUSSEAU"} />
                        </View>
                    </View>
                </View>
                <View style={styles.botContainer}>
                    <View style={{flex:1,justifyContent: 'center',paddingHorizontal: '2%',paddingBottom: '5%'}}>
                        <View style={{flex:1}}>
                            <ButtonAccessMenu onPressCallBack={(menu) => this.navMenu(menu)} nameButton="MATCHS" />
                            <View style={{height:'5%'}} />
                            <ButtonAccessMenu onPressCallBack={(menu) => this.navMenu(menu)} nameButton={"RESULTATS"} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Home
