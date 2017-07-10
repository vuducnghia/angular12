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
    templateUrl:'./src/message/message.html',
    controller: MessageController,
    controllerAs: 'vm'
};