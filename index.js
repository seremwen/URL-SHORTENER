const express = require('express');
const sequelize = require('./config/config');
const urlRoutes = require('./routes/urlRoutes');
const setupSwagger = require('./swaggger/swagger');

const app = express();

app.use(express.json());

// Use routes
app.use('/api', urlRoutes);

// Setup Swagger
setupSwagger(app);

// Sync the database
sequelize.sync();

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
