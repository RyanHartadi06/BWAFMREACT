import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Number} from '..';

import Rating from '../Rating';

/*
  1. product
  2. order-summary
  3. in-progress
  4. past-orders
*/

const ItemListFood = ({
  image,
  onPress,
  items,
  rating,
  price,
  type,
  name,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        // item list product sprt di homepage
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.text}>{name}</Text>
              <Number number={price} style={styles.idr} />
            </View>
            <Rating number={rating} />
          </>
        );
      case 'order-summary':
        //item order summary
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.text}>{name}</Text>
              <Number number={price} style={styles.idr} />
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        //item in progress
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.text}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.idr}>{items} items</Text>
                <View style={styles.dot} />
                <Number number={price} style={styles.idr} />
              </View>
            </View>
          </>
        );
      case 'past-orders':
        const formatedDate = new Date(date).toDateString();
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.text}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.idr}>{items} items</Text>
                <View style={styles.dot} />
                <Number number={price} style={styles.idr} />
              </View>
            </View>
            <View>
              <Text style={styles.date}>{formatedDate}</Text>
              <Text style={styles.status(status)}>{status}</Text>
            </View>
          </>
        );
      //item past orders
      default:
        //item product
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.text}>{name}</Text>
              <Number number={price} style={styles.idr} />
            </View>
            <Rating />
          </>
        );
    }
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <Image source={image} style={styles.foto} />
        {renderContent()}
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
  items: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  content: {
    flex: 1,
  },
  date: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  status: (status) => ({
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: status === 'CANCELLED' ? '#D9435E' : '#1ABC9C',
  }),
  row: {flexDirection: 'row', alignItems: 'center'},
  dot: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#8D92A3',
    marginHorizontal: 4,
  },
});
