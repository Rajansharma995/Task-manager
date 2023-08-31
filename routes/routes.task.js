const express = require('express');
const router = express.Router();
const {getAllItems,createItems,getItems,updateItems,deleteItems} = require('../controllers/controllers.task');

router.route('/').get(getAllItems).post(createItems);
router.route('/:id').get(getItems).patch(updateItems).delete(deleteItems);
module.exports = router;