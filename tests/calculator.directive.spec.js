describe('calculator', function () {

  var $compile,
      $rootScope,
      $httpBackend,
      scope;

  beforeEach(module('calculatorApp'));

  beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend =_$httpBackend_;
    scope = _$rootScope_.$new();
  }));
  beforeEach(function() {
    $httpBackend.whenGET(/.*/).respond('');
    $httpBackend.whenPOST(/.*/).respond('');
    //$httpBackend.whenGET('./app/widgets/slimBarCard/slim-bar-card.partial.html').passThrough();
    //$httpBackend.whenGET(/.*/).passThrough();
    //$httpBackend.whenPOST(/.*/).passThrough();
    //$httpBackend.flush();
});
  it('should true', function() {

    var element = angular.element('<my-directive></my-directive>');
    $compile(element)(scope);
    scope.$digest();
    console.log(element);
    expect(true).toBe(true);

  });
});

