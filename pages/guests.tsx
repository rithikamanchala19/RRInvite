import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
  FlowerGarlands,
  LotusDesign,
  MandalaDesign,
  PeacockFeathers,
} from '@/components/DecorationSvgs';

interface Guest {
  id: string;
  name: string;
  numGuests: number;
  createdAt: string;
}

const Guests: NextPage = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await fetch('/api/guests');
        const data = await response.json();
        if (data.success) {
          setGuests(data.guests);
        }
      } catch (error) {
        console.error('Error fetching guests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);

  return (
    <>
      <Head>
        <title>Guest List - Rithika's Rangapravesham</title>
        <meta name="description" content="Guest list for Rithika's Rangapravesham" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="main-container">
        {/* Decorative Elements */}
        <div className="mandala-top-left">
          <MandalaDesign />
        </div>
        <div className="mandala-top-right">
          <MandalaDesign />
        </div>
        <div className="mandala-bottom-left">
          <img
            src="/mandala.png"
            alt="Mandala decoration"
            className="mandala-image"
          />
        </div>
        <div className="mandala-bottom-right">
          <MandalaDesign />
        </div>
        <div className="newindiv-lotus">
          <img
            src="/lotussinglebetter.png"
            alt="Lotus decoration"
            className="lotus-single"
          />
        </div>
        <div className="lotus-left">
          <img
            src="/lotussinglebetter.png"
            alt="Lotus decoration"
            className="lotus-single"
          />
        </div>
        <div className="lotus-right">
          <img
            src="/lotusgroupbetter.png"
            alt="Lotus group decoration"
            className="lotus-group"
          />
        </div>
        <div className="garland-left">
          <FlowerGarlands />
        </div>
        <div className="garland-right">
          <FlowerGarlands />
        </div>
        <div className="peacock-feathers">
          <PeacockFeathers />
        </div>
        <div className="lotus-cluster">
          <LotusDesign />
        </div>

        {/* Main Content */}
        <div className="content-wrapper py-12 px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl accent-text text-brown font-bold mb-3">
              Our Honored Guests
            </h1>
            <p className="text-lg text-teal">Those who will celebrate with us</p>
          </div>

          {/* Guest List */}
          <div className="card mx-auto max-w-2xl">
            {loading ? (
              <p className="text-center text-brown">Loading guests...</p>
            ) : guests.length === 0 ? (
              <p className="text-center text-brown text-lg">No guests have confirmed yet</p>
            ) : (
              <>
                <h2 className="text-2xl accent-text text-brown mb-6 font-semibold">
                  Confirmed Attendees ({guests.length})
                </h2>
                <div>
                  {guests.map((guest) => (
                    <div key={guest.id} className="guest-item">
                      <div>
                        <p className="text-brown font-semibold">{guest.name}</p>
                        <p className="text-sm text-pink">
                          +{guest.numGuests - 1} additional {guest.numGuests - 1 === 1 ? 'guest' : 'guests'}
                        </p>
                      </div>
                      <div className="text-right text-teal font-semibold">
                        {guest.numGuests} {guest.numGuests === 1 ? 'person' : 'people'}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-8 pt-6 border-t border-teal">
                  <p className="text-center text-brown font-semibold">
                    Total Expected Guests: <span className="text-2xl text-pink">
                      {guests.reduce((sum, g) => sum + g.numGuests, 0)}
                    </span>
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Back Button */}
          <div className="text-center mt-8">
            <Link href="/" className="btn btn-primary">
              Back to Invite
            </Link>
          </div>

          {/* Footer */}
          <div className="footer-text">
            Thank You!
          </div>
        </div>
      </div>
    </>
  );
};

export default Guests;
