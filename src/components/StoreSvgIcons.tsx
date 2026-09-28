import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  accentColor?: string;
}

export function ShirtIcon({ className = "w-full h-full", accentColor = "var(--acc)", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 100 80" className={className} {...props}>
      <path
        d="M32 8L12 18l7 14 8-4v44h46V28l8 4 7-14L68 8c-3 8-9 12-18 12S35 16 32 8z"
        style={{ fill: accentColor }}
      />
      <path
        d="M32 8c3 8 9 12 18 12s15-4 18-12"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.55"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export function ToteIcon({ className = "w-full h-full", accentColor = "var(--acc)", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 100 80" className={className} {...props}>
      <path d="M28 30h44l5 46H23z" style={{ fill: accentColor }} />
      <path
        d="M38 30c0-18 24-18 24 0"
        fill="none"
        stroke={accentColor}
        strokeWidth="4"
      />
      <rect x="34" y="46" width="32" height="6" rx="3" fill="#ffffff" fillOpacity="0.5" />
    </svg>
  );
}

export function MugIcon({ className = "w-full h-full", accentColor = "var(--acc)", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 100 80" className={className} {...props}>
      <rect x="28" y="26" width="38" height="46" rx="7" style={{ fill: accentColor }} />
      <path
        d="M66 34h7a8 8 0 010 20h-7"
        fill="none"
        stroke={accentColor}
        strokeWidth="5"
      />
      <path
        d="M38 6c-5 6 5 8 0 14M52 6c-5 6 5 8 0 14"
        fill="none"
        stroke="#9a8fb0"
        strokeOpacity="0.6"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="34" y="38" width="26" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.5" />
    </svg>
  );
}

export function BeltIcon({ className = "w-full h-full", accentColor = "var(--acc)", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 100 80" className={className} {...props}>
      <rect x="6" y="32" width="88" height="16" rx="8" style={{ fill: accentColor }} />
      <rect
        x="40"
        y="24"
        width="20"
        height="32"
        rx="5"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.8"
        strokeWidth="4"
      />
      <g fill="#ffffff" fillOpacity="0.55">
        <circle cx="72" cy="40" r="2" />
        <circle cx="80" cy="40" r="2" />
        <circle cx="88" cy="40" r="2" />
      </g>
    </svg>
  );
}

export function ShoppingBagIcon({ className = "w-full h-full", accentColor = "var(--acc)", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} {...props}>
      <rect x="24" y="42" width="72" height="66" rx="12" fill="#ffffff" fillOpacity="0.92" />
      <path
        d="M44 50V38a16 16 0 0132 0v12"
        fill="none"
        stroke="#ffffff"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M60 62l5 10 11 1-8 8 2 11-10-6-10 6 2-11-8-8 11-1z"
        style={{ fill: accentColor }}
      />
      <g fill="#ffffff">
        <path d="M104 14l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" />
        <path d="M12 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fillOpacity="0.7" />
      </g>
    </svg>
  );
}

export function CloudPlatformIcon({ className = "w-full h-full", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 160 100" className={className} {...props}>
      <path
        d="M40 84a24 24 0 01-2-48 34 34 0 0166-6 28 28 0 0114 54z"
        fill="var(--brand)"
        fillOpacity="0.9"
      />
      <path d="M84 34L64 62h16l-6 22 24-32H82z" fill="#ffffff" />
      <circle cx="18" cy="24" r="4" fill="var(--brand2)" />
      <circle cx="146" cy="14" r="6" fill="var(--brand2)" fillOpacity="0.6" />
    </svg>
  );
}
