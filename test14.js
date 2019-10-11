var star = '';

for(var i=1; i<=5; i++){
  for(var j=i; j<=4; j++){
    star += ' ';
  }
  for(var k=1; k<=i; k++){
    star += '*';
  }
star += "\n";
}

console.log(star);
