"use client";

import Link from "next/link";

const blogPosts = [
  {
    slug: "day-i-broke-everything",
    title: "The Day I Broke Everything 🧨",
    date: "July 28, 2025",
    summary: "I pushed to production without testing. Chaos. But here’s how I fixed it and what I learned.",
  },
  {
    slug: "learning-tailwind",
    title: "Tailwind CSS: Love at First Class 💅",
    date: "July 22, 2025",
    summary: "At first I was confused. Now? I can’t live without it. A cute lil journey into utility-first CSS.",
  },
  {
    slug: "nextjs-routing-made-easy",
    title: "Next.js Routing Made Easy 🛣",
    date: "July 15, 2025",
    summary: "Dynamic routes scared me until I built my first one. Here’s a beginner-friendly breakdown.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-700 mb-2">My Blog Posts 📚</h1>
        <p className="text-gray-600 text-lg">Tiny stories from my coding journey, with bugs and sparkle ✨</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-pink-600 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.summary}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block text-pink-500 font-medium hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
