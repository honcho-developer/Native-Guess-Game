import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const NumberContainer = props => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.number}>{props.children} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: 'darkgrey',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    number:{
        color: 'black',
        fontSize: 22

    }
}) 

export default NumberContainer