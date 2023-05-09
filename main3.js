user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name")

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCYK0MtaN7v8N2YwSf-I8zEXgKSQyl7rtQ",
      authDomain: "kwitter-f6ff5.firebaseapp.com",
      databaseURL: "https://kwitter-f6ff5-default-rtdb.firebaseio.com",
      projectId: "kwitter-f6ff5",
      storageBucket: "kwitter-f6ff5.appspot.com",
      messagingSenderId: "570005504745",
      appId: "1:570005504745:web:809ece7d083dda605ce678"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 function back(){
  window.location = "room2.html";
 }

 function send(){

//take the value of the text input from html-- document.getElementById('msg').value
 msg =document.getElementById('msg').value;

      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }


    //Add the code for the logout button
    function logout()
    {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html";
    }
