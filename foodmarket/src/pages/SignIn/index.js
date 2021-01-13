import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, TextInput } from '../../components'
import { Header } from '../../components/molecules'

const SignIn = ({navigation}) => {
    return (
        <View style={styles.page}> 
            <Header title="Sign In" subtitle="Find your best meal" />
            <View style={styles.container}>
                <TextInput label="Email" pl="Type your email address"/>
                <Gap height={16}/>
                <TextInput label="Password" pl="Type your password"/>
                <Gap height={24}/>
                <Button title="Sign In" onPress={() => navigation.navigate('MainApp')}/>
                <Gap height={12}/>
                <Button title="Create New Account" color="#8D92A3" txtcolor="white" onPress={() => navigation.navigate('SignUp')}/>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    page : {
        flex :1
    },
    container : {
        backgroundColor : 'white' , 
        paddingHorizontal : 24 , 
        paddingVertical : 26 ,
        marginTop : 24 , 
        flex : 1
    }
})
