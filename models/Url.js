const { Appwrite } = require('appwrite');
require('dotenv').config({ path: '../config/.env' });

const appwrite = new Appwrite();
appwrite.setEndpoint(process.env.APPWRITE_ENDPOINT).setProject(process.env.APPWRITE_PROJECT_ID).setKey(process.env.APPWRITE_API_KEY);

const UrlSchema = new appwrite.Collection('UrlSchema');
UrlSchema
    .setKey('urlId')
    .addString('origUrl')
    .addString('shortUrl')
    .addNumber('clicks')
    .addDate('date')
    .setRules({
        'origUrl': {
            'required': true,
        },
        'shortUrl': {
            'required': true,
        },
        'clicks': {
            'required': true,
            'default': 0,
        },
        'date': {
            'default': Date.now,
        },
    });

module.exports = appwrite; // export the Appwrite SDK instance