require('dotenv').config({ path: '../config/.env' });
const { MongoClient } = require("mongodb");
var url = process.env.MONGO_URI
var collection = process.env

function getLinks(callBack){
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db(process.env.DBO);
        dbo.collection(process.env.COLLECTION).find({ _id: {$exists: true }}).toArray(function(err, result){
            if(err) throw err;
            db.close();
          //  console.log(result) // shows the links. cool!
            // you can return result using callback parameter
            return callBack(result);
        })
    })
    }
module.exports = { getLinks }