import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
//import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhzOapGVBOPyq2mmJb5IVLLpjK0TEE5lY",
  authDomain: "wanderwise-f21a9.firebaseapp.com",
  databaseURL: "https://wanderwise-f21a9-default-rtdb.firebaseio.com",
  projectId: "wanderwise-f21a9",
  storageBucket: "wanderwise-f21a9.appspot.com",
  messagingSenderId: "799016861840",
  appId: "1:799016861840:web:1403232429bfe801249815"
};

//Initialize Database
const app = initializeApp(firebaseConfig);
const auth = getAuth();
//const database = getDatabase(app);

//Logging in
const login = document.getElementById("login-button");
login.addEventListener("click", function(){
const loginEmail = document.getElementById("login-email").value;
const loginPassword = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword).then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome Back!<br>"+loginEmail+" was Login Successfully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
  });
    
});


//Registering WIP
//const register = document.getElementById("register-button");
//register.addEventListener("click", function(){

//});
