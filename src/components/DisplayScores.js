import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'native-base';
import Global from '../globalUtils/Globals'


class DisplayScores extends React.Component {
    constructor(props){
        super(props);
        this.scores = [];
        this.winS1 = this.props.winS1;
        this.winS2 = this.props.winS2;
        this.winS3 = this.props.winS3;
        if(this.props.p1s1){
            this.scores = [this.props.p1s1,
                           this.props.p1s2,
                           this.props.p1s3
            ];
        }else{
            this.scores = [this.props.p2s1,
                           this.props.p2s2,
                           this.props.p2s3,
            ];
        }
    }
    render() {
        let scores = this.scores;
        return (
            <View style={styles.textScoreResume}>
                <Text style={{color:this.winS1 === undefined ? Global.COLOR.whiteCustom : this.props.winS1 ? 'green' : 'red'}}> {scores[0]}</Text>
                <Text style={{color:Global.COLOR.whiteCustom}}> / </Text>
                <Text style={{color:this.winS2 === undefined ? Global.COLOR.whiteCustom : this.props.winS2 ? 'green' : 'red'}}> {scores[1]}</Text>
                <Text style={{color:Global.COLOR.whiteCustom}}> / </Text>
                <Text style={{color:this.winS3 === undefined ? Global.COLOR.whiteCustom : this.props.winS3 ? 'green' : 'red'}}> {scores[2]}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textScoreResume:{
        paddingRight:'10%',
        flexDirection:'row'
    }
});


export default DisplayScores
