import React from 'react';
import {Icon, Left, ListItem,Right, Text} from 'native-base';
import Global from '../globalUtils/Globals';



const ItemJoueurConfigure = ({teamSquad, configureTeam}) => (
    <ListItem style={{height:50}} onPress={() => configureTeam(teamSquad)}>
            <Left style={{flex:2}}>
                <Text style={{color:Global.COLOR.whiteCustom}}>{teamSquad.name}</Text>
            </Left>
            <Right>
                <Icon type={"AntDesign"} name={"minuscircle"} style={{color:Global.COLOR.gradient3}} />
            </Right>
    </ListItem>
);


export default ItemJoueurConfigure
