import {Component} from 'angular2/core';
import {Title} from 'angular2/platform/browser';

@Component({
  selector: 'lucca-chat-app',
	viewProviders: [Title],
	providers: [],
	templateUrl: 'app/lucca-chat.html',
	directives: [],
	pipes: []
})
export class LuccaChatApp {
	messageList : Array<string> = []
	constructor(title: Title) {
		title.setTitle('Lucca chat');
 	}
  
	DisplayNewMessage(newMessage : string) {
		this.messageList.push(newMessage);
	}
}
