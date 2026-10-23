"use strict";

const DAYS = [
  { date: "2026-10-26", short: "Mon", label: "Monday", display: "Oct 26" },
  { date: "2026-10-27", short: "Tue", label: "Tuesday", display: "Oct 27" },
  { date: "2026-10-28", short: "Wed", label: "Wednesday", display: "Oct 28" }
];

const SESSIONS = [
  {
    id: "LRN1222",
    date: "2026-10-26",
    time: "11:30",
    duration: 45,
    type: "Learning session",
    title: "How HR Leaders Turn Workforce Signals into Better Decisions",
    description: "Use workforce indicators to identify retention, skills, capacity, and planning issues and turn them into actions.",
    tags: ["HCM", "Business signals"],
    defaultPriority: "none"
  },
  {
    id: "HOL2325",
    date: "2026-10-26",
    time: "12:00",
    duration: 45,
    type: "Hands-on lab",
    title: "Intro to Fusion Data Intelligence and AI Agents for Business Users Workshop",
    description: "A guided introduction to FDI, packaged analytics, business metrics, and AI agents for business users.",
    tags: ["Introduction", "AI agents", "Hands-on"],
    defaultPriority: "must"
  },
  {
    id: "LRN2171",
    date: "2026-10-26",
    time: "12:45",
    duration: 45,
    type: "CEAL-led session",
    title: "FDI Implementation Lessons Across Finance, HR, and Supply Chain",
    description: "Implementation lessons about deployment, validation, security, governance, adoption, and common mistakes across Fusion domains.",
    tags: ["Implementation", "ERP", "HCM", "SCM"],
    defaultPriority: "must"
  },
  {
    id: "LRN1220",
    date: "2026-10-26",
    time: "12:45",
    duration: 45,
    type: "Learning session",
    title: "Inside Fusion Data Intelligence’s AI-Powered Analytics Platform",
    description: "Explore curated Fusion data, semantic models, packaged analytics, AI/ML, security, and extension options.",
    tags: ["Platform", "Architecture", "AI/ML"],
    defaultPriority: "none"
  },
  {
    id: "HOL2327",
    date: "2026-10-26",
    time: "14:00",
    duration: 60,
    type: "Hands-on lab",
    title: "Extending Fusion Data Intelligence with Agents and ML",
    description: "Practice extending FDI with custom analytics, machine-learning models, and agents.",
    tags: ["AI agents", "AI/ML", "Hands-on"],
    defaultPriority: "must"
  },
  {
    id: "LRN1226",
    date: "2026-10-26",
    time: "14:00",
    duration: 45,
    type: "Learning session",
    title: "Fusion Data Intelligence for CX: From Customer Signals to Revenue Opportunities",
    description: "Connect sales, marketing, and service signals to identify pipeline opportunities, customer risk, churn, and next actions.",
    tags: ["CX", "Revenue", "Business signals"],
    defaultPriority: "none"
  },
  {
    id: "LRN1215",
    date: "2026-10-26",
    time: "15:15",
    duration: 45,
    type: "Featured session",
    title: "How Fusion Data Intelligence Delivers Agentic Intelligence at Enterprise Scale",
    description: "Learn how governed enterprise data can ground AI agents and support insights and actions across business functions.",
    tags: ["AI agents", "Enterprise", "Featured"],
    defaultPriority: "must"
  },
  {
    id: "LRN1218",
    date: "2026-10-26",
    time: "15:15",
    duration: 45,
    type: "Learning session",
    title: "The Intelligent Workforce: AI-Powered HR with Fusion Data Intelligence",
    description: "Apply AI and people analytics to workforce planning, talent, retention, productivity, and organizational decisions.",
    tags: ["HCM", "AI/ML", "Workforce"],
    defaultPriority: "none"
  },
  {
    id: "ROUND-FDI",
    date: "2026-10-26",
    time: "16:15",
    duration: 45,
    type: "Roundtable",
    title: "Analyst Roundtable – FDI",
    description: "Discuss FDI adoption, market direction, customer expectations, and product strategy with analysts and peers.",
    tags: ["Strategy", "Networking"],
    defaultPriority: "interested"
  },
  {
    id: "LRN1216",
    date: "2026-10-27",
    time: "08:00",
    duration: 45,
    type: "Learning session",
    title: "AI-Driven Supply Chain Visibility and Resilience with Fusion Data Intelligence",
    description: "Use supply-chain signals to monitor demand, inventory, suppliers, logistics, disruptions, and operational risk.",
    tags: ["SCM", "AI/ML", "Risk"],
    defaultPriority: "none"
  },
  {
    id: "LRN1221",
    date: "2026-10-27",
    time: "08:00",
    duration: 45,
    type: "Learning session",
    title: "Customer Perspectives: AI-Led Finance and Procurement Transformation",
    description: "Hear customer experiences involving finance automation, spend visibility, suppliers, forecasting, and adoption.",
    tags: ["ERP", "Finance", "Procurement"],
    defaultPriority: "must"
  },
  {
    id: "LRN1219",
    date: "2026-10-27",
    time: "10:30",
    duration: 45,
    type: "Learning session",
    title: "Breaking Down Silos: Enterprise Intelligence Across Finance, HR, Supply Chain",
    description: "Connect ERP, HCM, and SCM data through shared metrics and understand cross-functional business effects.",
    tags: ["ERP", "HCM", "SCM", "Enterprise"],
    defaultPriority: "must"
  },
  {
    id: "BO02214",
    date: "2026-10-27",
    time: "10:30",
    duration: 45,
    type: "Build session",
    title: "Build and Extend AI-Ready Analytics with Fusion Data Intelligence",
    description: "Build beyond packaged content with dashboards, semantic extensions, custom data, external sources, and AI capabilities.",
    tags: ["Build", "Platform", "AI/ML"],
    defaultPriority: "none"
  },
  {
    id: "LRN1217",
    date: "2026-10-27",
    time: "11:45",
    duration: 45,
    type: "Learning session",
    title: "Finance That Thinks Ahead: Agentic Intelligence with Fusion Data Intelligence",
    description: "Use agents and predictive insights to detect anomalies, explain changes, identify risks, and recommend finance actions.",
    tags: ["Finance", "AI agents", "ERP"],
    defaultPriority: "must"
  },
  {
    id: "LRN1227",
    date: "2026-10-27",
    time: "14:15",
    duration: 45,
    type: "Featured session",
    title: "AI-Powered Business Signals with Fusion Data Intelligence",
    description: "Identify important enterprise changes, explain their business impact, and surface urgent risks and opportunities.",
    tags: ["Business signals", "AI/ML", "Featured"],
    defaultPriority: "must"
  },
  {
    id: "LRN2340",
    date: "2026-10-28",
    time: "11:30",
    duration: 45,
    type: "CEAL-led session",
    title: "Faster Insights: Optimize FDI Workbook Performance",
    description: "Improve workbook speed using better filters, queries, data design, visualizations, and diagnostic techniques.",
    tags: ["Performance", "Workbooks", "Technical"],
    defaultPriority: "must"
  }
];

