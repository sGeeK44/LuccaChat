import {Component} from 'angular2/core';
import {Control} from 'angular2/common';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {Bus, MessageBus} from './message-bus';
import {Identity} from './identity';
import {UserMessage} from './message';

@Component({
	selector: 'lc-input-chat-bar',
	styles: [],
	template:
	`<div class='input-chat-bar'>
		<input type="text" (keyup.enter)="SendNewMessage()" style='width:80%' placeholder="Votre message..." autofocus [ngFormControl]='input' [(ngModel)]="inputValue" #inputMessage/>
		<input type='button' style='margin-left:10px;' (click)='SendNewMessage();inputMessage.focus()' value='Envoyer'/>
	</div>`
})
export class InputChatBar {
	private inputValue : string = '';
    private input = new Control();
    
	@Output() public newMessageSended: EventEmitter<string> = new EventEmitter<string>();
    
    constructor(private bus: Bus, private identity: Identity) {
        this.InformWhenTypingMessage()
     }
	
	public SendNewMessage() : void {
		this.newMessageSended.emit(this.inputValue);
        this.bus.Publish(new MessageBus('Send', (new UserMessage(this.identity, this.inputValue)).Serialize()));
        this.ClearInputValue();
	}
    
    private InformWhenTypingMessage() : void
    {
        this.input.valueChanges.subscribe(input => {
            this.bus.Publish(new MessageBus('Typing', this.identity.Serialize()));
        });
    }
    
    private ClearInputValue() : void
    {
        this.inputValue = '';
    }
}
