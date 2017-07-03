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
    template : `
        <p>Login</p>
        <input type = "text" ng-model="vm.user" placeholder ="username">
        <input type = "password" ng-model="vm.pass" placeholder ="password">
        <button ng-click="vm.login()">Login</button>
    `,
    controller : LoginController,
    controllerAs: 'vm'
}