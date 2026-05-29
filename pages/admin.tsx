import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { MandalaDesign, LotusDesign } from '@/components/DecorationSvgs';

interface AdminGuest {
  id: string;
  name: string;
  attending: boolean;
  numGuests: number;
  comments: string;
  createdAt: string;
}

interface AdminStats {
  totalResponses: number;
  attending: number;
  notAttending: number;
  totalGuests: number;
  guests: AdminGuest[];
}

const Admin: NextPage = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/admin/guests?password=${encodeURIComponent(password)}`);

      if (response.ok) {
        const data = await response.json();
        setStats(data);
        setAuthenticated(true);
      } else if (response.status === 403) {
        setError('Invalid password');
      } else {
        setError('Failed to load data');
      }
    } catch (err) {
      setError('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard - Rithika's Rangapravesham</title>
        <meta name="description" content="Admin dashboard for Rithika's Rangapravesham" />
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
          <MandalaDesign />
        </div>
        <div className="mandala-bottom-right">
          <MandalaDesign />
        </div>

        {/* Main Content */}
        <div className="content-wrapper py-12 px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl accent-text text-brown font-bold mb-3">
              Admin Dashboard
            </h1>
            <p className="text-lg text-teal">RSVP Management</p>
          </div>

          {!authenticated ? (
            <div className="card mx-auto max-w-md">
              <form onSubmit={handleLogin} className="space-y-4">
                <h2 className="text-2xl accent-text text-brown mb-6">Admin Login</h2>

                {error && (
                  <div className="p-3 bg-pink bg-opacity-20 border border-pink rounded text-pink text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-brown font-semibold mb-2">Password</label>
                  <input
                    type="password"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                  {loading ? 'Authenticating...' : 'Login'}
                </button>
              </form>
            </div>
          ) : stats ? (
            <>
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                <div className="card text-center">
                  <p className="text-brown text-sm font-semibold mb-2">Total Responses</p>
                  <p className="text-3xl accent-text text-teal font-bold">{stats.totalResponses}</p>
                </div>

                <div className="card text-center">
                  <p className="text-brown text-sm font-semibold mb-2">Attending</p>
                  <p className="text-3xl accent-text text-pink font-bold">{stats.attending}</p>
                </div>

                <div className="card text-center">
                  <p className="text-brown text-sm font-semibold mb-2">Not Attending</p>
                  <p className="text-3xl accent-text text-brown font-bold">{stats.notAttending}</p>
                </div>

                <div className="card text-center">
                  <p className="text-brown text-sm font-semibold mb-2">Total Guests</p>
                  <p className="text-3xl accent-text text-dark-teal font-bold">{stats.totalGuests}</p>
                </div>
              </div>

              {/* Detailed Guest List */}
              <div className="max-w-4xl mx-auto space-y-4">
                <div className="card">
                  <h2 className="text-2xl accent-text text-brown mb-6 font-semibold">
                    All Responses
                  </h2>

                  <div className="space-y-4">
                    {stats.guests.length === 0 ? (
                      <p className="text-brown text-center py-8">No responses yet</p>
                    ) : (
                      stats.guests.map((guest) => (
                        <div key={guest.id} className="border-l-4 border-teal pl-4 py-2">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="text-brown font-semibold text-lg">{guest.name}</p>
                              <p className="text-sm text-pink">
                                Status:{' '}
                                <span className={guest.attending ? 'text-teal font-semibold' : 'text-brown font-semibold'}>
                                  {guest.attending ? 'Attending' : 'Not Attending'}
                                </span>
                              </p>
                            </div>
                            {guest.attending && (
                              <div className="text-right">
                                <p className="text-teal font-semibold text-lg">{guest.numGuests} guests</p>
                              </div>
                            )}
                          </div>

                          {guest.comments && (
                            <div className="mt-2 p-2 bg-white border border-teal rounded">
                              <p className="text-sm text-brown italic">
                                <span className="font-semibold">Comments: </span>
                                {guest.comments}
                              </p>
                            </div>
                          )}

                          <p className="text-xs text-brown opacity-60 mt-2">
                            Submitted: {new Date(guest.createdAt).toLocaleString()}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Logout Button */}
              <div className="text-center mt-8">
                <button
                  onClick={() => {
                    setAuthenticated(false);
                    setPassword('');
                    setStats(null);
                  }}
                  className="btn btn-secondary"
                >
                  Logout
                </button>
              </div>
            </>
          ) : null}

          {/* Footer */}
          <div className="footer-text">
            Thank You!
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
