import {Injectable} from "angular2/core";
import {BrowserDomAdapter} from "angular2/platform/browser";

@Injectable()
export class Bus {
    private static LOCALSTORAGE_KEY: string = "LuccaChatBus";
    private observerList : Array<BusObserver> = []

    public constructor() {
        this.subscribeStorageEvent();
    }

    private subscribeStorageEvent() {
        let dom = new BrowserDomAdapter();
        let windowEvents = dom.getGlobalEventTarget("window");
        windowEvents.addEventListener("storage", this.TreatMessage, false);
    }

    private TreatMessage(event: StorageEvent) : string
    {
        if (!this.IsMessageForBus(event)) return;
        
        this.SendToSubscribers(event);
    }

    public Publish(message: MessageBus) : void
    {
        let serializedMessage = this.Serialize(message);
        localStorage.setItem(Bus.LOCALSTORAGE_KEY, serializedMessage);
    }
    
    public Subsribe(observer: BusObserver) : void
    {
        this.observerList.push(observer);
    }
    
    private SendToSubscribers(event: StorageEvent) : void
    {
        this.observerList.forEach(element => {
            element.Consume(this.GetMessage(event));
        });
    }

    private IsMessageForBus(event: StorageEvent) : boolean
    {
        return event.key == Bus.LOCALSTORAGE_KEY;
    }

    private GetMessage(event: StorageEvent) : MessageBus
    {
        return this.Deserialize(event.newValue);
    }
    
    private Serialize(message: MessageBus) : string
    {
        return JSON.stringify(message);
    }
    
    private Deserialize(messageSerialized: string) : MessageBus
    {
        return JSON.parse(messageSerialized);
    }
}

export class MessageBus
{
    constructor(public topic: string, public content: string) { }
}

export interface BusObserver
{
    Consume(message: MessageBus) : void;
}