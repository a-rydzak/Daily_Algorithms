let dictionary = require('./dictionary.js');

search= (word, dictionary) =>{
	for(w in dictionary) {
    if(dictionary[w] == word) {
      return true;
    }
  }
  return false;
}

console.log(search('jelly', dictionary))
