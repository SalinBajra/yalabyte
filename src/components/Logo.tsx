import React from "react";

interface LogoProps {
  id?: string;
  className?: string;
  isDark?: boolean;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  id = "yalabyte-logo",
  className = "h-12",
  isDark = false,
  showText = true,
}) => {
  // Generate mathematically precise geodesic wireframe projection elements
  const pointsCount = 12;
  const cx = 100;
  const cy = 100;
  const rOut = 75;
  const rMid = 48;
  const rIn = 24;

  const getCoord = (angleDegrees: number, radius: number) => {
    // Offset standard angle by 15 degrees to match the dynamic rotated orientation in the brand mark
    const angleRad = ((angleDegrees + 15) * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(angleRad),
      y: cy + radius * Math.sin(angleRad),
    };
  };

  const linesList: React.ReactNode[] = [];
  const lineColor = isDark ? "rgba(241, 245, 249, 0.16)" : "rgba(15, 23, 42, 0.08)";
  const edgeColor = isDark ? "rgba(241, 245, 249, 0.22)" : "rgba(15, 23, 42, 0.12)";

  for (let i = 0; i < pointsCount; i++) {
    const angle1 = i * (360 / pointsCount);
    const angle2 = ((i + 1) % pointsCount) * (360 / pointsCount);
    
    const pOut1 = getCoord(angle1, rOut);
    const pOut2 = getCoord(angle2, rOut);
    const pMid1 = getCoord(angle1, rMid);
    const pMid2 = getCoord(angle2, rMid);
    const pIn1 = getCoord(angle1, rIn);
    const pIn2 = getCoord(angle2, rIn);

    // 1. Draw outer boundary dodecagon edges
    linesList.push(
      <line
        key={`out-edge-${i}`}
        x1={pOut1.x}
        y1={pOut1.y}
        x2={pOut2.x}
        y2={pOut2.y}
        stroke={edgeColor}
        strokeWidth="0.75"
      />
    );

    // 2. Draw middle ring edges
    linesList.push(
      <line
        key={`mid-edge-${i}`}
        x1={pMid1.x}
        y1={pMid1.y}
        x2={pMid2.x}
        y2={pMid2.y}
        stroke={lineColor}
        strokeWidth="0.5"
      />
    );

    // 3. Draw inner ring edges
    linesList.push(
      <line
        key={`in-edge-${i}`}
        x1={pIn1.x}
        y1={pIn1.y}
        x2={pIn2.x}
        y2={pIn2.y}
        stroke={lineColor}
        strokeWidth="0.5"
      />
    );

    // 4. Radial lines connecting center to outer vertices
    linesList.push(
      <line
        key={`radial-${i}`}
        x1={cx}
        y1={cy}
        x2={pOut1.x}
        y2={pOut1.y}
        stroke={lineColor}
        strokeWidth="0.5"
      />
    );

    // 5. Cross diagonal linkage to build triangular geodesic dome elements (outer-mid)
    linesList.push(
      <line
        key={`tri-out-mid-${i}`}
        x1={pMid1.x}
        y1={pMid1.y}
        x2={pOut2.x}
        y2={pOut2.y}
        stroke={lineColor}
        strokeWidth="0.5"
      />
    );

    // 6. Cross diagonal linkage to build triangular geodesic dome elements (mid-inner)
    linesList.push(
      <line
        key={`tri-mid-in-${i}`}
        x1={pIn1.x}
        y1={pIn1.y}
        x2={pMid2.x}
        y2={pMid2.y}
        stroke={lineColor}
        strokeWidth="0.5"
      />
    );
  }

  // Fill colors for custom stylized glyph paths
  const glyphFillColor = isDark ? "#E2E8F0" : "#2E3033";

  return (
    <div id={id} className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Geodesic Wireframe Sphere SVG Logo */}
      <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full absolute inset-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main outer boundary circle */}
          <circle
            cx="100"
            cy="100"
            r="75"
            stroke={edgeColor}
            strokeWidth="0.75"
            strokeDasharray="4 4"
          />

          {/* Core Geodesic mesh backdrop */}
          <g>{linesList}</g>

          {/* YALA: Highly stylized vector custom glyphs overlaid on the center of the mesh */}
          <g fill={glyphFillColor}>
            {/* Custom stylized 'Y' */}
            <path d="M 42,112 L 49.5,112 L 56,125.5 L 62.5,112 L 70,112 L 60.5,130 L 60.5,144 L 53.5,144 L 53.5,130 Z" transform="translate(0, -30)" />
            
            {/* Custom stylized 'A' (Lambda style, no crossbar, bold sharp slopes) */}
            <path d="M 68,144 L 81.5,112 L 95,144 L 87.5,144 L 81.5,129.5 L 75.5,144 Z" transform="translate(0, -30)" />
            
            {/* Custom stylized 'L' (Chunky vertical with flat bottom block border) */}
            <path d="M 99,112 L 106.5,112 L 106.5,136.5 L 119,136.5 L 119,144 L 99,144 Z" transform="translate(0, -30)" />
            
            {/* Custom stylized 'A' (Lambda style) */}
            <path d="M 124,144 L 137.5,112 L 151,144 L 143.5,144 L 137.5,129.5 L 131.5,144 Z" transform="translate(0, -30)" />
          </g>

          {/* BYTE text directly underneath YALA, beautifully sans-serif, spaced out and clean */}
          <text
            x="100"
            y="126"
            textAnchor="middle"
            fontFamily="font-sans, system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="12.5"
            letterSpacing="0.25em"
            fill={glyphFillColor}
            className="tracking-widest font-extrabold select-none"
          >
            BYTE
          </text>
        </svg>
      </div>

      {/* Main Logo Brand Title Text block beside the icon badge */}
      {showText && (
        <div className="flex flex-col text-left justify-center">
          <span
            className={`text-2xl font-extrabold tracking-tight font-sans transition-colors duration-200 ${
              isDark ? "text-white" : "text-[#0F1E36]"
            }`}
          >
            Yala<span className={isDark ? "text-blue-400" : "text-blue-600"}>Byte</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
