var firebaseConfig = {
    apiKey: "AIzaSyCH3oCg-0ascRTNbsL3GLq4-tH-j9QWPR8",
    authDomain: "chat-app-defdb.firebaseapp.com",
    projectId: "chat-app-defdb",
    storageBucket: "chat-app-defdb.appspot.com",
    messagingSenderId: "1007536002542",
    appId: "1:1007536002542:web:6209ded6f937bccc03aaff"
  };
  var app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
