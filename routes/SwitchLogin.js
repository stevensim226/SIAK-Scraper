import React from 'react'
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { StyleSheet, Text, View } from 'react-native'
import MainScreen from "../app/screens/MainScreen"
import DetailScreen from "../app/screens/DetailScreen"

const screens = {
    MainScreen : {
        screen : MainScreen,
        navigationOptions : {
            headerShown : false
        }
    },
    DetailScreen : {
        screen : DetailScreen,
        navigationOptions : {
            title: "Score List",
            headerTintColor: "white",
            headerStyle : {
                backgroundColor: "#3fc5f0",
            }
        }
    }
}

export default createAppContainer(createStackNavigator(screens))