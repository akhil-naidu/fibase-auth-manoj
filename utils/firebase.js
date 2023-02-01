import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCRCwZMVcVDIOaWje7uZP0owXI-qLEsJkI',
  authDomain: 'fire-auth-manoj.firebaseapp.com',
  projectId: 'fire-auth-manoj',
  storageBucket: 'fire-auth-manoj.appspot.com',
  messagingSenderId: '680359640901',
  appId: '1:680359640901:web:fa14a1e0080853ec44082c',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
