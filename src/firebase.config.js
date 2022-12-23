import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyAPbNPgJ26xoEcBco1lZfNApBmEzqSvd_M",
	authDomain: "hox-reactapp.firebaseapp.com",
	projectId: "hox-reactapp",
	storageBucket: "hox-reactapp.appspot.com",
	messagingSenderId: "860356027648",
	appId: "1:860356027648:web:27b8e54012f15991973fe5",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
