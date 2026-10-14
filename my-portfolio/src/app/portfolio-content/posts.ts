/**
 * Blog posts. Add one object to `posts` and it appears at /blog, gets its
 * own page at /blog/<slug>, and is added to the sitemap and the RSS feed.
 * With the array empty the blog stays out of search results and is not
 * advertised anywhere.
 *
 * `body` is a list of simple blocks — no markdown dependency:
 *   { t: "p", text }   paragraph
 *   { t: "h2", text }  section heading
 *   { t: "ul", items } bullet list
 *   { t: "code", text, lang? } code block
 */
export type PostBlock =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "code"; text: string; lang?: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. "2026-11-02" */
  date: string;
  tags?: string[];
  body: PostBlock[];
};

export const posts: Post[] = [];

export const sortedPosts = () =>
  [...posts].sort((a, b) => b.date.localeCompare(a.date));
