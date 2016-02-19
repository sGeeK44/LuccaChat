
export class Identity {
  private static DEFAULT_NICKNAME: string = "Anonyme";
  public nickName: string;
    constructor() {
        this.RequestNickName();
    }
    
    RequestNickName() : void
    {        
        do
        {
            this.nickName = prompt('Quel est votre pseudo ?', Identity.DEFAULT_NICKNAME);
        }
        while (this.NickNameIsNotSet());
    }
    
    NickNameIsNotSet() : boolean
    {
        return this.nickName == '' || this.nickName == null;
    }
}