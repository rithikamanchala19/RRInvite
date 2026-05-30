import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FlipCard } from '@/components/FlipCard';
import { InviteDetails } from '@/components/InviteDetails';
import { RSVPForm, type RSVPData } from '@/components/RSVPForm';
import {
  FlowerGarlands,
  LotusDesign,
  PeacockFeathers,
} from '@/components/DecorationSvgs';

const Home: NextPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleRSVPSubmit = async (data: RSVPData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          window.location.href = '/guests';
        }, 2000);
      } else {
        alert('Failed to submit RSVP. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('Error submitting RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Rithika Manchala's Rangapravesham</title>
        <meta name="description" content="You are cordially invited to Rithika's Rangapravesham" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main-container">
        {/* Decorative Elements */}
        
        
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
        <div className="mandala-bottom-left">
          <img
            src="/mandala.png"
            alt="Mandala decoration"
            className="mandala-image"
          />
        </div>
        <div className="mandala-center">
          <img
            src="/mandala.png"
            alt="Mandala decoration"
            className="mandala-image"
          />
        </div>
        <div className="mandala-bottom-right">
          <img
            src="/mandala.png"
            alt="Mandala decoration"
            className="mandala-image"
          />
        </div>
        <div className="peacock-feathers">
          <PeacockFeathers />
        </div>
        {/* <div className="peacock-feathers top-right-feathers">
          <PeacockFeathers />
        </div> */}
        <div className="garland-left">
          <FlowerGarlands />
        </div>
        <div className="garland-right">
          <FlowerGarlands />
        </div>

        {/* Main Content */}
        <div className="content-wrapper py-12 px-4">
          {/* Header with navigation */}
          <div className="flex justify-end mb-6">
            <Link href="/guests" className="btn btn-secondary text-sm">
              View Guest List
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl accent-text text-brown font-serif italic mb-3 cursive-title">
              Rithika Manchala's Rangapravesham
            </h1>
            <p className="text-xl text-teal">An auspicious celebration of tradition and joy</p>
          </div>

          {/* Flip Card */}
          <div className="mb-12">
            <FlipCard />
          </div>

          {/* Invite Details */}
          <div className="mb-12">
            <InviteDetails
              date="Saturday, [Date]"
              time="[Time] onwards"
              location="[Venue Name], [City]"
              attire="Traditional"
            />
          </div>

          {/* RSVP Section */}
          {submitted ? (
            <div className="card mx-auto max-w-md text-center bg-pink bg-opacity-20 border-pink">
              <h3 className="text-2xl accent-text text-brown mb-4">Thank You!</h3>
              <p className="text-teal mb-2">Your RSVP has been received</p>
              <p className="text-brown text-sm">Redirecting to guest list...</p>
            </div>
          ) : (
            <RSVPForm onSubmit={handleRSVPSubmit} isLoading={isSubmitting} />
          )}

          {/* Footer */}
          <div className="footer-text">
            Thank You!
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
