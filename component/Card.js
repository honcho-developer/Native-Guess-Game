import React from 'react';
import {View, StyleSheet} from 'react-native'

const Card = props => {
  return  ( 
         <View style={{...styles.card, ...props.style}} >
            {props.children}  
         </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'lightgray',
        borderRadius: 10,
        elevation: 5,
        padding: 20,
        shadowColor: 'black',
        shadowOffset: {width:2, height:2},
        shadowRadius: 8,
        shadowOpacity: 0.3
    }
})

export default Card