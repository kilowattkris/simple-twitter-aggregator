const express = require('express');
const config = require('./config');
const Twitter = require('twitter');

const app = express();

const T = new Twitter(config);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", config.cors_whitelist);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {

    if (!('search' in req.query)) {
        return res.status(400).send({code: 400, message: "Please provide the 'search' parameter.", payload: {} });
    }

    let params = {
        q: req.query.search,
        count: 10,
        result_type: 'recent',
        lang: 'en'
    };
    let ret = [];

    T.get('search/tweets', params, function(err, data, response) {
        if(!err){
            ret = data.statuses;
            return res.send({code: 200, message: "Retrieved results succesfully.", payload: ret });
        } else {
          if (err[0].code == 89) {
            return res.status(403).send({code: 403, message: err[0].message, payload: {} });
          }
          else {
            console.log(err);
            return res.status(500).send({code: 500, message: "Something bad happened.", payload: {} });
          }
        }
    });
});

app.listen(3030, () => {
    console.log("Server started on port 3030.");
});