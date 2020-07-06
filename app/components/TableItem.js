import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TableItem({title, style, textColor, value}) {
    return (
        <View style={[styles.container, style]}>
            <Text numberOfLines={1} style={[styles.text, {color: textColor}]}>{title}</Text>
            {value && <Text style={styles.value}>{value}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 55,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        flexDirection: "row"
    },
    text: {
        fontSize: 20
    },
    value: {
        backgroundColor: "white",
        padding: 5,
        borderColor: "black",
        borderWidth: 2,
        fontSize: 20
    }
})
