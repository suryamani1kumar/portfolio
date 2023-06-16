import CryptoJS from 'crypto-js';
import { SECRET_KEY } from '../static';

export const setTolocalStroage = (key, value) => {
  const encrypt = CryptoJS.AES.encrypt(
    JSON.stringify(value),
    SECRET_KEY
  ).toString();
  window.localStorage.setItem(key, encrypt);
};

export const getFromlocalStroage = (key) => {
  const gettheme = window.localStorage.getItem(key);
  const decrypt = CryptoJS.AES.decrypt(gettheme, SECRET_KEY).toString(
    CryptoJS.enc.Utf8
  );
  if (decrypt) {
    return JSON.parse(decrypt);
  }
};
