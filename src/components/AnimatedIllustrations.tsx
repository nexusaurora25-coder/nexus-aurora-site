import React from 'react';

interface Props {
  className?: string;
}

export const TargetIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" opacity="0.25">
      <animate attributeName="r" values="15;17;15" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="20" r="2" fill="currentColor">
      <animate attributeName="r" values="2;3;2" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <line x1="20" y1="1" x2="20" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="20" y1="33" x2="20" y2="39" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="1" y1="20" x2="7" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="33" y1="20" x2="39" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const TeamIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <circle cx="20" cy="11" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="20" cy="11" r="1.5" fill="currentColor" />
    <path d="M12 32 C12 25 15.5 21 20 21 C24.5 21 28 25 28 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="9" cy="15" r="3.5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <path d="M2 34 C2 28 5 25 9 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <circle cx="31" cy="15" r="3.5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <path d="M38 34 C38 28 35 25 31 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="0.5" opacity="0.15" strokeDasharray="3 3">
      <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="20s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export const GlobeIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="20" cy="20" rx="8" ry="16" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <ellipse cx="20" cy="20" rx="13" ry="16" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
    <line x1="4" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <line x1="4" y1="26" x2="36" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <circle cx="0" cy="0" r="2" fill="currentColor" opacity="0.8">
      <animateMotion dur="4s" repeatCount="indefinite" path="M20 4 A16 16 0 0 1 36 20 A16 16 0 0 1 20 36 A16 16 0 0 1 4 20 A16 16 0 0 1 20 4" />
    </circle>
  </svg>
);

export const PhoneIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <rect x="11" y="4" width="18" height="32" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <line x1="11" y1="9" x2="29" y2="9" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <line x1="11" y1="30" x2="29" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <circle cx="20" cy="33" r="1.5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <rect x="14" y="12" width="12" height="3" rx="1" fill="currentColor" opacity="0.3">
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
    </rect>
    <rect x="14" y="17" width="8" height="2" rx="1" fill="currentColor" opacity="0.2" />
    <rect x="14" y="21" width="12" height="2" rx="1" fill="currentColor" opacity="0.2" />
    <rect x="14" y="25" width="6" height="2" rx="1" fill="currentColor" opacity="0.2" />
    <circle cx="30" cy="8" r="3" fill="currentColor" opacity="0.7">
      <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.7;0.4;0.7" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export const CloudIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M10 26 C5 26 2 23 2 19 C2 15 5 12 9 12 C10 8 14 5 19 5 C25 5 29 9 30 13 C34 13 38 16 38 20 C38 24 35 26 31 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="16" y1="30" x2="16" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
      <animate attributeName="y1" values="30;28;30" dur="2s" repeatCount="indefinite" />
      <animate attributeName="y2" values="36;34;36" dur="2s" repeatCount="indefinite" />
    </line>
    <line x1="20" y1="28" x2="20" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
      <animate attributeName="y1" values="28;26;28" dur="2.5s" repeatCount="indefinite" />
      <animate attributeName="y2" values="38;36;38" dur="2.5s" repeatCount="indefinite" />
    </line>
    <line x1="24" y1="30" x2="24" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
      <animate attributeName="y1" values="30;28;30" dur="1.8s" repeatCount="indefinite" />
      <animate attributeName="y2" values="34;32;34" dur="1.8s" repeatCount="indefinite" />
    </line>
  </svg>
);

export const ServerIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <rect x="6" y="4" width="28" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="6" y="16" width="28" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="6" y="28" width="28" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="11" cy="9" r="1.5" fill="currentColor">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="11" cy="21" r="1.5" fill="currentColor">
      <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="11" cy="33" r="1.5" fill="currentColor">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
    </circle>
    <line x1="16" y1="9" x2="30" y2="9" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="16" y1="21" x2="30" y2="21" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="16" y1="33" x2="30" y2="33" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);

export const ShieldIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M20 3 L35 10 L35 22 C35 30 28 36 20 38 C12 36 5 30 5 22 L5 10 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M14 20 L18 24 L26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="19" y="8" width="2" height="24" fill="currentColor" opacity="0.08">
      <animate attributeName="y" values="8;28;8" dur="3s" repeatCount="indefinite" />
      <animate attributeName="height" values="24;4;24" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.08;0.2;0.08" dur="3s" repeatCount="indefinite" />
    </rect>
  </svg>
);

