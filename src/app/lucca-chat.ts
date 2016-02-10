import {Component} from 'angular2/core';


@Component({
  selector: 'lucca-chat-app',
  providers: [],
  templateUrl: 'app/lucca-chat.html',
  directives: [],
  pipes: []
})
export class LuccaChatApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
