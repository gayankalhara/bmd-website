/*!
 * animsition v3.4.3
 * http://blivesta.github.io/animsition/
 * Licensed under MIT
 * Author : blivesta
 * http://blivesta.com/
 */
! function(a) { "use strict"; var b = "animsition",
        c = { init: function(d) { d = a.extend({ inClass: "fade-in", outClass: "fade-out", inDuration: 1500, outDuration: 800, linkElement: ".animsition-link", loading: !0, loadingParentElement: "body", loadingClass: "animsition-loading", unSupportCss: ["animation-duration", "-webkit-animation-duration", "-o-animation-duration"], overlay: !1, overlayClass: "animsition-overlay-slide", overlayParentElement: "body" }, d); var e = c.supportCheck.call(this, d); if (!e) return "console" in window || (window.console = {}, window.console.log = function(a) { return a }), console.log("Animsition does not support this browser."), c.destroy.call(this); var f = c.optionCheck.call(this, d); return f && c.addOverlay.call(this, d), d.loading && c.addLoading.call(this, d), this.each(function() { var e = this,
                        f = a(this),
                        g = a(window),
                        h = f.data(b);
                    h || (d = a.extend({}, d), f.data(b, { options: d }), g.on("load." + b + " pageshow." + b, function() { c.pageIn.call(e) }), g.on("unload." + b, function() {}), a(d.linkElement).on("click." + b, function(b) { b.preventDefault(); var d = a(this);
                        c.pageOut.call(e, d) })) }) }, addOverlay: function(b) { a(b.overlayParentElement).prepend('<div class="' + b.overlayClass + '"></div>') }, addLoading: function(b) { a(b.loadingParentElement).append('<div class="' + b.loadingClass + '"></div>') }, removeLoading: function() { var c = a(this),
                    d = c.data(b).options,
                    e = a(d.loadingParentElement).children("." + d.loadingClass);
                e.fadeOut().remove() }, supportCheck: function(b) { var c = a(this),
                    d = b.unSupportCss,
                    e = d.length,
                    f = !1;
                0 === e && (f = !0); for (var g = 0; e > g; g++)
                    if ("string" == typeof c.css(d[g])) { f = !0; break }
                return f }, optionCheck: function(b) { var c, d = a(this); return c = b.overlay || d.data("animsition-overlay") ? !0 : !1 }, animationCheck: function(c, d, e) { var f = a(this),
                    g = f.data(b).options,
                    h = typeof c,
                    i = !d && "number" === h,
                    j = d && "string" === h && c.length > 0; return i || j ? c = c : d && e ? c = g.inClass : !d && e ? c = g.inDuration : d && !e ? c = g.outClass : d || e || (c = g.outDuration), c }, pageIn: function() { var d = this,
                    e = a(this),
                    f = e.data(b).options,
                    g = e.data("animsition-in-duration"),
                    h = e.data("animsition-in"),
                    i = c.animationCheck.call(d, g, !1, !0),
                    j = c.animationCheck.call(d, h, !0, !0),
                    k = c.optionCheck.call(d, f);
                f.loading && c.removeLoading.call(d), k ? c.pageInOverlay.call(d, j, i) : c.pageInBasic.call(d, j, i) }, pageInBasic: function(b, c) { var d = a(this);
                d.css({ "animation-duration": c / 1e3 + "s" }).addClass(b).animateCallback(function() { d.removeClass(b).css({ opacity: 1 }) }) }, pageInOverlay: function(c, d) { var e = a(this),
                    f = e.data(b).options;
                e.css({ opacity: 1 }), a(f.overlayParentElement).children("." + f.overlayClass).css({ "animation-duration": d / 1e3 + "s" }).addClass(c) }, pageOut: function(d) { var e = this,
                    f = a(this),
                    g = f.data(b).options,
                    h = d.data("animsition-out"),
                    i = f.data("animsition-out"),
                    j = d.data("animsition-out-duration"),
                    k = f.data("animsition-out-duration"),
                    l = h ? h : i,
                    m = j ? j : k,
                    n = c.animationCheck.call(e, l, !0, !1),
                    o = c.animationCheck.call(e, m, !1, !1),
                    p = c.optionCheck.call(e, g),
                    q = d.attr("href");
                p ? c.pageOutOverlay.call(e, n, o, q) : c.pageOutBasic.call(e, n, o, q) }, pageOutBasic: function(b, c, d) { var e = a(this);
                e.css({ "animation-duration": c / 1e3 + "s" }).addClass(b).animateCallback(function() { location.href = d }) }, pageOutOverlay: function(d, e, f) { var g = this,
                    h = a(this),
                    i = h.data(b).options,
                    j = h.data("animsition-in"),
                    k = c.animationCheck.call(g, j, !0, !0);
                a(i.overlayParentElement).children("." + i.overlayClass).css({ "animation-duration": e / 1e3 + "s" }).removeClass(k).addClass(d).animateCallback(function() { h.css({ opacity: 0 }), location.href = f }) }, destroy: function() { return this.each(function() { var c = a(this);
                    a(window).unbind("." + b), c.css({ opacity: 1 }).removeData(b) }) } };
    a.fn.animateCallback = function(b) { var c = "animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd"; return this.each(function() { a(this).bind(c, function() { return a(this).unbind(c), b.call(this) }) }) }, a.fn.animsition = function(d) { return c[d] ? c[d].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof d && d ? void a.error("Method " + d + " does not exist on jQuery." + b) : c.init.apply(this, arguments) } }(jQuery);