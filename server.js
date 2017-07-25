var express = require("express"),
    path = require("path"),
    mongodb = require("mongodb").MongoClient,
    imagesearch = require("./api/imagesearch");

imagesearch.bing = require('node-bing-api')({ accKey: process.env.bingKey });
mongodb.connect(process.env.mongoURI, function(err, db) {

    if(err) {

        console.log();
        process.exit(1);
    }

    imagesearch.db = db;
});

var app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/imagesearch", function (request, response) {

    imagesearch.history(response);
});

app.get("/:query", function (request, response) {

    imagesearch.search(request.params.query, request.query.offset, response);
});

app.listen(process.env.PORT || 1337);