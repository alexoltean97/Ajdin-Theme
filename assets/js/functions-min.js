! function(t, e, i, n) {
    "use strict";

    function s(t, e, i) {
        return setTimeout(c(t, i), e)
    }

    function r(t, e, i) {
        return !!Array.isArray(t) && (o(t, i[e], i), !0)
    }

    function o(t, e, i) {
        var s;
        if (t)
            if (t.forEach) t.forEach(e, i);
            else if (t.length !== n)
                for (s = 0; s < t.length;) e.call(i, t[s], s, t), s++;
            else
                for (s in t) t.hasOwnProperty(s) && e.call(i, t[s], s, t)
    }

    function a(e, i, n) {
        var s = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
        return function() {
            var i = new Error("get-stack-trace"),
                n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                r = t.console && (t.console.warn || t.console.log);
            return r && r.call(t.console, s, n), e.apply(this, arguments)
        }
    }

    function l(t, e, i) {
        var n, s = e.prototype;
        (n = t.prototype = Object.create(s)).constructor = t, n._super = s, i && Q(n, i)
    }

    function c(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function h(t, e) {
        return typeof t == it ? t.apply(e && e[0] || n, e) : t
    }

    function u(t, e) {
        return t === n ? e : t
    }

    function d(t, e, i) {
        o(m(e), function(e) {
            t.addEventListener(e, i, !1)
        })
    }

    function p(t, e, i) {
        o(m(e), function(e) {
            t.removeEventListener(e, i, !1)
        })
    }

    function f(t, e) {
        for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
        }
        return !1
    }

    function v(t, e) {
        return t.indexOf(e) > -1
    }

    function m(t) {
        return t.trim().split(/\s+/g)
    }

    function g(t, e, i) {
        if (t.indexOf && !i) return t.indexOf(e);
        for (var n = 0; n < t.length;) {
            if (i && t[n][i] == e || !i && t[n] === e) return n;
            n++
        }
        return -1
    }

    function T(t) {
        return Array.prototype.slice.call(t, 0)
    }

    function y(t, e, i) {
        for (var n = [], s = [], r = 0; r < t.length;) {
            var o = e ? t[r][e] : t[r];
            g(s, o) < 0 && n.push(t[r]), s[r] = o, r++
        }
        return i && (n = e ? n.sort(function(t, i) {
            return t[e] > i[e]
        }) : n.sort()), n
    }

    function C(t, e) {
        for (var i, s, r = e[0].toUpperCase() + e.slice(1), o = 0; o < tt.length;) {
            if ((s = (i = tt[o]) ? i + r : e) in t) return s;
            o++
        }
        return n
    }

    function E(e) {
        var i = e.ownerDocument || e;
        return i.defaultView || i.parentWindow || t
    }

    function x(t, e) {
        var i = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            h(t.options.enable, [t]) && i.handler(e)
        }, this.init()
    }

    function $(t, e, i) {
        var n = i.pointers.length,
            s = i.changedPointers.length,
            r = e & vt && n - s == 0,
            o = e & (gt | Tt) && n - s == 0;
        i.isFirst = !!r, i.isFinal = !!o, r && (t.session = {}), i.eventType = e,
            function(t, e) {
                var i = t.session,
                    n = e.pointers,
                    s = n.length;
                i.firstInput || (i.firstInput = w(e)), s > 1 && !i.firstMultiple ? i.firstMultiple = w(e) : 1 === s && (i.firstMultiple = !1);
                var r = i.firstInput,
                    o = i.firstMultiple,
                    a = o ? o.center : r.center,
                    l = e.center = A(n);
                e.timeStamp = rt(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = b(a, l), e.distance = _(a, l),
                    function(t, e) {
                        var i = e.center,
                            n = t.offsetDelta || {},
                            s = t.prevDelta || {},
                            r = t.prevInput || {};
                        e.eventType !== vt && r.eventType !== gt || (s = t.prevDelta = {
                            x: r.deltaX || 0,
                            y: r.deltaY || 0
                        }, n = t.offsetDelta = {
                            x: i.x,
                            y: i.y
                        }), e.deltaX = s.x + (i.x - n.x), e.deltaY = s.y + (i.y - n.y)
                    }(i, e), e.offsetDirection = S(e.deltaX, e.deltaY);
                var c = D(e.deltaTime, e.deltaX, e.deltaY);
                e.overallVelocityX = c.x, e.overallVelocityY = c.y, e.overallVelocity = st(c.x) > st(c.y) ? c.x : c.y, e.scale = o ? function(t, e) {
                    return _(e[0], e[1], St) / _(t[0], t[1], St)
                }(o.pointers, n) : 1, e.rotation = o ? function(t, e) {
                    return b(e[1], e[0], St) + b(t[1], t[0], St)
                }(o.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, I(i, e);
                var h = t.element;
                f(e.srcEvent.target, h) && (h = e.srcEvent.target), e.target = h
            }(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
    }

    function I(t, e) {
        var i, s, r, o, a = t.lastInterval || e,
            l = e.timeStamp - a.timeStamp;
        if (e.eventType != Tt && (l > ft || a.velocity === n)) {
            var c = e.deltaX - a.deltaX,
                h = e.deltaY - a.deltaY,
                u = D(l, c, h);
            s = u.x, r = u.y, i = st(u.x) > st(u.y) ? u.x : u.y, o = S(c, h), t.lastInterval = e
        } else i = a.velocity, s = a.velocityX, r = a.velocityY, o = a.direction;
        e.velocity = i, e.velocityX = s, e.velocityY = r, e.direction = o
    }

    function w(t) {
        for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
            clientX: nt(t.pointers[i].clientX),
            clientY: nt(t.pointers[i].clientY)
        }, i++;
        return {
            timeStamp: rt(),
            pointers: e,
            center: A(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
        }
    }

    function A(t) {
        var e = t.length;
        if (1 === e) return {
            x: nt(t[0].clientX),
            y: nt(t[0].clientY)
        };
        for (var i = 0, n = 0, s = 0; e > s;) i += t[s].clientX, n += t[s].clientY, s++;
        return {
            x: nt(i / e),
            y: nt(n / e)
        }
    }

    function D(t, e, i) {
        return {
            x: e / t || 0,
            y: i / t || 0
        }
    }

    function S(t, e) {
        return t === e ? yt : st(t) >= st(e) ? 0 > t ? Ct : Et : 0 > e ? xt : $t
    }

    function _(t, e, i) {
        i || (i = Dt);
        var n = e[i[0]] - t[i[0]],
            s = e[i[1]] - t[i[1]];
        return Math.sqrt(n * n + s * s)
    }

    function b(t, e, i) {
        i || (i = Dt);
        var n = e[i[0]] - t[i[0]],
            s = e[i[1]] - t[i[1]];
        return 180 * Math.atan2(s, n) / Math.PI
    }

    function P() {
        this.evEl = bt, this.evWin = Pt, this.pressed = !1, x.apply(this, arguments)
    }

    function M() {
        this.evEl = Rt, this.evWin = zt, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function O() {
        this.evTarget = Xt, this.evWin = Yt, this.started = !1, x.apply(this, arguments)
    }

    function R() {
        this.evTarget = qt, this.targetIds = {}, x.apply(this, arguments)
    }

    function z() {
        x.apply(this, arguments);
        var t = c(this.handler, this);
        this.touch = new R(this.manager, t), this.mouse = new P(this.manager, t), this.primaryTouch = null, this.lastTouches = []
    }

    function N(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
            var i = {
                x: e.clientX,
                y: e.clientY
            };
            this.lastTouches.push(i);
            var n = this.lastTouches;
            setTimeout(function() {
                var t = n.indexOf(i);
                t > -1 && n.splice(t, 1)
            }, Ft)
        }
    }

    function X(t, e) {
        this.manager = t, this.set(e)
    }

    function Y(t) {
        this.options = Q({}, this.defaults, t || {}), this.id = lt++, this.manager = null, this.options.enable = u(this.options.enable, !0), this.state = Kt, this.simultaneous = {}, this.requireFail = []
    }

    function k(t) {
        return t & ne ? "cancel" : t & ee ? "end" : t & te ? "move" : t & Qt ? "start" : ""
    }

    function q(t) {
        return t == $t ? "down" : t == xt ? "up" : t == Ct ? "left" : t == Et ? "right" : ""
    }

    function F(t, e) {
        var i = e.manager;
        return i ? i.get(t) : t
    }

    function W() {
        Y.apply(this, arguments)
    }

    function H() {
        W.apply(this, arguments), this.pX = null, this.pY = null
    }

    function L() {
        W.apply(this, arguments)
    }

    function U() {
        Y.apply(this, arguments), this._timer = null, this._input = null
    }

    function V() {
        W.apply(this, arguments)
    }

    function j() {
        W.apply(this, arguments)
    }

    function G() {
        Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function B(t, e) {
        return (e = e || {}).recognizers = u(e.recognizers, B.defaults.preset), new Z(t, e)
    }

    function Z(t, e) {
        this.options = Q({}, B.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = function(t) {
            var e = t.options.inputClass;
            return new(e || (ht ? M : ut ? R : ct ? z : P))(t, $)
        }(this), this.touchAction = new X(this, this.options.touchAction), J(this, !0), o(this.options.recognizers, function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
        }, this)
    }

    function J(t, e) {
        var i, n = t.element;
        n.style && (o(t.options.cssProps, function(s, r) {
            i = C(n.style, r), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = s) : n.style[i] = t.oldCssProps[i] || ""
        }), e || (t.oldCssProps = {}))
    }

    function K(t, i) {
        var n = e.createEvent("Event");
        n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
    }
    var Q, tt = ["", "webkit", "Moz", "MS", "ms", "o"],
        et = e.createElement("div"),
        it = "function",
        nt = Math.round,
        st = Math.abs,
        rt = Date.now;
    Q = "function" != typeof Object.assign ? function(t) {
        if (t === n || null === t) throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), i = 1; i < arguments.length; i++) {
            var s = arguments[i];
            if (s !== n && null !== s)
                for (var r in s) s.hasOwnProperty(r) && (e[r] = s[r])
        }
        return e
    } : Object.assign;
    var ot = a(function(t, e, i) {
            for (var s = Object.keys(e), r = 0; r < s.length;)(!i || i && t[s[r]] === n) && (t[s[r]] = e[s[r]]), r++;
            return t
        }, "extend", "Use `assign`."),
        at = a(function(t, e) {
            return ot(t, e, !0)
        }, "merge", "Use `assign`."),
        lt = 1,
        ct = "ontouchstart" in t,
        ht = C(t, "PointerEvent") !== n,
        ut = ct && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
        dt = "touch",
        pt = "mouse",
        ft = 25,
        vt = 1,
        mt = 2,
        gt = 4,
        Tt = 8,
        yt = 1,
        Ct = 2,
        Et = 4,
        xt = 8,
        $t = 16,
        It = Ct | Et,
        wt = xt | $t,
        At = It | wt,
        Dt = ["x", "y"],
        St = ["clientX", "clientY"];
    x.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(E(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(E(this.element), this.evWin, this.domHandler)
        }
    };
    var _t = {
            mousedown: vt,
            mousemove: mt,
            mouseup: gt
        },
        bt = "mousedown",
        Pt = "mousemove mouseup";
    l(P, x, {
        handler: function(t) {
            var e = _t[t.type];
            e & vt && 0 === t.button && (this.pressed = !0), e & mt && 1 !== t.which && (e = gt), this.pressed && (e & gt && (this.pressed = !1), this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: pt,
                srcEvent: t
            }))
        }
    });
    var Mt = {
            pointerdown: vt,
            pointermove: mt,
            pointerup: gt,
            pointercancel: Tt,
            pointerout: Tt
        },
        Ot = {
            2: dt,
            3: "pen",
            4: pt,
            5: "kinect"
        },
        Rt = "pointerdown",
        zt = "pointermove pointerup pointercancel";
    t.MSPointerEvent && !t.PointerEvent && (Rt = "MSPointerDown", zt = "MSPointerMove MSPointerUp MSPointerCancel"), l(M, x, {
        handler: function(t) {
            var e = this.store,
                i = !1,
                n = t.type.toLowerCase().replace("ms", ""),
                s = Mt[n],
                r = Ot[t.pointerType] || t.pointerType,
                o = r == dt,
                a = g(e, t.pointerId, "pointerId");
            s & vt && (0 === t.button || o) ? 0 > a && (e.push(t), a = e.length - 1) : s & (gt | Tt) && (i = !0), 0 > a || (e[a] = t, this.callback(this.manager, s, {
                pointers: e,
                changedPointers: [t],
                pointerType: r,
                srcEvent: t
            }), i && e.splice(a, 1))
        }
    });
    var Nt = {
            touchstart: vt,
            touchmove: mt,
            touchend: gt,
            touchcancel: Tt
        },
        Xt = "touchstart",
        Yt = "touchstart touchmove touchend touchcancel";
    l(O, x, {
        handler: function(t) {
            var e = Nt[t.type];
            if (e === vt && (this.started = !0), this.started) {
                var i = function(t, e) {
                    var i = T(t.touches),
                        n = T(t.changedTouches);
                    return e & (gt | Tt) && (i = y(i.concat(n), "identifier", !0)), [i, n]
                }.call(this, t, e);
                e & (gt | Tt) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: dt,
                    srcEvent: t
                })
            }
        }
    });
    var kt = {
            touchstart: vt,
            touchmove: mt,
            touchend: gt,
            touchcancel: Tt
        },
        qt = "touchstart touchmove touchend touchcancel";
    l(R, x, {
        handler: function(t) {
            var e = kt[t.type],
                i = function(t, e) {
                    var i = T(t.touches),
                        n = this.targetIds;
                    if (e & (vt | mt) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
                    var s, r, o = T(t.changedTouches),
                        a = [],
                        l = this.target;
                    if (r = i.filter(function(t) {
                        return f(t.target, l)
                    }), e === vt)
                        for (s = 0; s < r.length;) n[r[s].identifier] = !0, s++;
                    for (s = 0; s < o.length;) n[o[s].identifier] && a.push(o[s]), e & (gt | Tt) && delete n[o[s].identifier], s++;
                    return a.length ? [y(r.concat(a), "identifier", !0), a] : void 0
                }.call(this, t, e);
            i && this.callback(this.manager, e, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: dt,
                srcEvent: t
            })
        }
    });
    var Ft = 2500,
        Wt = 25;
    l(z, x, {
        handler: function(t, e, i) {
            var n = i.pointerType == dt,
                s = i.pointerType == pt;
            if (!(s && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                if (n)(function(t, e) {
                    t & vt ? (this.primaryTouch = e.changedPointers[0].identifier, N.call(this, e)) : t & (gt | Tt) && N.call(this, e)
                }).call(this, e, i);
                else if (s && function(t) {
                    for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                        var s = this.lastTouches[n],
                            r = Math.abs(e - s.x),
                            o = Math.abs(i - s.y);
                        if (Wt >= r && Wt >= o) return !0
                    }
                    return !1
                }.call(this, i)) return;
                this.callback(t, e, i)
            }
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Ht = C(et.style, "touchAction"),
        Lt = Ht !== n,
        Ut = "compute",
        Vt = "auto",
        jt = "manipulation",
        Gt = "none",
        Bt = "pan-x",
        Zt = "pan-y",
        Jt = function() {
            if (!Lt) return !1;
            var e = {},
                i = t.CSS && t.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
                e[n] = !i || t.CSS.supports("touch-action", n)
            }), e
        }();
    X.prototype = {
        set: function(t) {
            t == Ut && (t = this.compute()), Lt && this.manager.element.style && Jt[t] && (this.manager.element.style[Ht] = t), this.actions = t.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var t = [];
            return o(this.manager.recognizers, function(e) {
                h(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }),
                function(t) {
                    if (v(t, Gt)) return Gt;
                    var e = v(t, Bt),
                        i = v(t, Zt);
                    return e && i ? Gt : e || i ? e ? Bt : Zt : v(t, jt) ? jt : Vt
                }(t.join(" "))
        },
        preventDefaults: function(t) {
            var e = t.srcEvent,
                i = t.offsetDirection;
            if (!this.manager.session.prevented) {
                var n = this.actions,
                    s = v(n, Gt) && !Jt[Gt],
                    r = v(n, Zt) && !Jt[Zt],
                    o = v(n, Bt) && !Jt[Bt];
                if (s) {
                    var a = 1 === t.pointers.length,
                        l = t.distance < 2,
                        c = t.deltaTime < 250;
                    if (a && l && c) return
                }
                return o && r ? void 0 : s || r && i & It || o && i & wt ? this.preventSrc(e) : void 0
            }
            e.preventDefault()
        },
        preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
        }
    };
    var Kt = 1,
        Qt = 2,
        te = 4,
        ee = 8,
        ie = ee,
        ne = 16;
    Y.prototype = {
        defaults: {},
        set: function(t) {
            return Q(this.options, t), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(t) {
            if (r(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return e[(t = F(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
        },
        dropRecognizeWith: function(t) {
            return r(t, "dropRecognizeWith", this) ? this : (t = F(t, this), delete this.simultaneous[t.id], this)
        },
        requireFailure: function(t) {
            if (r(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return -1 === g(e, t = F(t, this)) && (e.push(t), t.requireFailure(this)), this
        },
        dropRequireFailure: function(t) {
            if (r(t, "dropRequireFailure", this)) return this;
            t = F(t, this);
            var e = g(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
        },
        emit: function(t) {
            function e(e) {
                i.manager.emit(e, t)
            }
            var i = this,
                n = this.state;
            ee > n && e(i.options.event + k(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), n >= ee && e(i.options.event + k(n))
        },
        tryEmit: function(t) {
            return this.canEmit() ? this.emit(t) : void(this.state = 32)
        },
        canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
                if (!(this.requireFail[t].state & (32 | Kt))) return !1;
                t++
            }
            return !0
        },
        recognize: function(t) {
            var e = Q({}, t);
            return h(this.options.enable, [this, e]) ? (this.state & (ie | ne | 32) && (this.state = Kt), this.state = this.process(e), void(this.state & (Qt | te | ee | ne) && this.tryEmit(e))) : (this.reset(), void(this.state = 32))
        },
        process: function(t) {},
        getTouchAction: function() {},
        reset: function() {}
    }, l(W, Y, {
        defaults: {
            pointers: 1
        },
        attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        },
        process: function(t) {
            var e = this.state,
                i = t.eventType,
                n = e & (Qt | te),
                s = this.attrTest(t);
            return n && (i & Tt || !s) ? e | ne : n || s ? i & gt ? e | ee : e & Qt ? e | te : Qt : 32
        }
    }), l(H, W, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: At
        },
        getTouchAction: function() {
            var t = this.options.direction,
                e = [];
            return t & It && e.push(Zt), t & wt && e.push(Bt), e
        },
        directionTest: function(t) {
            var e = this.options,
                i = !0,
                n = t.distance,
                s = t.direction,
                r = t.deltaX,
                o = t.deltaY;
            return s & e.direction || (e.direction & It ? (s = 0 === r ? yt : 0 > r ? Ct : Et, i = r != this.pX, n = Math.abs(t.deltaX)) : (s = 0 === o ? yt : 0 > o ? xt : $t, i = o != this.pY, n = Math.abs(t.deltaY))), t.direction = s, i && n > e.threshold && s & e.direction
        },
        attrTest: function(t) {
            return W.prototype.attrTest.call(this, t) && (this.state & Qt || !(this.state & Qt) && this.directionTest(t))
        },
        emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = q(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
        }
    }), l(L, W, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Gt]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & Qt)
        },
        emit: function(t) {
            if (1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
        }
    }), l(U, Y, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return [Vt]
        },
        process: function(t) {
            var e = this.options,
                i = t.pointers.length === e.pointers,
                n = t.distance < e.threshold,
                r = t.deltaTime > e.time;
            if (this._input = t, !n || !i || t.eventType & (gt | Tt) && !r) this.reset();
            else if (t.eventType & vt) this.reset(), this._timer = s(function() {
                this.state = ie, this.tryEmit()
            }, e.time, this);
            else if (t.eventType & gt) return ie;
            return 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(t) {
            this.state === ie && (t && t.eventType & gt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = rt(), this.manager.emit(this.options.event, this._input)))
        }
    }), l(V, W, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Gt]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & Qt)
        }
    }), l(j, W, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: It | wt,
            pointers: 1
        },
        getTouchAction: function() {
            return H.prototype.getTouchAction.call(this)
        },
        attrTest: function(t) {
            var e, i = this.options.direction;
            return i & (It | wt) ? e = t.overallVelocity : i & It ? e = t.overallVelocityX : i & wt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && st(e) > this.options.velocity && t.eventType & gt
        },
        emit: function(t) {
            var e = q(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
        }
    }), l(G, Y, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [jt]
        },
        process: function(t) {
            var e = this.options,
                i = t.pointers.length === e.pointers,
                n = t.distance < e.threshold,
                r = t.deltaTime < e.time;
            if (this.reset(), t.eventType & vt && 0 === this.count) return this.failTimeout();
            if (n && r && i) {
                if (t.eventType != gt) return this.failTimeout();
                var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                    a = !this.pCenter || _(this.pCenter, t.center) < e.posThreshold;
                if (this.pTime = t.timeStamp, this.pCenter = t.center, a && o ? this.count += 1 : this.count = 1, this._input = t, 0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = s(function() {
                    this.state = ie, this.tryEmit()
                }, e.interval, this), Qt) : ie
            }
            return 32
        },
        failTimeout: function() {
            return this._timer = s(function() {
                this.state = 32
            }, this.options.interval, this), 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == ie && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), B.VERSION = "2.0.8", B.defaults = {
        domEvents: !1,
        touchAction: Ut,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [V, {
                enable: !1
            }],
            [L, {
                enable: !1
            },
                ["rotate"]
            ],
            [j, {
                direction: It
            }],
            [H, {
                direction: It
            },
                ["swipe"]
            ],
            [G],
            [G, {
                event: "doubletap",
                taps: 2
            },
                ["tap"]
            ],
            [U]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    Z.prototype = {
        set: function(t) {
            return Q(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
        },
        stop: function(t) {
            this.session.stopped = t ? 2 : 1
        },
        recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var i, n = this.recognizers,
                    s = e.curRecognizer;
                (!s || s && s.state & ie) && (s = e.curRecognizer = null);
                for (var r = 0; r < n.length;) i = n[r], 2 === e.stopped || s && i != s && !i.canRecognizeWith(s) ? i.reset() : i.recognize(t), !s && i.state & (Qt | te | ee) && (s = e.curRecognizer = i), r++
            }
        },
        get: function(t) {
            if (t instanceof Y) return t;
            for (var e = this.recognizers, i = 0; i < e.length; i++)
                if (e[i].options.event == t) return e[i];
            return null
        },
        add: function(t) {
            if (r(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
        },
        remove: function(t) {
            if (r(t, "remove", this)) return this;
            if (t = this.get(t)) {
                var e = this.recognizers,
                    i = g(e, t); - 1 !== i && (e.splice(i, 1), this.touchAction.update())
            }
            return this
        },
        on: function(t, e) {
            if (t !== n && e !== n) {
                var i = this.handlers;
                return o(m(t), function(t) {
                    i[t] = i[t] || [], i[t].push(e)
                }), this
            }
        },
        off: function(t, e) {
            if (t !== n) {
                var i = this.handlers;
                return o(m(t), function(t) {
                    e ? i[t] && i[t].splice(g(i[t], e), 1) : delete i[t]
                }), this
            }
        },
        emit: function(t, e) {
            this.options.domEvents && K(t, e);
            var i = this.handlers[t] && this.handlers[t].slice();
            if (i && i.length) {
                e.type = t, e.preventDefault = function() {
                    e.srcEvent.preventDefault()
                };
                for (var n = 0; n < i.length;) i[n](e), n++
            }
        },
        destroy: function() {
            this.element && J(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, Q(B, {
        INPUT_START: vt,
        INPUT_MOVE: mt,
        INPUT_END: gt,
        INPUT_CANCEL: Tt,
        STATE_POSSIBLE: Kt,
        STATE_BEGAN: Qt,
        STATE_CHANGED: te,
        STATE_ENDED: ee,
        STATE_RECOGNIZED: ie,
        STATE_CANCELLED: ne,
        STATE_FAILED: 32,
        DIRECTION_NONE: yt,
        DIRECTION_LEFT: Ct,
        DIRECTION_RIGHT: Et,
        DIRECTION_UP: xt,
        DIRECTION_DOWN: $t,
        DIRECTION_HORIZONTAL: It,
        DIRECTION_VERTICAL: wt,
        DIRECTION_ALL: At,
        Manager: Z,
        Input: x,
        TouchAction: X,
        TouchInput: R,
        MouseInput: P,
        PointerEventInput: M,
        TouchMouseInput: z,
        SingleTouchInput: O,
        Recognizer: Y,
        AttrRecognizer: W,
        Tap: G,
        Pan: H,
        Swipe: j,
        Pinch: L,
        Rotate: V,
        Press: U,
        on: d,
        off: p,
        each: o,
        merge: at,
        extend: ot,
        assign: Q,
        inherit: l,
        bindFn: c,
        prefixed: C
    }), (void 0 !== t ? t : "undefined" != typeof self ? self : {}).Hammer = B, "function" == typeof define && define.amd ? define(function() {
        return B
    }) : "undefined" != typeof module && module.exports ? module.exports = B : t.Hammer = B
}(window, document), $(document).ready(function() {
    function t(t) {
        var n = $(".side-nav").find(".is-active"),
            s = $(".side-nav").children().index(n),
            r = $(".side-nav").children().length - 1,
            o = 0;
        window.innerWidth >= 815 && ("swipeup" === t.type || 40 === t.keyCode || t > 0 ? s !== r ? (e(o = s + 1), i(s, o, r)) : (e(o), i(s, o, r)) : ("swipedown" === t.type || 38 === t.keyCode || 0 > t) && (0 !== s ? (e(o = s - 1), i(s, o, r)) : (e(o = r), i(s, o, r))))
    }

    function e(t) {
        $(".side-nav, .outer-nav").children().removeClass("is-active"), $(".side-nav").children().eq(t).addClass("is-active"), $(".outer-nav").children().eq(t).addClass("is-active")
    }

    function i(t, e, i) {
        $(".main-content").children().removeClass("section--is-active"), $(".main-content").children().eq(e).addClass("section--is-active"), $(".main-content .section").children().removeClass("section--next section--prev"), t === i && 0 === e || 0 === t && e === i ? $(".main-content .section").children().removeClass("section--next section--prev") : e > t ? $(".main-content").children().eq(t).children().addClass("section--next") : $(".main-content").children().eq(t).children().addClass("section--prev"), 0 !== e && e !== i ? $(".header--cta").addClass("is-active") : $(".header--cta").removeClass("is-active")
    }
    var n = !0,
        s = null;
    $(this).on("mousewheel DOMMouseScroll", function(e) {
        if (!$(".outer-nav").hasClass("is-vis")) {
            e.preventDefault();
            var i = e.originalEvent.wheelDelta ? -e.originalEvent.wheelDelta : 20 * e.originalEvent.detail;
            i > 50 && n ? (n = !1, clearTimeout(s), s = setTimeout(function() {
                n = !0
            }, 800), t(1)) : -50 > i && n && (n = !1, clearTimeout(s), s = setTimeout(function() {
                n = !0
            }, 800), t(-1))
        }
    }), $(".side-nav li, .outer-nav li").click(function() {
        if (!$(this).hasClass("is-active")) {
            var t = $(this),
                n = t.parent().find(".is-active"),
                s = t.parent().children().index(n),
                r = t.parent().children().index(t),
                o = $(this).parent().children().length - 1;
            e(r), i(s, r, o)
        }
    }), $(".cta").click(function() {
        var t = $(".side-nav").find(".is-active"),
            n = $(".side-nav").children().index(t),
            s = $(".side-nav").children().length - 1,
            r = s;
        e(s), i(n, r, s)
    });
    var r = document.getElementById("viewport");
    new Hammer(r);
    $(document).keyup(function(e) {
        $(".outer-nav").hasClass("is-vis") || (e.preventDefault(), t(e))
    }), $(".header--nav-toggle").click(function() {
        $(".perspective").addClass("perspective--modalview"), setTimeout(function() {
            $(".perspective").addClass("effect-rotate-left--animate")
        }, 25), $(".outer-nav, .outer-nav li, .outer-nav--return").addClass("is-vis")
    }), $(".outer-nav--return, .outer-nav li").click(function() {
        $(".perspective").removeClass("effect-rotate-left--animate"), setTimeout(function() {
            $(".perspective").removeClass("perspective--modalview")
        }, 400), $(".outer-nav, .outer-nav li, .outer-nav--return").removeClass("is-vis")
    }), $(".slider--prev, .slider--next").click(function() {
        var t = $(this),
            e = $(".slider").find(".slider--item-left"),
            i = $(".slider").children().index(e),
            n = $(".slider").find(".slider--item-center"),
            s = $(".slider").children().index(n),
            r = $(".slider").find(".slider--item-right"),
            o = $(".slider").children().index(r),
            a = $(".slider").children().length,
            l = $(".slider--item-left"),
            c = $(".slider--item-center"),
            h = $(".slider--item-right"),
            u = $(".slider--item");
        $(".slider").animate({
            opacity: 0
        }, 400), setTimeout(function() {
            t.hasClass("slider--next") ? a - 1 > i && a - 1 > s && a - 1 > o ? (l.removeClass("slider--item-left").next().addClass("slider--item-left"), c.removeClass("slider--item-center").next().addClass("slider--item-center"), h.removeClass("slider--item-right").next().addClass("slider--item-right")) : i === a - 1 ? (u.removeClass("slider--item-left").first().addClass("slider--item-left"), c.removeClass("slider--item-center").next().addClass("slider--item-center"), h.removeClass("slider--item-right").next().addClass("slider--item-right")) : s === a - 1 ? (l.removeClass("slider--item-left").next().addClass("slider--item-left"), u.removeClass("slider--item-center").first().addClass("slider--item-center"), h.removeClass("slider--item-right").next().addClass("slider--item-right")) : (l.removeClass("slider--item-left").next().addClass("slider--item-left"), c.removeClass("slider--item-center").next().addClass("slider--item-center"), u.removeClass("slider--item-right").first().addClass("slider--item-right")) : 0 !== i && 0 !== s && 0 !== o ? (l.removeClass("slider--item-left").prev().addClass("slider--item-left"), c.removeClass("slider--item-center").prev().addClass("slider--item-center"), h.removeClass("slider--item-right").prev().addClass("slider--item-right")) : 0 === i ? (u.removeClass("slider--item-left").last().addClass("slider--item-left"), c.removeClass("slider--item-center").prev().addClass("slider--item-center"), h.removeClass("slider--item-right").prev().addClass("slider--item-right")) : 0 === s ? (l.removeClass("slider--item-left").prev().addClass("slider--item-left"), u.removeClass("slider--item-center").last().addClass("slider--item-center"), h.removeClass("slider--item-right").prev().addClass("slider--item-right")) : (l.removeClass("slider--item-left").prev().addClass("slider--item-left"), c.removeClass("slider--item-center").prev().addClass("slider--item-center"), u.removeClass("slider--item-right").last().addClass("slider--item-right"))
        }, 400), $(".slider").animate({
            opacity: 1
        }, 400)
    }), $(".work-request--information input").focusout(function() {
        "" === $(this).val() ? $(this).removeClass("has-value") : $(this).addClass("has-value"), window.scrollTo(0, 0)
    })
});