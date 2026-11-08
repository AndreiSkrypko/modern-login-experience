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
    <main className="relative min-h-screen overflow-hidden bg-ink font-sans text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-ember opacity-30 blur-[120px] animate-orb" />
      <div className="pointer-events-none absolute -bottom-48 right-0 h-[560px] w-[560px] rounded-full bg-magenta opacity-25 blur-[140px] animate-orb [animation-delay:-6s]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-[1.2fr_1fr] lg:px-12">
        <section className="flex flex-col gap-10">
          <div className="flex items-center gap-3 animate-rise">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-ember-gradient font-display text-2xl font-bold">F</div>
            <div className="leading-tight">
              <div className="font-display text-xl font-bold tracking-wide">FALCON</div>
              <div className="text-xs tracking-[0.25em] text-primary-foreground/60">CONTENT FACTORY</div>
            </div>
          </div>

          <div>
            <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] sm:text-7xl animate-rise [animation-delay:.1s]">
              AI-контент<br /><span className="text-shine">машина</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-primary-foreground/70 animate-rise [animation-delay:.2s]">
              8 AI-отделов, которые превращают идеи в посты, охваты и заявки — для компаний группы Falcon.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {depts.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                style={{ animationDelay: `${0.3 + i * 0.07}s` }}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-glass-border bg-glass p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-ember hover:bg-ember/10 animate-rise"
              >
                <Icon className="h-5 w-5 text-ember-glow transition-transform duration-300 group-hover:scale-125" />
                <span className="font-display text-xs uppercase tracking-wider text-primary-foreground/80">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="animate-rise [animation-delay:.25s]">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl p-px">
            <div className="absolute -inset-[100%] conic-border animate-spin-slow" />
            <form onSubmit={submit} noValidate className="relative rounded-3xl bg-ink/95 p-8 backdrop-blur-xl sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-ember">Внутренняя платформа</p>
              <h2 className="mt-2 font-display text-4xl font-bold uppercase">Вход для команды</h2>

              <div className="mt-6 flex gap-3 rounded-2xl border border-glass-border bg-glass p-4 text-sm text-primary-foreground/70">
                <ShieldCheck className="h-5 w-5 shrink-0 text-ember-glow" />
                Временный вход до подключения корпоративного SSO. Доступ — только сотрудникам по коду команды.
              </div>

              <Field label="Рабочий email" error={err.email} icon={Mail}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@falcon.com" className="w-full bg-transparent py-3.5 outline-none placeholder:text-primary-foreground/30" />
              </Field>

              <Field label="Код доступа команды" error={err.code} icon={KeyRound}>
                <input type={show ? "text" : "password"} value={code} onChange={(e) => setCode(e.target.value)} placeholder="••••••" className="w-full bg-transparent py-3.5 outline-none placeholder:text-primary-foreground/30" />
                <button type="button" onClick={() => setShow(!show)} aria-label="Показать код" className="text-primary-foreground/50 hover:text-ember-glow">
                  {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </Field>

              <button disabled={loading} className="group relative mt-8 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-ember-gradient py-4 font-display text-lg uppercase tracking-wider shadow-[0_10px_40px_-10px_var(--ember)] transition-all hover:shadow-[0_15px_50px_-8px_var(--magenta)] active:scale-[0.98] disabled:opacity-80">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <>Войти <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></>}
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

function Field({ label, error, icon: Icon, children }: { label: string; error?: string | undefined; icon: typeof Mail; children: React.ReactNode }) {
  return (
    <label className="mt-5 block">
      <span className="text-sm font-medium text-primary-foreground/80">{label}</span>
      <div className={`mt-2 flex items-center gap-3 rounded-2xl border bg-glass px-4 transition-all focus-within:border-ember focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--ember)_20%,transparent)] ${error ? "border-destructive" : "border-glass-border"}`}>
        <Icon className="h-4 w-4 shrink-0 text-primary-foreground/50" />
        {children}
      </div>
      {error && <span className="mt-1.5 block text-xs text-destructive animate-rise">{error}</span>}
    </label>
  );
}
