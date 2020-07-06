import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ScreenTemplate(props) {
    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 10
    }
})
