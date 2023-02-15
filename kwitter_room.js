
//ADD YOUR FIREBASE LINKS HERE
function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child("user_name").update({
          purpose:"adding user"});
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      const firebaseConfig = {
            apiKey: "AIzaSyB-Eb2tsc5ccjWIpfomYVkZrYWkYzrPQ7I",
            authDomain: "lets-chat-14f81.firebaseapp.com",
            databaseURL: "https://lets-chat-14f81-default-rtdb.firebaseio.com",
            projectId: "lets-chat-14f81",
            storageBucket: "lets-chat-14f81.appspot.com",
            messagingSenderId: "737174370802",
            appId: "1:737174370802:web:96c4dbfd5dfbb890da536b"
          };
          
          // Initialize Firebase
          firebase.databaseinitializeApp(firebaseConfig);
      firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= " Welcome " + user_name + " ! ";
function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name "
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_room.html";
}
function getData() {firebase.database.ref("/").on('value' , function(snapshot){document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot){childKey =childSnapshot.key;
Room_names = childKey;
console.log("room_name- " + Room_names);
row="<div class='room_name' id="+Room_names+ "onclick ='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
});});}

      //End code
      
      });});}
getData();
