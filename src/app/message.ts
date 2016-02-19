import {Identity} from './identity';

export class Message {
    public constructor(private identity: Identity, private content: string) {}

    public Display() : string
    {
        return this.identity.nickName + ': ' + this.content;
    }
}