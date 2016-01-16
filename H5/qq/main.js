/* 
 * Chriswang
 * 396276123@qq.com
 * 2014.11.20
 * Github:https://github.com/powy1993/fullpage
 */

var news = document.getElementById('news'),
    a = news.getElementsByTagName('a'),
    scroll = document.getElementById('scroll'),
    more = scroll.getElementsByTagName('i'),
    scrollWrap = document.getElementById('scrollWrap'),
    pageContain = document.getElementById('pageContain'),
    scHeight,
    ready,
    _t = a.length,
    _now;
while (_t--) {
    a[_t].addEventListener('touchstart',
        function(e) {
            e.preventDefault();
            _now = +new Date;
            this.addEventListener('touchend',
                function(e) {
                    if ( + new Date - _now < 100) {
                        window.location.href = this.getAttribute('data-href');
                    }
                    this.removeEventListener('touchend', arguments.callee, false)
                },
                false);
        },
        false);
}
_t = more.length;
while (_t--) {
    more[_t].addEventListener('touchstart',
        function(e) {
            e.preventDefault();
            e.stopPropagation();
            _now = +new Date;
            this.addEventListener('touchend',
                function(e) {
                    if ( + new Date - _now < 150) {
                        window.location.href = this.getAttribute('data-href');
                    }
                    this.removeEventListener('touchend', arguments.callee, false)
                },
                false);
        },
        false);
}
browser = {
    addEventListener: !!window.addEventListener,
    gravity: !!window.DeviceOrientationEvent,
    touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
    version: function() {
        var u = navigator.userAgent,
            matchVersion = u.indexOf('Android'),
            num;
        _fix = u.indexOf('QQBrowser') !== -1 ? 200 : 0;
        if (matchVersion !== -1) {
            num = u.substring(matchVersion + 7, matchVersion + 11).replace(' ', '');
        }
        return num || 0;
    } (),
    cssCore: function(testCss) {
        switch (true) {
            case testCss.webkitTransition === '': return 'webkit';
                break;
            case testCss.MozTransition === '': return 'Moz';
                break;
            case testCss.msTransition === '': return 'ms';
                break;
            case testCss.OTransition === '': return 'O';
                break;
            default:
                return '';
        }
    } (document.createElement('Chriswang').style),
    Y: function() {
        return document.documentElement.clientHeight || window.innerHeight;
    } ()
};
function setDuration(obj, speed) {
    var style = obj && obj.style;
    if (!style) return;
    if (browser.cssCore === 'webkit') {
        style.webkitTransitionDuration = speed + 'ms';
        return;
    }
    style.transitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = speed + 'ms';
}
function translate(obj, distx, disty) {
    var style = obj && obj.style;
    if (!style) return;
    switch (browser.cssCore) {
        case 'webkit':
            style.webkitTransform = 'translate(' + distx + 'px,' + disty + 'px)' + 'translateZ(0)';
            break;
        case 'Moz':
            style.MozTransform = 'translate(' + distx + 'px,' + disty + 'px)';
            break;
        case 'ms':
            style.msTransform = 'translate(' + distx + 'px,' + disty + 'px)';
            break;
        case 'O':
            style.OTransform = 'translate(' + distx + 'px,' + disty + 'px)';
            break;
        default:
            style.trannform = 'translate(' + distx + 'px,' + disty + 'px)';
            break;
    }
}
ready = function() {
    setTimeout(function() {
            var loading = document.getElementById('loading');
            loading.style.opacity = 0;
            pageContain.className = '';
            setTimeout(function() {
                    loading.parentNode.removeChild(loading);
                    ready = function() {};
                },
                600);
        },
        500)
}
setTimeout(function() {
        ready();
    },
    5000);
