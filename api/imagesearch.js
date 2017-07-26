module.exports.db = null;
module.exports.bing = null;

module.exports.search = function (query, pageNumber, response) {

    if(!pageNumber)
        pageNumber = 0;

    var options = {count: 10, offset: 10 * pageNumber };
    module.exports.bing.images(query, options, function (err, res, results) {

        if(err)
            return response.send(err);

        response.send(parseResults(results.value));
    });

    saveQuery(query);
};

module.exports.history = function (response) {

    var collection = module.exports.db.collection("search-history");
    collection.find({}, { query: 1, _id:0 })
        .sort({_id:-1}).limit(10).toArray(function (err, docs) {

            response.send(docs);
    });
};

function parseResults (results) {

    return results.map(function (value) {

        return {

            name: value.name,
            thumbnail: value.thumbnailUrl,
            hostPageUrl: value.hostPageUrl,
            hostPageDisplayUrl: value.hostPageDisplayUrl,
            contentUrl: value.contentUrl
        };
    });
}

function saveQuery (query) {

    if(query === "favicon.ico")
        return;

    var collection = module.exports.db.collection("search-history");
    collection.insertOne({ query: query }, function (err) {

        if(err)
            console.log(err);
    });
}