import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

 const Header = props  =>  {
     return (
         <View style={styles.header} >
             <Text style={styles.headerTitle} >{props.title}</Text>
         </View>
     )
 }

const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        backgroundColor: 'green',
        height: 90,
        justifyContent: 'center',
        paddingTop: 36,
        width: '100%',
      

    },
    headerTitle:{
        color: 'white',
        fontSize: 45,
        paddingBottom: 20,
        fontWeight: "bold"
    }
})


 export default Header