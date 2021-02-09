import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {EmptyOrderSection, Header, OrderTabSection} from '../../components';
import {getOrders} from '../../redux/action';

const Order = () => {
  const [isEmpty] = useState(false);
  const dispatch = useDispatch();
  const {orders} = useSelector((state) => state.orderReducer);
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    <View style={styles.page}>
      {orders.length < 1 ? (
        <EmptyOrderSection />
      ) : (
        <View style={styles.content}>
          <Header title="Your Orders" subtitle="Wait for the best meal" />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {flex: 1},
  tabContainer: {flex: 1, marginTop: 24},
});
