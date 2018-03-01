var config = {
    apiKey: "AIzaSyCoqr_hE8PriTvoWww29C1XGihLYNXsveQ",
    authDomain: "diapercounter-658d5.firebaseapp.com",
    databaseURL: "https://diapercounter-658d5.firebaseio.com",
    projectId: "diapercounter-658d5",
    storageBucket: "diapercounter-658d5.appspot.com",
    messagingSenderId: "571371507572"
  };
  firebase.initializeApp(config);

  var count=0;

  firebase.database().ref().on("value",function(snapshot){
    count=snapshot.val().DiaperCount;
      $(".diaperCount").html(count);
      console.log(count);
  });
$(document).ready(function(){
    $(".diaper").on("click",function(){
        count++;
        firebase.database().ref().set({
            DiaperCount:count
          });
       
    });  


})


  