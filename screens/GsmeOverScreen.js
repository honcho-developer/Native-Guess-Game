import React from 'react'
import {View,Text, StyleSheet, Button, Image} from 'react-native'
import overImage from '../assets/IMG_20181014_183606.jpg' 
import { stringLiteralTypeAnnotation } from '@babel/types'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
 
            <Text style={styles.packOne}>The Game is Over!</Text>
            <Image source={overImage} style={styles.img} />
            <Text style={styles.pack}>Rounds : {props.roundsNumber}</Text>
            <Text style={styles.packTwo}> Number :  {props.userNumber}</Text>
            <Button style={styles.buttonPad} title="New Game" color="green"  onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    packOne:{
        paddingBottom : 25,
        color: 'red',
        fontSize: 35
    },
    pack:{
        fontWeight: "700",
        padding: 10,
        color: 'darkorange',
        fontSize: 20
    },
    packTwo:{
        fontWeight: "700",
        padding: 10,
        color: 'orange',
        fontSize: 30
    },
    buttonPad:{
        fontWeight: "900",
        fontSize: 25
    },
    img: {
        width: '50%',
        height: 150
    }
})
export default GameOverScreen