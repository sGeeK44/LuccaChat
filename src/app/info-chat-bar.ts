import {Component} from 'angular2/core';
import {Message} from './message';
import {Bus, BusObserver, MessageBus} from './message-bus';
import {Identity} from './identity';

@Component({
	selector: 'lc-info-chat-bar',
	styles: [ ],
	template: 
        `<p>&nbsp;
            <em *ngIf='writterList.length == 1'>{{writterList[0].identity.nickName}} écrit un message...</em>
            <em *ngIf='writterList.length > 1'>Plusieurs personnes écrivent un message...</em>
        </p>`
})
export class InfoChatBar implements BusObserver {
    private writterList: Array<Writter> = [];
    
    constructor(private bus: Bus)
    {
        bus.Subsribe(this);
        this.CleanObsoleteWritterEachHalfSecond();
    }
    
    public Consume(message: MessageBus) : void
    {
        if (message.topic == Bus.TYPING_TOPIC) this.AddWritter(Identity.Deserialize(message.content));
    }
    
    private AddWritter(writterIdentity: Identity) : void
    {
        let notFound = -1;
        let index = this.FindIndexWritter(writterIdentity);
        if (index != notFound) this.writterList[index].lastTyping = new Date();
        else this.writterList.push(new Writter(writterIdentity));
    }
    
    private FindIndexWritter(writterIdentity: Identity) : number
    {
        return this.writterList.findIndex((x) => { return x.identity.id == writterIdentity.id; });
    }
    
    private CleanObsoleteWritterEachHalfSecond() : void
    {
        setInterval(() => { this.CleanObsoleteWritter(); }, 500);
    }
    
    private CleanObsoleteWritter() : void
    {
        let oneSecond = 1000;
        this.writterList.forEach(writter => {
            let lastTyping = this.GetElapseTimeFromLastTyping(writter);
            if (lastTyping > oneSecond) this.RemoveWritter(writter);            
        });
    }
    
    private GetElapseTimeFromLastTyping(writter: Writter) : number
    {
        return new Date().valueOf() - writter.lastTyping.valueOf();
    }
    
    private RemoveWritter(writter: Writter)
    {
        let indexElementToRemove = this.writterList.indexOf(writter);
        if (indexElementToRemove == -1) return;
         this.writterList.splice(indexElementToRemove, 1);        
    }
}

class Writter {
    public lastTyping: Date;
    
    constructor(public identity: Identity) {
        this.lastTyping = new Date();
     }
}
