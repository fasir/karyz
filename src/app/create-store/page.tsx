"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Store,
  Globe,
  ShoppingBag,
  CreditCard,
  Rocket,
  Check,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

interface FormData {
  // Step 1: Store Basics
  storeName: string;
  description: string;
  currency: string;
  // Step 2: Branding & Domain
  subdomain: string;
  themeColor: string;
  tagline: string;
  // Step 3: First Product
  productType: string;
  productName: string;
  productPrice: string;
  productQty: string;
  // Step 4: Payments & Contact
  enableStripe: boolean;
  enablePaypal: boolean;
  enableRazorpay: boolean;
  enableCod: boolean;
  contactEmail: string;
  whatsappNumber: string;
}

const PET_ACCESSORY_TYPES = [
  "Collars & Leashes",
  "Harnesses",
  "Toys & Enrichment",
  "Beds & Blankets",
  "Bowls & Feeders",
  "Grooming Accessories",
  "Travel Accessories",
  "Pet Apparel",
  "Other Pet Accessories",
];

const THEME_COLORS = [
  { name: "Royal Purple", value: "#6C47FF" },
  { name: "Emerald Green", value: "#10B981" },
  { name: "Midnight Navy", value: "#1E293B" },
  { name: "Sunset Coral", value: "#F43F5E" },
  { name: "Electric Amber", value: "#F59E0B" },
  { name: "Ocean Teal", value: "#06B6D4" },
];

