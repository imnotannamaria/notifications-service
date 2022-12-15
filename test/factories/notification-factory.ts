import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'diferent-recipient-id',
    content: new Content('This is the third notification'),
    category: 'test',
    ...override,
  });
}
