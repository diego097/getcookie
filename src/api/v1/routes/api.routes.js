const { Router } = require('express');
const { route } = require('express/lib/application');
const router = Router();

const mailController = require('../controllers/mailController');
router.post("/req", mailController.send);

module.exports = router;