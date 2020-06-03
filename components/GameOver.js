import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Card from './Card'

const GameOver = (props) => {
    return (
        <View style={styles.screen}>
            <Card style= {styles.scoreCard}>
                <Text>The Game is Over</Text>
                <Text>Number of Rounds: {props.roundNumber}</Text>
                <Text>Number was: {props.userNumber}</Text>
                <Button title="New game" onPress={props.onRestart} />
            </Card>

        </View>
    )
}

export default GameOver

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scoreCard:{
        padding:5,
        color:'red'
    }
})