export const ClockIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="20" cy="20" r="1.5" fill="currentColor" />
    <line x1="20" y1="20" x2="20" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="8s" repeatCount="indefinite" />
    </line>
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
      <line
        key={deg}
        x1="20"
        y1="5"
        x2="20"
        y2={deg % 90 === 0 ? '8' : '6.5'}
        stroke="currentColor"
        strokeWidth={deg % 90 === 0 ? '1.5' : '1'}
        strokeLinecap="round"
        opacity={deg % 90 === 0 ? '0.8' : '0.4'}
        transform={`rotate(${deg} 20 20)`}
      />
    ))}
  </svg>
);

export const AwardIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <circle cx="20" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
    <path d="M20 8 L22 13 L27 13 L23 16.5 L24.5 22 L20 18.5 L15.5 22 L17 16.5 L13 13 L18 13 Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    <line x1="14" y1="28" x2="14" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="26" y1="28" x2="26" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="38" x2="20" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="26" y1="38" x2="20" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="20" cy="16" r="14" stroke="currentColor" strokeWidth="0.5" opacity="0.15">
      <animate attributeName="r" values="14;16;14" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.15;0.05;0.15" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export const HeartIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path
      d="M20 35 C8 26 3 18 3 13 C3 8 7 4 12 4 C15 4 18 6 20 9 C22 6 25 4 28 4 C33 4 37 8 37 13 C37 18 32 26 20 35Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.15"
    >
      <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="0.8s" repeatCount="indefinite" additive="sum" />
    </path>
    <path d="M5 20 L10 20 L13 14 L17 26 L21 18 L24 22 L27 20 L35 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite" />
    </path>
  </svg>
);

export const LightningIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M22 3 L10 22 L18 22 L16 37 L30 17 L22 17 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="0.5" opacity="0.15">
      <animate attributeName="r" values="16;18;16" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.15;0.05;0.15" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="0.5" opacity="0.1">
      <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" begin="0.3s" />
      <animate attributeName="opacity" values="0.1;0.03;0.1" dur="2s" repeatCount="indefinite" begin="0.3s" />
    </circle>
  </svg>
);

export const PinIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M20 38 C20 38 6 24 6 16 C6 8.3 12.3 2 20 2 C27.7 2 34 8.3 34 16 C34 24 20 38 20 38Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="20" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="20" cy="16" r="2" fill="currentColor" />
    <ellipse cx="20" cy="38" rx="6" ry="1.5" fill="currentColor" opacity="0.15">
      <animate attributeName="rx" values="6;8;6" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.15;0.05;0.15" dur="2s" repeatCount="indefinite" />
    </ellipse>
  </svg>
);

export const MailIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <rect x="3" y="8" width="34" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 11 L20 22 L37 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="33" cy="10" r="4" fill="currentColor" opacity="0.6">
      <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export const PhoneCallIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M8 6 C8 6 10 4 13 4 L16 10 C16 10 14 12 14 14 C14 16 18 22 22 26 C24 26 28 24 28 24 L34 27 C34 30 32 32 32 32 C28 36 18 34 10 26 C2 18 4 10 8 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M26 4 C30 4 34 8 34 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1.5s" repeatCount="indefinite" />
    </path>
    <path d="M26 9 C28.5 9 31 11.5 31 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.15;0.4" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
    </path>
  </svg>
);

export const CalendarIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <rect x="4" y="6" width="32" height="30" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <line x1="4" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="1.5" />
    <line x1="12" y1="3" x2="12" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="28" y1="3" x2="28" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="10" y="18" width="5" height="4" rx="1" fill="currentColor" opacity="0.2" />
    <rect x="17.5" y="18" width="5" height="4" rx="1" fill="currentColor" opacity="0.2" />
    <rect x="25" y="18" width="5" height="4" rx="1" fill="currentColor" opacity="0.2" />
    <rect x="10" y="25" width="5" height="4" rx="1" fill="currentColor" opacity="0.2" />
    <rect x="17.5" y="25" width="5" height="4" rx="1" rx-fill="currentColor" fill="currentColor" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <rect x="25" y="25" width="5" height="4" rx="1" fill="currentColor" opacity="0.2" />
  </svg>
);

export const CodeIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M14 12 L6 20 L14 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 12 L34 20 L26 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="23" y1="8" x2="17" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <rect x="18" y="19" width="2" height="4" fill="currentColor">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
    </rect>
  </svg>
);

export const DatabaseIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <ellipse cx="20" cy="10" rx="14" ry="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 10 L6 20 C6 23 12 25 20 25 C28 25 34 23 34 20 L34 10" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 20 L6 30 C6 33 12 35 20 35 C28 35 34 33 34 30 L34 20" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="20" cy="20" rx="14" ry="5" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
    <circle cx="12" cy="28" r="1.5" fill="currentColor" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="20" cy="30" r="1.5" fill="currentColor" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" begin="0.5s" />
    </circle>
    <circle cx="28" cy="28" r="1.5" fill="currentColor" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" begin="1s" />
    </circle>
  </svg>
);

