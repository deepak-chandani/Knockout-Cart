import Product from "./Product";
function createProductList(productJSON) {
  var productList = [];
  productList = productJSON.map(p => {
    return new Product(p.id, p.title, p.description, p.price);
  });

  return productList;
}

export default createProductList;
