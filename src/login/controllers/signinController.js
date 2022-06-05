

signinController.$inject = ['$state']

function signinController($state){

    var self = this;
    
    self.signin = function() {
        $state.go('book.list')
    }
}

export default signinController;