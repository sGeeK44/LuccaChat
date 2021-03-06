import {Component} from 'angular2/core';
import {Message, UserMessage, ConnectionMessage} from './message';
import {Bus, BusObserver, MessageBus} from './message-bus';
import {Identity} from './identity';

@Component({
	selector: 'lc-layout-chat-message',
	styles: [
        `.message-author {
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
        <div *ngFor="#message of messageList">
            <div class='message-info'>
                <span class='message-author'>{{message.identity.nickName}}</span>
                <span *ngIf="message.type == 'UserMessage'"> dit:</span>
                <span *ngIf="message.type == 'ConnectionMessage'"> rejoint le chat.</span>
                <span class='message-time'>{{message.sentAt  | date:'HH:mm:ss'}}</span>
            </div>
            <div class='message-content'>{{message.text}}</div>
        </div>
    </div>`
})
export class LayoutChatMessage implements BusObserver {
	private messageList : Array<Message> = [];
    
    constructor(private bus: Bus)
    {
        bus.Subsribe(this);
    }
    
	public DisplayNewMessage(newMessage : Message) : void {        
        if (newMessage == null) return;      
		this.messageList.push(newMessage);
	}
    
    public Consume(message: MessageBus) : void
    {
        if (message.topic == Bus.SEND_TOPIC) this.DisplayNewMessage(UserMessage.Deserialize(message.content));
        if (message.topic == Bus.CONNECT_TOPIC) this.DisplayNewMessage(ConnectionMessage.Deserialize(message.content));
    }
}
