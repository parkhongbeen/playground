var star = '';

for(var i=0; i<=4; i++){
  for(var j=i; j<=4; j++){
    star +=' ';
  }
  for(var k=0; k<=i; k++){
    star +='*';
  }
  star +='\n';
}


console.log(star);