import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {LuccaChatApp} from '../../src/app/lucca-chat';

beforeEachProviders(() => [LuccaChatApp]);

describe('App: LuccaChat', () => {
  it('should have the title as Lucca chat', inject([LuccaChatApp], (app) => {
    expect(app.title).toBe('Lucca chat');
  }));
  
  it('should have an empty message list on init', inject([LuccaChatApp], (app) => {
    expect(app.messageList.lenght).toBe(0);
  }));

  it('should have one element when display one message', inject([LuccaChatApp], (app) => {
    app.DisplayNewMessage('');
    expect(app.messageList.lenght).toBe(1);
  }))
});

