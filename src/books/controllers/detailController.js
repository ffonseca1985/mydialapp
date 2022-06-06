
detailController.$inject = ['$scope', '$stateParams', '$state', 'bookService', "$window"];

function detailController($scope, $stateParams, $state, bookService, $window) {

    self = this;

    const id = $stateParams["id"];

    if (!id) {
        alert("id not informed");
        $state.go("book.list");
        return;
    }

    const contact = bookService.getById(id);
    self.contact = contact;
    self.back = function() { $window.history.back() };
}

export default detailController;