const STORAGE_KEY = "oracle-ai-world-tracker-v1";
const PRIORITY_ORDER = ["none", "interested", "must"];
const PRIORITY_LABELS = {
  none: "☆ Add to picks",
  interested: "★ Interested",
  must: "● Must attend"
};

const elements = {
  dayTabs: document.querySelector("#dayTabs"),
  sessionList: document.querySelector("#sessionList"),
  template: document.querySelector("#sessionTemplate"),
  searchInput: document.querySelector("#searchInput"),
  topicFilter: document.querySelector("#topicFilter"),
  savedOnly: document.querySelector("#savedOnly"),
  conflictBanner: document.querySelector("#conflictBanner"),
  emptyState: document.querySelector("#emptyState"),
  mustCount: document.querySelector("#mustCount"),
  savedCount: document.querySelector("#savedCount"),
  noteCount: document.querySelector("#noteCount"),
  nextSession: document.querySelector("#nextSession"),
  calendarButton: document.querySelector("#calendarButton"),
  exportButton: document.querySelector("#exportButton"),
  installButton: document.querySelector("#installButton"),
  installDialog: document.querySelector("#installDialog"),
  installInstructions: document.querySelector("#installInstructions")
};

let state = loadState();
let selectedDay = chooseInitialDay();
let deferredInstallPrompt = null;
let noteSaveTimer;

