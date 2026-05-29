import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, attending, numGuests, comments } = req.body;

    if (!name || attending === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const guest = db.addGuest(
        name,
        attending,
        attending ? numGuests || 1 : 0,
        comments || ''
      );
      res.status(201).json({ success: true, guest });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save RSVP' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
