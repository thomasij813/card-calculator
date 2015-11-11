'use strict';

describe('Service: CardsData', function () {

  // load the service's module
  beforeEach(module('cardCalculatorApp'));

  // instantiate service
  var CardsData;
  beforeEach(inject(function (_CardsData_) {
    CardsData = _CardsData_;
  }));

  it('should do something', function () {
    expect(!!CardsData).toBe(true);
  });

});
