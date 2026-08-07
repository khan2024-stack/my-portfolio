// ══════════════════════════════════════════════════════════════════════
// CASE STUDY — Sara
// Every claim here is drawn from the project's own README. Nothing is
// estimated or rounded up; where a number is quoted, the count it came
// from is quoted with it.
// ══════════════════════════════════════════════════════════════════════

export const saraCase = {
  slug: "sara",
  eyebrow: "Case study",
  title: "Sara — a phone agent that holds a real conversation",
  standfirst:
    "A bilingual English and Gulf Arabic voice agent answering live inbound sales calls for a car care company in Abu Dhabi. It quotes nineteen priced services, remembers what was said earlier in the call, and passes 95% of 255 automated assertions.",
  client: "Capital X Car Care · Abu Dhabi, United Arab Emirates",
  period: "2025 — Present",
  role: "AI Voice Systems Engineer · sole engineer",

  /* Four figures, each with the denominator it came from. A percentage
     with no count behind it is marketing. */
  figures: [
    { value: "95%", label: "Assertion pass rate", note: "Across <b>255</b> automated tests" },
    { value: "100%", label: "Real-conversation scenarios", note: "Full-length calls, end to end" },
    { value: "19", label: "Priced services quoted", note: "From a live price list" },
    { value: "2", label: "Languages, one agent", note: "English and Gulf Arabic" },
  ],

  sections: [
    {
      heading: "The problem",
      paragraphs: [
        "Inbound sales calls were being missed. A car care business takes bookings by phone, and every unanswered ring is a job that goes to a competitor — but staffing a line through evenings and weekends costs more than the calls are worth.",
        "The obvious fix is an IVR menu, and it is the wrong one. Callers do not know which menu branch a ceramic coating quote lives under, and they will not sit through four options to find out. What the business actually needed was something that could be <em>asked a question</em> and answer it with a real price.",
      ],
    },
    {
      heading: "Why this pipeline",
      paragraphs: [
        "The hard constraint on a phone agent is not accuracy, it is latency. A person will tolerate a pause of roughly a second before they assume the line has dropped and start talking over you. Everything in the design follows from that budget.",
        "So each stage was chosen for speed rather than capability. Speech recognition streams rather than waiting for the caller to finish. Generation runs on Groq because the tokens arrive fast enough to start speaking before the sentence is finished. Retrieval is a vector lookup against the price list rather than stuffing the whole catalogue into the prompt — cheaper, and it keeps the model from inventing a service that is not sold.",
        "Session state sits in Redis because the agent needs to remember what was said thirty seconds ago without a database round trip. That is what lets a caller say <em>“and how much for the bigger one?”</em> and get a sensible answer.",
      ],
    },
    {
      heading: "Getting it to bilingual",
      paragraphs: [
        "Gulf Arabic was the part that could not be bought off the shelf. Callers switch between Arabic and English inside a single sentence, often inside a single clause, and a model told to answer in one language will fight them.",
        "The routing layer detects the language of each turn rather than the call, so the agent follows the caller instead of forcing a choice at the start. Persona and tone are held separately from the language so the agent does not become a different character when it switches.",
      ],
    },
    {
      heading: "Proving it works",
      paragraphs: [
        "A voice agent cannot be tested by listening to it. There are too many ways a conversation can go, and the failures that matter — quoting the wrong price, forgetting the car model, answering a question that was not asked — only show up in the specific turn where they happen.",
        "So the behaviour is pinned by 255 automated assertions covering intent, pricing accuracy, retrieval grounding, memory across turns and persona consistency. The suite currently passes 95%. The scenarios that run as full-length conversations, rather than isolated turns, pass 100% — which is the number that matters most, because that is the shape of a real call.",
      ],
    },
    {
      heading: "What it runs on",
      paragraphs: [
        "FastAPI on Google Cloud Run, with Twilio handling the media stream in both directions. Streaming speech-to-text and text-to-speech at both ends, Groq for generation, Pinecone for retrieval and Redis for session state.",
        "It is a private client system, so there is no public URL to visit — which is why the card in the work grid draws a waveform instead of showing a screenshot.",
      ],
    },
  ],

  stack: [
    { group: "Voice", items: ["Twilio media streaming", "Streaming STT", "Streaming TTS"] },
    { group: "Intelligence", items: ["Groq", "Pinecone retrieval", "Intent routing", "Persona control"] },
    { group: "Platform", items: ["FastAPI", "Google Cloud Run", "Redis session state"] },
  ],
};
