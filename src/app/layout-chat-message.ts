import {Component} from 'angular2/core';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {Message} from './message';

@Component({
	selector: 'lc-layout-chat-message',
	styles: [ ],
	template:
	`<div>
        <p *ngFor="#message of messageList">{{message}}</p>
    </div>`
})
export class LayoutChatMessage {
	private messageList : Array<string> = []
     
	public DisplayNewMessage(newMessage : Message) : void {
        if (newMessage == null) return;        
		this.messageList.push(newMessage.Display());
	}
}
