//  Basic Function all of the examples in the book feature this method
Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};
