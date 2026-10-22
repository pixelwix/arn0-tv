/* Universal Polyfills & Global Error Catcher for Tizen TV Browsers */
(function () {
    'use strict';

    // Global Error Trap - broadcasts errors to local DevLog server AND on-screen
    window.onerror = function (msg, url, line, col, err) {
        var str = 'ERROR: ' + msg + ' (' + (url || 'script').split('/').pop() + ':' + line + ':' + col + ')';
        try {
            var x = new XMLHttpRequest();
            x.open('POST', 'http://10.0.2.15:8099/log', true);
            x.setRequestHeader('Content-Type', 'text/plain');
            x.send(JSON.stringify({ t: new Date().toISOString(), message: str }));
        } catch (e) {}

        // Render on-screen banner if TV view failed
        var banner = document.getElementById('debug-banner');
        if (!banner) {
            banner = document.createElement('div');
            banner.id = 'debug-banner';
            banner.style.cssText = 'position:fixed;top:40px;left:40px;right:40px;background:rgba(200,0,0,0.92);color:#fff;padding:24px;font-size:26px;z-index:999999;border-radius:12px;font-family:sans-serif;box-shadow:0 10px 30px rgba(0,0,0,0.8);word-break:break-all;';
            if (document.body) document.body.appendChild(banner);
            else document.documentElement.appendChild(banner);
        }
        banner.innerHTML = '<b>Launcher Startup Error:</b><br>' + str;
    };

    if (typeof window.addEventListener === 'function') {
        window.addEventListener('unhandledrejection', function (e) {
            var reason = e.reason ? (e.reason.message || String(e.reason)) : 'Promise rejected';
            window.onerror('Unhandled Rejection: ' + reason, '', 0, 0, e.reason);
        });
    }

    // Polyfill String.prototype.padStart
    if (!String.prototype.padStart) {
        String.prototype.padStart = function (targetLength, padString) {
            targetLength = targetLength >> 0;
            padString = String(padString !== undefined ? padString : ' ');
            if (this.length > targetLength) return String(this);
            targetLength = targetLength - this.length;
            var pad = '';
            while (pad.length < targetLength) pad += padString;
            return pad.slice(0, targetLength) + String(this);
        };
    }

    // Polyfill String.prototype.padEnd
    if (!String.prototype.padEnd) {
        String.prototype.padEnd = function (targetLength, padString) {
            targetLength = targetLength >> 0;
            padString = String(padString !== undefined ? padString : ' ');
            if (this.length > targetLength) return String(this);
            targetLength = targetLength - this.length;
            var pad = '';
            while (pad.length < targetLength) pad += padString;
            return String(this) + pad.slice(0, targetLength);
        };
    }

    // Polyfill Array.prototype.includes
    if (!Array.prototype.includes) {
        Array.prototype.includes = function (val) {
            return this.indexOf(val) !== -1;
        };
    }

    // Polyfill String.prototype.includes
    if (!String.prototype.includes) {
        String.prototype.includes = function (val) {
            return this.indexOf(val) !== -1;
        };
    }

    // Polyfill Object.assign
    if (!Object.assign) {
        Object.assign = function (target) {
            if (target === undefined || target === null) throw new TypeError('Cannot convert undefined or null to object');
            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource !== undefined && nextSource !== null) {
                    for (var nextKey in nextSource) {
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        };
    }
})();
