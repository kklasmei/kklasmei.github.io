var star = "*";

for (var myVar = 1; myVar <= 10; myVar++) {
  star = star + "*";
  console.log(star);
  var emoji = ":)";

  for (var myVar2 = 10; myVar2 < 20; myVar2++) {
    emoji = emoji + ":)";
    if (myVar2 == 10) {
      emoji = ":)";
    }
    console.log(emoji);
  }
}