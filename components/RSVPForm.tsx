import React, { useState } from 'react';

interface RSVPFormProps {
  onSubmit: (data: RSVPData) => void;
  isLoading?: boolean;
}

export interface RSVPData {
  name: string;
  attending: boolean;
  numGuests: number;
  comments: string;
}

export const RSVPForm: React.FC<RSVPFormProps> = ({ onSubmit, isLoading = false }) => {
  const [step, setStep] = useState<'choice' | 'details'>('choice');
  const [attending, setAttending] = useState<boolean | null>(null);
  const [name, setName] = useState('');
  const [numGuests, setNumGuests] = useState(1);
  const [comments, setComments] = useState('');

  const handleYes = () => {
    setAttending(true);
    setStep('details');
  };

  const handleNo = () => {
    setAttending(false);
    setStep('details');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter your name');
      return;
    }

    onSubmit({
      name,
      attending: attending || false,
      numGuests: attending ? numGuests : 0,
      comments,
    });
  };

  return (
    <div className="card mx-auto max-w-md">
      {step === 'choice' ? (
        <div className="text-center">
          <h3 className="text-2xl accent-text text-brown mb-6">
            Please grace us with your presence!
          </h3>
          <div className="flex flex-col gap-4">
            <button className="btn btn-primary" onClick={handleYes}>
              Yes
            </button>
            <p className="text-brown text-sm">I will be able to attend</p>
            <button className="btn btn-reject" onClick={handleNo}>
              No
            </button>
            <p className="text-brown text-sm">I will not be able to attend</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-brown font-semibold mb-2">Your Name *</label>
            <input
              type="text"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          {attending && (
            <div>
              <label className="block text-brown font-semibold mb-2">Number of Guests</label>
              <input
                type="number"
                className="input-field"
                value={numGuests}
                onChange={(e) => setNumGuests(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                placeholder="1"
              />
              <p className="text-sm text-pink mt-1">Including yourself</p>
            </div>
          )}

          <div>
            <label className="block text-brown font-semibold mb-2">Additional Comments</label>
            <textarea
              className="input-field"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Any special requests or messages?"
              rows={4}
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="btn btn-secondary flex-1"
              onClick={() => {
                setStep('choice');
                setAttending(null);
              }}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn btn-primary flex-1"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
