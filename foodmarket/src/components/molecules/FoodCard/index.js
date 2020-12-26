import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyProfile1, Ic_Star_Off, Ic_Star_On } from '../../../assets'

const FoodCard = ({img}) => {
    return (
        <View style={styles.container}>
            <Image source={img} style={styles.foto}/>
            <View style={styles.content}>
                <Text style={styles.text}>Cherry Healthy</Text>
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
            </View>
        </View>
    )
}

export default FoodCard

const styles = StyleSheet.create({
    foto : {width : 200 , height : 140 , resizeMode : 'cover'},
    container : {
        width : 200,
        backgroundColor : 'white',
        borderRadius : 8,
        shadowColor : 'black',
        shadowOpacity : 0.5,
        shadowOffset :  { width : 0 , height : 7},
        borderRadius : 10,
        elevation : 14,
        borderRadius : 8,
        overflow : 'hidden',
        marginRight : 24
    },
    content : {padding : 12},
    text : {fontSize : 16 , fontFamily : 'Poppins-Regular' , color : '#020202'},
    ratingCantainer : {flexDirection : 'row'},
    starContainer : {flexDirection : 'row'}
})
