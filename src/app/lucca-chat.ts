import {Component} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {InputChatBar} from './input-chat-bar';
import {LayoutChatMessage} from './layout-chat-message';
import {Message} from './message';
import {Identity} from './identity';

@Component({
    selector: 'lucca-chat-app',
	viewProviders: [Title],
	providers: [ ],
	templateUrl: 'app/lucca-chat.html',
	directives: [InputChatBar, LayoutChatMessage],
	pipes: []
})
export class LuccaChatApp {
    private identity: Identity = new Identity();
    
	public constructor(private title: Title) {
		title.setTitle('Lucca chat');
 	}
     
	private NewMessageComming(layoutMessage: LayoutChatMessage, newMessageContent : string) : void {
		layoutMessage.DisplayNewMessage(new Message(this.identity, newMessageContent));
	}
}
