import { FiMic } from "react-icons/fi";

/**
 * Sara's stand-in image. No screenshot exists for her — she answers a
 * phone line, there's no interface to photograph — so this fills the
 * image bed everywhere a project screenshot normally goes: two soft
 * pulse rings behind a mic badge, and a bar-height envelope that rises
 * and falls like a real voice signal, each bar's colour scaling with
 * its own height (louder = brighter) rather than two arbitrarily lit
 * bars at fixed positions.
 *
 * One component, not a copy pasted into WorkGrid and WorkShowcase
 * separately — the previous duplicate silently went blank the moment
 * only one copy's markup was updated to match a CSS rework.
 */
export default function VoiceWave() {
  return (
    <span className="p2-tile__wave" aria-hidden="true">
      <span className="p2-tile__pulse" />
      <span className="p2-tile__mic">
        <FiMic />
      </span>
      <span className="p2-tile__bars">
        {[
          18, 28, 22, 38, 30, 50, 42, 64, 55, 78, 68, 92, 74, 88, 58, 70, 48,
          60, 34, 44, 24,
        ].map((h, n) => (
          <i
            key={n}
            style={{
              height: `${h}%`,
              opacity: 0.35 + (h / 100) * 0.65,
              background: h >= 60 ? "var(--p2-accent)" : "#8a8a8a",
              animationDelay: `${n * 90}ms`,
            }}
          />
        ))}
      </span>
    </span>
  );
}
