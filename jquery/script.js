$( "#pirate" ) .remove ();

$( "body" ).addClass( "gradient" );

var clicked = false;


$ ( "#toggle" ).click(function() {
if (clicked == false) {
    $( "#status" ).html( "GO" );
    $( "#status" ).css({"background-color" : "lime"});
    $( "#toggle").html("Stop");
    $( "#status" ).mousemove(function() { 
        $( "#cat" ).show () });
    clicked = true
} else {
    $( "#status" ).html( "STOP" );
    $( "#status" ).css({"background-color" : "red"});
    $( "#toggle").html("Start");
    $( "#status" ).html(function() { 
        $( "#cat").remove () });
    clicked  = false
}

});




/*
Instructions:

---- PART 1 ----
Start by removing that pirate flag (#pirate).

Next, add a gradient to the whole page by applying the "gradient" class to the body.

---- PART 2 ----
Now, to make things a little more complicated, let's activate the "Start" button:

When the user clicks the "Start" button, change the text of "status" to read "GO". 
Let's also change the background color of "status" to green.
Change the text of the "Start" button to read "Stop".

When the user clicks the button again, revert all of the above. 
So "status" should read "STOP", it's background color should be red, and the button itself should read "Start" again.

Hint: you will want to store the current state of the button in a variable.

---- PART 3 ----
Now that we have stored the status of our button, let's show the user an image if the mouse over our green "GO" box.

If the user has activated the button, toggle the visibility of id "cat" to reveal our animated leopard.
-----------------

load java scripts at end of html page before closing body tag
download jquery file from jquery.com or htmlfile boilerplate (first script in html)
edit in main.js
build button in html, class=mybutton, class stage for images
put images in html

var images = ["cat.img", "cat2.img", "cat3.img", "cat4.img"];

var currenting = false;


console.log(randoming);
$(".mybutton").click(function() {
    var randoming = images[Math.floor(Math.random()*images.length)];
    
    while (randoming = currenting){
        randoming = images[Math.floor(Math.random()*images.length)];
    }
    
    currenting = randoming;
    
$(".stage").html(<img src= 'img/ " + randoming + "'>);
});

for adding 100 divs in html

for (var = i = 0; i < 100; i ++) {
    $("body").append("div class = 'box'>Hello</div>");
}

$(".box").each(function(){
    var randposition = Math.floor(Math.random() * 1000) + "px";
}


*/

var my Array- define

Math.floor(Math.random () * myArray.length);    whole numbers 0-myArray value

My Array [Math.floor(Math.random () * myArray.length);]   randomizes



