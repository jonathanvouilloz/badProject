import {Image, StyleSheet, View} from "react-native";
import {Input, Item} from "native-base";
import React from "react";
import Global from '../globalUtils/Globals'


export default class ComponentSet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            score1:'0',
            score2:'0',
            winJ1:undefined,
        };
    }

    componentWillReceiveProps(newProps) {
        if(newProps){
            this.setState({score1: newProps.scoreEq1,score2:newProps.scoreEq2, winJ1:newProps.winSet});
        }
    }

    async _handlePress() {
        if(this.state.score1 === this.state.score2){
            alert("Match nul");
            await this.setState({winJ1:undefined})
        }
        else if(this.state.score1 > this.state.score2){
            await this.setState({winJ1:true});
            console.log("j1 gagne")
        }
        else if(this.state.score1 < this.state.score2){
            await this.setState({winJ1:false});
            console.log("j2 gagne")
        }
        this.props.onResultChange(this.state.score1, this.state.score2,this.props.set, this.state.winJ1);
    }

    render() {
        const win = this.state.winJ1;

        return (
            <View style={styles.container}>
                <View style={styles.containerSecondRow}>
                    <View style={styles.containerScore}>
                        <Item regular style={{width:'60%',height:'60%',borderColor:win === undefined ? 'white' : win === true ? 'green' : 'red'}}>
                            <Input placeholder={'0'}
                                   onChangeText={(text) => this.setState({score1:text})}
                                   onSubmitEditing={() => this._handlePress()}
                                   keyboardType='numeric'
                                   textAlign={'center'}
                                   style={styles.colorText}
                                   value={this.state.score1 === '0' ? '':this.state.score1} />
                        </Item>
                    </View>
                    <View style={{flex:1}}>
                        <Image
                            style={styles.divider}
                            resizeMode='contain'
                            source={require('../../assets/images/dividerVerticalListMatchs.png')}
                        />
                    </View>
                    <View style={styles.containerScore}>
                        <Item regular style={{width:'60%',height:'60%',borderColor:win === undefined ? 'white' : win === true ? 'red' : 'green'}}>
                            <Input placeholder={'0'}
                                   onSubmitEditing={() => this._handlePress()}
                                   onChangeText={(text) => this.setState({score2:text})}
                                   textAlign={'center'}
                                   keyboardType='numeric'
                                   style={styles.colorText}
                                   value={this.state.score2 === '0' ? '':this.state.score2}
                            />
                        </Item>
                    </View>
                </View>
            </View>
        )
    }
};




const styles = StyleSheet.create({
    divider:{
        flex:1, height: undefined, width: undefined
    },
    container:{
        height:100,borderRadius:5
    },
    containerSecondRow:{
        flex:1,flexDirection:'row'
    },
    containerScore:{
        flex:2,alignItems:'center',justifyContent:'center'
    },
    colorText:{
        color:Global.COLOR.whiteCustom
    }
});
