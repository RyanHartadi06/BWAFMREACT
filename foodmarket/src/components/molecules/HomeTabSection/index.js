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
const NewTaste = () => {
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood image={DummyProfile1}/>
      <ItemListFood image={DummyProfile3}/>
      <ItemListFood image={DummyProfile5}/>
    </View>
  );
};
const Popular = () => {
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood image={DummyProfile3}/>
      <ItemListFood image={DummyProfile4}/>
      <ItemListFood image={DummyProfile5}/>
    </View>
  );
};
const Recommended = () => {
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood image={DummyProfile1}/>
      <ItemListFood image={DummyProfile2}/>
      <ItemListFood image={DummyProfile3}/>
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default HomeTabSection;

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
