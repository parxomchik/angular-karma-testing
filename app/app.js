angular.module('calculatorApp', [])
    .controller('CalculatorController', CalculatorController)
    .directive('myDirective', CalculatorDirective);

function CalculatorController($scope) {

    var vm = this;
    $scope.z = 0;
    $scope.sum = function () {
        $scope.z = $scope.x + $scope.y;
    };
}

function CalculatorDirective() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/myDirective.html',
        bindToController: {
            'cardTitle': '@',
            'tooltip': '@',
            'width': '@',
            'height': '@',
            'exploreLink': '=',
            'data': '='
        },
        controller: CalculatorController,
        controllerAs: 'vm',
        scope:{}
    }
}