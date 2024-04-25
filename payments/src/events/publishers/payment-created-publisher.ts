import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from '@spordertickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
