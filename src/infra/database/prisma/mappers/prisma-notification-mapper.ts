import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { Notification as PrismaNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      content: notification.content.value,
      category: notification.category,
      readAt: notification.readAt,
      canceledAt: notification.canceledAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(prismaNotification: PrismaNotification): Notification {
    return new Notification(
      {
        recipientId: prismaNotification.recipientId,
        content: new Content(prismaNotification.content),
        category: prismaNotification.category,
        readAt: prismaNotification.readAt,
        createdAt: prismaNotification.createdAt,
        canceledAt: prismaNotification.canceledAt || undefined,
      },
      prismaNotification.id,
    );
  }
}
