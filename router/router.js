const router = require('express').Router();
const apartmentsController = require('../controllers/apartments.controller');

router.get('/apartments', apartmentsController.list);
router.get('/apartments/:id', apartmentsController.details);
router.post('/apartments', apartmentsController.create);

module.exports = router;
