import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ic_Star_Off, Ic_Star_On} from '../../../assets';

const index = ({number}) => {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        star.push(<Ic_Star_On />);
      } else {
        star.push(<Ic_Star_Off />);
      }
    }
    return star;
  };
  return (
    <View style={styles.ratingCantainer}>
      <View style={styles.starContainer}>
        {renderStar()}
        <Text>{number}</Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  ratingCantainer: {flexDirection: 'row'},
  starContainer: {flexDirection: 'row', marginRight: 4},
});
