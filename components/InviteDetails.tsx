import React from 'react';

interface InviteDetailsProps {
  date: string;
  time: string;
  location: string;
  attire: string;
}

export const InviteDetails: React.FC<InviteDetailsProps> = ({
  date,
  time,
  location,
  attire,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
      {/* Date/Time Card */}
      <div className="card text-center">
        <p className="text-brown font-semibold text-sm mb-2">Date & Time</p>
        <div className="accent-text text-pink text-lg font-semibold">{date}</div>
        <div className="text-teal">{time}</div>
      </div>

      {/* Location Card */}
      <div className="card text-center">
        <p className="text-brown font-semibold text-sm mb-2">Location</p>
        <div className="text-teal font-semibold">{location}</div>
      </div>

      {/* Dinner Card */}
      <div className="card text-center col-span-2">
        <p className="text-brown font-semibold text-sm mb-2">Celebration</p>
        <div className="text-pink font-semibold">Please join us for dinner after!</div>
      </div>

      {/* Attire Card */}
      <div className="card text-center col-span-2">
        <p className="text-brown font-semibold text-sm mb-2">Attire</p>
        <div className="text-brown font-semibold italic">{attire}</div>
      </div>
    </div>
  );
};
