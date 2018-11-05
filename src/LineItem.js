var LineItem = function(product) {
  this.product = ko.observable(product);
  this.quantity = ko.observable(1);
  this.getLineTotal = ko.computed(function() {
    return this.product().price() * this.quantity();
  }, this);
};

export default LineItem;
