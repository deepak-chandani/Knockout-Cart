var Product = function(id, title, desc, price) {
  this.id = ko.observable(id);
  this.description = ko.observable(desc);
  this.title = ko.observable(title);
  this.price = ko.observable(price);
};

export default Product;
