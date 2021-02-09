import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {DummyProfile} from '../../../assets';
import {getData} from '../../../utils/storage';

const HomeProfile = ({photo}) => {
  // const [photo, setPhoto] = useState(DummyProfile);
  // useEffect(() => {
  //   return () => {
  //     getData('userProfile')
  //       .then((res) => {
  //         console.log('data respon' + res);
  //         setPhoto({uri: res.profile_photo_url});
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  // }, []);
  return (
    <View style={styles.profileComponent}>
      <View>
        <Text style={styles.appName}>Foodmarket</Text>
        <Text style={styles.desc}>Let's get some foods</Text>
      </View>
      <Image source={photo} style={styles.foto} />
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
