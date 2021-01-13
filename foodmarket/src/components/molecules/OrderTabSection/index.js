import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import {
  DummyProfile1,
  DummyProfile2,
  DummyProfile3,
  DummyProfile4,
  DummyProfile5
} from '../../../assets';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native'

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBarStyle}
    tabStyle={styles.tabStyle}
    renderLabel={({route, focused}) => (
      <Text style={styles.tabText(focused)}>{route.title}</Text>
    )}
  />
);
const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8 , paddingHorizontal : 24 }}>
      <ItemListFood rating={3} image={DummyProfile1}  type="in-progress" name="Soup Bumil" items={3} price="2.000.000" onPress={() => navigation.navigate('OrderDetail')} />
      <ItemListFood rating={3} image={DummyProfile3}  type="in-progress" name="Soup Bumil" items={3} price="2.000.000" onPress={() => navigation.navigate('OrderDetail')} />
      <ItemListFood rating={3} image={DummyProfile5}  type="in-progress" name="Soup Bumil" items={3} price="2.000.000" onPress={() => navigation.navigate('OrderDetail')} />
    </View>
  );
};
const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8 , paddingHorizontal : 24}}>
      <ItemListFood rating={3} image={DummyProfile3} type="past-orders" name="Soup Bumil" items={3} price="2.000.000" date="Jun 12, 14:00" status="Cancel" onPress={() => navigation.navigate('OrderDetail')} />
      <ItemListFood rating={3} image={DummyProfile4} type="past-orders" name="Soup Bumil" items={3} price="2.000.000" date="Jun 12, 14:00" onPress={() => navigation.navigate('OrderDetail')} />
      <ItemListFood rating={3} image={DummyProfile5} type="past-orders" name="Soup Bumil" items={3} price="2.000.000" date="Jun 12, 14:00" onPress={() => navigation.navigate('OrderDetail')} />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{ backgroundColor : 'white' }}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: '#020202',
    height: 3,
    width: '15%',
    marginLeft: '3%',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  tabStyle: {width: 'auto'},
  tabText: (focused) => ({
    fontFamily: 'Poppins-Medium',
    color: focused ? '#020202' : '#8D92A3',
  }),
});
