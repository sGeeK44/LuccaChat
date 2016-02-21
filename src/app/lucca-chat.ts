import {Component, ElementRef, AfterViewChecked} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {InputChatBar} from './input-chat-bar';
import {LayoutChatMessage} from './layout-chat-message';
import {InfoChatBar} from './info-chat-bar';
import {Message} from './message';
import {Identity} from './identity';
import {Bus, MessageBus} from './message-bus';

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
            bottom:70px;
            display: inline-block;
        }
        .input-chat-bar
        {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 70px
        }`
    ],
	providers: [ ],
	templateUrl: 'app/lucca-chat.html',
	directives: [InputChatBar, LayoutChatMessage, InfoChatBar],
	pipes: []
})
export class LuccaChatApp implements AfterViewChecked {    
	public constructor(private title: Title,
                       private identity: Identity,
                       private element: ElementRef,
                       private bus: Bus) {
		title.setTitle('Lucca chat');
        bus.Publish(new MessageBus('Connect', identity.nickName));
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
