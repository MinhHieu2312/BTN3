const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

/* GET list of cat. */
router.get('/', categoryController.index);

module.exports = router;