import { Content } from './content';

describe('Notification content', () => {
  test('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  test('it should not be able to create a notification content with less then 5 characters', () => {
    expect(() => new Content('123')).toThrow();
  });

  test('it should not be able to create a notification content with more then 260 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
