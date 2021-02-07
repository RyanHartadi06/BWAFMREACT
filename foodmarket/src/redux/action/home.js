import axios from 'axios';
import {serverApi} from '../../config';
import {showMessage} from '../../utils';

export const getFoodCard = () => (dispatch) => {
  axios
    .get(`${serverApi.url}/food`)
    .then((res) => {
      dispatch({type: 'SET_FOOD', value: res.data.data.data});
      console.log(res.data.data.data);
    })
    .catch((err) => {
      console.log(err);
      showMessage(
        `${err?.response?.data?.message} on Food API` ||
          'Terjadi kesalahan di API Food',
      );
    });
};
