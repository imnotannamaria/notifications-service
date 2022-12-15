import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { CountRecipientNotifications } from './count-recipient-notification';

describe('Count recipient notification', () => {
  test('id should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'same-recipient-id' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'same-recipient-id' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'diferent-recipient-id' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'same-recipient-id',
    });

    expect(count).toEqual(2);
  });

  test('id should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'non-existing-notification-id',
      });
    }).rejects.toThrowError('Notification not found');
  });
});
