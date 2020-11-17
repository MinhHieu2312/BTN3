const express = require('express');
const router = express.Router();
const detailController = require('../controllers/detailController');

/* GET list of detail */
router.get('/', detailController.index);

module.exports = router;