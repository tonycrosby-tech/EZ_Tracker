const router = require('express').Router();
const userController = require('../../controllers/user');

router.route('/').post(userController.create);

router
  .route('/:id')
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove)
  .get(userController.findAllSubs);

module.exports = router;
