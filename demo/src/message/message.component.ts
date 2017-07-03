import { MessageService, Message } from './message.service';
export class MessageController {
    messages: Message[];
    Search;
    constructor($routeParams, messageService: MessageService) {
        this.messages = messageService.getMessages();
        this.Search = function(){
            alert("cái này hiện giờ chưa muốn làm, để làm sau cùng");
        }
    }
}
export const MessageComponent = {
    template: `
    <h1>MessagesComponent</h1>
    <p>Search</p>
    <input type="text" placeholder="search">
    <button ng-click="vm.Search()">Search</button>
    <ul>
        <li ng-repeat = "mes in vm.messages">
            <a href="/message/{{mes.id}}">{{mes.id}}</a>
        </li>
    </ul>
    <a href="/">Back</a>
  `,
    controller: MessageController,
    controllerAs: 'vm'
};