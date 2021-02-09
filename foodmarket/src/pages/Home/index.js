import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {DummyProfile} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';
import {getFoodCard} from '../../redux/action';
import {showMessage} from '../../utils';
import {getData} from '../../utils/storage';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector((state) => state.homeReducer);
  const [photo, setPhoto] = useState(DummyProfile);
  useEffect(() => {
    dispatch(getFoodCard());
    getData('userProfile')
      .then((res) => {
        setPhoto({uri: res.profile_photo_url});
      })
      .catch((err) => {
        showMessage(err);
      });
  }, []);
  return (
    <ScrollView>
      <View style={styles.page}>
        <HomeProfile photo={photo} />
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
                    onPress={() => navigation.navigate('FoodDetail', itemFood)}
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
