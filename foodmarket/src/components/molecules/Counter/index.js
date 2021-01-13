import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IcButtonMin, IcButtonPlus} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcButtonMin />
      </TouchableOpacity>
      <Text style={styles.value}>14</Text>

      <TouchableOpacity>
        <IcButtonPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  value: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginHorizontal: 10,
  },
});
