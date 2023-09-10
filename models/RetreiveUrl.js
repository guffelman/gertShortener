const { Appwrite } = require('appwrite');
require('dotenv').config({ path: '../config/.env' });

const appwrite = new Appwrite();
appwrite.setEndpoint(process.env.APPWRITE_ENDPOINT).setProject(process.env.APPWRITE_PROJECT_ID).setKey(process.env.APPWRITE_API_KEY);

function getLinks(callBack) {
    const collectionId = process.env.APPWRITE_COLLECTION_ID;
    const limit = 100; // set the limit to the number of documents you want to retrieve
    const offset = 0; // set the offset to the starting index of the documents you want to retrieve

    appwrite.database.listDocuments(collectionId, limit, offset).then(response => {
        const result = response.documents;
        return callBack(result);
    }).catch(err => {
        console.error(err.message + ' DB connection not connected/failed!');
        process.exit(1);
    });
}

module.exports = { getLinks };