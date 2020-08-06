const express = require('express');
const path = require('path');
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const sofwareAPIRouter = require('./routes/software');

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', sofwareAPIRouter);

module.exports = app;
