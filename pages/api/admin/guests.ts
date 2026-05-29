import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'rangapravesham2024';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { password } = req.query;

    if (password !== ADMIN_PASSWORD) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    try {
      const stats = db.getAdminStats();
      res.status(200).json({ success: true, ...stats });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch admin data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
