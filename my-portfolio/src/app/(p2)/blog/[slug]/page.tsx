import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/app/portfolio-content/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.description, publishedTime: p.date },
  };
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <article className="p2-sec p2-article">
      <Link className="p2-link" href="/blog">
        <span aria-hidden="true">&larr;</span> All posts
      </Link>
      <time dateTime={p.date}>
        {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
      </time>
      <h1>{p.title}</h1>
      {p.body.map((b, i) =>
        b.t === "p" ? (
          <p key={i}>{b.text}</p>
        ) : b.t === "h2" ? (
          <h2 key={i}>{b.text}</h2>
        ) : b.t === "ul" ? (
          <ul key={i}>
            {b.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        ) : (
          <pre key={i}>
            <code>{b.text}</code>
          </pre>
        ),
      )}
    </article>
  );
}
