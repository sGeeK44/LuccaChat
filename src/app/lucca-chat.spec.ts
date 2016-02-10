import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {LuccaChatApp} from '../app/lucca-chat';

beforeEachProviders(() => [LuccaChatApp]);

describe('App: LuccaChat', () => {
  it('should have the `defaultMeaning` as 42', inject([LuccaChatApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([LuccaChatApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

