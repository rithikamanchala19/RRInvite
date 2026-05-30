import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export const db = {
  addGuest: async (
    name: string,
    email: string,
    attending: boolean,
    numGuests: number,
    comments: string
  ) => {
    return prisma.guest.upsert({
      where: { email },
      update: {
        name,
        attending,
        numGuests,
        comments,
      },
      create: {
        name,
        email,
        attending,
        numGuests,
        comments,
      },
    });
  },

  getGuests: async () => {
    return prisma.guest.findMany({
      where: { attending: true },
      orderBy: { createdAt: 'desc' },
    });
  },

  getAdminStats: async () => {
    const guests = await prisma.guest.findMany({
      orderBy: { createdAt: 'desc' },
    });
    const attending = guests.filter((g) => g.attending);
    const totalGuests = attending.reduce((sum, g) => sum + g.numGuests, 0);

    return {
      totalResponses: guests.length,
      attending: attending.length,
      notAttending: guests.length - attending.length,
      totalGuests,
      guests,
    };
  },
};
