import {Identity} from './identity';

export class Message {
    public sentAt: Date = new Date();
    public author: string;
    
    public constructor(identity: Identity, public text: string) {
        if (identity != null) this.author = identity.nickName;
     }
     
     public Serialize() : string
     {
         return JSON.stringify(this);
     }
     
     public static Deserialize(message: string) : Message
     {
         return Message.CreateTypedMessage(JSON.parse(message));         
     }
     
     private static CreateTypedMessage(unTypedMessage: any) : Message
     {
         let result = new Message(null, unTypedMessage.text);
         result.author = unTypedMessage.author;
         result.sentAt = new Date(unTypedMessage.sentAt);
         return result;
     }
}