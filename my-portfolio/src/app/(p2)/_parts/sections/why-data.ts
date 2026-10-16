import { FiLayout, FiMic, FiServer, FiTerminal } from "react-icons/fi";

export const WHY_ICONS = [FiServer, FiLayout, FiMic, FiTerminal];

/* v3: one plain line under each title, so a visitor reads what the
   discipline delivers before the tool names. Same order as `skills`. */
export const WHY_NOTES = [
  "APIs, data models and auth that hold up under real traffic.",
  "Typed, fast interfaces, built from the design file to deploy.",
  "Voice and chat agents that handle live calls — in two languages.",
  "Containers, CI/CD and cloud hosting, with zero-downtime releases.",
];

/* "SQLAlchemy · Alembic" is one entry in `skills`; as chips each tool
   stands alone, so the pairs are split on their own dot. */
export const whyTools = (items: string[]) => items.flatMap((it) => it.split(" · "));
