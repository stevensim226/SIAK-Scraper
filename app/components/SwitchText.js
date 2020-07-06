import React from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'

export default function SwitchText({value, onValueChange, text}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Switch value={value} onValueChange={onValueChange} style={styles.switch} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 12,
        height: 60
    },
    text: {
        fontSize: 20
    },
    switch: {
        transform: [{ scaleX: 2 }, { scaleY: 2 }]
    }
})
