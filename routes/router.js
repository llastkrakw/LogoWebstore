const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const productsController = require('../controllers/productsController');
const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', indexController.index);

/* GET Product List */
router.get('/produits', productsController.product_list);

/* GET Product info */
router.get('/produits/:idProduit', productsController.products_infos);

/* GET Formulaire inscription */
router.get('/inscription', userController.sign_up);

module.exports = router;