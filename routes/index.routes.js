const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/userControllers');

const jwtHelper = require('../config/jwtHelper');


router.post('/register',ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/homePage',jwtHelper.verifyJwtToken, ctrlUser.homePage);

module.exports = router; 