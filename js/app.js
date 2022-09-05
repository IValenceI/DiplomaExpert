(() => {
    var __webpack_modules__ = {
        448: module => {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(window, (function() {
                return function(e) {
                    var t = {};
                    function n(a) {
                        if (t[a]) return t[a].exports;
                        var r = t[a] = {
                            i: a,
                            l: !1,
                            exports: {}
                        };
                        return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                    }
                    return n.m = e, n.c = t, n.d = function(e, t, a) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: a
                        });
                    }, n.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                    }, n.t = function(e, t) {
                        if (1 & t && (e = n(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var a = Object.create(null);
                        if (n.r(a), Object.defineProperty(a, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e) for (var r in e) n.d(a, r, function(t) {
                            return e[t];
                        }.bind(null, r));
                        return a;
                    }, n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default;
                        } : function() {
                            return e;
                        };
                        return n.d(t, "a", t), t;
                    }, n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t);
                    }, n.p = "", n(n.s = 0);
                }([ function(e, t, n) {
                    "use strict";
                    n.r(t);
                    var a = [], r = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], i = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], o = {
                        t: "top",
                        r: "right",
                        b: "bottom",
                        l: "left",
                        c: "centered"
                    };
                    function s() {}
                    var l = [ "click", "focusin", "keydown", "input" ];
                    function d(e) {
                        l.forEach((function(t) {
                            e.addEventListener(t, e === document ? L : Y);
                        }));
                    }
                    function c(e) {
                        return Array.isArray(e) ? e.map(c) : "[object Object]" === x(e) ? Object.keys(e).reduce((function(t, n) {
                            return t[n] = c(e[n]), t;
                        }), {}) : e;
                    }
                    function u(e, t) {
                        var n = e.calendar.querySelector(".qs-overlay"), a = n && !n.classList.contains("qs-hidden");
                        t = t || new Date(e.currentYear, e.currentMonth), e.calendar.innerHTML = [ h(t, e, a), f(t, e, a), v(e, a) ].join(""),
                        a && window.requestAnimationFrame((function() {
                            M(!0, e);
                        }));
                    }
                    function h(e, t, n) {
                        return [ '<div class="qs-controls' + (n ? " qs-blur" : "") + '">', '<div class="qs-arrow qs-left"></div>', '<div class="qs-month-year">', '<span class="qs-month">' + t.months[e.getMonth()] + "</span>", '<span class="qs-year">' + e.getFullYear() + "</span>", "</div>", '<div class="qs-arrow qs-right"></div>', "</div>" ].join("");
                    }
                    function f(e, t, n) {
                        var a = t.currentMonth, r = t.currentYear, i = t.dateSelected, o = t.maxDate, s = t.minDate, l = t.showAllDates, d = t.days, c = t.disabledDates, u = t.startDay, h = t.weekendIndices, f = t.events, v = t.getRange ? t.getRange() : {}, m = +v.start, y = +v.end, p = g(new Date(e).setDate(1)), w = p.getDay() - u, D = w < 0 ? 7 : 0;
                        p.setMonth(p.getMonth() + 1), p.setDate(0);
                        var b = p.getDate(), q = [], S = D + 7 * ((w + b) / 7 | 0);
                        S += (w + b) % 7 ? 7 : 0;
                        for (var M = 1; M <= S; M++) {
                            var E = (M - 1) % 7, x = d[E], C = M - (w >= 0 ? w : 7 + w), L = new Date(r, a, C), Y = f[+L], j = C < 1 || C > b, P = j ? C < 1 ? -1 : 1 : 0, k = j && !l, O = k ? "" : L.getDate(), N = +L == +i, _ = E === h[0] || E === h[1], I = m !== y, A = "qs-square " + x;
                            Y && !k && (A += " qs-event"), j && (A += " qs-outside-current-month"), !l && j || (A += " qs-num"),
                            N && (A += " qs-active"), (c[+L] || t.disabler(L) || _ && t.noWeekends || s && +L < +s || o && +L > +o) && !k && (A += " qs-disabled"),
                            +g(new Date) == +L && (A += " qs-current"), +L === m && y && I && (A += " qs-range-start"),
                            +L > m && +L < y && (A += " qs-range-middle"), +L === y && m && I && (A += " qs-range-end"),
                            k && (A += " qs-empty", O = ""), q.push('<div class="' + A + '" data-direction="' + P + '">' + O + "</div>");
                        }
                        var R = d.map((function(e) {
                            return '<div class="qs-square qs-day">' + e + "</div>";
                        })).concat(q);
                        return R.unshift('<div class="qs-squares' + (n ? " qs-blur" : "") + '">'), R.push("</div>"),
                            R.join("");
                    }
                    function v(e, t) {
                        var n = e.overlayPlaceholder, a = e.overlayButton;
                        return [ '<div class="qs-overlay' + (t ? "" : " qs-hidden") + '">', "<div>", '<input class="qs-overlay-year" placeholder="' + n + '" inputmode="numeric" />', '<div class="qs-close">&#10005;</div>', "</div>", '<div class="qs-overlay-month-container">' + e.overlayMonths.map((function(e, t) {
                            return '<div class="qs-overlay-month" data-month-num="' + t + '">' + e + "</div>";
                        })).join("") + "</div>", '<div class="qs-submit qs-disabled">' + a + "</div>", "</div>" ].join("");
                    }
                    function m(e, t, n) {
                        var a = t.el, r = t.calendar.querySelector(".qs-active"), i = e.textContent, o = t.sibling;
                        (a.disabled || a.readOnly) && t.respectDisabledReadOnly || (t.dateSelected = n ? void 0 : new Date(t.currentYear, t.currentMonth, i),
                        r && r.classList.remove("qs-active"), n || e.classList.add("qs-active"), p(a, t, n),
                        n || q(t), o && (y({
                            instance: t,
                            deselect: n
                        }), t.first && !o.dateSelected && (o.currentYear = t.currentYear, o.currentMonth = t.currentMonth,
                            o.currentMonthName = t.currentMonthName), u(t), u(o)), t.onSelect(t, n ? void 0 : new Date(t.dateSelected)));
                    }
                    function y(e) {
                        var t = e.instance.first ? e.instance : e.instance.sibling, n = t.sibling;
                        t === e.instance ? e.deselect ? (t.minDate = t.originalMinDate, n.minDate = n.originalMinDate) : n.minDate = t.dateSelected : e.deselect ? (n.maxDate = n.originalMaxDate,
                            t.maxDate = t.originalMaxDate) : t.maxDate = n.dateSelected;
                    }
                    function p(e, t, n) {
                        if (!t.nonInput) return n ? e.value = "" : t.formatter !== s ? t.formatter(e, t.dateSelected, t) : void (e.value = t.dateSelected.toDateString());
                    }
                    function w(e, t, n, a) {
                        n || a ? (n && (t.currentYear = +n), a && (t.currentMonth = +a)) : (t.currentMonth += e.contains("qs-right") ? 1 : -1,
                            12 === t.currentMonth ? (t.currentMonth = 0, t.currentYear++) : -1 === t.currentMonth && (t.currentMonth = 11,
                                t.currentYear--)), t.currentMonthName = t.months[t.currentMonth], u(t), t.onMonthChange(t);
                    }
                    function D(e) {
                        if (!e.noPosition) {
                            var t = e.position.top, n = e.position.right;
                            if (e.position.centered) return e.calendarContainer.classList.add("qs-centered");
                            var a = e.positionedEl.getBoundingClientRect(), r = e.el.getBoundingClientRect(), i = e.calendarContainer.getBoundingClientRect(), o = r.top - a.top + (t ? -1 * i.height : r.height) + "px", s = r.left - a.left + (n ? r.width - i.width : 0) + "px";
                            e.calendarContainer.style.setProperty("top", o), e.calendarContainer.style.setProperty("left", s);
                        }
                    }
                    function b(e) {
                        return "[object Date]" === x(e) && "Invalid Date" !== e.toString();
                    }
                    function g(e) {
                        if (b(e) || "number" == typeof e && !isNaN(e)) {
                            var t = new Date(+e);
                            return new Date(t.getFullYear(), t.getMonth(), t.getDate());
                        }
                    }
                    function q(e) {
                        e.disabled || !e.calendarContainer.classList.contains("qs-hidden") && !e.alwaysShow && ("overlay" !== e.defaultView && M(!0, e),
                            e.calendarContainer.classList.add("qs-hidden"), e.onHide(e));
                    }
                    function S(e) {
                        e.disabled || (e.calendarContainer.classList.remove("qs-hidden"), "overlay" === e.defaultView && M(!1, e),
                            D(e), e.onShow(e));
                    }
                    function M(e, t) {
                        var n = t.calendar, a = n.querySelector(".qs-overlay"), r = a.querySelector(".qs-overlay-year"), i = n.querySelector(".qs-controls"), o = n.querySelector(".qs-squares");
                        e ? (a.classList.add("qs-hidden"), i.classList.remove("qs-blur"), o.classList.remove("qs-blur"),
                            r.value = "") : (a.classList.remove("qs-hidden"), i.classList.add("qs-blur"), o.classList.add("qs-blur"),
                            r.focus());
                    }
                    function E(e, t, n, a) {
                        var r = isNaN(+(new Date).setFullYear(t.value || void 0)), i = r ? null : t.value;
                        if (13 === e.which || 13 === e.keyCode || "click" === e.type) a ? w(null, n, i, a) : r || t.classList.contains("qs-disabled") || w(null, n, i); else if (n.calendar.contains(t)) n.calendar.querySelector(".qs-submit").classList[r ? "add" : "remove"]("qs-disabled");
                    }
                    function x(e) {
                        return {}.toString.call(e);
                    }
                    function C(e) {
                        a.forEach((function(t) {
                            t !== e && q(t);
                        }));
                    }
                    function L(e) {
                        if (!e.__qs_shadow_dom) {
                            var t = e.which || e.keyCode, n = e.type, r = e.target, o = r.classList, s = a.filter((function(e) {
                                return e.calendar.contains(r) || e.el === r;
                            }))[0], l = s && s.calendar.contains(r);
                            if (!(s && s.isMobile && s.disableMobile)) if ("click" === n) {
                                if (!s) return a.forEach(q);
                                if (s.disabled) return;
                                var d = s.calendar, c = s.calendarContainer, h = s.disableYearOverlay, f = s.nonInput, v = d.querySelector(".qs-overlay-year"), y = !!d.querySelector(".qs-hidden"), p = d.querySelector(".qs-month-year").contains(r), D = r.dataset.monthNum;
                                if (s.noPosition && !l) (c.classList.contains("qs-hidden") ? S : q)(s); else if (o.contains("qs-arrow")) w(o, s); else if (p || o.contains("qs-close")) h || M(!y, s); else if (D) E(e, v, s, D); else {
                                    if (o.contains("qs-disabled")) return;
                                    if (o.contains("qs-num")) {
                                        var b = r.textContent, g = +r.dataset.direction, x = new Date(s.currentYear, s.currentMonth + g, b);
                                        if (g) {
                                            s.currentYear = x.getFullYear(), s.currentMonth = x.getMonth(), s.currentMonthName = i[s.currentMonth],
                                                u(s);
                                            for (var L, Y = s.calendar.querySelectorAll('[data-direction="0"]'), j = 0; !L; ) {
                                                var P = Y[j];
                                                P.textContent === b && (L = P), j++;
                                            }
                                            r = L;
                                        }
                                        return void (+x == +s.dateSelected ? m(r, s, !0) : r.classList.contains("qs-disabled") || m(r, s));
                                    }
                                    o.contains("qs-submit") ? E(e, v, s) : f && r === s.el && (S(s), C(s));
                                }
                            } else if ("focusin" === n && s) S(s), C(s); else if ("keydown" === n && 9 === t && s) q(s); else if ("keydown" === n && s && !s.disabled) {
                                var k = !s.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");
                                13 === t && k && l ? E(e, r, s) : 27 === t && k && l && M(!0, s);
                            } else if ("input" === n) {
                                if (!s || !s.calendar.contains(r)) return;
                                var O = s.calendar.querySelector(".qs-submit"), N = r.value.split("").reduce((function(e, t) {
                                    return e || "0" !== t ? e + (t.match(/[0-9]/) ? t : "") : "";
                                }), "").slice(0, 4);
                                r.value = N, O.classList[4 === N.length ? "remove" : "add"]("qs-disabled");
                            }
                        }
                    }
                    function Y(e) {
                        L(e), e.__qs_shadow_dom = !0;
                    }
                    function j(e, t) {
                        l.forEach((function(n) {
                            e.removeEventListener(n, t);
                        }));
                    }
                    function P() {
                        S(this);
                    }
                    function k() {
                        q(this);
                    }
                    function O(e, t) {
                        var n = g(e), a = this.currentYear, r = this.currentMonth, i = this.sibling;
                        if (null == e) return this.dateSelected = void 0, p(this.el, this, !0), i && (y({
                            instance: this,
                            deselect: !0
                        }), u(i)), u(this), this;
                        if (!b(e)) throw new Error("`setDate` needs a JavaScript Date object.");
                        if (this.disabledDates[+n] || n < this.minDate || n > this.maxDate) throw new Error("You can't manually set a date that's disabled.");
                        this.dateSelected = n, t && (this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(),
                            this.currentMonthName = this.months[n.getMonth()]), p(this.el, this), i && (y({
                            instance: this
                        }), u(i));
                        var o = a === n.getFullYear() && r === n.getMonth();
                        return o || t ? u(this, n) : o || u(this, new Date(a, r, 1)), this;
                    }
                    function N(e) {
                        return I(this, e, !0);
                    }
                    function _(e) {
                        return I(this, e);
                    }
                    function I(e, t, n) {
                        var a = e.dateSelected, r = e.first, i = e.sibling, o = e.minDate, s = e.maxDate, l = g(t), d = n ? "Min" : "Max";
                        function c() {
                            return "original" + d + "Date";
                        }
                        function h() {
                            return d.toLowerCase() + "Date";
                        }
                        function f() {
                            return "set" + d;
                        }
                        function v() {
                            throw new Error("Out-of-range date passed to " + f());
                        }
                        if (null == t) e[c()] = void 0, i ? (i[c()] = void 0, n ? (r && !a || !r && !i.dateSelected) && (e.minDate = void 0,
                            i.minDate = void 0) : (r && !i.dateSelected || !r && !a) && (e.maxDate = void 0,
                            i.maxDate = void 0)) : e[h()] = void 0; else {
                            if (!b(t)) throw new Error("Invalid date passed to " + f());
                            i ? ((r && n && l > (a || s) || r && !n && l < (i.dateSelected || o) || !r && n && l > (i.dateSelected || s) || !r && !n && l < (a || o)) && v(),
                                e[c()] = l, i[c()] = l, (n && (r && !a || !r && !i.dateSelected) || !n && (r && !i.dateSelected || !r && !a)) && (e[h()] = l,
                                i[h()] = l)) : ((n && l > (a || s) || !n && l < (a || o)) && v(), e[h()] = l);
                        }
                        return i && u(i), u(e), e;
                    }
                    function A() {
                        var e = this.first ? this : this.sibling, t = e.sibling;
                        return {
                            start: e.dateSelected,
                            end: t.dateSelected
                        };
                    }
                    function R() {
                        var e = this.shadowDom, t = this.positionedEl, n = this.calendarContainer, r = this.sibling, i = this;
                        this.inlinePosition && (a.some((function(e) {
                            return e !== i && e.positionedEl === t;
                        })) || t.style.setProperty("position", null));
                        n.remove(), a = a.filter((function(e) {
                            return e !== i;
                        })), r && delete r.sibling, a.length || j(document, L);
                        var o = a.some((function(t) {
                            return t.shadowDom === e;
                        }));
                        for (var s in e && !o && j(e, Y), this) delete this[s];
                        a.length || l.forEach((function(e) {
                            document.removeEventListener(e, L);
                        }));
                    }
                    function F(e, t) {
                        var n = new Date(e);
                        if (!b(n)) throw new Error("Invalid date passed to `navigate`");
                        this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), u(this), t && this.onMonthChange(this);
                    }
                    function B() {
                        var e = !this.calendarContainer.classList.contains("qs-hidden"), t = !this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");
                        e && M(t, this);
                    }
                    t.default = function(e, t) {
                        var n = function(e, t) {
                            var n, l, d = function(e) {
                                var t = c(e);
                                t.events && (t.events = t.events.reduce((function(e, t) {
                                    if (!b(t)) throw new Error('"options.events" must only contain valid JavaScript Date objects.');
                                    return e[+g(t)] = !0, e;
                                }), {}));
                                [ "startDate", "dateSelected", "minDate", "maxDate" ].forEach((function(e) {
                                    var n = t[e];
                                    if (n && !b(n)) throw new Error('"options.' + e + '" needs to be a valid JavaScript Date object.');
                                    t[e] = g(n);
                                }));
                                var n = t.position, i = t.maxDate, l = t.minDate, d = t.dateSelected, u = t.overlayPlaceholder, h = t.overlayButton, f = t.startDay, v = t.id;
                                if (t.startDate = g(t.startDate || d || new Date), t.disabledDates = (t.disabledDates || []).reduce((function(e, t) {
                                    var n = +g(t);
                                    if (!b(t)) throw new Error('You supplied an invalid date to "options.disabledDates".');
                                    if (n === +g(d)) throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');
                                    return e[n] = 1, e;
                                }), {}), t.hasOwnProperty("id") && null == v) throw new Error("`id` cannot be `null` or `undefined`");
                                if (null != v) {
                                    var m = a.filter((function(e) {
                                        return e.id === v;
                                    }));
                                    if (m.length > 1) throw new Error("Only two datepickers can share an id.");
                                    m.length ? (t.second = !0, t.sibling = m[0]) : t.first = !0;
                                }
                                var y = [ "tr", "tl", "br", "bl", "c" ].some((function(e) {
                                    return n === e;
                                }));
                                if (n && !y) throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');
                                function p(e) {
                                    throw new Error('"dateSelected" in options is ' + (e ? "less" : "greater") + ' than "' + (e || "max") + 'Date".');
                                }
                                if (t.position = function(e) {
                                    var t = e[0], n = e[1], a = {};
                                    a[o[t]] = 1, n && (a[o[n]] = 1);
                                    return a;
                                }(n || "bl"), i < l) throw new Error('"maxDate" in options is less than "minDate".');
                                d && (l > d && p("min"), i < d && p());
                                if ([ "onSelect", "onShow", "onHide", "onMonthChange", "formatter", "disabler" ].forEach((function(e) {
                                    "function" != typeof t[e] && (t[e] = s);
                                })), [ "customDays", "customMonths", "customOverlayMonths" ].forEach((function(e, n) {
                                    var a = t[e], r = n ? 12 : 7;
                                    if (a) {
                                        if (!Array.isArray(a) || a.length !== r || a.some((function(e) {
                                            return "string" != typeof e;
                                        }))) throw new Error('"' + e + '" must be an array with ' + r + " strings.");
                                        t[n ? n < 2 ? "months" : "overlayMonths" : "days"] = a;
                                    }
                                })), f && f > 0 && f < 7) {
                                    var w = (t.customDays || r).slice(), D = w.splice(0, f);
                                    t.customDays = w.concat(D), t.startDay = +f, t.weekendIndices = [ w.length - 1, w.length ];
                                } else t.startDay = 0, t.weekendIndices = [ 6, 0 ];
                                "string" != typeof u && delete t.overlayPlaceholder;
                                "string" != typeof h && delete t.overlayButton;
                                var q = t.defaultView;
                                if (q && "calendar" !== q && "overlay" !== q) throw new Error('options.defaultView must either be "calendar" or "overlay".');
                                return t.defaultView = q || "calendar", t;
                            }(t || {
                                startDate: g(new Date),
                                position: "bl",
                                defaultView: "calendar"
                            }), u = e;
                            if ("string" == typeof u) u = "#" === u[0] ? document.getElementById(u.slice(1)) : document.querySelector(u); else {
                                if ("[object ShadowRoot]" === x(u)) throw new Error("Using a shadow DOM as your selector is not supported.");
                                for (var h, f = u.parentNode; !h; ) {
                                    var v = x(f);
                                    "[object HTMLDocument]" === v ? h = !0 : "[object ShadowRoot]" === v ? (h = !0,
                                        n = f, l = f.host) : f = f.parentNode;
                                }
                            }
                            if (!u) throw new Error("No selector / element found.");
                            if (a.some((function(e) {
                                return e.el === u;
                            }))) throw new Error("A datepicker already exists on that element.");
                            var m = u === document.body, y = n ? u.parentElement || n : m ? document.body : u.parentElement, w = n ? u.parentElement || l : y, D = document.createElement("div"), q = document.createElement("div");
                            D.className = "qs-datepicker-container qs-hidden", q.className = "qs-datepicker";
                            var M = {
                                shadowDom: n,
                                customElement: l,
                                positionedEl: w,
                                el: u,
                                parent: y,
                                nonInput: "INPUT" !== u.nodeName,
                                noPosition: m,
                                position: !m && d.position,
                                startDate: d.startDate,
                                dateSelected: d.dateSelected,
                                disabledDates: d.disabledDates,
                                minDate: d.minDate,
                                maxDate: d.maxDate,
                                noWeekends: !!d.noWeekends,
                                weekendIndices: d.weekendIndices,
                                calendarContainer: D,
                                calendar: q,
                                currentMonth: (d.startDate || d.dateSelected).getMonth(),
                                currentMonthName: (d.months || i)[(d.startDate || d.dateSelected).getMonth()],
                                currentYear: (d.startDate || d.dateSelected).getFullYear(),
                                events: d.events || {},
                                defaultView: d.defaultView,
                                setDate: O,
                                remove: R,
                                setMin: N,
                                setMax: _,
                                show: P,
                                hide: k,
                                navigate: F,
                                toggleOverlay: B,
                                onSelect: d.onSelect,
                                onShow: d.onShow,
                                onHide: d.onHide,
                                onMonthChange: d.onMonthChange,
                                formatter: d.formatter,
                                disabler: d.disabler,
                                months: d.months || i,
                                days: d.customDays || r,
                                startDay: d.startDay,
                                overlayMonths: d.overlayMonths || (d.months || i).map((function(e) {
                                    return e.slice(0, 3);
                                })),
                                overlayPlaceholder: d.overlayPlaceholder || "4-digit year",
                                overlayButton: d.overlayButton || "Submit",
                                disableYearOverlay: !!d.disableYearOverlay,
                                disableMobile: !!d.disableMobile,
                                isMobile: "ontouchstart" in window,
                                alwaysShow: !!d.alwaysShow,
                                id: d.id,
                                showAllDates: !!d.showAllDates,
                                respectDisabledReadOnly: !!d.respectDisabledReadOnly,
                                first: d.first,
                                second: d.second
                            };
                            if (d.sibling) {
                                var E = d.sibling, C = M, L = E.minDate || C.minDate, Y = E.maxDate || C.maxDate;
                                C.sibling = E, E.sibling = C, E.minDate = L, E.maxDate = Y, C.minDate = L, C.maxDate = Y,
                                    E.originalMinDate = L, E.originalMaxDate = Y, C.originalMinDate = L, C.originalMaxDate = Y,
                                    E.getRange = A, C.getRange = A;
                            }
                            d.dateSelected && p(u, M);
                            var j = getComputedStyle(w).position;
                            m || j && "static" !== j || (M.inlinePosition = !0, w.style.setProperty("position", "relative"));
                            var I = a.filter((function(e) {
                                return e.positionedEl === M.positionedEl;
                            }));
                            I.some((function(e) {
                                return e.inlinePosition;
                            })) && (M.inlinePosition = !0, I.forEach((function(e) {
                                e.inlinePosition = !0;
                            })));
                            D.appendChild(q), y.appendChild(D), M.alwaysShow && S(M);
                            return M;
                        }(e, t);
                        if (a.length || d(document), n.shadowDom && (a.some((function(e) {
                            return e.shadowDom === n.shadowDom;
                        })) || d(n.shadowDom)), a.push(n), n.second) {
                            var l = n.sibling;
                            y({
                                instance: n,
                                deselect: !n.dateSelected
                            }), y({
                                instance: l,
                                deselect: !l.dateSelected
                            }), u(l);
                        }
                        return u(n, n.startDate || n.dateSelected), n.alwaysShow && D(n), n;
                    };
                } ]).default;
            }));
        },
        732: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, l = function(n, t) {
                    var e, i = "LazyLoad::Initialized", o = new n(t);
                    try {
                        e = new CustomEvent(i, {
                            detail: {
                                instance: o
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                            instance: o
                        });
                    }
                    window.dispatchEvent(e);
                }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", m = "applied", p = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, k = function(n) {
                    return y(n, I);
                }, w = function(n, t) {
                    return function(n, t, e) {
                        var i = "data-ll-status";
                        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
                    }(n, 0, t);
                }, A = function(n) {
                    return w(n, null);
                }, L = function(n) {
                    return null === k(n);
                }, O = function(n) {
                    return k(n) === h;
                }, x = [ v, b, m, p ], C = function(n, t, e, i) {
                    n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
                }, N = function(n, t) {
                    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, j = function(n) {
                    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, D = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && j(e).forEach(t);
                }, H = function(n, t) {
                    j(n).forEach(t);
                }, V = [ u ], F = [ u, f ], B = [ u, s, d ], J = [ g ], P = function(n) {
                    return !!n[_];
                }, S = function(n) {
                    return n[_];
                }, U = function(n) {
                    return delete n[_];
                }, $ = function(n, t) {
                    if (!P(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, q = function(n, t) {
                    if (P(n)) {
                        var e = S(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                }, Q = function(n, t, e) {
                    N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, W = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, X = function(n, t) {
                    W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
                }, Y = {
                    IMG: function(n, t) {
                        D(n, (function(n) {
                            $(n, B), X(n, t);
                        })), $(n, B), X(n, t);
                    },
                    IFRAME: function(n, t) {
                        $(n, V), W(n, u, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        H(n, (function(n) {
                            $(n, V), W(n, u, y(n, t.data_src));
                        })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        $(n, J), W(n, g, y(n, t.data_src));
                    }
                }, Z = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], nn = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, tn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, en = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, on = function(n) {
                    return !!n.llEvLisnrs;
                }, an = function(n) {
                    if (on(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var i = t[e];
                            en(n, e, i);
                        }
                        delete n.llEvLisnrs;
                    }
                }, rn = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, cn = function(n, t, e) {
                    var i = z(n) || n;
                    on(i) || function(n, t, e) {
                        on(n) || (n.llEvLisnrs = {});
                        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        tn(n, i, t), tn(n, "error", e);
                    }(i, (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }), (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B),
                            o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }));
                }, ln = function(n, t, e) {
                    !function(n) {
                        return Z.indexOf(n.tagName) > -1;
                    }(n) ? function(n, t, e) {
                        !function(n) {
                            n.llTempImage = document.createElement("IMG");
                        }(n), cn(n, t, e), function(n) {
                            P(n) || (n[_] = {
                                backgroundImage: n.style.backgroundImage
                            });
                        }(n), function(n, t, e) {
                            var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r),
                                Q(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = r, K(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_set);
                            if (i) {
                                var o = i.split("|"), a = o.map((function(n) {
                                    return "image-set(".concat(n, ")");
                                }));
                                n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")");
                                })), n.style.backgroundImage = a.join()), K(n, t, e);
                            }
                        }(n, t, e);
                    }(n, t, e) : function(n, t, e) {
                        cn(n, t, e), function(n, t, e) {
                            var i = Y[n.tagName];
                            i && (i(n, t), Q(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, un = function(n) {
                    n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
                }, sn = function(n) {
                    D(n, (function(n) {
                        q(n, B);
                    })), q(n, B);
                }, dn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        q(n, V);
                    },
                    VIDEO: function(n) {
                        H(n, (function(n) {
                            q(n, V);
                        })), q(n, F), n.load();
                    },
                    OBJECT: function(n) {
                        q(n, J);
                    }
                }, fn = function(n, t) {
                    (function(n) {
                        var t = dn[n.tagName];
                        t ? t(n) : function(n) {
                            if (P(n)) {
                                var t = S(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied),
                            M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), A(n), U(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, i) {
                            var o = function(n) {
                                return x.indexOf(k(n)) >= 0;
                            }(n);
                            w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
                        }(n.target, n, t, e) : function(n, t, e, i) {
                            L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v;
                                }(n) && "IMG" === n.tagName && (an(n), function(n) {
                                    D(n, (function(n) {
                                        un(n);
                                    })), un(n);
                                }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
                            }(n, t, e, i), C(e.callback_exit, n, t, i));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, mn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, pn = function(n) {
                    return function(n) {
                        return k(n) === p;
                    }(n);
                }, hn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(L);
                    }(n || mn(t));
                }, En = function(n, e) {
                    var o = c(n);
                    this._settings = o, this.loadingCount = 0, function(n, t) {
                        i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(o, this), function(n, e) {
                        t && (e._onlineHandler = function() {
                            !function(n, t) {
                                var e;
                                (e = mn(n), bn(e).filter(pn)).forEach((function(t) {
                                    M(t, n.class_error), A(t);
                                })), t.update();
                            }(n, e);
                        }, window.addEventListener("online", e._onlineHandler));
                    }(o, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, o, a = this._settings, r = hn(n, a);
                        G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                                        var e = Y[n.tagName];
                                        e && e(n, t);
                                    }(n, t), w(n, h);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (o = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, o)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler),
                            mn(this._settings).forEach((function(n) {
                                U(n);
                            })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount,
                            delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        hn(n, e).forEach((function(n) {
                            T(n, t), ln(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        mn(n).forEach((function(t) {
                            fn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    ln(n, e);
                }, En.resetStatus = function(n) {
                    A(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) l(n, e); else l(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const flsModules = {};
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    headerItemHeight = document.querySelector(headerItem).offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        function formFieldsInit(options = {
            viewPass: false,
            autoHeight: false
        }) {
            const formFields = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            console.log(document.querySelectorAll("input[placeholder],textarea[placeholder]"));
            if (formFields.length) formFields.forEach((formField => {
                if (!formField.hasAttribute("data-placeholder-nohide")) formField.dataset.placeholder = formField.placeholder;
            }));
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if ("INPUT" === targetElement.tagName || "TEXTAREA" === targetElement.tagName) {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = "";
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if ("INPUT" === targetElement.tagName || "TEXTAREA" === targetElement.tagName) {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = targetElement.dataset.placeholder;
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
            if (options.autoHeight) {
                const textareas = document.querySelectorAll("textarea[data-autoheight]");
                if (textareas.length) {
                    textareas.forEach((textarea => {
                        const startHeight = textarea.hasAttribute("data-autoheight-min") ? Number(textarea.dataset.autoheightMin) : Number(textarea.offsetHeight);
                        const maxHeight = textarea.hasAttribute("data-autoheight-max") ? Number(textarea.dataset.autoheightMax) : 1 / 0;
                        setHeight(textarea, Math.min(startHeight, maxHeight));
                        textarea.addEventListener("input", (() => {
                            if (textarea.scrollHeight > startHeight) {
                                textarea.style.height = `auto`;
                                setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                            }
                        }));
                    }));
                    function setHeight(textarea, height) {
                        textarea.style.height = `${height}px`;
                    }
                }
            }
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((null !== formRequiredItem.offsetParent || "SELECT" === formRequiredItem.tagName) && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if ("email" === formRequiredItem.dataset.required) {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if ("checkbox" === formRequiredItem.type && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formSubmit() {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (0 === error) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            let responseResult = await response.json();
                            form.classList.remove("_sending");
                            formSent(form, responseResult);
                        } else {
                            alert("Ошибка");
                            form.classList.remove("_sending");
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    const formError = form.querySelector("._form-error");
                    if (formError && form.hasAttribute("data-goto-error")) gotoBlock(formError, true, 1e3);
                }
            }
            function formSent(form, responseResult = ``) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (flsModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? flsModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                formLogging(`Форма отправлена!`);
            }
            function formLogging(message) {
                FLS(`[Формы]: ${message}`);
            }
        }
        class SelectConstructor {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.selectClasses = {
                    classSelect: "select",
                    classSelectBody: "select__body",
                    classSelectTitle: "select__title",
                    classSelectValue: "select__value",
                    classSelectLabel: "select__label",
                    classSelectInput: "select__input",
                    classSelectText: "select__text",
                    classSelectLink: "select__link",
                    classSelectOptions: "select__options",
                    classSelectOptionsScroll: "select__scroll",
                    classSelectOption: "select__option",
                    classSelectContent: "select__content",
                    classSelectRow: "select__row",
                    classSelectData: "select__asset",
                    classSelectDisabled: "_select-disabled",
                    classSelectTag: "_select-tag",
                    classSelectOpen: "_select-open",
                    classSelectActive: "_select-active",
                    classSelectFocus: "_select-focus",
                    classSelectMultiple: "_select-multiple",
                    classSelectCheckBox: "_select-checkbox",
                    classSelectOptionSelected: "_select-selected",
                    classSelectPseudoLabel: "_select-pseudo-label"
                };
                this._this = this;
                if (this.config.init) {
                    const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll("select");
                    if (selectItems.length) {
                        this.selectsInit(selectItems);
                        this.setLogging(`Проснулся, построил селектов: (${selectItems.length})`);
                    } else this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
                }
            }
            getSelectClass(className) {
                return `.${className}`;
            }
            getSelectElement(selectItem, className) {
                return {
                    originalSelect: selectItem.querySelector("select"),
                    selectElement: selectItem.querySelector(this.getSelectClass(className))
                };
            }
            selectsInit(selectItems) {
                selectItems.forEach(((originalSelect, index) => {
                    this.selectInit(originalSelect, index + 1);
                }));
                document.addEventListener("click", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusin", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusout", function(e) {
                    this.selectsActions(e);
                }.bind(this));
            }
            selectInit(originalSelect, index) {
                const _this = this;
                let selectItem = document.createElement("div");
                selectItem.classList.add(this.selectClasses.classSelect);
                originalSelect.parentNode.insertBefore(selectItem, originalSelect);
                selectItem.appendChild(originalSelect);
                originalSelect.hidden = true;
                index ? originalSelect.dataset.id = index : null;
                if (this.getSelectPlaceholder(originalSelect)) {
                    originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
                    if (this.getSelectPlaceholder(originalSelect).label.show) {
                        const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                        selectItemTitle.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
                    }
                }
                selectItem.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
                this.selectBuild(originalSelect);
                originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : "150";
                originalSelect.addEventListener("change", (function(e) {
                    _this.selectChange(e);
                }));
            }
            selectBuild(originalSelect) {
                const selectItem = originalSelect.parentElement;
                selectItem.dataset.id = originalSelect.dataset.id;
                originalSelect.dataset.classModif ? selectItem.classList.add(`select_${originalSelect.dataset.classModif}`) : null;
                originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
                originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setOptions(selectItem, originalSelect);
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
                originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
                this.selectDisabled(selectItem, originalSelect);
            }
            selectsActions(e) {
                const targetElement = e.target;
                const targetType = e.type;
                if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                    const selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
                    const originalSelect = this.getSelectElement(selectItem).originalSelect;
                    if ("click" === targetType) {
                        if (!originalSelect.disabled) if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                            const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
                            const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
                            this.optionAction(selectItem, originalSelect, optionItem);
                        } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) this.selectAction(selectItem); else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                            const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                            this.optionAction(selectItem, originalSelect, optionItem);
                        }
                    } else if ("focusin" === targetType || "focusout" === targetType) {
                        if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) "focusin" === targetType ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
                    } else if ("keydown" === targetType && "Escape" === e.code) this.selectsСlose();
                } else this.selectsСlose();
            }
            selectsСlose(selectOneGroup) {
                const selectsGroup = selectOneGroup ? selectOneGroup : document;
                const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
                if (selectActiveItems.length) selectActiveItems.forEach((selectActiveItem => {
                    this.selectСlose(selectActiveItem);
                }));
            }
            selectСlose(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.remove(this.selectClasses.classSelectOpen);
                    _slideUp(selectOptions, originalSelect.dataset.speed);
                }
            }
            selectAction(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (originalSelect.closest("[data-one-select]")) {
                    const selectOneGroup = originalSelect.closest("[data-one-select]");
                    this.selectsСlose(selectOneGroup);
                }
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.toggle(this.selectClasses.classSelectOpen);
                    _slideToggle(selectOptions, originalSelect.dataset.speed);
                }
            }
            setSelectTitleValue(selectItem, originalSelect) {
                const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
                const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                if (selectItemTitle) selectItemTitle.remove();
                selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
            }
            getSelectTitleValue(selectItem, originalSelect) {
                let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
                if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
                    selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`)).join("");
                    if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
                        document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
                        if (originalSelect.hasAttribute("data-search")) selectTitleValue = false;
                    }
                }
                selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
                let pseudoAttribute = "";
                let pseudoAttributeClass = "";
                if (originalSelect.hasAttribute("data-pseudo-label")) {
                    pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заполните атрибут"`;
                    pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
                }
                this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
                if (originalSelect.hasAttribute("data-search")) return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`; else {
                    const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : "";
                    return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
                }
            }
            getSelectElementContent(selectOption) {
                const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : "";
                const selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
                let selectOptionContentHTML = ``;
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : "";
                selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : "";
                selectOptionContentHTML += selectOption.textContent;
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                return selectOptionContentHTML;
            }
            getSelectPlaceholder(originalSelect) {
                const selectPlaceholder = Array.from(originalSelect.options).find((option => !option.value));
                if (selectPlaceholder) return {
                    value: selectPlaceholder.textContent,
                    show: selectPlaceholder.hasAttribute("data-show"),
                    label: {
                        show: selectPlaceholder.hasAttribute("data-label"),
                        text: selectPlaceholder.dataset.label
                    }
                };
            }
            getSelectedOptionsData(originalSelect, type) {
                let selectedOptions = [];
                if (originalSelect.multiple) selectedOptions = Array.from(originalSelect.options).filter((option => option.value)).filter((option => option.selected)); else selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
                return {
                    elements: selectedOptions.map((option => option)),
                    values: selectedOptions.filter((option => option.value)).map((option => option.value)),
                    html: selectedOptions.map((option => this.getSelectElementContent(option)))
                };
            }
            getOptions(originalSelect) {
                let selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? `data-simplebar` : "";
                let selectOptionsScrollHeight = originalSelect.dataset.scroll ? `style="max-height:${originalSelect.dataset.scroll}px"` : "";
                let selectOptions = Array.from(originalSelect.options);
                if (selectOptions.length > 0) {
                    let selectOptionsHTML = ``;
                    if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) selectOptions = selectOptions.filter((option => option.value));
                    selectOptionsHTML += selectOptionsScroll ? `<div ${selectOptionsScroll} ${selectOptionsScrollHeight} class="${this.selectClasses.classSelectOptionsScroll}">` : "";
                    selectOptions.forEach((selectOption => {
                        selectOptionsHTML += this.getOption(selectOption, originalSelect);
                    }));
                    selectOptionsHTML += selectOptionsScroll ? `</div>` : "";
                    return selectOptionsHTML;
                }
            }
            getOption(selectOption, originalSelect) {
                const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "";
                const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? `hidden` : ``;
                const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : "";
                const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
                const selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? `target="_blank"` : "";
                let selectOptionHTML = ``;
                selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
                selectOptionHTML += this.getSelectElementContent(selectOption);
                selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
                return selectOptionHTML;
            }
            setOptions(selectItem, originalSelect) {
                const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                selectItemOptions.innerHTML = this.getOptions(originalSelect);
            }
            optionAction(selectItem, originalSelect, optionItem) {
                if (originalSelect.multiple) {
                    optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
                    const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
                    originalSelectSelectedItems.forEach((originalSelectSelectedItem => {
                        originalSelectSelectedItem.removeAttribute("selected");
                    }));
                    const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
                    selectSelectedItems.forEach((selectSelectedItems => {
                        originalSelect.querySelector(`option[value="${selectSelectedItems.dataset.value}"]`).setAttribute("selected", "selected");
                    }));
                } else {
                    if (!originalSelect.hasAttribute("data-show-selected")) {
                        if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
                        optionItem.hidden = true;
                    }
                    originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                    this.selectAction(selectItem);
                }
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setSelectChange(originalSelect);
            }
            selectChange(e) {
                const originalSelect = e.target;
                this.selectBuild(originalSelect);
                this.setSelectChange(originalSelect);
            }
            setSelectChange(originalSelect) {
                if (originalSelect.hasAttribute("data-validate")) formValidate.validateInput(originalSelect);
                if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
                    let tempButton = document.createElement("button");
                    tempButton.type = "submit";
                    originalSelect.closest("form").append(tempButton);
                    tempButton.click();
                    tempButton.remove();
                }
                const selectItem = originalSelect.parentElement;
                this.selectCallback(selectItem, originalSelect);
            }
            selectDisabled(selectItem, originalSelect) {
                if (originalSelect.disabled) {
                    selectItem.classList.add(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
                } else {
                    selectItem.classList.remove(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
                }
            }
            searchActions(selectItem) {
                this.getSelectElement(selectItem).originalSelect;
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption}`);
                const _this = this;
                selectInput.addEventListener("input", (function() {
                    selectOptionsItems.forEach((selectOptionsItem => {
                        if (selectOptionsItem.textContent.toUpperCase().indexOf(selectInput.value.toUpperCase()) >= 0) selectOptionsItem.hidden = false; else selectOptionsItem.hidden = true;
                    }));
                    true === selectOptions.hidden ? _this.selectAction(selectItem) : null;
                }));
            }
            selectCallback(selectItem, originalSelect) {
                document.dispatchEvent(new CustomEvent("selectCallback", {
                    detail: {
                        select: originalSelect
                    }
                }));
            }
            setLogging(message) {
                this.config.logging ? FLS(`[select]: ${message}`) : null;
            }
        }
        flsModules.select = new SelectConstructor({});
        var datepicker_min = __webpack_require__(448);
        const picker = datepicker_min("[data-datepicker]", {
            customDays: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ],
            customMonths: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
            overlayButton: "Применить",
            overlayPlaceholder: "Год (4 цифры)",
            startDay: 1,
            formatter: (input, date, instance) => {
                const value = date.toLocaleDateString();
                input.value = value;
            },
            onSelect: function(input, instance, date) {}
        });
        flsModules.datepicker = picker;
        var lazyload_min = __webpack_require__(732);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        $(document).ready((function() {
            $(".menu-button").click((function() {
                $(".menu-button").toggleClass("menu-button-open");
                $(".menu-items").toggleClass("menu-items-open");
            }));
        }));
        (function(f) {
            function I(a, b, c) {
                if (!c[0] || "object" == typeof c[0]) return b.init.apply(a, c);
                if (b[c[0]]) return b[c[0]].apply(a, Array.prototype.slice.call(c, 1));
                throw p(c[0] + " is not a method or property");
            }
            function l(a, b, c, d) {
                return {
                    css: {
                        position: "absolute",
                        top: a,
                        left: b,
                        overflow: d || "hidden",
                        zIndex: c || "auto"
                    }
                };
            }
            function R(a, b, c, d, e) {
                var h = 1 - e, f = h * h * h, g = e * e * e;
                return j(Math.round(f * a.x + 3 * e * h * h * b.x + 3 * e * e * h * c.x + g * d.x), Math.round(f * a.y + 3 * e * h * h * b.y + 3 * e * e * h * c.y + g * d.y));
            }
            function j(a, b) {
                return {
                    x: a,
                    y: b
                };
            }
            function E(a, b, c) {
                return y && c ? " translate3d(" + a + "px," + b + "px, 0px) " : " translate(" + a + "px, " + b + "px) ";
            }
            function F(a) {
                return " rotate(" + a + "deg) ";
            }
            function n(a, b) {
                return Object.prototype.hasOwnProperty.call(b, a);
            }
            function S() {
                for (var a = [ "Moz", "Webkit", "Khtml", "O", "ms" ], b = a.length, c = ""; b--; ) a[b] + "Transform" in document.body.style && (c = "-" + a[b].toLowerCase() + "-");
                return c;
            }
            function O(a, b, c, d, e) {
                var h, f = [];
                if ("-webkit-" == v) {
                    for (h = 0; h < e; h++) f.push("color-stop(" + d[h][0] + ", " + d[h][1] + ")");
                    a.css({
                        "background-image": "-webkit-gradient(linear, " + b.x + "% " + b.y + "%," + c.x + "% " + c.y + "%, " + f.join(",") + " )"
                    });
                } else {
                    b = {
                        x: b.x / 100 * a.width(),
                        y: b.y / 100 * a.height()
                    }, c = {
                        x: c.x / 100 * a.width(),
                        y: c.y / 100 * a.height()
                    };
                    var g = c.x - b.x;
                    h = c.y - b.y;
                    var i = Math.atan2(h, g), w = i - Math.PI / 2, k = (w = Math.abs(a.width() * Math.sin(w)) + Math.abs(a.height() * Math.cos(w)),
                        g = Math.sqrt(h * h + g * g), c = j(c.x < b.x ? a.width() : 0, c.y < b.y ? a.height() : 0),
                        Math.tan(i));
                    h = -1 / k;
                    k = (h * c.x - c.y - k * b.x + b.y) / (h - k);
                    c = h * k - h * c.x + c.y;
                    b = Math.sqrt(Math.pow(k - b.x, 2) + Math.pow(c - b.y, 2));
                    for (h = 0; h < e; h++) f.push(" " + d[h][1] + " " + 100 * (b + g * d[h][0]) / w + "%");
                    a.css({
                        "background-image": v + "linear-gradient(" + -i + "rad," + f.join(",") + ")"
                    });
                }
            }
            function s(a, b, c) {
                a = f.Event(a);
                b.trigger(a, c);
                return a.isDefaultPrevented() ? "prevented" : a.isPropagationStopped() ? "stopped" : "";
            }
            function p(a) {
                function b(a) {
                    this.name = "TurnJsError";
                    this.message = a;
                }
                b.prototype = Error();
                b.prototype.constructor = b;
                return new b(a);
            }
            function C(a) {
                var b = {
                    top: 0,
                    left: 0
                };
                do {
                    b.left += a.offsetLeft, b.top += a.offsetTop;
                } while (a = a.offsetParent);
                return b;
            }
            var y, T, v = "", J = Math.PI, K = J / 2, t = "ontouchstart" in window, q = t ? {
                down: "touchstart",
                move: "touchmove",
                up: "touchend",
                over: "touchstart",
                out: "touchend"
            } : {
                down: "mousedown",
                move: "mousemove",
                up: "mouseup",
                over: "mouseover",
                out: "mouseout"
            }, o = {
                backward: [ "bl", "tl" ],
                forward: [ "br", "tr" ],
                all: "tl bl tr br l r".split(" ")
            }, U = [ "single", "double" ], V = [ "ltr", "rtl" ], W = {
                acceleration: !0,
                display: "double",
                duration: 600,
                page: 1,
                gradients: !0,
                turnCorners: "bl,br",
                when: null
            }, X = {
                cornerSize: 100
            }, g = {
                init: function(a) {
                    y = "WebKitCSSMatrix" in window || "MozPerspective" in document.body.style;
                    var b;
                    T = (b = /AppleWebkit\/([0-9\.]+)/i.exec(navigator.userAgent)) ? 534.3 < parseFloat(b[1]) : !0;
                    v = S();
                    var c;
                    b = 0;
                    var d = this.data(), e = this.children();
                    a = f.extend({
                        width: this.width(),
                        height: this.height(),
                        direction: this.attr("dir") || this.css("direction") || "ltr"
                    }, W, a);
                    d.opts = a;
                    d.pageObjs = {};
                    d.pages = {};
                    d.pageWrap = {};
                    d.pageZoom = {};
                    d.pagePlace = {};
                    d.pageMv = [];
                    d.zoom = 1;
                    d.totalPages = a.pages || 0;
                    d.eventHandlers = {
                        touchStart: f.proxy(g._touchStart, this),
                        touchMove: f.proxy(g._touchMove, this),
                        touchEnd: f.proxy(g._touchEnd, this),
                        start: f.proxy(g._eventStart, this)
                    };
                    if (a.when) for (c in a.when) n(c, a.when) && this.bind(c, a.when[c]);
                    this.css({
                        position: "relative",
                        width: a.width,
                        height: a.height
                    });
                    this.turn("display", a.display);
                    "" !== a.direction && this.turn("direction", a.direction);
                    y && !t && a.acceleration && this.transform(E(0, 0, !0));
                    for (c = 0; c < e.length; c++) "1" != f(e[c]).attr("ignore") && this.turn("addPage", e[c], ++b);
                    f(this).bind(q.down, d.eventHandlers.touchStart).bind("end", g._eventEnd).bind("pressed", g._eventPressed).bind("released", g._eventReleased).bind("flip", g._flip);
                    f(this).parent().bind("start", d.eventHandlers.start);
                    f(document).bind(q.move, d.eventHandlers.touchMove).bind(q.up, d.eventHandlers.touchEnd);
                    this.turn("page", a.page);
                    d.done = !0;
                    return this;
                },
                addPage: function(a, b) {
                    var c, d = !1, e = this.data(), h = e.totalPages + 1;
                    if (e.destroying) return !1;
                    if (c = /\bp([0-9]+)\b/.exec(f(a).attr("class"))) b = parseInt(c[1], 10);
                    if (b) {
                        if (b == h) d = !0; else if (b > h) throw p('Page "' + b + '" cannot be inserted');
                    } else b = h, d = !0;
                    1 <= b && b <= h && (c = "double" == e.display ? b % 2 ? " odd" : " even" : "",
                    e.done && this.turn("stop"), b in e.pageObjs && g._movePages.call(this, b, 1), d && (e.totalPages = h),
                        e.pageObjs[b] = f(a).css({
                            float: "left"
                        }).addClass("page p" + b + c), -1 != navigator.userAgent.indexOf("MSIE 9.0") && e.pageObjs[b].hasClass("hard") && e.pageObjs[b].removeClass("hard"),
                        g._addPage.call(this, b), g._removeFromDOM.call(this));
                    return this;
                },
                _addPage: function(a) {
                    var b = this.data(), c = b.pageObjs[a];
                    if (c) if (g._necessPage.call(this, a)) {
                        if (!b.pageWrap[a]) {
                            b.pageWrap[a] = f("<div/>", {
                                class: "page-wrapper",
                                page: a,
                                css: {
                                    position: "absolute",
                                    overflow: "hidden"
                                }
                            });
                            this.append(b.pageWrap[a]);
                            b.pagePlace[a] || (b.pagePlace[a] = a, b.pageObjs[a].appendTo(b.pageWrap[a]));
                            var d = g._pageSize.call(this, a, !0);
                            c.css({
                                width: d.width,
                                height: d.height
                            });
                            b.pageWrap[a].css(d);
                        }
                        b.pagePlace[a] == a && g._makeFlip.call(this, a);
                    } else b.pagePlace[a] = 0, b.pageObjs[a] && b.pageObjs[a].remove();
                },
                hasPage: function(a) {
                    return n(a, this.data().pageObjs);
                },
                center: function(a) {
                    var b = this.data(), c = f(this).turn("size"), d = 0;
                    b.noCenter || ("double" == b.display && (a = this.turn("view", a || b.tpage || b.page),
                        "ltr" == b.direction ? a[0] ? a[1] || (d += c.width / 4) : d -= c.width / 4 : a[0] ? a[1] || (d -= c.width / 4) : d += c.width / 4),
                        f(this).css({
                            marginLeft: d
                        }));
                    return this;
                },
                destroy: function() {
                    var a = this, b = this.data(), c = "end first flip last pressed released start turning turned zooming missing".split(" ");
                    if ("prevented" != s("destroying", this)) {
                        b.destroying = !0;
                        f.each(c, (function(b, c) {
                            a.unbind(c);
                        }));
                        this.parent().unbind("start", b.eventHandlers.start);
                        for (f(document).unbind(q.move, b.eventHandlers.touchMove).unbind(q.up, b.eventHandlers.touchEnd); 0 !== b.totalPages; ) this.turn("removePage", b.totalPages);
                        b.fparent && b.fparent.remove();
                        b.shadow && b.shadow.remove();
                        this.removeData();
                        b = null;
                        return this;
                    }
                },
                is: function() {
                    return "object" == typeof this.data().pages;
                },
                zoom: function(a) {
                    var b = this.data();
                    if ("number" == typeof a) {
                        if (.001 > a || 100 < a) throw p(a + " is not a value for zoom");
                        if ("prevented" == s("zooming", this, [ a, b.zoom ])) return this;
                        var c = this.turn("size"), d = this.turn("view"), e = 1 / b.zoom, h = Math.round(c.width * e * a);
                        c = Math.round(c.height * e * a);
                        b.zoom = a;
                        f(this).turn("stop").turn("size", h, c);
                        b.opts.autoCenter && this.turn("center");
                        g._updateShadow.call(this);
                        for (a = 0; a < d.length; a++) d[a] && b.pageZoom[d[a]] != b.zoom && (this.trigger("zoomed", [ d[a], d, b.pageZoom[d[a]], b.zoom ]),
                            b.pageZoom[d[a]] = b.zoom);
                        return this;
                    }
                    return b.zoom;
                },
                _pageSize: function(a, b) {
                    var c = this.data(), d = {};
                    if ("single" == c.display) d.width = this.width(), d.height = this.height(), b && (d.top = 0,
                        d.left = 0, d.right = "auto"); else {
                        var e = this.width() / 2, h = this.height();
                        c.pageObjs[a].hasClass("own-size") ? (d.width = c.pageObjs[a].width(), d.height = c.pageObjs[a].height()) : (d.width = e,
                            d.height = h);
                        if (b) {
                            var f = a % 2;
                            d.top = (h - d.height) / 2;
                            "ltr" == c.direction ? (d[f ? "right" : "left"] = e - d.width, d[f ? "left" : "right"] = "auto") : (d[f ? "left" : "right"] = e - d.width,
                                d[f ? "right" : "left"] = "auto");
                        }
                    }
                    return d;
                },
                _makeFlip: function(a) {
                    var b = this.data();
                    if (!b.pages[a] && b.pagePlace[a] == a) {
                        var c = "single" == b.display, d = a % 2;
                        b.pages[a] = b.pageObjs[a].css(g._pageSize.call(this, a)).flip({
                            page: a,
                            next: d || c ? a + 1 : a - 1,
                            turn: this
                        }).flip("disable", b.disabled);
                        g._setPageLoc.call(this, a);
                        b.pageZoom[a] = b.zoom;
                    }
                    return b.pages[a];

                },
                _makeRange: function() {
                    var a, b;
                    if (!(1 > this.data().totalPages)) {
                        b = this.turn("range");
                        for (a = b[0]; a <= b[1]; a++) g._addPage.call(this, a);
                    }
                },
                range: function(a) {
                    var b, c, d, e = this.data();
                    a = a || e.tpage || e.page || 1;
                    d = g._view.call(this, a);
                    if (1 > a || a > e.totalPages) throw p('"' + a + '" is not a valid page');
                    d[1] = d[1] || d[0];
                    1 <= d[0] && d[1] <= e.totalPages ? (a = Math.floor(2), e.totalPages - d[1] > d[0] ? (b = Math.min(d[0] - 1, a),
                        c = 2 * a - b) : (c = Math.min(e.totalPages - d[1], a), b = 2 * a - c)) : c = b = 5;
                    return [ Math.max(1, d[0] - b), Math.min(e.totalPages, d[1] + c) ];
                },
                _necessPage: function(a) {
                    if (0 === a) return !0;
                    var b = this.turn("range");
                    return this.data().pageObjs[a].hasClass("fixed") || a >= b[0] && a <= b[1];
                },
                _removeFromDOM: function() {
                    var a, b = this.data();
                    for (a in b.pageWrap) n(a, b.pageWrap) && !g._necessPage.call(this, a) && g._removePageFromDOM.call(this, a);
                },
                _removePageFromDOM: function(a) {
                    var b = this.data();
                    if (b.pages[a]) {
                        var c = b.pages[a].data();
                        i._moveFoldingPage.call(b.pages[a], !1);
                        c.f && c.f.fwrapper && c.f.fwrapper.remove();
                        b.pages[a].removeData();
                        b.pages[a].remove();
                        delete b.pages[a];
                    }
                    b.pageObjs[a] && b.pageObjs[a].remove();
                    b.pageWrap[a] && (b.pageWrap[a].remove(), delete b.pageWrap[a]);
                    g._removeMv.call(this, a);
                    delete b.pagePlace[a];
                    delete b.pageZoom[a];
                },
                removePage: function(a) {
                    var b = this.data();
                    if ("*" == a) for (;0 !== b.totalPages; ) this.turn("removePage", b.totalPages); else {
                        if (1 > a || a > b.totalPages) throw p("The page " + a + " doesn't exist");
                        b.pageObjs[a] && (this.turn("stop"), g._removePageFromDOM.call(this, a), delete b.pageObjs[a]);
                        g._movePages.call(this, a, -1);
                        b.totalPages -= 1;
                        b.page > b.totalPages ? (b.page = null, g._fitPage.call(this, b.totalPages)) : (g._makeRange.call(this),
                            this.turn("update"));
                    }
                    return this;
                },
                _movePages: function(a, b) {
                    var c, d = this, e = this.data(), h = "single" == e.display, f = function(a) {
                        var c = a + b, f = c % 2, i = f ? " odd " : " even ";
                        e.pageObjs[a] && (e.pageObjs[c] = e.pageObjs[a].removeClass("p" + a + " odd even").addClass("p" + c + i));
                        e.pagePlace[a] && e.pageWrap[a] && (e.pagePlace[c] = c, e.pageWrap[c] = e.pageObjs[c].hasClass("fixed") ? e.pageWrap[a].attr("page", c) : e.pageWrap[a].css(g._pageSize.call(d, c, !0)).attr("page", c),
                        e.pages[a] && (e.pages[c] = e.pages[a].flip("options", {
                            page: c,
                            next: h || f ? c + 1 : c - 1
                        })), b && (delete e.pages[a], delete e.pagePlace[a], delete e.pageZoom[a], delete e.pageObjs[a],
                            delete e.pageWrap[a]));
                    };
                    if (0 < b) for (c = e.totalPages; c >= a; c--) f(c); else for (c = a; c <= e.totalPages; c++) f(c);
                },
                display: function(a) {
                    var b = this.data(), c = b.display;
                    if (void 0 === a) return c;
                    if (-1 == f.inArray(a, U)) throw p('"' + a + '" is not a value for display');
                    switch (a) {
                        case "single":
                            b.pageObjs[0] || (this.turn("stop").css({
                                overflow: "hidden"
                            }), b.pageObjs[0] = f("<div />", {
                                class: "page p-temporal"
                            }).css({
                                width: this.width(),
                                height: this.height()
                            }).appendTo(this));
                            this.addClass("shadow");
                            break;

                        case "double":
                            b.pageObjs[0] && (this.turn("stop").css({
                                overflow: ""
                            }), b.pageObjs[0].remove(), delete b.pageObjs[0]), this.removeClass("shadow");
                    }
                    b.display = a;
                    c && (a = this.turn("size"), g._movePages.call(this, 1, 0), this.turn("size", a.width, a.height).turn("update"));
                    return this;
                },
                direction: function(a) {
                    var b = this.data();
                    if (void 0 === a) return b.direction;
                    a = a.toLowerCase();
                    if (-1 == f.inArray(a, V)) throw p('"' + a + '" is not a value for direction');
                    "rtl" == a && f(this).attr("dir", "ltr").css({
                        direction: "ltr"
                    });
                    b.direction = a;
                    b.done && this.turn("size", f(this).width(), f(this).height());
                    return this;
                },
                animating: function() {
                    return 0 < this.data().pageMv.length;
                },
                corner: function() {
                    var a, b, c = this.data();
                    for (b in c.pages) if (n(b, c.pages) && (a = c.pages[b].flip("corner"))) return a;
                    return !1;
                },
                data: function() {
                    return this.data();
                },
                disable: function(a) {
                    var b, c = this.data(), d = this.turn("view");
                    c.disabled = void 0 === a || !0 === a;
                    for (b in c.pages) n(b, c.pages) && c.pages[b].flip("disable", c.disabled ? !0 : -1 == f.inArray(parseInt(b, 10), d));
                    return this;
                },
                disabled: function(a) {
                    return void 0 === a ? !0 === this.data().disabled : this.turn("disable", a);
                },
                size: function(a, b) {
                    if (void 0 === a || void 0 === b) return {
                        width: this.width(),
                        height: this.height()
                    };
                    this.turn("stop");
                    var c, d, e = this.data();
                    d = "double" == e.display ? a / 2 : a;
                    this.css({
                        width: a,
                        height: b
                    });
                    e.pageObjs[0] && e.pageObjs[0].css({
                        width: d,
                        height: b
                    });
                    for (c in e.pageWrap) n(c, e.pageWrap) && (d = g._pageSize.call(this, c, !0), e.pageObjs[c].css({
                        width: d.width,
                        height: d.height
                    }), e.pageWrap[c].css(d), e.pages[c] && e.pages[c].css({
                        width: d.width,
                        height: d.height
                    }));
                    this.turn("resize");
                    return this;
                },
                resize: function() {
                    var a, b = this.data();
                    b.pages[0] && (b.pageWrap[0].css({
                        left: -this.width()
                    }), b.pages[0].flip("resize", !0));
                    for (a = 1; a <= b.totalPages; a++) b.pages[a] && b.pages[a].flip("resize", !0);
                    g._updateShadow.call(this);
                    b.opts.autoCenter && this.turn("center");
                },
                _removeMv: function(a) {
                    var b, c = this.data();
                    for (b = 0; b < c.pageMv.length; b++) if (c.pageMv[b] == a) return c.pageMv.splice(b, 1),
                        !0;
                    return !1;
                },
                _addMv: function(a) {
                    var b = this.data();
                    g._removeMv.call(this, a);
                    b.pageMv.push(a);
                },
                _view: function(a) {
                    var b = this.data();
                    a = a || b.page;
                    return "double" == b.display ? a % 2 ? [ a - 1, a ] : [ a, a + 1 ] : [ a ];
                },
                view: function(a) {
                    var b = this.data();
                    a = g._view.call(this, a);
                    return "double" == b.display ? [ 0 < a[0] ? a[0] : 0, a[1] <= b.totalPages ? a[1] : 0 ] : [ 0 < a[0] && a[0] <= b.totalPages ? a[0] : 0 ];
                },
                stop: function(a, b) {
                    if (this.turn("animating")) {
                        var c, d, e, h = this.data();
                        h.tpage && (h.page = h.tpage, delete h.tpage);
                        for (c = 0; c < h.pageMv.length; c++) h.pageMv[c] && h.pageMv[c] !== a && (e = h.pages[h.pageMv[c]],
                            d = e.data().f.opts, e.flip("hideFoldedPage", b), b || i._moveFoldingPage.call(e, !1),
                        d.force && (d.next = 0 === d.page % 2 ? d.page - 1 : d.page + 1, delete d.force));
                    }
                    this.turn("update");
                    return this;
                },
                pages: function(a) {
                    var b = this.data();
                    if (a) {
                        if (a < b.totalPages) for (var c = b.totalPages; c > a; c--) this.turn("removePage", c);
                        b.totalPages = a;
                        g._fitPage.call(this, b.page);
                        return this;
                    }
                    return b.totalPages;
                },
                _missing: function(a) {
                    var b = this.data();
                    if (!(1 > b.totalPages)) {
                        var c = this.turn("range", a), d = [];
                        for (a = c[0]; a <= c[1]; a++) b.pageObjs[a] || d.push(a);
                        0 < d.length && this.trigger("missing", [ d ]);
                    }
                },
                _fitPage: function(a) {
                    var b = this.data(), c = this.turn("view", a);
                    g._missing.call(this, a);
                    if (b.pageObjs[a]) {
                        b.page = a;
                        this.turn("stop");
                        for (var d = 0; d < c.length; d++) c[d] && b.pageZoom[c[d]] != b.zoom && (this.trigger("zoomed", [ c[d], c, b.pageZoom[c[d]], b.zoom ]),
                            b.pageZoom[c[d]] = b.zoom);
                        g._removeFromDOM.call(this);
                        g._makeRange.call(this);
                        g._updateShadow.call(this);
                        this.trigger("turned", [ a, c ]);
                        this.turn("update");
                        b.opts.autoCenter && this.turn("center");
                    }
                },
                _turnPage: function(a) {
                    var b, c, d = this.data(), e = d.pagePlace[a], h = this.turn("view"), i = this.turn("view", a);
                    if (d.page != a) {
                        var j = d.page;
                        if ("prevented" == s("turning", this, [ a, i ])) {
                            j == d.page && -1 != f.inArray(e, d.pageMv) && d.pages[e].flip("hideFoldedPage", !0);
                            return;
                        }
                        -1 != f.inArray(1, i) && this.trigger("first");
                        -1 != f.inArray(d.totalPages, i) && this.trigger("last");
                    }
                    "single" == d.display ? (b = h[0], c = i[0]) : h[1] && a > h[1] ? (b = h[1], c = i[0]) : h[0] && a < h[0] && (b = h[0],
                        c = i[1]);
                    e = d.opts.turnCorners.split(",");
                    h = d.pages[b].data().f;
                    i = h.opts;
                    j = h.point;
                    g._missing.call(this, a);
                    d.pageObjs[a] && (this.turn("stop"), d.page = a, g._makeRange.call(this), d.tpage = c,
                    i.next != c && (i.next = c, i.force = !0), this.turn("update"), h.point = j, "hard" == h.effect ? "ltr" == d.direction ? d.pages[b].flip("turnPage", a > b ? "r" : "l") : d.pages[b].flip("turnPage", a > b ? "l" : "r") : "ltr" == d.direction ? d.pages[b].flip("turnPage", e[a > b ? 1 : 0]) : d.pages[b].flip("turnPage", e[a > b ? 0 : 1]));
                },
                page: function(a) {
                    var b = this.data();
                    if (void 0 === a) return b.page;
                    if (!b.disabled && !b.destroying) {
                        a = parseInt(a, 10);
                        if (0 < a && a <= b.totalPages) return a != b.page && (!b.done || -1 != f.inArray(a, this.turn("view")) ? g._fitPage.call(this, a) : g._turnPage.call(this, a)),
                            this;
                        throw p("The page " + a + " does not exist");
                    }
                },
                next: function() {
                    return this.turn("page", Math.min(this.data().totalPages, g._view.call(this, this.data().page).pop() + 1));
                },
                previous: function() {
                    return this.turn("page", Math.max(1, g._view.call(this, this.data().page).shift() - 1));
                },
                peel: function(a, b) {
                    var c = this.data(), d = this.turn("view");
                    b = void 0 === b ? !0 : !0 === b;
                    !1 === a ? this.turn("stop", null, b) : "single" == c.display ? c.pages[c.page].flip("peel", a, b) : (d = "ltr" == c.direction ? -1 != a.indexOf("l") ? d[0] : d[1] : -1 != a.indexOf("l") ? d[1] : d[0],
                    c.pages[d] && c.pages[d].flip("peel", a, b));
                    return this;
                },
                _addMotionPage: function() {
                    var a = f(this).data().f.opts, b = a.turn;
                    b.data();
                    g._addMv.call(b, a.page);
                },
                _eventStart: function(a, b, c) {
                    var d = b.turn.data(), e = d.pageZoom[b.page];
                    a.isDefaultPrevented() || (e && e != d.zoom && (b.turn.trigger("zoomed", [ b.page, b.turn.turn("view", b.page), e, d.zoom ]),
                        d.pageZoom[b.page] = d.zoom), "single" == d.display && c && ("l" == c.charAt(1) && "ltr" == d.direction || "r" == c.charAt(1) && "rtl" == d.direction ? (b.next = b.next < b.page ? b.next : b.page - 1,
                        b.force = !0) : b.next = b.next > b.page ? b.next : b.page + 1), g._addMotionPage.call(a.target));
                    g._updateShadow.call(b.turn);
                },
                _eventEnd: function(a, b, c) {
                    f(a.target).data();
                    a = b.turn;
                    var d = a.data();
                    if (c) {
                        if (c = d.tpage || d.page, c == b.next || c == b.page) delete d.tpage, g._fitPage.call(a, c || b.next, !0);
                    } else g._removeMv.call(a, b.page), g._updateShadow.call(a), a.turn("update");
                },
                _eventPressed: function(a) {
                    a = f(a.target).data().f;
                    var b = a.opts.turn;
                    b.data().mouseAction = !0;
                    b.turn("update");
                    return a.time = (new Date).getTime();
                },
                _eventReleased: function(a, b) {
                    var c;
                    c = f(a.target);
                    var d = c.data().f, e = d.opts.turn, h = e.data();
                    c = "single" == h.display ? "br" == b.corner || "tr" == b.corner ? b.x < c.width() / 2 : b.x > c.width() / 2 : 0 > b.x || b.x > c.width();
                    if (200 > (new Date).getTime() - d.time || c) a.preventDefault(), g._turnPage.call(e, d.opts.next);
                    h.mouseAction = !1;
                },
                _flip: function(a) {
                    a.stopPropagation();
                    a = f(a.target).data().f.opts;
                    a.turn.trigger("turn", [ a.next ]);
                    a.turn.data().opts.autoCenter && a.turn.turn("center", a.next);
                },
                _touchStart: function() {
                    var b, a = this.data();
                    for (b in a.pages) if (n(b, a.pages) && !1 === i._eventStart.apply(a.pages[b], arguments)) return !1;
                },
                _touchMove: function() {
                    var b, a = this.data();
                    for (b in a.pages) n(b, a.pages) && i._eventMove.apply(a.pages[b], arguments);
                },
                _touchEnd: function() {
                    var b, a = this.data();
                    for (b in a.pages) n(b, a.pages) && i._eventEnd.apply(a.pages[b], arguments);
                },
                calculateZ: function(a) {
                    var b, c, d, e, h = this, f = this.data();
                    b = this.turn("view");
                    var i = b[0] || b[1], g = a.length - 1, j = {
                        pageZ: {},
                        partZ: {},
                        pageV: {}
                    }, k = function(a) {
                        a = h.turn("view", a);
                        a[0] && (j.pageV[a[0]] = !0);
                        a[1] && (j.pageV[a[1]] = !0);
                    };
                    for (b = 0; b <= g; b++) c = a[b], d = f.pages[c].data().f.opts.next, e = f.pagePlace[c],
                        k(c), k(d), c = f.pagePlace[d] == d ? d : c, j.pageZ[c] = f.totalPages - Math.abs(i - c),
                        j.partZ[e] = 2 * f.totalPages - g + b;
                    return j;
                },
                update: function() {
                    var a, b = this.data();
                    if (this.turn("animating") && 0 !== b.pageMv[0]) {
                        var c, d = this.turn("calculateZ", b.pageMv), e = this.turn("corner"), h = this.turn("view"), i = this.turn("view", b.tpage);
                        for (a in b.pageWrap) if (n(a, b.pageWrap) && (c = b.pageObjs[a].hasClass("fixed"),
                            b.pageWrap[a].css({
                                display: d.pageV[a] || c ? "" : "none",
                                zIndex: (b.pageObjs[a].hasClass("hard") ? d.partZ[a] : d.pageZ[a]) || (c ? -1 : 0)
                            }), c = b.pages[a])) c.flip("z", d.partZ[a] || null), d.pageV[a] && c.flip("resize"),
                            b.tpage ? c.flip("hover", !1).flip("disable", -1 == f.inArray(parseInt(a, 10), b.pageMv) && a != i[0] && a != i[1]) : c.flip("hover", !1 === e).flip("disable", a != h[0] && a != h[1]);
                    } else for (a in b.pageWrap) n(a, b.pageWrap) && (d = g._setPageLoc.call(this, a),
                    b.pages[a] && b.pages[a].flip("disable", b.disabled || 1 != d).flip("hover", !0).flip("z", null));
                    return this;

                },
                _updateShadow: function() {
                    var a, b, c = this.data(), d = this.width(), e = this.height(), h = "single" == c.display ? d : d / 2;
                    a = this.turn("view");
                    c.shadow || (c.shadow = f("<div />", {
                        class: "shadow",
                        css: l(0, 0, 0).css
                    }).appendTo(this));
                    for (var i = 0; i < c.pageMv.length && a[0] && a[1]; i++) a = this.turn("view", c.pages[c.pageMv[i]].data().f.opts.next),
                        b = this.turn("view", c.pageMv[i]), a[0] = a[0] && b[0], a[1] = a[1] && b[1];
                    switch (a[0] ? a[1] ? 3 : "ltr" == c.direction ? 2 : 1 : "ltr" == c.direction ? 1 : 2) {
                        case 1:
                            c.shadow.css({
                                width: h,
                                height: e,
                                top: 0,
                                left: h
                            });
                            break;

                        case 2:
                            c.shadow.css({
                                width: h,
                                height: e,
                                top: 0,
                                left: 0
                            });
                            break;

                        case 3:
                            c.shadow.css({
                                width: d,
                                height: e,
                                top: 0,
                                left: 0
                            });
                    }
                },
                _setPageLoc: function(a) {
                    var b = this.data(), c = this.turn("view"), d = 0;
                    if (a == c[0] || a == c[1]) d = 1; else if ("single" == b.display && a == c[0] + 1 || "double" == b.display && a == c[0] - 2 || a == c[1] + 2) d = 2;
                    if (!this.turn("animating")) switch (d) {
                        case 1:
                            b.pageWrap[a].css({
                                zIndex: b.totalPages,
                                display: ""
                            });
                            break;

                        case 2:
                            b.pageWrap[a].css({
                                zIndex: b.totalPages - 1,
                                display: ""
                            });
                            break;

                        case 0:
                            b.pageWrap[a].css({
                                zIndex: 0,
                                display: b.pageObjs[a].hasClass("fixed") ? "" : "none"
                            });
                    }
                    return d;
                },
                options: function(a) {
                    if (void 0 === a) return this.data().opts;
                    var b = this.data();
                    f.extend(b.opts, a);
                    a.pages && this.turn("pages", a.pages);
                    a.page && this.turn("page", a.page);
                    a.display && this.turn("display", a.display);
                    a.direction && this.turn("direction", a.direction);
                    a.width && a.height && this.turn("size", a.width, a.height);
                    if (a.when) for (var c in a.when) n(c, a.when) && this.unbind(c).bind(c, a.when[c]);
                    return this;
                },
                version: function() {
                    return "4.1.0";
                }
            }, i = {
                init: function(a) {
                    this.data({
                        f: {
                            disabled: !1,
                            hover: !1,
                            effect: this.hasClass("hard") ? "hard" : "sheet"
                        }
                    });
                    this.flip("options", a);
                    i._addPageWrapper.call(this);
                    return this;
                },
                setData: function(a) {
                    var b = this.data();
                    b.f = f.extend(b.f, a);
                    return this;
                },
                options: function(a) {
                    var b = this.data().f;
                    return a ? (i.setData.call(this, {
                        opts: f.extend({}, b.opts || X, a)
                    }), this) : b.opts;
                },
                z: function(a) {
                    var b = this.data().f;
                    b.opts["z-index"] = a;
                    b.fwrapper && b.fwrapper.css({
                        zIndex: a || parseInt(b.parent.css("z-index"), 10) || 0
                    });
                    return this;
                },
                _cAllowed: function() {
                    var a = this.data().f, b = a.opts.page, c = a.opts.turn.data(), d = b % 2;
                    return "hard" == a.effect ? "ltr" == c.direction ? [ d ? "r" : "l" ] : [ d ? "l" : "r" ] : "single" == c.display ? 1 == b ? "ltr" == c.direction ? o.forward : o.backward : b == c.totalPages ? "ltr" == c.direction ? o.backward : o.forward : o.all : "ltr" == c.direction ? o[d ? "forward" : "backward"] : o[d ? "backward" : "forward"];
                },
                _cornerActivated: function(a) {
                    var b = this.data().f, c = this.width(), d = this.height(), e = (a = {
                        x: a.x,
                        y: a.y,
                        corner: ""
                    }, b.opts.cornerSize);
                    if (0 >= a.x || 0 >= a.y || a.x >= c || a.y >= d) return !1;
                    var h = i._cAllowed.call(this);
                    switch (b.effect) {
                        case "hard":
                            if (a.x > c - e) a.corner = "r"; else if (a.x < e) a.corner = "l"; else return !1;
                            break;

                        case "sheet":
                            if (a.y < e) a.corner += "t"; else if (a.y >= d - e) a.corner += "b"; else return !1;
                            if (a.x <= e) a.corner += "l"; else if (a.x >= c - e) a.corner += "r"; else return !1;
                    }
                    return !a.corner || -1 == f.inArray(a.corner, h) ? !1 : a;
                },
                _isIArea: function(a) {
                    var b = this.data().f.parent.offset();
                    a = t && a.originalEvent ? a.originalEvent.touches[0] : a;
                    return i._cornerActivated.call(this, {
                        x: a.pageX - b.left,
                        y: a.pageY - b.top
                    });
                },
                _c: function(a, b) {
                    b = b || 0;
                    switch (a) {
                        case "tl":
                            return j(b, b);

                        case "tr":
                            return j(this.width() - b, b);

                        case "bl":
                            return j(b, this.height() - b);

                        case "br":
                            return j(this.width() - b, this.height() - b);

                        case "l":
                            return j(b, 0);

                        case "r":
                            return j(this.width() - b, 0);
                    }
                },
                _c2: function(a) {
                    switch (a) {
                        case "tl":
                            return j(2 * this.width(), 0);

                        case "tr":
                            return j(-this.width(), 0);

                        case "bl":
                            return j(2 * this.width(), this.height());

                        case "br":
                            return j(-this.width(), this.height());

                        case "l":
                            return j(2 * this.width(), 0);

                        case "r":
                            return j(-this.width(), 0);
                    }
                },
                _foldingPage: function() {
                    var a = this.data().f;
                    if (a) {
                        var b = a.opts;
                        if (b.turn) return a = b.turn.data(), "single" == a.display ? 1 < b.next || 1 < b.page ? a.pageObjs[0] : null : a.pageObjs[b.next];
                    }
                },
                _backGradient: function() {
                    var a = this.data().f, b = a.opts.turn.data();
                    if ((b = b.opts.gradients && ("single" == b.display || 2 != a.opts.page && a.opts.page != b.totalPages - 1)) && !a.bshadow) a.bshadow = f("<div/>", l(0, 0, 1)).css({
                        position: "",
                        width: this.width(),
                        height: this.height()
                    }).appendTo(a.parent);
                    return b;
                },
                type: function() {
                    return this.data().f.effect;
                },
                resize: function(a) {
                    var b = this.data().f, c = b.opts.turn.data(), d = this.width(), e = this.height();
                    switch (b.effect) {
                        case "hard":
                            a && (b.wrapper.css({
                                width: d,
                                height: e
                            }), b.fpage.css({
                                width: d,
                                height: e
                            }), c.opts.gradients && (b.ashadow.css({
                                width: d,
                                height: e
                            }), b.bshadow.css({
                                width: d,
                                height: e
                            })));
                            break;

                        case "sheet":
                            a && (a = Math.round(Math.sqrt(Math.pow(d, 2) + Math.pow(e, 2))), b.wrapper.css({
                                width: a,
                                height: a
                            }), b.fwrapper.css({
                                width: a,
                                height: a
                            }).children(":first-child").css({
                                width: d,
                                height: e
                            }), b.fpage.css({
                                width: d,
                                height: e
                            }), c.opts.gradients && b.ashadow.css({
                                width: d,
                                height: e
                            }), i._backGradient.call(this) && b.bshadow.css({
                                width: d,
                                height: e
                            })), b.parent.is(":visible") && (c = C(b.parent[0]), b.fwrapper.css({
                                top: c.top,
                                left: c.left
                            }), c = C(b.opts.turn[0]), b.fparent.css({
                                top: -c.top,
                                left: -c.left
                            })), this.flip("z", b.opts["z-index"]);
                    }
                },
                _addPageWrapper: function() {
                    var a = this.data().f, b = a.opts.turn.data(), c = this.parent();
                    a.parent = c;
                    if (!a.wrapper) switch (a.effect) {
                        case "hard":
                            var d = {};
                            d[v + "transform-style"] = "preserve-3d";
                            d[v + "backface-visibility"] = "hidden";
                            a.wrapper = f("<div/>", l(0, 0, 2)).css(d).appendTo(c).prepend(this);
                            a.fpage = f("<div/>", l(0, 0, 1)).css(d).appendTo(c);
                            b.opts.gradients && (a.ashadow = f("<div/>", l(0, 0, 0)).hide().appendTo(c), a.bshadow = f("<div/>", l(0, 0, 0)));
                            break;

                        case "sheet":
                            d = this.width();
                            var e = this.height();
                            Math.round(Math.sqrt(Math.pow(d, 2) + Math.pow(e, 2)));
                            a.fparent = a.opts.turn.data().fparent;
                            a.fparent || (d = f("<div/>", {
                                css: {
                                    "pointer-events": "none"
                                }
                            }).hide(), d.data().flips = 0, d.css(l(0, 0, "auto", "visible").css).appendTo(a.opts.turn),
                                a.opts.turn.data().fparent = d, a.fparent = d);
                            this.css({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: "auto",
                                right: "auto"
                            });
                            a.wrapper = f("<div/>", l(0, 0, this.css("z-index"))).appendTo(c).prepend(this);
                            a.fwrapper = f("<div/>", l(c.offset().top, c.offset().left)).hide().appendTo(a.fparent);
                            a.fpage = f("<div/>", l(0, 0, 0, "visible")).css({
                                cursor: "default"
                            }).appendTo(a.fwrapper);
                            b.opts.gradients && (a.ashadow = f("<div/>", l(0, 0, 1)).appendTo(a.fpage));
                            i.setData.call(this, a);
                    }
                    i.resize.call(this, !0);
                },
                _fold: function(a) {
                    var b = this.data().f, c = b.opts.turn.data(), d = i._c.call(this, a.corner), e = this.width(), h = this.height();
                    switch (b.effect) {
                        case "hard":
                            a.x = "l" == a.corner ? Math.min(Math.max(a.x, 0), 2 * e) : Math.max(Math.min(a.x, e), -e);
                            var f, g, r, w, k, n = c.totalPages, l = b.opts["z-index"] || n, p = {
                                overflow: "visible"
                            }, o = d.x ? (d.x - a.x) / e : a.x / e, q = 90 * o, s = 90 > q;
                            switch (a.corner) {
                                case "l":
                                    w = "0% 50%";
                                    k = "100% 50%";
                                    s ? (f = 0, g = 0 < b.opts.next - 1, r = 1) : (f = "100%", g = b.opts.page + 1 < n,
                                        r = 0);
                                    break;

                                case "r":
                                    w = "100% 50%", k = "0% 50%", q = -q, e = -e, s ? (f = 0, g = b.opts.next + 1 < n,
                                        r = 0) : (f = "-100%", g = 1 != b.opts.page, r = 1);
                            }
                            p[v + "perspective-origin"] = k;
                            b.wrapper.transform("rotateY(" + q + "deg)translate3d(0px, 0px, " + (this.attr("depth") || 0) + "px)", k);
                            b.fpage.transform("translateX(" + e + "px) rotateY(" + (180 + q) + "deg)", w);
                            b.parent.css(p);
                            s ? (o = -o + 1, b.wrapper.css({
                                zIndex: l + 1
                            }), b.fpage.css({
                                zIndex: l
                            })) : (o -= 1, b.wrapper.css({
                                zIndex: l
                            }), b.fpage.css({
                                zIndex: l + 1
                            }));
                            c.opts.gradients && (g ? b.ashadow.css({
                                display: "",
                                left: f,
                                backgroundColor: "rgba(0,0,0," + .5 * o + ")"
                            }).transform("rotateY(0deg)") : b.ashadow.hide(), b.bshadow.css({
                                opacity: -o + 1
                            }), s ? b.bshadow.parent()[0] != b.wrapper[0] && b.bshadow.appendTo(b.wrapper) : b.bshadow.parent()[0] != b.fpage[0] && b.bshadow.appendTo(b.fpage),
                                O(b.bshadow, j(100 * r, 0), j(100 * (-r + 1), 0), [ [ 0, "rgba(0,0,0,0.3)" ], [ 1, "rgba(0,0,0,0)" ] ], 2));
                            break;

                        case "sheet":
                            var y, z, A, L, x, M, C, t = this, G = 0, u = j(0, 0), P = j(0, 0), m = j(0, 0), I = i._foldingPage.call(this);
                            Math.tan(0);
                            var N = c.opts.acceleration, Q = b.wrapper.height(), D = "t" == a.corner.substr(0, 1), B = "l" == a.corner.substr(1, 1), H = function() {
                                var b = j(0, 0), f = j(0, 0);
                                b.x = d.x ? d.x - a.x : a.x;
                                b.y = T ? d.y ? d.y - a.y : a.y : 0;
                                f.x = B ? e - b.x / 2 : a.x + b.x / 2;
                                f.y = b.y / 2;
                                var g = K - Math.atan2(b.y, b.x), k = g - Math.atan2(f.y, f.x);
                                k = Math.max(0, Math.sin(k) * Math.sqrt(Math.pow(f.x, 2) + Math.pow(f.y, 2)));
                                G = 180 * (g / J);
                                m = j(k * Math.sin(g), k * Math.cos(g));
                                if (g > K && (m.x += Math.abs(m.y * b.y / b.x), m.y = 0, Math.round(m.x * Math.tan(J - g)) < h)) return a.y = Math.sqrt(Math.pow(h, 2) + 2 * f.x * b.x),
                                D && (a.y = h - a.y), H();
                                if (g > K && (b = J - g, f = Q - h / Math.sin(b), u = j(Math.round(f * Math.cos(b)), Math.round(f * Math.sin(b))),
                                B && (u.x = -u.x), D)) u.y = -u.y;
                                y = Math.round(m.y / Math.tan(g) + m.x);
                                b = e - y;
                                f = b * Math.cos(2 * g);
                                k = b * Math.sin(2 * g);
                                P = j(Math.round(B ? b - f : y + f), Math.round(D ? k : h - k));
                                if (c.opts.gradients && (x = b * Math.sin(g), b = i._c2.call(t, a.corner), b = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)) / e,
                                    C = Math.sin(K * (1 < b ? 2 - b : b)), M = Math.min(b, 1), L = 100 < x ? (x - 100) / x : 0,
                                    z = j(100 * (x * Math.sin(g) / e), 100 * (x * Math.cos(g) / h)), i._backGradient.call(t) && (A = j(100 * (1.2 * x * Math.sin(g) / e), 100 * (1.2 * x * Math.cos(g) / h)),
                                B || (A.x = 100 - A.x), !D))) A.y = 100 - A.y;
                                m.x = Math.round(m.x);
                                m.y = Math.round(m.y);
                                return !0;
                            };
                            f = function(a, d, f, g) {
                                var k = [ "0", "auto" ], m = (e - Q) * f[0] / 100, l = (h - Q) * f[1] / 100, n = (d = {
                                    left: k[d[0]],
                                    top: k[d[1]],
                                    right: k[d[2]],
                                    bottom: k[d[3]]
                                }, k = {}, 90 != g && -90 != g ? B ? -1 : 1 : 0), r = f[0] + "% " + f[1] + "%";
                                t.css(d).transform(F(g) + E(a.x + n, a.y, N), r);
                                b.fpage.css(d).transform(F(g) + E(a.x + P.x - u.x - e * f[0] / 100, a.y + P.y - u.y - h * f[1] / 100, N) + F((180 / g - 2) * g), r);
                                b.wrapper.transform(E(-a.x + m - n, -a.y + l, N) + F(-g), r);
                                b.fwrapper.transform(E(-a.x + u.x + m, -a.y + u.y + l, N) + F(-g), r);
                                c.opts.gradients && (f[0] && (z.x = 100 - z.x), f[1] && (z.y = 100 - z.y), k["box-shadow"] = "0 0 20px rgba(0,0,0," + .5 * C + ")",
                                    I.css(k), O(b.ashadow, j(B ? 100 : 0, D ? 0 : 100), j(z.x, z.y), [ [ L, "rgba(0,0,0,0)" ], [ .8 * (1 - L) + L, "rgba(0,0,0," + .2 * M + ")" ], [ 1, "rgba(255,255,255," + .2 * M + ")" ] ], 3, 0),
                                i._backGradient.call(t) && O(b.bshadow, j(B ? 0 : 100, D ? 0 : 100), j(A.x, A.y), [ [ .6, "rgba(0,0,0,0)" ], [ .8, "rgba(0,0,0," + .3 * M + ")" ], [ 1, "rgba(0,0,0,0)" ] ], 3));
                            };
                            switch (a.corner) {
                                case "tl":
                                    a.x = Math.max(a.x, 1);
                                    H();
                                    f(m, [ 1, 0, 0, 1 ], [ 100, 0 ], G);
                                    break;

                                case "tr":
                                    a.x = Math.min(a.x, e - 1);
                                    H();
                                    f(j(-m.x, m.y), [ 0, 0, 0, 1 ], [ 0, 0 ], -G);
                                    break;

                                case "bl":
                                    a.x = Math.max(a.x, 1);
                                    H();
                                    f(j(m.x, -m.y), [ 1, 1, 0, 0 ], [ 100, 100 ], -G);
                                    break;

                                case "br":
                                    a.x = Math.min(a.x, e - 1), H(), f(j(-m.x, -m.y), [ 0, 1, 1, 0 ], [ 0, 100 ], G);
                            }
                    }
                    b.point = a;


                },
                _moveFoldingPage: function(a) {
                    var b = this.data().f;
                    if (b) {
                        var c = b.opts.turn, d = c.data(), e = d.pagePlace;
                        a ? (d = b.opts.next, e[d] != b.opts.page && (b.folding && i._moveFoldingPage.call(this, !1),
                            i._foldingPage.call(this).appendTo(b.fpage), e[d] = b.opts.page, b.folding = d),
                            c.turn("update")) : b.folding && (d.pages[b.folding] ? (c = d.pages[b.folding].data().f,
                            d.pageObjs[b.folding].appendTo(c.wrapper)) : d.pageWrap[b.folding] && d.pageObjs[b.folding].appendTo(d.pageWrap[b.folding]),
                        b.folding in e && (e[b.folding] = b.folding), delete b.folding);
                        const sellForm = document.querySelector(".flipbook-form");
                        sellForm.classList.add("hiden"); }
                },
                _showFoldedPage: function(a, b) {
                    var c = i._foldingPage.call(this), d = this.data(), e = d.f, f = e.visible;
                    if (c) {
                        if (!f || !e.point || e.point.corner != a.corner) if (c = "hover" == e.status || "peel" == e.status || e.opts.turn.data().mouseAction ? a.corner : null,
                            f = !1, "prevented" == s("start", this, [ e.opts, c ])) return !1;
                        if (b) {
                            var g = this;
                            d = e.point && e.point.corner == a.corner ? e.point : i._c.call(this, a.corner, 1);
                            this.animatef({
                                from: [ d.x, d.y ],
                                to: [ a.x, a.y ],
                                duration: 500,
                                frame: function(b) {
                                    a.x = Math.round(b[0]);
                                    a.y = Math.round(b[1]);
                                    i._fold.call(g, a);
                                }
                            });
                        } else i._fold.call(this, a), d.effect && !d.effect.turning && this.animatef(!1);
                        if (!f) switch (e.effect) {
                            case "hard":
                                e.visible = !0;
                                i._moveFoldingPage.call(this, !0);
                                e.fpage.show();
                                e.opts.shadows && e.bshadow.show();
                                break;

                            case "sheet":
                                e.visible = !0, e.fparent.show().data().flips++, i._moveFoldingPage.call(this, !0),
                                    e.fwrapper.show(), e.bshadow && e.bshadow.show();
                        }
                        return !0;
                    }
                    return !1;
                },
                hide: function() {
                    var a = this.data().f, b = a.opts.turn.data(), c = i._foldingPage.call(this);
                    switch (a.effect) {
                        case "hard":
                            b.opts.gradients && (a.bshadowLoc = 0, a.bshadow.remove(), a.ashadow.hide());
                            a.wrapper.transform("");
                            a.fpage.hide();
                            break;

                        case "sheet":
                            0 === --a.fparent.data().flips && a.fparent.hide(), this.css({
                                left: 0,
                                top: 0,
                                right: "auto",
                                bottom: "auto"
                            }).transform(""), a.wrapper.transform(""), a.fwrapper.hide(), a.bshadow && a.bshadow.hide(),
                                c.transform("");
                    }
                    a.visible = !1;
                    return this;
                },
                hideFoldedPage: function(a) {
                    var b = this.data().f;
                    if (b.point) {
                        var c = this, d = b.point, e = function() {
                            b.point = null;
                            b.status = "";
                            c.flip("hide");
                            c.trigger("end", [ b.opts, !1 ]);
                        };
                        if (a) {
                            var f = i._c.call(this, d.corner), g = (a = "t" == d.corner.substr(0, 1) ? Math.min(0, d.y - f.y) / 2 : Math.max(0, d.y - f.y) / 2,
                                j(d.x, d.y + a)), l = j(f.x, f.y - a);
                            this.animatef({
                                from: 0,
                                to: 1,
                                frame: function(a) {
                                    a = R(d, g, l, f, a);
                                    d.x = a.x;
                                    d.y = a.y;
                                    i._fold.call(c, d);
                                },
                                complete: e,
                                duration: 800,
                                hiding: !0
                            });
                        } else this.animatef(!1), e();
                    }
                },
                turnPage: function(a) {
                    var b = this, c = this.data().f, d = c.opts.turn.data(), e = (a = {
                        corner: c.corner ? c.corner.corner : a || i._cAllowed.call(this)[0]
                    }, c.point || i._c.call(this, a.corner, c.opts.turn ? d.opts.elevation : 0)), f = i._c2.call(this, a.corner);
                    this.trigger("flip").animatef({
                        from: 0,
                        to: 1,
                        frame: function(c) {
                            c = R(e, e, f, f, c);
                            a.x = c.x;
                            a.y = c.y;
                            i._showFoldedPage.call(b, a);
                        },
                        complete: function() {
                            b.trigger("end", [ c.opts, !0 ]);
                        },
                        duration: d.opts.duration,
                        turning: !0
                    });
                    c.corner = null;

                },
                moving: function() {
                    return "effect" in this.data();
                },
                isTurning: function() {
                    return this.flip("moving") && this.data().effect.turning;
                },
                corner: function() {
                    return this.data().f.corner;
                },
                _eventStart: function(a) {
                    var b = this.data().f, c = b.opts.turn;
                    if (!b.corner && !b.disabled && !this.flip("isTurning") && b.opts.page == c.data().pagePlace[b.opts.page]) {
                        b.corner = i._isIArea.call(this, a);
                        if (b.corner && i._foldingPage.call(this)) return this.trigger("pressed", [ b.point ]),
                            i._showFoldedPage.call(this, b.corner), !1;
                        b.corner = null;
                    }
                },
                _eventMove: function(a) {
                    var b = this.data().f;
                    if (!b.disabled) if (a = t ? a.originalEvent.touches : [ a ], b.corner) {
                        var c = b.parent.offset();
                        b.corner.x = a[0].pageX - c.left;
                        b.corner.y = a[0].pageY - c.top;
                        i._showFoldedPage.call(this, b.corner);
                    } else if (b.hover && !this.data().effect && this.is(":visible")) if (a = i._isIArea.call(this, a[0])) {
                        if ("sheet" == b.effect && 2 == a.corner.length || "hard" == b.effect) b.status = "hover",
                            b = i._c.call(this, a.corner, b.opts.cornerSize / 2), a.x = b.x, a.y = b.y, i._showFoldedPage.call(this, a, !0);
                    } else "hover" == b.status && (b.status = "", i.hideFoldedPage.call(this, !0));
                },
                _eventEnd: function() {
                    var a = this.data().f, b = a.corner;
                    !a.disabled && b && "prevented" != s("released", this, [ a.point || b ]) && i.hideFoldedPage.call(this, !0);
                    a.corner = null;
                },
                disable: function(a) {
                    i.setData.call(this, {
                        disabled: a
                    });
                    return this;
                },
                hover: function(a) {
                    i.setData.call(this, {
                        hover: a
                    });
                    return this;
                },
                peel: function(a, b) {
                    var c = this.data().f;
                    if (a) {
                        if (-1 == f.inArray(a, o.all)) throw p("Corner " + a + " is not permitted");
                        if (-1 != f.inArray(a, i._cAllowed.call(this))) {
                            var d = i._c.call(this, a, c.opts.cornerSize / 2);
                            c.status = "peel";
                            i._showFoldedPage.call(this, {
                                corner: a,
                                x: d.x,
                                y: d.y
                            }, b);
                        }
                    } else c.status = "", i.hideFoldedPage.call(this, b);
                    return this;
                }
            };
            window.requestAnim = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                window.setTimeout(a, 1e3 / 60);
            };
            f.extend(f.fn, {
                flip: function() {
                    return I(f(this[0]), i, arguments);
                },
                turn: function() {
                    return I(f(this[0]), g, arguments);
                },
                transform: function(a, b) {
                    var c = {};
                    b && (c[v + "transform-origin"] = b);
                    c[v + "transform"] = a;
                    return this.css(c);
                },
                animatef: function(a) {
                    var b = this.data();
                    b.effect && b.effect.stop();
                    if (a) {
                        a.to.length || (a.to = [ a.to ]);
                        a.from.length || (a.from = [ a.from ]);
                        for (var c = [], d = a.to.length, e = !0, g = this, i = (new Date).getTime(), j = function() {
                            if (b.effect && e) {
                                for (var f = [], k = Math.min(a.duration, (new Date).getTime() - i), l = 0; l < d; l++) f.push(b.effect.easing(1, k, a.from[l], c[l], a.duration));
                                a.frame(1 == d ? f[0] : f);
                                if (k == a.duration) {
                                    delete b.effect;
                                    g.data(b);
                                    a.complete && a.complete();
                                } else window.requestAnim(j);
                            }
                        }, l = 0; l < d; l++) c.push(a.to[l] - a.from[l]);
                        b.effect = f.extend({
                            stop: function() {
                                e = false;
                            },
                            easing: function(a, b, c, d, e) {
                                return d * Math.sqrt(1 - (b = b / e - 1) * b) + c;
                            }
                        }, a);
                        this.data(b);
                        j();
                    } else delete b.effect;
                }
            });

        })(jQuery);
        $("#flipbook").turn({
            autoCenter: false,
            gradients: true,
            acceleration: true
        });

        $("#flipbook").bind("end", (function(event, page, pageObject) {
            console.log('pageObject ', pageObject);
            console.log('page', page);



            if (2 == page.next && pageObject === false){
                const sellForm = document.querySelector(".flipbook-form");
                sellForm.classList.remove("hiden");
            }
            if (1 == page.next){
                const sellForm = document.querySelector(".flipbook-form");
                sellForm.classList.remove("hiden");
            }
            if (1 == page.next && 2 == page.page && pageObject === false){
                const sellForm = document.querySelector(".flipbook-form");
                sellForm.classList.add("hiden");
            }

            if (7 == page.next || 8 == page.next) {
                formFieldsInit({
                    viewPass: false,
                    autoHeight: false
                });
                formSubmit();
                let radios = document.querySelectorAll('input[type="radio"]');
                let chooseField = document.querySelector(".flipbook-form__inputname_tel-email");
                radios.forEach((radio => {
                    radio.addEventListener("click", (e => {
                        if ("o_1" == e.target.id) {
                            document.querySelector("#o_2").checked = false;
                            if (chooseField.classList.contains("_email")) chooseField.classList.remove("_email");
                            chooseField.classList.add("_tel");
                        } else if ("o_2" == e.target.id) {
                            document.querySelector("#o_1").checked = false;
                            if (chooseField.classList.contains("_tel")) chooseField.classList.remove("_tel");
                            chooseField.classList.add("_email");
                        }
                    }));
                }));
            }
        }));
        $(window).on("resize", (() => {
            let makeBookWidth, makeBookHeight;
            if (window.matchMedia("(max-width: 480px)").matches) {
                makeBookWidth = .9 * $(window).width();
                makeBookHeight = makeBookWidth * Math.sqrt(2);
            } else if (window.matchMedia("(max-width: 600px)").matches) {
                makeBookWidth = .85 * $(window).width();
                makeBookHeight = makeBookWidth * Math.sqrt(2);
            } else if (window.matchMedia("(max-width: 900px)").matches) {
                makeBookWidth = .9 * $(window).width();
                makeBookHeight = makeBookWidth / 2 * Math.sqrt(2);
            } else if (window.matchMedia("(max-width: 1600px)").matches) {
                makeBookWidth = .75 * $(window).width();
                makeBookHeight = makeBookWidth / 2 * Math.sqrt(2);
            } else {
                makeBookWidth = .6611 * $(window).width();
                makeBookHeight = makeBookWidth / 2 * Math.sqrt(2);
            }
            $("#flipbook").turn("size", makeBookWidth, makeBookHeight);
        }));
        var windowSize = window.matchMedia("(max-width: 600px)");
        windowSize.addListener(changeDisplay);
        changeDisplay(windowSize);
        function changeDisplay(e) {
            if (e.matches) $("#flipbook").turn("display", "single"); else $("#flipbook").turn("display", "double");
        }
        $(".header__order").click((() => {
            $("#flipbook").turn("page", 9);
        }));
        document.addEventListener("touchstart", handleTouchStart, false)
        ;
        document.addEventListener("touchmove", handleTouchMove, false);
        var xDown = null;
        var yDown = null;
        function getTouches(evt) {
            return evt.touches;
        }
        function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];
            xDown = firstTouch.clientX;
            yDown = firstTouch.clientY;
        }
        function handleTouchMove(evt) {
            if (!xDown || !yDown) return;
            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;
            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                if (window.matchMedia("(max-width: 1200px)").matches) if (xDiff > 0) $("#flipbook").turn("next"); else $("#flipbook").turn("previous");
            } else if (yDiff > 0) ;
            xDown = null;
            yDown = null;
        }
        if (document.querySelector("#flipbook").addEventListener) if ("onwheel" in document) document.querySelector("#flipbook").addEventListener("wheel", onWheel); else if ("onmousewheel" in document) document.querySelector("#flipbook").addEventListener("mousewheel", onWheel); else document.querySelector("#flipbook").addEventListener("MozMousePixelScroll", onWheel); else document.querySelector("#flipbook").attachEvent("onmousewheel", onWheel);
        function onWheel(e) {
            if (window.matchMedia("(min-width: 100px)").matches) if (e.deltaY > 0) $("#flipbook").turn("next"); else $("#flipbook").turn("previous");
        }
        $(document).ready((function() {
            $("a.scrollto").click((function(e) {
                if (window.matchMedia("(max-width: 900px)").matches) {
                    $(".menu-button").removeClass("menu-button-open");
                    $(".menu-items").removeClass("menu-items-open");
                }
                $(this).attr("href");
                if ($(e.target).hasClass("_chapter-one")) $("#flipbook").turn("page", 3); 
                if ($(e.target).hasClass("_chapter-two")) $("#flipbook").turn("page", 4);
                if ($(e.target).hasClass("_chapter-three")) $("#flipbook").turn("page", 5);
                if ($(e.target).hasClass("_chapter-four")) $("#flipbook").turn("page", 6);
                if ($(e.target).hasClass("_chapter-five")) $("#flipbook").turn("page", 7);
                if ($(e.target).hasClass("_chapter-six")) $("#flipbook").turn("page", 8);
                if ($(e.target).hasClass("_chapter-seven")) $("#flipbook").turn("page", 9);
                if ($(e.target).hasClass("_chapter-eight")) $("#flipbook").turn("page", 10);
                if ($(e.target).hasClass("_chapter-nine")) $("#flipbook").turn("page", 12);
                if ($(e.target).hasClass("_chapter-ten")) $("#flipbook").turn("hard",1 );

            }));
        }));
    })();
})();

