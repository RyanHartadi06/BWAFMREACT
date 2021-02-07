import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, Button, Gap, TextInput, Select} from '../../components';
import {useForm, showMessage} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {isLoading, signUpAction} from '../../redux/action';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Jember',
  });

  const dispatch = useDispatch();
  const {registerReducer, uploadReducer} = useSelector((state) => state);
  console.log(uploadReducer);
  const Submit = () => {
    const data = {
      ...form,
      ...registerReducer,
    };
    dispatch(isLoading(true));
    //make Redux
    //dalam pemanggilan redux perlu dispatch
    dispatch(signUpAction(data, uploadReducer, navigation));

    //ga make redux
    // axios
    //   .post('http://foodmarket.nuzul.space/api/register', data)
    //   .then((res) => {
    //     console.log('data success:', res.data);
    //     if (uploadReducer.isUpload) {
    //       const dataPhotoUpload = new FormData();
    //       dataPhotoUpload.append('file', uploadReducer);
    //       axios
    //         .post(
    //           'http://foodmarket.nuzul.space/api/user/photo',
    //           dataPhotoUpload,
    //           {
    //             headers: {
    //               Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
    //               'Content-Type': 'multipart/form-data',
    //             },
    //           },
    //         )
    //         .then((uploadResponse) => {
    //           console.log(dataPhotoUpload);
    //           console.log('upload success =', uploadResponse);
    //         })
    //         .catch((err) => {
    //           console.log(dataPhotoUpload);
    //           console.log('upload gagal =', err);
    //           showMessage('Upload Gagal');
    //         });
    //     }
    //     dispatch(isLoading(false));
    //     showMessage('Register Success', 'success');
    //     navigation.navigate('SuccessSignUp');
    //   })
    //   .catch((err) => {
    //     dispatch(isLoading(false));
    //     console.log(err);
    //     showMessage(err?.response?.data?.data?.message);
    //   });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Address"
          subtitle="Make sure it's valid"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <TextInput
            label="Phone No."
            pl="Type your phone number"
            value={form.phoneNumber}
            onChangeText={(value) => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            pl="Type your address"
            value={form.address}
            onChangeText={(value) => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House No."
            pl="Type your house number"
            value={form.houseNumber}
            onChangeText={(value) => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={(value) => setForm('city', value)}
          />
          <Gap height={24} />
          <Button title="Sign Up Now" onPress={Submit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
