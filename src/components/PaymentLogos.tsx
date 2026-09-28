import React from "react";

interface LogoProps {
  className?: string;
}

export function StripeLogo({ className = "h-5 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 60 25" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60 12.3c0-4.6-2.3-8.2-6.7-8.2-4.4 0-7.1 3.6-7.1 8.1 0 5.4 3.2 8.1 7.7 8.1 2.2 0 3.9-.5 5.1-1.3l-.8-2.6c-1 .6-2.3 1-3.9 1-2.1 0-3.9-.9-4.2-3.3h10c0-.5 0-1.3-.1-1.8zm-10.3-1.6c0-2.3 1.4-3.3 3.5-3.3 2 0 3.3 1 3.5 3.3h-7zm-7.6-6.6c-1.1-.5-2.6-.7-4.2-.7-4.4 0-7.3 2.3-7.3 6.2 0 6.1 8.4 5.1 8.4 7.8 0 1-.9 1.4-2.1 1.4-1.7 0-3.8-.7-5-1.5l-1 3c1.3.8 3.6 1.4 5.8 1.4 4.6 0 7.7-2.3 7.7-6.2 0-6.6-8.5-5.3-8.5-7.9 0-.8.7-1.3 1.9-1.3 1.4 0 3.2.5 4.3 1.1l1.1-3.3zm-16 1.4l-3.3.7v13.6h3.6V5.5zm-.3-3.6c0 1.2-1 2.2-2.2 2.2-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2zm-6.2 6.5c-.8-.5-2-.9-3.4-.9-3.2 0-5.4 2.2-5.4 5.7v7.5h3.6v-6.9c0-2.4 1.2-3.4 2.8-3.4.6 0 1.1.1 1.5.3l.9-2.3zm-11.7-6l-3.5.7v3.2H2.2v2.9h2.3v7.3c0 3.1 1.8 4.7 4.6 4.7 1.3 0 2.3-.3 2.9-.6l-.7-2.8c-.4.2-1 .4-1.7.4-1.3 0-2-.8-2-2.3v-6.7h3.7V8.4H7.6V1.8zm-7.6 17.5v-10h3.6v10H0zm1.8-12.7c-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2 0 1.2-1 2.2-2.2 2.2z"
        fill="#635BFF"
      />
    </svg>
  );
}

export function PaypalLogo({ className = "h-5 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 85 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.8 3.5h7.2c2.9 0 5 1.5 4.6 4.4-.5 3.3-3.1 5.2-6.1 5.2H12l-1.3 7.4H6.5l3.3-17z" fill="#003087" />
      <path d="M13.5 7.4h6.7c2.6 0 4.6 1.4 4.2 4-.4 3.1-2.8 4.8-5.6 4.8h-3.2L14.4 23h-4.2l3.3-15.6z" fill="#0079C1" />
      <path d="M12 11.4h3.6c2.8 0 4.9 1.4 4.5 4-.4 2.6-2.5 4.2-5 4.2h-2.1L12 23h-1.2l1.2-11.6z" fill="#00457C" opacity="0.4" />
      <text x="28" y="17" fill="#003087" className="dark:fill-slate-100" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="14" letterSpacing="-0.3">
        PayPal
      </text>
    </svg>
  );
}

export function VisaLogo({ className = "h-5 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 64 20" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.2 1.2L20.8 14.1l-2.3-11.4c-.4-1.5-1.6-2-3-2H8.3L8 1.3c3.2.7 6.4 2.5 8.3 4.9l7.1 12.6h4.5l6.8-17.6h-4.5z" fill="#1434CB" className="dark:fill-blue-400" />
      <path d="M37.1 1.2l-3.5 17.6h4.3l3.5-17.6h-4.3zm18.3 5.7c-.1-.7-.8-1.4-2.2-1.5-1.4-.1-2.7.3-3.6.8l.6-2.8c1.1-.4 2.6-.7 4.1-.7 4.2 0 7 2.2 7 5.4 0 4.2-5.7 4.5-5.7 6.4 0 .7.7 1.2 1.9 1.2 1.3 0 2.8-.4 3.7-.9l-.6 2.8c-1.1.5-2.7.8-4.4.8-4.6 0-7.2-2.3-7.2-5.4 0-4.3 5.8-4.7 5.8-6.6 0-.6-.5-1.1-1.8-1.1zm-24 5.9c.7-1.9 3.4-9.3 3.4-9.3s-.6 2.9-.9 4.3c-.6 3.1-2.5 5-2.5 5zm9.5 6l4-11c.2-.6.7-1.8 1.1-2.8l2.2 10.8c.2.9.5 2.1.7 3H40.9z" fill="#1434CB" className="dark:fill-blue-400" />
      <path d="M8 1.3L.1 1.4 0 1.9c6.1 1.5 10.1 5.3 11.8 9.9l-1.7-8.7c-.3-1.2-1.2-1.7-2.1-1.8z" fill="#F7B600" />
    </svg>
  );
}

