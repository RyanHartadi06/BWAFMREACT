import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from '../showMessage';

export const storeData = async (storage_Key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storage_Key, jsonValue);
  } catch (e) {
    // saving error
    showMessage('Terjadi Kesalahan Dalam Store Data');
  }
};

export const getData = async (storage_Key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storage_Key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    showMessage('Terjadi Kesalahan Dalam get Data');
  }
};
