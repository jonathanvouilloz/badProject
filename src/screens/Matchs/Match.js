import React from 'react';
import {View, Image, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import {Content, H3, Icon, Text} from 'native-base';
import DisplayScores from '../../components/DisplayScores';
import SegmentedControlTab from "react-native-segmented-control-tab";
import Global from "../../globalUtils/Globals"
import Segment1 from '../../components/TabViewScores'
import resetStack from "../../navigation/resetStack";
import StatusBar from '../../components/StatusBar'




class ListMatchs extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: `${navigation.state.params.currentTitle}`,
            headerRight: (
                <View style={{width:50,alignItems: 'center'}}>
                    <Icon
                        onPress={()=> navigation.dispatch(resetStack)}
                        name="home"
                        style={{color:Global.COLOR.whiteCustom}}
                    />
                </View>
            ),
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            loaded: true,
            selectedIndex:0,
            thirdSet:false,
            joueur1:'A définir',
            joueur2:'A définir',
            typeMatch:'',
            scoreSet1Eq1:'0',
            scoreSet1Eq2:'0',
            scoreSet2Eq1:'0',
            scoreSet2Eq2:'0',
            scoreSet3Eq1:'0',
            scoreSet3Eq2:'0',
            winS1:undefined,
            winS2:undefined,
            winS3:undefined,
            numberSet:['Set 1', 'Set 2', 'Set 3']
        };
    }

    async componentWillMount() {
        const typeMatch = this.props.navigation.getParam('currentCode', 'NO-ID');
        await this.setState({typeMatch});
        this.setState({ loaded: false,activePage:1});
    }

    handleIndexChange = index => {
        this.setState({
            selectedIndex: index
        });
    };

    returnData(player,equipe){
        this.setState({joueur1:player.firstName+" "+player.lastname})
    }

    setScore = async (score1,score2, set, winJ1) => {
        await this.setState({loaded:false});
        if(set==='1'){
            await this.setState({scoreSet1Eq1:score1,scoreSet1Eq2:score2,winS1:winJ1,selectedIndex:1});
        }else if(set==='2'){
            await this.setState({scoreSet2Eq1:score1,scoreSet2Eq2:score2,winS2:winJ1});
        }else{
            await this.setState({scoreSet3Eq1:score1,scoreSet3Eq2:score2,winS3:winJ1});
        }
        await this.setState({loaded:true});
    };


    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
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


                <View style={styles.containerAddPlayer}>
                    <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate("AddPlayerForMatch",{test:"idEquipeASend",returnData: this.returnData.bind(this)})}>
                        <View style={styles.containerAddPlayerDetailRight}>
                                    {this.state.joueur1 !== 'A définir' ?
                                        <View><Text style={styles.colorNamePlayer}>{this.state.joueur1}</Text></View>
                                        :
                                        <View style={styles.containerImageAddUser}>
                                        <Image
                                            style={styles.versusIcon}
                                            resizeMode='contain'
                                            source={require('../../../assets/images/addPlayerSimple.png')}
                                        />
                                        </View>
                                    }
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate("AddPlayerForMatch",{test:"idEquipeASend",returnData: this.returnData.bind(this)})}>
                        <View style={styles.containerAddPlayerDetailLeft}>
                            {this.state.joueur2 !== 'A définir' ?
                                <View><Text style={styles.colorNamePlayer}>{this.state.joueur2}</Text></View>
                                :
                                <View style={styles.containerImageAddUser}>
                                    <Image
                                        style={styles.versusIcon}
                                        resizeMode='contain'
                                        source={require('../../../assets/images/addPlayerSimple.png')}
                                    />
                                </View>
                            }
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={{flex:3}}>
                <ScrollView>
                <View style={styles.middleContainer}>
                    <View style={styles.containerTab}>
                        <SegmentedControlTab
                            tabStyle={{backgroundColor:Global.COLOR.darkContainer,borderColor:Global.COLOR.darkContainer}}
                            tabTextStyle={{color:Global.COLOR.whiteCustom}}
                            activeTabStyle={{backgroundColor:Global.COLOR.whiteCustom,borderColor:Global.COLOR.whiteCustom}}
                            activeTabTextStyle={{color:Global.COLOR.darkContainer}}
                            tabsContainerStyle={{borderColor:Global.COLOR.darkContainer}}
                            values={this.state.numberSet}
                            selectedIndex={this.state.selectedIndex}
                            onTabPress={this.handleIndexChange}
                        />

                    </View>
                    <View style={styles.dividerTab}/>
                    <View style={styles.containerTabContent}>
                        <View style={styles.containerTabContentDetail}>
                            <Content padder>
                                {this.state.selectedIndex === 0 ?
                                     <Segment1 scoreEq1={this.state.scoreSet1Eq1} scoreEq2={this.state.scoreSet1Eq2} winSet={this.state.winS1} set={'1'}  onResultChange={(score1,score2,set, winJ1) => this.setScore(score1,score2,set,winJ1)}  /> : this.state.selectedIndex === 1 ?
                                     <Segment1 scoreEq1={this.state.scoreSet2Eq1} scoreEq2={this.state.scoreSet2Eq2} winSet={this.state.winS2}  set={'2'} onResultChange={(score1,score2,set,winJ1) => this.setScore(score1,score2,set,winJ1)} /> :
                                     <Segment1 scoreEq1={this.state.scoreSet3Eq1} scoreEq2={this.state.scoreSet3Eq2} winSet={this.state.winS3} set={'3'} onResultChange={(score1,score2,set,winJ1) => this.setScore(score1,score2,set,winJ1)}  /> }
                            </Content>
                        </View>
                    </View>
                </View>



                <View style={styles.botContainer}>
                    <View style={styles.botContainerDetail}>
                        <H3 style={styles.textColorResume}>Résumé</H3>
                        <View style={styles.containerResumeNameScore}>
                            <View style={styles.containerResumeNameDetail}>
                                <View><Text style={styles.colorWhite}>{this.state.joueur1}</Text></View>
                                <View style={styles.dividerResume}/>
                                <View><Text style={styles.colorWhite}>{this.state.joueur2}</Text></View>
                            </View>
                            {this.state.loaded ?
                            <View>
                                 <DisplayScores p1s1={this.state.scoreSet1Eq1}
                                                p1s2={this.state.scoreSet2Eq1}
                                                p1s3={this.state.scoreSet3Eq1}
                                                winS1={this.state.winS1 === undefined ? undefined : this.state.winS1}
                                                winS2={this.state.winS2 === undefined ? undefined : this.state.winS2}
                                                winS3={this.state.winS3 === undefined ? undefined : this.state.winS3} />
                                <View style={styles.dividerResume}/>
                                <DisplayScores p2s1={this.state.scoreSet1Eq2}
                                               p2s2={this.state.scoreSet2Eq2}
                                               p2s3={this.state.scoreSet3Eq2}
                                               winS1={this.state.winS1 === undefined ? undefined : !this.state.winS1}
                                               winS2={this.state.winS2 === undefined ? undefined : !this.state.winS2}
                                               winS3={this.state.winS3 === undefined ? undefined : !this.state.winS3} />
                            </View> :
                                null
                            }
                        </View>
                    </View>


                </View>
                    <View style={{alignItems:'center',marginBottom:20}}>
                        <View style={{width:'90%',flexDirection:'row',borderTopWidth:0.25,borderTopColor:Global.COLOR.whiteCustom,paddingTop:15}}>
                            <View style={{flex:1,justifyContent:'flex-start',flexDirection:'row'}}>
                                <Icon type={"AntDesign"} style={{fontSize: 17, color: Global.COLOR.whiteCustom}} name={"caretleft"} /><Text note style={{color:Global.COLOR.whiteCustom}}>Match précédent</Text>
                            </View>
                            <View style={{flex:1, justifyContent:'flex-end',flexDirection:'row'}}>
                                    <Text note style={{color:Global.COLOR.whiteCustom}}>Match suivant</Text><Icon style={{fontSize: 17, color: Global.COLOR.whiteCustom}} type={"AntDesign"} name={"caretright"} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

export default ListMatchs
