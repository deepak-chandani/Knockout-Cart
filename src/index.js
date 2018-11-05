import products from "./products_list.json";
import Product from "./Product";
import createProductList from "./ProductList.js";
import LineItem from "./LineItem";

var VM = (function() {
  var productList = createProductList(products);

  var lineItems = ko.observableArray([
    new LineItem(productList[0]),
    new LineItem(productList[1])
  ]);

  var onProductSelect = function(lineItem, event) {
    console.log(event.target.value);
    var productId = parseInt(event.target.value);
    var product = findProductById(productId);
    console.log(product);
    if (product) {
      lineItem.product(product);
    }
  };

  var addLineItem = () => {
    lineItems.push(new LineItem(productList[0]));
  };

  var findProductById = function(id) {
    var filteredProducts = productList.filter(p => p.id() === id);
    return filteredProducts.length ? filteredProducts[0] : null;
  };

  var grandTotal = ko.computed(function() {
    return lineItems().reduce(function(sum, item) {
      return sum + item.quantity() * item.product().price();
    }, 0);
  }, this);

  return {
    greeting: "Hello World !",
    productList: productList,
    lineItems: lineItems,
    onProductSelect: onProductSelect,
    grandTotal: grandTotal,
    addLineItem: addLineItem
  };
})();

ko.applyBindings(VM, document.getElementById("root"));
