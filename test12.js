var star = '';

for(var i=0; i<=4; i++){
  for(var j=0; j<i; j++){
    star += ' ';
  }
  for(var k=i; k<=4; k++){
    star +='*';
  }
star +='\n';
}

console.log(star)