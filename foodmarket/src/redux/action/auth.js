import axios from 'axios';
import {serverApi} from '../../config';
import {showMessage} from '../../utils';
import {storeData} from '../../utils/storage';
import {isLoading} from './global';

export const signUpAction = (dataRegister, uploadReducer, navigation) => (
  dispatch,
) => {
  console.log('data up' + dataRegister);
  axios
    .post(`${serverApi.url}/register`, dataRegister)
    .then((res) => {
      console.log('data success:', res.data);

      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.user;

      storeData('token', {value: token});

      if (uploadReducer.isUpload) {
        const dataPhotoUpload = new FormData();
        dataPhotoUpload.append('file', uploadReducer);

        axios
          .post(`${serverApi.url}/user/photo`, dataPhotoUpload, {
            headers: {
              Authorization: token,
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((uploadResponse) => {
            profile.profile_photo_url = `http://foodmarket.nuzul.space/storage/${uploadResponse.data.data[0]}`;
            storeData('userProfile', profile);
            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
          })
          .catch((err) => {
            console.log(dataPhotoUpload);
            showMessage('Upload Gagal');
            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
          });
      } else {
        storeData('userProfile', profile);
        navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
      }
      dispatch(isLoading(false));
    })
    .catch((err) => {
      dispatch(isLoading(false));
      console.log(err);
      showMessage(err?.response?.data?.data?.message);
    });
};

export const signInAction = (form, navigation) => (dispatch) => {
  dispatch(isLoading(true));
  axios
    .post(`${serverApi.url}/login`, form)
    .then((res) => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.user;
      dispatch(isLoading(false));
      storeData('token', {value: token});
      storeData('userProfile', profile);

      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch((err) => {
      console.log('err', err);
      dispatch(isLoading(false));
      showMessage(err?.response?.data?.data?.message);
    });
};
