import {bootstrap} from 'angular2/platform/browser';
import {LuccaChatApp} from './app/lucca-chat';
import {Bus} from "./app/message-bus";
import {Identity} from "./app/identity";

bootstrap(LuccaChatApp, [Bus, Identity]).catch(err => console.log(err));
