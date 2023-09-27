import React from "react";

export default function CircularProgressBar({
  percentage,
  circleWidth,
  strokeWidth,
}: {
  percentage: number;
  circleWidth: number;
  strokeWidth: number;
}) {
  const radius = circleWidth / 2 - 15;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div className="drop-shadow-glow">
      <svg
        className=""
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="100%" stopColor="#7b2cbf" />
          </linearGradient>
        </defs>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={strokeWidth}
          r={radius}
          className="circle-background"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={strokeWidth}
          r={radius}
          className="circle-progress"
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          stroke="url(#gradient)"
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="circle-progress-text"
          fill="red"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
}
