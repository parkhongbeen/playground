var star ='';

for(var i=1; i<=5; i++){
  for(var j=1; j<=i-1; j++){
    star +=' ';
  }
  for(var k=1; k<=11-(2 * i); k++){
    star +='*';
  }
star +='\n';
}
console.log(star)