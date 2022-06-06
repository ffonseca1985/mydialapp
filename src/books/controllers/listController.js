bookController.$inject = ["$scope","bookService", "$state"]

function bookController($scope, bookService) {

    let self = this;
    self.redirectDetails = redirectDetails;

    let books =  bookService.get();
    let contacts = books.AddressBook.Contact;

    self.contacts = contacts;

    function redirectDetails(id) {
        $state.go("book.detail", {id} )
    }
}

export default bookController;