
function Header() {

    controller.$inject = ["$scope"];

    function controller($scope) {
        $scope.title = "My Diall App"
    }

    var directive = {
        restrict: "AEC",
        controller: controller,
        scope: {
            internHeader: "=internHeader",
            template: "src/master/_header.html"
        }
    }

    return directive;
}