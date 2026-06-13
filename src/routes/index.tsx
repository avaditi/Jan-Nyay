import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import {
  Scale,
  ShieldCheck,
  Sparkles,
  Upload,
  FileText,
  AlertTriangle,
  Gauge,
  MessageSquare,
  Languages,
  BookOpen,
  ChevronRight,
  Send,
  Play,
  Zap,
  TrendingUp,
  FileCheck2,
  Home as HomeIcon,
  Briefcase,
  Heart,
  Shield,
  ShoppingBag,
  CheckCircle2,
  XCircle,
  AlertCircle,
  FileSearch,
  Bot,
  Menu,
  X,
} from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import logo from "@/assets/logo.jpeg";
import {
  languages,
  t,
  ts,
  getDoc,
  getRights,
  getInitialChat,
  getSuggestedQuestions,
  getMockReply,
} from "@/lib/jan-nyay-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jan-Nyay — AI Legal Copilot for Every Citizen" },
      {
        name: "description",
        content:
          "Upload contracts and notices. Get plain-language summaries, risk radar, fairness scores, what-if simulations and your rights — in your language.",
      },
      { property: "og:title", content: "Jan-Nyay — AI Legal Copilot" },
      {
        property: "og:description",
        content: "Plain-language legal understanding for every Indian citizen.",
      },
    ],
  }),
  component: JanNyayApp,
});

const ICONS: Record<string, any> = {
  ShoppingBag,
  Home: HomeIcon,
  Briefcase,
  Heart,
  Shield,
};

type View = "landing" | "dashboard";
type Tab = "overview" | "risks" | "simulator" | "chat" | "rights";

function JanNyayApp() {
  const [view, setView] = useState<View>("landing");
  const [tab, setTab] = useState<Tab>("overview");
  const [lang, setLang] = useState("en");
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        onDemo={() => {
          setView("dashboard");
          setTab("overview");
        }}
        onHome={() => setView("landing")}
        lang={lang}
        setLang={setLang}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />
      {view === "landing" ? (
        <Landing onStart={() => setView("dashboard")} lang={lang} />
      ) : (
        <Dashboard tab={tab} setTab={setTab} lang={lang} />
      )}
      <Footer lang={lang} />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header({ onDemo, onHome, lang, setLang, navOpen, setNavOpen }: any) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <button onClick={onHome} className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Jan-Nyay logo"
            className="h-11 w-11 rounded-lg object-contain shadow-elegant ring-1 ring-border"
          />
          <div className="text-left leading-tight">
            <div className="font-display text-lg font-bold text-primary tracking-tight">
              JAN-NYAY
            </div>
            <div className="text-[10px] font-semibold tracking-[0.18em] text-gold uppercase">
              Public Justice
            </div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-primary transition">
            {t("nav.features", lang)}
          </a>
          <a href="#how" className="hover:text-primary transition">
            {t("nav.how", lang)}
          </a>
          <a href="#rights" className="hover:text-primary transition">
            {t("nav.rights", lang)}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs">
            <Languages className="h-3.5 w-3.5 text-gold" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent outline-none cursor-pointer"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={onDemo}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-4 py-2 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-[1.02] transition"
          >
            <Play className="h-3.5 w-3.5" /> {t("cta.tryDemo", lang)}
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {navOpen && (
        <div className="md:hidden border-t border-border px-4 py-3 space-y-2 text-sm bg-card">
          <a href="#features" className="block py-1">
            {t("nav.features", lang)}
          </a>
          <a href="#how" className="block py-1">
            {t("nav.how", lang)}
          </a>
          <a href="#rights" className="block py-1">
            {t("nav.rights", lang)}
          </a>
          <button
            onClick={onDemo}
            className="w-full mt-2 rounded-full bg-gold-gradient px-4 py-2 font-semibold"
          >
            {t("cta.tryDemo", lang)}
          </button>
        </div>
      )}
    </header>
  );
}

