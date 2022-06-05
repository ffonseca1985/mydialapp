

signinController.$inject = ['$state']

function signinController($state){

    var self = this;
    
    self.signin = function(){
        alert('aqui')
        $state.go('teste')
    }
}

export default signinController;