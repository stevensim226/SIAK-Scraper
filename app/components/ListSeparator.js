import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ListSeparator() {
    return (
        <View style={styles.separator}>
        </View>
    )
}

const styles = StyleSheet.create({
    separator: {
        height: 2,
        width: "100%",
        backgroundColor: "black"
    }
})
