import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DummyProfile6, Ic_Back_White} from '../../assets';
import {Button, Rating, Counter, Number} from '../../components';
import {getData} from '../../utils/storage';
const FoodDetail = ({navigation, route}) => {
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    getData('userProfile').then((res) => {
      setUserProfile(res);
    });
  }, []);
  const {
    name,
    rate,
    description,
    ingredients,
    picturePath,
    price,
  } = route.params;
  const [totalItem, setTotalItem] = useState(1);
  const onCounterChange = (value) => {
    setTotalItem(value);
  };
  const onOrderNow = () => {
    const totalPrice = totalItem * price;
    const driver = 50000;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + driver + tax;
    const data = {
      item: {
        name: name,
        price: price,
        picturePath: picturePath,
      },
      transaction: {
        totalItem: totalItem,
        totalPrice: totalPrice,
        driver: driver,
        tax: tax,
        total: total,
      },
      userProfile,
    };
    navigation.navigate('OrderSummary', data);
  };
  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: picturePath}} style={styles.img}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ic_Back_White />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>{name}</Text>
              <Rating number={rate} />
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <Text style={styles.desc}>{description}</Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>{ingredients}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labeltotal}>Total Price:</Text>
            <Number number={totalItem * price} style={styles.pricetotal} />
          </View>
          <View style={styles.btn}>
            <Button title="Order Now" onPress={onOrderNow} />
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
  mainContent: {flex: 1},
  title: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  label: {fontSize: 14, fontFamily: 'Poppins-Regular', marginBottom: 4},
  footer: {flexDirection: 'row', paddingVertical: 16, alignItems: 'center'},
  btn: {width: 163},
  priceContainer: {flex: 1},
  labeltotal: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  pricetotal: {fontSize: 18, fontFamily: 'Poppins-Regular', color: '#020202'},
});
