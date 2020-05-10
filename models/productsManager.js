const manager = require('./manager');

exports.all_categories = function() {
    const db = manager.connect();
    // TODO prepare SQL
    const query = "SELECT name FROM categories";
    // TODO all results
    const results = db.prepare(query).all();
    // TODO close db
    db.close();
    // TODO return results
    return results;
};


exports.all_products = function() {
    const db = manager.connect();

    //requette
    const query = "SELECT products.id, products.name, products.img0, products.price, categories.name" +
        "FROM products JOIN categories ON products.id_category = categories.id;";
    //result
    const results = db.prepare(query).all();
    //close
    db.close();
    //return
    return results;
}

exports.get_product = function(idproduct) {
    const db = manager.connect();

    const query = "SELECT products.name, products.img0, products.img1, products.img2, products.img3, products.description, products.spec" +
        "products.price, categories.name" +
        "FROM products JOIN categories ON products.id_category = categories.id" +
        "WHERE products.id = ?";

    const results = db.prepare(query).all(idproduct);

    db.close();

    return results;
}