import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'

const Button = ({title , color = '#FFC700' , txtcolor = '#020202' , onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={styles.container(color)}>
                <Text style={styles.text(txtcolor)}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container : (color) => ({backgroundColor :color , padding : 12 , borderRadius : 8}),
    text : (txtcolor) => ({ fontSize : 14 , fontFamily : 'Poppins-Medium' , color : txtcolor , textAlign : 'center'}),
})
