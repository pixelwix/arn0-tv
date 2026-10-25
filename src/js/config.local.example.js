/*
 * Local settings for this install. Copy to config.local.js (ignored by git) and edit.
 * Loaded right after config.js, so it can change anything in window.LAUNCHER_CONFIG.
 * Keep private addresses here, never in config.js.
 */
(function (c) {
    if (!c || !c.inputs) return;
    c.inputs.forEach(function (input) {
        if (input.brand === 'tailgate') input.url = 'https://tailgate.example.com/';
    });
})(window.LAUNCHER_CONFIG);
