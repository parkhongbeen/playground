var star = '';

for(var i = 1; i <= 5; i++){
  for(var j = 1; j <= 5-i; j++){
    star +=' ';
  }
  for(var k = 1; k <= (i*2)-i; K++){
    star +='*';
  }
  star +='\n';
}

console.log(star)