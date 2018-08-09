$(document).ready(function(){
  $("form#person").submit(function(event){
    event.preventDefault();
    var personChoice = $("input:radio[name=choice]:checked").val();
    if (personChoice === "chris") {
      $("form#chris").show();
    }
    else if (personChoice === "sarah") {
      $("form#sarah").show();
    }
  });

  $("form#chris").submit(function(event){
    event.preventDefault();
    var chrisChoice = $("input:radio[name=answer1]:checked").val();
    if (chrisChoice === "hike") {
      $("div#hike").show();
    }
    else if (chrisChoice === "nightclub"){
      $("div#nightclub").show();
    }
    else if (chrisChoice === "movie"){
      $("div#movies").show();
    }

  });
  $("form#sarah").submit(function(event){
    event.preventDefault();
    var sarahChoice = $("input:radio[name=answer2]:checked").val();
    if (sarahChoice === "camping") {
      $("div#camping").show();
    }
    else if (sarahChoice === "bars"){
      $("div#bars").show();
    }
    else if (sarahChoice === "horse"){
      $("div#horse").show();
    }
  });
});
