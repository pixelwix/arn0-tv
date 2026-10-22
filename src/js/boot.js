/* Start-up order: UI core, Settings views, then Home (which shows itself). */
(function () {
    'use strict';

    function fitPreview() {
        if (!window.__TIZEN_MOCK__) return;
        document.documentElement.classList.add('preview');
        var scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
        document.getElementById('stage').style.transform = 'scale(' + scale + ')';
    }

    fitPreview();
    window.addEventListener('resize', fitPreview);

    try { UI.init(); } catch (e) { DevLog.log('UI.init FAILED: ' + DevLog.errorText(e)); }
    try { Settings.init(); } catch (e) { DevLog.log('Settings.init FAILED: ' + DevLog.errorText(e)); }
    try { Screensaver.init(); } catch (e) { DevLog.log('Screensaver.init FAILED: ' + DevLog.errorText(e)); }
    try { Home.init(); } catch (e) { DevLog.log('Home.init FAILED: ' + DevLog.errorText(e)); }

    // Preview only: open a screen directly, e.g. http://localhost:8080/#settings
    var view = location.hash.slice(1);
    if (window.__TIZEN_MOCK__ && view) {
        try {
            UI.show(view);
        } catch (e) {
            // Unknown screen name: stay on Home.
        }
    }
})();
