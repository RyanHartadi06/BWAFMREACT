import React , {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { EmptyOrderSection } from '../../components'

const Order = () => {
    const [isEmpty] = useState(false);
    return (
        <View style={styles.page}>
            {isEmpty ? <EmptyOrderSection /> : (<Text>Ada Datanya</Text>) }
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    page : {
        flex : 1,
        backgroundColor : 'white'
    }
})
