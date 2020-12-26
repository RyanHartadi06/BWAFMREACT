import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  DummyProfile,
  DummyProfile1,
  DummyProfile2,
  DummyProfile3,
  DummyProfile4,
  DummyProfile5,
} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodContainer}>
            <Gap width={24} />
            <FoodCard img={DummyProfile1} />
            <FoodCard img={DummyProfile2} />
            <FoodCard img={DummyProfile3} />
            <FoodCard img={DummyProfile4} />
            <FoodCard img={DummyProfile5} />
            <Gap width={24} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  foodContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  page: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
});
