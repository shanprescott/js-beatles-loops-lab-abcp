function theBeatlesPlay(musicians, instruments){
  var array = [];
  
  for (var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return array;
}

function johnLennonFacts(array){
  var count = 0;
  var newArray = [];
  
  while(count < array.length){
    newArray.push(`${array[count]}!!!`);
    
    count++;
  }
  
  return newArray;
}

function iLoveTheBeatles(n){
  var array = [];
  
  do {
    array.push('I love the Beatles!');
    n++;
  } while (n < 15);
}
  {
  return array;
  }
  