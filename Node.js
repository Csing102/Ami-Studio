const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: './uploads/' });

app.post('/train', upload.array('files'), (req, res) => {
    const files = req.files;
    // Process the files and train the NLP model
    //...
    res.json({ message: 'Training complete' });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