/* ---------------- Landing ---------------- */
function Landing({ onStart, lang }: { onStart: () => void; lang: string }) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, oklch(0.78 0.13 80 / 0.4), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.78 0.13 80 / 0.3), transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="animate-float-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-3 py-1 text-xs font-medium text-gold backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> {t("hero.badge", lang)}
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              {t("hero.titleA", lang)}{" "}
              <span className="text-gold">{t("hero.titleB", lang)}</span>
              {t("hero.titleC", lang)}
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-primary-foreground/80">
              {t("hero.subtitle", lang)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={onStart}
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-[1.02] transition"
              >
                <Upload className="h-4 w-4" /> {t("cta.analyse", lang)}
              </button>
              <button
                onClick={onStart}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/10 transition backdrop-blur"
              >
                <Play className="h-4 w-4" /> {t("cta.seeDemo", lang)}
              </button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "12+", l: t("stat.languages", lang) },
                { n: "98%", l: t("stat.accuracy", lang) },
                { n: "<10s", l: t("stat.time", lang) },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-bold text-gold">
                    {s.n}
                  </div>
                  <div className="text-xs text-primary-foreground/70">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero card preview */}
          {(() => {
            const doc = getDoc(lang);
            return (
              <div
                className="relative animate-float-up"
                style={{ animationDelay: "0.15s" }}
              >
                <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full" />
                <div className="relative rounded-2xl bg-card text-foreground p-6 shadow-elegant border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <FileCheck2 className="h-4 w-4 text-gold" /> {doc.type}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-warning">
                      {doc.riskLevel}
                    </span>
                  </div>
                  <FairnessGauge score={62} compact lang={lang} />
                  <div className="mt-4 space-y-2">
                    {doc.clauses.slice(0, 3).map((c) => (
                      <RiskRow
                        key={c.id}
                        title={c.title}
                        risk={c.risk as any}
                        lang={lang}
                      />
                    ))}
                  </div>
                  <button
                    onClick={onStart}
                    className="mt-5 w-full rounded-lg bg-primary text-primary-foreground py-2.5 text-sm font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
                  >
                    {t("cta.launchDemo", lang)}{" "}
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <SectionHeading
          kicker={t("features.kicker", lang)}
          title={t("features.title", lang)}
          subtitle={t("features.subtitle", lang)}
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: FileText,
              title: t("feat.summary.t", lang),
              desc: t("feat.summary.d", lang),
            },
            {
              icon: AlertTriangle,
              title: t("feat.risk.t", lang),
              desc: t("feat.risk.d", lang),
            },
            {
              icon: Gauge,
              title: t("feat.fair.t", lang),
              desc: t("feat.fair.d", lang),
            },
            {
              icon: Zap,
              title: t("feat.sim.t", lang),
              desc: t("feat.sim.d", lang),
            },
            {
              icon: Bot,
              title: t("feat.bot.t", lang),
              desc: t("feat.bot.d", lang),
            },
            {
              icon: BookOpen,
              title: t("feat.rights.t", lang),
              desc: t("feat.rights.d", lang),
            },
          ].map((f, i) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 hover:shadow-elegant hover:-translate-y-1 transition animate-float-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="h-11 w-11 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold">
                <f.icon className="h-5 w-5 text-gold-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-bold font-display text-primary">
                {f.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <SectionHeading
            kicker={t("how.kicker", lang)}
            title={t("how.title", lang)}
          />
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              { n: 1, t: t("how.1.t", lang), d: t("how.1.d", lang) },
              { n: 2, t: t("how.2.t", lang), d: t("how.2.d", lang) },
              { n: 3, t: t("how.3.t", lang), d: t("how.3.d", lang) },
              { n: 4, t: t("how.4.t", lang), d: t("how.4.d", lang) },
            ].map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl bg-card p-6 border border-border"
              >
                <div className="absolute -top-4 left-6 h-9 w-9 rounded-xl bg-primary text-primary-foreground font-display text-base font-bold flex items-center justify-center shadow-elegant">
                  {s.n}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-primary">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rights teaser */}
      <section id="rights" className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <SectionHeading
          kicker={t("rights.kicker", lang)}
          title={t("rights.title", lang)}
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {getRights(lang).map((r) => {
            const Icon = ICONS[r.icon];
            return (
              <div
                key={r.key}
                className="rounded-2xl border border-border bg-card p-5 hover:shadow-elegant transition group"
              >
                <div
                  className={`h-10 w-10 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center text-white shadow-md`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-3 font-bold text-primary">{r.label}</h4>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {r.items[0]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <div className="rounded-3xl bg-hero-gradient text-primary-foreground p-10 sm:p-14 text-center shadow-elegant relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, oklch(0.78 0.13 80 / 0.5), transparent 50%)",
            }}
          />
          <div className="relative">
            <ShieldCheck className="h-10 w-10 text-gold mx-auto" />
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">
              {t("cta.justice", lang)}
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-primary-foreground/80">
              {t("cta.tryLive", lang)}
            </p>
            <button
              onClick={onStart}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3 text-sm font-bold text-gold-foreground shadow-gold hover:scale-[1.02] transition"
            >
              <Play className="h-4 w-4" /> {t("cta.launchDemo", lang)}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------- Dashboard ---------------- */
function Dashboard({
  tab,
  setTab,
  lang,
}: {
  tab: Tab;
  setTab: (t: Tab) => void;
  lang: string;
}) {
  const tabs: { key: Tab; label: string; icon: any }[] = [
    { key: "overview", label: t("tab.overview", lang), icon: FileText },
    { key: "risks", label: t("tab.risks", lang), icon: AlertTriangle },
    { key: "simulator", label: t("tab.simulator", lang), icon: Zap },
    { key: "chat", label: t("tab.chat", lang), icon: MessageSquare },
    { key: "rights", label: t("tab.rights", lang), icon: BookOpen },
  ];

  const doc = getDoc(lang);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
      {/* Doc header */}
      <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-elegant">
        <div className="flex flex-wrap items-start gap-4 justify-between">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold">
              <FileSearch className="h-6 w-6 text-gold-foreground" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gold">
                {doc.type} · Demo
              </div>
              <h1 className="font-display text-xl sm:text-2xl font-bold text-primary mt-0.5">
                {doc.title}
              </h1>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span>📅 {doc.duration}</span>
                <span>💰 {doc.rent}</span>
                <span>🔒 {doc.deposit}</span>
                <span>⏱ {doc.uploadedAt}</span>
              </div>
            </div>
          </div>
          <UploadButton lang={lang} />
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 flex flex-wrap gap-1 rounded-xl border border-border bg-card p-1 shadow-sm">
        {tabs.map((tb) => (
          <button
            key={tb.key}
            onClick={() => setTab(tb.key)}
            className={`flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${tab === tb.key ? "bg-primary text-primary-foreground shadow-elegant" : "text-muted-foreground hover:text-primary hover:bg-secondary"}`}
          >
            <tb.icon className="h-4 w-4" />{" "}
            <span className="hidden sm:inline">{tb.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-6 animate-float-up" key={tab}>
        {tab === "overview" && <Overview lang={lang} />}
        {tab === "risks" && <Risks lang={lang} />}
        {tab === "simulator" && <Simulator lang={lang} />}
        {tab === "chat" && <Chat lang={lang} />}
        {tab === "rights" && <Rights lang={lang} />}
      </div>
    </div>
  );
}

function UploadButton({ lang }: { lang: string }) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <button
        onClick={() => ref.current?.click()}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-semibold text-primary hover:bg-accent transition"
      >
        <Upload className="h-4 w-4" /> {t("doc.uploadNew", lang)}
      </button>
      <input ref={ref} type="file" className="hidden" />
    </>
  );
}

/* Overview tab */
function Overview({ lang }: { lang: string }) {
  const doc = getDoc(lang);
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader
            icon={Sparkles}
            title={ts("ov.summaryTitle", lang)}
            badge={ts("ov.aiGenerated", lang)}
          />
          <p className="mt-3 text-sm leading-relaxed text-foreground/85">
            {doc.summary}
          </p>
          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            {doc.parties.map((p, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-secondary/40 px-3 py-2 text-sm"
              >
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {ts("ov.party", lang)} {i + 1}
                </div>
                <div className="font-semibold text-primary">{p}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader
            icon={FileText}
            title={ts("ov.keyClauses", lang)}
            badge={`${doc.clauses.length} ${ts("ov.found", lang)}`}
          />
          <div className="mt-4 divide-y divide-border">
            {doc.clauses.map((c) => (
              <details key={c.id} className="group py-3">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <RiskDot risk={c.risk as any} />
                    <span className="font-semibold text-primary">
                      {c.title}
                    </span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition" />
                </summary>
                <div className="mt-2 pl-6 text-sm text-muted-foreground">
                  "{c.text}"
                </div>
                <div className="mt-2 pl-6 text-xs text-gold font-medium">
                  ⚖ {c.note}
                </div>
              </details>
            ))}
          </div>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader icon={Gauge} title={ts("ov.fairnessScore", lang)} />
          <FairnessGauge score={doc.fairnessScore} lang={lang} />
          <div className="mt-2 text-center text-xs text-muted-foreground">
            {ts("ov.fairnessNote", lang)}
          </div>
        </Card>

        <Card>
          <CardHeader
            icon={TrendingUp}
            title={ts("ov.fairnessBreakdown", lang)}
          />
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={doc.fairnessBreakdown}>
                <PolarGrid stroke="var(--color-border)" />
                <PolarAngleAxis
                  dataKey="label"
                  tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  tick={false}
                  axisLine={false}
                />
                <Radar
                  dataKey="value"
                  stroke="var(--color-gold)"
                  fill="var(--color-gold)"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}

/* Risks tab */
function Risks({ lang }: { lang: string }) {
  const doc = getDoc(lang);
  const counts = useMemo(() => {
    const r = { high: 0, medium: 0, low: 0 };
    doc.clauses.forEach((c) => (r as any)[c.risk]++);
    return r;
  }, [lang]);
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard
          label={ts("risk.high", lang)}
          value={counts.high}
          tone="destructive"
          icon={XCircle}
        />
        <StatCard
          label={ts("risk.medium", lang)}
          value={counts.medium}
          tone="warning"
          icon={AlertCircle}
        />
        <StatCard
          label={ts("risk.low", lang)}
          value={counts.low}
          tone="success"
          icon={CheckCircle2}
        />
      </div>

      <Card>
        <CardHeader
          icon={AlertTriangle}
          title={ts("risk.title", lang)}
          badge={ts("risk.sorted", lang)}
        />
        <div className="mt-4 space-y-3">
          {[...doc.clauses]
            .sort((a, b) => weight(b.risk) - weight(a.risk))
            .map((c) => (
              <div
                key={c.id}
                className="rounded-xl border border-border p-4 hover:shadow-elegant transition"
              >
                <div className="flex items-start gap-3">
                  <RiskDot risk={c.risk as any} large />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-primary">{c.title}</h4>
                      <RiskBadge risk={c.risk as any} lang={lang} />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      "{c.text}"
                    </p>
                    <div className="mt-2 rounded-lg bg-secondary/60 px-3 py-2 text-xs flex gap-2">
                      <Scale className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      <span>
                        <span className="font-semibold text-primary">
                          {ts("risk.why", lang)}
                        </span>{" "}
                        {c.note}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Card>
    </div>
  );
}

function weight(r: string) {
  return r === "high" ? 3 : r === "medium" ? 2 : 1;
}

/* Simulator */
function Simulator({ lang }: { lang: string }) {
  const [days, setDays] = useState(15);
  const [monthsStayed, setMonthsStayed] = useState(4);
  const lateFee = Math.round(28000 * 0.02 * days);
  const lostDeposit = monthsStayed < 6 ? 168000 : 0;

  const chartData = Array.from({ length: 31 }, (_, d) => ({
    day: d,
    fee: Math.round(28000 * 0.02 * d),
  }));

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader
          icon={Zap}
          title={ts("sim.lateTitle", lang)}
          badge={ts("sim.scenarioA", lang)}
        />
        <p className="mt-2 text-sm text-muted-foreground">
          {ts("sim.lateDesc", lang)}
        </p>
        <div className="mt-5">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-muted-foreground">
              {ts("sim.daysLate", lang)}
            </span>
            <span className="font-display text-2xl font-bold text-primary">
              {days}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={30}
            value={days}
            onChange={(e) => setDays(+e.target.value)}
            className="w-full mt-2 accent-[color:var(--color-gold)]"
          />
        </div>
        <div className="mt-5 rounded-xl bg-gold-gradient p-5 text-gold-foreground shadow-gold">
          <div className="text-xs font-semibold uppercase tracking-wider opacity-80">
            {ts("sim.estFee", lang)}
          </div>
          <div className="font-display text-3xl font-bold mt-1">
            ₹ {lateFee.toLocaleString("en-IN")}
          </div>
          <div className="mt-1 text-xs opacity-90">
            ≈ {Math.round((lateFee / 28000) * 100)}% {ts("sim.ofRent", lang)}
          </div>
        </div>
        <div className="mt-4 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid
                stroke="var(--color-border)"
                strokeDasharray="3 3"
              />
              <XAxis
                dataKey="day"
                tick={{ fontSize: 10, fill: "var(--color-muted-foreground)" }}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "var(--color-muted-foreground)" }}
              />
              <Tooltip
                contentStyle={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
              />
              <Line
                type="monotone"
                dataKey="fee"
                stroke="var(--color-gold)"
                strokeWidth={2.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-3 text-xs text-destructive font-medium">
          {ts("sim.lateWarn", lang)}
        </p>
      </Card>

      <Card>
        <CardHeader
          icon={Zap}
          title={ts("sim.earlyTitle", lang)}
          badge={ts("sim.scenarioB", lang)}
        />
        <p className="mt-2 text-sm text-muted-foreground">
          {ts("sim.earlyDesc", lang)}
        </p>
        <div className="mt-5">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-muted-foreground">
              {ts("sim.monthsStayed", lang)}
            </span>
            <span className="font-display text-2xl font-bold text-primary">
              {monthsStayed}
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={11}
            value={monthsStayed}
            onChange={(e) => setMonthsStayed(+e.target.value)}
            className="w-full mt-2 accent-[color:var(--color-gold)]"
          />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div
            className={`rounded-xl p-4 border ${lostDeposit ? "bg-destructive/10 border-destructive/30" : "bg-success/10 border-success/30"}`}
          >
            <div className="text-xs font-semibold uppercase tracking-wider opacity-70">
              {ts("sim.atRisk", lang)}
            </div>
            <div
              className="font-display text-2xl font-bold mt-1"
              style={{
                color: lostDeposit
                  ? "var(--color-destructive)"
                  : "var(--color-success)",
              }}
            >
              ₹ {lostDeposit.toLocaleString("en-IN")}
            </div>
          </div>
          <div className="rounded-xl p-4 border border-border bg-secondary/40">
            <div className="text-xs font-semibold uppercase tracking-wider opacity-70">
              {ts("sim.noticeReq", lang)}
            </div>
            <div className="font-display text-2xl font-bold text-primary mt-1">
              {ts("sim.months2", lang)}
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-secondary/60 px-3 py-3 text-xs">
          <div className="font-semibold text-primary mb-1">
            {ts("sim.suggests", lang)}
          </div>
          {monthsStayed < 6
            ? ts("sim.tipEarly", lang)
            : ts("sim.tipPast", lang)}
        </div>
      </Card>
    </div>
  );
}

/* Chat */
function Chat({ lang }: { lang: string }) {
  const [msgs, setMsgs] = useState<
    { role: "user" | "assistant"; content: string }[]
  >(() => getInitialChat(lang));
  const [input, setInput] = useState("");
  const suggested = getSuggestedQuestions(lang);

  // Reset chat when language changes
  useState(() => {
    setMsgs(getInitialChat(lang));
  });

  function send(text: string) {
    if (!text.trim()) return;
    const reply = getMockReply(text, lang);
    setMsgs((m) => [
      ...m,
      { role: "user", content: text },
      { role: "assistant", content: reply },
    ]);
    setInput("");
  }

  return (
    <div className="grid lg:grid-cols-[1fr_280px] gap-6">
      <Card>
        <CardHeader
          icon={MessageSquare}
          title={ts("chat.title", lang)}
          badge={ts("chat.docAware", lang)}
        />
        <div className="mt-4 h-[460px] overflow-y-auto rounded-xl border border-border bg-secondary/30 p-4 space-y-3">
          {msgs.map((m, i) => (
            <div
              key={i}
              className={`flex gap-2.5 ${m.role === "user" ? "justify-end" : ""}`}
            >
              {m.role === "assistant" && (
                <div className="h-8 w-8 rounded-full bg-gold-gradient flex items-center justify-center shrink-0 shadow-gold">
                  <Bot className="h-4 w-4 text-gold-foreground" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-card border border-border rounded-bl-sm"}`}
                dangerouslySetInnerHTML={{
                  __html: m.content.replace(
                    /\*\*(.+?)\*\*/g,
                    "<strong>$1</strong>",
                  ),
                }}
              />
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="mt-3 flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={ts("chat.placeholder", lang)}
            className="flex-1 rounded-full border border-border bg-card px-4 py-2.5 text-sm outline-none focus:ring-2 ring-gold"
          />
          <button className="rounded-full bg-primary text-primary-foreground px-4 py-2.5 hover:opacity-90 transition">
            <Send className="h-4 w-4" />
          </button>
        </form>
      </Card>

      <Card>
        <CardHeader icon={Sparkles} title={ts("chat.suggested", lang)} />
        <div className="mt-3 space-y-2">
          {suggested.map((q) => (
            <button
              key={q}
              onClick={() => send(q)}
              className="w-full text-left rounded-lg border border-border bg-card hover:bg-secondary px-3 py-2 text-sm transition"
            >
              {q}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* Rights */
function Rights({ lang }: { lang: string }) {
  const rights = getRights(lang);
  const [active, setActive] = useState(rights[0].key);
  const cur = rights.find((r) => r.key === active) || rights[0];
  const Icon = ICONS[cur.icon];
  return (
    <div className="grid md:grid-cols-[260px_1fr] gap-6">
      <Card>
        <CardHeader icon={BookOpen} title={ts("rt.categories", lang)} />
        <div className="mt-3 space-y-1.5">
          {rights.map((r) => {
            const I = ICONS[r.icon];
            return (
              <button
                key={r.key}
                onClick={() => setActive(r.key)}
                className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${active === r.key ? "bg-primary text-primary-foreground shadow-elegant" : "hover:bg-secondary text-muted-foreground"}`}
              >
                <I className="h-4 w-4" /> {r.label}
              </button>
            );
          })}
        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-4">
          <div
            className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${cur.color} flex items-center justify-center shadow-elegant text-white`}
          >
            <Icon className="h-7 w-7" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-gold font-semibold">
              {ts("rt.kicker", lang)}
            </div>
            <h2 className="font-display text-2xl font-bold text-primary">
              {cur.label}
            </h2>
          </div>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          {cur.items.map((item: string, i: number) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-secondary/30 p-4 hover:shadow-elegant transition"
            >
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-hero-gradient text-primary-foreground p-5 flex items-center justify-between gap-4">
          <div>
            <div className="font-display text-lg font-bold">
              {ts("rt.needAid", lang)}
            </div>
            <div className="text-sm text-primary-foreground/80">
              {ts("rt.aidSub", lang)}
            </div>
          </div>
          <button className="rounded-full bg-gold-gradient text-gold-foreground px-5 py-2 text-sm font-bold shadow-gold whitespace-nowrap">
            {ts("rt.findHelp", lang)}
          </button>
        </div>
      </Card>
    </div>
  );
}

/* ---------------- Atoms ---------------- */
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm hover:shadow-elegant transition">
      {children}
    </div>
  );
}
function CardHeader({ icon: Icon, title, badge }: any) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <div className="h-8 w-8 rounded-lg bg-gold/15 flex items-center justify-center">
          <Icon className="h-4 w-4 text-gold" />
        </div>
        <h3 className="font-display text-lg font-bold text-primary">{title}</h3>
      </div>
      {badge && (
        <span className="text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
}
function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="text-xs uppercase tracking-[0.2em] font-bold text-gold">
        {kicker}
      </div>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-primary">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
function RiskBadge({
  risk,
  lang,
}: {
  risk: "high" | "medium" | "low";
  lang: string;
}) {
  const map: Record<string, [string, string]> = {
    high: ["bg-destructive/10 text-destructive", ts("risk.highTag", lang)],
    medium: ["bg-warning/15 text-warning", ts("risk.mediumTag", lang)],
    low: ["bg-success/10 text-success", ts("risk.lowTag", lang)],
  };
  return (
    <span
      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${map[risk][0]}`}
    >
      {map[risk][1]}
    </span>
  );
}
function RiskDot({
  risk,
  large,
}: {
  risk: "high" | "medium" | "low";
  large?: boolean;
}) {
  const color =
    risk === "high"
      ? "var(--color-destructive)"
      : risk === "medium"
        ? "var(--color-warning)"
        : "var(--color-success)";
  const size = large ? "h-3 w-3" : "h-2.5 w-2.5";
  return (
    <span
      className={`${size} rounded-full inline-block animate-pulse-ring`}
      style={{ background: color }}
    />
  );
}
function RiskRow({
  title,
  risk,
  lang,
}: {
  title: string;
  risk: "high" | "medium" | "low";
  lang: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-secondary/50 px-3 py-2 text-sm">
      <div className="flex items-center gap-2">
        <RiskDot risk={risk} />
        <span className="font-medium">{title}</span>
      </div>
      <RiskBadge risk={risk} lang={lang} />
    </div>
  );
}

function StatCard({ label, value, tone, icon: Icon }: any) {
  const toneMap: any = {
    destructive: "var(--color-destructive)",
    warning: "var(--color-warning)",
    success: "var(--color-success)",
  };
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <Icon className="h-5 w-5" style={{ color: toneMap[tone] }} />
      </div>
      <div
        className="mt-2 font-display text-3xl font-bold"
        style={{ color: toneMap[tone] }}
      >
        {value}
      </div>
    </div>
  );
}
function FairnessGauge({
  score,
  compact,
  lang,
}: {
  score: number;
  compact?: boolean;
  lang: string;
}) {
  const data = [{ name: "score", value: score, fill: "var(--color-gold)" }];
  const h = compact ? 140 : 200;
  const label =
    score >= 75
      ? ts("gauge.fair", lang)
      : score >= 50
        ? ts("gauge.moderate", lang)
        : ts("gauge.unfair", lang);
  return (
    <div className="relative" style={{ height: h }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="70%"
          outerRadius="100%"
          data={data}
          startAngle={210}
          endAngle={-30}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background={{ fill: "var(--color-secondary)" }}
            dataKey="value"
            cornerRadius={20}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="font-display text-4xl font-bold text-primary">
          {score}
        </div>
        <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-gold">
          {label}
        </div>
      </div>
    </div>
  );
}

/* Footer */
function Footer({ lang }: { lang: string }) {
  return (
    <footer className="border-t border-border bg-card mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Jan-Nyay"
              className="h-9 w-9 rounded-lg ring-1 ring-border"
            />
            <div>
              <div className="font-display font-bold text-primary">
                JAN-NYAY
              </div>
              <div className="text-[10px] tracking-[0.18em] font-semibold text-gold uppercase">
                Public Justice
              </div>
            </div>
          </div>
          <p className="mt-3 text-muted-foreground text-xs">
            {t("footer.tagline", lang)}
          </p>
        </div>
        {[
          {
            t: "Product",
            l: ["Risk Radar", "Fairness Score", "Simulator", "Copilot Chat"],
          },
          {
            t: "Resources",
            l: ["Know Your Rights", "Legal Aid Centres", "Glossary", "FAQ"],
          },
          { t: "Company", l: ["About", "Mission", "Privacy", "Contact"] },
        ].map((c) => (
          <div key={c.t}>
            <div className="font-bold text-primary mb-3">{c.t}</div>
            <ul className="space-y-2 text-muted-foreground">
              {c.l.map((i) => (
                <li key={i} className="hover:text-primary cursor-pointer">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © 2026 Jan-Nyay · Built for Bharat · "न्याय सबका अधिकार है"
      </div>
    </footer>
  );
}
