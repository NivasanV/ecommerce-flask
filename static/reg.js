// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
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
var user_name = document.getElementById("reg_user_name");
var email = document.getElementById("reg_email");
var password = document.getElementById("reg_password");

//making an function for storing data
window.register = function(e){
    e.preventDefault();
    var obj = {
        user_name : user_name.ariaValueMax,
        email : email.value,
        password : password.value
    }
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        alert("Registered Successfully")
    })
    .catch(function(err){
        alert("Error" + err)
    })
    console.log(obj);
};