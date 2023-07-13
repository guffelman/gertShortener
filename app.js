const Express = require('express');
const app = Express();
const connectDB = require('./config/db');
const path = require('path')
require('dotenv').config({ path: './config/.env' });

connectDB();
// Body Parser
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());


//weblinks for api and redirecting

app.use(Express.static(path.join(__dirname, "/www")))
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/urls'));







// Server Setupy
const PORT = 8087;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});