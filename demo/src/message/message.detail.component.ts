import { MessageService, Message } from './message.service';

export class MessageDetailController {
    message: Message;
    id: number;
    constructor($routeParams, messageService: MessageService) {
        this.id = $routeParams.id;
        this.message = messageService.getIdMessage(this.id);
        console.log(this.id);
        console.log(this.message.id);
    }
}

export const MessageDetailComponent = {
    templateUrl:'./src/message/detail.html' ,
    controller: MessageDetailController,
    controllerAs: 'vm'
}