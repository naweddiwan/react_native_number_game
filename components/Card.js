import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const Card = (props) => {
    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 20,               //shadow in android 
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20
    },
  
})