function init() {
    scHeight = browser.Y * .8 - 36;
    max = -scrollWrap.children.length * 210 + scHeight + 20;
    scroll.style.height = scHeight + 'px';
}
function Touchdiv(options) {
    "use strict";
    if (!window.addEventListener) return;
    var doc = document.getElementById(options.id),
        nav = document.getElementById(options.nav),
        li = nav.children,
        wraper = doc.children[0],
        len = wraper.children.length,
        start = {},
        delta = {},
        em = ~~ (260 / 20),
        dis = options.dist || 20,
        distance = dis * em,
        fix = options.fix * em || 0,
        pos = 0,
        navLead,
        _t = li.length;
    if (!doc || !wraper) return;
    while (_t--) {
        li[_t].setAttribute('data-pic', _t);
    }
    var events = {
        handleEvent: function(event) {
            switch (event.type) {
                case 'touchmove':
                    this.move(event);
                    break;
                case 'touchstart':
                    this.start(event);
                    break;
                case 'touchend':
                    setTimeout(this.end(event), 0);
                    break;
                default:
                    break;
            }
        },
        start: function(event) {
            event.preventDefault();
            event.stopPropagation();
            var touches = event.touches[0];
            start = {
                x: touches.pageX,
                y: touches.pageY,
                time: +new Date
            }
            setDuration(wraper, 0);
            delta = {};
            addEventListener('touchmove', events, false);
            addEventListener('touchend', events, false);
        },
        move: function(event) {
            var touches = event.touches[0],
                t;
            delta = {
                x: touches.pageX - start.x,
                y: touches.pageY - start.y
            }
            t = delta.x;
            if (pos === 0 && delta.x > 0 || pos === len - 1 && delta.x < 0) t /= 2.5;
            translate(wraper, -pos * distance + t - fix, 0);
        },
        end: function(event) {
            var diff = +new Date - start.time;
            if (!delta.x) {
                window.location.href = event.target.getAttribute('data-href');
            }
            var isValidSlide = diff < 250 && Math.abs(delta.x) > 20 || Math.abs(delta.x) > 7 * em;
            if (isValidSlide) {
                li[pos].className = '';
                pos += delta.x > 0 ? -1 : 1;
                if (pos === -1) pos = 0;
                if (pos === len) pos = len - 1;
                li[pos].className = 'active';
            }
            setDuration(wraper, 300);
            translate(wraper, -pos * distance - fix, 0);
            removeEventListener('touchmove', events, false);
            removeEventListener('touchend', events, false);
        }
    }
    navLead = function(e) {
        var _t;
        e.preventDefault();
        e.stopPropagation();
        e = e.target;
        if (e.tagName.toLowerCase() !== 'li') return;
        _t = +e.getAttribute('data-pic');
        if (_t === pos) return;
        li[pos].className = '';
        pos = _t;
        li[_t].className = 'active';
        setDuration(wraper, 600);
        translate(wraper, -pos * distance - fix, 0);
    }
    wraper.addEventListener('touchstart', events, false);
    nav.addEventListener('touchstart', navLead, false);
}
if (browser.addEventListener) {
    window.addEventListener('resize',
        function() {
            browser.Y = document.documentElement.clientHeight || window.innerHeight;
            init();
        },
        false);
} (function() {
    var start = {},
        delta = {},
        position = 0,
        tmp = 0,
        scroll = scrollWrap,
        offloadFn = function(fn) {
            setTimeout(fn, 0);
        },
        events = {
            handleEvent: function(event) {
                switch (event.type) {
                    case 'touchstart':
                        this.start(event);
                        break;
                    case 'touchmove':
                        this.move(event);
                        break;
                    case 'touchend':
                        offloadFn(this.end(event));
                        break;
                }
            },
            start: function(event) {
                event.preventDefault();
                event.stopPropagation();
                var touches = event.touches[0],
                    t;
                start = {
                    x: touches.pageX,
                    y: touches.pageY,
                    time: +new Date
                }
                setDuration(scroll, 0);
                delta = {};
                t = scroll.style.webkitTransform || scroll.style.MozTransform || scroll.style.msTransform || scroll.style.OTransform || scroll.style.transform || '0,0';
                position = parseInt(t.substring(t.indexOf(',') + 1)) || 0;
                scroll.addEventListener('touchmove', events, false);
                scroll.addEventListener('touchend', events, false);
            },
            move: function(event) {
                if (event.touches.length > 1 || event.scale & event.scale !== 1) return;
                var touches = event.touches[0];
                delta = {
                    x: touches.pageX - start.x,
                    y: touches.pageY - start.y
                }
                tmp = position + delta.y;
                tmp = tmp > 0 || tmp < max ? tmp > 0 ? tmp / 3 : max + (tmp - max) / 3 : tmp;
                tmp = tmp >> 0;
                translate(scroll, 0, tmp);
            },
            end: function(event) {
                if (!delta.y) return;
                var duration = +new Date - start.time;
                if (tmp > 80 && duration > 200) runPage.go(1);
                if (tmp - max < -60 && duration > 200) runPage.go(3);
                position = tmp > 0 || tmp < max ? tmp > 0 ? 0 : max: Math.abs(delta.y / duration) < 0.75 ? tmp: tmp + delta.y / duration * 280;
                position = position >> 0;
                setDuration(scroll, 300);
                translate(scroll, 0, position);
                if (position > 0 || position < max) {
                    if (position > 0) {
                        position = 0;
                    } else {
                        position = max;
                    }
                    translate(scroll, 0, position);
                }
                scroll.removeEventListener('touchmove', events, false);
                scroll.removeEventListener('touchend', events, false);
            }
        }
    scroll.addEventListener('touchstart', events, false);
} ());
init();
var touch1 = new Touchdiv({
    id: 'p3pic',
    nav: 'navList'
});
/*  |xGv00|e6f452366a289816984dc7ce35e79ff0 */