export default function CreateStorePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stepError, setStepError] = useState("");

  const [formData, setFormData] = useState<FormData>({
    storeName: "",
    description: "",
    currency: "USD ($)",
    subdomain: "",
    themeColor: "#4b1d8f",
    tagline: "",
    productType: PET_ACCESSORY_TYPES[0],
    productName: "",
    productPrice: "",
    productQty: "0",
    enableStripe: false,
    enablePaypal: false,
    enableRazorpay: false,
    enableCod: false,
    contactEmail: "",
    whatsappNumber: "",
  });

  const updateForm = (fields: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const handleStoreNameChange = (name: string) => {
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "")
      .slice(0, 20);
    updateForm({
      storeName: name,
      subdomain: slug,
    });
  };

  const steps = [
    { num: 1, label: "Store Details", icon: Store },
    { num: 2, label: "Branding", icon: Globe },
    { num: 3, label: "First Product", icon: ShoppingBag },
    { num: 4, label: "Payments", icon: CreditCard },
  ];

  const handleNext = () => {
    if (currentStep === 1 && !formData.storeName.trim()) {
      setStepError("Enter a name for your store to continue.");
      return;
    }
    if (currentStep === 2 && !formData.subdomain.trim()) {
      setStepError("Choose a store address to continue.");
      return;
    }
    if (
      currentStep === 3 &&
      (!formData.productName.trim() || Number(formData.productPrice) <= 0)
    ) {
      setStepError("Add a product name and a price greater than zero.");
      return;
    }
    if (
      currentStep === 4 &&
      (!/^\S+@\S+\.\S+$/.test(formData.contactEmail) ||
        ![formData.enableStripe, formData.enablePaypal, formData.enableRazorpay, formData.enableCod].some(Boolean))
    ) {
      setStepError("Enter a valid contact email and select at least one payment option.");
      return;
    }

    setStepError("");
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setCurrentStep(5); // Success step
      }, 1000);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setStepError("");
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] flex flex-col selection:bg-[var(--brand)] selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--line)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-9 w-28 sm:w-32 flex items-center">
              <Image
                src="/logo.png"
                alt="Karyz Logo"
                width={130}
                height={36}
                priority
                className="object-contain filter group-hover:brightness-105 transition-all"
              />
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs font-semibold text-[var(--muted)]">
              {currentStep <= 4 ? `Step ${currentStep} of 4` : "Complete"}
            </span>
            <Link
              href="/"
              className="text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full border border-[var(--line)] hover:bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
            >
              Exit to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-8 md:py-12">
        {currentStep <= 4 ? (
          <div>
            {/* Step Wizard Bar */}
            <div className="mb-10 max-w-2xl mx-auto">
              <div className="flex items-center justify-between relative">
                {/* Connecting Line */}
                <div className="absolute left-6 right-6 top-5 h-0.5 bg-slate-200 dark:bg-slate-800 -z-0" />
                <div
                  className="absolute left-6 top-5 h-0.5 bg-gradient-to-r from-[var(--brand)] to-[var(--brand2)] -z-0 transition-all duration-500"
                  style={{
                    width: `${((currentStep - 1) / (steps.length - 1)) * 90}%`,
                  }}
                />

                {steps.map((s) => {
                  const Icon = s.icon;
                  const isDone = currentStep > s.num;
                  const isCurrent = currentStep === s.num;

                  return (
                    <div
                      key={s.num}
                      className="flex flex-col items-center gap-2 relative z-10 cursor-pointer"
                      onClick={() => s.num < currentStep && setCurrentStep(s.num)}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm ${
                          isDone
                            ? "bg-emerald-500 text-white shadow-emerald-500/20"
                            : isCurrent
                            ? "bg-gradient-to-r from-[var(--brand)] to-[var(--brand2)] text-white shadow-purple-500/30 ring-4 ring-[var(--brand)]/15 scale-105"
                            : "bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"
                        }`}
                      >
                        {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : <Icon className="w-4 h-4" />}
                      </div>
                      <span
                        className={`text-xs font-semibold hidden sm:block ${
                          isCurrent
                            ? "text-[var(--brand)]"
                            : isDone
                            ? "text-slate-700 dark:text-slate-300"
                            : "text-[var(--muted)]"
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Layout: Form on Left + Live Preview on Right */}
            <div className="grid grid-cols-1 gap-8 items-start">
              {/* Form Card (7 cols) */}
              <div className="max-w-2xl w-full mx-auto bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-6 sm:p-8 shadow-sm">
                {/* ── STEP 1: STORE DETAILS ── */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <div>
                        <span className="text-xs font-semibold text-[var(--brand)] uppercase tracking-wider">
                          Step 1 of 4
                        </span>
                        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--ink)] mt-1">
                          Set up your store
                        </h1>
                        <p className="text-sm text-[var(--muted)] mt-1">
                          Create a home for thoughtful essentials for pets and the people who love them.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div>
                        <label className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-2">
                          Store Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.storeName}
                          onChange={(e) => handleStoreNameChange(e.target.value)}
                          placeholder="e.g. Paws & Co. or The Wagging Tail"
                          className="w-full px-4 py-3 rounded-2xl bg-[var(--bg)] border border-[var(--line)] focus:outline-none focus:border-[var(--brand)] focus:ring-3 focus:ring-[var(--brand)]/10 text-sm font-medium transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-2">
                            Store type
                          </label>
                          <div className="w-full px-4 py-3 rounded-2xl bg-[var(--tint)] border border-[var(--line)] text-sm font-semibold text-[var(--ink)]">
                            Pet Accessories
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-2">
                            Store Currency
                          </label>
                          <select
                            value={formData.currency}
                            onChange={(e) => updateForm({ currency: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl bg-[var(--bg)] border border-[var(--line)] focus:outline-none focus:border-[var(--brand)] text-sm font-medium transition-all"
                          >
                            <option value="USD ($)">USD ($)</option>
                            <option value="EUR (€)">EUR (€)</option>
                            <option value="GBP (£)">GBP (£)</option>
                            <option value="INR (₹)">INR (₹)</option>
                            <option value="CAD ($)">CAD ($)</option>
                            <option value="AUD ($)">AUD ($)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-2">
                          Store description
                        </label>
                        <textarea
                          rows={3}
                          value={formData.description}
                          onChange={(e) => updateForm({ description: e.target.value })}
                          placeholder="Tell pet parents what makes your accessories special..."
                          className="w-full px-4 py-3 rounded-2xl bg-[var(--bg)] border border-[var(--line)] focus:outline-none focus:border-[var(--brand)] focus:ring-3 focus:ring-[var(--brand)]/10 text-sm font-medium transition-all resize-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 2: BRANDING & DOMAIN ── */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-semibold text-[var(--brand)] uppercase tracking-wider">
                        Step 2 of 4
                      </span>
                      <h1 className="text-2xl sm:text-3xl font-bold text-[var(--ink)] mt-1">
                        Brand identity &amp; URL
                      </h1>
                      <p className="text-sm text-[var(--muted)] mt-1">
                        Choose a web address and a color for your storefront.
                      </p>
                    </div>

                    <div className="space-y-5 pt-2">
                      <div>
                        <label className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-2">
                          Free Store Domain
                        </label>
                        <div className="flex items-center rounded-2xl bg-[var(--bg)] border border-[var(--line)] focus-within:border-[var(--brand)] focus-within:ring-3 focus-within:ring-[var(--brand)]/10 px-4 py-1.5 transition-all">
                          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mr-2 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                            https://
                          </span>
                          <input
                            type="text"
                            value={formData.subdomain}
                            onChange={(e) =>
                              updateForm({
                                subdomain: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""),
                              })
                            }
                            placeholder="yourbrand"
                            className="flex-1 bg-transparent py-2 text-sm font-semibold focus:outline-none text-[var(--ink)]"
                          />
                          <span className="text-xs font-semibold text-[var(--brand)]">.store.link</span>
                        </div>
                        <p className="text-[11px] text-[var(--muted)] mt-1.5">
                          ✓ Free SSL certificate included. You can connect custom domains anytime.
                        </p>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-2">
                          Catchy Tagline
                        </label>
                        <input
                          type="text"
                          value={formData.tagline}
                          onChange={(e) => updateForm({ tagline: e.target.value })}
                          placeholder="e.g. Better walks, happier tails"
                          className="w-full px-4 py-3 rounded-2xl bg-[var(--bg)] border border-[var(--line)] focus:outline-none focus:border-[var(--brand)] focus:ring-3 focus:ring-[var(--brand)]/10 text-sm font-medium transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-3">
                          Brand Theme Accent
                        </label>
                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                          {THEME_COLORS.map((t) => (
                            <button
                              key={t.value}
                              type="button"
                              onClick={() => updateForm({ themeColor: t.value })}
                              className={`flex flex-col items-center gap-1.5 p-2 rounded-2xl border transition-all ${
                                formData.themeColor === t.value
                                  ? "border-[var(--brand)] bg-[var(--tint)] ring-2 ring-[var(--brand)]/20 shadow-xs"
                                  : "border-[var(--line)] hover:border-slate-300 dark:hover:border-slate-700"
                              }`}
                            >
                              <span
                                className="w-8 h-8 rounded-full shadow-inner flex items-center justify-center text-white text-xs font-bold"
                                style={{ backgroundColor: t.value }}
                              >
                                {formData.themeColor === t.value && <Check className="w-4 h-4 stroke-[3]" />}
                              </span>
                              <span className="text-[10px] font-medium text-[var(--muted)] text-center leading-tight">
                                {t.name}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 3: FIRST PRODUCT ── */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-semibold text-[var(--brand)] uppercase tracking-wider">
                        Step 3 of 4
                      </span>
                      <h1 className="text-2xl sm:text-3xl font-bold text-[var(--ink)] mt-1">
                        Add your first pet accessory
                      </h1>
                      <p className="text-sm text-[var(--muted)] mt-1">
                        Start with a collar, toy, bed, or another everyday pet essential.
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div>
                        <label className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-2">
                          Product type
                        </label>
                        <select
                          value={formData.productType}
                          onChange={(e) => updateForm({ productType: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-[var(--bg)] border border-[var(--line)] focus:outline-none focus:border-[var(--brand)] text-sm font-medium transition-all"
                        >
                          {PET_ACCESSORY_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-2">
                          Product name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.productName}
                          onChange={(e) => updateForm({ productName: e.target.value })}
                          placeholder="e.g. Adjustable walking harness"
                          className="w-full px-4 py-3 rounded-2xl bg-[var(--bg)] border border-[var(--line)] focus:outline-none focus:border-[var(--brand)] focus:ring-3 focus:ring-[var(--brand)]/10 text-sm font-medium transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-2">
                            Price ({formData.currency.split(" ")[0]})
                          </label>
                          <div className="relative">
                            <input
                              type="number"
                              step="0.01"
                              value={formData.productPrice}
                              onChange={(e) => updateForm({ productPrice: e.target.value })}
                              placeholder="24.00"
                              className="w-full px-4 py-3 rounded-2xl bg-[var(--bg)] border border-[var(--line)] focus:outline-none focus:border-[var(--brand)] text-sm font-medium transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-2">
                            Stock quantity
                          </label>
                          <input
                            type="number"
                            value={formData.productQty}
                            onChange={(e) => updateForm({ productQty: e.target.value })}
                            placeholder="20"
                            className="w-full px-4 py-3 rounded-2xl bg-[var(--bg)] border border-[var(--line)] focus:outline-none focus:border-[var(--brand)] text-sm font-medium transition-all"
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* ── STEP 4: PAYMENTS & LAUNCH ── */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-semibold text-[var(--brand)] uppercase tracking-wider">
                        Step 4 of 4
                      </span>
                      <h1 className="text-2xl sm:text-3xl font-bold text-[var(--ink)] mt-1">
                        Connect payments &amp; contact
                      </h1>
                      <p className="text-sm text-[var(--muted)] mt-1">
                        Add your shop contact and choose how pet parents can pay.
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <label className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                        Accepted Payment Options
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          {
                            key: "enableStripe",
                            label: "Stripe & Cards",
                            desc: "Visa, Mastercard, Apple Pay",
                            checked: formData.enableStripe,
                          },
                          {
                            key: "enablePaypal",
                            label: "PayPal",
                            desc: "Global one-click wallet",
                            checked: formData.enablePaypal,
                          },
                          {
                            key: "enableRazorpay",
                            label: "Razorpay / UPI",
                            desc: "Instant bank & QR code payments",
                            checked: formData.enableRazorpay,
                          },
                          {
                            key: "enableCod",
                            label: "Cash on Delivery",
                            desc: "Pay when the order arrives",
                            checked: formData.enableCod,
                          },
                        ].map((m) => (
                          <div
                            key={m.key}
                            onClick={() =>
                              updateForm({ [m.key]: !formData[m.key as keyof FormData] })
                            }
                            className={`p-3.5 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                              m.checked
                                ? "border-[var(--brand)] bg-[var(--tint)]"
                                : "border-[var(--line)] bg-[var(--bg)] opacity-70"
                            }`}
                          >
                            <div>
                              <p className="text-xs font-bold text-[var(--ink)]">{m.label}</p>
                              <p className="text-[11px] text-[var(--muted)]">{m.desc}</p>
                            </div>
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                                m.checked
                                  ? "bg-[var(--brand)] text-white shadow-2xs"
                                  : "border border-slate-300 dark:border-slate-600"
                              }`}
                            >
                              {m.checked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                          <label className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-2">
                            Shop / Orders Email
                          </label>
                          <input
                            type="email"
                            value={formData.contactEmail}
                            onChange={(e) => updateForm({ contactEmail: e.target.value })}
                            placeholder="hello@yourpetshop.com"
                            className="w-full px-4 py-3 rounded-2xl bg-[var(--bg)] border border-[var(--line)] focus:outline-none focus:border-[var(--brand)] text-sm font-medium transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-2">
                            WhatsApp for Order Alerts
                          </label>
                          <input
                            type="text"
                            value={formData.whatsappNumber}
                            onChange={(e) => updateForm({ whatsappNumber: e.target.value })}
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-3 rounded-2xl bg-[var(--bg)] border border-[var(--line)] focus:outline-none focus:border-[var(--brand)] text-sm font-medium transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {stepError && (
                  <p role="alert" className="mt-6 text-sm font-medium text-rose-600">
                    {stepError}
                  </p>
                )}

                {/* Form Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--line)]">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[var(--line)] text-xs sm:text-sm font-semibold text-[var(--ink)] hover:bg-[var(--bg)] transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand2)] text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-purple-500/25 hover:opacity-95 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Creating Your Store...</span>
                      </>
                    ) : currentStep === 4 ? (
                      <>
                        <Rocket className="w-4 h-4" />
                        <span>Launch Store Now</span>
                      </>
                    ) : (
                      <>
                        <span>Continue</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* ── STEP 5: CELEBRATION / STORE LAUNCHED SUCCESS ── */
          <div className="max-w-2xl mx-auto text-center py-10">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/25 animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-400/40 px-3.5 py-1 rounded-full">
              Store setup complete
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--ink)] mt-4 tracking-tight">
              <span className="brand-gradient-text">{formData.storeName}</span>
              <br />is ready for its next step.
            </h1>

            <p className="mt-3 text-sm sm:text-base text-[var(--muted)] max-w-lg mx-auto leading-relaxed">
              Your pet-accessories shop details are ready. Connect your account to save your setup and publish it to pet parents.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand2)] text-white text-sm font-bold shadow-lg hover:opacity-95 active:scale-95 transition-all"
              >
                <span>Back to homepage</span>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
