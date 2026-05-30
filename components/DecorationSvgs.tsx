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

export const PeacockFeathers: React.FC<{ className?: string }> = ({ className = '' }) => {
  const SHRINK = 1.2; // full-size feather
  const IMG_WIDTH = 360;
  const IMG_HEIGHT = 280;

  return (
    <svg
      className={className}
      viewBox="0 0 360 420"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      width="360"
      height="420"
      aria-hidden="true"
    >
  
    {[
      { x: 56, y: 74, r: -10, s: 1, src: '/single-p-feather.png' },
      { x: 100, y: 180, r: 60, s: 1, src: '/single-p-feather.png' },
      { x: 100, y: 120, r: 30, s: 1, src: '/single-p-feather.png' },

    ].map((feather, index) => (
      
      <g
        key={index}
        transform={`translate(${feather.x} ${feather.y}) rotate(${feather.r}) scale(${feather.s * SHRINK})`}
      >
        <image
          href={feather.src}
          x={-IMG_WIDTH / 2}
          y={-IMG_HEIGHT / 2 + 30}
          width={IMG_WIDTH}
          height={IMG_HEIGHT}
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    ))}
    </svg>
  );
};

export const FlowerGarlands: React.FC<{ className?: string }> = ({ className = '' }) => (
  <img
    className={className}
    src="/straight-lotus-garland.png"
    alt=""
    aria-hidden="true"
  />
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
