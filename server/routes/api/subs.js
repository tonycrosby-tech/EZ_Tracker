const router = require('express').Router();
const SubsController = require('../../controllers/subs');

router.route('/').get(SubsController.findAll);

router
  .route('/:id')
  .put(SubsController.update)
  .delete(SubsController.remove)
  .post(SubsController.create);

module.exports = router;
