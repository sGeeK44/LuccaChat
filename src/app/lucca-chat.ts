import {Component, ElementRef, AfterViewChecked} from 'angular2/core';
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
            overflow:auto;
            width: 100%;
            top:80px;
            bottom:50px;
            display: inline-block;
        }
        .input-chat-bar
        {
            position: absolute;
            bottom: 0;
            width: 100%;
        }`
    ],
	providers: [ ],
	templateUrl: 'app/lucca-chat.html',
	directives: [InputChatBar, LayoutChatMessage],
	pipes: []
})
export class LuccaChatApp implements AfterViewChecked {    
	public constructor(private title: Title, private identity: Identity, private element: ElementRef) {
		title.setTitle('Lucca chat');
 	}
     
	private NewMessageComming(layoutMessage: LayoutChatMessage, newMessageContent : string) : void {
		layoutMessage.DisplayNewMessage(new Message(this.identity, newMessageContent));
	}
    
    ngAfterViewChecked() {
        this.scrollToBottom();        
    }
    
    private scrollToBottom(): void
    {
        let container = this.element.nativeElement.querySelector('.layout-chat-message');
        container.scrollTop = container.scrollHeight;
    }
}
