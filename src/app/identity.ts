import {Injectable} from "angular2/core";

@Injectable()
export class Identity {
    private static DEFAULT_NICKNAME: string = "Anonyme";
    public nickName: string;
  
    public constructor() {
        this.RequestNickName();
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
}