import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const guests = db.getAttendingGuests();
      res.status(200).json({ success: true, guests });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch guests' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
