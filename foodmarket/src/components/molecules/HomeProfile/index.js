import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {DummyProfile} from '../../../assets';

const HomeProfile = () => {
  return (
    <View style={styles.profileComponent}>
      <View>
        <Text style={styles.appName}>Foodmarket</Text>
        <Text style={styles.desc}>Let's get some foods</Text>
      </View>
      <Image source={DummyProfile} style={styles.foto} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  foto: {width: 50, height: 50, borderRadius: 8},
  profileComponent: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
});
