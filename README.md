# My Oracle AI World Agenda

A mobile-first, offline personal tracker for the Fusion Data Intelligence sessions shown in the provided Oracle AI World 2026 schedule.

## Features

- All 16 sessions from the supplied schedule
- The three mainstage keynotes from the [official keynotes page](https://www.oracle.com/ai-world/keynotes/)
- Suggested ERP business analyst priorities
- Must-attend and interested selections
- Automatic conflict warnings
- Search and topic filters
- Notes saved only on the device
- Markdown notes export
- `.ics` calendar export with 15-minute reminders
- Installable Progressive Web App (PWA)
- Offline app shell

## Preview on this computer

This app has no dependencies or build step. From this folder, run a local static server:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080` in a browser. Service workers do not run when opening `index.html` directly from the file system.

## Put it on a phone

A PWA must be hosted over HTTPS before a phone can install it. Deploy this folder to a static host such as GitHub Pages, Cloudflare Pages, Netlify, or an existing web server.

After deployment:

- **iPhone:** Open the HTTPS address in Safari, tap **Share**, choose **Add to Home Screen**, and tap **Add**.
- **Android:** Open the HTTPS address in Chrome, open the menu, and choose **Install app** or **Add to Home screen**.

The install button inside the app also displays device-appropriate instructions.

## Important schedule assumptions

- Dates and start times come from the supplied image.
- Keynotes use an assumed 60-minute duration.
- Learning sessions, the roundtable, and HOL2325 use an assumed 45-minute duration.
- HOL2327 uses an assumed 60-minute duration.
- Calendar entries use the `America/Los_Angeles` time zone.
- Room names were not visible in the image. Verify rooms, times, descriptions, and schedule changes in the official Oracle AI World app.

## Data and privacy

Selections and notes use browser `localStorage`; there is no backend or sign-in. Clearing browser data removes the saved selections and notes, so export notes periodically.
