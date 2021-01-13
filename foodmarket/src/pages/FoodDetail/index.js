import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DummyProfile6, Ic_Back_White} from '../../assets';
import {Button, Rating , Counter} from '../../components';
const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={DummyProfile6} style={styles.img}>
        <Ic_Back_White />
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Cherry Healthy</Text>
              <Rating />
            </View>
           <Counter />
          </View>
          <Text style={styles.desc}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labeltotal}>Total Price:</Text>
            <Text style={styles.pricetotal}>IDR 12.289.000</Text>
          </View>
          <View style={styles.btn}>
            <Button title="Order Now" onPress={() => navigation.navigate('OrderSummary')}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  img: {
    height: 330,
    paddingTop: 26,
    paddingLeft: 22,
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  mainContent : {flex :1}, 
  title: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  label: {fontSize: 14, fontFamily: 'Poppins-Regular', marginBottom: 4},
  footer : {flexDirection : 'row'  , paddingVertical : 16 , alignItems : 'center' },
  btn : {width : 163},
  priceContainer : {flex : 1},
  labeltotal : {fontSize : 13 , fontFamily : 'Poppins-Regular' , color : '#8D92A3'},
  pricetotal : {fontSize : 18 , fontFamily : 'Poppins-Regular' , color :  '#020202'}
});
