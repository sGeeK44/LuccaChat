import {Component} from 'angular2/core';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {Bus, MessageBus} from './message-bus';
import {Identity} from './identity';
import {Message} from './message';

@Component({
	selector: 'lc-input-chat-bar',
	styles: [],
	template:
	`<div id='inputChatBar' class='input-chat-bar'>
		<input type="text" (keyup.enter)="SendNewMessage()" style='width:80%' placeholder="Votre message..." autofocus [(ngModel)]="inputValue" #inputMessage/>
		<input type='button' style='margin-left:10px;' (click)='SendNewMessage();inputMessage.focus()' value='Envoyer'/>
	</div>`
})
export class InputChatBar {
	private inputValue : string = '';
    
	@Output() public newMessageSended: EventEmitter<string> = new EventEmitter<string>();
    
    constructor(private bus: Bus, private identity: Identity) { }
	
	public SendNewMessage() : void {
		this.newMessageSended.emit(this.inputValue);
        this.bus.Publish(new MessageBus('Send', (new Message(this.identity, this.inputValue)).Serialize()));
        this.inputValue = '';
	}
}