function loadState() {
  const defaults = {
    priorities: Object.fromEntries(SESSIONS.map((session) => [session.id, session.defaultPriority])),
    notes: {}
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      priorities: { ...defaults.priorities, ...(saved?.priorities || {}) },
      notes: { ...defaults.notes, ...(saved?.notes || {}) }
    };
  } catch {
    return defaults;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function chooseInitialDay() {
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
  return DAYS.find((day) => day.date === today)?.date || DAYS[0].date;
}

function sessionStart(session) {
  return new Date(`${session.date}T${session.time}:00-07:00`);
}

function formatTime(time) {
  const [hour, minute] = time.split(":").map(Number);
  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${String(minute).padStart(2, "0")} ${suffix}`;
}

function getPriority(sessionId) {
  return state.priorities[sessionId] || "none";
}

function getPickedSessions() {
  return SESSIONS.filter((session) => getPriority(session.id) !== "none");
}

function getConflictMap() {
  const picked = getPickedSessions();
  const conflicts = new Map();

  for (let firstIndex = 0; firstIndex < picked.length; firstIndex += 1) {
    for (let secondIndex = firstIndex + 1; secondIndex < picked.length; secondIndex += 1) {
      const first = picked[firstIndex];
      const second = picked[secondIndex];
      if (first.date !== second.date) continue;

      const firstStart = sessionStart(first);
      const firstEnd = new Date(firstStart.getTime() + first.duration * 60000);
      const secondStart = sessionStart(second);
      const secondEnd = new Date(secondStart.getTime() + second.duration * 60000);
      const overlaps = firstStart < secondEnd && secondStart < firstEnd;

      if (overlaps) {
        conflicts.set(first.id, [...(conflicts.get(first.id) || []), second]);
        conflicts.set(second.id, [...(conflicts.get(second.id) || []), first]);
      }
    }
  }

  return conflicts;
}

function render() {
  renderSummary();
  renderDayTabs();
  renderFilters();
  renderSessions();
  renderNextSession();
}

function renderSummary() {
  const priorities = Object.values(state.priorities);
  elements.mustCount.textContent = priorities.filter((priority) => priority === "must").length;
  elements.savedCount.textContent = priorities.filter((priority) => priority === "interested").length;
  elements.noteCount.textContent = Object.values(state.notes).filter((note) => note.trim()).length;
}

function renderDayTabs() {
  elements.dayTabs.replaceChildren();
  DAYS.forEach((day) => {
    const picks = SESSIONS.filter((session) => session.date === day.date && getPriority(session.id) !== "none").length;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-tab";
    button.setAttribute("aria-selected", String(day.date === selectedDay));
    button.innerHTML = `${day.short}<span>${day.display}${picks ? ` · ${picks} picks` : ""}</span>`;
    button.addEventListener("click", () => {
      selectedDay = day.date;
      render();
      window.scrollTo({ top: document.querySelector(".summary-bar").offsetTop, behavior: "smooth" });
    });
    elements.dayTabs.append(button);
  });
}

function renderFilters() {
  if (elements.topicFilter.options.length > 1) return;
  const tags = [...new Set(SESSIONS.flatMap((session) => session.tags))].sort();
  tags.forEach((tag) => {
    const option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    elements.topicFilter.append(option);
  });
}

function renderSessions() {
  const query = elements.searchInput.value.trim().toLowerCase();
  const topic = elements.topicFilter.value;
  const pickedOnly = elements.savedOnly.checked;
  const conflicts = getConflictMap();

  const sessions = SESSIONS.filter((session) => {
    const searchable = `${session.id} ${session.title} ${session.description} ${session.tags.join(" ")}`.toLowerCase();
    return session.date === selectedDay
      && (!query || searchable.includes(query))
      && (topic === "all" || session.tags.includes(topic))
      && (!pickedOnly || getPriority(session.id) !== "none");
  });

  elements.sessionList.replaceChildren();
  sessions.forEach((session) => elements.sessionList.append(createSessionCard(session, conflicts.get(session.id) || [])));
  elements.emptyState.hidden = sessions.length > 0;

  const dayConflicts = [...conflicts.entries()].filter(([sessionId]) => {
    return SESSIONS.find((session) => session.id === sessionId)?.date === selectedDay;
  });
  const conflictCount = dayConflicts.reduce((total, [, overlapping]) => total + overlapping.length, 0) / 2;
  elements.conflictBanner.hidden = conflictCount === 0;
  elements.conflictBanner.textContent = conflictCount
    ? `⚠ ${conflictCount} schedule overlap${conflictCount > 1 ? "s" : ""} in your picks. Review the marked sessions.`
    : "";
}

function createSessionCard(session, conflicts) {
  const card = elements.template.content.firstElementChild.cloneNode(true);
  const priority = getPriority(session.id);
  card.dataset.priority = priority;
  card.querySelector(".session-time").textContent = formatTime(session.time);
  card.querySelector(".session-id").textContent = session.id;
  card.querySelector(".session-type").textContent = session.type;
  card.querySelector(".session-title").textContent = session.title;
  card.querySelector(".session-description").textContent = session.description;

  const tagList = card.querySelector(".tag-list");
  session.tags.forEach((tag) => {
    const element = document.createElement("span");
    element.className = "tag";
    element.textContent = tag;
    tagList.append(element);
  });

  const conflictNote = card.querySelector(".conflict-note");
  if (conflicts.length) {
    conflictNote.hidden = false;
    conflictNote.textContent = `Conflicts with ${conflicts.map((item) => `${item.id} ${item.title}`).join(", ")}`;
  }

  const priorityButton = card.querySelector(".priority-button");
  priorityButton.dataset.priority = priority;
  priorityButton.textContent = PRIORITY_LABELS[priority];
  priorityButton.setAttribute("aria-label", `Change priority for ${session.title}. Current: ${priority}`);
  priorityButton.addEventListener("click", () => {
    const currentIndex = PRIORITY_ORDER.indexOf(getPriority(session.id));
    state.priorities[session.id] = PRIORITY_ORDER[(currentIndex + 1) % PRIORITY_ORDER.length];
    saveState();
    render();
  });

  const notePanel = card.querySelector(".note-panel");
  const noteButton = card.querySelector(".notes-button");
  const textarea = card.querySelector("textarea");
  const savedMessage = card.querySelector(".saved-message");
  textarea.value = state.notes[session.id] || "";
  noteButton.classList.toggle("has-note", Boolean(textarea.value.trim()));
  noteButton.addEventListener("click", () => {
    notePanel.hidden = !notePanel.hidden;
    noteButton.textContent = notePanel.hidden ? "Notes" : "Close notes";
    if (!notePanel.hidden) textarea.focus();
  });
  textarea.addEventListener("input", () => {
    state.notes[session.id] = textarea.value;
    saveState();
    noteButton.classList.toggle("has-note", Boolean(textarea.value.trim()));
    renderSummary();
    clearTimeout(noteSaveTimer);
    savedMessage.classList.add("visible");
    noteSaveTimer = setTimeout(() => savedMessage.classList.remove("visible"), 1100);
  });

  return card;
}

function renderNextSession() {
  const now = new Date();
  const upcoming = getPickedSessions()
    .filter((session) => sessionStart(session) >= now)
    .sort((a, b) => sessionStart(a) - sessionStart(b))[0];

  if (!upcoming) {
    const eventEnd = new Date("2026-10-28T17:00:00-07:00");
    elements.nextSession.innerHTML = now > eventEnd
      ? '<span class="next-label">Event complete</span><span class="next-title">Export your notes and follow-ups.</span>'
      : '<span class="next-label">Your agenda</span><span class="next-title">Add sessions to see what is coming next.</span>';
    return;
  }

  const day = DAYS.find((item) => item.date === upcoming.date);
  const difference = sessionStart(upcoming) - now;
  let countdown;
  if (difference < 60 * 60 * 1000) countdown = `in ${Math.max(1, Math.ceil(difference / 60000))} min`;
  else if (difference < 24 * 60 * 60 * 1000) countdown = `in ${Math.ceil(difference / 3600000)} hr`;
  else countdown = `in ${Math.ceil(difference / 86400000)} days`;

  elements.nextSession.replaceChildren();
  const label = document.createElement("span");
  label.className = "next-label";
  label.textContent = `Next pick · ${countdown}`;
  const title = document.createElement("span");
  title.className = "next-title";
  title.textContent = upcoming.title;
  const detail = document.createElement("span");
  detail.className = "next-detail";
  detail.textContent = `${day.label}, ${day.display} · ${formatTime(upcoming.time)} · ${upcoming.id}`;
  elements.nextSession.append(label, title, detail);
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// iPhone home-screen apps handle blob downloads poorly, so prefer the native share sheet.
async function shareOrDownload({ filename, content, type, title, shareAsText }) {
  try {
    if (shareAsText && navigator.share) {
      await navigator.share({ title, text: content });
      return;
    }
    const file = new File([content], filename, { type });
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ title, files: [file] });
      return;
    }
  } catch (error) {
    if (error.name === "AbortError") return;
  }
  downloadFile(filename, content, type);
}

function exportNotes() {
  const picked = getPickedSessions().sort((a, b) => sessionStart(a) - sessionStart(b));
  const lines = [
    "# My Oracle AI World 2026 FDI Notes",
    "",
    `Exported: ${new Date().toLocaleString()}`,
    ""
  ];

  DAYS.forEach((day) => {
    const sessions = picked.filter((session) => session.date === day.date);
    if (!sessions.length) return;
    lines.push(`## ${day.label}, ${day.display}`, "");
    sessions.forEach((session) => {
      const priority = getPriority(session.id) === "must" ? "Must attend" : "Interested";
      lines.push(
        `### ${formatTime(session.time)} — ${session.id}: ${session.title}`,
        `**Priority:** ${priority}`,
        "",
        state.notes[session.id]?.trim() || "_No notes yet._",
        ""
      );
    });
  });

  shareOrDownload({
    filename: "oracle-ai-world-fdi-notes.md",
    content: lines.join("\n"),
    type: "text/markdown",
    title: "Oracle AI World FDI Notes",
    shareAsText: true
  });
}

