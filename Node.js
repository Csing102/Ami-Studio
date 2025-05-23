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

  train(data) {
    const tokens = this.tokenize(data);
    tokens.forEach(token => {
      this.addWord(token);
    });
    return { message: 'Training complete' };
  }
}

class Tokenizer {
  tokenize(text) {
    return text.split(' ');
  }
}

const nlp = new NLP();

// Create an Express.js server to handle the /train endpoint
const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: './uploads/' });

app.post('/train', upload.array('files'), (req, res) => {
  const files = req.files;
  const fileContent = files[0].buffer.toString();
  const response = nlp.train(fileContent);
  res.json(response);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
