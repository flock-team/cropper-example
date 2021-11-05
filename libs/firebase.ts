import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC14BWnkfWvnUKM0rvWV46CUPDbRpVJ4AY',
  authDomain: 'fir-578a7.firebaseapp.com',
  projectId: 'fir-578a7',
  storageBucket: 'fir-578a7.appspot.com',
  messagingSenderId: '1059977967799',
  appId: '1:1059977967799:web:60bf63f4b8c3290c60b532',
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore();
export const storage = getStorage();
