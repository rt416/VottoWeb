/* @flow */
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBltZXDdBTBCHoxvIbWVxdc1qgPbfyKGd8',
  authDomain: 'votto.firebaseapp.com',
  databaseURL: 'https://votto.firebaseio.com',
  storageBucket: 'project-7517421596970112177.appspot.com',
};

firebase.initializeApp(config);

const database = firebase.database();

export const constantsRef = database.ref('constants/');