const NUM_PARTICLES = 600;
const PARTICLE_SIZE = 0.8;
const SPEED = 20000;
let particles = [];
function normalPool(o){var r=0;do{var a=Math.round(normal({mean:o.mean,dev:o.dev}));if(a<o.pool.length&&a>=0)return o.pool[a];r++}while(r<100)}
function randomNormal(o){if(o=Object.assign({mean:0,dev:1,pool:[]},o),Array.isArray(o.pool)&&o.pool.length>0)return normalPool(o);var r,a,n,e,l=o.mean,t=o.dev;do{r=(a=2*Math.random()-1)*a+(n=2*Math.random()-1)*n}while(r>=1);return e=a*Math.sqrt(-2*Math.log(r)/r),t*e+l}
function rand(low, high) {
    return Math.random() * (high - low) + low;
}
function createParticle(canvas) {
    const colour = {
        r: 237,
        //g: randomNormal({ mean: 226, dev: 255 }),
        g: 205,
        b: 186,
        a: rand(0, 1),
    };
    return {
        x: -2,
        y: -2,
        diameter: Math.max(0, randomNormal({ mean: PARTICLE_SIZE, dev: PARTICLE_SIZE / 2 })),
        duration: randomNormal({ mean: SPEED, dev: SPEED * 0.1 }),
        amplitude: randomNormal({ mean: 16, dev: 2 }),
        offsetY: randomNormal({ mean: 0, dev: 10 }),
        arc: Math.PI * 2,
        startTime: performance.now() - rand(0, SPEED),
        colour: "rgba("+colour.r+", "+colour.g+", "+colour.b+", "+colour.a+")",
    }
}
function moveParticle(particle, canvas, time) {
    const progress = ((time - particle.startTime) % particle.duration) / particle.duration;
    return {
        ...particle,
        x: progress,
        y: ((Math.sin(progress * particle.arc) * particle.amplitude) + particle.offsetY),
    };
}
function drawParticle(particle, canvas, ctx) {
    canvas = document.getElementById('particle-canvas');
    const vh = canvas.height / 100;

    ctx.fillStyle = particle.colour;
    ctx.beginPath();
    ctx.ellipse(
        particle.x * canvas.width,
        particle.y * vh + (canvas.height / 2),
        particle.diameter * vh,
        particle.diameter * vh,
        0,
        0,
        2 * Math.PI
    );
    ctx.fill();
}
function draw(time, canvas, ctx) {
    particles.forEach((particle, index) => {
        particles[index] = moveParticle(particle, canvas, time);
    })
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
        drawParticle(particle, canvas, ctx);
    })
    requestAnimationFrame((time) => draw(time, canvas, ctx));
}
function initializeCanvas() {
    let canvas = document.getElementById('particle-canvas');
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    let ctx = canvas.getContext("2d");

    window.addEventListener('resize', () => {
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
        ctx = canvas.getContext("2d");
    })
    return [canvas, ctx];
}
function startAnimation() {
    const [canvas, ctx] = initializeCanvas();
    for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push(createParticle(canvas));
    }
    requestAnimationFrame((time) => draw(time, canvas, ctx));
};
(function () {
    if (document.readystate !== 'loading') {
        startAnimation();
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            startAnimation();
        })
    }
}());
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 3000);
}
