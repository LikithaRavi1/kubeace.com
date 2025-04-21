import express from 'express';
import { setupMiddleware } from '../server/middleware';
import { setupRoutes } from '../server/routes';

const app = express();

setupMiddleware(app);
setupRoutes(app);

export default app;