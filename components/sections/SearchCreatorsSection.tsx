"use client";

import React, { useState, useEffect, useRef } from "react";

interface EyeOffset {
  x: number;
  y: number;
}

interface RowConfig {
  center: number;
  edge: number;
  r: number;
  count: number;
  skipCenter: number;
  eyeCols: number[];
  loupeCol?: number;
}

export function SearchCreatorsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pupilOffset, setPupilOffset] = useState<EyeOffset>({ x: 0, y: 0 });

  // Interactive pupil tracking towards mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.hypot(dx, dy) || 1;
      const maxOffset = 5.5;
      const move = Math.min(dist / 50, maxOffset);
      setPupilOffset({
        x: (dx / dist) * move,
        y: (dy / dist) * move,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Row configurations: Each row has an exact count of dots.
  // Eyes and Loupe are NOT randomly placed — they are specific dot indices within the row arrays.
  const rows: RowConfig[] = [
    // Row 0: Top-most tier, 17 dots
    { center: 125, edge: 45, r: 22, count: 17, skipCenter: 0, eyeCols: [] },

    // Row 1: Second tier, 17 dots. Col 7 is the Top-Center Eye (sitting at x=532.5, y=184.6)
    { center: 185, edge: 100, r: 24, count: 17, skipCenter: 0, eyeCols: [7] },

    // Row 2: Third tier, 17 dots.
    // Col 2 is the Left Eye (x=195, y=207.8)
    // Col 8 is the Central Magnifying Glass (x=600, y=250)
    // Col 14 is the Right Eye (x=1005, y=207.8)
    {
      center: 250,
      edge: 160,
      r: 25.5,
      count: 17,
      skipCenter: 0,
      eyeCols: [2, 14],
      loupeCol: 8,
    },

    // Row 3: Fourth tier, 17 dots. Center skipped for headline text
    {
      center: 320,
      edge: 225,
      r: 27,
      count: 17,
      skipCenter: 120,
      eyeCols: [],
    },

    // Row 4: Fifth tier, 17 dots. Center skipped for headline text
    {
      center: 395,
      edge: 295,
      r: 28.5,
      count: 17,
      skipCenter: 175,
      eyeCols: [],
    },

    // Row 5: Sixth tier, 17 dots. Center skipped for headline text
    {
      center: 475,
      edge: 370,
      r: 30,
      count: 17,
      skipCenter: 215,
      eyeCols: [],
    },
  ];

  const minX = 60;
  const maxX = 1140;

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden select-none min-h-0 md:min-h-[560px]"
      style={{
        background:
          "linear-gradient(to bottom, #356DFC 0%, #356DFC 55%, #4B7DFD 72%, #7CA4FF 86%, #BCD2FF 95%, #FAF8F5 100%)",
      }}
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <svg
          viewBox="0 0 1200 620"
          className="w-full h-auto block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Smooth background gradient matching the container */}
            <linearGradient id="bg-fade-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#356DFC" />
              <stop offset="55%" stopColor="#356DFC" />
              <stop offset="72%" stopColor="#4B7DFD" />
              <stop offset="86%" stopColor="#7CA4FF" />
              <stop offset="95%" stopColor="#BCD2FF" />
              <stop offset="100%" stopColor="#FAF8F5" />
            </linearGradient>
          </defs>

          {/* SVG Background with continuous gradient fade */}
          <rect width="1200" height="620" fill="url(#bg-fade-gradient)" />

          {/* Top concave canvas arch: Pure #FAF8F5 (matching BookACallSection background above) */}
          <path
            d="M 0,0 L 1200,0 L 1200,0 C 850,70 350,70 0,0 Z"
            fill="#FAF8F5"
          />

          {/* Render All Dots, Eyes, and Loupe strictly from the row definitions */}
          {rows.map((row, ri) => {
            const step = (maxX - minX) / (row.count - 1);

            return (
              <g key={`row-${ri}`}>
                {Array.from({ length: row.count }).map((_, col) => {
                  const x = minX + col * step;
                  const y =
                    row.center -
                    (row.center - row.edge) * Math.pow((x - 600) / 600, 2);

                  // If this column is the Loupe slot
                  if (row.loupeCol === col) {
                    return (
                      <g key={`loupe-${ri}-${col}`} transform={`translate(${x}, ${y})`}>
                        {/* Loupe Handle (angled at 45° down-right) */}
                        <rect
                          x={22}
                          y={22}
                          width={11}
                          height={28}
                          rx={5.5}
                          fill="#000000"
                          transform="rotate(-45 22 22)"
                        />
                        {/* Loupe Outer Ring */}
                        <circle
                          cx={0}
                          cy={0}
                          r={row.r + 9}
                          fill="#FFFFFF"
                          stroke="#000000"
                          strokeWidth={6}
                        />
                        {/* Loupe Glass Inner Tint */}
                        <circle cx={0} cy={0} r={row.r + 3} fill="#EFF5FF" />
                        {/* Glass Crescent Highlight */}
                        <path
                          d={`M -${row.r * 0.6},-${row.r * 0.3} A ${row.r * 0.75},${row.r * 0.75} 0 0,1 ${row.r * 0.55},-${row.r * 0.55}`}
                          stroke="#FFFFFF"
                          strokeWidth={3.5}
                          strokeLinecap="round"
                          fill="none"
                        />
                      </g>
                    );
                  }

                  // If this column is an Eye slot
                  if (row.eyeCols.includes(col)) {
                    return (
                      <g key={`eye-${ri}-${col}`} transform={`translate(${x}, ${y})`}>
                        {/* Eye Sclera: Exact same radius as surrounding row dots, with thick black border */}
                        <circle
                          cx={0}
                          cy={0}
                          r={row.r}
                          fill="#FFFFFF"
                          stroke="#000000"
                          strokeWidth={5}
                        />
                        {/* Pupil: Solid black tracking cursor */}
                        <circle
                          cx={pupilOffset.x}
                          cy={pupilOffset.y}
                          r={row.r * 0.32}
                          fill="#000000"
                        />
                        {/* Specular Glint: White highlight dot */}
                        <circle
                          cx={pupilOffset.x - row.r * 0.1}
                          cy={pupilOffset.y - row.r * 0.1}
                          r={row.r * 0.1}
                          fill="#FFFFFF"
                        />
                      </g>
                    );
                  }

                  // Skip central area for headline text in lower rows
                  if (row.skipCenter > 0 && Math.abs(x - 600) < row.skipCenter) {
                    return null;
                  }

                  // Standard Blue Circle Dot
                  return (
                    <circle
                      key={`dot-${ri}-${col}`}
                      cx={x}
                      cy={y}
                      r={row.r}
                      fill="#729CFF"
                    />
                  );
                })}
              </g>
            );
          })}

          {/* Centered High-End Editorial Typography */}
          <g id="headline-text" textAnchor="middle">
            <text
              x={600}
              y={445}
              fill="#FFFFFF"
              fontSize="48"
              fontWeight="bold"
              style={{ fontFamily: "var(--font-serif, 'DM Serif Display', Georgia, serif)" }}
              className="tracking-tight select-none"
            >
              Prime Pixel
            </text>
            <text
              x={600}
              y={495}
              fill="#FFFFFF"
              fontSize="42"
              fontWeight="bold"
              style={{ fontFamily: "var(--font-serif, 'DM Serif Display', Georgia, serif)" }}
              className="tracking-tight select-none"
            >
              Searching for creators...
            </text>
          </g>
        </svg>
      </div>
    </section>
  );
}
