import {bootstrap} from 'angular2/platform/browser';
import {LuccaChatApp} from './app/lucca-chat';
import {Bus} from "./app/message-bus";

bootstrap(LuccaChatApp, [Bus]).catch(err => console.log(err));
