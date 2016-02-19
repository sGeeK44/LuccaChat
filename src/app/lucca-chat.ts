import {Component} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {InputChatBar} from './input-chat-bar';
import {LayoutChatMessage} from './layout-chat-message';
import {Message} from './message';
import {Identity} from './identity';

@Component({
    selector: 'lucca-chat-app',
	viewProviders: [Title],
    styles: [ 
        `.layout-chat-message
        {
            position:absolute;
            top:60px;
            bottom:40px;
            display: inline-block;
            width: 95%;
            border:1px solid black;
        }
        .input-chat-bar
        {
            position: absolute;
            bottom: 0;
            margin: 10px;
            width: 95%;
        }`
    ],
	providers: [ ],
	templateUrl: 'app/lucca-chat.html',
	directives: [InputChatBar, LayoutChatMessage],
	pipes: []
})
export class LuccaChatApp {    
	public constructor(private title: Title, private identity: Identity) {
		title.setTitle('Lucca chat');
 	}
     
	private NewMessageComming(layoutMessage: LayoutChatMessage, newMessageContent : string) : void {
		layoutMessage.DisplayNewMessage(new Message(this.identity, newMessageContent));
	}
}
