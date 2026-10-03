"use client";

import React from "react";

function PaypalCircleIcon() {
  return (
    <svg
      viewBox="0 0 36 36"
      className="w-8 h-8 sm:w-9 sm:h-9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 5.5h10c4 0 7 2 6.5 6-.7 4.7-4.3 7.3-8.5 7.3H15.5l-1.8 10.5H7.8l4.7-23.8z"
        fill="#003087"
      />
      <path
        d="M17.5 11h9.3c3.6 0 6.4 2 5.8 5.6-.6 4.3-3.9 6.7-7.8 6.7h-4.5l-1.7 9.5H13l4.5-21.8z"
        fill="#0079C1"
      />
      <path
        d="M15.5 16.5h5c3.8 0 6.8 2 6.3 5.6-.5 3.6-3.5 5.8-7 5.8h-3l-1.7 9.3h-1.8l2.2-20.7z"
        fill="#00457C"
        opacity="0.35"
      />
    </svg>
  );
}

function StripeCircleIcon() {
  return (
    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#635BFF] flex items-center justify-center shadow-xs">
      <svg
        viewBox="0 0 28 28"
        className="w-6 h-6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 5.5L22 3.5L20 23L4 25L6 5.5ZM10 10.5L17.5 9.5L16.5 18.5L9 19.5L10 10.5Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function RazorpayCircleIcon() {
  return (
    <svg
      viewBox="0 0 36 36"
      className="w-8 h-8 sm:w-9 sm:h-9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 17.5L11 30.5h8l3.6-8 5.4-5H17z"
        fill="#0C2340"
      />
      <path
        d="M20.5 5.5L7.5 23h10.5l4.8-10.5 7.7-7H20.5z"
        fill="#3395FF"
      />
    </svg>
  );
}

function CashCircleIcon() {
  return (
    <svg
      viewBox="0 0 38 28"
      className="w-9 h-auto sm:w-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.8"
        y="1.8"
        width="34.4"
        height="24.4"
        rx="5"
        stroke="#108A00"
        strokeWidth="2.6"
        fill="none"
      />
      <circle
        cx="19"
        cy="14"
        r="5.5"
        stroke="#108A00"
        strokeWidth="2.4"
        fill="none"
      />
      <circle cx="19" cy="14" r="1.6" fill="#108A00" />
      <line
        x1="6"
        y1="14"
        x2="9.5"
        y2="14"
        stroke="#108A00"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <line
        x1="28.5"
        y1="14"
        x2="32"
        y2="14"
        stroke="#108A00"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PaymentLinkCircleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-7 h-7 sm:w-8 sm:h-8 text-[#6366F1]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

const PAYMENT_METHODS = [
  {
    name: "PayPal",
    icon: <PaypalCircleIcon />,
  },
  {
    name: "Stripe",
    icon: <StripeCircleIcon />,
  },
  {
    name: "Razorpay",
    icon: <RazorpayCircleIcon />,
  },
  {
    name: "Cash",
    icon: <CashCircleIcon />,
  },
  {
    name: "Payment Link",
    icon: <PaymentLinkCircleIcon />,
  },
];

export function PaymentMarquee() {
  return (
    <section className="py-20 md:py-24 bg-[var(--surface)] border-y border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Section Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-5xl font-extrabold text-[var(--ink)] tracking-tight">
          So many ways to <span className="text-[#108A00] font-black">pay!</span>
        </h2>

        {/* Section Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
          Multiple payment options to reduce drop-offs at checkout. We&apos;re adding more payment
          options soon!
        </p>

        {/* 5 Circular Payment Icons with Labels */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14">
          {PAYMENT_METHODS.map((method) => (
            <div
              key={method.name}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Circular Card */}
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white dark:bg-[#23193d] border border-gray-100 dark:border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.06)] dark:shadow-none flex items-center justify-center group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_35px_rgba(0,0,0,0.12)] transition-all duration-300">
                {method.icon}
              </div>

              {/* Label */}
              <span className="mt-3.5 text-sm sm:text-base font-semibold text-[var(--ink)] group-hover:text-[var(--brand)] transition-colors">
                {method.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
