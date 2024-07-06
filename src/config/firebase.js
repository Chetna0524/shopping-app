// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "XXX,
	authDomain: "shopping-app-XXX.firebaseapp.com",
	projectId: "shopping-app-XXX",
	storageBucket: "shopping-app-XXX.appspot.com",
	messagingSenderId: "10426129XXX",
	appId: "1:1042612953262:web:179ce4135782eXXXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


