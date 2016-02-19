import {Component} from 'angular2/core';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {Message} from './message';

@Component({
	selector: 'lc-layout-chat-message',
	styles: [
        `.layout-container {
            position: relative;
            width: 100%;
        }
        .message-author {
            font-weight: bold;
        }
        .message-time {
            position: absolute;
            right: 0px;
            width: 70px;
            text-align: center;
        }        
        .message-content {
            margin-left: 20px;
        }`
     ],
	template:
	`<div class='layout-container'>
        <div class='message' *ngFor="#message of messageList">
            <div class='message-info'>
                <span class='message-author'>{{message.author}}</span> dit:
                <span class='message-time'>{{message.sentAt  | date:'HH:mm:ss'}}</span>
            </div>
            <div class='message-content'>{{message.text}}</div>
        </div>
    </div>`
})
export class LayoutChatMessage {
	private messageList : Array<Message> = []
     
	public DisplayNewMessage(newMessage : Message) : void {
        if (newMessage == null) return;        
		this.messageList.push(newMessage);
	}
}
