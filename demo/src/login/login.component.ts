class LoginController{
    login: () => void; // hoac login;
    vm;
    
    constructor(){
        this.vm = this;
        this.login = function(){
            alert(this.vm.user);
        }
    }
    
}
export const LoginComponent={
    templateUrl :'./src/login/login.html',
    controller : LoginController,
    controllerAs: 'vm'
}