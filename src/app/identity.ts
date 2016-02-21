import {Injectable} from "angular2/core";

@Injectable()
export class Identity {
    private static DEFAULT_NICKNAME: string = "Anonyme";
    public id : string = Identity.NewGuid();
    public nickName: string;
  
    public constructor() {
        this.RequestNickName();
    }
     
     public Serialize() : string
     {
         return JSON.stringify(this);
     }
     
     public static Deserialize(message: string) : Identity
     {
         return JSON.parse(message);         
     }
    
    private RequestNickName() : void
    {        
        do
        {
            this.nickName = prompt('Quel est votre pseudo ?', Identity.DEFAULT_NICKNAME);
        }
        while (this.NickNameIsNotSet());
    }
    
    private NickNameIsNotSet() : boolean
    {
        return this.nickName == '' || this.nickName == null;
    }
    
    private static NewGuid() : string
    {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}