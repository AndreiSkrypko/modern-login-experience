import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Lightbulb, Search, Music2, FileText, Image, Send, BarChart3, TrendingUp,
  ArrowRight, Mail, KeyRound, Eye, EyeOff, Loader2, ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Вход для команды — Falcon Content Factory" },
      { name: "description", content: "Внутренняя AI-платформа Falcon: 8 AI-отделов превращают идеи в посты, охваты и заявки." },
      { property: "og:title", content: "Вход для команды — Falcon Content Factory" },
      { property: "og:description", content: "AI-контент машина для компаний группы Falcon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Login,
});

const depts = [
  { icon: Lightbulb, label: "Идея" }, { icon: Search, label: "Исследование" },
  { icon: Music2, label: "Хук" }, { icon: FileText, label: "Сценарий" },
  { icon: Image, label: "Дизайн" }, { icon: Send, label: "Публикация" },
  { icon: BarChart3, label: "Анализ" }, { icon: TrendingUp, label: "Рост" },
];

function Login() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState<{ email?: string | undefined; code?: string | undefined }>({});
  const [loading, setLoading] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const n: typeof err = {};
    if (!/^\S+@\S+\.\S+$/.test(email)) n.email = "Введите корректный рабочий email";
    if (code.length < 4) n.code = "Код должен содержать минимум 4 символа";
    setErr(n);
    if (Object.keys(n).length) return;
    setLoading(true);
    setTimeout(() => setLoading(false), 1800);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      {/* paper texture, soft colour washes, poster frame */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-60" />
      <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-rust/10 blur-[120px] animate-orb" />
      <div className="pointer-events-none absolute -bottom-48 right-0 h-[560px] w-[560px] rounded-full bg-olive/10 blur-[140px] animate-orb [animation-delay:-6s]" />
      <div className="pointer-events-none absolute inset-3 rounded-3xl border border-ink/10 sm:inset-5" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-[1.15fr_1fr] lg:px-14">
        <section className="flex flex-col gap-9">
          <div className="flex items-center gap-4 animate-rise">
            <div className="relative h-16 w-16 shrink-0">
              <div className="absolute inset-0 rounded-2xl border border-rust/45" />
              <div className="absolute inset-[3px] overflow-hidden rounded-[13px] border border-ink/10 bg-gradient-to-b from-card to-paper-deep shadow-[0_10px_25px_-12px_rgba(70,45,25,0.45)]">
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-card/70 to-transparent animate-sweep" />
              </div>
              <div className="relative flex h-full items-center justify-center">
                <FalconMark className="h-9 w-auto drop-shadow-[0_2px_2px_rgba(70,45,25,0.3)]" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-display text-2xl font-semibold tracking-[0.14em]">FALCON</div>
              <div className="mt-1 flex items-center gap-2 text-[10px] font-semibold tracking-[0.34em] text-foreground/55">
                <span className="h-px w-5 bg-rust/60" />
                CONTENT FACTORY
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-rust animate-rise [animation-delay:.05s]">
              <span className="h-px w-10 bg-rust/70" />
              Внутренняя платформа группы
            </div>
            <h1 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl animate-rise [animation-delay:.1s]">
              AI-контент<br />
              <span className="relative inline-block text-rust">
                машина
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 9" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 7 Q 100 -2 198 6" fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-foreground/70 animate-rise [animation-delay:.2s]">
              8 AI-отделов, которые превращают идеи в посты, охваты и заявки — для компаний группы Falcon.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2.5">
            {depts.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                style={{ animationDelay: `${0.3 + i * 0.06}s` }}
                className="group relative rounded-xl border border-line bg-card/80 px-3 pb-3.5 pt-4 shadow-[0_1px_0_rgba(70,45,25,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-rust/50 hover:shadow-[0_14px_28px_-16px_rgba(150,70,40,0.45)] animate-rise"
              >
                <span className="absolute right-2.5 top-2 font-display text-[10px] font-semibold tracking-widest text-foreground/30 transition-colors group-hover:text-rust">
                  0{i + 1}
                </span>
                <Icon className="h-[18px] w-[18px] text-rust transition-transform duration-300 group-hover:scale-110" strokeWidth={1.8} />
                <span className="mt-2.5 block font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/80">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="animate-rise [animation-delay:.25s]">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-rust/8 blur-2xl" />
            <form onSubmit={submit} noValidate className="relative rounded-3xl border border-line bg-card p-8 shadow-[0_30px_60px_-30px_rgba(70,45,25,0.35)] sm:p-10">
              <div className="absolute inset-x-10 top-0 h-[3px] rounded-b bg-gradient-to-r from-transparent via-rust to-transparent" />

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-rust/40 bg-rust/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-rust">
                  Вход <ArrowRight className="h-3 w-3" />
                </span>
                <FalconMark className="h-7 w-auto opacity-80" />
              </div>

              <h2 className="mt-5 font-display text-3xl font-bold uppercase tracking-wide">Для команды</h2>
              <p className="mt-1.5 text-sm text-foreground/60">Рабочий email и код доступа команды</p>

              <div className="mt-6 flex gap-3 rounded-xl border border-olive/30 bg-olive/5 p-3.5 text-[13px] leading-snug text-foreground/70">
                <ShieldCheck className="h-[18px] w-[18px] shrink-0 text-olive" strokeWidth={1.8} />
                Временный вход до подключения корпоративного SSO. Доступ — только сотрудникам.
              </div>

              <Field label="Рабочий email" error={err.email} icon={Mail}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@falcon.com" className="w-full bg-transparent py-3 outline-none placeholder:text-foreground/35" />
              </Field>

              <Field label="Код доступа команды" error={err.code} icon={KeyRound}>
                <input type={show ? "text" : "password"} value={code} onChange={(e) => setCode(e.target.value)} placeholder="••••••" className="w-full bg-transparent py-3 outline-none placeholder:text-foreground/35" />
                <button type="button" onClick={() => setShow(!show)} aria-label="Показать код" className="text-foreground/45 transition-colors hover:text-rust">
                  {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </Field>

              <button disabled={loading} className="group relative mt-7 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-ember-gradient py-4 font-display text-base font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-[0_14px_30px_-12px_var(--rust)] transition-all hover:shadow-[0_18px_36px_-12px_var(--rust-deep)] active:scale-[0.98] disabled:opacity-80">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary-foreground/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <>Войти <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></>}
              </button>

              <p className="mt-5 text-center text-[11px] tracking-wide text-foreground/45">Falcon Group · только для сотрудников</p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

function FalconMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 64" className={className} role="img" aria-label="Falcon">
      <defs>
        <linearGradient id="falcon-brand" x1="0.1" y1="0" x2="0.65" y2="1">
          <stop offset="0%" stopColor="var(--rust)" />
          <stop offset="55%" stopColor="var(--rust-deep)" />
          <stop offset="100%" stopColor="var(--ink)" />
        </linearGradient>
      </defs>
      <path
        fill="url(#falcon-brand)"
        fillRule="evenodd"
        d="M10 4 L47 5 L33 18 L22 18 L21 26 L34 26 C42 26 47 28 47 32 L39 34 L44 36 L33 40 L19 40 L17 50 L2 60 C5 44 5 20 10 4 Z M39 30 a1.7 1.7 0 1 0 0.01 0 Z"
      />
    </svg>
  );
}

function Field({ label, error, icon: Icon, children }: { label: string; error?: string | undefined; icon: typeof Mail; children: React.ReactNode }) {
  return (
    <label className="mt-5 block">
      <span className="text-[13px] font-semibold text-foreground/75">{label}</span>
      <div className={`mt-1.5 flex items-center gap-3 rounded-xl border bg-background px-4 transition-all focus-within:border-rust focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--rust)_15%,transparent)] ${error ? "border-destructive" : "border-line"}`}>
        <Icon className="h-4 w-4 shrink-0 text-foreground/45" strokeWidth={1.8} />
        {children}
      </div>
      {error && <span className="mt-1.5 block text-xs font-medium text-destructive animate-rise">{error}</span>}
    </label>
  );
}
