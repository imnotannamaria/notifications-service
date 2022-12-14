import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  test('it should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'exemple-redicpient-id',
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
