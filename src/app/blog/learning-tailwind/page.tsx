export default function LearningTailwind() {
  const publishDate = "2025-07-22";
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-pink-700 mb-2">
          Tailwind CSS: Love at First Class 💅
        </h1>
        <p className="text-sm text-gray-500">
          <time dateTime={publishDate}>Published on July 22, 2025</time>
        </p>
      </header>

      <article className="prose prose-pink max-w-none">
        <p>
          When I first heard about Tailwind CSS, I honestly thought it was just
          another developer hype cycle. Utility-first CSS? A class for every
          little thing? My brain said, “Yaar, yeh kya hai? Why would I ever write{" "}
          <code>p-4</code> instead of just writing a CSS rule once and reusing
          it?”
        </p>

        <p>
          Then I tried it. And… well, let’s just say I went from “meh” to “marry
          me” in one afternoon.
        </p>

        <h2>The Confusion Stage 🤯</h2>
        <p>
          My first Tailwind project looked like someone spilled alphabet soup all
          over my HTML. Classes like{" "}
          <code>bg-pink-200 p-4 rounded-xl shadow-md hover:scale-105</code> were
          screaming at me, and I thought: “This can’t be real. This can’t be
          maintainable.”
        </p>
        <p>
          But the funny thing is… it <em>was</em>. Instead of juggling five
          separate CSS files or hunting for which SASS partial controlled my
          button padding, everything was right there. Every style was immediate,
          visible, and tweakable without breaking a chain of styles somewhere
          else.
        </p>

        <h2>The “Ohhh I Get It” Stage 💡</h2>
        <p>
          The more I worked with Tailwind, the more I realized how freeing it is.
          I wasn’t switching between HTML and CSS anymore. I wasn’t worrying
          about naming conventions like BEM or fighting with old utility
          classes. I was just… building.
        </p>

        <ul>
          <li>
            Need margin? <code>m-4</code>.
          </li>
          <li>
            Need responsive padding? <code>p-2 md:p-6</code>.
          </li>
          <li>
            Need to center everything? <code>flex items-center justify-center</code>.
          </li>
        </ul>

        <p>
          Suddenly, UI ideas moved from my brain to the browser way faster. I was
          iterating in real-time. I didn’t have to leave my HTML for 90% of my
          styling needs.
        </p>

        <h2>Why I Can’t Live Without It Now 💖</h2>
        <p>
          Tailwind feels like it understands my dev brain. I can prototype
          lightning-fast. I can theme stuff with{" "}
          <code>tailwind.config.js</code>. And with JIT mode, I basically get
          infinite possibilities without shipping a huge CSS file.
        </p>

        <blockquote>
          “Once you start thinking in Tailwind, going back to writing traditional
          CSS feels… slow.”
        </blockquote>

        <p>
          Do I still write custom CSS sometimes? Sure. But Tailwind is my
          default. It makes me <em>enjoy</em> styling again, and that’s something
          I didn’t think was possible after years of battling with stylesheets.
        </p>

        <p>
          So yeah, Tailwind CSS: Love at first class. 💅 I’m never looking back.
        </p>
      </article>
    </main>
  );
}
