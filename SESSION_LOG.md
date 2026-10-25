# Session Log

Newest first. One entry per working session: goal, changes, validation, handover.

### Session 2026-10-24 — Session log started; install addresses moved out of committed code

- **Goal:** Give this fork a session log and keep install-specific addresses out of this public
  repository.
- **Changes:**
  - `src/js/config.js`: the Tailgate dock tile now uses a placeholder address. The real one lives
    in `src/js/config.local.js`, which is ignored by git and loaded right after `config.js`
    (`src/index.html`). `src/js/config.local.example.js` shows the format; README "Local
    settings" explains it.
  - `src/config.xml` version 0.6.12 → 0.6.13.
  - `CLAUDE.md` synchronized with `AGENTS.md` (its title line had drifted).
  - Known: an earlier commit's history contains a LAN debug-log address that the code no longer
    uses; history was not rewritten.
- **Validation:** `node --check` on all three config files; loading `config.js` alone gives the
  placeholder and `config.js` + `config.local.js` gives the real address; `npm run build`
  produced `dist/arn0-launcher.wgt` containing `js/config.local.js` and version 0.6.13.
- **Handover:** `src/js/config.local.js` is not in git, so copy it along with the repository
  when moving machines. Not installed on the TV in this session.

### Earlier history (from git, before this log existed)

- 2026-10-21: Tizen 3.0 fix (polyfills, `padStart` black screen) and a 4-button dock (Xbox,
  Apple TV, Switch, Tailgate) on this fork.
- 2026-10-20 to 2026-10-21: upstream work by Arnaud Etienne (initial launcher, remote hints,
  navigation sounds, hidden runner game, idle screen saver), forked from `NelsonEU/arn0-tv`.
