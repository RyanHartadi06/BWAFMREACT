import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IcButtonMin, IcButtonPlus} from '../../../assets';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);
  useEffect(() => {
    onValueChange(value);
  }, []);
  const onCount = (type) => {
    let res = value;
    if (type === 'plus') {
      res = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        res = value - 1;
      }
    }
    setValue(res);
    onValueChange(res);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onCount('minus')}>
        <IcButtonMin />
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>

      <TouchableOpacity onPress={() => onCount('plus')}>
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
