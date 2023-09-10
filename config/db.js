const { Appwrite } = require('appwrite');
require('dotenv').config({ path: './.env' });

const connectDB = async () => {
    const appwrite = new Appwrite();
    appwrite.setEndpoint(process.env.APPWRITE_ENDPOINT).setProject(process.env.APPWRITE_PROJECT_ID);
    try {
        await appwrite.setKey(process.env.APPWRITE_API_KEY).setLocale('en-US').setSelfSigned();
        console.log('Database Connected');
    } catch (err) {
        console.error(err.message + ' DB connection not connected/failed!');
        process.exit(1);
    }
};

module.exports = connectDB;