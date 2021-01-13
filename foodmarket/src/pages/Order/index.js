import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EmptyOrderSection, Header, OrderTabSection} from '../../components';

const Order = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {isEmpty ? (
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
    backgroundColor : 'white'
  },
  content: {flex: 1},
  tabContainer: {flex: 1, marginTop: 24},
});
