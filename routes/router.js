const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const productsController = require('../controllers/productsController');
const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', indexController.index);

/* GET products */
router.get('/produits', productsController.products_list);
router.get('/produits/:idProduit', productsController.product_info)

/* GET formulaire d'inscription */
router.get('/inscription', userController.sign_up);

module.exports = router;