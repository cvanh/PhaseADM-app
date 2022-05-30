import React from 'react';
import { Image } from 'react-native';
import style from './style';

export default function Loading(){
    return(
        <Image
            style={style.loading}
            source={require("../../assets/hamster.gif")}
        />
    )
}