import { Router, Request, Response } from 'express';

import cors from 'cors';

const routes = Router();

routes.use(cors());

routes.get('/', (request: Request, response: Response) => {
  response.json({ message: 'PRONTO CARALHOOOOO, passou no teste !' })
});

export default routes;
