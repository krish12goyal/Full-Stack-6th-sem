const express = require('express');
const mongoose = require('mongoose');

const shortid = require('shortid');

const app = express();
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected"))
  .catch(err => console.log('Error'));

const urlSchema = new mongoose.Schema({
  actualUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true
  }
})

const Url = mongoose.model('Url', urlSchema);


app.post('/shortenId', async (req, res) => {
  const {url} = req.body;

  if(!url){
    return res.send('url required');
  }

  const shortId = shortid.generate();

  await Url.create({
    actualUrl: url,
    shortUrl: shortId
  });

  res.send('Short link generated!')
})

app.get('/:shortId', async (req,res) => {
  const data = await Url.findOne(
    {
      shortUrl: req.params.shortId
    }
  );

  if(!data){
    return res.send('not found')
  }

  res.redirect(data.actualUrl);
});

app.listen(3000, () =>{
  console.log('Server is running');
})

