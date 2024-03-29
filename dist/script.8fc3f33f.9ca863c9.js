// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.8fc3f33f.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "wFJa": [function (require, module, exports) {
    module.exports = "Blackmoji2.f7fd9338.gif";
  }, {}],
  "YjS8": [function (require, module, exports) {
    module.exports = "Whitemoji2.42f06418.gif";
  }, {}],
  "fQwx": [function (require, module, exports) {
    module.exports = {
      Blackmoji2: require("./Blackmoji2.gif"),
      Whitemoji2: require("./Whitemoji2.gif")
    };
  }, {
    "./Blackmoji2.gif": "wFJa",
    "./Whitemoji2.gif": "YjS8"
  }],
  "MA0p": [function (require, module, exports) {
    var define;
    var t;

    function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    (function () {
      var n,
          r,
          o,
          s,
          i,
          u,
          a,
          c,
          l,
          p,
          h,
          f,
          d,
          g,
          m,
          y,
          v,
          w,
          b,
          S,
          k,
          _q,
          x,
          L,
          T,
          R,
          P,
          E,
          M,
          j,
          A,
          N,
          O,
          _,
          F,
          C,
          U,
          W,
          X,
          D,
          H,
          I,
          z,
          G,
          B,
          J,
          K,
          Q,
          V = [].slice,
          Y = {}.hasOwnProperty,
          Z = function Z(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var r in e) {
          Y.call(e, r) && (t[r] = e[r]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          $ = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      for (k = {
        catchupTime: 100,
        initialRate: .03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: {
          checkInterval: 100,
          selectors: ["body"]
        },
        eventLag: {
          minSamples: 10,
          sampleCount: 3,
          lagThreshold: 3
        },
        ajax: {
          trackMethods: ["GET"],
          trackWebSockets: !0,
          ignoreURLs: []
        }
      }, M = function M() {
        var t;
        return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date();
      }, A = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, S = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == A && (A = function A(t) {
        return setTimeout(t, 50);
      }, S = function S(t) {
        return clearTimeout(t);
      }), O = function O(t) {
        var e, _n;

        return e = M(), (_n = function n() {
          var r;
          return (r = M() - e) >= 33 ? (e = M(), t(r, function () {
            return A(_n);
          })) : setTimeout(_n, 33 - r);
        })();
      }, N = function N() {
        var t, e, n;
        return n = arguments[0], e = arguments[1], t = 3 <= arguments.length ? V.call(arguments, 2) : [], "function" == typeof n[e] ? n[e].apply(n, t) : n[e];
      }, _q = function q() {
        var t, n, r, o, s, i, u;

        for (n = arguments[0], i = 0, u = (o = 2 <= arguments.length ? V.call(arguments, 1) : []).length; u > i; i++) {
          if (r = o[i]) for (t in r) {
            Y.call(r, t) && (s = r[t], null != n[t] && "object" == e(n[t]) && null != s && "object" == e(s) ? _q(n[t], s) : n[t] = s);
          }
        }

        return n;
      }, v = function v(t) {
        var e, n, r, o, s;

        for (n = e = 0, o = 0, s = t.length; s > o; o++) {
          r = t[o], n += Math.abs(r), e++;
        }

        return n / e;
      }, L = function L(t, e) {
        var n, r, o;

        if (null == t && (t = "options"), null == e && (e = !0), o = document.querySelector("[data-pace-" + t + "]")) {
          if (n = o.getAttribute("data-pace-" + t), !e) return n;

          try {
            return JSON.parse(n);
          } catch (u) {
            return r = u, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", r) : void 0;
          }
        }
      }, a = function () {
        function t() {}

        return t.prototype.on = function (t, e, n, r) {
          var o;
          return null == r && (r = !1), null == this.bindings && (this.bindings = {}), null == (o = this.bindings)[t] && (o[t] = []), this.bindings[t].push({
            handler: e,
            ctx: n,
            once: r
          });
        }, t.prototype.once = function (t, e, n) {
          return this.on(t, e, n, !0);
        }, t.prototype.off = function (t, e) {
          var n, r, o;

          if (null != (null != (r = this.bindings) ? r[t] : void 0)) {
            if (null == e) return delete this.bindings[t];

            for (n = 0, o = []; n < this.bindings[t].length;) {
              o.push(this.bindings[t][n].handler === e ? this.bindings[t].splice(n, 1) : n++);
            }

            return o;
          }
        }, t.prototype.trigger = function () {
          var t, e, n, r, o, s, i, u, a;

          if (n = arguments[0], t = 2 <= arguments.length ? V.call(arguments, 1) : [], null != (i = this.bindings) ? i[n] : void 0) {
            for (o = 0, a = []; o < this.bindings[n].length;) {
              r = (u = this.bindings[n][o]).handler, e = u.ctx, s = u.once, r.apply(null != e ? e : this, t), a.push(s ? this.bindings[n].splice(o, 1) : o++);
            }

            return a;
          }
        }, t;
      }(), p = window.Pace || {}, window.Pace = p, _q(p, a.prototype), j = p.options = _q({}, k, window.paceOptions, L()), z = 0, B = (K = ["ajax", "document", "eventLag", "elements"]).length; B > z; z++) {
        !0 === j[U = K[z]] && (j[U] = k[U]);
      }

      l = function (t) {
        function e() {
          return e.__super__.constructor.apply(this, arguments);
        }

        return Z(e, t), e;
      }(Error), r = function () {
        function t() {
          this.progress = 0;
        }

        return t.prototype.getElement = function () {
          var t;

          if (null == this.el) {
            if (!(t = document.querySelector(j.target))) throw new l();
            this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el);
          }

          return this.el;
        }, t.prototype.finish = function () {
          var t;
          return (t = this.getElement()).className = t.className.replace("pace-active", ""), t.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done";
        }, t.prototype.update = function (t) {
          return this.progress = t, this.render();
        }, t.prototype.destroy = function () {
          try {
            this.getElement().parentNode.removeChild(this.getElement());
          } catch (t) {
            l = t;
          }

          return this.el = void 0;
        }, t.prototype.render = function () {
          var t, e, n, r, o, s, i;
          if (null == document.querySelector(j.target)) return !1;

          for (t = this.getElement(), r = "translate3d(" + this.progress + "%, 0, 0)", o = 0, s = (i = ["webkitTransform", "msTransform", "transform"]).length; s > o; o++) {
            e = i[o], t.children[0].style[e] = r;
          }

          return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), this.progress >= 100 ? n = "99" : (n = this.progress < 10 ? "0" : "", n += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + n)), this.lastRenderedProgress = this.progress;
        }, t.prototype.done = function () {
          return this.progress >= 100;
        }, t;
      }(), c = function () {
        function t() {
          this.bindings = {};
        }

        return t.prototype.trigger = function (t, e) {
          var n, r, o, s, i;

          if (null != this.bindings[t]) {
            for (i = [], r = 0, o = (s = this.bindings[t]).length; o > r; r++) {
              n = s[r], i.push(n.call(this, e));
            }

            return i;
          }
        }, t.prototype.on = function (t, e) {
          var n;
          return null == (n = this.bindings)[t] && (n[t] = []), this.bindings[t].push(e);
        }, t;
      }(), I = window.XMLHttpRequest, H = window.XDomainRequest, D = window.WebSocket, x = function x(t, e) {
        var n, r, o;

        for (n in o = [], e.prototype) {
          try {
            r = e.prototype[n], o.push(null == t[n] && "function" != typeof r ? t[n] = r : void 0);
          } catch (a) {
            a;
          }
        }

        return o;
      }, P = [], p.ignore = function () {
        var t, e, n;
        return e = arguments[0], t = 2 <= arguments.length ? V.call(arguments, 1) : [], P.unshift("ignore"), n = e.apply(null, t), P.shift(), n;
      }, p.track = function () {
        var t, e, n;
        return e = arguments[0], t = 2 <= arguments.length ? V.call(arguments, 1) : [], P.unshift("track"), n = e.apply(null, t), P.shift(), n;
      }, C = function C(t) {
        var e;
        if (null == t && (t = "GET"), "track" === P[0]) return "force";

        if (!P.length && j.ajax) {
          if ("socket" === t && j.ajax.trackWebSockets) return !0;
          if (e = t.toUpperCase(), $.call(j.ajax.trackMethods, e) >= 0) return !0;
        }

        return !1;
      }, h = function (t) {
        function e() {
          var t,
              n = this;
          e.__super__.constructor.apply(this, arguments), t = function t(_t) {
            var e;
            return e = _t.open, _t.open = function (r, o) {
              return C(r) && n.trigger("request", {
                type: r,
                url: o,
                request: _t
              }), e.apply(_t, arguments);
            };
          }, window.XMLHttpRequest = function (e) {
            var n;
            return n = new I(e), t(n), n;
          };

          try {
            x(window.XMLHttpRequest, I);
          } catch (s) {}

          if (null != H) {
            window.XDomainRequest = function () {
              var e;
              return e = new H(), t(e), e;
            };

            try {
              x(window.XDomainRequest, H);
            } catch (s) {}
          }

          if (null != D && j.ajax.trackWebSockets) {
            window.WebSocket = function (t, e) {
              var r;
              return r = null != e ? new D(t, e) : new D(t), C("socket") && n.trigger("request", {
                type: "socket",
                url: t,
                protocols: e,
                request: r
              }), r;
            };

            try {
              x(window.WebSocket, D);
            } catch (s) {}
          }
        }

        return Z(e, c), e;
      }(), G = null, F = function F(t) {
        var e, n, r, o;

        for (n = 0, r = (o = j.ajax.ignoreURLs).length; r > n; n++) {
          if ("string" == typeof (e = o[n])) {
            if (-1 !== t.indexOf(e)) return !0;
          } else if (e.test(t)) return !0;
        }

        return !1;
      }, (T = function T() {
        return null == G && (G = new h()), G;
      })().on("request", function (t) {
        var e, r, o, s, i;
        return s = t.type, o = t.request, i = t.url, F(i) ? void 0 : p.running || !1 === j.restartOnRequestAfter && "force" !== C(s) ? void 0 : (r = arguments, "boolean" == typeof (e = j.restartOnRequestAfter || 0) && (e = 0), setTimeout(function () {
          var t, e, i, u, a;

          if ("socket" === s ? o.readyState < 2 : 0 < (i = o.readyState) && 4 > i) {
            for (p.restart(), a = [], t = 0, e = (u = p.sources).length; e > t; t++) {
              if ((U = u[t]) instanceof n) {
                U.watch.apply(U, r);
                break;
              }

              a.push(void 0);
            }

            return a;
          }
        }, e));
      }), n = function () {
        function t() {
          var t = this;
          this.elements = [], T().on("request", function () {
            return t.watch.apply(t, arguments);
          });
        }

        return t.prototype.watch = function (t) {
          var e, n, r, o;
          return r = t.type, e = t.request, o = t.url, F(o) ? void 0 : (n = "socket" === r ? new g(e) : new m(e), this.elements.push(n));
        }, t;
      }(), m = function () {
        return function (t) {
          var e,
              n,
              r,
              o,
              s,
              i = this;
          if (this.progress = 0, null != window.ProgressEvent) for (t.addEventListener("progress", function (t) {
            return i.progress = t.lengthComputable ? 100 * t.loaded / t.total : i.progress + (100 - i.progress) / 2;
          }, !1), n = 0, r = (s = ["load", "abort", "timeout", "error"]).length; r > n; n++) {
            e = s[n], t.addEventListener(e, function () {
              return i.progress = 100;
            }, !1);
          } else o = t.onreadystatechange, t.onreadystatechange = function () {
            var e;
            return 0 === (e = t.readyState) || 4 === e ? i.progress = 100 : 3 === t.readyState && (i.progress = 50), "function" == typeof o ? o.apply(null, arguments) : void 0;
          };
        };
      }(), g = function () {
        return function (t) {
          var e,
              n,
              r,
              o,
              s = this;

          for (this.progress = 0, n = 0, r = (o = ["error", "open"]).length; r > n; n++) {
            e = o[n], t.addEventListener(e, function () {
              return s.progress = 100;
            }, !1);
          }
        };
      }(), s = function () {
        return function (t) {
          var e, n, r, o;

          for (null == t && (t = {}), this.elements = [], null == t.selectors && (t.selectors = []), n = 0, r = (o = t.selectors).length; r > n; n++) {
            e = o[n], this.elements.push(new i(e));
          }
        };
      }(), i = function () {
        function t(t) {
          this.selector = t, this.progress = 0, this.check();
        }

        return t.prototype.check = function () {
          var t = this;
          return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
            return t.check();
          }, j.elements.checkInterval);
        }, t.prototype.done = function () {
          return this.progress = 100;
        }, t;
      }(), o = function () {
        function t() {
          var t,
              e,
              n = this;
          this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function () {
            return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0;
          };
        }

        return t.prototype.states = {
          loading: 0,
          interactive: 50,
          complete: 100
        }, t;
      }(), u = function () {
        return function () {
          var t,
              e,
              n,
              r,
              o,
              s = this;
          this.progress = 0, t = 0, o = [], r = 0, n = M(), e = setInterval(function () {
            var i;
            return i = M() - n - 50, n = M(), o.push(i), o.length > j.eventLag.sampleCount && o.shift(), t = v(o), ++r >= j.eventLag.minSamples && t < j.eventLag.lagThreshold ? (s.progress = 100, clearInterval(e)) : s.progress = 3 / (t + 3) * 100;
          }, 50);
        };
      }(), d = function () {
        function t(t) {
          this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = j.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = N(this.source, "progress"));
        }

        return t.prototype.tick = function (t, e) {
          var n;
          return null == e && (e = N(this.source, "progress")), e >= 100 && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / j.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), n = 1 - Math.pow(this.progress / 100, j.easeFactor), this.progress += n * this.rate * t, this.progress = Math.min(this.lastProgress + j.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
        }, t;
      }(), W = null, _ = null, w = null, X = null, y = null, b = null, p.running = !1, R = function R() {
        return j.restartOnPushState ? p.restart() : void 0;
      }, null != window.history.pushState && (J = window.history.pushState, window.history.pushState = function () {
        return R(), J.apply(window.history, arguments);
      }), null != window.history.replaceState && (Q = window.history.replaceState, window.history.replaceState = function () {
        return R(), Q.apply(window.history, arguments);
      }), f = {
        ajax: n,
        elements: s,
        document: o,
        eventLag: u
      }, (E = function E() {
        var t, e, n, o, s, i, u, a;

        for (p.sources = W = [], e = 0, o = (i = ["ajax", "elements", "document", "eventLag"]).length; o > e; e++) {
          !1 !== j[t = i[e]] && W.push(new f[t](j[t]));
        }

        for (n = 0, s = (a = null != (u = j.extraSources) ? u : []).length; s > n; n++) {
          U = a[n], W.push(new U(j));
        }

        return p.bar = w = new r(), _ = [], X = new d();
      })(), p.stop = function () {
        return p.trigger("stop"), p.running = !1, w.destroy(), b = !0, null != y && ("function" == typeof S && S(y), y = null), E();
      }, p.restart = function () {
        return p.trigger("restart"), p.stop(), p.start();
      }, p.go = function () {
        var t;
        return p.running = !0, w.render(), t = M(), b = !1, y = O(function (e, n) {
          var r, o, s, i, u, a, c, l, h, f, g, m, y, v, S;

          for (100 - w.progress, o = f = 0, s = !0, a = g = 0, y = W.length; y > g; a = ++g) {
            for (U = W[a], h = null != _[a] ? _[a] : _[a] = [], c = m = 0, v = (u = null != (S = U.elements) ? S : [U]).length; v > m; c = ++m) {
              i = u[c], s &= (l = null != h[c] ? h[c] : h[c] = new d(i)).done, l.done || (o++, f += l.tick(e));
            }
          }

          return r = f / o, w.update(X.tick(e, r)), w.done() || s || b ? (w.update(100), p.trigger("done"), setTimeout(function () {
            return w.finish(), p.running = !1, p.trigger("hide");
          }, Math.max(j.ghostTime, Math.max(j.minTime - (M() - t), 0)))) : n();
        });
      }, p.start = function (t) {
        _q(j, t), p.running = !0;

        try {
          w.render();
        } catch (r) {
          l = r;
        }

        return document.querySelector(".pace") ? (p.trigger("start"), p.go()) : setTimeout(p.start, 50);
      }, "function" == typeof t && t.amd ? t(function () {
        return p;
      }) : "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) ? module.exports = p : j.startOnPageLoad && p.start();
    }).call(this);
  }, {}],
  "geDd": [function (require, module, exports) {
    var define;
    var e;
    !function (t, n) {
      "function" == typeof e && e.amd ? e(function () {
        return n(t);
      }) : "object" == _typeof(exports) ? module.exports = n : t.emergence = n(t);
    }(this, function (e) {
      "use strict";

      var t,
          n,
          o,
          i,
          r,
          s,
          c,
          a,
          l,
          d,
          f = {},
          u = function u() {},
          m = function m() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(navigator.userAgent);
      },
          h = function h(e) {
        var t = e.offsetWidth,
            n = e.offsetHeight,
            o = 0,
            i = 0;

        do {
          isNaN(e.offsetTop) || (o += e.offsetTop), isNaN(e.offsetLeft) || (i += e.offsetLeft);
        } while (null !== (e = e.offsetParent));

        return {
          width: t,
          height: n,
          top: o,
          left: i
        };
      },
          g = function g(e) {
        if (function (e) {
          return null === e.offsetParent;
        }(e)) return !1;

        var t,
            o,
            i,
            r,
            f,
            u,
            m,
            g,
            v = h(e),
            w = function (e) {
          var t, n;
          return e !== window ? (t = e.clientWidth, n = e.clientHeight) : (t = window.innerWidth || document.documentElement.clientWidth, n = window.innerHeight || document.documentElement.clientHeight), {
            width: t,
            height: n
          };
        }(n),
            p = function (e) {
          return e !== window ? {
            x: e.scrollLeft + h(e).left,
            y: e.scrollTop + h(e).top
          } : {
            x: window.pageXOffset || document.documentElement.scrollLeft,
            y: window.pageYOffset || document.documentElement.scrollTop
          };
        }(n),
            E = v.width,
            y = v.height,
            L = v.top,
            b = v.left;

        return t = L + y * s, o = b + E - E * s, i = L + y - y * s, r = b + E * s, f = p.y + c, u = p.x - a + w.width, m = p.y - l + w.height, g = p.x + d, t < m && i > f && r < u && o > g;
      },
          v = function v() {
        t || (clearTimeout(t), t = setTimeout(function () {
          f.engage(), t = null;
        }, o));
      };

      return f.init = function (e) {
        var t,
            f,
            h = function h(e, t) {
          return parseInt(e || t, 10);
        };

        n = (e = e || {}).container || window, i = void 0 === e.reset || e.reset, r = void 0 === e.handheld || e.handheld, o = h(e.throttle, 250), t = e.elemCushion, f = .15, s = parseFloat(t || f), c = h(e.offsetTop, 0), a = h(e.offsetRight, 0), l = h(e.offsetBottom, 0), d = h(e.offsetLeft, 0), u = e.callback || u, "querySelectorAll" in document ? (m() && r || !m()) && (document.documentElement.className += " emergence", window.addEventListener ? (window.addEventListener("load", v, !1), n.addEventListener("scroll", v, !1), n.addEventListener("resize", v, !1)) : (document.attachEvent("onreadystatechange", function () {
          "complete" === document.readyState && v();
        }), n.attachEvent("onscroll", v), n.attachEvent("onresize", v))) : console.log("Emergence.js is not supported in this browser.");
      }, f.engage = function () {
        for (var e, t = document.querySelectorAll("[data-emergence]"), n = t.length, o = 0; o < n; o++) {
          e = t[o], g(e) ? (e.setAttribute("data-emergence", "visible"), e.className = e.className, u(e, "visible")) : !0 === i ? (e.setAttribute("data-emergence", "hidden"), e.className = e.className, u(e, "reset")) : !1 === i && u(e, "noreset");
        }

        n || f.disengage();
      }, f.disengage = function () {
        window.removeEventListener ? (n.removeEventListener("scroll", v, !1), n.removeEventListener("resize", v, !1)) : (n.detachEvent("onscroll", v), n.detachEvent("onresize", v)), clearTimeout(t);
      }, f;
    });
  }, {}],
  "mpVp": [function (require, module, exports) {
    var t = require("*.gif"),
        i = t.Whitemoji2,
        e = t.Blackmoji2,
        o = require("./pace");

    o.start(), document.querySelector("main").style.display = "none", o.on("done", function () {
      document.querySelector("main").style.display = "block";
    }), window.addEventListener("load", function () {
      $("[data-src=Whitemoji2]")[0].setAttribute("src", i);
    }, !1);
    var n = 2e4;
    setTimeout(function () {
      $(".arrow").css("visibility", "visible");
    }, n);

    var s = require("emergence.js"),
        r = s(),
        a = "home-group",
        c = "show-me-your-work-group",
        h = "what-you-can-do-group",
        l = "smooth-animation-group",
        u = "contact-group",
        d = {};

    document.querySelectorAll(".message-block").forEach(function (t) {
      return t.style.top = "0px";
    }), document.querySelectorAll(".group-container").forEach(function (t, i) {
      return t.style.order = i;
    });

    var p = window.devicePixelRatio,
        y = Math.PI,
        f = Math.sqrt,
        m = Math.round,
        w = Math.random,
        v = Math.cos,
        x = Math.sin,
        g = window.requestAnimationFrame,
        b = window.cancelAnimationFrame || window.cancelRequestAnimationFrame,
        C = Date.now || function () {
      return new Date().getTime();
    };

    function S() {
      var t = y / 180,
          i = [["#df0049", "#660671"], ["#00e857", "#005291"], ["#2bebbc", "#05798a"], ["#ffd200", "#b06c00"]];

      function e(t, i) {
        this.x = t, this.y = i, this.Length = function () {
          return f(this.SqrLength());
        }, this.SqrLength = function () {
          return this.x * this.x + this.y * this.y;
        }, this.Add = function (t) {
          this.x += t.x, this.y += t.y;
        }, this.Sub = function (t) {
          this.x -= t.x, this.y -= t.y;
        }, this.Div = function (t) {
          this.x /= t, this.y /= t;
        }, this.Mul = function (t) {
          this.x *= t, this.y *= t;
        }, this.Normalize = function () {
          var t = this.SqrLength();

          if (0 != t) {
            var i = 1 / f(t);
            this.x *= i, this.y *= i;
          }
        }, this.Normalized = function () {
          var t = this.SqrLength();

          if (0 != t) {
            var i = 1 / f(t);
            return new e(this.x * i, this.y * i);
          }

          return new e(0, 0);
        };
      }

      function o(t, i, o, n) {
        this.position = new e(t, i), this.mass = o, this.drag = n, this.force = new e(0, 0), this.velocity = new e(0, 0), this.AddForce = function (t) {
          this.force.Add(t);
        }, this.Integrate = function (t) {
          var i = this.CurrentForce(this.position);
          i.Div(this.mass);
          var o = new e(this.velocity.x, this.velocity.y);
          o.Mul(t), this.position.Add(o), i.Mul(t), this.velocity.Add(i), this.force = new e(0, 0);
        }, this.CurrentForce = function (t, i) {
          var o = new e(this.force.x, this.force.y),
              n = this.velocity.Length(),
              s = new e(this.velocity.x, this.velocity.y);
          return s.Mul(this.drag * this.mass * n), o.Sub(s), o;
        };
      }

      function n(o, s) {
        this.pos = new e(o, s), this.rotationSpeed = 600 * w() + 800, this.angle = t * w() * 360, this.rotation = t * w() * 360, this.cosA = 1, this.size = 5, this.oscillationSpeed = 1.5 * w() + .5, this.xSpeed = 40, this.ySpeed = 60 * w() + 50, this.corners = new Array(), this.time = w();
        var r = m(w() * (i.length - 1));
        this.frontColor = i[r][0], this.backColor = i[r][1];

        for (var a = 0; a < 4; a++) {
          var c = v(this.angle + t * (90 * a + 45)),
              h = x(this.angle + t * (90 * a + 45));
          this.corners[a] = new e(c, h);
        }

        this.Update = function (i) {
          this.time += i, this.rotation += this.rotationSpeed * i, this.cosA = v(t * this.rotation), this.pos.x += v(this.time * this.oscillationSpeed) * this.xSpeed * i, this.pos.y += this.ySpeed * i, this.pos.y > n.bounds.y && (this.pos.x = w() * n.bounds.x, this.pos.y = 0);
        }, this.Draw = function (t) {
          this.cosA > 0 ? t.fillStyle = this.frontColor : t.fillStyle = this.backColor, t.beginPath(), t.moveTo((this.pos.x + this.corners[0].x * this.size) * p, (this.pos.y + this.corners[0].y * this.size * this.cosA) * p);

          for (var i = 1; i < 4; i++) {
            t.lineTo((this.pos.x + this.corners[i].x * this.size) * p, (this.pos.y + this.corners[i].y * this.size * this.cosA) * p);
          }

          t.closePath(), t.fill();
        };
      }

      function s(n, r, a, c, h, l, u, d) {
        this.particleDist = c, this.particleCount = a, this.particleMass = u, this.particleDrag = d, this.particles = new Array();
        var y = m(w() * (i.length - 1));
        this.frontColor = i[y][0], this.backColor = i[y][1], this.xOff = v(t * l) * h, this.yOff = x(t * l) * h, this.position = new e(n, r), this.prevPosition = new e(n, r), this.velocityInherit = 2 * w() + 4, this.time = 100 * w(), this.oscillationSpeed = 2 * w() + 2, this.oscillationDistance = 40 * w() + 40, this.ySpeed = 40 * w() + 80;

        for (var g = 0; g < this.particleCount; g++) {
          this.particles[g] = new o(n, r - g * this.particleDist, this.particleMass, this.particleDrag);
        }

        this.Update = function (t) {
          var i = 0;
          this.time += t * this.oscillationSpeed, this.position.y += this.ySpeed * t, this.position.x += v(this.time) * this.oscillationDistance * t, this.particles[0].position = this.position;
          var o = this.prevPosition.x - this.position.x,
              n = this.prevPosition.y - this.position.y,
              r = f(o * o + n * n);

          for (this.prevPosition = new e(this.position.x, this.position.y), i = 1; i < this.particleCount; i++) {
            var a = e.Sub(this.particles[i - 1].position, this.particles[i].position);
            a.Normalize(), a.Mul(r / t * this.velocityInherit), this.particles[i].AddForce(a);
          }

          for (i = 1; i < this.particleCount; i++) {
            this.particles[i].Integrate(t);
          }

          for (i = 1; i < this.particleCount; i++) {
            var c = new e(this.particles[i].position.x, this.particles[i].position.y);
            c.Sub(this.particles[i - 1].position), c.Normalize(), c.Mul(this.particleDist), c.Add(this.particles[i - 1].position), this.particles[i].position = c;
          }

          this.position.y > s.bounds.y + this.particleDist * this.particleCount && this.Reset();
        }, this.Reset = function () {
          this.position.y = -w() * s.bounds.y, this.position.x = w() * s.bounds.x, this.prevPosition = new e(this.position.x, this.position.y), this.velocityInherit = 2 * w() + 4, this.time = 100 * w(), this.oscillationSpeed = 2 * w() + 1.5, this.oscillationDistance = 40 * w() + 40, this.ySpeed = 40 * w() + 80;
          var t = m(w() * (i.length - 1));
          this.frontColor = i[t][0], this.backColor = i[t][1], this.particles = new Array();

          for (var n = 0; n < this.particleCount; n++) {
            this.particles[n] = new o(this.position.x, this.position.y - n * this.particleDist, this.particleMass, this.particleDrag);
          }
        }, this.Draw = function (t) {
          for (var i = 0; i < this.particleCount - 1; i++) {
            var o = new e(this.particles[i].position.x + this.xOff, this.particles[i].position.y + this.yOff),
                n = new e(this.particles[i + 1].position.x + this.xOff, this.particles[i + 1].position.y + this.yOff);
            this.Side(this.particles[i].position.x, this.particles[i].position.y, this.particles[i + 1].position.x, this.particles[i + 1].position.y, n.x, n.y) < 0 ? (t.fillStyle = this.frontColor, t.strokeStyle = this.frontColor) : (t.fillStyle = this.backColor, t.strokeStyle = this.backColor), 0 == i ? (t.beginPath(), t.moveTo(this.particles[i].position.x * p, this.particles[i].position.y * p), t.lineTo(this.particles[i + 1].position.x * p, this.particles[i + 1].position.y * p), t.lineTo(.5 * (this.particles[i + 1].position.x + n.x) * p, .5 * (this.particles[i + 1].position.y + n.y) * p), t.closePath(), t.stroke(), t.fill(), t.beginPath(), t.moveTo(n.x * p, n.y * p), t.lineTo(o.x * p, o.y * p), t.lineTo(.5 * (this.particles[i + 1].position.x + n.x) * p, .5 * (this.particles[i + 1].position.y + n.y) * p), t.closePath(), t.stroke(), t.fill()) : i == this.particleCount - 2 ? (t.beginPath(), t.moveTo(this.particles[i].position.x * p, this.particles[i].position.y * p), t.lineTo(this.particles[i + 1].position.x * p, this.particles[i + 1].position.y * p), t.lineTo(.5 * (this.particles[i].position.x + o.x) * p, .5 * (this.particles[i].position.y + o.y) * p), t.closePath(), t.stroke(), t.fill(), t.beginPath(), t.moveTo(n.x * p, n.y * p), t.lineTo(o.x * p, o.y * p), t.lineTo(.5 * (this.particles[i].position.x + o.x) * p, .5 * (this.particles[i].position.y + o.y) * p), t.closePath(), t.stroke(), t.fill()) : (t.beginPath(), t.moveTo(this.particles[i].position.x * p, this.particles[i].position.y * p), t.lineTo(this.particles[i + 1].position.x * p, this.particles[i + 1].position.y * p), t.lineTo(n.x * p, n.y * p), t.lineTo(o.x * p, o.y * p), t.closePath(), t.stroke(), t.fill());
          }
        }, this.Side = function (t, i, e, o, n, s) {
          return (t - e) * (s - o) - (i - o) * (n - e);
        };
      }

      e.Lerp = function (t, i, o) {
        return new e((i.x - t.x) * o + t.x, (i.y - t.y) * o + t.y);
      }, e.Distance = function (t, i) {
        return f(e.SqrDistance(t, i));
      }, e.SqrDistance = function (t, i) {
        var e = t.x - i.x,
            o = t.y - i.y;
        return e * e + o * o + z * z;
      }, e.Scale = function (t, i) {
        return new e(t.x * i.x, t.y * i.y);
      }, e.Min = function (t, i) {
        return new e(Math.min(t.x, i.x), Math.min(t.y, i.y));
      }, e.Max = function (t, i) {
        return new e(Math.max(t.x, i.x), Math.max(t.y, i.y));
      }, e.ClampMagnitude = function (t, i) {
        var o = t.Normalized;
        return new e(o.x * i, o.y * i);
      }, e.Sub = function (t, i) {
        return new e(t.x - i.x, t.y - i.y, t.z - i.z);
      }, n.bounds = new e(0, 0), s.bounds = new e(0, 0), (r = {}).Context = function (t) {
        var i = 0,
            o = document.getElementById(t),
            a = o.parentNode,
            c = a.offsetWidth,
            h = a.offsetHeight;
        o.width = c * p, o.height = h * p;
        var l = o.getContext("2d"),
            u = new Array();

        for (s.bounds = new e(c, h), i = 0; i < 11; i++) {
          u[i] = new s(w() * c, -w() * h * 2, 30, 8, 8, 45, 1, .05);
        }

        var d = new Array();

        for (n.bounds = new e(c, h), i = 0; i < 95; i++) {
          d[i] = new n(w() * c, w() * h);
        }

        this.resize = function () {
          c = a.offsetWidth, h = a.offsetHeight, o.width = c * p, o.height = h * p, n.bounds = new e(c, h), s.bounds = new e(c, h);
        }, this.start = function () {
          this.stop();
          this.update();
        }, this.stop = function () {
          b(this.interval);
        }, this.update = function () {
          var t = 0;

          for (l.clearRect(0, 0, o.width, o.height), t = 0; t < 95; t++) {
            d[t].Update(.02), d[t].Draw(l);
          }

          for (t = 0; t < 11; t++) {
            u[t].Update(.02), u[t].Draw(l);
          }

          this.interval = g(function () {
            r.update();
          });
        };
      };
      var r = new r.Context("confetti");
      r.start(), window.addEventListener("resize", function (t) {
        r.resize();
      });
      var a = document.getElementById("confetti");
      a.width = window.innerWidth, a.height = window.innerHeight;
    }

    function k(t, i) {
      document.getElementById(t).style.order = i, document.getElementById(t).classList.remove("hidden");
    }

    function A(t, i, e) {
      if (!d["".concat(i).concat(e)]) {
        var o = document.createElement("a"),
            n = document.createTextNode(t);
        return o.appendChild(n), o.setAttribute("href", i), o.classList.add("btn"), document.querySelector("#".concat(e, " .button-group")).appendChild(o), d["".concat(i).concat(e)] = !0, o;
      }

      return null;
    }

    function L(t) {
      t.remove();
    }

    function M(t, i) {
      var e = document.querySelector(t);

      if (e && !e.classList.contains("gallery-active")) {
        var o = "right" == i ? i : "left";
        e.classList.add("gallery-active"), e.style.position = "relative";
        var n = e.childElementCount,
            s = e.clientWidth,
            r = n * (s / n) / 1.5;
        e.style[o] = -r + "px";
        var a = 0;
        e.addEventListener("click", function () {
          var t = parseInt(e.style[o].replace("px", ""));
          ++a >= n ? (e.style[o] = -r + "px", a = 0) : e.style[o] = a == n - 1 ? "0px" : t + s / n + "px";
        });
      }
    }

    !function (t) {
      var i = C();
      var e = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.clearTimeout;
      g = t.requestAnimationFrame || t.webkitRequestAnimationFrame || function (t) {
        var e = C(),
            o = Math.max(0, 16 - (e - i)),
            n = setTimeout(t, o);
        return i = e, n;
      }, b = function b(i) {
        e.call(t, i);
      };
    }(window), document.querySelector("#".concat(a, " .show-me-your-work-btn")).addEventListener("click", function () {
      k(c, 1), document.querySelector("#".concat(a, " .what-you-can-do-btn")).remove(), document.querySelector("#".concat(a, " .show-me-your-work-btn")).remove(), M(".gallery-block-show-me-your-work");
      var t = A("Give me more", "#smooth-animation-group", c),
          i = A("What can you do?", "#what-you-can-do-group", c);
      i && i.addEventListener("click", function () {
        L(t), L(i), k(h, 2);
        var e = A("How can I contact you?", "#contact-group", h);
        e && e.addEventListener("click", function () {
          L(e), k(u, 3), $("#confetti").addClass("opa"), S();
        });
      }), t && t.addEventListener("click", function () {
        L(i), L(t), k(l, 2), M(".gallery-block-smooth-animation");
        var e = A("What you can do?", "#what-you-can-do-group", l);
        e && e.addEventListener("click", function () {
          L(e), k(h, 3);
          var t = A("How can I contact you?", "#contact-group", h);
          t && t.addEventListener("click", function () {
            L(t), k(u, 4), $("#confetti").addClass("opa"), S();
          });
        });
      });
    }), document.querySelector("#".concat(a, " .what-you-can-do-btn")).addEventListener("click", function () {
      k(h, 1), document.querySelector("#".concat(a, " .show-me-your-work-btn")).remove(), document.querySelector("#".concat(a, " .what-you-can-do-btn")).remove();
      var t = A("Show your workkk", "#show-me-your-work-group", h);
      t.addEventListener("click", function () {
        L(t), k(c, 2), M(".gallery-block-show-me-your-work");
        var i = A("Give me more", "#smooth-animation-group", c),
            e = A("How can I contact you?", "#contact-group", c);
        i.addEventListener("click", function () {
          L(e), L(i), k(l, 3), M(".gallery-block-smooth-animation");
          var t = A("How can I contact you?", "#contact-group", l);
          t.addEventListener("click", function () {
            L(t), k(u, 4), $("#confetti").addClass("opa"), S();
          });
        }), e.addEventListener("click", function () {
          L(e), L(i), k(u, 3), $("#confetti").addClass("opa"), S();
        });
      });
    }), M(".gallery-block-home-group"), r.init({
      container: window,
      reset: !1,
      handheld: !0,
      throttle: 25,
      elemCushion: .15,
      offsetTop: 0,
      offsetRight: 0,
      offsetBottom: 0,
      offsetLeft: 0,
      callback: function callback(t, i) {
        document.querySelectorAll(".message-block[data-emergence=visible]").forEach(function (t) {
          var i = t.getBoundingClientRect().top,
              e = window.outerHeight;

          if (i >= 0 && i <= e) {
            var o = i / e * 100;
            o >= 0 && o <= 8 ? t.style.top = i / e * 100 - 120 + "px" : o > 8 && o <= 25 ? t.style.top = i / e * 100 - 100 + "px" : o > 25 && o <= 50 ? t.style.top = i / e * 100 - 85 + "px" : o > 50 && o <= 75 ? t.style.top = i / e * 70 - 60 + "px" : o > 75 && o <= 100 && (t.style.top = i / e * 50 - 40 + "px");
          }
        });
      }
    }), setTimeout(function () {
      window.scrollTo(0, 0);
    }, 200), window.addEventListener("load", function () {
      $("body").scrollTop($("#day").offset().top);
    }), $(document).ready(function () {
      $(".profile").addClass("animate"), $(".page").addClass("move"), $(".header").addClass("opac");
    }), $(window).scroll(function () {
      $(this).scrollTop() > 50 ? ($(".profile.animate").addClass("smaller"), $(".frame").addClass("animatef"), $(".warp").addClass("hidden"), $(".arrow").addClass("nothing")) : ($(".profile.animate").removeClass("smaller"), $(".frame").removeClass("animatef"), $(".warp").addClass("hidden"), $(".arrow").addClass("nothing"));
    }), window.onload = function () {
      !function () {
        var t = new Date(),
            i = t.getHours(),
            e = t.getHours(),
            o = t.getMinutes(),
            n = (t.getSeconds(), "PM");
        o < 10 && (o = "0" + o);
        e > 12 && (e -= 12);
        0 == e && (e = 12);
        i < 12 && (n = "AM");
        document.getElementById("currentTime").innerHTML = e + ":" + o + " " + n;
      }();
    };
    var T = document.querySelector('.theme-switch input[type="checkbox"]');

    function E(t) {
      t.target.checked ? (document.documentElement.setAttribute("data-theme", "dark"), $(".profile").attr("src", src = "".concat(e))) : (document.documentElement.setAttribute("data-theme", "light"), $(".profile").attr("src", src = "".concat(i)));
    }

    T.addEventListener("change", E, !1);
    var q = new URL(document.URL),
        D = q.searchParams.get("") || "you";
    document.getElementById("companyName").textContent = "Hi ".concat(D, " ✌"), function (t, i) {
      t.fn.inViewport = function (e) {
        return this.each(function (o, n) {
          function s() {
            var o = t(n).outerHeight(),
                s = t(i).height(),
                r = n.getBoundingClientRect(),
                a = r.top,
                c = r.bottom;
            return e.call(n, Math.max(0, a > 0 ? Math.min(o, s - a) : Math.min(c, s)));
          }

          s(), t(i).on("resize scroll", s);
        });
      };
    }(jQuery, window), $(".bigger").inViewport(function (t) {
      t && $(this).addClass("triggeredCSS3");
    }), $(".box").inViewport(function (t) {
      t && $(this).addClass("load");
    });
  }, {
    "*.gif": "fQwx",
    "./pace": "MA0p",
    "emergence.js": "geDd"
  }]
}, {}, ["mpVp"], null);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54200" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.8fc3f33f.js"], null)
//# sourceMappingURL=/script.8fc3f33f.9ca863c9.js.map