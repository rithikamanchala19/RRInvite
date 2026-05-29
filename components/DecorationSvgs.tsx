import React from 'react';

export const MandalaDesign: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
  >
    <defs>
      <style>{`
        .mandala-circle { fill: none; stroke: #f4c967; stroke-width: 1.35; }
        .mandala-petal { fill: #e04493; stroke: #f4c967; stroke-width: 0.8; opacity: 0.76; }
        .mandala-center { fill: #f4c967; stroke: #fff0bd; stroke-width: 1; }
        .mandala-dot { fill: #f4c967; opacity: 0.7; }
      `}</style>
    </defs>

    <circle cx="100" cy="100" r="95" className="mandala-circle" />
    <circle cx="100" cy="100" r="78" className="mandala-circle" />

    {[...Array(16)].map((_, i) => {
      const angle = (i * Math.PI * 2) / 16;
      const x = 100 + 74 * Math.cos(angle);
      const y = 100 + 74 * Math.sin(angle);
      return (
        <circle key={i} cx={x} cy={y} r="2.8" className="mandala-dot" />
      );
    })}

    {[...Array(16)].map((_, i) => {
      const angle = (i * Math.PI * 2) / 16;
      const x = 100 + 44 * Math.cos(angle);
      const y = 100 + 44 * Math.sin(angle);
      return (
        <ellipse
          key={`inner-${i}`}
          cx={x}
          cy={y}
          rx="9"
          ry="22"
          transform={`rotate(${(angle * 180) / Math.PI + 90} ${x} ${y})`}
          className="mandala-petal"
        />
      );
    })}

    {[...Array(8)].map((_, i) => {
      const angle = (i * Math.PI * 2) / 8;
      const x = 100 + 22 * Math.cos(angle);
      const y = 100 + 22 * Math.sin(angle);
      return (
        <ellipse
          key={`center-${i}`}
          cx={x}
          cy={y}
          rx="8"
          ry="18"
          transform={`rotate(${(angle * 180) / Math.PI + 90} ${x} ${y})`}
          className="mandala-petal"
        />
      );
    })}

    <circle cx="100" cy="100" r="16" className="mandala-center" />
  </svg>
);

export const LotusDesign: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 150 150"
    xmlns="http://www.w3.org/2000/svg"
    width="150"
    height="150"
  >
    <defs>
      <style>{`
        .lotus-petal { fill: #e04493; stroke: #f4c967; stroke-width: 1.2; }
        .lotus-petal-soft { fill: #ff9fc5; stroke: #f4c967; stroke-width: 0.9; }
        .lotus-leaf { fill: #224f2b; stroke: #d9a33d; stroke-width: 1; }
        .lotus-center { fill: #f4c967; stroke: #fff0bd; stroke-width: 1; }
      `}</style>
    </defs>

    <path d="M 18 114 C 42 92, 108 92, 132 114 C 102 126, 48 126, 18 114 Z" className="lotus-leaf" />
    <path d="M 35 98 C 50 72, 100 72, 115 98 C 92 112, 58 112, 35 98 Z" className="lotus-leaf" opacity="0.7" />

    {[...Array(7)].map((_, i) => {
      const angle = -70 + i * 23;
      const x = 75 + 28 * Math.sin((angle * Math.PI) / 180);
      const y = 72 - 10 * Math.cos((angle * Math.PI) / 180);
      return (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="13"
          ry="34"
          transform={`rotate(${angle} ${x} ${y})`}
          className="lotus-petal-soft"
        />
      );
    })}

    {[...Array(5)].map((_, i) => {
      const angle = -44 + i * 22;
      const x = 75 + 16 * Math.sin((angle * Math.PI) / 180);
      const y = 76 - 8 * Math.cos((angle * Math.PI) / 180);
      return (
        <ellipse
          key={`front-${i}`}
          cx={x}
          cy={y}
          rx="12"
          ry="31"
          transform={`rotate(${angle} ${x} ${y})`}
          className="lotus-petal"
        />
      );
    })}

    <circle cx="75" cy="88" r="13" className="lotus-center" />
    <circle cx="75" cy="88" r="6" fill="#7b4e2d" opacity="0.35" />
  </svg>
);

