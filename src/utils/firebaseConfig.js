import { configureStore, createSlice } from '@reduxjs/toolkit';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Configuração do Firebase
console.log('!!!', process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Inicialização do Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Objeto de autenticação do Firebase
export const auth = getAuth(firebaseApp);
