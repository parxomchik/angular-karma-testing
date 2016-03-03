describe('calculator', function () {

  var $compile,
      $rootScope,
      $httpBackend,
      scope,
      element;

  beforeEach(module('calculatorApp'));
  beforeEach(module('app/templates/myDirective.html')); // The external template file referenced by templateUrl


  beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend =_$httpBackend_;
    scope = _$rootScope_.$new();
  }));
  beforeEach(function() {
    element = angular.element('<my-directive></my-directive>');
    $compile(element)(scope);
    scope.$digest();
    console.log(element);
  });
  beforeEach(function() {
    $httpBackend.whenGET(/.*/).respond('');
    $httpBackend.whenPOST(/.*/).respond('');
  });
  it('should compiled directive with template url', function() {
    expect(element.find('h1')[0]).toBeDefined();
  });
});

