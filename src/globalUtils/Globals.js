import {
    Platform,
} from 'react-native';

//const padding = Platform.OS === "android" ? StatusBar.currentHeight : 0;
const padding = Platform.OS === "android" ? 0 : 0;
export default {
    padding_statuts_bar: padding,
    COLOR: {
        mainColor:'#171c35',
        darkContainer:'#22273e',
        lightContainer:'#262C49',
        gradient1:'#e65c00',
        gradient2: '#F9D423',
        gradient3: '#ff5757',
        whiteCustom:'#CECECE',
        greenColor:'#00c853'
    },
    radiusView:5
};
