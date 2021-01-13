import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ItemValue = ({label , value , valueColor="#020202"}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.sub(valueColor)}>{value}</Text>
    </View>
  )
}

export default ItemValue

const styles = StyleSheet.create({
  container : {flexDirection : 'row' , justifyContent : 'space-between'},
  label : { fontSize  : 14 , fontFamily : 'Poppins-Reguler' , color : '#8D92A3'},
  sub :(color)=> ({ fontSize  : 14 , fontFamily : 'Poppins-Reguler' , color : color}),
})
