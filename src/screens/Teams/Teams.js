import React from 'react';
import {StyleSheet, View, ScrollView, KeyboardAvoidingView, FlatList,TouchableWithoutFeedback} from 'react-native';
import {Button, Text, List, Icon} from 'native-base';
import Global from "../../globalUtils/Globals";
import ClubSquadItem from "../../components/ConfigureClubSquadList";
import ItemJoueurConfigure from "../../components/ItemJoueurConfigure";
import StatusBar from '../../components/StatusBar';
import resetStack from "../../navigation/resetStack";



class Teams extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `${navigation.state.params.title}`,
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
            squad:"",
            club:"",
            opacityChoix:1,
            listPlayers:false,
            etape1:true,
            etape2:false,
            etape3:false,
            caretUpDown1:false,
            caretUpDown2:false
        }
    }

    changeStep(teamSquad,equipe) {
        if(this.state.etape1){
            this.setState({club:teamSquad.name,etape1:false,etape2:true});
        }else if(this.state.etape2){
            this.setState({squad:teamSquad.name,listPlayers:true,etape2:false,etape3:true,opacityChoix:0.5});
        }
    }


    render() {

        const club = [
            {id:1,name:"BC Chenois",lastname:"Hoiay"},
            {id:2,name:"BC Rousseau",lastname:"Gabay"},
            {id:3,name:"BC MEyrin",lastname:"Tazya"},
            {id:4,name:"BC Police",lastname:"Qasy"},
            {id:5,name:"BC Perly",lastname:"Oupiia"},
            {id:12,name:"BC Genève",lastname:"Hoiay"},
            {id:22,name:"BC Nancy",lastname:"Gabay Le Normand"},
            {id:23,name:"BC Genève",lastname:"Tazya"},
            {id:24,name:"BC Lancy",lastname:"Qasy"},
        ];
        const squad = [
            {id:1,name:"Equipe 1",lastname:"Hoiay"},
            {id:2,name:"Equipe 2",lastname:"Gabay"},
            {id:3,name:"Equipe 3",lastname:"Tazya"},
            {id:4,name:"Senior 1",lastname:"Qasy"},
            {id:5,name:"Junior 3",lastname:"Oupiia"},
        ];
        const players = [
            {id:1,name:"Jean",lastname:"Hoiay"},
            {id:2,name:"Bernard",lastname:"Gabay"},
            {id:3,name:"Henry",lastname:"Tazya"},
            {id:4,name:"Pat",lastname:"Qasy"},
            {id:5,name:"Julien",lastname:"Oupiia"},
            {id:21,name:"Jean",lastname:"Hoiay"},
            {id:22,name:"Bernard",lastname:"Gabay Le Normand"},
            {id:33,name:"Henry",lastname:"Tazya"},
            {id:44,name:"Pat",lastname:"Qasy"},
            {id:55,name:"Julien",lastname:"Oupiia"}
        ];



        return (
            <ScrollView style={styles.container} ref={(ref) => { this.scrollListReftop = ref; }}>
                <StatusBar />
                {this.state.etape1 ?
                        <View style={{flex:1,alignItems:'center'}}>
                            <View style={{width:'90%',flex:1,height:75}}>
                                <View style={{flex:1}}>
                                    <View style={styles.containerTypeMatch}>
                                        <Text style={styles.textTypeMatch}>Choix du club</Text>
                                    </View>
                                    <View style={styles.containerDetailMatch}>
                                        <View style={styles.containerTextSquadClub}>
                                            <Text style={styles.playerText}>{this.state.club}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    : this.state.etape2 ?
                        <View style={{flex:1,alignItems:'center'}}>
                            <View style={{width:'90%',flex:1,height:75}}>
                                <View style={{flex:1}}>
                                    <View style={styles.containerTextConfiguration}>
                                        <Text style={{color:'white'}}>Equipe pour le club </Text><Text style={styles.textTypeMatch}>{this.state.club}</Text>
                                    </View>
                                    <View style={styles.containerDetailMatch}>
                                        <View style={styles.containerTextSquadClub}>
                                            <Text style={styles.playerText}>{this.state.squad}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                            :
                        <View style={{flex:2,alignItems:'center'}}>
                            <View style={{width:'90%',flex:1,opacity:this.state.opacityChoix,height:75}}>
                                <View style={{flex:1}}>
                                    <View style={styles.containerTypeMatch}>
                                        <Text style={styles.textTypeMatch}>Club</Text>
                                    </View>
                                    <View style={styles.containerDetailMatch}>
                                        <View style={styles.containerTextSquadClub}>
                                            <Text style={styles.playerText}>{this.state.club}</Text>
                                        </View>
                                        <View style={styles.containerDetailRight}>
                                            <TouchableWithoutFeedback onPress={()=>this.setState({etape1:true,listPlayers:false})}><Text style={styles.playerText}>CHANGER</Text></TouchableWithoutFeedback>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{width:'90%',flex:1,opacity:this.state.opacityChoix,height:75,paddingBottom:10}}>
                                <View style={{flex:1}}>
                                    <View style={styles.containerTypeMatch}>
                                            <Text style={styles.textTypeMatch}>Equipe</Text>
                                    </View>
                                    <View style={styles.containerDetailMatch}>
                                        <View style={styles.containerTextSquadClub}>
                                            <Text style={styles.playerText}>{this.state.squad}</Text>
                                        </View>
                                        <View style={styles.containerDetailRight}>
                                            <TouchableWithoutFeedback onPress={()=>this.setState({etape2:true,listPlayers:false})}><Text style={styles.playerText}>CHANGER</Text></TouchableWithoutFeedback>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{width:'90%',flex:1,height:50,paddingBottom:10}}>
                                <View style={{flex:1}}>
                                    <View style={styles.containerDetailMatch}>
                                        <View style={styles.containerDetailLeft}>
                                            <Text style={styles.playerText}>Liste des joueurs disponibles</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                         </View>
                    }
                <KeyboardAvoidingView style={{flex:4}}>
                    <ScrollView>
                        {!this.state.listPlayers ?
                            <List>
                                <FlatList
                                    data={this.state.etape1 ? club : squad}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={({item}) => <ClubSquadItem configureTeam={() => {
                                        this.changeStep(item);
                                        this.scrollListReftop.scrollTo({x: 0, y: 0, animated: true});
                                    }}
                                    teamSquad={item}/>}
                                />
                            </List>
                            :
                            <View>
                                <View style={{alignItems:'center'}}>
                                    <View style={{flex:1,width:'90%',marginRight:'5%',marginBottom:15}}>
                                        <FlatList
                                            data={players}
                                            keyExtractor={(item) => item.id.toString()}
                                            renderItem={({item}) => <ItemJoueurConfigure configureTeam={() =>
                                                this.changeStep(item)
                                            }
                                                                                         teamSquad={item}/>}
                                        />
                                    </View>


                                    <View style={{flex:1,width:'90%',alignItems:'center',marginBottom:15}}>
                                        <Button block onPress={() => alert("Ajouter")} rounded bordered style={{borderColor:Global.COLOR.gradient1}}><Text style={{color:Global.COLOR.gradient1}}>Ajouter un joueur</Text></Button>
                                    </View>
                                    <View style={{flex:1,width:'90%',alignItems:'center',marginBottom:20}}>
                                        <Button block onPress={() => alert("Ajouter")} rounded bordered style={{borderColor:Global.COLOR.greenColor}}><Text style={{color:Global.COLOR.greenColor}}>Valider mon équipe</Text></Button>
                                    </View>
                                </View>
                            </View>
                        }

                    </ScrollView>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#171c35',
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
    containerTextConfiguration:{
        flex:1,alignItems: 'flex-end',paddingBottom:'7%',flexDirection:'row'
    },
    containerTypeMatch:{
        flex:1,justifyContent: 'flex-end',paddingBottom:'7%'
    },
    containerDetailMatch:{
        flexDirection: 'row',flex:2,justifyContent:'center',alignItems:'center',backgroundColor:'#22273e',borderRadius:5,paddingVertical:5
    },
    containerListeJoueurs:{
       flex:2,justifyContent:'center',alignItems:'center',backgroundColor:'#22273e'
    },
    containerDetailLeft:{
        flex:2,alignItems:'center'
    },
    containerAccordionText:{
        flex:1,flexDirection: 'row'
    },
    containerTextSquadClub:{
        flex:2,paddingLeft:'3%'
    },
    containerDetailMiddle:{
        flex:1
    },
    containerDetailRight:{
        flex:2,alignItems:'flex-end',paddingRight:'3%'
    }
});

export default Teams
