"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  ExternalLink,
  Building2,
  Calendar,
  Target,
} from "lucide-react";

export default function Home() {
  // Interactive Practice Opportunity Calculator
  const [currentProduction, setCurrentProduction] = useState<number>(85000);
  const [selectedFocus, setSelectedFocus] = useState<string>("scheduling");

  const focusAreas: Record<string, { title: string; liftPct: number; description: string }> = {
    scheduling: {
      title: "Scheduling to Goal & Patient Flow",
      liftPct: 0.18,
      description: "Eliminating unfilled hygiene blocks, protecting doctor chair time, and reducing daily schedule chaos.",
    },
    acceptance: {
      title: "Treatment Case Acceptance",
      liftPct: 0.22,
      description: "Coaching clinical teams on ethical patient communication that converts diagnosed care into scheduled appointments.",
    },
    acquisition: {
      title: "Patient Acquisition & Positioning",
      liftPct: 0.16,
      description: "Strengthening digital positioning, online reputation, and front-desk inquiry-to-appointment conversion.",
    },
    operations: {
      title: "Office Manager Coaching & Team Systems",
      liftPct: 0.15,
      description: "Developing confident office leadership, standardized morning huddles, and consistent collection protocols.",
    },
  };

  const currentArea = focusAreas[selectedFocus];
  const estimatedMonthlyLift = Math.round(currentProduction * currentArea.liftPct);
  const projectedMonthlyTotal = currentProduction + estimatedMonthlyLift;
  const projectedAnnualExpansion = estimatedMonthlyLift * 12;

  return (
    <div className="min-h-screen bg-[#fbfcfd] text-[#0f172a] font-sans antialiased overflow-x-hidden">
      {/* ── TOP ANNOUNCEMENT STRIP ── */}
      <div className="bg-[#0b1329] text-slate-300 py-3 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
          <span>Senior Dental Business Strategy Advisor · El Dorado Hills, CA</span>
          <div className="flex items-center gap-6">
            <span>Remote and hybrid advisory engagements</span>
            <a
              href="tel:4083907283"
              className="text-amber-300 hover:text-white font-medium flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> (408) 390-7283
            </a>
          </div>
        </div>
      </div>

      {/* ── HEADER NAVIGATION ── */}
      <header className="bg-white py-6 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="w-10 h-10 rounded bg-[#0b1329] text-white flex items-center justify-center font-serif text-lg font-bold">
              RL
            </span>
            <div>
              <span className="block font-serif text-xl font-bold tracking-tight text-[#0b1329]">
                Randall LaFrom, DDS
              </span>
              <span className="block text-sm text-slate-600">
                Dental Business Strategy Advisor
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#about" className="hover:text-blue-900 transition-colors">About</a>
            <a href="#track-record" className="hover:text-blue-900 transition-colors">Track Record</a>
            <a href="#calculator" className="hover:text-blue-900 transition-colors font-semibold text-blue-900">Growth Calculator</a>
            <a href="#services" className="hover:text-blue-900 transition-colors">Advisory Framework</a>
            <a href="#book" className="hover:text-blue-900 transition-colors">Author</a>
            <a href="#experience" className="hover:text-blue-900 transition-colors">Career History</a>
            <a href="#contact" className="hover:text-blue-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/randylafrom/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-700 hover:text-blue-900 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="bg-[#0b1329] hover:bg-blue-900 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
            >
              Consultation
            </a>
          </div>
        </div>
      </header>

      {/* ── 1. HERO SECTION (DOMINANT FOCAL POINT) ── */}
      <section className="bg-slate-100 py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0b1329] leading-none tracking-tight animate-reveal">
                Randall LaFrom, DDS
              </h1>

              <p className="font-serif text-2xl sm:text-3xl text-blue-900 leading-snug animate-reveal-delay">
                Clinical Credibility. Measurable Practice Growth.
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-prose">
                A senior dental business strategy advisor with 34 years of private practice ownership in Cupertino, CA and 25+ years founding dental marketing and management advisory firms. I evaluate clinical workflows, schedule efficiency, and case presentation to deliver practical, data-backed production growth.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#contact"
                  className="px-6 py-3.5 bg-[#0b1329] hover:bg-blue-900 text-white text-base font-semibold rounded transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> Schedule Consultation
                </a>
                <a
                  href="tel:4083907283"
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-900 text-base font-semibold rounded transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-700" /> (408) 390-7283
                </a>
                <a
                  href="https://www.linkedin.com/in/randylafrom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-base font-medium rounded transition-colors inline-flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" /> LinkedIn
                </a>
              </div>

              <div className="pt-4 text-sm text-slate-600 flex flex-wrap gap-6">
                <span>Solo and multi-practice groups</span>
                <span>Operational and KPI assessments</span>
                <span>Dentrix, Eaglesoft, Open Dental</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white p-6 rounded-lg space-y-4">
                <div className="relative aspect-square w-full rounded overflow-hidden bg-slate-200">
                  <Image
                    src="/randy-lafrom.png"
                    alt="Dr. Randall LaFrom, DDS"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#0b1329]">
                    Randall LaFrom, DDS
                  </div>
                  <div className="text-sm text-slate-600">
                    Founder, Integrity Dental Marketing & Dental Site Authority
                  </div>
                  <div className="text-sm text-slate-600 pt-1">
                    UCLA School of Dentistry (Honors, Class Vice President)
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. PROVEN TRACK RECORD ── */}
      <section id="track-record" className="bg-[#0b1329] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Documented Track Record
            </h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-prose">
              Measurable revenue increases and operational performance delivered across solo practices and group organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#111c38] p-8 rounded space-y-3">
              <div className="font-serif text-4xl lg:text-5xl font-bold text-amber-300">
                +$15,000
              </div>
              <div className="font-semibold text-base text-white">
                Monthly lift for individual practices
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Guided individual practices to roughly $15,000 in additional monthly production within months of operational implementation.
              </p>
            </div>

            <div className="bg-[#111c38] p-8 rounded space-y-3">
              <div className="font-serif text-4xl lg:text-5xl font-bold text-emerald-400">
                +$100,000+
              </div>
              <div className="font-semibold text-base text-white">
                Monthly growth for dental groups
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Helped larger regional dental groups increase monthly production by over $100,000 within approximately one year.
              </p>
            </div>

            <div className="bg-[#111c38] p-8 rounded space-y-3">
              <div className="font-serif text-4xl lg:text-5xl font-bold text-blue-300">
                34 Years
              </div>
              <div className="font-semibold text-base text-white">
                Private practice ownership
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Over three decades leading clinical care, staffing, patient retention, collections, and profitability in Cupertino, CA.
              </p>
            </div>

            <div className="bg-[#111c38] p-8 rounded space-y-3">
              <div className="font-serif text-4xl lg:text-5xl font-bold text-slate-200">
                60+ Websites
              </div>
              <div className="font-semibold text-base text-white">
                Practice digital positioning
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Advised on more than 60 practice and dental-business website projects, strengthening online credibility and inquiry conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ABOUT ME WITH CLINIC ATMOSPHERE PICTURE ── */}
      <section id="about" className="bg-white py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b1329] leading-tight">
                Dual Practice Authority
              </h2>
              <p className="text-base text-slate-700 leading-relaxed max-w-prose">
                Most practice consultants evaluate spreadsheets without ever holding a handpiece. Dr. LaFrom spent 34 years in private dental practice ownership while concurrently building dental business advisory firms.
              </p>
              
              <div className="relative aspect-video w-full rounded overflow-hidden bg-slate-100">
                <Image
                  src="/clinic-space-jpg.jpg"
                  alt="Modern clinical consultation interior"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-slate-100 p-6 rounded space-y-2">
                <div className="font-semibold text-slate-900 text-base">
                  Practice Management Software
                </div>
                <p className="text-sm text-slate-600">
                  Extensive advisory and operational proficiency in Dentrix, Eaglesoft, and Open Dental platforms.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p className="max-w-prose">
                My career was built concurrently in clinical dentistry and dental business growth. As a 34-year practice owner, and since the late 1990s as founder of dental marketing and consulting practices (<strong>Integrity Dental Marketing</strong> and <strong>Dental Site Authority</strong>), I advise dental organizations on growth strategy, patient acquisition, marketing optimization, and operational performance.
              </p>

              <blockquote className="bg-slate-100 p-6 rounded text-lg font-serif italic text-[#0b1329]">
                &ldquo;I am an experienced dental business strategist and former practice owner who can walk into an organization, quickly assess what is happening operationally, and convert data into a practical growth plan.&rdquo;
              </blockquote>

              <p className="max-w-prose">
                Because I have managed collections, payroll, hygienist scheduling, patient cancellations, and equipment investments myself, my recommendations resonate with doctors and team members alike. We focus on pragmatic, high-impact levers: scheduling to goal, treatment acceptance communication, and office manager leadership.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. THE LIVE THING: PRACTICE OPPORTUNITY CALCULATOR ── */}
      <section id="calculator" className="bg-slate-100 py-16 lg:py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b1329]">
              Practice Opportunity Calculator
            </h2>
            <p className="text-base text-slate-700 max-w-prose leading-relaxed">
              Estimate the unrealized monthly production potential in your practice based on Dr. LaFrom&apos;s operational benchmarks.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-base font-semibold text-slate-900">
                    <label htmlFor="prod-slider">Current Monthly Production:</label>
                    <span className="font-serif text-2xl font-bold text-blue-900">
                      ${currentProduction.toLocaleString()}
                    </span>
                  </div>
                  <input
                    id="prod-slider"
                    type="range"
                    min="40000"
                    max="250000"
                    step="5000"
                    value={currentProduction}
                    onChange={(e) => setCurrentProduction(Number(e.target.value))}
                    className="w-full h-3 bg-slate-200 rounded appearance-none cursor-pointer accent-blue-900"
                  />
                  <div className="flex justify-between text-sm text-slate-600 font-medium">
                    <span>$40,000</span>
                    <span>$145,000</span>
                    <span>$250,000</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="block text-base font-semibold text-slate-900">
                    Primary Operational Opportunity Area:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(focusAreas).map(([key, item]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedFocus(key)}
                        className={`p-4 text-left rounded text-sm transition-colors ${
                          selectedFocus === key
                            ? "bg-[#0b1329] text-white font-medium"
                            : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                        }`}
                      >
                        <div className="font-bold text-base mb-1">{item.title}</div>
                        <div className="text-sm opacity-90 line-clamp-2">{item.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-100 p-8 rounded-lg space-y-6">
                <div>
                  <div className="font-serif text-4xl font-bold text-emerald-700">
                    +${estimatedMonthlyLift.toLocaleString()}
                    <span className="text-base font-normal text-slate-600 ml-2">estimated monthly production lift</span>
                  </div>
                </div>

                <div className="space-y-3 text-base text-slate-800">
                  <div className="flex justify-between items-center">
                    <span>Target Monthly Revenue:</span>
                    <strong className="font-bold text-[#0b1329]">${projectedMonthlyTotal.toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Annualized Production Growth:</span>
                    <strong className="font-bold text-blue-900">+${projectedAnnualExpansion.toLocaleString()}</strong>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded">
                  <strong>Focus:</strong> {currentArea.description}
                </p>

                <a
                  href="#contact"
                  className="block text-center py-3.5 px-4 bg-[#0b1329] hover:bg-blue-900 text-white font-semibold rounded text-sm transition-colors"
                >
                  Request Operational Assessment
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 5. ADVISORY SERVICES ── */}
      <section id="services" className="bg-white py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b1329]">
              Strategic Advisory Framework
            </h2>
            <p className="text-base text-slate-700 leading-relaxed max-w-prose">
              Proven disciplines delivering measurable financial gains and consistent staff execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-100 p-8 rounded space-y-2">
              <h3 className="font-serif text-2xl font-bold text-[#0b1329]">
                Practice Assessments & Operational Audits
              </h3>
              <p className="text-base text-slate-700 leading-relaxed max-w-prose">
                Conducting thorough evaluations identifying strengths, breakdowns, and growth opportunities across scheduling systems, hygiene flow, team performance, case acceptance, and patient experience.
              </p>
            </div>

            <div className="bg-slate-100 p-8 rounded space-y-2">
              <h3 className="font-serif text-2xl font-bold text-[#0b1329]">
                Scheduling to Goal & Patient Flow
              </h3>
              <p className="text-base text-slate-700 leading-relaxed max-w-prose">
                Designing productive schedule templates that protect primary doctor procedures, minimize late cancellations, and optimize chair capacity without stretching staff thin.
              </p>
            </div>

            <div className="bg-slate-100 p-8 rounded space-y-2">
              <h3 className="font-serif text-2xl font-bold text-[#0b1329]">
                Treatment Acceptance & Patient Communication
              </h3>
              <p className="text-base text-slate-700 leading-relaxed max-w-prose">
                Coaching doctors and staff in clinical communication and trust-building, moving patients from basic emergency care to comprehensive, scheduled treatment plans.
              </p>
            </div>

            <div className="bg-slate-100 p-8 rounded space-y-2">
              <h3 className="font-serif text-2xl font-bold text-[#0b1329]">
                KPI Planning & Accountability Reviews
              </h3>
              <p className="text-base text-slate-700 leading-relaxed max-w-prose">
                Analyzing production, collections, case conversion, patient retention, and workflow efficiency into prioritized monthly action plans with regular coaching follow-up.
              </p>
            </div>

            <div className="bg-slate-100 p-8 rounded space-y-2">
              <h3 className="font-serif text-2xl font-bold text-[#0b1329]">
                Office Manager Coaching & Team Culture
              </h3>
              <p className="text-base text-slate-700 leading-relaxed max-w-prose">
                Applying DISC-based behavioral communication insights to develop confident office managers, resolve staff conflict, align expectations, and establish consistent service standards.
              </p>
            </div>

            <div className="bg-slate-100 p-8 rounded space-y-2">
              <h3 className="font-serif text-2xl font-bold text-[#0b1329]">
                Digital Marketing & Patient Acquisition
              </h3>
              <p className="text-base text-slate-700 leading-relaxed max-w-prose">
                Advising on practice positioning, website clarity, online credibility, and patient inquiry conversion, informed by direct guidance on over 60 dental practice digital projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PUBLISHED BOOK & CREDENTIALS ── */}
      <section id="book" className="bg-[#0b1329] text-white py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                The Dental Practice Strategy Guide
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-prose">
                Authored by Dr. Randall M. LaFrom (published 2018), this professional guide covers practice management from dental school graduation to retirement. Often termed &ldquo;the missing manual from dental school,&rdquo; it provides actionable frameworks for solo, associateship, and group models.
              </p>

              <div className="space-y-3 text-base text-slate-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                  <span><strong>28 Critical Factors</strong> to analyze before purchasing a dental practice</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                  <span><strong>29 Key Questions</strong> to ask when hiring or becoming an associate</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                  <span><strong>Pre-Retirement Planning</strong> to maximize your primary professional asset</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.lulu.com/search?page=1&q=The+Dental+Practice+Strategy+Guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded transition-colors inline-flex items-center gap-2"
                >
                  Find Book on Lulu <ExternalLink className="w-4 h-4" />
                </a>
                <span className="text-sm text-slate-400">
                  ISBN-13: 978-0692096772
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-video w-full rounded overflow-hidden bg-slate-900">
                <Image
                  src="/modern-architecture-jpg.jpg"
                  alt="Executive consulting and conference environment"
                  fill
                  className="object-cover opacity-80"
                />
              </div>

              <div className="bg-[#111c38] p-8 rounded space-y-3">
                <div className="font-serif text-2xl font-bold text-white">
                  Certified Human Behavior Consultant
                </div>
                <div className="text-base text-amber-300">
                  DISC-Based Communication (2018)
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Applying behavioral insights to improve team communication, leadership alignment, customer interactions, and workplace effectiveness.
                </p>
              </div>

              <div className="bg-[#111c38] p-8 rounded space-y-3">
                <div className="font-serif text-2xl font-bold text-white">
                  Cupertino Chamber of Commerce
                </div>
                <div className="text-base text-blue-300">
                  Vice President (1984 – 1986)
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Served on the executive board supporting business development, community outreach, and small-business initiatives.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. PROFESSIONAL EXPERIENCE ── */}
      <section id="experience" className="bg-white py-16 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b1329]">
              Career History
            </h2>
            <p className="text-base text-slate-700 max-w-prose">
              Four decades of concurrent clinical leadership and business consulting experience.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-100 p-8 rounded space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-serif text-2xl font-bold text-[#0b1329]">
                  Dental Business Strategy Consultant & Founder
                </h3>
                <span className="text-sm font-semibold text-blue-900">
                  Late 1990s – Present
                </span>
              </div>
              <div className="text-base font-semibold text-slate-700">
                Integrity Dental Marketing & Dental Site Authority
              </div>
              <p className="text-base text-slate-700 leading-relaxed max-w-prose">
                Advise dental practices, groups, and dental-industry organizations on business growth strategy, patient acquisition, marketing optimization, and online positioning. Guided individual practices to roughly $15K in additional monthly production within months and helped larger groups increase monthly production by $100K+ over about a year. Advised on 60+ practice website projects.
              </p>
            </div>

            <div className="bg-slate-100 p-8 rounded space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-serif text-2xl font-bold text-[#0b1329]">
                  Associate Dentist
                </h3>
                <span className="text-sm font-semibold text-slate-700">
                  2023 – 2024
                </span>
              </div>
              <div className="text-base font-semibold text-slate-700">
                Private Practice · Sacramento, CA
              </div>
              <p className="text-base text-slate-700 leading-relaxed max-w-prose">
                Provided comprehensive dental care in a high-volume private practice while supporting patient communication, workflow efficiency, and clinical team coordination.
              </p>
            </div>

            <div className="bg-slate-100 p-8 rounded space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-serif text-2xl font-bold text-[#0b1329]">
                  Practice Owner / General Dentist
                </h3>
                <span className="text-sm font-semibold text-amber-900 font-bold">
                  1982 – 2016 (34 Years)
                </span>
              </div>
              <div className="text-base font-semibold text-slate-700">
                Randall M. LaFrom, DDS · Cupertino, CA
              </div>
              <p className="text-base text-slate-700 leading-relaxed max-w-prose">
                Owned and led a private dental practice for 34 years, overseeing business operations, team leadership, scheduling systems, patient experience, and long-term growth. Evaluated systems and financial performance to improve profitability, technology adoption, and return on investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. EDUCATION & HONORS WITH CAMPUS PHOTO ── */}
      <section className="bg-slate-100 py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl font-bold text-[#0b1329]">
            Education & Academic Honors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded space-y-4">
              <div className="relative aspect-video w-full rounded overflow-hidden bg-slate-100">
                <Image
                  src="/ucla-campus-jpg.jpg"
                  alt="UCLA Campus architecture"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0b1329]">
                Doctor of Dental Surgery (DDS)
              </h3>
              <p className="text-base font-semibold text-slate-800">
                UCLA School of Dentistry (1978 – 1982)
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Graduated with honors; elected Vice President of the dental class.
              </p>
            </div>

            <div className="bg-white p-8 rounded space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-[#0b1329]">
                  Bachelor of Arts, Biology
                </h3>
                <p className="text-base font-semibold text-slate-800">
                  San Jose State University (1973 – 1978)
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Minor in Chemistry. Founded the San Jose State University Pre-Dental Student Association.
                </p>
              </div>

              <div className="bg-slate-100 p-6 rounded space-y-1">
                <div className="font-semibold text-slate-900 text-sm">
                  Clinical Training Foundation
                </div>
                <p className="text-sm text-slate-600">
                  Concurrently built on rigorous biological sciences and distinguished clinical honors at UCLA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. CONTACT SECTION (EDITORIAL 2-COLUMN LAYOUT) ── */}
      <section id="contact" className="bg-[#0b1329] text-white py-16 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Advisory Consultation
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-prose leading-relaxed">
              Open to remote and hybrid business advisory, operational opportunity assessments, and ongoing coaching engagements for dentists and dental groups. Available for limited travel as needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#111c38] p-8 rounded space-y-4">
              <div className="font-serif text-2xl font-bold text-white">
                Direct Communication
              </div>
              <div className="space-y-3 text-base">
                <div>
                  <span className="block text-sm text-slate-400">Telephone:</span>
                  <a
                    href="tel:4083907283"
                    className="font-bold text-amber-300 hover:text-white transition-colors"
                  >
                    (408) 390-7283
                  </a>
                </div>
                <div>
                  <span className="block text-sm text-slate-400">Email:</span>
                  <a
                    href="mailto:drlafrom@gmail.com"
                    className="font-bold text-blue-300 hover:text-white transition-colors break-all"
                  >
                    drlafrom@gmail.com
                  </a>
                </div>
                <div>
                  <span className="block text-sm text-slate-400">Location:</span>
                  <span className="text-slate-200">El Dorado Hills, CA</span>
                </div>
              </div>
            </div>

            <div className="bg-[#111c38] p-8 rounded space-y-4 flex flex-col justify-between">
              <div>
                <div className="font-serif text-2xl font-bold text-white">
                  Professional Networks
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  Connect on LinkedIn for dental practice strategy articles, case studies, and business discussions.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <a
                  href="https://www.linkedin.com/in/randylafrom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#0077b5] hover:bg-blue-600 text-white font-semibold text-sm rounded flex items-center justify-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                </a>
                <a
                  href="https://github.com/drlafrom-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm rounded flex items-center justify-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" /> View GitHub Profile (@drlafrom-cloud)
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 text-sm text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              El Dorado Hills, CA · References available upon request
            </div>
            <div>
              Author of <em>The Dental Practice Strategy Guide</em>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            © {new Date().getFullYear()} Randall LaFrom, DDS. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#track-record" className="hover:text-white transition-colors">Results</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#book" className="hover:text-white transition-colors">Book</a>
            <a href="https://www.linkedin.com/in/randylafrom/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/drlafrom-cloud" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
