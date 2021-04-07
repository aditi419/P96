//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyA0Hkn9sa6sb_U9nTWTUjgcqY0DPSBrz8w",
    authDomain: "classtest-c96b9.firebaseapp.com",
    databaseURL: "https://classtest-c96b9-default-rtdb.firebaseio.com",
    projectId: "classtest-c96b9",
    storageBucket: "classtest-c96b9.appspot.com",
    messagingSenderId: "8967930635",
    appId: "1:8967930635:web:d5a5d222a06a0d9ca5180e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name: user_name, message: msg, like:0});
      document.getElementById("msg").value = "";
}