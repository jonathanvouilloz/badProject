import React from 'react';
import {Left, ListItem, Right, Text,Button} from 'native-base'
import Global from '../globalUtils/Globals'


const ClubSquadListItem = ({teamSquad, configureTeam}) => (
    <ListItem style={{height:75}} >
        <Left style={{flex:2}}>
            <Text style={{color:Global.COLOR.whiteCustom}}>{teamSquad.name}</Text>
        </Left>
        <Right style={{flex:1,alignItems:'flex-end'}}>
            <Button style={{borderColor:Global.COLOR.greenColor}} onPress={() => configureTeam(teamSquad)} rounded bordered><Text style={{color:Global.COLOR.greenColor}} >Choisir</Text></Button>
        </Right>
    </ListItem>
);

export default ClubSquadListItem
