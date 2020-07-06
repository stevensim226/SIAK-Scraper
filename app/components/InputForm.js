import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function InputForm({onChangeText, iconName, secureTextEntry, placeholder, style, iconColor}) {
    return (
        <View style={[styles.container, style]}>
            {iconName && <MaterialCommunityIcons style={styles.icon} name={iconName} size={40} color={iconColor} />}
            <TextInput style={styles.inputForm} onChangeText={onChangeText} secureTextEntry={secureTextEntry} placeholder={placeholder}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "gainsboro",
        width: "100%",
        height: 60,
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        marginVertical: 3,
    },
    inputForm: {
        fontSize: 24,
        color: "white",
        flex: 1,
    },
    icon: {
        marginRight: 6
    }
})
