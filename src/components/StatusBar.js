import React from 'react';
import {StatusBar} from "react-native";
import Global from "../globalUtils/Globals";


const statut = () => (
        <StatusBar backgroundColor={Global.COLOR.mainColor} barStyle="light-content" />
);
export default statut
