import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, SectionList, FlatList, Button } from 'react-native'
import ScreenTemplate from "./ScreenTemplate"
import TableItem from "../components/TableItem"
import ListSeparator from "../components/ListSeparator"

const processData = (data) => {
    var result = []

    for (let i = 0; i < Object.keys(data).length; i++) {
        let obj = {}
        obj.name = Object.keys(data)[i]
        obj.score = Object.values(data)[i]
        result.push(obj)
    }
    return result
}

const processDetailData = (data) => {
    const keys = Object.keys(data)
    const values = Object.values(data)
    var result = []

    for (let i = 0; i < keys.length; i++) {
        let obj = {}
        obj.title = keys[i]

        let new_data = []
        let specific_key = Object.keys(data[keys[i]])
        let specific_value = Object.values(data[keys[i]])

        for (let j = 0; j < Object.keys(data[keys[i]]).length; j++) {
        let value_object = {}
        value_object.name = specific_key[j]
        value_object.score = specific_value[j]
        new_data.push(value_object)
        }

        obj.data = new_data
        result.push(obj)
    }
    return result
}

export default function DetailScreen({navigation}) {
    const [scores, setScores] = useState([])
    const [isByNewest, setIsByNewest] = useState(false)

    useEffect(() => {
        const processedData = navigation.getParam("detailStatus") ? 
        processDetailData(navigation.getParam("scoresData")) :
        processData(navigation.getParam("scoresData"))

        setScores(processedData.reverse())
    }, [])

    const reverseScores = () => {
        let reversed_scores = Array.from(scores).reverse()
        setScores(reversed_scores)
    }

    return (
        <ScreenTemplate style={styles.container}>
            <Button title={isByNewest ? "Sort by Newest" : "Sort by Oldest"} onPress={() => {
                setIsByNewest(!isByNewest)
                reverseScores()
            }} />
            {
                navigation.getParam("detailStatus") ?
                <SectionList
                    sections={scores}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <TableItem title={item.name} textColor="black" value={item.score} style={{backgroundColor:"#9be3de"}}/>}
                    renderSectionHeader={({ section: { title } }) => (
                        <TableItem style={{backgroundColor: "#3fc5f0"}} title={title} textColor="white" />
                    )}
                    ItemSeparatorComponent={() => <ListSeparator />}
                /> :
                <FlatList 
                    data={scores}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <TableItem title={item.name} textColor="black" value={item.score} style={{backgroundColor:"#9be3de"}}/>}
                    ItemSeparatorComponent={() => <ListSeparator />}
                />
            }
            
        </ScreenTemplate>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 0
    }
})


      
