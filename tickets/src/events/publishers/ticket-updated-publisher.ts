import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@spordertickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
