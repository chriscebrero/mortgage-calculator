// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mortgageRoutes = require('./routes/mortgageRoutes'); // Adjust as necessary for your structure
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;  // Use environment port or default

app.use(bodyParser.json());
app.use(cors());
app.use('/api', mortgageRoutes);

// Export the app for testing
module.exports = app;

// Conditionally start the server only if the file is run directly
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}
