import {Identity} from './identity';

export class Message {
    public sentAt: Date = new Date();
    public author: string;

    public constructor(identity: Identity, public text: string) {
        this.author = identity.nickName;
     }
}