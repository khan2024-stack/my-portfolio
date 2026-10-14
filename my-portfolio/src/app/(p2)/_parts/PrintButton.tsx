"use client";

export default function PrintButton() {
  return (
    <button type="button" className="p2-btn" onClick={() => window.print()}>
      Save as PDF / Print <span aria-hidden="true">&#8599;</span>
    </button>
  );
}
