
bookMasterController.$inject = ["$state"];

function bookMasterController($state) {

    const self = this;

    const redirects = {
        books: function() { $state.go("book.list")} ,
        logout: function() { $state.go("login.signin")}
    }

    self.redirects = redirects;
}

export default bookMasterController;