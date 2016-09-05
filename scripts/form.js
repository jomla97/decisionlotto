var name = 2;

//when the user has clicked on the add button
$("#add").click(function(){
  name++;

  $("#textbar-wrapper").append('<input onmouseleave="hideDelete(this)" onmouseover="showDelete(this)" class="input" type="text" name="' + name + '" style="display: none;" placeholder="Alternative.." required><div style="display: none;" class="remove-wrapper"><div onclick="deleteThis(this)" onmouseleave="hideDelete(this)" onmouseover="showDelete(this)" class="remove">X</div></div>');
  $("#textbar-wrapper").children("input").last().slideToggle();
  $("#textbar-wrapper").children(".remove-wrapper").last().slideToggle();
});

//show the delete button
function showDelete(element){
    $(element).next(".remove-wrapper").children(".remove").clearQueue().animate({
      marginLeft: "220px"
    }, 200);
}

//hide the delete button
function hideDelete(element){
    $(element).next(".remove-wrapper").children(".remove").delay(1500).animate({
      marginLeft: "180px"
    }, 200);
}

//when the user has clicked a delete button
function deleteThis(button){
  $(button).parents().prev(".input").slideToggle(400, function(){
    $(this).remove();
  });
  $(button).parents(".remove-wrapper").slideToggle(400, function(){
    $(this).remove();
  });
}

function shuffle(o){ // used for randomizing the order of an array
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

$("#form").submit(function(e){ //when the user has clicked the submit button
  e.preventDefault(); //prevent the page to submit the form data in the default fassion
  //alert("submitted!!"); //just to test

  var arr = $(this).serializeArray(); //store the serialized form data in an object/array
  console.log(arr); //log the array in the console

  arr = shuffle(arr); // shuffle the order of the array

  $("main").append('<div id="lottery" style="display: none;"><h1>Pick a lottery ticket!</h1></div>'); // create a div with the id "lottery"

  $("#form").slideToggle(400, function(){ // hide the form
    $(this).remove(); // remove the form from the DOM
    $("#lottery").slideToggle(400, function(){ //slidetoggle the lottery div

      $.each(arr, function(key, value){ //loop through the object containing the form data
        console.log(value.name + " : " + value.value); // log the form data in the console
        $("#lottery").append('<div class="ticket" onclick="pickTicket(this)" style="display: none;"><p style="display: none;">' + value.value + '</p></div>'); // create a ticket in the lottery div
        $("#lottery").children(".ticket").last().slideToggle(); // slidetoggle the ticket
      });

    });
  });
});

  function pickTicket(ticket){
    $(ticket).siblings().slideToggle(400, function(){
      $(ticket).siblings().remove();
      $(ticket).children("p").css("display", "block");
      //$(ticket).children("p").slideToggle();
      $(ticket).css("padding", "30px 40px");
      $(ticket).css("cursor", "default");
    });
  }
