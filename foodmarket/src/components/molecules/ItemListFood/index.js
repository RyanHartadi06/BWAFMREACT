import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Rating from '../Rating';
const ItemListFood = ({image , onPress , items , rating}) => {
  return (
    <TouchableOpacity  onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <Image source={image} style={styles.foto} />
        <View style={{flex: 1}}>
          <Text style={styles.text}> Soup Bumil</Text>
          <Text style={styles.idr}> IDR 289.000</Text>
        </View>
    
        {items && !rating && <Text style={styles.items}>{items} items</Text>}
        {rating && !items && <Rating />}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    alignItems: 'center',
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  idr: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  items : {
    fontSize : 13,
    fontFamily : 'Poppins-Regular',
    color : '#8D92A3'
  }
});
