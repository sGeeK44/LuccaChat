import {Component} from 'angular2/core';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';

@Component({
	selector: 'lc-input-chat-bar',
	styles: ['.input-chat-bar { position: absolute; bottom: 0; margin: 10px; width: 100% }'],
	template:
	`<div id='inputChatBar' class=input-chat-bar>
		<input type="text" placeholder="Votre message..." size="60" autofocus [(ngModel)]="inputValue" #inputMessage/>
		<input type='button' style='margin-left: 10px' (click)='SendNewMessage();inputMessage.focus()' value='Envoyer'/>
	</div>`
})
export class InputChatBar {
	inputValue : string = '';
	@Output() newMessageSended: EventEmitter<string> = new EventEmitter<string>();
	
	SendNewMessage() {
		this.newMessageSended.emit(this.inputValue);
        this.inputValue = '';
	}
}
