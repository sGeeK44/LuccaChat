import {Identity} from './identity';

export abstract class Message {    
    public constructor(identity: Identity, public type: string) { }
     
     public Serialize() : string
     {
         return JSON.stringify(this);
     }
}

export class UserMessage extends Message
{
    public sentAt: Date = new Date();
    
    public constructor(private identity: Identity, public text: string) {
        super(identity, 'UserMessage');
     }
     
     public static Deserialize(message: string) : Message
     {
         let result = JSON.parse(message);
         UserMessage.TypeMessage(result);
         return result;         
     }
     
     private static TypeMessage(unTypedMessage: any) : void
     {
         unTypedMessage.sentAt = new Date(unTypedMessage.sentAt);
     }
}

export class ConnectionMessage extends Message
{    
    public constructor(private identity: Identity) {
        super(identity, 'ConnectionMessage');
     }
     
     public static Deserialize(message: string) : Message
     {
         return JSON.parse(message);         
     }
}