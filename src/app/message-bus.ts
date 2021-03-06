import {Injectable} from "angular2/core";

@Injectable()
export class Bus {
    private static LOCALSTORAGE_KEY: string = "LuccaChatBus";
    public static CONNECT_TOPIC = 'Connect';
    public static SEND_TOPIC = 'Send';
    public static TYPING_TOPIC = 'Typing';
    
    private observerList : Array<BusObserver> = []

    public constructor() {
        this.subscribeStorageEvent();
    }

    private subscribeStorageEvent() {
        window.addEventListener("storage", this.TreatMessage.bind(this));
    }

    private TreatMessage(event: StorageEvent) : string
    {
        if (!this.IsMessageForBus(event)) return;        
        this.SendToSubscribers(event);
    }

    public Publish(message: MessageBus) : void
    {
        let serializedMessage = this.Serialize(message);
        localStorage.clear();
        localStorage.setItem(Bus.LOCALSTORAGE_KEY, serializedMessage);
    }
    
    public Subsribe(observer: BusObserver) : void
    {
        this.observerList.push(observer);
    }
    
    private SendToSubscribers(event: StorageEvent) : void
    {
        let message = this.GetMessage(event);
        this.observerList.forEach(element => {
            element.Consume(message);
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