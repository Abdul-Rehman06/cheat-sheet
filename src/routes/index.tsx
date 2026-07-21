import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Landmark,
  Search,
  GraduationCap,
  Stethoscope,
  DollarSign,
  CalendarDays,
  FileText,
  ShieldX,
  ShieldCheck,
  Target,
  Shield,
  TrendingUp,
  CheckCircle2,
  Trophy,
  Gauge,
  Star,
  ChevronsRight,
  Check,

} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Negative Item Breakdown — Metro 2 Codes Cheat Sheet" },
      {
        name: "description",
        content:
          "Metro 2 credit dispute cheat sheet. Know which negative items to attack and which to leave alone.",
      },
    ],
  }),
  component: CheatSheet,
});

type Row = {
  abbr: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  ring: string;
};

const rows: Row[] = [
  { abbr: "PI", title: "PERSONAL INFORMATION", desc: "Name, SSN, Date of Birth, Address, Employment information, etc.", icon: User, color: "bg-[#800080]", ring: "border-[#800080]" },
  { abbr: "PUB/PR", title: "PUBLIC RECORDS", desc: "Bankruptcies, Tax Liens, Judgments, Civil Suits, Public Filings.", icon: Landmark, color: "bg-[#ffa500]", ring: "border-[#ffa500]" },
  { abbr: "INQ/IQ", title: "ALL INQUIRIES", desc: "Hard Inquiries, Soft Inquiries, All types from all sources.", icon: Search, color: "bg-[#7b5804]", ring: "border-[#7b5804]" },
  { abbr: "SLCC", title: "STUDENT LOAN CHARGE-OFFS/COLLECTIONS", desc: "Defaulted student loans, charged-off accounts, collections.", icon: GraduationCap, color: "bg-[#e23671]", ring: "border-[#e23671]" },
  { abbr: "MCC", title: "MEDICAL CHARGE-OFFS/COLLECTIONS", desc: "Medical debt sent to collections or charged-off.", icon: Stethoscope, color: "bg-[#696b6b]", ring: "border-[#696b6b]" },
  { abbr: "AOCC", title: "ALL OTHER CHARGE-OFFS/COLLECTIONS", desc: "Credit cards, personal loans, retail cards, auto loans, utilities, etc.", icon: DollarSign, color: "bg-[#d41b31]", ring: "border-[#d41b31]" },
  { abbr: "SLDL 3+", title: "STUDENT LOAN DEROGATORY LATES (3+)", desc: "3 or more late payments on student loans.", icon: CalendarDays, color: "bg-[#7618d3]", ring: "border-[#7618d3]" },
  { abbr: "MDL 3+", title: "MEDICAL DEROGATORY LATES (3+)", desc: "3 or more late payments on medical accounts.", icon: CalendarDays, color: "bg-[#696b6b]", ring: "border-[#696b6b]" },
  { abbr: "AODL 3+", title: "ALL OTHER DEROGATORY LATES (3+)", desc: "3 or more late payments on non-student, non-medical accounts.", icon: CalendarDays, color: "bg-[#17b0e8]", ring: "border-[#17b0e8]" },
  { abbr: "SLDL 1-2", title: "STUDENT LOAN DELINQUENCY LATES (1-2)", desc: "1 to 2 late payments on student loans.", icon: CalendarDays, color: "bg-[#ff66c4]", ring: "border-[#ff66c4]" },
  { abbr: "MDL 1-2", title: "MEDICAL DELINQUENCY LATES (1-2)", desc: "1 to 2 late payments on medical accounts.", icon: CalendarDays, color: "bg-[#696b6b]", ring: "border-[#696b6b]" },
  { abbr: "AODL 1-2", title: "ALL OTHER DELINQUENCY LATES (1-2)", desc: "1 to 2 late payments on non-student, non-medical accounts.", icon: CalendarDays, color: "bg-[#a437ec]", ring: "border-[#a437ec]" },
];

