import axios from 'axios';
import {serverApi} from '../../config';
import {showMessage} from '../../utils';

export const getFoodCard = () => (dispatch) => {
  axios
    .get(`${serverApi.url}/food`)
    .then((res) => {
      dispatch({type: 'SET_FOOD', value: res.data.data.data});
    })
    .catch((err) => {
      showMessage(
        `${err?.response?.data?.message} on Food API` ||
          'Terjadi kesalahan di API Food',
      );
    });
};
export const getFoodDataByTypes = (types) => (dispatch) => {
  axios
    .get(`${serverApi.url}/food?types=${types}`)
    .then((res) => {
      if (types === 'new_food') {
        dispatch({type: 'SET_NEW_TASTE', value: res.data.data.data});
        console.log(res.data.data.data);
      }
      if (types === 'popular') {
        dispatch({type: 'SET_POPULAR', value: res.data.data.data});
      }
      if (types === 'recommended') {
        dispatch({type: 'SET_RECOMMENDED', value: res.data.data.data});
      }
    })
    .catch((err) => {
      showMessage(
        `${err?.response?.data?.message} on Food By Type API` ||
          'Terjadi kesalahan di API Food By Type',
      );
    });
};
