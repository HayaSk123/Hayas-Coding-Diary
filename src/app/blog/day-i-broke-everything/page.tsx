export default function TheDayIBrokeEverything() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">The Day I Broke Everything 🧨</h1>
      <p className="text-sm text-gray-500 mb-8">Published on July 28, 2025</p>
      <article className="prose prose-pink max-w-none">
        <p>
          Sooo… I pushed to production without testing. 😅  
          Yeah. Literally broke everything. Buttons weren’t working, layout was off, and the API I thought I set up properly? Completely ignored it.
        </p>

        <p>
          My first instinct was to panic, but after 10 deep breaths (and one chai), I got to work. Rolled back the deploy, opened my VS Code, and hunted the bug like it stole my cookies.
        </p>

        <p>
          The issue? A missed `useEffect` dependency and a wrong env variable in the config. Classic me.
        </p>

        <p>
          Lesson learned: **never skip testing** — even if the feature &quot;looks small.&quot; 🙃
        </p>
      </article>
    </main>
  );
}
