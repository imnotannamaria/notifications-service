import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repositoty';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  test('id should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: 'exemple-redicpient-id',
      content: 'This is a notification',
      category: 'social',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
