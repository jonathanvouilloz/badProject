import React from 'react';
import {Icon, Left, ListItem, Right, Text} from 'native-base'
import Global from '../globalUtils/Globals'


const ItemListAddPlayer = ({player, addPlayer}) => (
    <ListItem style={{height:75}} onPress={() => addPlayer(player)}>
        <Left>
            <Text style={{color:Global.COLOR.whiteCustom}}>{player.firstName} {player.lastname}</Text>
        </Left>
        <Right>
            <Icon type={"AntDesign"} name="pluscircle" color={Global.COLOR.whiteCustom} />
        </Right>
    </ListItem>
);


export default ItemListAddPlayer
