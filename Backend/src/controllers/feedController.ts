import { Request, Response } from 'express';
import db from '../models/Feed';

export const createFeed = (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  db.run(
    'INSERT INTO feeds (name, email, message) VALUES (?, ?, ?)',
    [name, email, message],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID });
    }
  );
};

export const getAllFeeds = (req: Request, res: Response) => {
  db.all('SELECT * FROM feeds', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};