function Dot({ color, active, onClick }: { color: "red" | "green"; active: boolean; onClick: () => void }) {
  const isRed = color === "red";
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      animate={active ? { scale: [1, 1.1, 1] } : { scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`relative h-10 w-10 md:h-12 md:w-12 rounded-full border-2 transition-all ${
        isRed
          ? `bg-red-600 border-red-500`
          : `bg-green-500 border-green-400`
      }`}
      aria-label={isRed ? "Don't Attack" : "Attack"}
    >
      {active && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Check className="h-6 w-6 md:h-7 md:w-7 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" strokeWidth={4} />
        </motion.span>
      )}
    </motion.button>

  );
}

function CheatSheet() {
  const [choices, setChoices] = useState<Record<number, "red" | "green" | null>>({});

  const set = (i: number, c: "red" | "green") =>
    setChoices((p) => ({ ...p, [i]: p[i] === c ? null : c }));

  return (
    <div className="min-h-screen bg-[#050814] text-white overflow-x-hidden relative">
      {/* subtle chart bg */}
      <div className="pointer-events-none fixed inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(30,64,175,0.35),transparent_60%)] z-0" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] bg-[linear-gradient(rgba(56,189,248,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.4)_1px,transparent_1px)] bg-[size:48px_48px] z-0" />

      {/* BIG BACKGROUND LOGO */}
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center z-0">
        <img src="/logo.png" alt="Background Logo" className="w-[90vw] md:w-[60vw] opacity-[0.05] object-contain" />
      </div>

      <main className="relative mx-auto max-w-6xl px-4 py-8 md:py-12 z-10">
        {/* HEADER */}
        <header className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start mb-6">
          <div className="flex flex-col items-start">
            <img src="/logo.png" alt="Logo" className="h-16 md:h-20 object-contain mb-4" />
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-black leading-[0.85] tracking-tight"
            >
              <span className="block text-4xl md:text-6xl bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]">
                NEGATIVE ITEM
              </span>
              <span className="block text-6xl md:text-8xl bg-gradient-to-b from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(251,191,36,0.5)]">
                BREAKDOWN
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-3 inline-block rounded-md bg-gradient-to-r from-purple-900/60 to-purple-700/30 px-4 py-2 border border-purple-500/40"
            >
              <span className="text-xl md:text-2xl font-extrabold tracking-wide">
                METRO 2 CODES <span className="text-cyan-400">CHEAT SHEET</span>
              </span>
            </motion.div>
            <p className="mt-3 text-[11px] md:text-xs font-bold tracking-[0.2em] text-gray-300">
              KNOW THE CODE. UNDERSTAND THE IMPACT. TAKE ACTION.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border-2 border-cyan-500/60 bg-black/60 p-5 shadow-[0_0_35px_rgba(6,182,212,0.35)] min-w-[220px] flex flex-col items-center justify-center"
          >
            <img src="/Paid-in-full.png" alt="Paid in Full QR Code" className="w-24 h-24 md:w-28 md:h-28 object-contain mb-3 bg-white p-1 rounded-lg" />
            <div className="text-center font-black text-sm md:text-base leading-tight">
              <div className="text-white">SCAN TO JOIN</div>
              <div className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.7)]">PAID IN FULL</div>
            </div>
          </motion.div>
        </header>

        {/* TABLE */}
        <section className="rounded-2xl border border-cyan-900/50 bg-black/50 p-3 md:p-5 backdrop-blur">
          {/* Column headers */}
          <div className="grid grid-cols-[70px_70px_110px_1fr] md:grid-cols-[100px_100px_150px_1fr] gap-2 md:gap-3 items-center pb-3 border-b border-white/10 mb-3">
            <div className="text-center">
              <ShieldX className="mx-auto h-5 w-5 md:h-6 md:w-6 text-red-500" />
              <div className="mt-1 text-[10px] md:text-xs font-black tracking-wide text-red-400">DON'T<br/>ATTACK</div>
            </div>
            <div className="text-center">
              <ShieldCheck className="mx-auto h-5 w-5 md:h-6 md:w-6 text-green-500" />
              <div className="mt-1 text-[10px] md:text-xs font-black tracking-wide text-green-400">ATTACK</div>
            </div>
            <div className="text-center text-[10px] md:text-xs font-black tracking-widest text-gray-300">
              ABBREVIATION
            </div>
            <div className="flex items-center gap-2 pl-2">
              <FileText className="h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
              <span className="text-xs md:text-sm font-black tracking-widest text-gray-200">NEGATIVE ITEMS</span>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-2 md:space-y-3">
            {rows.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.abbr}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="grid grid-cols-[70px_70px_110px_1fr] md:grid-cols-[100px_100px_150px_1fr] gap-2 md:gap-3 items-center"
                >
                  <div className="flex justify-center">
                    <Dot color="red" active={choices[i] === "red"} onClick={() => set(i, "red")} />
                  </div>
                  <div className="flex justify-center">
                    <Dot color="green" active={choices[i] === "green"} onClick={() => set(i, "green")} />
                  </div>

                  <div className={`rounded-lg border-2 ${r.color} ${r.ring} py-2 md:py-3 text-center`}>
                    <span className="font-black text-sm md:text-lg tracking-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      {r.abbr}
                    </span>
                  </div>

                  <div className={`flex items-center gap-3 rounded-lg border-2 bg-black/70 pl-2 pr-3 py-2 md:py-2.5 ${r.ring}`}>
                    <div className={`shrink-0 rounded-full border-2 p-2 bg-black/50 ${r.ring}`}>
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-black text-xs md:text-base tracking-wide text-white leading-tight">
                        {r.title}
                      </div>
                      <div className="text-[10px] md:text-xs text-gray-300 leading-snug">
                        {r.desc}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* BOTTOM PANELS */}
        <section className="mt-5 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-4">
          {/* Why it matters */}
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
            <h3 className="font-black tracking-wide mb-3">WHY IT MATTERS</h3>
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { icon: Target, title: "TARGET\nACCURATELY", desc: "Know what to dispute and what to leave alone.", color: "text-green-400" },
                { icon: Shield, title: "PROTECT\nYOUR FILE", desc: "Avoid attacking verified positive information.", color: "text-blue-400" },
                { icon: TrendingUp, title: "IMPROVE\nYOUR SCORE", desc: "Remove inaccurate negative items the right way.", color: "text-yellow-400" },
                { icon: CheckCircle2, title: "STAY\nCOMPLIANT", desc: "Follow FCRA guidelines and use proven strategies.", color: "text-purple-400" },
              ].map((it, i) => {
                const I = it.icon;
                return (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <I className={`h-8 w-8 ${it.color}`} />
                    <div className="text-[10px] font-black leading-tight whitespace-pre-line">{it.title}</div>
                    <div className="text-[9px] text-gray-400 leading-tight">{it.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Code Key */}
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
            <h3 className="font-black tracking-wide mb-3">CODE KEY</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 rounded-full bg-red-600 border-2 border-red-500" />
                <div>
                  <div className="font-black text-sm">DON'T ATTACK</div>
                  <div className="text-[11px] text-gray-400">Leave these items alone.</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 rounded-full bg-green-500 border-2 border-green-400" />
                <div>
                  <div className="font-black text-sm">ATTACK</div>
                  <div className="text-[11px] text-gray-400">These items may be disputed if inaccurate, incomplete, or unverifiable.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dispute Smart */}
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4 flex flex-col justify-between">
            <div>
              <div className="font-black text-lg leading-tight">DISPUTE SMART.<br/>DISPUTE STRATEGIC.</div>
              <div className="mt-2 font-black text-2xl text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]">
                WIN THE GAME.
              </div>
            </div>
            <div className="flex justify-end">
              <Trophy className="h-16 w-16 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]" />
            </div>
          </div>
        </section>

        {/* FOOTER STRIP */}
        <footer className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-cyan-500/30 bg-black/60 px-4 py-3">
          <div className="flex items-center gap-2 text-xs md:text-sm font-black tracking-wide text-cyan-300">
            <ShieldX className="h-5 w-5 text-cyan-400" />
            ACCURATE DATA. STRONGER FILE. BETTER FUTURE.
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm font-black tracking-wide text-cyan-300">
            KNOWLEDGE IS POWER. USE IT.
            <ChevronsRight className="h-5 w-5 text-cyan-400" />
          </div>
        </footer>
      </main>
    </div>
  );
}
