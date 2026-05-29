// Using in-memory database for MVP (can be replaced with PostgreSQL/MongoDB for production)
interface Guest {
  id: string;
  name: string;
  attending: boolean;
  numGuests: number;
  comments: string;
  createdAt: Date;
}

let guests: Guest[] = [];
let idCounter = 1;

export const db = {
  addGuest: (
    name: string,
    attending: boolean,
    numGuests: number,
    comments: string
  ): Guest => {
    const guest: Guest = {
      id: String(idCounter++),
      name,
      attending,
      numGuests,
      comments,
      createdAt: new Date(),
    };
    guests.push(guest);
    return guest;
  },

  getGuests: (): Guest[] => {
    return guests;
  },

  getAttendingGuests: (): Guest[] => {
    return guests.filter((g) => g.attending);
  },

  getAdminStats: () => {
    const attending = guests.filter((g) => g.attending);
    const totalGuests = attending.reduce((sum, g) => sum + g.numGuests, 0);
    return {
      totalResponses: guests.length,
      attending: attending.length,
      notAttending: guests.length - attending.length,
      totalGuests: totalGuests,
      guests: guests,
    };
  },
};
