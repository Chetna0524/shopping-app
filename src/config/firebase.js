// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCHK8i_DPrEQUa9d8c8C9na39Z-4EbAtQs",
	authDomain: "shopping-app-18033.firebaseapp.com",
	projectId: "shopping-app-18033",
	storageBucket: "shopping-app-18033.appspot.com",
	messagingSenderId: "1042612953262",
	appId: "1:1042612953262:web:179ce4135782e92f814d3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

/* 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHTZvqPA8F4bg19J8A7Wra7iOwclMhxgI",
  authDomain: "shopping-app-d95eb.firebaseapp.com",
  projectId: "shopping-app-d95eb",
  storageBucket: "shopping-app-d95eb.appspot.com",
  messagingSenderId: "954008185536",
  appId: "1:954008185536:web:1a7a12aa54b7d02aa39b25",
  measurementId: "G-ZZ61YZBQ4F",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
 */
