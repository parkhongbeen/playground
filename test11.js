var star = '';

for(var i=0; i<=4; i++){
  for(var j=0; j<i+1; j++){
    star +='*';
  }
  star +="\n";
}

console.log(star)