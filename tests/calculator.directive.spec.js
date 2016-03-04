describe('calculator', function () {

  var $compile,
      $rootScope,
      $httpBackend,
      scope,
      element,
      vm,
      compiledElement;

  beforeEach(module('calculatorApp'));
  beforeEach(module('app/templates/myDirective.html')); // The external template file referenced by templateUrl


  beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_,_$controller_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend =_$httpBackend_;
    scope = _$rootScope_.$new();
    scope.cardTitle = 'green';
    var data = {
      cardTitle:'Joe',
      data:'Smith',
      exploreLink: '123'
    };

    vm = _$controller_('CalculatorController', {$scope: scope}, data);


  }));
  beforeEach(function() {
    element = angular.element('<my-directive></my-directive>');
    compiledElement =  $compile(element)(scope);
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
  it('should compiled directive with template url', function() {
    console.log(vm);
    expect(vm.data).toBe('Smith');
  });
  it('should have isolated scope', function() {
    scope.vm = vm;
    console.log('compiledElement = '+angular.toJson(compiledElement));
    console.log('compiledElement isolateScope = '+angular.toJson(compiledElement.isolateScope()));
    console.log('element isolateScope = '+angular.toJson(element.isolateScope().exploreLink));
    console.log(element.isolateScope().data);
    scope.$digest();
    expect(element.isolateScope()).toBeDefined();
});
});

