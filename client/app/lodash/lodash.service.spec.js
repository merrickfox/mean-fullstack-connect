'use strict';

describe('Service: lodash', function () {

  // load the service's module
  beforeEach(module('yotiApp'));

  // instantiate service
  var lodash;
  beforeEach(inject(function (___) {
    lodash = ___;
  }));

  it('should do something', function () {
    expect(!!lodash).toBe(true);
  });

});