export const MonitorIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <rect x="3" y="4" width="34" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="16" y1="28" x2="16" y2="34" stroke="currentColor" strokeWidth="1.5" />
    <line x1="24" y1="28" x2="24" y2="34" stroke="currentColor" strokeWidth="1.5" />
    <line x1="12" y1="34" x2="28" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <polyline points="8,20 12,14 16,18 20,10 24,16 28,12 32,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7">
      <animate attributeName="opacity" values="0.7;0.4;0.7" dur="3s" repeatCount="indefinite" />
    </polyline>
    <circle cx="32" cy="14" r="2" fill="currentColor" opacity="0.5">
      <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export const SearchIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <circle cx="18" cy="18" r="12" stroke="currentColor" strokeWidth="1.5" />
    <line x1="27" y1="27" x2="37" y2="37" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="10" y1="18" x2="26" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.3">
      <animate attributeName="y1" values="12;24;12" dur="3s" repeatCount="indefinite" />
      <animate attributeName="y2" values="12;24;12" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
    </line>
  </svg>
);

export const BugIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <ellipse cx="20" cy="22" rx="10" ry="12" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="20" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="11" r="1.5" fill="currentColor" />
    <circle cx="23" cy="11" r="1.5" fill="currentColor" />
    <line x1="10" y1="18" x2="4" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30" y1="18" x2="36" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="10" y1="24" x2="4" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30" y1="24" x2="36" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="10" y1="30" x2="6" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30" y1="30" x2="34" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="20" cy="22" r="14" stroke="currentColor" strokeWidth="0.5" opacity="0" strokeDasharray="4 4">
      <animate attributeName="opacity" values="0;0.3;0" dur="2s" repeatCount="indefinite" />
      <animateTransform attributeName="transform" type="rotate" from="0 20 22" to="360 20 22" dur="4s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export const FileCheckIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M8 4 L26 4 L34 12 L34 36 L8 36 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M26 4 L26 12 L34 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 22 L19 26 L27 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
    </path>
  </svg>
);

export const AlertIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M20 4 L37 34 L3 34 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <line x1="20" y1="16" x2="20" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="29" r="1.5" fill="currentColor" />
    <path d="M20 4 L37 34 L3 34 Z" stroke="currentColor" strokeWidth="0.5" opacity="0" fill="none">
      <animate attributeName="opacity" values="0;0.3;0" dur="2s" repeatCount="indefinite" />
      <animateTransform attributeName="transform" type="scale" values="1;1.08;1" dur="2s" repeatCount="indefinite" additive="sum" />
    </path>
  </svg>
);

export const LockIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <rect x="8" y="18" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13 18 L13 12 C13 8 16 4 20 4 C24 4 27 8 27 12 L27 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="20" cy="27" r="3" stroke="currentColor" strokeWidth="1.5" />
    <line x1="20" y1="30" x2="20" y2="33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="20" cy="27" r="5" stroke="currentColor" strokeWidth="0.5" opacity="0">
      <animate attributeName="opacity" values="0;0.4;0" dur="2s" repeatCount="indefinite" />
      <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export const EyeIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M3 20 C3 20 10 8 20 8 C30 8 37 20 37 20 C37 20 30 32 20 32 C10 32 3 20 3 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="20" cy="20" r="2.5" fill="currentColor">
      <animate attributeName="cx" values="20;22;20;18;20" dur="4s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export const LifeBuoyIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    {/* Headset band */}
    <path d="M8 20 C8 11.2 13.4 4 20 4 C26.6 4 32 11.2 32 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Left ear cup */}
    <rect x="4" y="18" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
    {/* Right ear cup */}
    <rect x="30" y="18" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
    {/* Mic arm */}
    <path d="M10 27 C10 32 14 34 20 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Mic capsule */}
    <circle cx="20" cy="35" r="2" stroke="currentColor" strokeWidth="1.5" />
    {/* Mic pulse ring */}
    <circle cx="20" cy="35" r="2" stroke="currentColor" strokeWidth="1" opacity="0">
      <animate attributeName="r" values="2;5;2" dur="1.8s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0;0.6" dur="1.8s" repeatCount="indefinite" />
    </circle>
    {/* Sound wave left */}
    <path d="M2 17 C2 13 4 10 4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0">
      <animate attributeName="opacity" values="0;0.6;0" dur="2s" repeatCount="indefinite" begin="0s" />
    </path>
    <path d="M0 19 C0 12 3 7 3 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0">
      <animate attributeName="opacity" values="0;0.4;0" dur="2s" repeatCount="indefinite" begin="0.2s" />
    </path>
    {/* Sound wave right */}
    <path d="M38 17 C38 13 36 10 36 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0">
      <animate attributeName="opacity" values="0;0.6;0" dur="2s" repeatCount="indefinite" begin="0.4s" />
    </path>
    <path d="M40 19 C40 12 37 7 37 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0">
      <animate attributeName="opacity" values="0;0.4;0" dur="2s" repeatCount="indefinite" begin="0.6s" />
    </path>
  </svg>
);

