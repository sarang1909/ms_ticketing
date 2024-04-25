import express from 'express';
import { json } from 'body-parser';
import 'express-async-errors';
import cookiSession from 'cookie-session';
import {
  currentUser,
  errorhandler,
  NotFoundError,
} from '@spordertickets/common';
import { createTicketRouter } from './routes/new';
import { showTicketRouter } from './routes/show';
import { indexTicketRouter } from './routes';
import { updateTicketRouter } from './routes/update';

const app = express();

app.set('trust proxy', true);
app.use(json());

app.use(
  cookiSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(currentUser);

app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorhandler);

export { app };
