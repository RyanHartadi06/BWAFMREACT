import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header, Button, Gap, TextInput} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {showMessage, useForm} from '../../utils';
import ImagePicker from 'react-native-image-picker';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });
  const [photo, setPhoto] = useState('');
  const onSubmit = () => {
    console.log(form);
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpAddress');
  };
  const addPhoto = () => {
    ImagePicker.showImagePicker(
      {
        quality: 0.5,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        if (response.didCancel || response.error) {
          showMessage('Anda Tidak Memilih Photo');
        } else {
          const source = {uri: response.uri};
          console.log(source);
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };
          console.log(dataImage);
          setPhoto(source);
          dispatch({type: 'SET_PHOTO', value: dataImage});
          dispatch({type: 'SET_UPLOAD_STATUS', value: true});
        }

        // ImagePicker.launchImageLibrary((response) => {
        //   if (response.didCancel || response.error) {
        //     showMessage('Anda Tidak Memilih Photo');
        //   } else {
        //     const source = {uri: response.uri};
        //     const dataImage = {
        //       uri: response.uri,
        //       type: response.type,
        //       name: response.fileName,
        //     };
        //     setPhoto(source);
        //     dispatch({type: 'SET_PHOTO', value: dataImage});
        //     dispatch({type: 'SET_UPLOAD_STATUS', value: true});
        //   }
        // });
        // ImagePicker.launchCamera((response) => {
        //   if (response.didCancel || response.error) {
        //     showMessage('Anda Tidak Memilih Photo');
        //   } else {
        //     const source = {uri: response.uri};
        //     const dataImage = {
        //       uri: response.uri,
        //       type: response.type,
        //       name: response.fileName,
        //     };
        //     setPhoto(source);
        //     dispatch({type: 'SET_PHOTO', value: dataImage});
        //     dispatch({type: 'SET_UPLOAD_STATUS', value: true});
        //   }
        // });
      },
    );
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Sign Up"
          subtitle="Register and eat"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={addPhoto}>
              <View style={styles.borderPhoto}>
                {photo ? (
                  <Image source={photo} style={styles.photoContainer} />
                ) : (
                  <View style={styles.photoContainer}>
                    <Text style={styles.addphoto}>Add Photo</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          {/* <Text>{`state : ${globalState.isError}`}</Text> */}
          <TextInput
            label="Full Name"
            pl="Type your fullnname"
            value={form.name}
            onChangeText={(value) => setForm('name', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Email Address"
            pl="Type your email address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Password"
            pl="Type your password"
            secureTextEntry
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
          />
          <Gap height={24} />
          <Button title="Continue" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  addphoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {alignItems: 'center', marginTop: 26, marginBottom: 16},
});
