import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT ?? 3000;

if (!process.env.DATABASE_URL?.startsWith('postgres://')) {
  console.error('Invalid DATABASE_URL');
  process.exit(1);
}

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', env: process.env.NODE_ENV });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//cache test