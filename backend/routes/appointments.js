const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.post('/', appointmentController.book);
router.get('/', appointmentController.list);
router.patch('/:id', appointmentController.updateStatus);

module.exports = router;