function formatIcsDate(date, time, minutesToAdd = 0) {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const value = new Date(Date.UTC(year, month - 1, day, hour, minute + minutesToAdd));
  const pad = (number) => String(number).padStart(2, "0");
  return `${value.getUTCFullYear()}${pad(value.getUTCMonth() + 1)}${pad(value.getUTCDate())}T${pad(value.getUTCHours())}${pad(value.getUTCMinutes())}00`;
}

function escapeIcs(value) {
  return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

function exportCalendar() {
  const picked = getPickedSessions().sort((a, b) => sessionStart(a) - sessionStart(b));
  if (!picked.length) {
    window.alert("Add at least one session to your picks first.");
    return;
  }

  const events = picked.flatMap((session) => [
    "BEGIN:VEVENT",
    `UID:${session.id}-2026@my-ai-world.local`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}`,
    `DTSTART;TZID=America/Los_Angeles:${formatIcsDate(session.date, session.time)}`,
    `DTEND;TZID=America/Los_Angeles:${formatIcsDate(session.date, session.time, session.duration)}`,
    `SUMMARY:${escapeIcs(`${session.id} — ${session.title}`)}`,
    `DESCRIPTION:${escapeIcs(`${session.description}\n\nVerify the room and final time in the official Oracle AI World app.`)}`,
    "LOCATION:The Venetian Convention & Expo Center, Las Vegas",
    "BEGIN:VALARM",
    "TRIGGER:-PT15M",
    "ACTION:DISPLAY",
    `DESCRIPTION:${escapeIcs(session.title)}`,
    "END:VALARM",
    "END:VEVENT"
  ]);

  const calendar = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//My AI World Tracker//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Oracle AI World FDI Picks",
    "X-WR-TIMEZONE:America/Los_Angeles",
    ...events,
    "END:VCALENDAR"
  ].join("\r\n");

  shareOrDownload({
    filename: "oracle-ai-world-fdi-picks.ics",
    content: calendar,
    type: "text/calendar",
    title: "Oracle AI World FDI Picks"
  });
}

function showInstallHelp() {
  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
  elements.installInstructions.innerHTML = isIos
    ? "<p>In Safari:</p><ol><li>Tap the <strong>Share</strong> button.</li><li>Choose <strong>Add to Home Screen</strong>.</li><li>Tap <strong>Add</strong>.</li></ol><p>The tracker will then open like an app and work offline.</p>"
    : "<p>Open this page in Chrome, tap the browser menu, and choose <strong>Install app</strong> or <strong>Add to Home screen</strong>.</p><p>Once installed, your agenda and notes remain available offline.</p>";
  elements.installDialog.showModal();
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  elements.installButton.hidden = false;
});

elements.installButton.addEventListener("click", async () => {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    return;
  }
  showInstallHelp();
});

elements.searchInput.addEventListener("input", renderSessions);
elements.topicFilter.addEventListener("change", renderSessions);
elements.savedOnly.addEventListener("change", renderSessions);
elements.calendarButton.addEventListener("click", exportCalendar);
elements.exportButton.addEventListener("click", exportNotes);

if (!window.matchMedia("(display-mode: standalone)").matches) {
  elements.installButton.hidden = false;
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}

render();
setInterval(renderNextSession, 60000);

