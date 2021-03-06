import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Rating from '../Rating';
const FoodCard = ({img, onPress, title, number}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={img} style={styles.foto} />
        <View style={styles.content}>
          <Text style={styles.text}>{title}</Text>
          <Rating number={number} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  foto: {width: 200, height: 140, resizeMode: 'cover'},
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 7},
    borderRadius: 10,
    elevation: 14,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 24,
  },
  content: {padding: 12},
  text: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
});
