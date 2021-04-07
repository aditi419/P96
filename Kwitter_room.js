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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name" + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose: "Add Room Name"});
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function redirectToRoomName(name) {
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function Logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
