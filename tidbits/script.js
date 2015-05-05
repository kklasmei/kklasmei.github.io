/*var clicked = false;


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

*/

var myArray = ['<img id="tavi" src="imgs/tavi.jpg" alt="tavi" height="145" width="145">', '<img id="worldsfair" src="imgs/worldsfair.jpg" alt="worldsfair" height="145" width="145">', '<img id="library" src="imgs/library.jpg" alt="library" height="145" width="145">', '<img id="kinder" src="imgs/kinder.jpg" alt="kinder" height="145" width="145">', '<img id="cashews" src="imgs/cashews.jpg" alt="cashews" height="145" width="145" onmouseover=this."src="imgs/cashewt.jpg">'];

for (var i=0; i < 3; i++) {
    
    var imgtoappend = Math.floor(Math.random() * myArray.length);
    console.log("imgtoappend = " + imgtoappend);
    console.log("APPEND THIS IMAGE: " + myArray[imgtoappend]);
    $(".imgs").append(myArray[imgtoappend]);
        console.log(myArray);
    myArray.splice(imgtoappend, 1);
        console.log(myArray);
}

$( "#tavitext" ) .remove ();

$( "#cashewt.jpg" ) .remove ();

$( "#cashew.jpg" ).mouseenter(function() {
  $( "#cashewt.jpg" ).show () });

  