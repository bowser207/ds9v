var firebaseConfig = {
    apiKey: "AIzaSyCv-IlA7zVbYCg-sYSaB_yv8JeyOMq13hg",
    authDomain: "hyundai-chat-app.firebaseapp.com",
    databaseURL: "https://hyundai-chat-app-default-rtdb.firebaseio.com",
    projectId: "hyundai-chat-app",
    storageBucket: "hyundai-chat-app.appspot.com",
    messagingSenderId: "196472241181",
    appId: "1:196472241181:web:f3e1b21f7664eef24b5af4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        name: username,
        message: msg,
        like: 0
    });
  }