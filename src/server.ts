import 'reflect-metadata';
import express, { json } from 'express';
import routes from './routes';
import uploadConfig from './config/updload';
import './database';

const app = express();
app.use('/files', express.static(uploadConfig.directory));
app.use(json());

app.use(routes);

app.listen(3333, () => {
  console.log('Server startes on port 3333!');
});
