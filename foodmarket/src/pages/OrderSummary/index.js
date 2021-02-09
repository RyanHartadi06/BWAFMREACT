import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  Button,
  Header,
  ItemListFood,
  ItemValue,
  Gap,
  Loading,
} from '../../components';
import {serverApi} from '../../config';
import {showMessage} from '../../utils';
import {getData} from '../../utils/storage';
import {WebView} from 'react-native-webview';
const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [token, setToken] = useState('');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState('www.google.com');
  useEffect(() => {
    getData('token')
      .then((res) => {
        setToken(res.value);
      })
      .catch((err) => {
        showMessage('Token Not Found');
      });
  }, []);
  const onCheckOut = () => {
    const onSubmitOrder = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.totalPrice,
      status: 'PENDING',
      //
      //
      // "Laravel"
    };
    axios
      .post(`${serverApi.url}/checkout`, onSubmitOrder, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setIsPaymentOpen(true);
        setPaymentUrl(res.data.data.payment_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onNavChange = (state) => {
    console.log(state);
    const urlSuccess =
      'http://foodmarket.nuzul.space/midtrans/success?order_id=8&status_code=201&transaction_status=pending';
    const urlWeb = 'Laravel';
    if (state.title === urlWeb) {
      navigation.replace('SuccessOrderPage');
    }
  };
  if (isPaymentOpen) {
    return (
      <>
        <Header
          title="Payment"
          subtitle="You deserve better meal"
          onBack={() => setIsPaymentOpen(false)}
        />
        <WebView
          source={{uri: paymentUrl}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={(state) => onNavChange(state)}
        />
      </>
    );
  }
  return (
    <ScrollView>
      <Header
        title="Payment"
        subtitle="You deserve better meal"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          image={{uri: item.picturePath}}
          items={transaction.totalItem}
          type="order-summary"
          name={item.name}
          price={item.price}
        />
        <Text style={styles.label}>Details Transactions</Text>
        <ItemValue
          label={item.name}
          value={transaction.totalPrice}
          type="currency"
        />
        <ItemValue label="Driver" value={transaction.driver} type="currency" />
        <ItemValue label="Tax 10%" value={transaction.total} type="currency" />
        <ItemValue
          label="Total Price"
          value={transaction.total}
          valueColor="#1ABC9C"
          type="currency"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value={userProfile.name} />
        <ItemValue label="Phone No." value={userProfile.phoneNumber} />
        <ItemValue label="Address" value={userProfile.address} />
        <ItemValue label="House No." value={userProfile.houseNumber} />
        <ItemValue label="City" value={userProfile.city} />
      </View>
      <View style={styles.button}>
        <Button title="Checkout Now" onPress={onCheckOut} />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {paddingHorizontal: 24, marginTop: 24},
});
