var express = require('express');
var router = express.Router();
var Url = require('../models/url');
var base58 = require('../base58.js');
var config = require('../config');

router.post('/shorten', function(req, res){
    console.log("Function called through api");
    var longUrl = req.body.url;
    var shortUrl = '';
    // check if url already exists in database
    Url.findOne({long_url: longUrl}, function (err, doc){
      if (doc){
        // base58 encode the unique _id of that document and construct the short URL
        shortUrl = config.webhost + base58.encode(doc._id);
        // since the document exists, we return it without creating a new entry
        res.send({'shortUrl': shortUrl});
      } else {
        // The long URL was not found in the long_url field in our urls
        // collection, so we need to create a new entry:
        var newUrl = Url({
          long_url: longUrl
        });
        // save the new link
        newUrl.save(function(err) {
          if (err){
            console.log(err);
          }
          // construct the short URL
          shortUrl = config.webhost + base58.encode(newUrl._id);
          res.send({'shortUrl': shortUrl});
        });
      }
    });
  });

  module.exports = router;