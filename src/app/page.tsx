import apps from "@/data/apps.json";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
                <a href="https://norops.jp" className="hover:underline">⚡️ サクプラ by Norops</a>
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                <a href="https://norops.jp" className="hover:underline">100apps ポータル</a>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                各種ツールへすばやくアクセスできるポータルサイトです。今後アプリを追加して拡張できます。
              </p>
            </div>
            <div className="rounded-3xl bg-slate-100 px-5 py-4 text-sm text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-200">
              © 2026 サクプラ (norops.jp)
            </div>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {apps.map((app) => (
            <a
              key={app.id}
              href={app.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-500 dark:hover:bg-slate-950"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">{app.badge}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-slate-50">{app.title}</h2>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-200">→</span>
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-400">{app.description}</p>
            </a>
          ))}
        </section>

        <footer className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          ⚡️ サクプラ by Norops - すべてのアプリをこのポータルからアクセスできます。
        </footer>
      </div>
    </main>
  );
}
