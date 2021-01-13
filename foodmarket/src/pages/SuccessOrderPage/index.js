import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SuccessOrder } from '../../assets'
import { Button, Gap } from '../../components'
const SuccessOrderPage = ({navigation}) => {
  return (
    <View style={styles.page}>
    <SuccessOrder />
    <Gap height={30}/>
    <Text style={styles.title}>You’ve Made Order</Text>
    <Gap height={6}/>
    <Text style={styles.subTitle}>Just stay at home while we are</Text>
    <Text style={styles.subTitle}>preparing your best foods</Text>
    <Gap height={30}/>
    <View style={styles.btnContainer}>
        <Button title="Order Other Foods" onPress={() => navigation.navigate('MainApp')} />
    </View>
    <Gap height={12}/>
    <View style={styles.btnContainer}>
        <Button title="View My Order" onPress={() => navigation.navigate('MainApp' , {screen : 'Order'})} color="#8D92A3" txtcolor="white"/>
    </View>
</View>
  )
}

export default SuccessOrderPage
const styles = StyleSheet.create({
  page : { flex : 1 , justifyContent : 'center' , alignItems : 'center' , backgroundColor : 'white'},
  title : {fontSize : 20 , fontFamily : 'Poppins-Regular' , color:'#020202' },
  subTitle : {fontSize : 14 , fontFamily : 'Poppins-Light' , color:'#8D92A3' },
  btnContainer : { width : '100%' , paddingHorizontal: 80}
})
