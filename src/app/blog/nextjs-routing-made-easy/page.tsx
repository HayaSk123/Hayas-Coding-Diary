export default function NextjsRoutingMadeEasy() {
  const publishDate = "2025-07-15";
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-pink-700 mb-2">
          Next.js Routing Made Easy 🛣
        </h1>
        <p className="text-sm text-gray-500">
          <time dateTime={publishDate}>Published on July 15, 2025</time>
        </p>
      </header>

      <article className="prose prose-blue max-w-none">
        <p>
          Dynamic routes used to scare me. I thought routing in Next.js would be
          like configuring a whole maze of files and writing code just to get a
          page to appear. Turns out… Next.js routing is probably the most
          beginner-friendly thing ever.
        </p>

        <h2>File = Route 📂</h2>
        <p>
          The first thing that blew my mind was that in Next.js,{" "}
          <strong>your folder structure *is* your routing system</strong>.
        </p>

        <ul>
          <li>
            <code>pages/index.tsx</code> → <code>/</code>
          </li>
          <li>
            <code>pages/about.tsx</code> → <code>/about</code>
          </li>
          <li>
            <code>pages/blog/first-post.tsx</code> → <code>/blog/first-post</code>
          </li>
        </ul>

        <p>
          No extra config, no messing with routers—Next.js just reads your file
          structure and serves the routes. Simple.
        </p>

        <h2>Dynamic Routes = Magic ✨</h2>
        <p>
          Then I met <strong>dynamic routes</strong>. That’s when the
          scariness kicked in—until I built my first one.
        </p>

        <p>
          Want a blog where each post has its own page? Easy. Just create a file
          like this:
        </p>

        <pre>
{`pages/blog/[slug].tsx`}
        </pre>

        <p>
          Whatever you put in the square brackets becomes your dynamic parameter.  
          Visit <code>/blog/hello-world</code>, and Next.js passes{" "}
          <code>slug = "hello-world"</code> to your page.
        </p>

        <h2>Fetching Data per Route 🪄</h2>
        <p>
          If you’re using <code>getStaticProps</code> and{" "}
          <code>getStaticPaths</code>, you can generate all your pages at build
          time. I used this to map my blog post files to pretty URLs without any
          complex setup.
        </p>

        <blockquote>
          “Once you understand dynamic routes, the whole app feels like LEGO
          blocks you can snap together.”
        </blockquote>

        <h2>Why I’m Not Scared Anymore 😎</h2>
        <p>
          Next.js routing made me feel like a pro because it removes the boilerplate
          of traditional routing systems. Instead of thinking about routers,
          paths, and configs, I just think in terms of pages and components.
        </p>

        <p>
          So if dynamic routes ever felt intimidating to you—trust me—they’re
          easier than they look. Build one, and you’ll never look back.
        </p>
      </article>
    </main>
  );
}
