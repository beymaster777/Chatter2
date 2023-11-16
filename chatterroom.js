// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWLestWizDpNCnsYRVqDBJqNTVs53Dtc8",
    authDomain: "chatterbot-3d890.firebaseapp.com",
    databaseURL: "https://chatterbot-3d890-default-rtdb.firebaseio.com",
    projectId: "chatterbot-3d890",
    storageBucket: "chatterbot-3d890.appspot.com",
    messagingSenderId: "943194593842",
    appId: "1:943194593842:web:a9ed6e046d7d8687f87a2b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"So we can chat with people"
      });

      localStorage.setItem("room_name", room_name);

      window.location="chatter_page.html";
}



  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();