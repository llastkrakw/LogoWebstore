/* Product */

exports.product_list = function(req, res) {
    res.send("liste de produits");
}

exports.products_infos = function(req, res) {
    res.send("Fiche produit : " + req.params.idProduit)
}