/*
 * Home screen content.
 *
 * apps: each entry picks the first installed app matching it:
 *   { id: 'org.tizen.netflix-app' }   exact app id (most reliable; see "All apps", the id of
 *                                     the focused app is shown at the bottom)
 *   { match: 'netflix' }              case-insensitive regex on id or name
 *   label                             optional display name
 *   brand                             optional key from js/brands.js (otherwise guessed from the name)
 * Entries that match nothing are skipped.
 *
 * inputs: HDMI ports shown in the second row. Set `hdmi` to the port each device is plugged into.
 */
window.LAUNCHER_CONFIG = {
    apps: [
        { id: 'xvvl3S1TT1.TizenTubeStandalone', label: 'YouTube', brand: 'youtube' },
        { id: 'rJeHak5zRg.Spotify', label: 'Spotify' },
        { id: 'Jz7aUrV2Q4.Twitch', label: 'Twitch' },
        { id: 'E0P3lRI4H7.MYTF1', label: 'TF1+' },
        { id: 'org.tizen.netflix-app', label: 'Netflix' },
        { id: 'org.tizen.primevideo', label: 'Prime Video' },
        { id: 'MCmYXNxgcu.DisneyPlus', label: 'Disney+' },
        { id: 'com.samsung.tv.aria-video', label: 'Apple TV' }
    ],

    // Set to false to hide the apps row on Home for a clean inputs-only dashboard
    showApps: false,

    inputs: [
        { hdmi: 1, label: 'Xbox One', brand: 'xbox' },
        { hdmi: 2, label: 'Apple TV', brand: 'appletv' },
        { hdmi: 3, label: 'Nintendo Switch', brand: 'switch' },
        { url: 'https://tailgate.skyn3t.me/', label: 'Tailgate', brand: 'tailgate', portLabel: 'Sports Hub' }
    ],

    // How an input tile switches the TV. See README "HDMI inputs".
    //   'switch+viewer'  set the TV source, then open Samsung's TV viewer (default)
    //   'switch'         only set the TV source
    //   'inapp'          show the input full screen inside the launcher (Back returns)
    inputMethod: 'switch+viewer',

    locale: 'en-US',

    theme: {
        // Starting wallpaper (key from js/wallpapers.js), or null for none (plain gradient).
        // Changed from Settings → Background; the TV remembers the choice.
        wallpaper: 'milky-way'
    },

    /*
     * EXPERIMENTAL navigation sound. Synthesised, so there is no audio file. `move` plays when
     * focus changes, `edge` when it cannot (the end of a row). Tune by ear in the browser
     * preview; `volume` is 0–1 and sits on top of the TV's own volume.
     *
     * Whether this is worth keeping depends on the TV's audio latency: run
     * "Sound: report audio latency" in the Lab screen. Set enabled to false to silence it.
     */
    sound: {
        enabled: true,
        preset: 'soft',
        volume: 0.08,
        minGapMs: 45,
        presets: {
            soft: { label: 'Soft', freq: 620, ms: 30, type: 'sine' },
            warm: { label: 'Warm', freq: 520, ms: 44, type: 'triangle' },
            bright: { label: 'Bright', freq: 1040, ms: 30, type: 'triangle' }
        },
        move: { freq: 880, ms: 38, type: 'triangle' },
        edge: { freq: 200, ms: 70, type: 'sine' },
        select: { freq: 1320, ms: 55, type: 'triangle' }
    },

    // Development log URL (Mac IP:port)
    devLogUrl: 'http://10.0.2.15:8099/log'
};
