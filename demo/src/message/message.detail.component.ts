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
    template: `
    <h1>Message id : {{vm.message.id}}</h1>
    <p>text : {{vm.message.text}}</p>
    <a href="/">Back</a>
    `,
    controller: MessageDetailController,
    controllerAs: 'vm'
}