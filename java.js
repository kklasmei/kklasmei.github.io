var star = "";

for (var myVar = 1; myVar <= 100; myVar++) {
  if (myVar <= 50) {
    star = star + "*";
  } else {
    star = star.slice(0, - 1)
  }
  console.log(star);
}

