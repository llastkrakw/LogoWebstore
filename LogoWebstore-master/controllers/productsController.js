/* Product */	

exports.product_list = function(req, res) {
    res.render('../views/layout_page.ejs',{title:'LEGO WebStore - Liste Produits', page:'partials/products_list.ejs'});
}

exports.products_infos = function(req, res) {
    res.render('../views/layout_page.ejs',{title:'LEGO WebStore - Infos Produits', page:'partials/products_infos.ejs', idproduit:':idproduit'});
}
