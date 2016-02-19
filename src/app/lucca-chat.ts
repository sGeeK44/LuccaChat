import {Component} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {InputChatBar} from './input-chat-bar';
import {LayoutChatMessage} from './layout-chat-message';

@Component({
    selector: 'lucca-chat-app',
	viewProviders: [Title],
	providers: [LayoutChatMessage],
	templateUrl: 'app/lucca-chat.html',
	directives: [InputChatBar, LayoutChatMessage],
	pipes: []
})
export class LuccaChatApp {
    layoutMessage: LayoutChatMessage;
    nickName: string;
	constructor(title: Title, layoutMessage: LayoutChatMessage) {
		title.setTitle('Lucca chat');
        this.layoutMessage = layoutMessage;
        this.nickName = prompt('Quel est votre pseudo ?');
 	}
     
	NewMessageComming(newMessage : string) {
		this.layoutMessage.DisplayNewMessage(newMessage);
	}
}
