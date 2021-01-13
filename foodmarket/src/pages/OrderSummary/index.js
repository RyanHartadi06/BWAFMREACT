import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyProfile1} from '../../assets';
import {Button, Header, ItemListFood, ItemValue} from '../../components';
const OrderSummary = ({navigation}) => {
  return (
    <View>
      <Header
        title="Payment"
        subtitle="You deserve better meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood image={DummyProfile1} items={14} />
        <Text>Details Transactions</Text>
        <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
        <ItemValue label="Driver" value="IDR 50.000"/>
        <ItemValue label="Tax 10%" value="IDR 1.800.390"/>
        <ItemValue label="Total Price" value="IDR 390.803.000" valueColor= "#1ABC9C"/>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value="Ryan Hartadi" />
        <ItemValue label="Phone No." value="081359652164" />
        <ItemValue label="Address" value="Setra Duta Palima" />
        <ItemValue label="House No." value="A5 Hook" />
        <ItemValue label="City" value="Bandung" />
      </View>
      <View style={styles.button}>

      <Button title="Checkout Now" onPress={() => navigation.replace('SuccessOrderPage')}/>
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop : 24
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Reguler',
    color: '#020202',
    marginBottom : 8
  },
  button : {
    paddingHorizontal : 24 , marginTop : 24
  }
});
