import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@spordertickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
