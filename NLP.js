class NLP {
  constructor() {
    this.vocabulary = {};
    this.tokenizer = new Tokenizer();
  }

  tokenize(text) {
    return this.tokenizer.tokenize(text);
  }

  addWord(word) {
    this.vocabulary[word] = true;
  }

  removeWord(word) {
    delete this.vocabulary[word];
  }

  containsWord(word) {
    return this.vocabulary[word] === true;
  }
}

class Tokenizer {
  tokenize(text) {
    return text.split(' ');
  }
}

// Usage
const nlp = new NLP();
nlp.addWord('hello');
nlp.addWord('world');
console.log(nlp.containsWord('hello')); // true
console.log(nlp.containsWord('world')); // true
console.log(nlp.containsWord('foo')); // false
const tokens = nlp.tokenize('hello world');
console.log(tokens); // ['hello', 'world']
