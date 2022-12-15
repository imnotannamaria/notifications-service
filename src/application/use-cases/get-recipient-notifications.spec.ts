import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notification', () => {
  test('it should be able to recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'same-recipient-id',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'same-recipient-id' }),
        expect.objectContaining({ recipientId: 'same-recipient-id' }),
      ]),
    );
  });
});
