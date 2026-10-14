import type { Metadata } from "next";
import Link from "next/link";
import { sortedPosts } from "@/app/portfolio-content/posts";
import PageIntro from "../_parts/PageIntro";

const all = sortedPosts();

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from production: building AI voice agents, Shopify and Printful automation, and Django/React commerce platforms.",
  alternates: { canonical: "/blog" },
  // No posts yet → keep the page out of search results until there are.
  robots: all.length === 0 ? { index: false, follow: true } : undefined,
};

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function Blog() {
  return (
    <>
      <PageIntro
        eyebrow="Blog"
        title="Notes from production"
        lede="What I learned building AI voice agents, order automation and commerce platforms — written from the work, not from theory."
      />
      <section className="p2-sec">
        {all.length === 0 ? (
          <p className="p2-lede">
            The first posts are on their way. Meanwhile, the{" "}
            <Link href="/work/sara">Sara case study</Link> is the best
            write-up of how I work.
          </p>
        ) : (
          <ul className="p2-posts">
            {all.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`}>
                  <time dateTime={p.date}>{fmt(p.date)}</time>
                  <h2>{p.title}</h2>
                  <p>{p.description}</p>
                  <span aria-hidden="true">Read &#8599;</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
