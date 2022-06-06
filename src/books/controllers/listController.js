bookController.$inject = ["$scope", "bookService", "$state"]

function bookController($scope, bookService, $state) {

    let self = this;

    self.redirectDetails = redirectDetails;

    self.visualizations = visualizations
    self.visualizationState = self.visualizations[0].id;

    let books = bookService.get();
    let contacts = books.AddressBook.Contact;

    self.contacts = contacts;

    function redirectDetails(id) {
        $state.go("book.detail", { id: id })
    }
}

export default bookController;

const visualizations = [
    {
        id: 1,
        name: "card"
    },
    {
        id: 2,
        name: "table"
    }];