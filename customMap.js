function map(arr, fun) {
  return arr.map( word => fun(word));
};

words = ["memes", "spongebob"]

let newStuff = map(words, function(word){
  let newWord = "";
  for(c in word){
    newWord += (c % 2 === 1 ? word[c].toUpperCase() : word[c])
  }
  return newWord
});

console.log(newStuff)