export const PeacockFeathers: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 360 420"
    xmlns="http://www.w3.org/2000/svg"
    width="360"
    height="420"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="featherEye" cx="50%" cy="48%" r="52%">
        <stop offset="0%" stopColor="#0b063f" />
        <stop offset="32%" stopColor="#0a68b4" />
        <stop offset="52%" stopColor="#12a78e" />
        <stop offset="70%" stopColor="#b8852d" />
        <stop offset="100%" stopColor="#335c1d" />
      </radialGradient>
      <linearGradient id="featherStem" x1="0%" x2="100%">
        <stop offset="0%" stopColor="#6c7d22" />
        <stop offset="45%" stopColor="#d2ac45" />
        <stop offset="100%" stopColor="#375615" />
      </linearGradient>
      <style>{`
        .feather-spine { stroke: url(#featherStem); stroke-width: 4; fill: none; stroke-linecap: round; }
        .feather-strand { stroke: #78a83f; stroke-width: 1.2; fill: none; stroke-linecap: round; opacity: 0.72; }
        .feather-strand-alt { stroke: #c3a641; opacity: 0.58; }
        .feather-eye { fill: url(#featherEye); stroke: #e5bd54; stroke-width: 2.5; }
        .feather-eye-dark { fill: #08043e; opacity: 0.92; }
      `}</style>
    </defs>

    {[
      { x: 86, y: 274, r: -20, s: 1 },
      { x: 184, y: 248, r: 18, s: 0.95 },
      { x: 137, y: 128, r: 8, s: 1.08 },
    ].map((feather, index) => (
      <g key={index} transform={`translate(${feather.x} ${feather.y}) rotate(${feather.r}) scale(${feather.s})`}>
        <path d="M 0 118 C 9 55, 16 6, 22 -92" className="feather-spine" />
        {[...Array(18)].map((_, i) => {
          const y = 102 - i * 10;
          const length = 76 - i * 2.5;
          return (
            <path
              key={`l-${i}`}
              d={`M ${8 + i * 0.55} ${y} C ${-length * 0.38} ${y - 22}, ${-length * 0.68} ${y - 46}, ${-length} ${y - 72}`}
              className={`feather-strand ${i % 3 === 0 ? 'feather-strand-alt' : ''}`}
            />
          );
        })}
        {[...Array(18)].map((_, i) => {
          const y = 102 - i * 10;
          const length = 72 - i * 2.4;
          return (
            <path
              key={`r-${i}`}
              d={`M ${9 + i * 0.55} ${y} C ${length * 0.42} ${y - 20}, ${length * 0.7} ${y - 44}, ${length} ${y - 70}`}
              className={`feather-strand ${i % 3 === 1 ? 'feather-strand-alt' : ''}`}
            />
          );
        })}
        <ellipse cx="22" cy="-92" rx="36" ry="46" transform="rotate(15 22 -92)" className="feather-eye" />
        <ellipse cx="22" cy="-92" rx="18" ry="24" transform="rotate(28 22 -92)" fill="#0c2aa0" />
        <ellipse cx="16" cy="-95" rx="12" ry="18" transform="rotate(-35 16 -95)" className="feather-eye-dark" />
        <ellipse cx="29" cy="-85" rx="10" ry="15" transform="rotate(35 29 -85)" className="feather-eye-dark" />
      </g>
    ))}
  </svg>
);

