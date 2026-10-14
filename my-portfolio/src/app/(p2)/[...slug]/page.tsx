import { notFound } from "next/navigation";

/** Catches every unknown URL so it renders (p2)/not-found.tsx inside the
 *  site layout, with a real 404 status, instead of the bare default page. */
export default function CatchAll() {
  notFound();
}
