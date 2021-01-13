import React from 'react'
import { StyleSheet, Text, View , TextInput as TextInputRN } from 'react-native'

const TextInput = ({label , pl, ...restProps}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInputRN placeholder={pl} style={styles.input} {...restProps}/>
        </View>
    )
}

export default TextInput

const styles = StyleSheet.create({
    label : {fontSize : 14 , fontFamily : 'Poppins-Regular' , color:'#020202'},
    input : {borderWidth : 1 , borderColor : '#020202' , borderRadius : 8 , padding : 10 }

})