export const FlowerGarlands: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 220 500"
    xmlns="http://www.w3.org/2000/svg"
    width="220"
    height="500"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="garlandGold" x1="0%" x2="100%">
        <stop offset="0%" stopColor="#8d5b16" />
        <stop offset="45%" stopColor="#f5c65b" />
        <stop offset="100%" stopColor="#9c6419" />
      </linearGradient>
      <style>{`
        .garland-chain { stroke: url(#garlandGold); stroke-width: 2; fill: none; stroke-linecap: round; opacity: 0.92; }
        .jasmine { fill: #fff5d4; stroke: #d5ad55; stroke-width: 0.8; }
        .bell { fill: #c01878; stroke: #e8a7b9; stroke-width: 1; }
        .bead { fill: #bd762c; stroke: #f4c261; stroke-width: 0.8; }
      `}</style>
    </defs>

    {[38, 72, 154, 188].map((x, strandIndex) => (
      <g key={strandIndex}>
        <path d={`M ${x} 0 C ${x - 8} 92, ${x + 10} 168, ${x} 246`} className="garland-chain" />
        {[...Array(15)].map((_, i) => {
          const y = 12 + i * 15;
          return (
            <g key={i} transform={`translate(${x + (i % 2 === 0 ? -2 : 2)} ${y})`}>
              <circle cx="0" cy="0" r="5.4" className="jasmine" />
              <circle cx="-4" cy="0" r="4.4" className="jasmine" />
              <circle cx="4" cy="0" r="4.4" className="jasmine" />
              <circle cx="0" cy="-4" r="4.4" className="jasmine" />
              <circle cx="0" cy="4" r="4.4" className="jasmine" />
            </g>
          );
        })}
        <circle cx={x} cy="254" r="8" className="bead" />
        <path
          d={`M ${x - 16} 268 C ${x - 10} 246, ${x + 10} 246, ${x + 16} 268 C ${x + 8} 292, ${x - 8} 292, ${x - 16} 268 Z`}
          className="bell"
        />
      </g>
    ))}

    <path d="M 6 4 C 48 26, 86 26, 110 6 C 134 26, 172 26, 214 4" className="garland-chain" />
    {[...Array(7)].map((_, i) => (
      <path
        key={i}
        d={`M ${22 + i * 30} 16 C ${30 + i * 30} 34, ${42 + i * 30} 34, ${50 + i * 30} 16 C ${42 + i * 30} 25, ${30 + i * 30} 25, ${22 + i * 30} 16 Z`}
        fill="#daa03a"
        stroke="#f5c65b"
        strokeWidth="1"
        opacity="0.9"
      />
    ))}
  </svg>
);

export const GaneshIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
  >
    <defs>
      <style>{`
        .ganesh-line { stroke: #8b7b7b; stroke-width: 2; fill: none; }
        .ganesh-fill { fill: #d4a5a5; }
      `}</style>
    </defs>
    
    {/* Head (circle) */}
    <circle cx="50" cy="35" r="18" className="ganesh-fill" />
    
    {/* Trunk (curved line to lower right) */}
    <path d="M 58 45 Q 70 60 65 75" className="ganesh-line" strokeLinecap="round" />
    
    {/* Body */}
    <ellipse cx="50" cy="65" rx="15" ry="18" className="ganesh-fill" />
    
    {/* Ears */}
    <circle cx="35" cy="25" r="8" className="ganesh-fill" />
    <circle cx="65" cy="25" r="8" className="ganesh-fill" />
    
    {/* Tusks */}
    <path d="M 42 45 Q 35 55 32 60" className="ganesh-line" strokeLinecap="round" />
    
    {/* Legs */}
    <line x1="42" y1="80" x2="42" y2="95" className="ganesh-line" strokeLinecap="round" />
    <line x1="58" y1="80" x2="58" y2="95" className="ganesh-line" strokeLinecap="round" />
  </svg>
);

export const KrishnaIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
  >
    <defs>
      <style>{`
        .krishna-line { stroke: #8b7b7b; stroke-width: 2; fill: none; }
        .krishna-fill { fill: #a8d5d5; }
      `}</style>
    </defs>
    
    {/* Head with crown */}
    <circle cx="50" cy="30" r="16" className="krishna-fill" />
    
    {/* Crown points */}
    {[...Array(5)].map((_, i) => {
      const angle = (Math.PI / 2) + (i - 2) * (Math.PI / 4);
      const x = 50 + 20 * Math.cos(angle);
      const y = 15 + 10 * Math.sin(angle);
      return (
        <polygon
          key={i}
          points={`50,15 ${x - 3},${y + 3} ${x + 3},${y + 3}`}
          fill="#d4a5a5"
        />
      );
    })}
    
    {/* Body */}
    <ellipse cx="50" cy="60" rx="12" ry="18" className="krishna-fill" />
    
    {/* Arms curved */}
    <path d="M 38 45 Q 25 50 20 65" className="krishna-line" strokeLinecap="round" />
    <path d="M 62 45 Q 75 50 80 65" className="krishna-line" strokeLinecap="round" />
    
    {/* Flute suggestion */}
    <path d="M 15 60 Q 10 65 12 75" className="krishna-line" strokeLinecap="round" />
    
    {/* Legs */}
    <line x1="45" y1="78" x2="45" y2="95" className="krishna-line" strokeLinecap="round" />
    <line x1="55" y1="78" x2="55" y2="95" className="krishna-line" strokeLinecap="round" />
  </svg>
);
