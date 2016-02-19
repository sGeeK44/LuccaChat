import {Component} from 'angular2/core';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';

@Component({
	selector: 'lc-layout-chat-message',
	styles: [ ],
	template:
	`<div>
        <p *ngFor="#message of messageList">{{message}}</p>
    </div>`
})
export class LayoutChatMessage {
	public messageList : Array<string> = []
     
	DisplayNewMessage(newMessage : string) {
        if (newMessage == '') return;        
		this.messageList.push(newMessage);
        console.log(this.messageList);
	}
}
