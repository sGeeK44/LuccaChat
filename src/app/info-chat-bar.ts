import {Component} from 'angular2/core';
import {Message} from './message';
import {Bus, BusObserver, MessageBus} from './message-bus';

@Component({
	selector: 'lc-info-chat-bar',
	styles: [ ],
	template: `<p>&nbsp;{{info}}</p>`
})
export class InfoChatBar implements BusObserver {
    private info: string;
    
    constructor(private bus: Bus)
    {
        bus.Subsribe(this);
    }
    
	public DisplayNewConnection(nickName: string) : void {   
		this.Display(nickName + ' vient de se connecter');
	}
    
    public Display(message: string)
    {
        this.SetInfo(message);
        setTimeout(() => {this.CleanInfo();}, 5000);
    }
    
    public SetInfo(message : string) : void
    {
        this.info = message;        
    }
    
    public CleanInfo() : void
    {
        this.info = null;
    }
    
    public Consume(message: MessageBus) : void
    {
        if (message.topic == 'Connect') this.DisplayNewConnection(message.content);
    }
}
