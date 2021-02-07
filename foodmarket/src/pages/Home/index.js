import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';
import {getFoodCard} from '../../redux/action';

const Home = () => {
  const dispatch = useDispatch();
  const {food} = useSelector((state) => state.homeReducer);
  console.log('use select' + food);
  useEffect(() => {
    dispatch(getFoodCard());
  }, []);
  return (
    <ScrollView>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodContainer}>
              <Gap width={24} />

              {food.map((itemFood) => {
                return (
                  <FoodCard
                    key={itemFood.id}
                    title={itemFood.name}
                    img={{uri: itemFood.picturePath}}
                    number={itemFood.rate}
                  />
                );
              })}
              <Gap width={24} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
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
