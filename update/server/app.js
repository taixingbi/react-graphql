const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect('mongodb://profile:Ml4820806@ds113636.mlab.com:13636/test_db')
mongoose.connection.once('open', () => {
    console.log('conneted to database: test_db -> profile ');
});


// bind express with graphql
app.use('/graphql', graphqlHTTP({
    // pass in a schema property
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});