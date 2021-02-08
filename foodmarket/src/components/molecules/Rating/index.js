import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Number} from '../..';
import {Ic_Star_Off, Ic_Star_On} from '../../../assets';

const index = ({number}) => {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        star.push(<Ic_Star_On key={i} />);
      } else {
        star.push(<Ic_Star_Off key={i} />);
      }
    }
    return star;
  };
  return (
    <View style={styles.ratingCantainer}>
      <View style={styles.starContainer}>
        {renderStar()}
        <Number number={number} type="decimal" style={styles.numberRating} />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  ratingCantainer: {flexDirection: 'row'},
  starContainer: {flexDirection: 'row', marginRight: 4},
  numberRating: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginTop: 2,
  },
});