export function MastercardLogo({ className = "h-5 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 68 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" fill="#EB001B" />
      <circle cx="23" cy="12" r="9" fill="#F79E1B" fillOpacity="0.94" />
      <path d="M17.5 5.5a8.9 8.9 0 0 1 3 6.5 8.9 8.9 0 0 1-3 6.5 8.9 8.9 0 0 1-3-6.5c0-2.5 1.1-4.8 3-6.5z" fill="#FF5F00" />
      <text x="35" y="16" fill="#1c1230" className="dark:fill-slate-100" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="10" letterSpacing="-0.2">
        mastercard
      </text>
    </svg>
  );
}

export function ApplePayLogo({ className = "h-5 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 54 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.2 12.3c0-2.8 2.3-4.2 2.4-4.3-1.3-1.9-3.3-2.2-4-2.2-1.7-.2-3.3 1-4.2 1-.9 0-2.2-1-3.6-1-1.8 0-3.6 1.1-4.5 2.8-1.9 3.4-.5 8.4 1.4 11.1.9 1.3 2 2.8 3.5 2.7 1.4-.1 1.9-.9 3.6-.9 1.6 0 2.1.9 3.5.9 1.5 0 2.4-1.3 3.3-2.6 1.1-1.5 1.5-3 1.5-3.1-.1 0-2.9-1.1-2.9-4.4zm-2.7-7.9c.7-.9 1.3-2.2 1.1-3.4-1.1.1-2.5.8-3.2 1.7-.7.8-1.3 2.1-1.1 3.3 1.3.1 2.5-.7 3.2-1.6zm8.8 14.8h3v-4.5h2.8c2.9 0 4.8-1.9 4.8-4.7s-1.9-4.7-4.8-4.7h-5.8v13.9zm3-7.2v-4h2.7c1.4 0 2.2.8 2.2 2s-.8 2-2.2 2h-2.7zm9.4 7.2h3v-8.8h-3v8.8zm-.1-11.4h3.1V5.2h-3.1v2.6zm6.8 14.8l3.6-7.8h-3.3l-1.9 4.9-1.9-4.9h-3.3l3.6 7.7-2.6 5.8h3.2l2.3-5.7z" />
    </svg>
  );
}

export function GooglePayLogo({ className = "h-5 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 68 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.8 12.3c0-.8-.1-1.6-.2-2.3H1v4.4h6.6c-.3 1.5-1.1 2.8-2.4 3.7v3h3.8c2.2-2 3.8-5 3.8-8.8z"
        fill="#4285F4"
      />
      <path
        d="M1 21.1c3.2 0 5.8-1 7.7-2.9l-3.8-3c-1 .7-2.4 1.1-3.9 1.1-3 0-5.5-2-6.4-4.8l-3.9 3c1.9 3.8 5.8 6.6 10.3 6.6z"
        fill="#34A853"
      />
      <path
        d="M-5.4 11.5c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3l-3.9-3c-.8 1.6-1.3 3.4-1.3 5.3 0 1.9.5 3.7 1.3 5.3l3.9-3z"
        fill="#FBBC05"
      />
      <path
        d="M1 4.7c1.7 0 3.3.6 4.5 1.8l3.4-3.4C6.8 1.2 4.1.3 1 .3 -3.5.3 -7.4 3.1 -9.3 6.9l3.9 3C-4.5 7.1 -2 4.7 1 4.7z"
        fill="#EA4335"
      />
      <text x="18" y="17" fill="currentColor" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="14" letterSpacing="-0.2">
        Pay
      </text>
    </svg>
  );
}

export function RazorpayLogo({ className = "h-5 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 94 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6 1.5L4.5 13.8h6.8l-3.2 8.7L19 9.8h-7l2.8-8.3h-2.2z" fill="#0C2340" className="dark:fill-sky-400" />
      <path d="M10.8 1.5L2.8 13.8h6.8l-3.2 8.7L17.2 9.8h-7L13 1.5h-2.2z" fill="#3395FF" />
      <text x="24" y="17" fill="#0C2340" className="dark:fill-slate-100" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="13" letterSpacing="-0.3">
        Razorpay
      </text>
    </svg>
  );
}

export function UpiLogo({ className = "h-5 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 60 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4 3L2 12l8.4 9h4.2L6.2 12 14.6 3h-4.2z" fill="#0f8538" />
      <path d="M16.8 3L8.4 12l8.4 9h4.2L12.6 12 21 3h-4.2z" fill="#ed7524" />
      <text x="24" y="17" fill="#1c1230" className="dark:fill-slate-100" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="14" letterSpacing="0.5">
        UPI
      </text>
    </svg>
  );
}

export function CashOnDeliveryLogo({ className = "h-5 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 94 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="3.5" width="22" height="15" rx="3" stroke="#059669" strokeWidth="1.8" fill="#10B981" fillOpacity="0.15" />
      <circle cx="12" cy="11" r="3" stroke="#059669" strokeWidth="1.5" />
      <path d="M4 6.5h1.5M18.5 15.5H20" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" />
      <text x="27" y="15.5" fill="#047857" className="dark:fill-emerald-400" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="11" letterSpacing="-0.2">
        Cash on Delivery
      </text>
    </svg>
  );
}
