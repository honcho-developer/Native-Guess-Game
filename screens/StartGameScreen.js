import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'
import Input from '../component/Input'
import Card from '../component/Card'
import NumberContainer from '../component/NumberContainer'


const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState(' ')
    const [confirmed, setConfirmed ] = useState(false)
    const [selectedNumber, setSelectedNumber ] = useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g,'' ) )
    }

    const resetInputHandler = () => {
        setEnteredValue( ' ' );
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const choosenNumber =  parseInt (enteredValue) 
        if ( isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99 ){
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return; 
        }
        setConfirmed(true)
        setSelectedNumber(choosenNumber)
        setEnteredValue(' ')
        Keyboard.dismiss()
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput =  (
            <Card style={styles.summaryContainer} > 
                <Text>You selected</Text>
                <NumberContainer style={styles.numContainer} >{selectedNumber}</NumberContainer>
                <Button color="darkgreen" title="START GAME" onPress={ () => props.onStartGame(selectedNumber) } />
            </Card> 
            )  
    }

    return(
       <TouchableWithoutFeedback onPress={ () => {
           Keyboard.dismiss()
       } } >
                <View style={styles.screen}>
                <Text style={styles.title} >Start a New Game !</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.fontInput}>Select a Number </Text>

                    <Input style={styles.input}
                    blurOnSubmit 
                    autoCapatilize='none' 
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                    />

                    <View style={styles.buttonContainer } >
                        <View style={styles.button}>  
                            <Button title="Reset"  onPress={ resetInputHandler} color="red" />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm"  onPress ={ confirmInputHandler } color="darkgreen" />   
                        </View>
                    </View>   
                </Card>
                {confirmedOutput}
            </View>
       </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        alignItems: 'center',
        flex: 1,
        padding: 10

    }, 
    title:{
        fontSize:25,
        fontWeight: "800",
        marginVertical: 10,
        color: 'black',
        fontWeight: "900"
    },
    inputContainer:{
        alignItems: 'center',
        maxWidth: '80%',
        width: 300
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        width: '100%',

    },
    button:{
        width: 90
    },
    input:{
        textAlign: 'center',
        width: 50,
        
    },
    summaryContainer:{
        marginTop: 20,
        alignItems: 'center',
    },
   
})

export default StartGameScreen