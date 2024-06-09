const router = require('express').Router();
const apartmentsController = require('../controllers/apartments.controller');

router.get('/apartments', apartmentsController.list);
router.get('/apartments/:id', apartmentsController.details);
router.post('/apartments', apartmentsController.create);
router.put('/apartments/:id', apartmentsController.update);
router.delete('/apartments/:id', apartmentsController.delete);

module.exports = router;
