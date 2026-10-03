import React from "react";

const PAYMENT_OPTIONS = [
  {
    name: "PayPal",
    icon: (
      <svg viewBox="0 0 32 36" className="w-7 h-8 sm:w-8 sm:h-9" fill="none">
        <path
          d="M7.5 0h12.8c4.2 0 7.4.9 9.3 2.8 1.9 1.8 2.4 4.5 1.7 8.2-1 5.1-4.5 8.2-9.2 8.2h-3.8l-1.8 11.4H9l5.9-30.6H7.5z"
          fill="#003087"
        />
        <path
          d="M12.6 8.3h12.7c4.2 0 7.4.9 9.3 2.8 1.9 1.8 2.4 4.5 1.7 8.2-1 5.6-5 9-10.2 9h-5.3l-2 11.4H12.6l5.9-31.4z"
          fill="#0079C1"
        />
        <path
          d="M10.4 17.3h5.4l-2.3 14.1H8.9l2.6-14.1z"
          fill="#00457C"
          opacity="0.35"
        />
      </svg>
    ),
  },
  {
    name: "Stripe",
    icon: (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#635BFF] flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.83.5 6.643.5 2.457 3.82 2.457 8.847c0 5.474 4.518 7.218 8.913 8.847 2.443.91 3.284 1.54 3.284 2.518 0 .979-.893 1.492-2.39 1.492-2.585 0-5.478-1.171-7.23-2.181l-.916 5.618c1.996 1.05 5.093 1.879 8.243 1.879 6.46 0 10.793-3.235 10.793-8.497 0-5.385-4.402-7.14-9.178-8.873z" />
        </svg>
      </div>
    ),
  },
  {
    name: "Razorpay",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none">
        <path d="M12.6 1.5L4.5 13.8h6.8l-3.2 8.7L19 9.8h-7l2.8-8.3h-2.2z" fill="#0C2340" />
        <path d="M10.8 1.5L2.8 13.8h6.8l-3.2 8.7L17.2 9.8h-7L13 1.5h-2.2z" fill="#3395FF" />
      </svg>
    ),
  },
  {
    name: "Cash",
    icon: (
      <svg
        viewBox="0 0 36 24"
        className="w-8 h-6 sm:w-9 sm:h-7"
        fill="none"
        stroke="#16a34a"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="32" height="20" rx="4" />
        <circle cx="18" cy="12" r="3.5" />
        <path d="M6 7.5v.01M6 16.5v.01M30 7.5v.01M30 16.5v.01" />
      </svg>
    ),
  },
  {
    name: "Payment Link",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 sm:w-8 sm:h-8 text-[#6366F1]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

export function PaymentMethods() {
  return (
    <section className="py-20 sm:py-24 bg-[var(--bg)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--ink)] tracking-tight">
            So many ways to <span className="brand-gradient-text">pay!</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Multiple payment options to reduce drop-offs at checkout. We&apos;re adding more payment options soon!
          </p>
        </div>

        {/* Payment Icons Row */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
          {PAYMENT_OPTIONS.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Circle Icon Badge */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border border-slate-100/90 shadow-md shadow-slate-200/70 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:border-slate-200">
                {item.icon}
              </div>

              {/* Label */}
              <span className="mt-3.5 text-sm sm:text-base font-semibold text-slate-800 tracking-tight transition-colors group-hover:text-[var(--brand)]">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
