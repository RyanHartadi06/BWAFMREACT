import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ic_Star_Off, Ic_Star_On } from '../../../assets'

const index = () => {
    return (
        <View style={styles.ratingCantainer}>
        <View style={styles.starContainer}>
            <Ic_Star_On />
            <Ic_Star_On />
            <Ic_Star_On />
            <Ic_Star_On />
            <Ic_Star_Off />
            <Text>4.5</Text>
        </View>
    </View>
    )
}

export default index

const styles = StyleSheet.create({
    ratingCantainer : {flexDirection : 'row'},
    starContainer : {flexDirection : 'row'}
})
