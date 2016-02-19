import {Component} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {InputChatBar} from './input-chat-bar';

@Component({
  selector: 'lucca-chat-app',
	viewProviders: [Title],
	providers: [],
	templateUrl: 'app/lucca-chat.html',
	directives: [InputChatBar],
	pipes: []
})
export class LuccaChatApp {
	messageList : Array<string> = []
	constructor(title: Title) {
		title.setTitle('Lucca chat');
 	}
  
	DisplayNewMessage(newMessage : string) {
        if (newMessage == '') return;
        
		this.messageList.push(newMessage);
	}
}
