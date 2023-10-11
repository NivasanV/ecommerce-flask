// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHulnc9_f46r8AFT70rOanGRwTtg4PuMI",
  authDomain: "login-with-firebase-db-23c90.firebaseapp.com",
  databaseURL: "https://login-with-firebase-db-23c90-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "login-with-firebase-db-23c90",
  storageBucket: "login-with-firebase-db-23c90.appspot.com",
  messagingSenderId: "719185279639",
  appId: "1:719185279639:web:2be99ec6b660f0cf84c7d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

//getting all the objects of html
var log_email = document.getElementById("log_email");
var log_password = document.getElementById("log_password");

//making an function for login
window.login = function(e){
    e.preventDefault();
    var obj = {
        email : log_email.value,
        password : log_password.value
    };
    signInWithEmailAndPassword(auth,obj.email,obj.password)
    .then(function(success){
        alert("Login successfully");
    })
    .catch(function(err){
        alert("login error "+err)
    })
    console.log(obj)
}

