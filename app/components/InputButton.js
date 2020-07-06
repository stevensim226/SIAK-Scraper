import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

export default function InputButton({style, title, onPress}) {
    return (
        <TouchableHighlight style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "50%",
        height: 60,
        backgroundColor: "gray",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 3
    },
    text: {
        color: "white",
        fontSize: 24
    }
})
