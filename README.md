# Project Title & Description

URL Shortening Sample Applications using node js

## Prerequisites
You need to create mongo database with two collections.
- `counters` to hold the sequence value
- `urls` to hold the url and shortened value

Atleast create `counters` collections to initialize and set counter = 1 <br/>Run following commands using mongo shell

```bash
use url_shortener
db.counters.insert({ _id: 'url_count', seq: 1 })
show dbs
```

## Quick Start and Installation

```bash
$ git clone https://github.com/mohasinsutar/url-shortener myapp
$ cd myapp
$ npm install
$ node app
```

## Acknowledgments

* This example is based on the tutorial given in https://coligo.io/create-url-shortener-with-node-express-mongo/