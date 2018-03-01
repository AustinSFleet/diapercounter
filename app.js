// Diaper counting code
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

  var isClicked=false;

  firebase.database().ref().on("value",function(snapshot){
    count=snapshot.val().DiaperCount;
      $(".diaperCount").html(count);
      console.log(count);
  });
$(document).ready(function(){

    $(".junebug").click(function(){
        if (isClicked===false){
            isClicked=true;
        }else {
            isClicked=false;
        }
    })

    $(".plusDiaper").on("click",function(){
        if (isClicked===true){
            count++;
            firebase.database().ref().set({
                DiaperCount:count
            });
        } else {
            alert("you're not authorized to update the count buckaroo.");
        }
       
    });  

    $(".minusDiaper").on("click",function(){
        if (isClicked===true){
            count--;
            firebase.database().ref().set({
                DiaperCount:count
            });
        } else {
            alert("you're not authorized to update the count buckaroo.");
        }
       
    });  


})



  