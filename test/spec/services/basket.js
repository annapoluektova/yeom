'use strict';

describe('Service: basket', function () {

  // load the service's module
  beforeEach(module('yeomanApp'));

  // instantiate service
  var basket;
  beforeEach(inject(function(_basket_) {
    basket = _basket_;
  }));

  //iit('should initially be empty', function () {
    //expect(basket.count()).toBe(0);
  it('should do something', function () {
    expect(!!basket).toBe(true);
  });

});