import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import ScreenTemplate from "./ScreenTemplate"
import InputForm from "../components/InputForm"
import InputButton from "../components/InputButton"
import SwitchText from "../components/SwitchText"
import AsyncStorage from '@react-native-community/async-storage';

import axios from "axios"

export default function MainScreen(props) {
    useEffect(() => {
        console.log("hello")
    },[])
    const [detailStatus, setDetailStatus] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = () => {
        if (username.length < 3 || password.length < 3) {
            Alert.alert("Username and Password", "Please enter a valid username or password")
            return
        }

        setIsLoading(true)
        const params = new URLSearchParams();
        params.append('username', username)
        params.append('password', password)
        if (detailStatus) params.append("detail_status", "true")
        
        axios.post("https://nilai-siak.herokuapp.com/score", params)
        .then(response => {
            if (typeof response.data == "string" && response.data.includes("Failed")) {
                Alert.alert("Invalid username / password", "Please enter the correct username or password")
                setIsLoading(false)
            } else {
                setIsLoading(false)
                props.navigation.navigate("DetailScreen", {
                    scoresData : response.data,
                    detailStatus
                })
            }
        })
    }

    return (
        <ScreenTemplate style={styles.container}>
            <Text>SIAK-NG Scraper by MS</Text>
            <Text>Picture from photozou by qooh</Text>
            <Image source={require("../../assets/yurikamome.jpg")} style={styles.picture} />
            <InputForm iconColor="white" style={styles.form} iconName="account" onChangeText={(value) => setUsername(value)} placeholder="Username"/>
            <InputForm iconColor="white" style={styles.form} iconName="shield-lock" onChangeText={(value) => setPassword(value)} secureTextEntry placeholder="Password" />
            <SwitchText text="See Detailed Scores" value={detailStatus} onValueChange={setDetailStatus} />
            { isLoading ? 
                <InputButton style={styles.button} title="Loading..." /> :
                <InputButton style={styles.button} title="Log In" onPress={handleLogin} />
            }
        </ScreenTemplate>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 80,
        backgroundColor: "#9be3de"
    },
    picture: {
        width: 200,
        height: 200,
        borderRadius: 20,
        marginVertical: 3
    },
    form: {
        backgroundColor: "#42dee1"
    },
    button: {
        backgroundColor: "#3fc5f0"
    }
})