export const ChartIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <line x1="4" y1="36" x2="36" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="4" y1="4" x2="4" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <polyline points="8,28 14,22 20,26 26,14 32,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M8,28 L14,22 L20,26 L26,14 L32,8 L32,36 L8,36 Z" fill="currentColor" opacity="0.1" />
    <circle cx="32" cy="8" r="2.5" fill="currentColor" opacity="0.6">
      <animate attributeName="r" values="2.5;4;2.5" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export const StarIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M20 4 L24 15 L36 15 L26 22 L30 34 L20 26 L10 34 L14 22 L4 15 L16 15 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" />
    <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0">
      <animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="34" cy="6" r="0.8" fill="currentColor" opacity="0">
      <animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite" begin="1s" />
    </circle>
    <circle cx="36" cy="30" r="0.8" fill="currentColor" opacity="0">
      <animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite" begin="2s" />
    </circle>
  </svg>
);

export const SendIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M4 20 L36 6 L28 34 L20 22 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
    <line x1="20" y1="22" x2="36" y2="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 18 L6 20 L2 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0">
      <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
    </path>
  </svg>
);

export const ChatIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M4 8 L4 28 L12 28 L20 36 L20 28 L36 28 L36 8 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="13" cy="18" r="2" fill="currentColor" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="20" cy="18" r="2" fill="currentColor" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
    </circle>
    <circle cx="27" cy="18" r="2" fill="currentColor" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
    </circle>
  </svg>
);

export const NetworkIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="32" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="8" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="32" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" />
    <line x1="16" y1="17" x2="11" y2="11" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2">
      <animate attributeName="strokeDashoffset" values="0;-4" dur="1s" repeatCount="indefinite" />
    </line>
    <line x1="24" y1="17" x2="29" y2="11" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2">
      <animate attributeName="strokeDashoffset" values="0;-4" dur="1s" repeatCount="indefinite" begin="0.25s" />
    </line>
    <line x1="16" y1="23" x2="11" y2="29" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2">
      <animate attributeName="strokeDashoffset" values="0;-4" dur="1s" repeatCount="indefinite" begin="0.5s" />
    </line>
    <line x1="24" y1="23" x2="29" y2="29" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2">
      <animate attributeName="strokeDashoffset" values="0;-4" dur="1s" repeatCount="indefinite" begin="0.75s" />
    </line>
  </svg>
);

export const HardDriveIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <rect x="4" y="12" width="32" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <line x1="4" y1="24" x2="36" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <circle cx="31" cy="28" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="25" cy="28" r="2" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <rect x="8" y="16" width="24" height="4" rx="1" fill="currentColor" opacity="0.1" />
    <circle cx="9" cy="28" r="1" fill="currentColor">
      <animate attributeName="opacity" values="1;0.2;1" dur="0.5s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export const CartIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M4 6 L8 6 L14 28 L34 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 12 L36 12 L32 24 L14 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="34" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="30" cy="34" r="3" stroke="currentColor" strokeWidth="1.5" />
    <rect x="18" y="16" width="8" height="4" rx="1" fill="currentColor" opacity="0.3">
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
    </rect>
  </svg>
);

export const PaletteIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M20 4 C10 4 2 12 2 22 C2 28 6 34 14 34 C16 34 18 32 18 30 C18 28 16 26 18 24 C20 22 24 24 26 24 C34 24 38 18 38 12 C38 8 30 4 20 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="12" cy="16" r="2.5" fill="currentColor" opacity="0.4" />
    <circle cx="20" cy="12" r="2.5" fill="currentColor" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="28" cy="14" r="2.5" fill="currentColor" opacity="0.3" />
    <circle cx="12" cy="24" r="2.5" fill="currentColor" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.3;0.6" dur="3s" repeatCount="indefinite" begin="1s" />
    </circle>
  </svg>
);

export const CheckIllustration = ({ className = 'h-8 w-8' }: Props) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 20 L18 26 L28 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
    </path>
  </svg>
);

export const AnimatedDot = ({ className = 'h-4 w-4' }: Props) => (
  <span className={`${className} relative inline-flex`}>
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-30" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-current m-auto" />
  </span>
);
