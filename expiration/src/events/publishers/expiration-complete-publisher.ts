import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@spordertickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
