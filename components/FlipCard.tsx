import React, { useState } from 'react';

interface FlipCardProps {
  onFlip?: () => void;
}

export const FlipCard: React.FC<FlipCardProps> = ({ onFlip }) => {
  const [page, setPage] = useState(0);

  const handleAdvance = () => {
    setPage((current) => (current + 1) % 3);
    onFlip?.();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleAdvance();
    }
  };

  return (
    <div
      className={`paper-card paper-card-page-${page}`}
      onClick={handleAdvance}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Flip invitation card"
    >
      <div className="paper-card-book">
        <section className="paper-panel paper-cover paper-front" aria-hidden={page !== 0}>
          <div className="card-lotus-mark" />
          <p className="card-kicker">With joy and blessings</p>
          <h2>Rithika's Rangapravesham</h2>
          <p className="card-subtitle">A celebration of dance, devotion, and family</p>
          <span className="card-action">Open the card</span>
        </section>

        <section className="paper-spread" aria-hidden={page !== 1}>
          <div className="paper-page paper-page-left">
            <p className="card-kicker">You are invited</p>
            <h3>To an auspicious evening</h3>
            <p>
              Please join us as Rithika offers her Rangapravesham, sharing the grace and
              rhythm of a cherished tradition.
            </p>
          </div>
          <div className="paper-page paper-page-right">
            <p className="card-kicker">Blessings and celebration</p>
            <h3>Saturday, [Date]</h3>
            <p>[Time] onwards</p>
            <p>[Venue Name], [City]</p>
            <span className="card-action">Turn the page</span>
          </div>
        </section>

        <section className="paper-panel paper-cover paper-back" aria-hidden={page !== 2}>
          <div className="card-lotus-mark small" />
          <p className="card-kicker">With gratitude</p>
          <h2>Thank You</h2>
          <p className="card-subtitle">Your presence will make the evening brighter.</p>
          <span className="card-action">Back to front</span>
        </section>

        <div className="paper-turn-page" aria-hidden="true" />
      </div>
    </div>
  );
};
