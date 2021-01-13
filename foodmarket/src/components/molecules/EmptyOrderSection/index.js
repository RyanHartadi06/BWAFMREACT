import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { EmptyOrder } from '../../../assets'
import { Button, Gap } from '../../../components'
const EmptyOrderSection = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
    <EmptyOrder />
    <Gap height={30}/>
    <Text style={styles.title}>Ouch! Hungry</Text>
    <Gap height={6}/>
    <Text style={styles.subTitle}>Seems like you have not</Text>
    <Text style={styles.subTitle}>ordered any food yet</Text>
    <Gap height={30}/>
    <View style={styles.btnContainer}>
        <Button title="Find Foods" onPress={() => navigation.replace('MainApp')} />
    </View>
    
</View>
  )
}

export default EmptyOrderSection

const styles = StyleSheet.create({
  page : { flex : 1 , justifyContent : 'center' , alignItems : 'center'},
  title : {fontSize : 20 , fontFamily : 'Poppins-Regular' , color:'#020202' },
  subTitle : {fontSize : 14 , fontFamily : 'Poppins-Light' , color:'#8D92A3' },
  btnContainer : { width : '100%' , paddingHorizontal: 80}
})
