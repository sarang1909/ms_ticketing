import { OrderCreatedEvent, Publisher, Subjects } from '@spordertickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
