
var myArray = ['<img id="tavi" src="imgs/tavi.jpg" data-alt-src="himgs/tavi.jpg" class="tavi" height="200" width="200">', '<img id="worldsfair" src="imgs/worldsfair.jpg" data-alt-src="himgs/worldsfair.jpg" class="worldsfair" height="200" width="200">', '<img id="library" src="imgs/library.jpg" data-alt-src="himgs/library.jpg" class="library" height="200" width="200">', '<img id="kinder" src="imgs/kinder.jpg" data-alt-src="himgs/kinder.jpg" class="kinder" height="200" width="200">', '<img id="cashews" src="imgs/cashews.jpg" data-alt-src="himgs/cashews.jpg" class="cashews" height="200" width="200">', '<img id="rome" src="imgs/rome.jpg" data-alt-src="himgs/rome.jpg" class="rome" height="200" width="200">', '<img id="mint" src="imgs/mint.jpg" data-alt-src="himgs/mint.jpg" class="mint" height="200" width="200">'];

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

  
var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}

$(function () {
    $('img.cashews').hover(sourceSwap, sourceSwap);
});

$(function () {
    $('img.tavi').hover(sourceSwap, sourceSwap);
});

$(function () {
    $('img.kinder').hover(sourceSwap, sourceSwap);
});

$(function () {
    $('img.library').hover(sourceSwap, sourceSwap);
});

$(function () {
    $('img.worldsfair').hover(sourceSwap, sourceSwap);
});

$(function () {
    $('img.rome').hover(sourceSwap, sourceSwap);
});

$(function () {
    $('img.mint').hover(sourceSwap, sourceSwap);
});