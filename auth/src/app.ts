import express from 'express';
import { json } from 'body-parser';
import 'express-async-errors';
import cookiSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorhandler, NotFoundError } from '@spordertickets/common';

const app = express();

app.set('trust proxy', true);
app.use(json());

app.use(
  cookiSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorhandler);

export { app };
