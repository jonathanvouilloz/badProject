import React from 'react';
import {View, FlatList} from 'react-native';
import ListItemAddPlayer from '../../components/ListItemAddPlayerMatch'
import styles from './styles'
import {Text,Content,List,H3,Header,Icon,Input,Item,Button} from 'native-base';
import Global from '../../globalUtils/Globals'

class AddPlayerForMatch extends React.Component {

    constructor(props) {
        super(props);
    }

    goBack(player,equipe) {
        this.props.navigation.state.params.returnData(player,equipe);
        this.props.navigation.goBack();
    }

    render() {
        const data = [
            {id:1,firstName:"Jean",lastname:"Hoiay"},
            {id:2,firstName:"Bernard",lastname:"Gabay"},
            {id:3,firstName:"Henry",lastname:"Tazya"},
            {id:4,firstName:"Pat",lastname:"Qasy"},
            {id:5,firstName:"Julien",lastname:"Oupiia"},
            {id:1,firstName:"Jean",lastname:"Hoiay"},
            {id:2,firstName:"Bernard",lastname:"Gabay Le Normand"},
            {id:3,firstName:"Henry",lastname:"Tazya"},
            {id:4,firstName:"Pat",lastname:"Qasy"},
            {id:5,firstName:"Julien",lastname:"Oupiia"}
            ];


        return (
            <View style={styles.containerMain}>
                <View style={styles.containerSearchBar}>
                    <Header androidStatusBarColor={Global.COLOR.mainColor} style={{backgroundColor:'#171c35'}} searchBar rounded>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Rechercher..." />
                        </Item>
                        <Button transparent>
                            <Text>Search</Text>
                        </Button>
                    </Header>
                </View>
                <View style={styles.containerList}>
                        <Content>
                            <H3 style={styles.titleTeam}>Equipe Chenois BC</H3>
                            <List>
                                <FlatList
                                    data={data}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={({item}) => <ListItemAddPlayer addPlayer={() => this.goBack(item)}
                                                                             player={item}/>}
                                />
                            </List>
                        </Content>
                </View>
            </View>
        );
    }
}

export default AddPlayerForMatch
