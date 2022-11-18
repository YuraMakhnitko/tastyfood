(() => {
  var e = {
      1807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
      1296: (e, t, n) => {
        var r = /^\s+|\s+$/g,
          i = /^[-+]0x[0-9a-f]+$/i,
          s = /^0b[01]+$/i,
          o = /^0o[0-7]+$/i,
          a = parseInt,
          l = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          c = "object" == typeof self && self && self.Object === Object && self,
          u = l || c || Function("return this")(),
          d = Object.prototype.toString,
          p = Math.max,
          f = Math.min,
          h = function () {
            return u.Date.now();
          };
        function v(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function m(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == d.call(e))
              );
            })(e)
          )
            return NaN;
          if (v(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = v(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(r, "");
          var n = s.test(e);
          return n || o.test(e)
            ? a(e.slice(2), n ? 2 : 8)
            : i.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, n) {
          var r,
            i,
            s,
            o,
            a,
            l,
            c = 0,
            u = !1,
            d = !1,
            g = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function b(t) {
            var n = r,
              s = i;
            return (r = i = void 0), (c = t), (o = e.apply(s, n));
          }
          function y(e) {
            return (c = e), (a = setTimeout(w, t)), u ? b(e) : o;
          }
          function x(e) {
            var n = e - l;
            return void 0 === l || n >= t || n < 0 || (d && e - c >= s);
          }
          function w() {
            var e = h();
            if (x(e)) return E(e);
            a = setTimeout(
              w,
              (function (e) {
                var n = t - (e - l);
                return d ? f(n, s - (e - c)) : n;
              })(e)
            );
          }
          function E(e) {
            return (a = void 0), g && r ? b(e) : ((r = i = void 0), o);
          }
          function S() {
            var e = h(),
              n = x(e);
            if (((r = arguments), (i = this), (l = e), n)) {
              if (void 0 === a) return y(l);
              if (d) return (a = setTimeout(w, t)), b(l);
            }
            return void 0 === a && (a = setTimeout(w, t)), o;
          }
          return (
            (t = m(t) || 0),
            v(n) &&
              ((u = !!n.leading),
              (s = (d = "maxWait" in n) ? p(m(n.maxWait) || 0, t) : s),
              (g = "trailing" in n ? !!n.trailing : g)),
            (S.cancel = function () {
              void 0 !== a && clearTimeout(a),
                (c = 0),
                (r = l = i = a = void 0);
            }),
            (S.flush = function () {
              return void 0 === a ? o : E(h());
            }),
            S
          );
        };
      },
      773: (e, t, n) => {
        var r = "__lodash_hash_undefined__",
          i = "[object Function]",
          s = "[object GeneratorFunction]",
          o = /^\[object .+?Constructor\]$/,
          a = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          l = "object" == typeof self && self && self.Object === Object && self,
          c = a || l || Function("return this")();
        var u,
          d = Array.prototype,
          p = Function.prototype,
          f = Object.prototype,
          h = c["__core-js_shared__"],
          v = (u = /[^.]+$/.exec((h && h.keys && h.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + u
            : "",
          m = p.toString,
          g = f.hasOwnProperty,
          b = f.toString,
          y = RegExp(
            "^" +
              m
                .call(g)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          x = d.splice,
          w = A(c, "Map"),
          E = A(Object, "create");
        function S(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function T(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function C(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function O(e, t) {
          for (var n, r, i = e.length; i--; )
            if ((n = e[i][0]) === (r = t) || (n != n && r != r)) return i;
          return -1;
        }
        function k(e) {
          if (!P(e) || ((t = e), v && v in t)) return !1;
          var t,
            n =
              (function (e) {
                var t = P(e) ? b.call(e) : "";
                return t == i || t == s;
              })(e) ||
              (function (e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString)
                  try {
                    t = !!(e + "");
                  } catch (e) {}
                return t;
              })(e)
                ? y
                : o;
          return n.test(
            (function (e) {
              if (null != e) {
                try {
                  return m.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            })(e)
          );
        }
        function L(e, t) {
          var n,
            r,
            i = e.__data__;
          return (
            "string" == (r = typeof (n = t)) ||
            "number" == r ||
            "symbol" == r ||
            "boolean" == r
              ? "__proto__" !== n
              : null === n
          )
            ? i["string" == typeof t ? "string" : "hash"]
            : i.map;
        }
        function A(e, t) {
          var n = (function (e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return k(n) ? n : void 0;
        }
        function M(e, t) {
          if ("function" != typeof e || (t && "function" != typeof t))
            throw new TypeError("Expected a function");
          var n = function () {
            var r = arguments,
              i = t ? t.apply(this, r) : r[0],
              s = n.cache;
            if (s.has(i)) return s.get(i);
            var o = e.apply(this, r);
            return (n.cache = s.set(i, o)), o;
          };
          return (n.cache = new (M.Cache || C)()), n;
        }
        function P(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        (S.prototype.clear = function () {
          this.__data__ = E ? E(null) : {};
        }),
          (S.prototype.delete = function (e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (S.prototype.get = function (e) {
            var t = this.__data__;
            if (E) {
              var n = t[e];
              return n === r ? void 0 : n;
            }
            return g.call(t, e) ? t[e] : void 0;
          }),
          (S.prototype.has = function (e) {
            var t = this.__data__;
            return E ? void 0 !== t[e] : g.call(t, e);
          }),
          (S.prototype.set = function (e, t) {
            return (this.__data__[e] = E && void 0 === t ? r : t), this;
          }),
          (T.prototype.clear = function () {
            this.__data__ = [];
          }),
          (T.prototype.delete = function (e) {
            var t = this.__data__,
              n = O(t, e);
            return (
              !(n < 0) && (n == t.length - 1 ? t.pop() : x.call(t, n, 1), !0)
            );
          }),
          (T.prototype.get = function (e) {
            var t = this.__data__,
              n = O(t, e);
            return n < 0 ? void 0 : t[n][1];
          }),
          (T.prototype.has = function (e) {
            return O(this.__data__, e) > -1;
          }),
          (T.prototype.set = function (e, t) {
            var n = this.__data__,
              r = O(n, e);
            return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
          }),
          (C.prototype.clear = function () {
            this.__data__ = {
              hash: new S(),
              map: new (w || T)(),
              string: new S(),
            };
          }),
          (C.prototype.delete = function (e) {
            return L(this, e).delete(e);
          }),
          (C.prototype.get = function (e) {
            return L(this, e).get(e);
          }),
          (C.prototype.has = function (e) {
            return L(this, e).has(e);
          }),
          (C.prototype.set = function (e, t) {
            return L(this, e).set(e, t), this;
          }),
          (M.Cache = C),
          (e.exports = M);
      },
      3096: (e, t, n) => {
        var r = "Expected a function",
          i = /^\s+|\s+$/g,
          s = /^[-+]0x[0-9a-f]+$/i,
          o = /^0b[01]+$/i,
          a = /^0o[0-7]+$/i,
          l = parseInt,
          c = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          u = "object" == typeof self && self && self.Object === Object && self,
          d = c || u || Function("return this")(),
          p = Object.prototype.toString,
          f = Math.max,
          h = Math.min,
          v = function () {
            return d.Date.now();
          };
        function m(e, t, n) {
          var i,
            s,
            o,
            a,
            l,
            c,
            u = 0,
            d = !1,
            p = !1,
            m = !0;
          if ("function" != typeof e) throw new TypeError(r);
          function y(t) {
            var n = i,
              r = s;
            return (i = s = void 0), (u = t), (a = e.apply(r, n));
          }
          function x(e) {
            return (u = e), (l = setTimeout(E, t)), d ? y(e) : a;
          }
          function w(e) {
            var n = e - c;
            return void 0 === c || n >= t || n < 0 || (p && e - u >= o);
          }
          function E() {
            var e = v();
            if (w(e)) return S(e);
            l = setTimeout(
              E,
              (function (e) {
                var n = t - (e - c);
                return p ? h(n, o - (e - u)) : n;
              })(e)
            );
          }
          function S(e) {
            return (l = void 0), m && i ? y(e) : ((i = s = void 0), a);
          }
          function T() {
            var e = v(),
              n = w(e);
            if (((i = arguments), (s = this), (c = e), n)) {
              if (void 0 === l) return x(c);
              if (p) return (l = setTimeout(E, t)), y(c);
            }
            return void 0 === l && (l = setTimeout(E, t)), a;
          }
          return (
            (t = b(t) || 0),
            g(n) &&
              ((d = !!n.leading),
              (o = (p = "maxWait" in n) ? f(b(n.maxWait) || 0, t) : o),
              (m = "trailing" in n ? !!n.trailing : m)),
            (T.cancel = function () {
              void 0 !== l && clearTimeout(l),
                (u = 0),
                (i = c = s = l = void 0);
            }),
            (T.flush = function () {
              return void 0 === l ? a : S(v());
            }),
            T
          );
        }
        function g(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function b(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == p.call(e))
              );
            })(e)
          )
            return NaN;
          if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(i, "");
          var n = o.test(e);
          return n || a.test(e)
            ? l(e.slice(2), n ? 2 : 8)
            : s.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, n) {
          var i = !0,
            s = !0;
          if ("function" != typeof e) throw new TypeError(r);
          return (
            g(n) &&
              ((i = "leading" in n ? !!n.leading : i),
              (s = "trailing" in n ? !!n.trailing : s)),
            m(e, t, { leading: i, maxWait: t, trailing: s })
          );
        };
      },
      5055: (e, t, n) => {
        var r = n(6282),
          i = n(180),
          s = TypeError;
        e.exports = function (e) {
          if (r(e)) return e;
          throw s(i(e) + " is not a function");
        };
      },
      2004: (e, t, n) => {
        var r = n(6282),
          i = String,
          s = TypeError;
        e.exports = function (e) {
          if ("object" == typeof e || r(e)) return e;
          throw s("Can't set " + i(e) + " as a prototype");
        };
      },
      9256: (e, t, n) => {
        var r = n(8149),
          i = n(1525),
          s = n(9168).f,
          o = r("unscopables"),
          a = Array.prototype;
        null == a[o] && s(a, o, { configurable: !0, value: i(null) }),
          (e.exports = function (e) {
            a[o][e] = !0;
          });
      },
      3615: (e, t, n) => {
        "use strict";
        var r = n(7321).charAt;
        e.exports = function (e, t, n) {
          return t + (n ? r(e, t).length : 1);
        };
      },
      3046: (e, t, n) => {
        var r = n(1786),
          i = TypeError;
        e.exports = function (e, t) {
          if (r(t, e)) return e;
          throw i("Incorrect invocation");
        };
      },
      1474: (e, t, n) => {
        var r = n(5896),
          i = String,
          s = TypeError;
        e.exports = function (e) {
          if (r(e)) return e;
          throw s(i(e) + " is not an object");
        };
      },
      8774: (e, t, n) => {
        var r = n(6183);
        e.exports = r(function () {
          if ("function" == typeof ArrayBuffer) {
            var e = new ArrayBuffer(8);
            Object.isExtensible(e) &&
              Object.defineProperty(e, "a", { value: 8 });
          }
        });
      },
      1269: (e, t, n) => {
        "use strict";
        var r = n(528).forEach,
          i = n(1923)("forEach");
        e.exports = i
          ? [].forEach
          : function (e) {
              return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
            };
      },
      5675: (e, t, n) => {
        var r = n(3206),
          i = n(9623),
          s = n(1829),
          o = function (e) {
            return function (t, n, o) {
              var a,
                l = r(t),
                c = s(l),
                u = i(o, c);
              if (e && n != n) {
                for (; c > u; ) if ((a = l[u++]) != a) return !0;
              } else
                for (; c > u; u++)
                  if ((e || u in l) && l[u] === n) return e || u || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: o(!0), indexOf: o(!1) };
      },
      528: (e, t, n) => {
        var r = n(1098),
          i = n(1768),
          s = n(7530),
          o = n(9473),
          a = n(1829),
          l = n(2768),
          c = i([].push),
          u = function (e) {
            var t = 1 == e,
              n = 2 == e,
              i = 3 == e,
              u = 4 == e,
              d = 6 == e,
              p = 7 == e,
              f = 5 == e || d;
            return function (h, v, m, g) {
              for (
                var b,
                  y,
                  x = o(h),
                  w = s(x),
                  E = r(v, m),
                  S = a(w),
                  T = 0,
                  C = g || l,
                  O = t ? C(h, S) : n || p ? C(h, 0) : void 0;
                S > T;
                T++
              )
                if ((f || T in w) && ((y = E((b = w[T]), T, x)), e))
                  if (t) O[T] = y;
                  else if (y)
                    switch (e) {
                      case 3:
                        return !0;
                      case 5:
                        return b;
                      case 6:
                        return T;
                      case 2:
                        c(O, b);
                    }
                  else
                    switch (e) {
                      case 4:
                        return !1;
                      case 7:
                        c(O, b);
                    }
              return d ? -1 : i || u ? u : O;
            };
          };
        e.exports = {
          forEach: u(0),
          map: u(1),
          filter: u(2),
          some: u(3),
          every: u(4),
          find: u(5),
          findIndex: u(6),
          filterReject: u(7),
        };
      },
      4820: (e, t, n) => {
        var r = n(6183),
          i = n(8149),
          s = n(4324),
          o = i("species");
        e.exports = function (e) {
          return (
            s >= 51 ||
            !r(function () {
              var t = [];
              return (
                ((t.constructor = {})[o] = function () {
                  return { foo: 1 };
                }),
                1 !== t[e](Boolean).foo
              );
            })
          );
        };
      },
      1923: (e, t, n) => {
        "use strict";
        var r = n(6183);
        e.exports = function (e, t) {
          var n = [][e];
          return (
            !!n &&
            r(function () {
              n.call(
                null,
                t ||
                  function () {
                    return 1;
                  },
                1
              );
            })
          );
        };
      },
      6589: (e, t, n) => {
        var r = n(5055),
          i = n(9473),
          s = n(7530),
          o = n(1829),
          a = TypeError,
          l = function (e) {
            return function (t, n, l, c) {
              r(n);
              var u = i(t),
                d = s(u),
                p = o(u),
                f = e ? p - 1 : 0,
                h = e ? -1 : 1;
              if (l < 2)
                for (;;) {
                  if (f in d) {
                    (c = d[f]), (f += h);
                    break;
                  }
                  if (((f += h), e ? f < 0 : p <= f))
                    throw a("Reduce of empty array with no initial value");
                }
              for (; e ? f >= 0 : p > f; f += h)
                f in d && (c = n(c, d[f], f, u));
              return c;
            };
          };
        e.exports = { left: l(!1), right: l(!0) };
      },
      4072: (e, t, n) => {
        var r = n(9623),
          i = n(1829),
          s = n(2759),
          o = Array,
          a = Math.max;
        e.exports = function (e, t, n) {
          for (
            var l = i(e),
              c = r(t, l),
              u = r(void 0 === n ? l : n, l),
              d = o(a(u - c, 0)),
              p = 0;
            c < u;
            c++, p++
          )
            s(d, p, e[c]);
          return (d.length = p), d;
        };
      },
      9882: (e, t, n) => {
        var r = n(7931),
          i = n(2240),
          s = n(5896),
          o = n(8149)("species"),
          a = Array;
        e.exports = function (e) {
          var t;
          return (
            r(e) &&
              ((t = e.constructor),
              ((i(t) && (t === a || r(t.prototype))) ||
                (s(t) && null === (t = t[o]))) &&
                (t = void 0)),
            void 0 === t ? a : t
          );
        };
      },
      2768: (e, t, n) => {
        var r = n(9882);
        e.exports = function (e, t) {
          return new (r(e))(0 === t ? 0 : t);
        };
      },
      1751: (e, t, n) => {
        var r = n(8149)("iterator"),
          i = !1;
        try {
          var s = 0,
            o = {
              next: function () {
                return { done: !!s++ };
              },
              return: function () {
                i = !0;
              },
            };
          (o[r] = function () {
            return this;
          }),
            Array.from(o, function () {
              throw 2;
            });
        } catch (e) {}
        e.exports = function (e, t) {
          if (!t && !i) return !1;
          var n = !1;
          try {
            var s = {};
            (s[r] = function () {
              return {
                next: function () {
                  return { done: (n = !0) };
                },
              };
            }),
              e(s);
          } catch (e) {}
          return n;
        };
      },
      1510: (e, t, n) => {
        var r = n(1768),
          i = r({}.toString),
          s = r("".slice);
        e.exports = function (e) {
          return s(i(e), 8, -1);
        };
      },
      9225: (e, t, n) => {
        var r = n(4823),
          i = n(6282),
          s = n(1510),
          o = n(8149)("toStringTag"),
          a = Object,
          l =
            "Arguments" ==
            s(
              (function () {
                return arguments;
              })()
            );
        e.exports = r
          ? s
          : function (e) {
              var t, n, r;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (n = (function (e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = a(e)), o))
                ? n
                : l
                ? s(t)
                : "Object" == (r = s(t)) && i(t.callee)
                ? "Arguments"
                : r;
            };
      },
      7790: (e, t, n) => {
        "use strict";
        var r = n(1768),
          i = n(6367),
          s = n(6582).getWeakData,
          o = n(3046),
          a = n(1474),
          l = n(2420),
          c = n(5896),
          u = n(1518),
          d = n(528),
          p = n(8281),
          f = n(1030),
          h = f.set,
          v = f.getterFor,
          m = d.find,
          g = d.findIndex,
          b = r([].splice),
          y = 0,
          x = function (e) {
            return e.frozen || (e.frozen = new w());
          },
          w = function () {
            this.entries = [];
          },
          E = function (e, t) {
            return m(e.entries, function (e) {
              return e[0] === t;
            });
          };
        (w.prototype = {
          get: function (e) {
            var t = E(this, e);
            if (t) return t[1];
          },
          has: function (e) {
            return !!E(this, e);
          },
          set: function (e, t) {
            var n = E(this, e);
            n ? (n[1] = t) : this.entries.push([e, t]);
          },
          delete: function (e) {
            var t = g(this.entries, function (t) {
              return t[0] === e;
            });
            return ~t && b(this.entries, t, 1), !!~t;
          },
        }),
          (e.exports = {
            getConstructor: function (e, t, n, r) {
              var d = e(function (e, i) {
                  o(e, f),
                    h(e, { type: t, id: y++, frozen: void 0 }),
                    l(i) || u(i, e[r], { that: e, AS_ENTRIES: n });
                }),
                f = d.prototype,
                m = v(t),
                g = function (e, t, n) {
                  var r = m(e),
                    i = s(a(t), !0);
                  return !0 === i ? x(r).set(t, n) : (i[r.id] = n), e;
                };
              return (
                i(f, {
                  delete: function (e) {
                    var t = m(this);
                    if (!c(e)) return !1;
                    var n = s(e);
                    return !0 === n
                      ? x(t).delete(e)
                      : n && p(n, t.id) && delete n[t.id];
                  },
                  has: function (e) {
                    var t = m(this);
                    if (!c(e)) return !1;
                    var n = s(e);
                    return !0 === n ? x(t).has(e) : n && p(n, t.id);
                  },
                }),
                i(
                  f,
                  n
                    ? {
                        get: function (e) {
                          var t = m(this);
                          if (c(e)) {
                            var n = s(e);
                            return !0 === n
                              ? x(t).get(e)
                              : n
                              ? n[t.id]
                              : void 0;
                          }
                        },
                        set: function (e, t) {
                          return g(this, e, t);
                        },
                      }
                    : {
                        add: function (e) {
                          return g(this, e, !0);
                        },
                      }
                ),
                d
              );
            },
          });
      },
      6645: (e, t, n) => {
        "use strict";
        var r = n(4761),
          i = n(8454),
          s = n(1768),
          o = n(1949),
          a = n(2054),
          l = n(6582),
          c = n(1518),
          u = n(3046),
          d = n(6282),
          p = n(2420),
          f = n(5896),
          h = n(6183),
          v = n(1751),
          m = n(820),
          g = n(7770);
        e.exports = function (e, t, n) {
          var b = -1 !== e.indexOf("Map"),
            y = -1 !== e.indexOf("Weak"),
            x = b ? "set" : "add",
            w = i[e],
            E = w && w.prototype,
            S = w,
            T = {},
            C = function (e) {
              var t = s(E[e]);
              a(
                E,
                e,
                "add" == e
                  ? function (e) {
                      return t(this, 0 === e ? 0 : e), this;
                    }
                  : "delete" == e
                  ? function (e) {
                      return !(y && !f(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : "get" == e
                  ? function (e) {
                      return y && !f(e) ? void 0 : t(this, 0 === e ? 0 : e);
                    }
                  : "has" == e
                  ? function (e) {
                      return !(y && !f(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : function (e, n) {
                      return t(this, 0 === e ? 0 : e, n), this;
                    }
              );
            };
          if (
            o(
              e,
              !d(w) ||
                !(
                  y ||
                  (E.forEach &&
                    !h(function () {
                      new w().entries().next();
                    }))
                )
            )
          )
            (S = n.getConstructor(t, e, b, x)), l.enable();
          else if (o(e, !0)) {
            var O = new S(),
              k = O[x](y ? {} : -0, 1) != O,
              L = h(function () {
                O.has(1);
              }),
              A = v(function (e) {
                new w(e);
              }),
              M =
                !y &&
                h(function () {
                  for (var e = new w(), t = 5; t--; ) e[x](t, t);
                  return !e.has(-0);
                });
            A ||
              (((S = t(function (e, t) {
                u(e, E);
                var n = g(new w(), e, S);
                return p(t) || c(t, n[x], { that: n, AS_ENTRIES: b }), n;
              })).prototype = E),
              (E.constructor = S)),
              (L || M) && (C("delete"), C("has"), b && C("get")),
              (M || k) && C(x),
              y && E.clear && delete E.clear;
          }
          return (
            (T[e] = S),
            r({ global: !0, constructor: !0, forced: S != w }, T),
            m(S, e),
            y || n.setStrong(S, e, b),
            S
          );
        };
      },
      882: (e, t, n) => {
        var r = n(8281),
          i = n(1441),
          s = n(5663),
          o = n(9168);
        e.exports = function (e, t, n) {
          for (var a = i(t), l = o.f, c = s.f, u = 0; u < a.length; u++) {
            var d = a[u];
            r(e, d) || (n && r(n, d)) || l(e, d, c(t, d));
          }
        };
      },
      7401: (e, t, n) => {
        var r = n(6183);
        e.exports = !r(function () {
          function e() {}
          return (
            (e.prototype.constructor = null),
            Object.getPrototypeOf(new e()) !== e.prototype
          );
        });
      },
      5351: (e) => {
        e.exports = function (e, t) {
          return { value: e, done: t };
        };
      },
      1501: (e, t, n) => {
        var r = n(723),
          i = n(9168),
          s = n(9273);
        e.exports = r
          ? function (e, t, n) {
              return i.f(e, t, s(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      9273: (e) => {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      2759: (e, t, n) => {
        "use strict";
        var r = n(2988),
          i = n(9168),
          s = n(9273);
        e.exports = function (e, t, n) {
          var o = r(t);
          o in e ? i.f(e, o, s(0, n)) : (e[o] = n);
        };
      },
      2054: (e, t, n) => {
        var r = n(6282),
          i = n(9168),
          s = n(5903),
          o = n(7194);
        e.exports = function (e, t, n, a) {
          a || (a = {});
          var l = a.enumerable,
            c = void 0 !== a.name ? a.name : t;
          if ((r(n) && s(n, c, a), a.global)) l ? (e[t] = n) : o(t, n);
          else {
            try {
              a.unsafe ? e[t] && (l = !0) : delete e[t];
            } catch (e) {}
            l
              ? (e[t] = n)
              : i.f(e, t, {
                  value: n,
                  enumerable: !1,
                  configurable: !a.nonConfigurable,
                  writable: !a.nonWritable,
                });
          }
          return e;
        };
      },
      6367: (e, t, n) => {
        var r = n(2054);
        e.exports = function (e, t, n) {
          for (var i in t) r(e, i, t[i], n);
          return e;
        };
      },
      7194: (e, t, n) => {
        var r = n(8454),
          i = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            i(r, e, { value: t, configurable: !0, writable: !0 });
          } catch (n) {
            r[e] = t;
          }
          return t;
        };
      },
      723: (e, t, n) => {
        var r = n(6183);
        e.exports = !r(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      7282: (e, t, n) => {
        var r = n(8454),
          i = n(5896),
          s = r.document,
          o = i(s) && i(s.createElement);
        e.exports = function (e) {
          return o ? s.createElement(e) : {};
        };
      },
      6181: (e) => {
        e.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };
      },
      2387: (e, t, n) => {
        var r = n(7282)("span").classList,
          i = r && r.constructor && r.constructor.prototype;
        e.exports = i === Object.prototype ? void 0 : i;
      },
      7594: (e, t, n) => {
        var r = n(1510),
          i = n(8454);
        e.exports = "process" == r(i.process);
      },
      2543: (e, t, n) => {
        var r = n(4991);
        e.exports = r("navigator", "userAgent") || "";
      },
      4324: (e, t, n) => {
        var r,
          i,
          s = n(8454),
          o = n(2543),
          a = s.process,
          l = s.Deno,
          c = (a && a.versions) || (l && l.version),
          u = c && c.v8;
        u && (i = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
          !i &&
            o &&
            (!(r = o.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
            (r = o.match(/Chrome\/(\d+)/)) &&
            (i = +r[1]),
          (e.exports = i);
      },
      8409: (e) => {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      4761: (e, t, n) => {
        var r = n(8454),
          i = n(5663).f,
          s = n(1501),
          o = n(2054),
          a = n(7194),
          l = n(882),
          c = n(1949);
        e.exports = function (e, t) {
          var n,
            u,
            d,
            p,
            f,
            h = e.target,
            v = e.global,
            m = e.stat;
          if ((n = v ? r : m ? r[h] || a(h, {}) : (r[h] || {}).prototype))
            for (u in t) {
              if (
                ((p = t[u]),
                (d = e.dontCallGetSet ? (f = i(n, u)) && f.value : n[u]),
                !c(v ? u : h + (m ? "." : "#") + u, e.forced) && void 0 !== d)
              ) {
                if (typeof p == typeof d) continue;
                l(p, d);
              }
              (e.sham || (d && d.sham)) && s(p, "sham", !0), o(n, u, p, e);
            }
        };
      },
      6183: (e) => {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      9696: (e, t, n) => {
        "use strict";
        n(9989);
        var r = n(1768),
          i = n(2054),
          s = n(5510),
          o = n(6183),
          a = n(8149),
          l = n(1501),
          c = a("species"),
          u = RegExp.prototype;
        e.exports = function (e, t, n, d) {
          var p = a(e),
            f = !o(function () {
              var t = {};
              return (
                (t[p] = function () {
                  return 7;
                }),
                7 != ""[e](t)
              );
            }),
            h =
              f &&
              !o(function () {
                var t = !1,
                  n = /a/;
                return (
                  "split" === e &&
                    (((n = {}).constructor = {}),
                    (n.constructor[c] = function () {
                      return n;
                    }),
                    (n.flags = ""),
                    (n[p] = /./[p])),
                  (n.exec = function () {
                    return (t = !0), null;
                  }),
                  n[p](""),
                  !t
                );
              });
          if (!f || !h || n) {
            var v = r(/./[p]),
              m = t(p, ""[e], function (e, t, n, i, o) {
                var a = r(e),
                  l = t.exec;
                return l === s || l === u.exec
                  ? f && !o
                    ? { done: !0, value: v(t, n, i) }
                    : { done: !0, value: a(n, t, i) }
                  : { done: !1 };
              });
            i(String.prototype, e, m[0]), i(u, p, m[1]);
          }
          d && l(u[p], "sham", !0);
        };
      },
      3116: (e, t, n) => {
        var r = n(6183);
        e.exports = !r(function () {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      6218: (e, t, n) => {
        var r = n(160),
          i = Function.prototype,
          s = i.apply,
          o = i.call;
        e.exports =
          ("object" == typeof Reflect && Reflect.apply) ||
          (r
            ? o.bind(s)
            : function () {
                return o.apply(s, arguments);
              });
      },
      1098: (e, t, n) => {
        var r = n(1768),
          i = n(5055),
          s = n(160),
          o = r(r.bind);
        e.exports = function (e, t) {
          return (
            i(e),
            void 0 === t
              ? e
              : s
              ? o(e, t)
              : function () {
                  return e.apply(t, arguments);
                }
          );
        };
      },
      160: (e, t, n) => {
        var r = n(6183);
        e.exports = !r(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
        });
      },
      4552: (e, t, n) => {
        var r = n(160),
          i = Function.prototype.call;
        e.exports = r
          ? i.bind(i)
          : function () {
              return i.apply(i, arguments);
            };
      },
      4530: (e, t, n) => {
        var r = n(723),
          i = n(8281),
          s = Function.prototype,
          o = r && Object.getOwnPropertyDescriptor,
          a = i(s, "name"),
          l = a && "something" === function () {}.name,
          c = a && (!r || (r && o(s, "name").configurable));
        e.exports = { EXISTS: a, PROPER: l, CONFIGURABLE: c };
      },
      1768: (e, t, n) => {
        var r = n(160),
          i = Function.prototype,
          s = i.bind,
          o = i.call,
          a = r && s.bind(o, o);
        e.exports = r
          ? function (e) {
              return e && a(e);
            }
          : function (e) {
              return (
                e &&
                function () {
                  return o.apply(e, arguments);
                }
              );
            };
      },
      4991: (e, t, n) => {
        var r = n(8454),
          i = n(6282),
          s = function (e) {
            return i(e) ? e : void 0;
          };
        e.exports = function (e, t) {
          return arguments.length < 2 ? s(r[e]) : r[e] && r[e][t];
        };
      },
      650: (e, t, n) => {
        var r = n(9225),
          i = n(9827),
          s = n(2420),
          o = n(6126),
          a = n(8149)("iterator");
        e.exports = function (e) {
          if (!s(e)) return i(e, a) || i(e, "@@iterator") || o[r(e)];
        };
      },
      7755: (e, t, n) => {
        var r = n(4552),
          i = n(5055),
          s = n(1474),
          o = n(180),
          a = n(650),
          l = TypeError;
        e.exports = function (e, t) {
          var n = arguments.length < 2 ? a(e) : t;
          if (i(n)) return s(r(n, e));
          throw l(o(e) + " is not iterable");
        };
      },
      9827: (e, t, n) => {
        var r = n(5055),
          i = n(2420);
        e.exports = function (e, t) {
          var n = e[t];
          return i(n) ? void 0 : r(n);
        };
      },
      4742: (e, t, n) => {
        var r = n(1768),
          i = n(9473),
          s = Math.floor,
          o = r("".charAt),
          a = r("".replace),
          l = r("".slice),
          c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
          u = /\$([$&'`]|\d{1,2})/g;
        e.exports = function (e, t, n, r, d, p) {
          var f = n + e.length,
            h = r.length,
            v = u;
          return (
            void 0 !== d && ((d = i(d)), (v = c)),
            a(p, v, function (i, a) {
              var c;
              switch (o(a, 0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return l(t, 0, n);
                case "'":
                  return l(t, f);
                case "<":
                  c = d[l(a, 1, -1)];
                  break;
                default:
                  var u = +a;
                  if (0 === u) return i;
                  if (u > h) {
                    var p = s(u / 10);
                    return 0 === p
                      ? i
                      : p <= h
                      ? void 0 === r[p - 1]
                        ? o(a, 1)
                        : r[p - 1] + o(a, 1)
                      : i;
                  }
                  c = r[u - 1];
              }
              return void 0 === c ? "" : c;
            })
          );
        };
      },
      8454: (e, t, n) => {
        var r = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          r("object" == typeof globalThis && globalThis) ||
          r("object" == typeof window && window) ||
          r("object" == typeof self && self) ||
          r("object" == typeof n.g && n.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      8281: (e, t, n) => {
        var r = n(1768),
          i = n(9473),
          s = r({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return s(i(e), t);
          };
      },
      4377: (e) => {
        e.exports = {};
      },
      7461: (e, t, n) => {
        var r = n(4991);
        e.exports = r("document", "documentElement");
      },
      4985: (e, t, n) => {
        var r = n(723),
          i = n(6183),
          s = n(7282);
        e.exports =
          !r &&
          !i(function () {
            return (
              7 !=
              Object.defineProperty(s("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      7530: (e, t, n) => {
        var r = n(1768),
          i = n(6183),
          s = n(1510),
          o = Object,
          a = r("".split);
        e.exports = i(function () {
          return !o("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == s(e) ? a(e, "") : o(e);
            }
          : o;
      },
      7770: (e, t, n) => {
        var r = n(6282),
          i = n(5896),
          s = n(5900);
        e.exports = function (e, t, n) {
          var o, a;
          return (
            s &&
              r((o = t.constructor)) &&
              o !== n &&
              i((a = o.prototype)) &&
              a !== n.prototype &&
              s(e, a),
            e
          );
        };
      },
      6901: (e, t, n) => {
        var r = n(1768),
          i = n(6282),
          s = n(2047),
          o = r(Function.toString);
        i(s.inspectSource) ||
          (s.inspectSource = function (e) {
            return o(e);
          }),
          (e.exports = s.inspectSource);
      },
      6582: (e, t, n) => {
        var r = n(4761),
          i = n(1768),
          s = n(4377),
          o = n(5896),
          a = n(8281),
          l = n(9168).f,
          c = n(6785),
          u = n(6675),
          d = n(6662),
          p = n(9059),
          f = n(3116),
          h = !1,
          v = p("meta"),
          m = 0,
          g = function (e) {
            l(e, v, { value: { objectID: "O" + m++, weakData: {} } });
          },
          b = (e.exports = {
            enable: function () {
              (b.enable = function () {}), (h = !0);
              var e = c.f,
                t = i([].splice),
                n = {};
              (n[v] = 1),
                e(n).length &&
                  ((c.f = function (n) {
                    for (var r = e(n), i = 0, s = r.length; i < s; i++)
                      if (r[i] === v) {
                        t(r, i, 1);
                        break;
                      }
                    return r;
                  }),
                  r(
                    { target: "Object", stat: !0, forced: !0 },
                    { getOwnPropertyNames: u.f }
                  ));
            },
            fastKey: function (e, t) {
              if (!o(e))
                return "symbol" == typeof e
                  ? e
                  : ("string" == typeof e ? "S" : "P") + e;
              if (!a(e, v)) {
                if (!d(e)) return "F";
                if (!t) return "E";
                g(e);
              }
              return e[v].objectID;
            },
            getWeakData: function (e, t) {
              if (!a(e, v)) {
                if (!d(e)) return !0;
                if (!t) return !1;
                g(e);
              }
              return e[v].weakData;
            },
            onFreeze: function (e) {
              return f && h && d(e) && !a(e, v) && g(e), e;
            },
          });
        s[v] = !0;
      },
      1030: (e, t, n) => {
        var r,
          i,
          s,
          o = n(9780),
          a = n(8454),
          l = n(1768),
          c = n(5896),
          u = n(1501),
          d = n(8281),
          p = n(2047),
          f = n(8873),
          h = n(4377),
          v = "Object already initialized",
          m = a.TypeError,
          g = a.WeakMap;
        if (o || p.state) {
          var b = p.state || (p.state = new g()),
            y = l(b.get),
            x = l(b.has),
            w = l(b.set);
          (r = function (e, t) {
            if (x(b, e)) throw m(v);
            return (t.facade = e), w(b, e, t), t;
          }),
            (i = function (e) {
              return y(b, e) || {};
            }),
            (s = function (e) {
              return x(b, e);
            });
        } else {
          var E = f("state");
          (h[E] = !0),
            (r = function (e, t) {
              if (d(e, E)) throw m(v);
              return (t.facade = e), u(e, E, t), t;
            }),
            (i = function (e) {
              return d(e, E) ? e[E] : {};
            }),
            (s = function (e) {
              return d(e, E);
            });
        }
        e.exports = {
          set: r,
          get: i,
          has: s,
          enforce: function (e) {
            return s(e) ? i(e) : r(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var n;
              if (!c(t) || (n = i(t)).type !== e)
                throw m("Incompatible receiver, " + e + " required");
              return n;
            };
          },
        };
      },
      5859: (e, t, n) => {
        var r = n(8149),
          i = n(6126),
          s = r("iterator"),
          o = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (i.Array === e || o[s] === e);
        };
      },
      7931: (e, t, n) => {
        var r = n(1510);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == r(e);
          };
      },
      6282: (e) => {
        e.exports = function (e) {
          return "function" == typeof e;
        };
      },
      2240: (e, t, n) => {
        var r = n(1768),
          i = n(6183),
          s = n(6282),
          o = n(9225),
          a = n(4991),
          l = n(6901),
          c = function () {},
          u = [],
          d = a("Reflect", "construct"),
          p = /^\s*(?:class|function)\b/,
          f = r(p.exec),
          h = !p.exec(c),
          v = function (e) {
            if (!s(e)) return !1;
            try {
              return d(c, u, e), !0;
            } catch (e) {
              return !1;
            }
          },
          m = function (e) {
            if (!s(e)) return !1;
            switch (o(e)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return h || !!f(p, l(e));
            } catch (e) {
              return !0;
            }
          };
        (m.sham = !0),
          (e.exports =
            !d ||
            i(function () {
              var e;
              return (
                v(v.call) ||
                !v(Object) ||
                !v(function () {
                  e = !0;
                }) ||
                e
              );
            })
              ? m
              : v);
      },
      1949: (e, t, n) => {
        var r = n(6183),
          i = n(6282),
          s = /#|\.prototype\./,
          o = function (e, t) {
            var n = l[a(e)];
            return n == u || (n != c && (i(t) ? r(t) : !!t));
          },
          a = (o.normalize = function (e) {
            return String(e).replace(s, ".").toLowerCase();
          }),
          l = (o.data = {}),
          c = (o.NATIVE = "N"),
          u = (o.POLYFILL = "P");
        e.exports = o;
      },
      2420: (e) => {
        e.exports = function (e) {
          return null == e;
        };
      },
      5896: (e, t, n) => {
        var r = n(6282),
          i = "object" == typeof document && document.all,
          s = void 0 === i && void 0 !== i;
        e.exports = s
          ? function (e) {
              return "object" == typeof e ? null !== e : r(e) || e === i;
            }
          : function (e) {
              return "object" == typeof e ? null !== e : r(e);
            };
      },
      8977: (e) => {
        e.exports = !1;
      },
      1527: (e, t, n) => {
        var r = n(4991),
          i = n(6282),
          s = n(1786),
          o = n(4746),
          a = Object;
        e.exports = o
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = r("Symbol");
              return i(t) && s(t.prototype, a(e));
            };
      },
      1518: (e, t, n) => {
        var r = n(1098),
          i = n(4552),
          s = n(1474),
          o = n(180),
          a = n(5859),
          l = n(1829),
          c = n(1786),
          u = n(7755),
          d = n(650),
          p = n(9193),
          f = TypeError,
          h = function (e, t) {
            (this.stopped = e), (this.result = t);
          },
          v = h.prototype;
        e.exports = function (e, t, n) {
          var m,
            g,
            b,
            y,
            x,
            w,
            E,
            S = n && n.that,
            T = !(!n || !n.AS_ENTRIES),
            C = !(!n || !n.IS_RECORD),
            O = !(!n || !n.IS_ITERATOR),
            k = !(!n || !n.INTERRUPTED),
            L = r(t, S),
            A = function (e) {
              return m && p(m, "normal", e), new h(!0, e);
            },
            M = function (e) {
              return T
                ? (s(e), k ? L(e[0], e[1], A) : L(e[0], e[1]))
                : k
                ? L(e, A)
                : L(e);
            };
          if (C) m = e.iterator;
          else if (O) m = e;
          else {
            if (!(g = d(e))) throw f(o(e) + " is not iterable");
            if (a(g)) {
              for (b = 0, y = l(e); y > b; b++)
                if ((x = M(e[b])) && c(v, x)) return x;
              return new h(!1);
            }
            m = u(e, g);
          }
          for (w = C ? e.next : m.next; !(E = i(w, m)).done; ) {
            try {
              x = M(E.value);
            } catch (e) {
              p(m, "throw", e);
            }
            if ("object" == typeof x && x && c(v, x)) return x;
          }
          return new h(!1);
        };
      },
      9193: (e, t, n) => {
        var r = n(4552),
          i = n(1474),
          s = n(9827);
        e.exports = function (e, t, n) {
          var o, a;
          i(e);
          try {
            if (!(o = s(e, "return"))) {
              if ("throw" === t) throw n;
              return n;
            }
            o = r(o, e);
          } catch (e) {
            (a = !0), (o = e);
          }
          if ("throw" === t) throw n;
          if (a) throw o;
          return i(o), n;
        };
      },
      392: (e, t, n) => {
        "use strict";
        var r = n(6524).IteratorPrototype,
          i = n(1525),
          s = n(9273),
          o = n(820),
          a = n(6126),
          l = function () {
            return this;
          };
        e.exports = function (e, t, n, c) {
          var u = t + " Iterator";
          return (
            (e.prototype = i(r, { next: s(+!c, n) })),
            o(e, u, !1, !0),
            (a[u] = l),
            e
          );
        };
      },
      335: (e, t, n) => {
        "use strict";
        var r = n(4761),
          i = n(4552),
          s = n(8977),
          o = n(4530),
          a = n(6282),
          l = n(392),
          c = n(4204),
          u = n(5900),
          d = n(820),
          p = n(1501),
          f = n(2054),
          h = n(8149),
          v = n(6126),
          m = n(6524),
          g = o.PROPER,
          b = o.CONFIGURABLE,
          y = m.IteratorPrototype,
          x = m.BUGGY_SAFARI_ITERATORS,
          w = h("iterator"),
          E = "keys",
          S = "values",
          T = "entries",
          C = function () {
            return this;
          };
        e.exports = function (e, t, n, o, h, m, O) {
          l(n, t, o);
          var k,
            L,
            A,
            M = function (e) {
              if (e === h && I) return I;
              if (!x && e in $) return $[e];
              switch (e) {
                case E:
                case S:
                case T:
                  return function () {
                    return new n(this, e);
                  };
              }
              return function () {
                return new n(this);
              };
            },
            P = t + " Iterator",
            _ = !1,
            $ = e.prototype,
            j = $[w] || $["@@iterator"] || (h && $[h]),
            I = (!x && j) || M(h),
            z = ("Array" == t && $.entries) || j;
          if (
            (z &&
              (k = c(z.call(new e()))) !== Object.prototype &&
              k.next &&
              (s || c(k) === y || (u ? u(k, y) : a(k[w]) || f(k, w, C)),
              d(k, P, !0, !0),
              s && (v[P] = C)),
            g &&
              h == S &&
              j &&
              j.name !== S &&
              (!s && b
                ? p($, "name", S)
                : ((_ = !0),
                  (I = function () {
                    return i(j, this);
                  }))),
            h)
          )
            if (((L = { values: M(S), keys: m ? I : M(E), entries: M(T) }), O))
              for (A in L) (x || _ || !(A in $)) && f($, A, L[A]);
            else r({ target: t, proto: !0, forced: x || _ }, L);
          return (
            (s && !O) || $[w] === I || f($, w, I, { name: h }), (v[t] = I), L
          );
        };
      },
      6524: (e, t, n) => {
        "use strict";
        var r,
          i,
          s,
          o = n(6183),
          a = n(6282),
          l = n(5896),
          c = n(1525),
          u = n(4204),
          d = n(2054),
          p = n(8149),
          f = n(8977),
          h = p("iterator"),
          v = !1;
        [].keys &&
          ("next" in (s = [].keys())
            ? (i = u(u(s))) !== Object.prototype && (r = i)
            : (v = !0)),
          !l(r) ||
          o(function () {
            var e = {};
            return r[h].call(e) !== e;
          })
            ? (r = {})
            : f && (r = c(r)),
          a(r[h]) ||
            d(r, h, function () {
              return this;
            }),
          (e.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: v });
      },
      6126: (e) => {
        e.exports = {};
      },
      1829: (e, t, n) => {
        var r = n(3917);
        e.exports = function (e) {
          return r(e.length);
        };
      },
      5903: (e, t, n) => {
        var r = n(6183),
          i = n(6282),
          s = n(8281),
          o = n(723),
          a = n(4530).CONFIGURABLE,
          l = n(6901),
          c = n(1030),
          u = c.enforce,
          d = c.get,
          p = Object.defineProperty,
          f =
            o &&
            !r(function () {
              return 8 !== p(function () {}, "length", { value: 8 }).length;
            }),
          h = String(String).split("String"),
          v = (e.exports = function (e, t, n) {
            "Symbol(" === String(t).slice(0, 7) &&
              (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
              n && n.getter && (t = "get " + t),
              n && n.setter && (t = "set " + t),
              (!s(e, "name") || (a && e.name !== t)) &&
                (o
                  ? p(e, "name", { value: t, configurable: !0 })
                  : (e.name = t)),
              f &&
                n &&
                s(n, "arity") &&
                e.length !== n.arity &&
                p(e, "length", { value: n.arity });
            try {
              n && s(n, "constructor") && n.constructor
                ? o && p(e, "prototype", { writable: !1 })
                : e.prototype && (e.prototype = void 0);
            } catch (e) {}
            var r = u(e);
            return (
              s(r, "source") ||
                (r.source = h.join("string" == typeof t ? t : "")),
              e
            );
          });
        Function.prototype.toString = v(function () {
          return (i(this) && d(this).source) || l(this);
        }, "toString");
      },
      1021: (e) => {
        var t = Math.ceil,
          n = Math.floor;
        e.exports =
          Math.trunc ||
          function (e) {
            var r = +e;
            return (r > 0 ? n : t)(r);
          };
      },
      8513: (e, t, n) => {
        var r = n(8454),
          i = n(6183),
          s = n(1768),
          o = n(7655),
          a = n(9749).trim,
          l = n(8342),
          c = r.parseInt,
          u = r.Symbol,
          d = u && u.iterator,
          p = /^[+-]?0x/i,
          f = s(p.exec),
          h =
            8 !== c(l + "08") ||
            22 !== c(l + "0x16") ||
            (d &&
              !i(function () {
                c(Object(d));
              }));
        e.exports = h
          ? function (e, t) {
              var n = a(o(e));
              return c(n, t >>> 0 || (f(p, n) ? 16 : 10));
            }
          : c;
      },
      4727: (e, t, n) => {
        "use strict";
        var r = n(723),
          i = n(1768),
          s = n(4552),
          o = n(6183),
          a = n(1340),
          l = n(8074),
          c = n(4043),
          u = n(9473),
          d = n(7530),
          p = Object.assign,
          f = Object.defineProperty,
          h = i([].concat);
        e.exports =
          !p ||
          o(function () {
            if (
              r &&
              1 !==
                p(
                  { b: 1 },
                  p(
                    f({}, "a", {
                      enumerable: !0,
                      get: function () {
                        f(this, "b", { value: 3, enumerable: !1 });
                      },
                    }),
                    { b: 2 }
                  )
                ).b
            )
              return !0;
            var e = {},
              t = {},
              n = Symbol(),
              i = "abcdefghijklmnopqrst";
            return (
              (e[n] = 7),
              i.split("").forEach(function (e) {
                t[e] = e;
              }),
              7 != p({}, e)[n] || a(p({}, t)).join("") != i
            );
          })
            ? function (e, t) {
                for (
                  var n = u(e), i = arguments.length, o = 1, p = l.f, f = c.f;
                  i > o;

                )
                  for (
                    var v,
                      m = d(arguments[o++]),
                      g = p ? h(a(m), p(m)) : a(m),
                      b = g.length,
                      y = 0;
                    b > y;

                  )
                    (v = g[y++]), (r && !s(f, m, v)) || (n[v] = m[v]);
                return n;
              }
            : p;
      },
      1525: (e, t, n) => {
        var r,
          i = n(1474),
          s = n(262),
          o = n(8409),
          a = n(4377),
          l = n(7461),
          c = n(7282),
          u = n(8873),
          d = u("IE_PROTO"),
          p = function () {},
          f = function (e) {
            return "<script>" + e + "</" + "script>";
          },
          h = function (e) {
            e.write(f("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          },
          v = function () {
            try {
              r = new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t;
            v =
              "undefined" != typeof document
                ? document.domain && r
                  ? h(r)
                  : (((t = c("iframe")).style.display = "none"),
                    l.appendChild(t),
                    (t.src = String("javascript:")),
                    (e = t.contentWindow.document).open(),
                    e.write(f("document.F=Object")),
                    e.close(),
                    e.F)
                : h(r);
            for (var n = o.length; n--; ) delete v.prototype[o[n]];
            return v();
          };
        (a[d] = !0),
          (e.exports =
            Object.create ||
            function (e, t) {
              var n;
              return (
                null !== e
                  ? ((p.prototype = i(e)),
                    (n = new p()),
                    (p.prototype = null),
                    (n[d] = e))
                  : (n = v()),
                void 0 === t ? n : s.f(n, t)
              );
            });
      },
      262: (e, t, n) => {
        var r = n(723),
          i = n(8654),
          s = n(9168),
          o = n(1474),
          a = n(3206),
          l = n(1340);
        t.f =
          r && !i
            ? Object.defineProperties
            : function (e, t) {
                o(e);
                for (var n, r = a(t), i = l(t), c = i.length, u = 0; c > u; )
                  s.f(e, (n = i[u++]), r[n]);
                return e;
              };
      },
      9168: (e, t, n) => {
        var r = n(723),
          i = n(4985),
          s = n(8654),
          o = n(1474),
          a = n(2988),
          l = TypeError,
          c = Object.defineProperty,
          u = Object.getOwnPropertyDescriptor,
          d = "enumerable",
          p = "configurable",
          f = "writable";
        t.f = r
          ? s
            ? function (e, t, n) {
                if (
                  (o(e),
                  (t = a(t)),
                  o(n),
                  "function" == typeof e &&
                    "prototype" === t &&
                    "value" in n &&
                    f in n &&
                    !n.writable)
                ) {
                  var r = u(e, t);
                  r &&
                    r.writable &&
                    ((e[t] = n.value),
                    (n = {
                      configurable: p in n ? n.configurable : r.configurable,
                      enumerable: d in n ? n.enumerable : r.enumerable,
                      writable: !1,
                    }));
                }
                return c(e, t, n);
              }
            : c
          : function (e, t, n) {
              if ((o(e), (t = a(t)), o(n), i))
                try {
                  return c(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n) throw l("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      5663: (e, t, n) => {
        var r = n(723),
          i = n(4552),
          s = n(4043),
          o = n(9273),
          a = n(3206),
          l = n(2988),
          c = n(8281),
          u = n(4985),
          d = Object.getOwnPropertyDescriptor;
        t.f = r
          ? d
          : function (e, t) {
              if (((e = a(e)), (t = l(t)), u))
                try {
                  return d(e, t);
                } catch (e) {}
              if (c(e, t)) return o(!i(s.f, e, t), e[t]);
            };
      },
      6675: (e, t, n) => {
        var r = n(1510),
          i = n(3206),
          s = n(6785).f,
          o = n(4072),
          a =
            "object" == typeof window && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [];
        e.exports.f = function (e) {
          return a && "Window" == r(e)
            ? (function (e) {
                try {
                  return s(e);
                } catch (e) {
                  return o(a);
                }
              })(e)
            : s(i(e));
        };
      },
      6785: (e, t, n) => {
        var r = n(5113),
          i = n(8409).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return r(e, i);
          };
      },
      8074: (e, t) => {
        t.f = Object.getOwnPropertySymbols;
      },
      4204: (e, t, n) => {
        var r = n(8281),
          i = n(6282),
          s = n(9473),
          o = n(8873),
          a = n(7401),
          l = o("IE_PROTO"),
          c = Object,
          u = c.prototype;
        e.exports = a
          ? c.getPrototypeOf
          : function (e) {
              var t = s(e);
              if (r(t, l)) return t[l];
              var n = t.constructor;
              return i(n) && t instanceof n
                ? n.prototype
                : t instanceof c
                ? u
                : null;
            };
      },
      6662: (e, t, n) => {
        var r = n(6183),
          i = n(5896),
          s = n(1510),
          o = n(8774),
          a = Object.isExtensible,
          l = r(function () {
            a(1);
          });
        e.exports =
          l || o
            ? function (e) {
                return !!i(e) && (!o || "ArrayBuffer" != s(e)) && (!a || a(e));
              }
            : a;
      },
      1786: (e, t, n) => {
        var r = n(1768);
        e.exports = r({}.isPrototypeOf);
      },
      5113: (e, t, n) => {
        var r = n(1768),
          i = n(8281),
          s = n(3206),
          o = n(5675).indexOf,
          a = n(4377),
          l = r([].push);
        e.exports = function (e, t) {
          var n,
            r = s(e),
            c = 0,
            u = [];
          for (n in r) !i(a, n) && i(r, n) && l(u, n);
          for (; t.length > c; ) i(r, (n = t[c++])) && (~o(u, n) || l(u, n));
          return u;
        };
      },
      1340: (e, t, n) => {
        var r = n(5113),
          i = n(8409);
        e.exports =
          Object.keys ||
          function (e) {
            return r(e, i);
          };
      },
      4043: (e, t) => {
        "use strict";
        var n = {}.propertyIsEnumerable,
          r = Object.getOwnPropertyDescriptor,
          i = r && !n.call({ 1: 2 }, 1);
        t.f = i
          ? function (e) {
              var t = r(this, e);
              return !!t && t.enumerable;
            }
          : n;
      },
      5900: (e, t, n) => {
        var r = n(1768),
          i = n(1474),
          s = n(2004);
        e.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var e,
                  t = !1,
                  n = {};
                try {
                  (e = r(
                    Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set
                  ))(n, []),
                    (t = n instanceof Array);
                } catch (e) {}
                return function (n, r) {
                  return i(n), s(r), t ? e(n, r) : (n.__proto__ = r), n;
                };
              })()
            : void 0);
      },
      4117: (e, t, n) => {
        "use strict";
        var r = n(4823),
          i = n(9225);
        e.exports = r
          ? {}.toString
          : function () {
              return "[object " + i(this) + "]";
            };
      },
      6891: (e, t, n) => {
        var r = n(4552),
          i = n(6282),
          s = n(5896),
          o = TypeError;
        e.exports = function (e, t) {
          var n, a;
          if ("string" === t && i((n = e.toString)) && !s((a = r(n, e))))
            return a;
          if (i((n = e.valueOf)) && !s((a = r(n, e)))) return a;
          if ("string" !== t && i((n = e.toString)) && !s((a = r(n, e))))
            return a;
          throw o("Can't convert object to primitive value");
        };
      },
      1441: (e, t, n) => {
        var r = n(4991),
          i = n(1768),
          s = n(6785),
          o = n(8074),
          a = n(1474),
          l = i([].concat);
        e.exports =
          r("Reflect", "ownKeys") ||
          function (e) {
            var t = s.f(a(e)),
              n = o.f;
            return n ? l(t, n(e)) : t;
          };
      },
      8734: (e, t, n) => {
        var r = n(4552),
          i = n(1474),
          s = n(6282),
          o = n(1510),
          a = n(5510),
          l = TypeError;
        e.exports = function (e, t) {
          var n = e.exec;
          if (s(n)) {
            var c = r(n, e, t);
            return null !== c && i(c), c;
          }
          if ("RegExp" === o(e)) return r(a, e, t);
          throw l("RegExp#exec called on incompatible receiver");
        };
      },
      5510: (e, t, n) => {
        "use strict";
        var r,
          i,
          s = n(4552),
          o = n(1768),
          a = n(7655),
          l = n(8383),
          c = n(6558),
          u = n(1748),
          d = n(1525),
          p = n(1030).get,
          f = n(7672),
          h = n(9729),
          v = u("native-string-replace", String.prototype.replace),
          m = RegExp.prototype.exec,
          g = m,
          b = o("".charAt),
          y = o("".indexOf),
          x = o("".replace),
          w = o("".slice),
          E =
            ((i = /b*/g),
            s(m, (r = /a/), "a"),
            s(m, i, "a"),
            0 !== r.lastIndex || 0 !== i.lastIndex),
          S = c.BROKEN_CARET,
          T = void 0 !== /()??/.exec("")[1];
        (E || T || S || f || h) &&
          (g = function (e) {
            var t,
              n,
              r,
              i,
              o,
              c,
              u,
              f = this,
              h = p(f),
              C = a(e),
              O = h.raw;
            if (O)
              return (
                (O.lastIndex = f.lastIndex),
                (t = s(g, O, C)),
                (f.lastIndex = O.lastIndex),
                t
              );
            var k = h.groups,
              L = S && f.sticky,
              A = s(l, f),
              M = f.source,
              P = 0,
              _ = C;
            if (
              (L &&
                ((A = x(A, "y", "")),
                -1 === y(A, "g") && (A += "g"),
                (_ = w(C, f.lastIndex)),
                f.lastIndex > 0 &&
                  (!f.multiline ||
                    (f.multiline && "\n" !== b(C, f.lastIndex - 1))) &&
                  ((M = "(?: " + M + ")"), (_ = " " + _), P++),
                (n = new RegExp("^(?:" + M + ")", A))),
              T && (n = new RegExp("^" + M + "$(?!\\s)", A)),
              E && (r = f.lastIndex),
              (i = s(m, L ? n : f, _)),
              L
                ? i
                  ? ((i.input = w(i.input, P)),
                    (i[0] = w(i[0], P)),
                    (i.index = f.lastIndex),
                    (f.lastIndex += i[0].length))
                  : (f.lastIndex = 0)
                : E &&
                  i &&
                  (f.lastIndex = f.global ? i.index + i[0].length : r),
              T &&
                i &&
                i.length > 1 &&
                s(v, i[0], n, function () {
                  for (o = 1; o < arguments.length - 2; o++)
                    void 0 === arguments[o] && (i[o] = void 0);
                }),
              i && k)
            )
              for (i.groups = c = d(null), o = 0; o < k.length; o++)
                c[(u = k[o])[0]] = i[u[1]];
            return i;
          }),
          (e.exports = g);
      },
      8383: (e, t, n) => {
        "use strict";
        var r = n(1474);
        e.exports = function () {
          var e = r(this),
            t = "";
          return (
            e.hasIndices && (t += "d"),
            e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.dotAll && (t += "s"),
            e.unicode && (t += "u"),
            e.unicodeSets && (t += "v"),
            e.sticky && (t += "y"),
            t
          );
        };
      },
      6558: (e, t, n) => {
        var r = n(6183),
          i = n(8454).RegExp,
          s = r(function () {
            var e = i("a", "y");
            return (e.lastIndex = 2), null != e.exec("abcd");
          }),
          o =
            s ||
            r(function () {
              return !i("a", "y").sticky;
            }),
          a =
            s ||
            r(function () {
              var e = i("^r", "gy");
              return (e.lastIndex = 2), null != e.exec("str");
            });
        e.exports = { BROKEN_CARET: a, MISSED_STICKY: o, UNSUPPORTED_Y: s };
      },
      7672: (e, t, n) => {
        var r = n(6183),
          i = n(8454).RegExp;
        e.exports = r(function () {
          var e = i(".", "s");
          return !(e.dotAll && e.exec("\n") && "s" === e.flags);
        });
      },
      9729: (e, t, n) => {
        var r = n(6183),
          i = n(8454).RegExp;
        e.exports = r(function () {
          var e = i("(?<a>b)", "g");
          return (
            "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
          );
        });
      },
      7431: (e, t, n) => {
        var r = n(2420),
          i = TypeError;
        e.exports = function (e) {
          if (r(e)) throw i("Can't call method on " + e);
          return e;
        };
      },
      820: (e, t, n) => {
        var r = n(9168).f,
          i = n(8281),
          s = n(8149)("toStringTag");
        e.exports = function (e, t, n) {
          e && !n && (e = e.prototype),
            e && !i(e, s) && r(e, s, { configurable: !0, value: t });
        };
      },
      8873: (e, t, n) => {
        var r = n(1748),
          i = n(9059),
          s = r("keys");
        e.exports = function (e) {
          return s[e] || (s[e] = i(e));
        };
      },
      2047: (e, t, n) => {
        var r = n(8454),
          i = n(7194),
          s = "__core-js_shared__",
          o = r[s] || i(s, {});
        e.exports = o;
      },
      1748: (e, t, n) => {
        var r = n(8977),
          i = n(2047);
        (e.exports = function (e, t) {
          return i[e] || (i[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.25.1",
          mode: r ? "pure" : "global",
          copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.25.1/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      7321: (e, t, n) => {
        var r = n(1768),
          i = n(8037),
          s = n(7655),
          o = n(7431),
          a = r("".charAt),
          l = r("".charCodeAt),
          c = r("".slice),
          u = function (e) {
            return function (t, n) {
              var r,
                u,
                d = s(o(t)),
                p = i(n),
                f = d.length;
              return p < 0 || p >= f
                ? e
                  ? ""
                  : void 0
                : (r = l(d, p)) < 55296 ||
                  r > 56319 ||
                  p + 1 === f ||
                  (u = l(d, p + 1)) < 56320 ||
                  u > 57343
                ? e
                  ? a(d, p)
                  : r
                : e
                ? c(d, p, p + 2)
                : u - 56320 + ((r - 55296) << 10) + 65536;
            };
          };
        e.exports = { codeAt: u(!1), charAt: u(!0) };
      },
      9749: (e, t, n) => {
        var r = n(1768),
          i = n(7431),
          s = n(7655),
          o = n(8342),
          a = r("".replace),
          l = "[" + o + "]",
          c = RegExp("^" + l + l + "*"),
          u = RegExp(l + l + "*$"),
          d = function (e) {
            return function (t) {
              var n = s(i(t));
              return 1 & e && (n = a(n, c, "")), 2 & e && (n = a(n, u, "")), n;
            };
          };
        e.exports = { start: d(1), end: d(2), trim: d(3) };
      },
      3801: (e, t, n) => {
        var r = n(4324),
          i = n(6183);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !i(function () {
            var e = Symbol();
            return (
              !String(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && r && r < 41)
            );
          });
      },
      9623: (e, t, n) => {
        var r = n(8037),
          i = Math.max,
          s = Math.min;
        e.exports = function (e, t) {
          var n = r(e);
          return n < 0 ? i(n + t, 0) : s(n, t);
        };
      },
      3206: (e, t, n) => {
        var r = n(7530),
          i = n(7431);
        e.exports = function (e) {
          return r(i(e));
        };
      },
      8037: (e, t, n) => {
        var r = n(1021);
        e.exports = function (e) {
          var t = +e;
          return t != t || 0 === t ? 0 : r(t);
        };
      },
      3917: (e, t, n) => {
        var r = n(8037),
          i = Math.min;
        e.exports = function (e) {
          return e > 0 ? i(r(e), 9007199254740991) : 0;
        };
      },
      9473: (e, t, n) => {
        var r = n(7431),
          i = Object;
        e.exports = function (e) {
          return i(r(e));
        };
      },
      3948: (e, t, n) => {
        var r = n(4552),
          i = n(5896),
          s = n(1527),
          o = n(9827),
          a = n(6891),
          l = n(8149),
          c = TypeError,
          u = l("toPrimitive");
        e.exports = function (e, t) {
          if (!i(e) || s(e)) return e;
          var n,
            l = o(e, u);
          if (l) {
            if (
              (void 0 === t && (t = "default"), (n = r(l, e, t)), !i(n) || s(n))
            )
              return n;
            throw c("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), a(e, t);
        };
      },
      2988: (e, t, n) => {
        var r = n(3948),
          i = n(1527);
        e.exports = function (e) {
          var t = r(e, "string");
          return i(t) ? t : t + "";
        };
      },
      4823: (e, t, n) => {
        var r = {};
        (r[n(8149)("toStringTag")] = "z"),
          (e.exports = "[object z]" === String(r));
      },
      7655: (e, t, n) => {
        var r = n(9225),
          i = String;
        e.exports = function (e) {
          if ("Symbol" === r(e))
            throw TypeError("Cannot convert a Symbol value to a string");
          return i(e);
        };
      },
      180: (e) => {
        var t = String;
        e.exports = function (e) {
          try {
            return t(e);
          } catch (e) {
            return "Object";
          }
        };
      },
      9059: (e, t, n) => {
        var r = n(1768),
          i = 0,
          s = Math.random(),
          o = r((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++i + s, 36);
        };
      },
      4746: (e, t, n) => {
        var r = n(3801);
        e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      8654: (e, t, n) => {
        var r = n(723),
          i = n(6183);
        e.exports =
          r &&
          i(function () {
            return (
              42 !=
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      9780: (e, t, n) => {
        var r = n(8454),
          i = n(6282),
          s = r.WeakMap;
        e.exports = i(s) && /native code/.test(String(s));
      },
      8149: (e, t, n) => {
        var r = n(8454),
          i = n(1748),
          s = n(8281),
          o = n(9059),
          a = n(3801),
          l = n(4746),
          c = i("wks"),
          u = r.Symbol,
          d = u && u.for,
          p = l ? u : (u && u.withoutSetter) || o;
        e.exports = function (e) {
          if (!s(c, e) || (!a && "string" != typeof c[e])) {
            var t = "Symbol." + e;
            a && s(u, e) ? (c[e] = u[e]) : (c[e] = l && d ? d(t) : p(t));
          }
          return c[e];
        };
      },
      8342: (e) => {
        e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
      },
      8165: (e, t, n) => {
        "use strict";
        var r = n(4761),
          i = n(528).filter;
        r(
          { target: "Array", proto: !0, forced: !n(4820)("filter") },
          {
            filter: function (e) {
              return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      7543: (e, t, n) => {
        "use strict";
        var r = n(3206),
          i = n(9256),
          s = n(6126),
          o = n(1030),
          a = n(9168).f,
          l = n(335),
          c = n(5351),
          u = n(8977),
          d = n(723),
          p = "Array Iterator",
          f = o.set,
          h = o.getterFor(p);
        e.exports = l(
          Array,
          "Array",
          function (e, t) {
            f(this, { type: p, target: r(e), index: 0, kind: t });
          },
          function () {
            var e = h(this),
              t = e.target,
              n = e.kind,
              r = e.index++;
            return !t || r >= t.length
              ? ((e.target = void 0), c(void 0, !0))
              : c("keys" == n ? r : "values" == n ? t[r] : [r, t[r]], !1);
          },
          "values"
        );
        var v = (s.Arguments = s.Array);
        if (
          (i("keys"), i("values"), i("entries"), !u && d && "values" !== v.name)
        )
          try {
            a(v, "name", { value: "values" });
          } catch (e) {}
      },
      7985: (e, t, n) => {
        "use strict";
        var r = n(4761),
          i = n(6589).left,
          s = n(1923),
          o = n(4324),
          a = n(7594);
        r(
          {
            target: "Array",
            proto: !0,
            forced: !s("reduce") || (!a && o > 79 && o < 83),
          },
          {
            reduce: function (e) {
              var t = arguments.length;
              return i(this, e, t, t > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      6618: (e, t, n) => {
        var r = n(723),
          i = n(4530).EXISTS,
          s = n(1768),
          o = n(9168).f,
          a = Function.prototype,
          l = s(a.toString),
          c =
            /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
          u = s(c.exec);
        r &&
          !i &&
          o(a, "name", {
            configurable: !0,
            get: function () {
              try {
                return u(c, l(this))[1];
              } catch (e) {
                return "";
              }
            },
          });
      },
      7692: (e, t, n) => {
        var r = n(4761),
          i = n(4727);
        r(
          { target: "Object", stat: !0, arity: 2, forced: Object.assign !== i },
          { assign: i }
        );
      },
      2352: (e, t, n) => {
        var r = n(4823),
          i = n(2054),
          s = n(4117);
        r || i(Object.prototype, "toString", s, { unsafe: !0 });
      },
      4249: (e, t, n) => {
        var r = n(4761),
          i = n(8513);
        r({ global: !0, forced: parseInt != i }, { parseInt: i });
      },
      9989: (e, t, n) => {
        "use strict";
        var r = n(4761),
          i = n(5510);
        r({ target: "RegExp", proto: !0, forced: /./.exec !== i }, { exec: i });
      },
      3344: (e, t, n) => {
        "use strict";
        var r = n(7321).charAt,
          i = n(7655),
          s = n(1030),
          o = n(335),
          a = n(5351),
          l = "String Iterator",
          c = s.set,
          u = s.getterFor(l);
        o(
          String,
          "String",
          function (e) {
            c(this, { type: l, string: i(e), index: 0 });
          },
          function () {
            var e,
              t = u(this),
              n = t.string,
              i = t.index;
            return i >= n.length
              ? a(void 0, !0)
              : ((e = r(n, i)), (t.index += e.length), a(e, !1));
          }
        );
      },
      8307: (e, t, n) => {
        "use strict";
        var r = n(4552),
          i = n(9696),
          s = n(1474),
          o = n(2420),
          a = n(3917),
          l = n(7655),
          c = n(7431),
          u = n(9827),
          d = n(3615),
          p = n(8734);
        i("match", function (e, t, n) {
          return [
            function (t) {
              var n = c(this),
                i = o(t) ? void 0 : u(t, e);
              return i ? r(i, t, n) : new RegExp(t)[e](l(n));
            },
            function (e) {
              var r = s(this),
                i = l(e),
                o = n(t, r, i);
              if (o.done) return o.value;
              if (!r.global) return p(r, i);
              var c = r.unicode;
              r.lastIndex = 0;
              for (var u, f = [], h = 0; null !== (u = p(r, i)); ) {
                var v = l(u[0]);
                (f[h] = v),
                  "" === v && (r.lastIndex = d(i, a(r.lastIndex), c)),
                  h++;
              }
              return 0 === h ? null : f;
            },
          ];
        });
      },
      4390: (e, t, n) => {
        "use strict";
        var r = n(6218),
          i = n(4552),
          s = n(1768),
          o = n(9696),
          a = n(6183),
          l = n(1474),
          c = n(6282),
          u = n(2420),
          d = n(8037),
          p = n(3917),
          f = n(7655),
          h = n(7431),
          v = n(3615),
          m = n(9827),
          g = n(4742),
          b = n(8734),
          y = n(8149)("replace"),
          x = Math.max,
          w = Math.min,
          E = s([].concat),
          S = s([].push),
          T = s("".indexOf),
          C = s("".slice),
          O = "$0" === "a".replace(/./, "$0"),
          k = !!/./[y] && "" === /./[y]("a", "$0");
        o(
          "replace",
          function (e, t, n) {
            var s = k ? "$" : "$0";
            return [
              function (e, n) {
                var r = h(this),
                  s = u(e) ? void 0 : m(e, y);
                return s ? i(s, e, r, n) : i(t, f(r), e, n);
              },
              function (e, i) {
                var o = l(this),
                  a = f(e);
                if (
                  "string" == typeof i &&
                  -1 === T(i, s) &&
                  -1 === T(i, "$<")
                ) {
                  var u = n(t, o, a, i);
                  if (u.done) return u.value;
                }
                var h = c(i);
                h || (i = f(i));
                var m = o.global;
                if (m) {
                  var y = o.unicode;
                  o.lastIndex = 0;
                }
                for (var O = []; ; ) {
                  var k = b(o, a);
                  if (null === k) break;
                  if ((S(O, k), !m)) break;
                  "" === f(k[0]) && (o.lastIndex = v(a, p(o.lastIndex), y));
                }
                for (var L, A = "", M = 0, P = 0; P < O.length; P++) {
                  for (
                    var _ = f((k = O[P])[0]),
                      $ = x(w(d(k.index), a.length), 0),
                      j = [],
                      I = 1;
                    I < k.length;
                    I++
                  )
                    S(j, void 0 === (L = k[I]) ? L : String(L));
                  var z = k.groups;
                  if (h) {
                    var D = E([_], j, $, a);
                    void 0 !== z && S(D, z);
                    var N = f(r(i, void 0, D));
                  } else N = g(_, a, $, j, z, i);
                  $ >= M && ((A += C(a, M, $) + N), (M = $ + _.length));
                }
                return A + C(a, M);
              },
            ];
          },
          !!a(function () {
            var e = /./;
            return (
              (e.exec = function () {
                var e = [];
                return (e.groups = { a: "7" }), e;
              }),
              "7" !== "".replace(e, "$<a>")
            );
          }) ||
            !O ||
            k
        );
      },
      9703: (e, t, n) => {
        "use strict";
        var r,
          i = n(8454),
          s = n(1768),
          o = n(6367),
          a = n(6582),
          l = n(6645),
          c = n(7790),
          u = n(5896),
          d = n(6662),
          p = n(1030).enforce,
          f = n(9780),
          h = !i.ActiveXObject && "ActiveXObject" in i,
          v = function (e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0);
            };
          },
          m = l("WeakMap", v, c);
        if (f && h) {
          (r = c.getConstructor(v, "WeakMap", !0)), a.enable();
          var g = m.prototype,
            b = s(g.delete),
            y = s(g.has),
            x = s(g.get),
            w = s(g.set);
          o(g, {
            delete: function (e) {
              if (u(e) && !d(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new r()),
                  b(this, e) || t.frozen.delete(e)
                );
              }
              return b(this, e);
            },
            has: function (e) {
              if (u(e) && !d(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new r()),
                  y(this, e) || t.frozen.has(e)
                );
              }
              return y(this, e);
            },
            get: function (e) {
              if (u(e) && !d(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new r()),
                  y(this, e) ? x(this, e) : t.frozen.get(e)
                );
              }
              return x(this, e);
            },
            set: function (e, t) {
              if (u(e) && !d(e)) {
                var n = p(this);
                n.frozen || (n.frozen = new r()),
                  y(this, e) ? w(this, e, t) : n.frozen.set(e, t);
              } else w(this, e, t);
              return this;
            },
          });
        }
      },
      7323: (e, t, n) => {
        n(9703);
      },
      3542: (e, t, n) => {
        var r = n(8454),
          i = n(6181),
          s = n(2387),
          o = n(1269),
          a = n(1501),
          l = function (e) {
            if (e && e.forEach !== o)
              try {
                a(e, "forEach", o);
              } catch (t) {
                e.forEach = o;
              }
          };
        for (var c in i) i[c] && l(r[c] && r[c].prototype);
        l(s);
      },
      4079: (e, t, n) => {
        var r = n(8454),
          i = n(6181),
          s = n(2387),
          o = n(7543),
          a = n(1501),
          l = n(8149),
          c = l("iterator"),
          u = l("toStringTag"),
          d = o.values,
          p = function (e, t) {
            if (e) {
              if (e[c] !== d)
                try {
                  a(e, c, d);
                } catch (t) {
                  e[c] = d;
                }
              if ((e[u] || a(e, u, t), i[t]))
                for (var n in o)
                  if (e[n] !== o[n])
                    try {
                      a(e, n, o[n]);
                    } catch (t) {
                      e[n] = o[n];
                    }
            }
          };
        for (var f in i) p(r[f] && r[f].prototype, f);
        p(s, "DOMTokenList");
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var s = (t[r] = { exports: {} });
    return e[r](s, s.exports, n), s.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      function e(e) {
        this.type = e;
      }
      (e.prototype.init = function () {
        const e = this;
        (this.оbjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            n = t.dataset.da.trim().split(","),
            r = {};
          (r.element = t),
            (r.parent = t.parentNode),
            (r.destination = document.querySelector(n[0].trim())),
            (r.breakpoint = n[1] ? n[1].trim() : "767"),
            (r.place = n[2] ? n[2].trim() : "last"),
            (r.index = this.indexInParent(r.parent, r.element)),
            this.оbjects.push(r);
        }
        this.arraySort(this.оbjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.оbjects,
            function (e) {
              return (
                "(" +
                this.type +
                "-width: " +
                e.breakpoint +
                "px)," +
                e.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (e, t, n) {
              return Array.prototype.indexOf.call(n, e) === t;
            }
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const n = this.mediaQueries[t],
            r = String.prototype.split.call(n, ","),
            i = window.matchMedia(r[0]),
            s = r[1],
            o = Array.prototype.filter.call(this.оbjects, function (e) {
              return e.breakpoint === s;
            });
          i.addListener(function () {
            e.mediaHandler(i, o);
          }),
            this.mediaHandler(i, o);
        }
      }),
        (e.prototype.mediaHandler = function (e, t) {
          if (e.matches)
            for (let e = 0; e < t.length; e++) {
              const n = t[e];
              (n.index = this.indexInParent(n.parent, n.element)),
                this.moveTo(n.place, n.element, n.destination);
            }
          else
            for (let e = t.length - 1; e >= 0; e--) {
              const n = t[e];
              n.element.classList.contains(this.daClassname) &&
                this.moveBack(n.parent, n.element, n.index);
            }
        }),
        (e.prototype.moveTo = function (e, t, n) {
          t.classList.add(this.daClassname),
            "last" === e || e >= n.children.length
              ? n.insertAdjacentElement("beforeend", t)
              : "first" !== e
              ? n.children[e].insertAdjacentElement("beforebegin", t)
              : n.insertAdjacentElement("afterbegin", t);
        }),
        (e.prototype.moveBack = function (e, t, n) {
          t.classList.remove(this.daClassname),
            void 0 !== e.children[n]
              ? e.children[n].insertAdjacentElement("beforebegin", t)
              : e.insertAdjacentElement("beforeend", t);
        }),
        (e.prototype.indexInParent = function (e, t) {
          const n = Array.prototype.slice.call(e.children);
          return Array.prototype.indexOf.call(n, t);
        }),
        (e.prototype.arraySort = function (e) {
          "min" === this.type
            ? Array.prototype.sort.call(e, function (e, t) {
                return e.breakpoint === t.breakpoint
                  ? e.place === t.place
                    ? 0
                    : "first" === e.place || "last" === t.place
                    ? -1
                    : "last" === e.place || "first" === t.place
                    ? 1
                    : e.place - t.place
                  : e.breakpoint - t.breakpoint;
              })
            : Array.prototype.sort.call(e, function (e, t) {
                return e.breakpoint === t.breakpoint
                  ? e.place === t.place
                    ? 0
                    : "first" === e.place || "last" === t.place
                    ? 1
                    : "last" === e.place || "first" === t.place
                    ? -1
                    : t.place - e.place
                  : t.breakpoint - e.breakpoint;
              });
        });
      new e("max").init();
      let t = (e, t = 500, n = 0) => {
          e.classList.contains("_slide") ||
            (e.classList.add("_slide"),
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = `${e.offsetHeight}px`),
            e.offsetHeight,
            (e.style.overflow = "hidden"),
            (e.style.height = n ? `${n}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            window.setTimeout(() => {
              (e.hidden = !n),
                !n && e.style.removeProperty("height"),
                e.style.removeProperty("padding-top"),
                e.style.removeProperty("padding-bottom"),
                e.style.removeProperty("margin-top"),
                e.style.removeProperty("margin-bottom"),
                !n && e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t));
        },
        r = (e, t = 500, n = 0) => {
          if (!e.classList.contains("_slide")) {
            e.classList.add("_slide"),
              (e.hidden = !e.hidden && null),
              n && e.style.removeProperty("height");
            let r = e.offsetHeight;
            (e.style.overflow = "hidden"),
              (e.style.height = n ? `${n}px` : "0px"),
              (e.style.paddingTop = 0),
              (e.style.paddingBottom = 0),
              (e.style.marginTop = 0),
              (e.style.marginBottom = 0),
              e.offsetHeight,
              (e.style.transitionProperty = "height, margin, padding"),
              (e.style.transitionDuration = t + "ms"),
              (e.style.height = r + "px"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              window.setTimeout(() => {
                e.style.removeProperty("height"),
                  e.style.removeProperty("overflow"),
                  e.style.removeProperty("transition-duration"),
                  e.style.removeProperty("transition-property"),
                  e.classList.remove("_slide");
              }, t);
          }
        },
        i = !0,
        s = (e = 500) => {
          let t = document.querySelector("body");
          if (i) {
            let n = document.querySelectorAll("[data-lp]");
            setTimeout(() => {
              for (let e = 0; e < n.length; e++) {
                n[e].style.paddingRight = "0px";
              }
              (t.style.paddingRight = "0px"),
                document.documentElement.classList.remove("lock");
            }, e),
              (i = !1),
              setTimeout(function () {
                i = !0;
              }, e);
          }
        },
        o = (e = 500) => {
          let t = document.querySelector("body");
          if (i) {
            let n = document.querySelectorAll("[data-lp]");
            for (let e = 0; e < n.length; e++) {
              n[e].style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px";
            }
            (t.style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px"),
              document.documentElement.classList.add("lock"),
              (i = !1),
              setTimeout(function () {
                i = !0;
              }, e);
          }
        };
      function a(e) {
        setTimeout(() => {
          window.FLS && console.log(e);
        }, 0);
      }
      function l(e, t) {
        const n = Array.from(e).filter(function (e, n, r) {
          if (e.dataset[t]) return e.dataset[t].split(",")[0];
        });
        if (n.length) {
          const e = [];
          n.forEach((n) => {
            const r = {},
              i = n.dataset[t].split(",");
            (r.value = i[0]),
              (r.type = i[1] ? i[1].trim() : "max"),
              (r.item = n),
              e.push(r);
          });
          let r = e.map(function (e) {
            return (
              "(" +
              e.type +
              "-width: " +
              e.value +
              "px)," +
              e.value +
              "," +
              e.type
            );
          });
          r = (function (e) {
            return e.filter(function (e, t, n) {
              return n.indexOf(e) === t;
            });
          })(r);
          const i = [];
          if (r.length)
            return (
              r.forEach((t) => {
                const n = t.split(","),
                  r = n[1],
                  s = n[2],
                  o = window.matchMedia(n[0]),
                  a = e.filter(function (e) {
                    if (e.value === r && e.type === s) return !0;
                  });
                i.push({ itemsArray: a, matchMedia: o });
              }),
              i
            );
        }
      }
      let c = (e, t = !1, n = 500, r = 0) => {
        const i = document.querySelector(e);
        if (i) {
          let o = "",
            l = 0;
          t &&
            ((o = "header.header"),
            (l = document.querySelector(o).offsetHeight));
          let c = {
            speedAsDuration: !0,
            speed: n,
            header: o,
            offset: r,
            easing: "easeOutQuad",
          };
          if (
            (document.documentElement.classList.contains("menu-open") &&
              (s(), document.documentElement.classList.remove("menu-open")),
            "undefined" != typeof SmoothScroll)
          )
            new SmoothScroll().animateScroll(i, "", c);
          else {
            let e = i.getBoundingClientRect().top + scrollY;
            window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
          }
          a(`[gotoBlock]: Юхуу...едем к ${e}`);
        } else a(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
      };
      function u(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function d(e) {
        return e instanceof u(e).Element || e instanceof Element;
      }
      function p(e) {
        return e instanceof u(e).HTMLElement || e instanceof HTMLElement;
      }
      function f(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof u(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var h = Math.max,
        v = Math.min,
        m = Math.round;
      function g() {
        var e = navigator.userAgentData;
        return null != e && e.brands
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function b() {
        return !/^((?!chrome|android).)*safari/i.test(g());
      }
      function y(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          i = 1,
          s = 1;
        t &&
          p(e) &&
          ((i = (e.offsetWidth > 0 && m(r.width) / e.offsetWidth) || 1),
          (s = (e.offsetHeight > 0 && m(r.height) / e.offsetHeight) || 1));
        var o = (d(e) ? u(e) : window).visualViewport,
          a = !b() && n,
          l = (r.left + (a && o ? o.offsetLeft : 0)) / i,
          c = (r.top + (a && o ? o.offsetTop : 0)) / s,
          f = r.width / i,
          h = r.height / s;
        return {
          width: f,
          height: h,
          top: c,
          right: l + f,
          bottom: c + h,
          left: l,
          x: l,
          y: c,
        };
      }
      function x(e) {
        var t = u(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function w(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function E(e) {
        return ((d(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function S(e) {
        return y(E(e)).left + x(e).scrollLeft;
      }
      function T(e) {
        return u(e).getComputedStyle(e);
      }
      function C(e) {
        var t = T(e),
          n = t.overflow,
          r = t.overflowX,
          i = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + i + r);
      }
      function O(e, t, n) {
        void 0 === n && (n = !1);
        var r,
          i,
          s = p(t),
          o =
            p(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = m(t.width) / e.offsetWidth || 1,
                r = m(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          a = E(t),
          l = y(e, o, n),
          c = { scrollLeft: 0, scrollTop: 0 },
          d = { x: 0, y: 0 };
        return (
          (s || (!s && !n)) &&
            (("body" !== w(t) || C(a)) &&
              (c =
                (r = t) !== u(r) && p(r)
                  ? { scrollLeft: (i = r).scrollLeft, scrollTop: i.scrollTop }
                  : x(r)),
            p(t)
              ? (((d = y(t, !0)).x += t.clientLeft), (d.y += t.clientTop))
              : a && (d.x = S(a))),
          {
            x: l.left + c.scrollLeft - d.x,
            y: l.top + c.scrollTop - d.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function k(e) {
        var t = y(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function L(e) {
        return "html" === w(e)
          ? e
          : e.assignedSlot || e.parentNode || (f(e) ? e.host : null) || E(e);
      }
      function A(e) {
        return ["html", "body", "#document"].indexOf(w(e)) >= 0
          ? e.ownerDocument.body
          : p(e) && C(e)
          ? e
          : A(L(e));
      }
      function M(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = A(e),
          i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          s = u(r),
          o = i ? [s].concat(s.visualViewport || [], C(r) ? r : []) : r,
          a = t.concat(o);
        return i ? a : a.concat(M(L(o)));
      }
      function P(e) {
        return ["table", "td", "th"].indexOf(w(e)) >= 0;
      }
      function _(e) {
        return p(e) && "fixed" !== T(e).position ? e.offsetParent : null;
      }
      function $(e) {
        for (var t = u(e), n = _(e); n && P(n) && "static" === T(n).position; )
          n = _(n);
        return n &&
          ("html" === w(n) || ("body" === w(n) && "static" === T(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(g());
                if (/Trident/i.test(g()) && p(e) && "fixed" === T(e).position)
                  return null;
                var n = L(e);
                for (
                  f(n) && (n = n.host);
                  p(n) && ["html", "body"].indexOf(w(n)) < 0;

                ) {
                  var r = T(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var j = "top",
        I = "bottom",
        z = "right",
        D = "left",
        N = "auto",
        R = [j, I, z, D],
        B = "start",
        W = "end",
        F = "viewport",
        H = "popper",
        V = R.reduce(function (e, t) {
          return e.concat([t + "-" + B, t + "-" + W]);
        }, []),
        G = [].concat(R, [N]).reduce(function (e, t) {
          return e.concat([t, t + "-" + B, t + "-" + W]);
        }, []),
        q = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function X(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        function i(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var r = t.get(e);
                  r && i(r);
                }
              }),
            r.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || i(e);
          }),
          r
        );
      }
      var Y = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function U() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function K(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          i = t.defaultOptions,
          s = void 0 === i ? Y : i;
        return function (e, t, n) {
          void 0 === n && (n = s);
          var i,
            o,
            a = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Y, s),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            u = {
              state: a,
              setOptions: function (n) {
                var i = "function" == typeof n ? n(a.options) : n;
                p(),
                  (a.options = Object.assign({}, s, a.options, i)),
                  (a.scrollParents = {
                    reference: d(e)
                      ? M(e)
                      : e.contextElement
                      ? M(e.contextElement)
                      : [],
                    popper: M(t),
                  });
                var o = (function (e) {
                  var t = X(e);
                  return q.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(r, a.options.modifiers))
                );
                return (
                  (a.orderedModifiers = o.filter(function (e) {
                    return e.enabled;
                  })),
                  a.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      i = e.effect;
                    if ("function" == typeof i) {
                      var s = i({ state: a, name: t, instance: u, options: r }),
                        o = function () {};
                      l.push(s || o);
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = a.elements,
                    t = e.reference,
                    n = e.popper;
                  if (U(t, n)) {
                    (a.rects = {
                      reference: O(t, $(n), "fixed" === a.options.strategy),
                      popper: k(n),
                    }),
                      (a.reset = !1),
                      (a.placement = a.options.placement),
                      a.orderedModifiers.forEach(function (e) {
                        return (a.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var r = 0; r < a.orderedModifiers.length; r++)
                      if (!0 !== a.reset) {
                        var i = a.orderedModifiers[r],
                          s = i.fn,
                          o = i.options,
                          l = void 0 === o ? {} : o,
                          d = i.name;
                        "function" == typeof s &&
                          (a =
                            s({ state: a, options: l, name: d, instance: u }) ||
                            a);
                      } else (a.reset = !1), (r = -1);
                  }
                }
              },
              update:
                ((i = function () {
                  return new Promise(function (e) {
                    u.forceUpdate(), e(a);
                  });
                }),
                function () {
                  return (
                    o ||
                      (o = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (o = void 0), e(i());
                        });
                      })),
                    o
                  );
                }),
              destroy: function () {
                p(), (c = !0);
              },
            };
          if (!U(e, t)) return u;
          function p() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            u.setOptions(n).then(function (e) {
              !c && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var Q = { passive: !0 };
      const J = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            r = e.options,
            i = r.scroll,
            s = void 0 === i || i,
            o = r.resize,
            a = void 0 === o || o,
            l = u(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            s &&
              c.forEach(function (e) {
                e.addEventListener("scroll", n.update, Q);
              }),
            a && l.addEventListener("resize", n.update, Q),
            function () {
              s &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, Q);
                }),
                a && l.removeEventListener("resize", n.update, Q);
            }
          );
        },
        data: {},
      };
      function Z(e) {
        return e.split("-")[0];
      }
      function ee(e) {
        return e.split("-")[1];
      }
      function te(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function ne(e) {
        var t,
          n = e.reference,
          r = e.element,
          i = e.placement,
          s = i ? Z(i) : null,
          o = i ? ee(i) : null,
          a = n.x + n.width / 2 - r.width / 2,
          l = n.y + n.height / 2 - r.height / 2;
        switch (s) {
          case j:
            t = { x: a, y: n.y - r.height };
            break;
          case I:
            t = { x: a, y: n.y + n.height };
            break;
          case z:
            t = { x: n.x + n.width, y: l };
            break;
          case D:
            t = { x: n.x - r.width, y: l };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var c = s ? te(s) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (o) {
            case B:
              t[c] = t[c] - (n[u] / 2 - r[u] / 2);
              break;
            case W:
              t[c] = t[c] + (n[u] / 2 - r[u] / 2);
          }
        }
        return t;
      }
      var re = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function ie(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          i = e.placement,
          s = e.variation,
          o = e.offsets,
          a = e.position,
          l = e.gpuAcceleration,
          c = e.adaptive,
          d = e.roundOffsets,
          p = e.isFixed,
          f = o.x,
          h = void 0 === f ? 0 : f,
          v = o.y,
          g = void 0 === v ? 0 : v,
          b = "function" == typeof d ? d({ x: h, y: g }) : { x: h, y: g };
        (h = b.x), (g = b.y);
        var y = o.hasOwnProperty("x"),
          x = o.hasOwnProperty("y"),
          w = D,
          S = j,
          C = window;
        if (c) {
          var O = $(n),
            k = "clientHeight",
            L = "clientWidth";
          if (
            (O === u(n) &&
              "static" !== T((O = E(n))).position &&
              "absolute" === a &&
              ((k = "scrollHeight"), (L = "scrollWidth")),
            i === j || ((i === D || i === z) && s === W))
          )
            (S = I),
              (g -=
                (p && O === C && C.visualViewport
                  ? C.visualViewport.height
                  : O[k]) - r.height),
              (g *= l ? 1 : -1);
          if (i === D || ((i === j || i === I) && s === W))
            (w = z),
              (h -=
                (p && O === C && C.visualViewport
                  ? C.visualViewport.width
                  : O[L]) - r.width),
              (h *= l ? 1 : -1);
        }
        var A,
          M = Object.assign({ position: a }, c && re),
          P =
            !0 === d
              ? (function (e) {
                  var t = e.x,
                    n = e.y,
                    r = window.devicePixelRatio || 1;
                  return { x: m(t * r) / r || 0, y: m(n * r) / r || 0 };
                })({ x: h, y: g })
              : { x: h, y: g };
        return (
          (h = P.x),
          (g = P.y),
          l
            ? Object.assign(
                {},
                M,
                (((A = {})[S] = x ? "0" : ""),
                (A[w] = y ? "0" : ""),
                (A.transform =
                  (C.devicePixelRatio || 1) <= 1
                    ? "translate(" + h + "px, " + g + "px)"
                    : "translate3d(" + h + "px, " + g + "px, 0)"),
                A)
              )
            : Object.assign(
                {},
                M,
                (((t = {})[S] = x ? g + "px" : ""),
                (t[w] = y ? h + "px" : ""),
                (t.transform = ""),
                t)
              )
        );
      }
      const se = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
              r = t.attributes[e] || {},
              i = t.elements[e];
            p(i) &&
              w(i) &&
              (Object.assign(i.style, n),
              Object.keys(r).forEach(function (e) {
                var t = r[e];
                !1 === t
                  ? i.removeAttribute(e)
                  : i.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var r = t.elements[e],
                  i = t.attributes[e] || {},
                  s = Object.keys(
                    t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                  ).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                p(r) &&
                  w(r) &&
                  (Object.assign(r.style, s),
                  Object.keys(i).forEach(function (e) {
                    r.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      const oe = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            i = n.offset,
            s = void 0 === i ? [0, 0] : i,
            o = G.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = Z(e),
                    i = [D, j].indexOf(r) >= 0 ? -1 : 1,
                    s =
                      "function" == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    o = s[0],
                    a = s[1];
                  return (
                    (o = o || 0),
                    (a = (a || 0) * i),
                    [D, z].indexOf(r) >= 0 ? { x: a, y: o } : { x: o, y: a }
                  );
                })(n, t.rects, s)),
                e
              );
            }, {}),
            a = o[t.placement],
            l = a.x,
            c = a.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += l),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[r] = o);
        },
      };
      var ae = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function le(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return ae[e];
        });
      }
      var ce = { start: "end", end: "start" };
      function ue(e) {
        return e.replace(/start|end/g, function (e) {
          return ce[e];
        });
      }
      function de(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && f(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function pe(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function fe(e, t, n) {
        return t === F
          ? pe(
              (function (e, t) {
                var n = u(e),
                  r = E(e),
                  i = n.visualViewport,
                  s = r.clientWidth,
                  o = r.clientHeight,
                  a = 0,
                  l = 0;
                if (i) {
                  (s = i.width), (o = i.height);
                  var c = b();
                  (c || (!c && "fixed" === t)) &&
                    ((a = i.offsetLeft), (l = i.offsetTop));
                }
                return { width: s, height: o, x: a + S(e), y: l };
              })(e, n)
            )
          : d(t)
          ? (function (e, t) {
              var n = y(e, !1, "fixed" === t);
              return (
                (n.top = n.top + e.clientTop),
                (n.left = n.left + e.clientLeft),
                (n.bottom = n.top + e.clientHeight),
                (n.right = n.left + e.clientWidth),
                (n.width = e.clientWidth),
                (n.height = e.clientHeight),
                (n.x = n.left),
                (n.y = n.top),
                n
              );
            })(t, n)
          : pe(
              (function (e) {
                var t,
                  n = E(e),
                  r = x(e),
                  i = null == (t = e.ownerDocument) ? void 0 : t.body,
                  s = h(
                    n.scrollWidth,
                    n.clientWidth,
                    i ? i.scrollWidth : 0,
                    i ? i.clientWidth : 0
                  ),
                  o = h(
                    n.scrollHeight,
                    n.clientHeight,
                    i ? i.scrollHeight : 0,
                    i ? i.clientHeight : 0
                  ),
                  a = -r.scrollLeft + S(e),
                  l = -r.scrollTop;
                return (
                  "rtl" === T(i || n).direction &&
                    (a += h(n.clientWidth, i ? i.clientWidth : 0) - s),
                  { width: s, height: o, x: a, y: l }
                );
              })(E(e))
            );
      }
      function he(e, t, n, r) {
        var i =
            "clippingParents" === t
              ? (function (e) {
                  var t = M(L(e)),
                    n =
                      ["absolute", "fixed"].indexOf(T(e).position) >= 0 && p(e)
                        ? $(e)
                        : e;
                  return d(n)
                    ? t.filter(function (e) {
                        return d(e) && de(e, n) && "body" !== w(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          s = [].concat(i, [n]),
          o = s[0],
          a = s.reduce(function (t, n) {
            var i = fe(e, n, r);
            return (
              (t.top = h(i.top, t.top)),
              (t.right = v(i.right, t.right)),
              (t.bottom = v(i.bottom, t.bottom)),
              (t.left = h(i.left, t.left)),
              t
            );
          }, fe(e, o, r));
        return (
          (a.width = a.right - a.left),
          (a.height = a.bottom - a.top),
          (a.x = a.left),
          (a.y = a.top),
          a
        );
      }
      function ve(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function me(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      function ge(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          i = void 0 === r ? e.placement : r,
          s = n.strategy,
          o = void 0 === s ? e.strategy : s,
          a = n.boundary,
          l = void 0 === a ? "clippingParents" : a,
          c = n.rootBoundary,
          u = void 0 === c ? F : c,
          p = n.elementContext,
          f = void 0 === p ? H : p,
          h = n.altBoundary,
          v = void 0 !== h && h,
          m = n.padding,
          g = void 0 === m ? 0 : m,
          b = ve("number" != typeof g ? g : me(g, R)),
          x = f === H ? "reference" : H,
          w = e.rects.popper,
          S = e.elements[v ? x : f],
          T = he(d(S) ? S : S.contextElement || E(e.elements.popper), l, u, o),
          C = y(e.elements.reference),
          O = ne({
            reference: C,
            element: w,
            strategy: "absolute",
            placement: i,
          }),
          k = pe(Object.assign({}, w, O)),
          L = f === H ? k : C,
          A = {
            top: T.top - L.top + b.top,
            bottom: L.bottom - T.bottom + b.bottom,
            left: T.left - L.left + b.left,
            right: L.right - T.right + b.right,
          },
          M = e.modifiersData.offset;
        if (f === H && M) {
          var P = M[i];
          Object.keys(A).forEach(function (e) {
            var t = [z, I].indexOf(e) >= 0 ? 1 : -1,
              n = [j, I].indexOf(e) >= 0 ? "y" : "x";
            A[e] += P[n] * t;
          });
        }
        return A;
      }
      function be(e, t, n) {
        return h(e, v(t, n));
      }
      const ye = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            i = n.mainAxis,
            s = void 0 === i || i,
            o = n.altAxis,
            a = void 0 !== o && o,
            l = n.boundary,
            c = n.rootBoundary,
            u = n.altBoundary,
            d = n.padding,
            p = n.tether,
            f = void 0 === p || p,
            m = n.tetherOffset,
            g = void 0 === m ? 0 : m,
            b = ge(t, {
              boundary: l,
              rootBoundary: c,
              padding: d,
              altBoundary: u,
            }),
            y = Z(t.placement),
            x = ee(t.placement),
            w = !x,
            E = te(y),
            S = "x" === E ? "y" : "x",
            T = t.modifiersData.popperOffsets,
            C = t.rects.reference,
            O = t.rects.popper,
            L =
              "function" == typeof g
                ? g(Object.assign({}, t.rects, { placement: t.placement }))
                : g,
            A =
              "number" == typeof L
                ? { mainAxis: L, altAxis: L }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, L),
            M = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            P = { x: 0, y: 0 };
          if (T) {
            if (s) {
              var _,
                N = "y" === E ? j : D,
                R = "y" === E ? I : z,
                W = "y" === E ? "height" : "width",
                F = T[E],
                H = F + b[N],
                V = F - b[R],
                G = f ? -O[W] / 2 : 0,
                q = x === B ? C[W] : O[W],
                X = x === B ? -O[W] : -C[W],
                Y = t.elements.arrow,
                U = f && Y ? k(Y) : { width: 0, height: 0 },
                K = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                Q = K[N],
                J = K[R],
                ne = be(0, C[W], U[W]),
                re = w
                  ? C[W] / 2 - G - ne - Q - A.mainAxis
                  : q - ne - Q - A.mainAxis,
                ie = w
                  ? -C[W] / 2 + G + ne + J + A.mainAxis
                  : X + ne + J + A.mainAxis,
                se = t.elements.arrow && $(t.elements.arrow),
                oe = se
                  ? "y" === E
                    ? se.clientTop || 0
                    : se.clientLeft || 0
                  : 0,
                ae = null != (_ = null == M ? void 0 : M[E]) ? _ : 0,
                le = F + ie - ae,
                ce = be(f ? v(H, F + re - ae - oe) : H, F, f ? h(V, le) : V);
              (T[E] = ce), (P[E] = ce - F);
            }
            if (a) {
              var ue,
                de = "x" === E ? j : D,
                pe = "x" === E ? I : z,
                fe = T[S],
                he = "y" === S ? "height" : "width",
                ve = fe + b[de],
                me = fe - b[pe],
                ye = -1 !== [j, D].indexOf(y),
                xe = null != (ue = null == M ? void 0 : M[S]) ? ue : 0,
                we = ye ? ve : fe - C[he] - O[he] - xe + A.altAxis,
                Ee = ye ? fe + C[he] + O[he] - xe - A.altAxis : me,
                Se =
                  f && ye
                    ? (function (e, t, n) {
                        var r = be(e, t, n);
                        return r > n ? n : r;
                      })(we, fe, Ee)
                    : be(f ? we : ve, fe, f ? Ee : me);
              (T[S] = Se), (P[S] = Se - fe);
            }
            t.modifiersData[r] = P;
          }
        },
        requiresIfExists: ["offset"],
      };
      const xe = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            r = e.name,
            i = e.options,
            s = n.elements.arrow,
            o = n.modifiersData.popperOffsets,
            a = Z(n.placement),
            l = te(a),
            c = [D, z].indexOf(a) >= 0 ? "height" : "width";
          if (s && o) {
            var u = (function (e, t) {
                return ve(
                  "number" !=
                    typeof (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e)
                    ? e
                    : me(e, R)
                );
              })(i.padding, n),
              d = k(s),
              p = "y" === l ? j : D,
              f = "y" === l ? I : z,
              h =
                n.rects.reference[c] +
                n.rects.reference[l] -
                o[l] -
                n.rects.popper[c],
              v = o[l] - n.rects.reference[l],
              m = $(s),
              g = m
                ? "y" === l
                  ? m.clientHeight || 0
                  : m.clientWidth || 0
                : 0,
              b = h / 2 - v / 2,
              y = u[p],
              x = g - d[c] - u[f],
              w = g / 2 - d[c] / 2 + b,
              E = be(y, w, x),
              S = l;
            n.modifiersData[r] =
              (((t = {})[S] = E), (t.centerOffset = E - w), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            de(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function we(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function Ee(e) {
        return [j, z, I, D].some(function (t) {
          return e[t] >= 0;
        });
      }
      var Se = K({
          defaultModifiers: [
            J,
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  n = e.name;
                t.modifiersData[n] = ne({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = n.gpuAcceleration,
                  i = void 0 === r || r,
                  s = n.adaptive,
                  o = void 0 === s || s,
                  a = n.roundOffsets,
                  l = void 0 === a || a,
                  c = {
                    placement: Z(t.placement),
                    variation: ee(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: i,
                    isFixed: "fixed" === t.options.strategy,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    ie(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: o,
                        roundOffsets: l,
                      })
                    )
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      ie(
                        Object.assign({}, c, {
                          offsets: t.modifiersData.arrow,
                          position: "absolute",
                          adaptive: !1,
                          roundOffsets: l,
                        })
                      )
                    )),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    { "data-popper-placement": t.placement }
                  ));
              },
              data: {},
            },
            se,
            oe,
            {
              name: "flip",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = e.name;
                if (!t.modifiersData[r]._skip) {
                  for (
                    var i = n.mainAxis,
                      s = void 0 === i || i,
                      o = n.altAxis,
                      a = void 0 === o || o,
                      l = n.fallbackPlacements,
                      c = n.padding,
                      u = n.boundary,
                      d = n.rootBoundary,
                      p = n.altBoundary,
                      f = n.flipVariations,
                      h = void 0 === f || f,
                      v = n.allowedAutoPlacements,
                      m = t.options.placement,
                      g = Z(m),
                      b =
                        l ||
                        (g === m || !h
                          ? [le(m)]
                          : (function (e) {
                              if (Z(e) === N) return [];
                              var t = le(e);
                              return [ue(e), t, ue(t)];
                            })(m)),
                      y = [m].concat(b).reduce(function (e, n) {
                        return e.concat(
                          Z(n) === N
                            ? (function (e, t) {
                                void 0 === t && (t = {});
                                var n = t,
                                  r = n.placement,
                                  i = n.boundary,
                                  s = n.rootBoundary,
                                  o = n.padding,
                                  a = n.flipVariations,
                                  l = n.allowedAutoPlacements,
                                  c = void 0 === l ? G : l,
                                  u = ee(r),
                                  d = u
                                    ? a
                                      ? V
                                      : V.filter(function (e) {
                                          return ee(e) === u;
                                        })
                                    : R,
                                  p = d.filter(function (e) {
                                    return c.indexOf(e) >= 0;
                                  });
                                0 === p.length && (p = d);
                                var f = p.reduce(function (t, n) {
                                  return (
                                    (t[n] = ge(e, {
                                      placement: n,
                                      boundary: i,
                                      rootBoundary: s,
                                      padding: o,
                                    })[Z(n)]),
                                    t
                                  );
                                }, {});
                                return Object.keys(f).sort(function (e, t) {
                                  return f[e] - f[t];
                                });
                              })(t, {
                                placement: n,
                                boundary: u,
                                rootBoundary: d,
                                padding: c,
                                flipVariations: h,
                                allowedAutoPlacements: v,
                              })
                            : n
                        );
                      }, []),
                      x = t.rects.reference,
                      w = t.rects.popper,
                      E = new Map(),
                      S = !0,
                      T = y[0],
                      C = 0;
                    C < y.length;
                    C++
                  ) {
                    var O = y[C],
                      k = Z(O),
                      L = ee(O) === B,
                      A = [j, I].indexOf(k) >= 0,
                      M = A ? "width" : "height",
                      P = ge(t, {
                        placement: O,
                        boundary: u,
                        rootBoundary: d,
                        altBoundary: p,
                        padding: c,
                      }),
                      _ = A ? (L ? z : D) : L ? I : j;
                    x[M] > w[M] && (_ = le(_));
                    var $ = le(_),
                      W = [];
                    if (
                      (s && W.push(P[k] <= 0),
                      a && W.push(P[_] <= 0, P[$] <= 0),
                      W.every(function (e) {
                        return e;
                      }))
                    ) {
                      (T = O), (S = !1);
                      break;
                    }
                    E.set(O, W);
                  }
                  if (S)
                    for (
                      var F = function (e) {
                          var t = y.find(function (t) {
                            var n = E.get(t);
                            if (n)
                              return n.slice(0, e).every(function (e) {
                                return e;
                              });
                          });
                          if (t) return (T = t), "break";
                        },
                        H = h ? 3 : 1;
                      H > 0;
                      H--
                    ) {
                      if ("break" === F(H)) break;
                    }
                  t.placement !== T &&
                    ((t.modifiersData[r]._skip = !0),
                    (t.placement = T),
                    (t.reset = !0));
                }
              },
              requiresIfExists: ["offset"],
              data: { _skip: !1 },
            },
            ye,
            xe,
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  i = t.rects.popper,
                  s = t.modifiersData.preventOverflow,
                  o = ge(t, { elementContext: "reference" }),
                  a = ge(t, { altBoundary: !0 }),
                  l = we(o, r),
                  c = we(a, i, s),
                  u = Ee(l),
                  d = Ee(c);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: l,
                  popperEscapeOffsets: c,
                  isReferenceHidden: u,
                  hasPopperEscaped: d,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": u,
                      "data-popper-escaped": d,
                    }
                  ));
              },
            },
          ],
        }),
        Te = "tippy-content",
        Ce = "tippy-backdrop",
        Oe = "tippy-arrow",
        ke = "tippy-svg-arrow",
        Le = { passive: !0, capture: !0 },
        Ae = function () {
          return document.body;
        };
      function Me(e, t, n) {
        if (Array.isArray(e)) {
          var r = e[t];
          return null == r ? (Array.isArray(n) ? n[t] : n) : r;
        }
        return e;
      }
      function Pe(e, t) {
        var n = {}.toString.call(e);
        return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
      }
      function _e(e, t) {
        return "function" == typeof e ? e.apply(void 0, t) : e;
      }
      function $e(e, t) {
        return 0 === t
          ? e
          : function (r) {
              clearTimeout(n),
                (n = setTimeout(function () {
                  e(r);
                }, t));
            };
        var n;
      }
      function je(e) {
        return [].concat(e);
      }
      function Ie(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function ze(e) {
        return e.split("-")[0];
      }
      function De(e) {
        return [].slice.call(e);
      }
      function Ne(e) {
        return Object.keys(e).reduce(function (t, n) {
          return void 0 !== e[n] && (t[n] = e[n]), t;
        }, {});
      }
      function Re() {
        return document.createElement("div");
      }
      function Be(e) {
        return ["Element", "Fragment"].some(function (t) {
          return Pe(e, t);
        });
      }
      function We(e) {
        return Pe(e, "MouseEvent");
      }
      function Fe(e) {
        return !(!e || !e._tippy || e._tippy.reference !== e);
      }
      function He(e) {
        return Be(e)
          ? [e]
          : (function (e) {
              return Pe(e, "NodeList");
            })(e)
          ? De(e)
          : Array.isArray(e)
          ? e
          : De(document.querySelectorAll(e));
      }
      function Ve(e, t) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = t + "ms");
        });
      }
      function Ge(e, t) {
        e.forEach(function (e) {
          e && e.setAttribute("data-state", t);
        });
      }
      function qe(e) {
        var t,
          n = je(e)[0];
        return null != n && null != (t = n.ownerDocument) && t.body
          ? n.ownerDocument
          : document;
      }
      function Xe(e, t, n) {
        var r = t + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
          e[r](t, n);
        });
      }
      function Ye(e, t) {
        for (var n = t; n; ) {
          var r;
          if (e.contains(n)) return !0;
          n =
            null == n.getRootNode || null == (r = n.getRootNode())
              ? void 0
              : r.host;
        }
        return !1;
      }
      var Ue = { isTouch: !1 },
        Ke = 0;
      function Qe() {
        Ue.isTouch ||
          ((Ue.isTouch = !0),
          window.performance && document.addEventListener("mousemove", Je));
      }
      function Je() {
        var e = performance.now();
        e - Ke < 20 &&
          ((Ue.isTouch = !1), document.removeEventListener("mousemove", Je)),
          (Ke = e);
      }
      function Ze() {
        var e = document.activeElement;
        if (Fe(e)) {
          var t = e._tippy;
          e.blur && !t.state.isVisible && e.blur();
        }
      }
      var et =
        !!("undefined" != typeof window && "undefined" != typeof document) &&
        !!window.msCrypto;
      var tt = {
          animateFill: !1,
          followCursor: !1,
          inlinePositioning: !1,
          sticky: !1,
        },
        nt = Object.assign(
          {
            appendTo: Ae,
            aria: { content: "auto", expanded: "auto" },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            onClickOutside: function () {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null,
          },
          tt,
          {
            allowHTML: !1,
            animation: "fade",
            arrow: !0,
            content: "",
            inertia: !1,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999,
          }
        ),
        rt = Object.keys(nt);
      function it(e) {
        var t = (e.plugins || []).reduce(function (t, n) {
          var r,
            i = n.name,
            s = n.defaultValue;
          i && (t[i] = void 0 !== e[i] ? e[i] : null != (r = nt[i]) ? r : s);
          return t;
        }, {});
        return Object.assign({}, e, t);
      }
      function st(e, t) {
        var n = Object.assign(
          {},
          t,
          { content: _e(t.content, [e]) },
          t.ignoreAttributes
            ? {}
            : (function (e, t) {
                return (
                  t
                    ? Object.keys(it(Object.assign({}, nt, { plugins: t })))
                    : rt
                ).reduce(function (t, n) {
                  var r = (e.getAttribute("data-tippy-" + n) || "").trim();
                  if (!r) return t;
                  if ("content" === n) t[n] = r;
                  else
                    try {
                      t[n] = JSON.parse(r);
                    } catch (e) {
                      t[n] = r;
                    }
                  return t;
                }, {});
              })(e, t.plugins)
        );
        return (
          (n.aria = Object.assign({}, nt.aria, n.aria)),
          (n.aria = {
            expanded:
              "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
            content:
              "auto" === n.aria.content
                ? t.interactive
                  ? null
                  : "describedby"
                : n.aria.content,
          }),
          n
        );
      }
      function ot(e, t) {
        e.innerHTML = t;
      }
      function at(e) {
        var t = Re();
        return (
          !0 === e
            ? (t.className = Oe)
            : ((t.className = ke), Be(e) ? t.appendChild(e) : ot(t, e)),
          t
        );
      }
      function lt(e, t) {
        Be(t.content)
          ? (ot(e, ""), e.appendChild(t.content))
          : "function" != typeof t.content &&
            (t.allowHTML ? ot(e, t.content) : (e.textContent = t.content));
      }
      function ct(e) {
        var t = e.firstElementChild,
          n = De(t.children);
        return {
          box: t,
          content: n.find(function (e) {
            return e.classList.contains(Te);
          }),
          arrow: n.find(function (e) {
            return e.classList.contains(Oe) || e.classList.contains(ke);
          }),
          backdrop: n.find(function (e) {
            return e.classList.contains(Ce);
          }),
        };
      }
      function ut(e) {
        var t = Re(),
          n = Re();
        (n.className = "tippy-box"),
          n.setAttribute("data-state", "hidden"),
          n.setAttribute("tabindex", "-1");
        var r = Re();
        function i(n, r) {
          var i = ct(t),
            s = i.box,
            o = i.content,
            a = i.arrow;
          r.theme
            ? s.setAttribute("data-theme", r.theme)
            : s.removeAttribute("data-theme"),
            "string" == typeof r.animation
              ? s.setAttribute("data-animation", r.animation)
              : s.removeAttribute("data-animation"),
            r.inertia
              ? s.setAttribute("data-inertia", "")
              : s.removeAttribute("data-inertia"),
            (s.style.maxWidth =
              "number" == typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth),
            r.role ? s.setAttribute("role", r.role) : s.removeAttribute("role"),
            (n.content === r.content && n.allowHTML === r.allowHTML) ||
              lt(o, e.props),
            r.arrow
              ? a
                ? n.arrow !== r.arrow &&
                  (s.removeChild(a), s.appendChild(at(r.arrow)))
                : s.appendChild(at(r.arrow))
              : a && s.removeChild(a);
        }
        return (
          (r.className = Te),
          r.setAttribute("data-state", "hidden"),
          lt(r, e.props),
          t.appendChild(n),
          n.appendChild(r),
          i(e.props, e.props),
          { popper: t, onUpdate: i }
        );
      }
      ut.$$tippy = !0;
      var dt = 1,
        pt = [],
        ft = [];
      function ht(e, t) {
        var n,
          r,
          i,
          s,
          o,
          a,
          l,
          c,
          u = st(e, Object.assign({}, nt, it(Ne(t)))),
          d = !1,
          p = !1,
          f = !1,
          h = !1,
          v = [],
          m = $e(X, u.interactiveDebounce),
          g = dt++,
          b = (c = u.plugins).filter(function (e, t) {
            return c.indexOf(e) === t;
          }),
          y = {
            id: g,
            reference: e,
            popper: Re(),
            popperInstance: null,
            props: u,
            state: {
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1,
            },
            plugins: b,
            clearDelayTimeouts: function () {
              clearTimeout(n), clearTimeout(r), cancelAnimationFrame(i);
            },
            setProps: function (t) {
              0;
              if (y.state.isDestroyed) return;
              $("onBeforeUpdate", [y, t]), G();
              var n = y.props,
                r = st(
                  e,
                  Object.assign({}, n, Ne(t), { ignoreAttributes: !0 })
                );
              (y.props = r),
                V(),
                n.interactiveDebounce !== r.interactiveDebounce &&
                  (z(), (m = $e(X, r.interactiveDebounce)));
              n.triggerTarget && !r.triggerTarget
                ? je(n.triggerTarget).forEach(function (e) {
                    e.removeAttribute("aria-expanded");
                  })
                : r.triggerTarget && e.removeAttribute("aria-expanded");
              I(), _(), E && E(n, r);
              y.popperInstance &&
                (Q(),
                Z().forEach(function (e) {
                  requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
                }));
              $("onAfterUpdate", [y, t]);
            },
            setContent: function (e) {
              y.setProps({ content: e });
            },
            show: function () {
              0;
              var e = y.state.isVisible,
                t = y.state.isDestroyed,
                n = !y.state.isEnabled,
                r = Ue.isTouch && !y.props.touch,
                i = Me(y.props.duration, 0, nt.duration);
              if (e || t || n || r) return;
              if (L().hasAttribute("disabled")) return;
              if (($("onShow", [y], !1), !1 === y.props.onShow(y))) return;
              (y.state.isVisible = !0), k() && (w.style.visibility = "visible");
              _(), B(), y.state.isMounted || (w.style.transition = "none");
              if (k()) {
                var s = M(),
                  o = s.box,
                  l = s.content;
                Ve([o, l], 0);
              }
              (a = function () {
                var e;
                if (y.state.isVisible && !h) {
                  if (
                    ((h = !0),
                    w.offsetHeight,
                    (w.style.transition = y.props.moveTransition),
                    k() && y.props.animation)
                  ) {
                    var t = M(),
                      n = t.box,
                      r = t.content;
                    Ve([n, r], i), Ge([n, r], "visible");
                  }
                  j(),
                    I(),
                    Ie(ft, y),
                    null == (e = y.popperInstance) || e.forceUpdate(),
                    $("onMount", [y]),
                    y.props.animation &&
                      k() &&
                      (function (e, t) {
                        F(e, t);
                      })(i, function () {
                        (y.state.isShown = !0), $("onShown", [y]);
                      });
                }
              }),
                (function () {
                  var e,
                    t = y.props.appendTo,
                    n = L();
                  e =
                    (y.props.interactive && t === Ae) || "parent" === t
                      ? n.parentNode
                      : _e(t, [n]);
                  e.contains(w) || e.appendChild(w);
                  (y.state.isMounted = !0), Q(), !1;
                })();
            },
            hide: function () {
              0;
              var e = !y.state.isVisible,
                t = y.state.isDestroyed,
                n = !y.state.isEnabled,
                r = Me(y.props.duration, 1, nt.duration);
              if (e || t || n) return;
              if (($("onHide", [y], !1), !1 === y.props.onHide(y))) return;
              (y.state.isVisible = !1),
                (y.state.isShown = !1),
                (h = !1),
                (d = !1),
                k() && (w.style.visibility = "hidden");
              if ((z(), W(), _(!0), k())) {
                var i = M(),
                  s = i.box,
                  o = i.content;
                y.props.animation && (Ve([s, o], r), Ge([s, o], "hidden"));
              }
              j(),
                I(),
                y.props.animation
                  ? k() &&
                    (function (e, t) {
                      F(e, function () {
                        !y.state.isVisible &&
                          w.parentNode &&
                          w.parentNode.contains(w) &&
                          t();
                      });
                    })(r, y.unmount)
                  : y.unmount();
            },
            hideWithInteractivity: function (e) {
              0;
              A().addEventListener("mousemove", m), Ie(pt, m), m(e);
            },
            enable: function () {
              y.state.isEnabled = !0;
            },
            disable: function () {
              y.hide(), (y.state.isEnabled = !1);
            },
            unmount: function () {
              0;
              y.state.isVisible && y.hide();
              if (!y.state.isMounted) return;
              J(),
                Z().forEach(function (e) {
                  e._tippy.unmount();
                }),
                w.parentNode && w.parentNode.removeChild(w);
              (ft = ft.filter(function (e) {
                return e !== y;
              })),
                (y.state.isMounted = !1),
                $("onHidden", [y]);
            },
            destroy: function () {
              0;
              if (y.state.isDestroyed) return;
              y.clearDelayTimeouts(),
                y.unmount(),
                G(),
                delete e._tippy,
                (y.state.isDestroyed = !0),
                $("onDestroy", [y]);
            },
          };
        if (!u.render) return y;
        var x = u.render(y),
          w = x.popper,
          E = x.onUpdate;
        w.setAttribute("data-tippy-root", ""),
          (w.id = "tippy-" + y.id),
          (y.popper = w),
          (e._tippy = y),
          (w._tippy = y);
        var S = b.map(function (e) {
            return e.fn(y);
          }),
          T = e.hasAttribute("aria-expanded");
        return (
          V(),
          I(),
          _(),
          $("onCreate", [y]),
          u.showOnCreate && ee(),
          w.addEventListener("mouseenter", function () {
            y.props.interactive && y.state.isVisible && y.clearDelayTimeouts();
          }),
          w.addEventListener("mouseleave", function () {
            y.props.interactive &&
              y.props.trigger.indexOf("mouseenter") >= 0 &&
              A().addEventListener("mousemove", m);
          }),
          y
        );
        function C() {
          var e = y.props.touch;
          return Array.isArray(e) ? e : [e, 0];
        }
        function O() {
          return "hold" === C()[0];
        }
        function k() {
          var e;
          return !(null == (e = y.props.render) || !e.$$tippy);
        }
        function L() {
          return l || e;
        }
        function A() {
          var e = L().parentNode;
          return e ? qe(e) : document;
        }
        function M() {
          return ct(w);
        }
        function P(e) {
          return (y.state.isMounted && !y.state.isVisible) ||
            Ue.isTouch ||
            (s && "focus" === s.type)
            ? 0
            : Me(y.props.delay, e ? 0 : 1, nt.delay);
        }
        function _(e) {
          void 0 === e && (e = !1),
            (w.style.pointerEvents = y.props.interactive && !e ? "" : "none"),
            (w.style.zIndex = "" + y.props.zIndex);
        }
        function $(e, t, n) {
          var r;
          (void 0 === n && (n = !0),
          S.forEach(function (n) {
            n[e] && n[e].apply(n, t);
          }),
          n) && (r = y.props)[e].apply(r, t);
        }
        function j() {
          var t = y.props.aria;
          if (t.content) {
            var n = "aria-" + t.content,
              r = w.id;
            je(y.props.triggerTarget || e).forEach(function (e) {
              var t = e.getAttribute(n);
              if (y.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);
              else {
                var i = t && t.replace(r, "").trim();
                i ? e.setAttribute(n, i) : e.removeAttribute(n);
              }
            });
          }
        }
        function I() {
          !T &&
            y.props.aria.expanded &&
            je(y.props.triggerTarget || e).forEach(function (e) {
              y.props.interactive
                ? e.setAttribute(
                    "aria-expanded",
                    y.state.isVisible && e === L() ? "true" : "false"
                  )
                : e.removeAttribute("aria-expanded");
            });
        }
        function z() {
          A().removeEventListener("mousemove", m),
            (pt = pt.filter(function (e) {
              return e !== m;
            }));
        }
        function D(t) {
          if (!Ue.isTouch || (!f && "mousedown" !== t.type)) {
            var n = (t.composedPath && t.composedPath()[0]) || t.target;
            if (!y.props.interactive || !Ye(w, n)) {
              if (
                je(y.props.triggerTarget || e).some(function (e) {
                  return Ye(e, n);
                })
              ) {
                if (Ue.isTouch) return;
                if (y.state.isVisible && y.props.trigger.indexOf("click") >= 0)
                  return;
              } else $("onClickOutside", [y, t]);
              !0 === y.props.hideOnClick &&
                (y.clearDelayTimeouts(),
                y.hide(),
                (p = !0),
                setTimeout(function () {
                  p = !1;
                }),
                y.state.isMounted || W());
            }
          }
        }
        function N() {
          f = !0;
        }
        function R() {
          f = !1;
        }
        function B() {
          var e = A();
          e.addEventListener("mousedown", D, !0),
            e.addEventListener("touchend", D, Le),
            e.addEventListener("touchstart", R, Le),
            e.addEventListener("touchmove", N, Le);
        }
        function W() {
          var e = A();
          e.removeEventListener("mousedown", D, !0),
            e.removeEventListener("touchend", D, Le),
            e.removeEventListener("touchstart", R, Le),
            e.removeEventListener("touchmove", N, Le);
        }
        function F(e, t) {
          var n = M().box;
          function r(e) {
            e.target === n && (Xe(n, "remove", r), t());
          }
          if (0 === e) return t();
          Xe(n, "remove", o), Xe(n, "add", r), (o = r);
        }
        function H(t, n, r) {
          void 0 === r && (r = !1),
            je(y.props.triggerTarget || e).forEach(function (e) {
              e.addEventListener(t, n, r),
                v.push({ node: e, eventType: t, handler: n, options: r });
            });
        }
        function V() {
          O() &&
            (H("touchstart", q, { passive: !0 }),
            H("touchend", Y, { passive: !0 })),
            (function (e) {
              return e.split(/\s+/).filter(Boolean);
            })(y.props.trigger).forEach(function (e) {
              if ("manual" !== e)
                switch ((H(e, q), e)) {
                  case "mouseenter":
                    H("mouseleave", Y);
                    break;
                  case "focus":
                    H(et ? "focusout" : "blur", U);
                    break;
                  case "focusin":
                    H("focusout", U);
                }
            });
        }
        function G() {
          v.forEach(function (e) {
            var t = e.node,
              n = e.eventType,
              r = e.handler,
              i = e.options;
            t.removeEventListener(n, r, i);
          }),
            (v = []);
        }
        function q(e) {
          var t,
            n = !1;
          if (y.state.isEnabled && !K(e) && !p) {
            var r = "focus" === (null == (t = s) ? void 0 : t.type);
            (s = e),
              (l = e.currentTarget),
              I(),
              !y.state.isVisible &&
                We(e) &&
                pt.forEach(function (t) {
                  return t(e);
                }),
              "click" === e.type &&
              (y.props.trigger.indexOf("mouseenter") < 0 || d) &&
              !1 !== y.props.hideOnClick &&
              y.state.isVisible
                ? (n = !0)
                : ee(e),
              "click" === e.type && (d = !n),
              n && !r && te(e);
          }
        }
        function X(e) {
          var t = e.target,
            n = L().contains(t) || w.contains(t);
          if ("mousemove" !== e.type || !n) {
            var r = Z()
              .concat(w)
              .map(function (e) {
                var t,
                  n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                return n
                  ? {
                      popperRect: e.getBoundingClientRect(),
                      popperState: n,
                      props: u,
                    }
                  : null;
              })
              .filter(Boolean);
            (function (e, t) {
              var n = t.clientX,
                r = t.clientY;
              return e.every(function (e) {
                var t = e.popperRect,
                  i = e.popperState,
                  s = e.props.interactiveBorder,
                  o = ze(i.placement),
                  a = i.modifiersData.offset;
                if (!a) return !0;
                var l = "bottom" === o ? a.top.y : 0,
                  c = "top" === o ? a.bottom.y : 0,
                  u = "right" === o ? a.left.x : 0,
                  d = "left" === o ? a.right.x : 0,
                  p = t.top - r + l > s,
                  f = r - t.bottom - c > s,
                  h = t.left - n + u > s,
                  v = n - t.right - d > s;
                return p || f || h || v;
              });
            })(r, e) && (z(), te(e));
          }
        }
        function Y(e) {
          K(e) ||
            (y.props.trigger.indexOf("click") >= 0 && d) ||
            (y.props.interactive ? y.hideWithInteractivity(e) : te(e));
        }
        function U(e) {
          (y.props.trigger.indexOf("focusin") < 0 && e.target !== L()) ||
            (y.props.interactive &&
              e.relatedTarget &&
              w.contains(e.relatedTarget)) ||
            te(e);
        }
        function K(e) {
          return !!Ue.isTouch && O() !== e.type.indexOf("touch") >= 0;
        }
        function Q() {
          J();
          var t = y.props,
            n = t.popperOptions,
            r = t.placement,
            i = t.offset,
            s = t.getReferenceClientRect,
            o = t.moveTransition,
            l = k() ? ct(w).arrow : null,
            c = s
              ? {
                  getBoundingClientRect: s,
                  contextElement: s.contextElement || L(),
                }
              : e,
            u = {
              name: "$$tippy",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function (e) {
                var t = e.state;
                if (k()) {
                  var n = M().box;
                  ["placement", "reference-hidden", "escaped"].forEach(
                    function (e) {
                      "placement" === e
                        ? n.setAttribute("data-placement", t.placement)
                        : t.attributes.popper["data-popper-" + e]
                        ? n.setAttribute("data-" + e, "")
                        : n.removeAttribute("data-" + e);
                    }
                  ),
                    (t.attributes.popper = {});
                }
              },
            },
            d = [
              { name: "offset", options: { offset: i } },
              {
                name: "preventOverflow",
                options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
              },
              { name: "flip", options: { padding: 5 } },
              { name: "computeStyles", options: { adaptive: !o } },
              u,
            ];
          k() &&
            l &&
            d.push({ name: "arrow", options: { element: l, padding: 3 } }),
            d.push.apply(d, (null == n ? void 0 : n.modifiers) || []),
            (y.popperInstance = Se(
              c,
              w,
              Object.assign({}, n, {
                placement: r,
                onFirstUpdate: a,
                modifiers: d,
              })
            ));
        }
        function J() {
          y.popperInstance &&
            (y.popperInstance.destroy(), (y.popperInstance = null));
        }
        function Z() {
          return De(w.querySelectorAll("[data-tippy-root]"));
        }
        function ee(e) {
          y.clearDelayTimeouts(), e && $("onTrigger", [y, e]), B();
          var t = P(!0),
            r = C(),
            i = r[0],
            s = r[1];
          Ue.isTouch && "hold" === i && s && (t = s),
            t
              ? (n = setTimeout(function () {
                  y.show();
                }, t))
              : y.show();
        }
        function te(e) {
          if (
            (y.clearDelayTimeouts(),
            $("onUntrigger", [y, e]),
            y.state.isVisible)
          ) {
            if (
              !(
                y.props.trigger.indexOf("mouseenter") >= 0 &&
                y.props.trigger.indexOf("click") >= 0 &&
                ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
                d
              )
            ) {
              var t = P(!1);
              t
                ? (r = setTimeout(function () {
                    y.state.isVisible && y.hide();
                  }, t))
                : (i = requestAnimationFrame(function () {
                    y.hide();
                  }));
            }
          } else W();
        }
      }
      function vt(e, t) {
        void 0 === t && (t = {});
        var n = nt.plugins.concat(t.plugins || []);
        document.addEventListener("touchstart", Qe, Le),
          window.addEventListener("blur", Ze);
        var r = Object.assign({}, t, { plugins: n }),
          i = He(e).reduce(function (e, t) {
            var n = t && ht(t, r);
            return n && e.push(n), e;
          }, []);
        return Be(e) ? i[0] : i;
      }
      (vt.defaultProps = nt),
        (vt.setDefaultProps = function (e) {
          Object.keys(e).forEach(function (t) {
            nt[t] = e[t];
          });
        }),
        (vt.currentInput = Ue);
      Object.assign({}, se, {
        effect: function (e) {
          var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow);
        },
      });
      vt.setDefaultProps({ render: ut });
      function mt(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function gt(e = {}, t = {}) {
        Object.keys(t).forEach((n) => {
          void 0 === e[n]
            ? (e[n] = t[n])
            : mt(t[n]) &&
              mt(e[n]) &&
              Object.keys(t[n]).length > 0 &&
              gt(e[n], t[n]);
        });
      }
      vt("[data-tippy-content]", {});
      const bt = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function yt() {
        const e = "undefined" != typeof document ? document : {};
        return gt(e, bt), e;
      }
      const xt = {
        document: bt,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function wt() {
        const e = "undefined" != typeof window ? window : {};
        return gt(e, xt), e;
      }
      class Et extends Array {
        constructor(e) {
          "number" == typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function St(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...St(e)) : t.push(e);
          }),
          t
        );
      }
      function Tt(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function Ct(e, t) {
        const n = wt(),
          r = yt();
        let i = [];
        if (!t && e instanceof Et) return e;
        if (!e) return new Et(i);
        if ("string" == typeof e) {
          const n = e.trim();
          if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
            let e = "div";
            0 === n.indexOf("<li") && (e = "ul"),
              0 === n.indexOf("<tr") && (e = "tbody"),
              (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
              0 === n.indexOf("<tbody") && (e = "table"),
              0 === n.indexOf("<option") && (e = "select");
            const t = r.createElement(e);
            t.innerHTML = n;
            for (let e = 0; e < t.childNodes.length; e += 1)
              i.push(t.childNodes[e]);
          } else
            i = (function (e, t) {
              if ("string" != typeof e) return [e];
              const n = [],
                r = t.querySelectorAll(e);
              for (let e = 0; e < r.length; e += 1) n.push(r[e]);
              return n;
            })(e.trim(), t || r);
        } else if (e.nodeType || e === n || e === r) i.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof Et) return e;
          i = e;
        }
        return new Et(
          (function (e) {
            const t = [];
            for (let n = 0; n < e.length; n += 1)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(i)
        );
      }
      Ct.fn = Et.prototype;
      const Ot = "resize scroll".split(" ");
      function kt(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              Ot.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : Ct(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      kt("click"),
        kt("blur"),
        kt("focus"),
        kt("focusin"),
        kt("focusout"),
        kt("keyup"),
        kt("keydown"),
        kt("keypress"),
        kt("submit"),
        kt("change"),
        kt("mousedown"),
        kt("mousemove"),
        kt("mouseup"),
        kt("mouseenter"),
        kt("mouseleave"),
        kt("mouseout"),
        kt("mouseover"),
        kt("touchstart"),
        kt("touchend"),
        kt("touchmove"),
        kt("resize"),
        kt("scroll");
      const Lt = {
        addClass: function (...e) {
          const t = St(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = St(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = St(e.map((e) => e.split(" ")));
          return (
            Tt(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = St(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (const t in e)
                (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, n, r, i] = e;
          function s(e) {
            const t = e.target;
            if (!t) return;
            const i = e.target.dom7EventData || [];
            if ((i.indexOf(e) < 0 && i.unshift(e), Ct(t).is(n))) r.apply(t, i);
            else {
              const e = Ct(t).parents();
              for (let t = 0; t < e.length; t += 1)
                Ct(e[t]).is(n) && r.apply(e[t], i);
            }
          }
          function o(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
          }
          "function" == typeof e[1] && (([t, r, i] = e), (n = void 0)),
            i || (i = !1);
          const a = t.split(" ");
          let l;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (n)
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: r,
                    proxyListener: s,
                  }),
                  t.addEventListener(e, s, i);
              }
            else
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: r, proxyListener: o }),
                  t.addEventListener(e, o, i);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, n, r, i] = e;
          "function" == typeof e[1] && (([t, r, i] = e), (n = void 0)),
            i || (i = !1);
          const s = t.split(" ");
          for (let e = 0; e < s.length; e += 1) {
            const t = s[e];
            for (let e = 0; e < this.length; e += 1) {
              const s = this[e];
              let o;
              if (
                (!n && s.dom7Listeners
                  ? (o = s.dom7Listeners[t])
                  : n && s.dom7LiveListeners && (o = s.dom7LiveListeners[t]),
                o && o.length)
              )
                for (let e = o.length - 1; e >= 0; e -= 1) {
                  const n = o[e];
                  (r && n.listener === r) ||
                  (r &&
                    n.listener &&
                    n.listener.dom7proxy &&
                    n.listener.dom7proxy === r)
                    ? (s.removeEventListener(t, n.proxyListener, i),
                      o.splice(e, 1))
                    : r ||
                      (s.removeEventListener(t, n.proxyListener, i),
                      o.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = wt(),
            n = e[0].split(" "),
            r = e[1];
          for (let i = 0; i < n.length; i += 1) {
            const s = n[i];
            for (let n = 0; n < this.length; n += 1) {
              const i = this[n];
              if (t.CustomEvent) {
                const n = new t.CustomEvent(s, {
                  detail: r,
                  bubbles: !0,
                  cancelable: !0,
                });
                (i.dom7EventData = e.filter((e, t) => t > 0)),
                  i.dispatchEvent(n),
                  (i.dom7EventData = []),
                  delete i.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function n(r) {
                r.target === this &&
                  (e.call(this, r), t.off("transitionend", n));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = wt();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = wt(),
              t = yt(),
              n = this[0],
              r = n.getBoundingClientRect(),
              i = t.body,
              s = n.clientTop || i.clientTop || 0,
              o = n.clientLeft || i.clientLeft || 0,
              a = n === e ? e.scrollY : n.scrollTop,
              l = n === e ? e.scrollX : n.scrollLeft;
            return { top: r.top + a - s, left: r.left + l - o };
          }
          return null;
        },
        css: function (e, t) {
          const n = wt();
          let r;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (r = 0; r < this.length; r += 1)
                for (const t in e) this[r].style[t] = e[t];
              return this;
            }
            if (this[0])
              return n.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, n) => {
                e.apply(t, [t, n]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = wt(),
            n = yt(),
            r = this[0];
          let i, s;
          if (!r || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (r.matches) return r.matches(e);
            if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
            if (r.msMatchesSelector) return r.msMatchesSelector(e);
            for (i = Ct(e), s = 0; s < i.length; s += 1)
              if (i[s] === r) return !0;
            return !1;
          }
          if (e === n) return r === n;
          if (e === t) return r === t;
          if (e.nodeType || e instanceof Et) {
            for (i = e.nodeType ? [e] : e, s = 0; s < i.length; s += 1)
              if (i[s] === r) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return Ct([]);
          if (e < 0) {
            const n = t + e;
            return Ct(n < 0 ? [] : [this[n]]);
          }
          return Ct([this[e]]);
        },
        append: function (...e) {
          let t;
          const n = yt();
          for (let r = 0; r < e.length; r += 1) {
            t = e[r];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const r = n.createElement("div");
                for (r.innerHTML = t; r.firstChild; )
                  this[e].appendChild(r.firstChild);
              } else if (t instanceof Et)
                for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = yt();
          let n, r;
          for (n = 0; n < this.length; n += 1)
            if ("string" == typeof e) {
              const i = t.createElement("div");
              for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1)
                this[n].insertBefore(i.childNodes[r], this[n].childNodes[0]);
            } else if (e instanceof Et)
              for (r = 0; r < e.length; r += 1)
                this[n].insertBefore(e[r], this[n].childNodes[0]);
            else this[n].insertBefore(e, this[n].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                Ct(this[0].nextElementSibling).is(e)
                ? Ct([this[0].nextElementSibling])
                : Ct([])
              : this[0].nextElementSibling
              ? Ct([this[0].nextElementSibling])
              : Ct([])
            : Ct([]);
        },
        nextAll: function (e) {
          const t = [];
          let n = this[0];
          if (!n) return Ct([]);
          for (; n.nextElementSibling; ) {
            const r = n.nextElementSibling;
            e ? Ct(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return Ct(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && Ct(t.previousElementSibling).is(e)
                ? Ct([t.previousElementSibling])
                : Ct([])
              : t.previousElementSibling
              ? Ct([t.previousElementSibling])
              : Ct([]);
          }
          return Ct([]);
        },
        prevAll: function (e) {
          const t = [];
          let n = this[0];
          if (!n) return Ct([]);
          for (; n.previousElementSibling; ) {
            const r = n.previousElementSibling;
            e ? Ct(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return Ct(t);
        },
        parent: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? Ct(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return Ct(t);
        },
        parents: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            let r = this[n].parentNode;
            for (; r; )
              e ? Ct(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
          }
          return Ct(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? Ct([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const r = this[n].querySelectorAll(e);
            for (let e = 0; e < r.length; e += 1) t.push(r[e]);
          }
          return Ct(t);
        },
        children: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const r = this[n].children;
            for (let n = 0; n < r.length; n += 1)
              (e && !Ct(r[n]).is(e)) || t.push(r[n]);
          }
          return Ct(t);
        },
        filter: function (e) {
          return Ct(Tt(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(Lt).forEach((e) => {
        Object.defineProperty(Ct.fn, e, { value: Lt[e], writable: !0 });
      });
      const At = Ct;
      function Mt(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function Pt() {
        return Date.now();
      }
      function _t(e, t) {
        void 0 === t && (t = "x");
        const n = wt();
        let r, i, s;
        const o = (function (e) {
          const t = wt();
          let n;
          return (
            t.getComputedStyle && (n = t.getComputedStyle(e, null)),
            !n && e.currentStyle && (n = e.currentStyle),
            n || (n = e.style),
            n
          );
        })(e);
        return (
          n.WebKitCSSMatrix
            ? ((i = o.transform || o.webkitTransform),
              i.split(",").length > 6 &&
                (i = i
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (s = new n.WebKitCSSMatrix("none" === i ? "" : i)))
            : ((s =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (r = s.toString().split(","))),
          "x" === t &&
            (i = n.WebKitCSSMatrix
              ? s.m41
              : 16 === r.length
              ? parseFloat(r[12])
              : parseFloat(r[4])),
          "y" === t &&
            (i = n.WebKitCSSMatrix
              ? s.m42
              : 16 === r.length
              ? parseFloat(r[13])
              : parseFloat(r[5])),
          i || 0
        );
      }
      function $t(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function jt(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function It() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < arguments.length; n += 1) {
          const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (null != r && !jt(r)) {
            const n = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, i = n.length; t < i; t += 1) {
              const i = n[t],
                s = Object.getOwnPropertyDescriptor(r, i);
              void 0 !== s &&
                s.enumerable &&
                ($t(e[i]) && $t(r[i])
                  ? r[i].__swiper__
                    ? (e[i] = r[i])
                    : It(e[i], r[i])
                  : !$t(e[i]) && $t(r[i])
                  ? ((e[i] = {}),
                    r[i].__swiper__ ? (e[i] = r[i]) : It(e[i], r[i]))
                  : (e[i] = r[i]));
            }
          }
        }
        return e;
      }
      function zt(e, t, n) {
        e.style.setProperty(t, n);
      }
      function Dt(e) {
        let { swiper: t, targetPosition: n, side: r } = e;
        const i = wt(),
          s = -t.translate;
        let o,
          a = null;
        const l = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          i.cancelAnimationFrame(t.cssModeFrameID);
        const c = n > s ? "next" : "prev",
          u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          d = () => {
            (o = new Date().getTime()), null === a && (a = o);
            const e = Math.max(Math.min((o - a) / l, 1), 0),
              c = 0.5 - Math.cos(e * Math.PI) / 2;
            let p = s + c * (n - s);
            if ((u(p, n) && (p = n), t.wrapperEl.scrollTo({ [r]: p }), u(p, n)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [r]: p });
                }),
                void i.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = i.requestAnimationFrame(d);
          };
        d();
      }
      let Nt, Rt, Bt;
      function Wt() {
        return (
          Nt ||
            (Nt = (function () {
              const e = wt(),
                t = yt();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const n = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, n);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          Nt
        );
      }
      function Ft(e) {
        return (
          void 0 === e && (e = {}),
          Rt ||
            (Rt = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const n = Wt(),
                r = wt(),
                i = r.navigator.platform,
                s = t || r.navigator.userAgent,
                o = { ios: !1, android: !1 },
                a = r.screen.width,
                l = r.screen.height,
                c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
              let u = s.match(/(iPad).*OS\s([\d_]+)/);
              const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = "Win32" === i;
              let h = "MacIntel" === i;
              return (
                !u &&
                  h &&
                  n.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${a}x${l}`) >= 0 &&
                  ((u = s.match(/(Version)\/([\d.]+)/)),
                  u || (u = [0, 1, "13_0_0"]),
                  (h = !1)),
                c && !f && ((o.os = "android"), (o.android = !0)),
                (u || p || d) && ((o.os = "ios"), (o.ios = !0)),
                o
              );
            })(e)),
          Rt
        );
      }
      function Ht() {
        return (
          Bt ||
            (Bt = (function () {
              const e = wt();
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          Bt
        );
      }
      const Vt = {
        on(e, t, n) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof t) return r;
          const i = n ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][i](t);
            }),
            r
          );
        },
        once(e, t, n) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof t) return r;
          function i() {
            r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++)
              s[o] = arguments[o];
            t.apply(r, s);
          }
          return (i.__emitterProxy = t), r.on(e, i, n);
        },
        onAny(e, t) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" != typeof e) return n;
          const r = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off(e, t) {
          const n = this;
          return !n.eventsListeners || n.destroyed
            ? n
            : n.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach((r, i) => {
                      (r === t ||
                        (r.__emitterProxy && r.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(i, 1);
                    });
              }),
              n)
            : n;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, n, r;
          for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
            s[o] = arguments[o];
          "string" == typeof s[0] || Array.isArray(s[0])
            ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
            : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
            n.unshift(r);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(r, [t, ...n]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(r, n);
                  });
            }),
            e
          );
        },
      };
      const Gt = {
        updateSize: function () {
          const e = this;
          let t, n;
          const r = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : r[0].clientWidth),
            (n =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : r[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === n && e.isVertical()) ||
              ((t =
                t -
                parseInt(r.css("padding-left") || 0, 10) -
                parseInt(r.css("padding-right") || 0, 10)),
              (n =
                n -
                parseInt(r.css("padding-top") || 0, 10) -
                parseInt(r.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(n) && (n = 0),
              Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          const r = e.params,
            { $wrapperEl: i, size: s, rtlTranslate: o, wrongRTL: a } = e,
            l = e.virtual && r.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            u = i.children(`.${e.params.slideClass}`),
            d = l ? e.virtual.slides.length : u.length;
          let p = [];
          const f = [],
            h = [];
          let v = r.slidesOffsetBefore;
          "function" == typeof v && (v = r.slidesOffsetBefore.call(e));
          let m = r.slidesOffsetAfter;
          "function" == typeof m && (m = r.slidesOffsetAfter.call(e));
          const g = e.snapGrid.length,
            b = e.slidesGrid.length;
          let y = r.spaceBetween,
            x = -v,
            w = 0,
            E = 0;
          if (void 0 === s) return;
          "string" == typeof y &&
            y.indexOf("%") >= 0 &&
            (y = (parseFloat(y.replace("%", "")) / 100) * s),
            (e.virtualSize = -y),
            o
              ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            r.centeredSlides &&
              r.cssMode &&
              (zt(e.wrapperEl, "--swiper-centered-offset-before", ""),
              zt(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const S = r.grid && r.grid.rows > 1 && e.grid;
          let T;
          S && e.grid.initSlides(d);
          const C =
            "auto" === r.slidesPerView &&
            r.breakpoints &&
            Object.keys(r.breakpoints).filter(
              (e) => void 0 !== r.breakpoints[e].slidesPerView
            ).length > 0;
          for (let i = 0; i < d; i += 1) {
            T = 0;
            const o = u.eq(i);
            if (
              (S && e.grid.updateSlide(i, o, d, t), "none" !== o.css("display"))
            ) {
              if ("auto" === r.slidesPerView) {
                C && (u[i].style[t("width")] = "");
                const s = getComputedStyle(o[0]),
                  a = o[0].style.transform,
                  l = o[0].style.webkitTransform;
                if (
                  (a && (o[0].style.transform = "none"),
                  l && (o[0].style.webkitTransform = "none"),
                  r.roundLengths)
                )
                  T = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                else {
                  const e = n(s, "width"),
                    t = n(s, "padding-left"),
                    r = n(s, "padding-right"),
                    i = n(s, "margin-left"),
                    a = n(s, "margin-right"),
                    l = s.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) T = e + i + a;
                  else {
                    const { clientWidth: n, offsetWidth: s } = o[0];
                    T = e + t + r + i + a + (s - n);
                  }
                }
                a && (o[0].style.transform = a),
                  l && (o[0].style.webkitTransform = l),
                  r.roundLengths && (T = Math.floor(T));
              } else
                (T = (s - (r.slidesPerView - 1) * y) / r.slidesPerView),
                  r.roundLengths && (T = Math.floor(T)),
                  u[i] && (u[i].style[t("width")] = `${T}px`);
              u[i] && (u[i].swiperSlideSize = T),
                h.push(T),
                r.centeredSlides
                  ? ((x = x + T / 2 + w / 2 + y),
                    0 === w && 0 !== i && (x = x - s / 2 - y),
                    0 === i && (x = x - s / 2 - y),
                    Math.abs(x) < 0.001 && (x = 0),
                    r.roundLengths && (x = Math.floor(x)),
                    E % r.slidesPerGroup == 0 && p.push(x),
                    f.push(x))
                  : (r.roundLengths && (x = Math.floor(x)),
                    (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                      e.params.slidesPerGroup ==
                      0 && p.push(x),
                    f.push(x),
                    (x = x + T + y)),
                (e.virtualSize += T + y),
                (w = T),
                (E += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, s) + m),
            o &&
              a &&
              ("slide" === r.effect || "coverflow" === r.effect) &&
              i.css({ width: `${e.virtualSize + r.spaceBetween}px` }),
            r.setWrapperSize &&
              i.css({ [t("width")]: `${e.virtualSize + r.spaceBetween}px` }),
            S && e.grid.updateWrapperSize(T, p, t),
            !r.centeredSlides)
          ) {
            const t = [];
            for (let n = 0; n < p.length; n += 1) {
              let i = p[n];
              r.roundLengths && (i = Math.floor(i)),
                p[n] <= e.virtualSize - s && t.push(i);
            }
            (p = t),
              Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(e.virtualSize - s);
          }
          if ((0 === p.length && (p = [0]), 0 !== r.spaceBetween)) {
            const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            u.filter((e, t) => !r.cssMode || t !== u.length - 1).css({
              [n]: `${y}px`,
            });
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let e = 0;
            h.forEach((t) => {
              e += t + (r.spaceBetween ? r.spaceBetween : 0);
            }),
              (e -= r.spaceBetween);
            const t = e - s;
            p = p.map((e) => (e < 0 ? -v : e > t ? t + m : e));
          }
          if (r.centerInsufficientSlides) {
            let e = 0;
            if (
              (h.forEach((t) => {
                e += t + (r.spaceBetween ? r.spaceBetween : 0);
              }),
              (e -= r.spaceBetween),
              e < s)
            ) {
              const t = (s - e) / 2;
              p.forEach((e, n) => {
                p[n] = e - t;
              }),
                f.forEach((e, n) => {
                  f[n] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: u,
              snapGrid: p,
              slidesGrid: f,
              slidesSizesGrid: h,
            }),
            r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
          ) {
            zt(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
              zt(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - h[h.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              n = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + n));
          }
          if (
            (d !== c && e.emit("slidesLengthChange"),
            p.length !== g &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            f.length !== b && e.emit("slidesGridLengthChange"),
            r.watchSlidesProgress && e.updateSlidesOffset(),
            !(l || r.cssMode || ("slide" !== r.effect && "fade" !== r.effect)))
          ) {
            const t = `${r.containerModifierClass}backface-hidden`,
              n = e.$el.hasClass(t);
            d <= r.maxBackfaceHiddenSlides
              ? n || e.$el.addClass(t)
              : n && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            n = [],
            r = t.virtual && t.params.virtual.enabled;
          let i,
            s = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const o = (e) =>
            r
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || At([])).each((e) => {
                n.push(e);
              });
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !r) break;
                n.push(o(e));
              }
          else n.push(o(t.activeIndex));
          for (i = 0; i < n.length; i += 1)
            if (void 0 !== n[i]) {
              const e = n[i].offsetHeight;
              s = e > s ? e : s;
            }
          (s || 0 === s) && t.$wrapperEl.css("height", `${s}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let n = 0; n < t.length; n += 1)
            t[n].swiperSlideOffset = e.isHorizontal()
              ? t[n].offsetLeft
              : t[n].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            n = t.params,
            { slides: r, rtlTranslate: i, snapGrid: s } = t;
          if (0 === r.length) return;
          void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          i && (o = e),
            r.removeClass(n.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < r.length; e += 1) {
            const a = r[e];
            let l = a.swiperSlideOffset;
            n.cssMode && n.centeredSlides && (l -= r[0].swiperSlideOffset);
            const c =
                (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + n.spaceBetween),
              u =
                (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + n.spaceBetween),
              d = -(o - l),
              p = d + t.slidesSizesGrid[e];
            ((d >= 0 && d < t.size - 1) ||
              (p > 1 && p <= t.size) ||
              (d <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(a),
              t.visibleSlidesIndexes.push(e),
              r.eq(e).addClass(n.slideVisibleClass)),
              (a.progress = i ? -c : c),
              (a.originalProgress = i ? -u : u);
          }
          t.visibleSlides = At(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          const n = t.params,
            r = t.maxTranslate() - t.minTranslate();
          let { progress: i, isBeginning: s, isEnd: o } = t;
          const a = s,
            l = o;
          0 === r
            ? ((i = 0), (s = !0), (o = !0))
            : ((i = (e - t.minTranslate()) / r), (s = i <= 0), (o = i >= 1)),
            Object.assign(t, { progress: i, isBeginning: s, isEnd: o }),
            (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
              t.updateSlidesProgress(e),
            s && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            ((a && !s) || (l && !o)) && t.emit("fromEdge"),
            t.emit("progress", i);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: n,
              $wrapperEl: r,
              activeIndex: i,
              realIndex: s,
            } = e,
            o = e.virtual && n.virtual.enabled;
          let a;
          t.removeClass(
            `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
          ),
            (a = o
              ? e.$wrapperEl.find(
                  `.${n.slideClass}[data-swiper-slide-index="${i}"]`
                )
              : t.eq(i)),
            a.addClass(n.slideActiveClass),
            n.loop &&
              (a.hasClass(n.slideDuplicateClass)
                ? r
                    .children(
                      `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass)
                : r
                    .children(
                      `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${n.slideClass}`)
            .eq(0)
            .addClass(n.slideNextClass);
          n.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(n.slideNextClass));
          let c = a
            .prevAll(`.${n.slideClass}`)
            .eq(0)
            .addClass(n.slidePrevClass);
          n.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
            n.loop &&
              (l.hasClass(n.slideDuplicateClass)
                ? r
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass)
                : r
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass),
              c.hasClass(n.slideDuplicateClass)
                ? r
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)
                : r
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: r,
              snapGrid: i,
              params: s,
              activeIndex: o,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            u = e;
          if (void 0 === u) {
            for (let e = 0; e < r.length; e += 1)
              void 0 !== r[e + 1]
                ? n >= r[e] && n < r[e + 1] - (r[e + 1] - r[e]) / 2
                  ? (u = e)
                  : n >= r[e] && n < r[e + 1] && (u = e + 1)
                : n >= r[e] && (u = e);
            s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
          }
          if (i.indexOf(n) >= 0) c = i.indexOf(n);
          else {
            const e = Math.min(s.slidesPerGroupSkip, u);
            c = e + Math.floor((u - e) / s.slidesPerGroup);
          }
          if ((c >= i.length && (c = i.length - 1), u === o))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const d = parseInt(
            t.slides.eq(u).attr("data-swiper-slide-index") || u,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: d,
            previousIndex: o,
            activeIndex: u,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== d && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            n = t.params,
            r = At(e).closest(`.${n.slideClass}`)[0];
          let i,
            s = !1;
          if (r)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === r) {
                (s = !0), (i = e);
                break;
              }
          if (!r || !s)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = r),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  At(r).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = i),
            n.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      const qt = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: n,
            translate: r,
            $wrapperEl: i,
          } = this;
          if (t.virtualTranslate) return n ? -r : r;
          if (t.cssMode) return r;
          let s = _t(i[0], e);
          return n && (s = -s), s || 0;
        },
        setTranslate: function (e, t) {
          const n = this,
            {
              rtlTranslate: r,
              params: i,
              $wrapperEl: s,
              wrapperEl: o,
              progress: a,
            } = n;
          let l,
            c = 0,
            u = 0;
          n.isHorizontal() ? (c = r ? -e : e) : (u = e),
            i.roundLengths && ((c = Math.floor(c)), (u = Math.floor(u))),
            i.cssMode
              ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -c : -u)
              : i.virtualTranslate ||
                s.transform(`translate3d(${c}px, ${u}px, 0px)`),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? c : u);
          const d = n.maxTranslate() - n.minTranslate();
          (l = 0 === d ? 0 : (e - n.minTranslate()) / d),
            l !== a && n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, r, i) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === r && (r = !0);
          const s = this,
            { params: o, wrapperEl: a } = s;
          if (s.animating && o.preventInteractionOnTransition) return !1;
          const l = s.minTranslate(),
            c = s.maxTranslate();
          let u;
          if (
            ((u = r && e > l ? l : r && e < c ? c : e),
            s.updateProgress(u),
            o.cssMode)
          ) {
            const e = s.isHorizontal();
            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -u;
            else {
              if (!s.support.smoothScroll)
                return (
                  Dt({
                    swiper: s,
                    targetPosition: -u,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              a.scrollTo({ [e ? "left" : "top"]: -u, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (s.setTransition(0),
                s.setTranslate(u),
                n &&
                  (s.emit("beforeTransitionStart", t, i),
                  s.emit("transitionEnd")))
              : (s.setTransition(t),
                s.setTranslate(u),
                n &&
                  (s.emit("beforeTransitionStart", t, i),
                  s.emit("transitionStart")),
                s.animating ||
                  ((s.animating = !0),
                  s.onTranslateToWrapperTransitionEnd ||
                    (s.onTranslateToWrapperTransitionEnd = function (e) {
                      s &&
                        !s.destroyed &&
                        e.target === this &&
                        (s.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          s.onTranslateToWrapperTransitionEnd
                        ),
                        s.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          s.onTranslateToWrapperTransitionEnd
                        ),
                        (s.onTranslateToWrapperTransitionEnd = null),
                        delete s.onTranslateToWrapperTransitionEnd,
                        n && s.emit("transitionEnd"));
                    }),
                  s.$wrapperEl[0].addEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    s.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function Xt(e) {
        let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
        const { activeIndex: s, previousIndex: o } = t;
        let a = r;
        if (
          (a || (a = s > o ? "next" : s < o ? "prev" : "reset"),
          t.emit(`transition${i}`),
          n && s !== o)
        ) {
          if ("reset" === a) return void t.emit(`slideResetTransition${i}`);
          t.emit(`slideChangeTransition${i}`),
            "next" === a
              ? t.emit(`slideNextTransition${i}`)
              : t.emit(`slidePrevTransition${i}`);
        }
      }
      const Yt = {
        slideTo: function (e, t, n, r, i) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "number" != typeof e && "string" != typeof e)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const s = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: u,
            activeIndex: d,
            rtlTranslate: p,
            wrapperEl: f,
            enabled: h,
          } = s;
          if (
            (s.animating && a.preventInteractionOnTransition) ||
            (!h && !r && !i)
          )
            return !1;
          const v = Math.min(s.params.slidesPerGroupSkip, o);
          let m = v + Math.floor((o - v) / s.params.slidesPerGroup);
          m >= l.length && (m = l.length - 1),
            (d || a.initialSlide || 0) === (u || 0) &&
              n &&
              s.emit("beforeSlideChangeStart");
          const g = -l[m];
          if ((s.updateProgress(g), a.normalizeSlideIndex))
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * g),
                n = Math.floor(100 * c[e]),
                r = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= n && t < r - (r - n) / 2
                  ? (o = e)
                  : t >= n && t < r && (o = e + 1)
                : t >= n && (o = e);
            }
          if (s.initialized && o !== d) {
            if (!s.allowSlideNext && g < s.translate && g < s.minTranslate())
              return !1;
            if (
              !s.allowSlidePrev &&
              g > s.translate &&
              g > s.maxTranslate() &&
              (d || 0) !== o
            )
              return !1;
          }
          let b;
          if (
            ((b = o > d ? "next" : o < d ? "prev" : "reset"),
            (p && -g === s.translate) || (!p && g === s.translate))
          )
            return (
              s.updateActiveIndex(o),
              a.autoHeight && s.updateAutoHeight(),
              s.updateSlidesClasses(),
              "slide" !== a.effect && s.setTranslate(g),
              "reset" !== b && (s.transitionStart(n, b), s.transitionEnd(n, b)),
              !1
            );
          if (a.cssMode) {
            const e = s.isHorizontal(),
              n = p ? g : -g;
            if (0 === t) {
              const t = s.virtual && s.params.virtual.enabled;
              t &&
                ((s.wrapperEl.style.scrollSnapType = "none"),
                (s._immediateVirtual = !0)),
                (f[e ? "scrollLeft" : "scrollTop"] = n),
                t &&
                  requestAnimationFrame(() => {
                    (s.wrapperEl.style.scrollSnapType = ""),
                      (s._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!s.support.smoothScroll)
                return (
                  Dt({
                    swiper: s,
                    targetPosition: n,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
            }
            return !0;
          }
          return (
            s.setTransition(t),
            s.setTranslate(g),
            s.updateActiveIndex(o),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, r),
            s.transitionStart(n, b),
            0 === t
              ? s.transitionEnd(n, b)
              : s.animating ||
                ((s.animating = !0),
                s.onSlideToWrapperTransitionEnd ||
                  (s.onSlideToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      s.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      (s.onSlideToWrapperTransitionEnd = null),
                      delete s.onSlideToWrapperTransitionEnd,
                      s.transitionEnd(n, b));
                  }),
                s.$wrapperEl[0].addEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                s.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  s.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, r) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "string" == typeof e)
          ) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const i = this;
          let s = e;
          return i.params.loop && (s += i.loopedSlides), i.slideTo(s, t, n, r);
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const r = this,
            { animating: i, enabled: s, params: o } = r;
          if (!s) return r;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          const l = r.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (i && o.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          return o.rewind && r.isEnd
            ? r.slideTo(0, e, t, n)
            : r.slideTo(r.activeIndex + l, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const r = this,
            {
              params: i,
              animating: s,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = r;
          if (!c) return r;
          if (i.loop) {
            if (s && i.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const d = u(l ? r.translate : -r.translate),
            p = o.map((e) => u(e));
          let f = o[p.indexOf(d) - 1];
          if (void 0 === f && i.cssMode) {
            let e;
            o.forEach((t, n) => {
              d >= t && (e = n);
            }),
              void 0 !== e && (f = o[e > 0 ? e - 1 : e]);
          }
          let h = 0;
          if (
            (void 0 !== f &&
              ((h = a.indexOf(f)),
              h < 0 && (h = r.activeIndex - 1),
              "auto" === i.slidesPerView &&
                1 === i.slidesPerGroup &&
                i.slidesPerGroupAuto &&
                ((h = h - r.slidesPerViewDynamic("previous", !0) + 1),
                (h = Math.max(h, 0)))),
            i.rewind && r.isBeginning)
          ) {
            const i =
              r.params.virtual && r.params.virtual.enabled && r.virtual
                ? r.virtual.slides.length - 1
                : r.slides.length - 1;
            return r.slideTo(i, e, t, n);
          }
          return r.slideTo(h, e, t, n);
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
          );
        },
        slideToClosest: function (e, t, n, r) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === r && (r = 0.5);
          const i = this;
          let s = i.activeIndex;
          const o = Math.min(i.params.slidesPerGroupSkip, s),
            a = o + Math.floor((s - o) / i.params.slidesPerGroup),
            l = i.rtlTranslate ? i.translate : -i.translate;
          if (l >= i.snapGrid[a]) {
            const e = i.snapGrid[a];
            l - e > (i.snapGrid[a + 1] - e) * r &&
              (s += i.params.slidesPerGroup);
          } else {
            const e = i.snapGrid[a - 1];
            l - e <= (i.snapGrid[a] - e) * r && (s -= i.params.slidesPerGroup);
          }
          return (
            (s = Math.max(s, 0)),
            (s = Math.min(s, i.slidesGrid.length - 1)),
            i.slideTo(s, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: n } = e,
            r =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let i,
            s = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (i = parseInt(
              At(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? s < e.loopedSlides - r / 2 ||
                  s > e.slides.length - e.loopedSlides + r / 2
                  ? (e.loopFix(),
                    (s = n
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    Mt(() => {
                      e.slideTo(s);
                    }))
                  : e.slideTo(s)
                : s > e.slides.length - r
                ? (e.loopFix(),
                  (s = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  Mt(() => {
                    e.slideTo(s);
                  }))
                : e.slideTo(s);
          } else e.slideTo(s);
        },
      };
      const Ut = {
        loopCreate: function () {
          const e = this,
            t = yt(),
            { params: n, $wrapperEl: r } = e,
            i = r.children().length > 0 ? At(r.children()[0].parentNode) : r;
          i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
          let s = i.children(`.${n.slideClass}`);
          if (n.loopFillGroupWithBlank) {
            const e = n.slidesPerGroup - (s.length % n.slidesPerGroup);
            if (e !== n.slidesPerGroup) {
              for (let r = 0; r < e; r += 1) {
                const e = At(t.createElement("div")).addClass(
                  `${n.slideClass} ${n.slideBlankClass}`
                );
                i.append(e);
              }
              s = i.children(`.${n.slideClass}`);
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = s.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10)
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > s.length &&
              e.params.loopedSlidesLimit &&
              (e.loopedSlides = s.length);
          const o = [],
            a = [];
          s.each((e, t) => {
            At(e).attr("data-swiper-slide-index", t);
          });
          for (let t = 0; t < e.loopedSlides; t += 1) {
            const e = t - Math.floor(t / s.length) * s.length;
            a.push(s.eq(e)[0]), o.unshift(s.eq(s.length - e - 1)[0]);
          }
          for (let e = 0; e < a.length; e += 1)
            i.append(At(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (let e = o.length - 1; e >= 0; e -= 1)
            i.prepend(At(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: n,
            loopedSlides: r,
            allowSlidePrev: i,
            allowSlideNext: s,
            snapGrid: o,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -o[t] - e.getTranslate();
          if (t < r) {
            (l = n.length - 3 * r + t), (l += r);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          } else if (t >= n.length - r) {
            (l = -n.length + t + r), (l += r);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          }
          (e.allowSlidePrev = i), (e.allowSlideNext = s), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: n } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            n.removeAttr("data-swiper-slide-index");
        },
      };
      function Kt(e) {
        const t = this,
          n = yt(),
          r = wt(),
          i = t.touchEventsData,
          { params: s, touches: o, enabled: a } = t;
        if (!a) return;
        if (t.animating && s.preventInteractionOnTransition) return;
        !t.animating && s.cssMode && s.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let c = At(l.target);
        if ("wrapper" === s.touchEventsTarget && !c.closest(t.wrapperEl).length)
          return;
        if (
          ((i.isTouchEvent = "touchstart" === l.type),
          !i.isTouchEvent && "which" in l && 3 === l.which)
        )
          return;
        if (!i.isTouchEvent && "button" in l && l.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        !!s.noSwipingClass &&
          "" !== s.noSwipingClass &&
          l.target &&
          l.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (c = At(e.path[0]));
        const u = s.noSwipingSelector
            ? s.noSwipingSelector
            : `.${s.noSwipingClass}`,
          d = !(!l.target || !l.target.shadowRoot);
        if (
          s.noSwiping &&
          (d
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(n) {
                    if (!n || n === yt() || n === wt()) return null;
                    n.assignedSlot && (n = n.assignedSlot);
                    const r = n.closest(e);
                    return r || n.getRootNode
                      ? r || t(n.getRootNode().host)
                      : null;
                  })(t)
                );
              })(u, c[0])
            : c.closest(u)[0])
        )
          return void (t.allowClick = !0);
        if (s.swipeHandler && !c.closest(s.swipeHandler)[0]) return;
        (o.currentX =
          "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
          (o.currentY =
            "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
        const p = o.currentX,
          f = o.currentY,
          h = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
          v = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
        if (h && (p <= v || p >= r.innerWidth - v)) {
          if ("prevent" !== h) return;
          e.preventDefault();
        }
        if (
          (Object.assign(i, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (o.startX = p),
          (o.startY = f),
          (i.touchStartTime = Pt()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          s.threshold > 0 && (i.allowThresholdMove = !1),
          "touchstart" !== l.type)
        ) {
          let e = !0;
          c.is(i.focusableElements) &&
            ((e = !1), "SELECT" === c[0].nodeName && (i.isTouched = !1)),
            n.activeElement &&
              At(n.activeElement).is(i.focusableElements) &&
              n.activeElement !== c[0] &&
              n.activeElement.blur();
          const r = e && t.allowTouchMove && s.touchStartPreventDefault;
          (!s.touchStartForcePreventDefault && !r) ||
            c[0].isContentEditable ||
            l.preventDefault();
        }
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !s.cssMode &&
          t.freeMode.onTouchStart(),
          t.emit("touchStart", l);
      }
      function Qt(e) {
        const t = yt(),
          n = this,
          r = n.touchEventsData,
          { params: i, touches: s, rtlTranslate: o, enabled: a } = n;
        if (!a) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !r.isTouched))
          return void (
            r.startMoving &&
            r.isScrolling &&
            n.emit("touchMoveOpposite", l)
          );
        if (r.isTouchEvent && "touchmove" !== l.type) return;
        const c =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          u = "touchmove" === l.type ? c.pageX : l.pageX,
          d = "touchmove" === l.type ? c.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (s.startX = u), void (s.startY = d);
        if (!n.allowTouchMove)
          return (
            At(l.target).is(r.focusableElements) || (n.allowClick = !1),
            void (
              r.isTouched &&
              (Object.assign(s, {
                startX: u,
                startY: d,
                currentX: u,
                currentY: d,
              }),
              (r.touchStartTime = Pt()))
            )
          );
        if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
          if (n.isVertical()) {
            if (
              (d < s.startY && n.translate <= n.maxTranslate()) ||
              (d > s.startY && n.translate >= n.minTranslate())
            )
              return (r.isTouched = !1), void (r.isMoved = !1);
          } else if (
            (u < s.startX && n.translate <= n.maxTranslate()) ||
            (u > s.startX && n.translate >= n.minTranslate())
          )
            return;
        if (
          r.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          At(l.target).is(r.focusableElements)
        )
          return (r.isMoved = !0), void (n.allowClick = !1);
        if (
          (r.allowTouchCallbacks && n.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (s.currentX = u), (s.currentY = d);
        const p = s.currentX - s.startX,
          f = s.currentY - s.startY;
        if (
          n.params.threshold &&
          Math.sqrt(p ** 2 + f ** 2) < n.params.threshold
        )
          return;
        if (void 0 === r.isScrolling) {
          let e;
          (n.isHorizontal() && s.currentY === s.startY) ||
          (n.isVertical() && s.currentX === s.startX)
            ? (r.isScrolling = !1)
            : p * p + f * f >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
              (r.isScrolling = n.isHorizontal()
                ? e > i.touchAngle
                : 90 - e > i.touchAngle));
        }
        if (
          (r.isScrolling && n.emit("touchMoveOpposite", l),
          void 0 === r.startMoving &&
            ((s.currentX === s.startX && s.currentY === s.startY) ||
              (r.startMoving = !0)),
          r.isScrolling)
        )
          return void (r.isTouched = !1);
        if (!r.startMoving) return;
        (n.allowClick = !1),
          !i.cssMode && l.cancelable && l.preventDefault(),
          i.touchMoveStopPropagation && !i.nested && l.stopPropagation(),
          r.isMoved ||
            (i.loop && !i.cssMode && n.loopFix(),
            (r.startTranslate = n.getTranslate()),
            n.setTransition(0),
            n.animating &&
              n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (r.allowMomentumBounce = !1),
            !i.grabCursor ||
              (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
              n.setGrabCursor(!0),
            n.emit("sliderFirstMove", l)),
          n.emit("sliderMove", l),
          (r.isMoved = !0);
        let h = n.isHorizontal() ? p : f;
        (s.diff = h),
          (h *= i.touchRatio),
          o && (h = -h),
          (n.swipeDirection = h > 0 ? "prev" : "next"),
          (r.currentTranslate = h + r.startTranslate);
        let v = !0,
          m = i.resistanceRatio;
        if (
          (i.touchReleaseOnEdges && (m = 0),
          h > 0 && r.currentTranslate > n.minTranslate()
            ? ((v = !1),
              i.resistance &&
                (r.currentTranslate =
                  n.minTranslate() -
                  1 +
                  (-n.minTranslate() + r.startTranslate + h) ** m))
            : h < 0 &&
              r.currentTranslate < n.maxTranslate() &&
              ((v = !1),
              i.resistance &&
                (r.currentTranslate =
                  n.maxTranslate() +
                  1 -
                  (n.maxTranslate() - r.startTranslate - h) ** m)),
          v && (l.preventedByNestedSwiper = !0),
          !n.allowSlideNext &&
            "next" === n.swipeDirection &&
            r.currentTranslate < r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          !n.allowSlidePrev &&
            "prev" === n.swipeDirection &&
            r.currentTranslate > r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          n.allowSlidePrev ||
            n.allowSlideNext ||
            (r.currentTranslate = r.startTranslate),
          i.threshold > 0)
        ) {
          if (!(Math.abs(h) > i.threshold || r.allowThresholdMove))
            return void (r.currentTranslate = r.startTranslate);
          if (!r.allowThresholdMove)
            return (
              (r.allowThresholdMove = !0),
              (s.startX = s.currentX),
              (s.startY = s.currentY),
              (r.currentTranslate = r.startTranslate),
              void (s.diff = n.isHorizontal()
                ? s.currentX - s.startX
                : s.currentY - s.startY)
            );
        }
        i.followFinger &&
          !i.cssMode &&
          (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
            i.watchSlidesProgress) &&
            (n.updateActiveIndex(), n.updateSlidesClasses()),
          n.params.freeMode &&
            i.freeMode.enabled &&
            n.freeMode &&
            n.freeMode.onTouchMove(),
          n.updateProgress(r.currentTranslate),
          n.setTranslate(r.currentTranslate));
      }
      function Jt(e) {
        const t = this,
          n = t.touchEventsData,
          {
            params: r,
            touches: i,
            rtlTranslate: s,
            slidesGrid: o,
            enabled: a,
          } = t;
        if (!a) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          n.allowTouchCallbacks && t.emit("touchEnd", l),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        )
          return (
            n.isMoved && r.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            void (n.startMoving = !1)
          );
        r.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = Pt(),
          u = c - n.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            u < 300 &&
              c - n.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((n.lastClickTime = Pt()),
          Mt(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            0 === i.diff ||
            n.currentTranslate === n.startTranslate)
        )
          return (
            (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
          );
        let d;
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (d = r.followFinger
            ? s
              ? t.translate
              : -t.translate
            : -n.currentTranslate),
          r.cssMode)
        )
          return;
        if (t.params.freeMode && r.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: d });
        let p = 0,
          f = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < o.length;
          e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
        ) {
          const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
          void 0 !== o[e + t]
            ? d >= o[e] && d < o[e + t] && ((p = e), (f = o[e + t] - o[e]))
            : d >= o[e] && ((p = e), (f = o[o.length - 1] - o[o.length - 2]));
        }
        let h = null,
          v = null;
        r.rewind &&
          (t.isBeginning
            ? (v =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (h = 0));
        const m = (d - o[p]) / f,
          g = p < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (u > r.longSwipesMs) {
          if (!r.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (m >= r.longSwipesRatio
              ? t.slideTo(r.rewind && t.isEnd ? h : p + g)
              : t.slideTo(p)),
            "prev" === t.swipeDirection &&
              (m > 1 - r.longSwipesRatio
                ? t.slideTo(p + g)
                : null !== v && m < 0 && Math.abs(m) > r.longSwipesRatio
                ? t.slideTo(v)
                : t.slideTo(p));
        } else {
          if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(p + g)
              : t.slideTo(p)
            : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : p + g),
              "prev" === t.swipeDirection && t.slideTo(null !== v ? v : p));
        }
      }
      function Zt() {
        const e = this,
          { params: t, el: n } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = i),
          (e.allowSlideNext = r),
          e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
      }
      function en(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function tn() {
        const e = this,
          { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
        if (!r) return;
        let i;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const s = e.maxTranslate() - e.minTranslate();
        (i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
          i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let nn = !1;
      function rn() {}
      const sn = (e, t) => {
        const n = yt(),
          {
            params: r,
            touchEvents: i,
            el: s,
            wrapperEl: o,
            device: a,
            support: l,
          } = e,
          c = !!r.nested,
          u = "on" === t ? "addEventListener" : "removeEventListener",
          d = t;
        if (l.touch) {
          const t = !(
            "touchstart" !== i.start ||
            !l.passiveListener ||
            !r.passiveListeners
          ) && { passive: !0, capture: !1 };
          s[u](i.start, e.onTouchStart, t),
            s[u](
              i.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: c } : c
            ),
            s[u](i.end, e.onTouchEnd, t),
            i.cancel && s[u](i.cancel, e.onTouchEnd, t);
        } else
          s[u](i.start, e.onTouchStart, !1),
            n[u](i.move, e.onTouchMove, c),
            n[u](i.end, e.onTouchEnd, !1);
        (r.preventClicks || r.preventClicksPropagation) &&
          s[u]("click", e.onClick, !0),
          r.cssMode && o[u]("scroll", e.onScroll),
          r.updateOnWindowResize
            ? e[d](
                a.ios || a.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                Zt,
                !0
              )
            : e[d]("observerUpdate", Zt, !0);
      };
      const on = {
          attachEvents: function () {
            const e = this,
              t = yt(),
              { params: n, support: r } = e;
            (e.onTouchStart = Kt.bind(e)),
              (e.onTouchMove = Qt.bind(e)),
              (e.onTouchEnd = Jt.bind(e)),
              n.cssMode && (e.onScroll = tn.bind(e)),
              (e.onClick = en.bind(e)),
              r.touch &&
                !nn &&
                (t.addEventListener("touchstart", rn), (nn = !0)),
              sn(e, "on");
          },
          detachEvents: function () {
            sn(this, "off");
          },
        },
        an = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      const ln = {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: n,
              loopedSlides: r = 0,
              params: i,
              $el: s,
            } = e,
            o = i.breakpoints;
          if (!o || (o && 0 === Object.keys(o).length)) return;
          const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const l = (a in o ? o[a] : void 0) || e.originalParams,
            c = an(e, i),
            u = an(e, l),
            d = i.enabled;
          c && !u
            ? (s.removeClass(
                `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !c &&
              u &&
              (s.addClass(`${i.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === i.grid.fill)) &&
                s.addClass(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              const n = i[t] && i[t].enabled,
                r = l[t] && l[t].enabled;
              n && !r && e[t].disable(), !n && r && e[t].enable();
            });
          const p = l.direction && l.direction !== i.direction,
            f = i.loop && (l.slidesPerView !== i.slidesPerView || p);
          p && n && e.changeDirection(), It(e.params, l);
          const h = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            d && !h ? e.disable() : !d && h && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", l),
            f &&
              n &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - r + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, n) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
            return;
          let r = !1;
          const i = wt(),
            s = "window" === t ? i.innerHeight : n.clientHeight,
            o = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: s * t, point: e };
              }
              return { value: e, point: e };
            });
          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < o.length; e += 1) {
            const { point: s, value: a } = o[e];
            "window" === t
              ? i.matchMedia(`(min-width: ${a}px)`).matches && (r = s)
              : a <= n.clientWidth && (r = s);
          }
          return r || "max";
        },
      };
      const cn = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: n,
              rtl: r,
              $el: i,
              device: s,
              support: o,
            } = e,
            a = (function (e, t) {
              const n = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((r) => {
                        e[r] && n.push(t + r);
                      })
                    : "string" == typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: s.android },
                { ios: s.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { "watch-progress": n.watchSlidesProgress },
              ],
              n.containerModifierClass
            );
          t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
      const un = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function dn(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          const r = Object.keys(n)[0],
            i = n[r];
          "object" == typeof i && null !== i
            ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
                !0 === e[r] &&
                (e[r] = { auto: !0 }),
              r in e && "enabled" in i
                ? (!0 === e[r] && (e[r] = { enabled: !0 }),
                  "object" != typeof e[r] ||
                    "enabled" in e[r] ||
                    (e[r].enabled = !0),
                  e[r] || (e[r] = { enabled: !1 }),
                  It(t, n))
                : It(t, n))
            : It(t, n);
        };
      }
      const pn = {
          eventsEmitter: Vt,
          update: Gt,
          translate: qt,
          transition: {
            setTransition: function (e, t) {
              const n = this;
              n.params.cssMode || n.$wrapperEl.transition(e),
                n.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const n = this,
                { params: r } = n;
              r.cssMode ||
                (r.autoHeight && n.updateAutoHeight(),
                Xt({
                  swiper: n,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const n = this,
                { params: r } = n;
              (n.animating = !1),
                r.cssMode ||
                  (n.setTransition(0),
                  Xt({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: Yt,
          loop: Ut,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const n =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (n.style.cursor = "move"),
                (n.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: on,
          breakpoints: ln,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: n } = e,
                { slidesOffsetBefore: r } = n;
              if (r) {
                const t = e.slides.length - 1,
                  n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                e.isLocked = e.size > n;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: cn,
          images: {
            loadImage: function (e, t, n, r, i, s) {
              const o = wt();
              let a;
              function l() {
                s && s();
              }
              At(e).parent("picture")[0] || (e.complete && i)
                ? l()
                : t
                ? ((a = new o.Image()),
                  (a.onload = l),
                  (a.onerror = l),
                  r && (a.sizes = r),
                  n && (a.srcset = n),
                  t && (a.src = t))
                : l();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                const r = e.imagesToLoad[n];
                e.loadImage(
                  r,
                  r.currentSrc || r.getAttribute("src"),
                  r.srcset || r.getAttribute("srcset"),
                  r.sizes || r.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        fn = {};
      class hn {
        constructor() {
          let e, t;
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          if (
            (1 === r.length &&
            r[0].constructor &&
            "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
              ? (t = r[0])
              : ([e, t] = r),
            t || (t = {}),
            (t = It({}, t)),
            e && !t.el && (t.el = e),
            t.el && At(t.el).length > 1)
          ) {
            const e = [];
            return (
              At(t.el).each((n) => {
                const r = It({}, t, { el: n });
                e.push(new hn(r));
              }),
              e
            );
          }
          const s = this;
          (s.__swiper__ = !0),
            (s.support = Wt()),
            (s.device = Ft({ userAgent: t.userAgent })),
            (s.browser = Ht()),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = [...s.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              s.modules.push(...t.modules);
          const o = {};
          s.modules.forEach((e) => {
            e({
              swiper: s,
              extendParams: dn(t, o),
              on: s.on.bind(s),
              once: s.once.bind(s),
              off: s.off.bind(s),
              emit: s.emit.bind(s),
            });
          });
          const a = It({}, un, o);
          return (
            (s.params = It({}, a, fn, t)),
            (s.originalParams = It({}, s.params)),
            (s.passedParams = It({}, t)),
            s.params &&
              s.params.on &&
              Object.keys(s.params.on).forEach((e) => {
                s.on(e, s.params.on[e]);
              }),
            s.params && s.params.onAny && s.onAny(s.params.onAny),
            (s.$ = At),
            Object.assign(s, {
              enabled: s.params.enabled,
              el: e,
              classNames: [],
              slides: At(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === s.params.direction,
              isVertical: () => "vertical" === s.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: s.params.allowSlideNext,
              allowSlidePrev: s.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (s.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (s.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  s.support.touch || !s.params.simulateTouch
                    ? s.touchEventsTouch
                    : s.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: s.params.focusableElements,
                lastClickTime: Pt(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: s.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            s.emit("_swiper"),
            s.params.init && s.init(),
            s
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const n = this;
          e = Math.min(Math.max(e, 0), 1);
          const r = n.minTranslate(),
            i = (n.maxTranslate() - r) * e + r;
          n.translateTo(i, void 0 === t ? 0 : t),
            n.updateActiveIndex(),
            n.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((n) => {
            const r = e.getSlideClasses(n);
            t.push({ slideEl: n, classNames: r }), e.emit("_slideClass", n, r);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: n,
            slides: r,
            slidesGrid: i,
            slidesSizesGrid: s,
            size: o,
            activeIndex: a,
          } = this;
          let l = 1;
          if (n.centeredSlides) {
            let e,
              t = r[a].swiperSlideSize;
            for (let n = a + 1; n < r.length; n += 1)
              r[n] &&
                !e &&
                ((t += r[n].swiperSlideSize), (l += 1), t > o && (e = !0));
            for (let n = a - 1; n >= 0; n -= 1)
              r[n] &&
                !e &&
                ((t += r[n].swiperSlideSize), (l += 1), t > o && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < r.length; e += 1) {
              (t ? i[e] + s[e] - i[a] < o : i[e] - i[a] < o) && (l += 1);
            }
          else
            for (let e = a - 1; e >= 0; e -= 1) {
              i[a] - i[e] < o && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: n } = e;
          function r() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let i;
          n.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (r(), e.params.autoHeight && e.updateAutoHeight())
              : ((i =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                i || r()),
            n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const n = this,
            r = n.params.direction;
          return (
            e || (e = "horizontal" === r ? "vertical" : "horizontal"),
            e === r ||
              ("horizontal" !== e && "vertical" !== e) ||
              (n.$el
                .removeClass(`${n.params.containerModifierClass}${r}`)
                .addClass(`${n.params.containerModifierClass}${e}`),
              n.emitContainerClasses(),
              (n.params.direction = e),
              n.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              n.emit("changeDirection"),
              t && n.update()),
            n
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "rtl"))
              : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const n = At(e || t.params.el);
          if (!(e = n[0])) return !1;
          e.swiper = t;
          const r = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let i = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = At(e.shadowRoot.querySelector(r()));
              return (t.children = (e) => n.children(e)), t;
            }
            return n.children ? n.children(r()) : At(n).children(r());
          })();
          if (0 === i.length && t.params.createElements) {
            const e = yt().createElement("div");
            (i = At(e)),
              (e.className = t.params.wrapperClass),
              n.append(e),
              n.children(`.${t.params.slideClass}`).each((e) => {
                i.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: n,
              el: e,
              $wrapperEl: i,
              wrapperEl: i[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
              wrongRTL: "-webkit-box" === i.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const n = this,
            { params: r, $el: i, $wrapperEl: s, slides: o } = n;
          return (
            void 0 === n.params ||
              n.destroyed ||
              (n.emit("beforeDestroy"),
              (n.initialized = !1),
              n.detachEvents(),
              r.loop && n.loopDestroy(),
              t &&
                (n.removeClasses(),
                i.removeAttr("style"),
                s.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        r.slideVisibleClass,
                        r.slideActiveClass,
                        r.slideNextClass,
                        r.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              n.emit("destroy"),
              Object.keys(n.eventsListeners).forEach((e) => {
                n.off(e);
              }),
              !1 !== e &&
                ((n.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(n)),
              (n.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          It(fn, e);
        }
        static get extendedDefaults() {
          return fn;
        }
        static get defaults() {
          return un;
        }
        static installModule(e) {
          hn.prototype.__modules__ || (hn.prototype.__modules__ = []);
          const t = hn.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => hn.installModule(e)), hn)
            : (hn.installModule(e), hn);
        }
      }
      Object.keys(pn).forEach((e) => {
        Object.keys(pn[e]).forEach((t) => {
          hn.prototype[t] = pn[e][t];
        });
      }),
        hn.use([
          function (e) {
            let { swiper: t, on: n, emit: r } = e;
            const i = wt();
            let s = null,
              o = null;
            const a = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              l = () => {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            n("init", () => {
              t.params.resizeObserver && void 0 !== i.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((s = new ResizeObserver((e) => {
                    o = i.requestAnimationFrame(() => {
                      const { width: n, height: r } = t;
                      let i = n,
                        s = r;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: n,
                          contentRect: r,
                          target: o,
                        } = e;
                        (o && o !== t.el) ||
                          ((i = r ? r.width : (n[0] || n).inlineSize),
                          (s = r ? r.height : (n[0] || n).blockSize));
                      }),
                        (i === n && s === r) || a();
                    });
                  })),
                  s.observe(t.el))
                : (i.addEventListener("resize", a),
                  i.addEventListener("orientationchange", l));
            }),
              n("destroy", () => {
                o && i.cancelAnimationFrame(o),
                  s && s.unobserve && t.el && (s.unobserve(t.el), (s = null)),
                  i.removeEventListener("resize", a),
                  i.removeEventListener("orientationchange", l);
              });
          },
          function (e) {
            let { swiper: t, extendParams: n, on: r, emit: i } = e;
            const s = [],
              o = wt(),
              a = function (e, t) {
                void 0 === t && (t = {});
                const n = new (o.MutationObserver || o.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void i("observerUpdate", e[0]);
                    const t = function () {
                      i("observerUpdate", e[0]);
                    };
                    o.requestAnimationFrame
                      ? o.requestAnimationFrame(t)
                      : o.setTimeout(t, 0);
                  }
                );
                n.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  s.push(n);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) a(e[t]);
                  }
                  a(t.$el[0], { childList: t.params.observeSlideChildren }),
                    a(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              r("destroy", () => {
                s.forEach((e) => {
                  e.disconnect();
                }),
                  s.splice(0, s.length);
              });
          },
        ]);
      const vn = hn;
      function mn(e, t, n, r) {
        const i = yt();
        return (
          e.params.createElements &&
            Object.keys(r).forEach((s) => {
              if (!n[s] && !0 === n.auto) {
                let o = e.$el.children(`.${r[s]}`)[0];
                o ||
                  ((o = i.createElement("div")),
                  (o.className = r[s]),
                  e.$el.append(o)),
                  (n[s] = o),
                  (t[s] = o);
              }
            }),
          n
        );
      }
      function gn(e) {
        let { swiper: t, extendParams: n, on: r, emit: i } = e;
        function s(e) {
          let n;
          return (
            e &&
              ((n = At(e)),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                n.length > 1 &&
                1 === t.$el.find(e).length &&
                (n = t.$el.find(e))),
            n
          );
        }
        function o(e, n) {
          const r = t.params.navigation;
          e &&
            e.length > 0 &&
            (e[n ? "addClass" : "removeClass"](r.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
            t.params.watchOverflow &&
              t.enabled &&
              e[t.isLocked ? "addClass" : "removeClass"](r.lockClass));
        }
        function a() {
          if (t.params.loop) return;
          const { $nextEl: e, $prevEl: n } = t.navigation;
          o(n, t.isBeginning && !t.params.rewind),
            o(e, t.isEnd && !t.params.rewind);
        }
        function l(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), i("navigationPrev"));
        }
        function c(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), i("navigationNext"));
        }
        function u() {
          const e = t.params.navigation;
          if (
            ((t.params.navigation = mn(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !e.nextEl && !e.prevEl)
          )
            return;
          const n = s(e.nextEl),
            r = s(e.prevEl);
          n && n.length > 0 && n.on("click", c),
            r && r.length > 0 && r.on("click", l),
            Object.assign(t.navigation, {
              $nextEl: n,
              nextEl: n && n[0],
              $prevEl: r,
              prevEl: r && r[0],
            }),
            t.enabled ||
              (n && n.addClass(e.lockClass), r && r.addClass(e.lockClass));
        }
        function d() {
          const { $nextEl: e, $prevEl: n } = t.navigation;
          e &&
            e.length &&
            (e.off("click", c),
            e.removeClass(t.params.navigation.disabledClass)),
            n &&
              n.length &&
              (n.off("click", l),
              n.removeClass(t.params.navigation.disabledClass));
        }
        n({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          r("init", () => {
            !1 === t.params.navigation.enabled ? p() : (u(), a());
          }),
          r("toEdge fromEdge lock unlock", () => {
            a();
          }),
          r("destroy", () => {
            d();
          }),
          r("enable disable", () => {
            const { $nextEl: e, $prevEl: n } = t.navigation;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              ),
              n &&
                n[t.enabled ? "removeClass" : "addClass"](
                  t.params.navigation.lockClass
                );
          }),
          r("click", (e, n) => {
            const { $nextEl: r, $prevEl: s } = t.navigation,
              o = n.target;
            if (
              t.params.navigation.hideOnClick &&
              !At(o).is(s) &&
              !At(o).is(r)
            ) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === o || t.pagination.el.contains(o))
              )
                return;
              let e;
              r
                ? (e = r.hasClass(t.params.navigation.hiddenClass))
                : s && (e = s.hasClass(t.params.navigation.hiddenClass)),
                i(!0 === e ? "navigationShow" : "navigationHide"),
                r && r.toggleClass(t.params.navigation.hiddenClass),
                s && s.toggleClass(t.params.navigation.hiddenClass);
            }
          });
        const p = () => {
          t.$el.addClass(t.params.navigation.navigationDisabledClass), d();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.$el.removeClass(t.params.navigation.navigationDisabledClass),
              u(),
              a();
          },
          disable: p,
          update: a,
          init: u,
          destroy: d,
        });
      }
      function bn(e) {
        return (
          void 0 === e && (e = ""),
          `.${e
            .trim()
            .replace(/([\.:!\/])/g, "\\$1")
            .replace(/ /g, ".")}`
        );
      }
      function yn(e) {
        let { swiper: t, extendParams: n, on: r, emit: i } = e;
        const s = "swiper-pagination";
        let o;
        n({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${s}-bullet`,
            bulletActiveClass: `${s}-bullet-active`,
            modifierClass: `${s}-`,
            currentClass: `${s}-current`,
            totalClass: `${s}-total`,
            hiddenClass: `${s}-hidden`,
            progressbarFillClass: `${s}-progressbar-fill`,
            progressbarOppositeClass: `${s}-progressbar-opposite`,
            clickableClass: `${s}-clickable`,
            lockClass: `${s}-lock`,
            horizontalClass: `${s}-horizontal`,
            verticalClass: `${s}-vertical`,
            paginationDisabledClass: `${s}-disabled`,
          },
        }),
          (t.pagination = { el: null, $el: null, bullets: [] });
        let a = 0;
        function l() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            !t.pagination.$el ||
            0 === t.pagination.$el.length
          );
        }
        function c(e, n) {
          const { bulletActiveClass: r } = t.params.pagination;
          e[n]().addClass(`${r}-${n}`)[n]().addClass(`${r}-${n}-${n}`);
        }
        function u() {
          const e = t.rtl,
            n = t.params.pagination;
          if (l()) return;
          const r =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            s = t.pagination.$el;
          let u;
          const d = t.params.loop
            ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((u = Math.ceil(
                  (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                )),
                u > r - 1 - 2 * t.loopedSlides && (u -= r - 2 * t.loopedSlides),
                u > d - 1 && (u -= d),
                u < 0 && "bullets" !== t.params.paginationType && (u = d + u))
              : (u = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
            "bullets" === n.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const r = t.pagination.bullets;
            let i, l, d;
            if (
              (n.dynamicBullets &&
                ((o = r
                  .eq(0)
                  [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                s.css(
                  t.isHorizontal() ? "width" : "height",
                  o * (n.dynamicMainBullets + 4) + "px"
                ),
                n.dynamicMainBullets > 1 &&
                  void 0 !== t.previousIndex &&
                  ((a += u - (t.previousIndex - t.loopedSlides || 0)),
                  a > n.dynamicMainBullets - 1
                    ? (a = n.dynamicMainBullets - 1)
                    : a < 0 && (a = 0)),
                (i = Math.max(u - a, 0)),
                (l = i + (Math.min(r.length, n.dynamicMainBullets) - 1)),
                (d = (l + i) / 2)),
              r.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${n.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              s.length > 1)
            )
              r.each((e) => {
                const t = At(e),
                  r = t.index();
                r === u && t.addClass(n.bulletActiveClass),
                  n.dynamicBullets &&
                    (r >= i &&
                      r <= l &&
                      t.addClass(`${n.bulletActiveClass}-main`),
                    r === i && c(t, "prev"),
                    r === l && c(t, "next"));
              });
            else {
              const e = r.eq(u),
                s = e.index();
              if ((e.addClass(n.bulletActiveClass), n.dynamicBullets)) {
                const e = r.eq(i),
                  o = r.eq(l);
                for (let e = i; e <= l; e += 1)
                  r.eq(e).addClass(`${n.bulletActiveClass}-main`);
                if (t.params.loop)
                  if (s >= r.length) {
                    for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                      r.eq(r.length - e).addClass(
                        `${n.bulletActiveClass}-main`
                      );
                    r.eq(r.length - n.dynamicMainBullets - 1).addClass(
                      `${n.bulletActiveClass}-prev`
                    );
                  } else c(e, "prev"), c(o, "next");
                else c(e, "prev"), c(o, "next");
              }
            }
            if (n.dynamicBullets) {
              const i = Math.min(r.length, n.dynamicMainBullets + 4),
                s = (o * i - o) / 2 - d * o,
                a = e ? "right" : "left";
              r.css(t.isHorizontal() ? a : "top", `${s}px`);
            }
          }
          if (
            ("fraction" === n.type &&
              (s.find(bn(n.currentClass)).text(n.formatFractionCurrent(u + 1)),
              s.find(bn(n.totalClass)).text(n.formatFractionTotal(d))),
            "progressbar" === n.type)
          ) {
            let e;
            e = n.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const r = (u + 1) / d;
            let i = 1,
              o = 1;
            "horizontal" === e ? (i = r) : (o = r),
              s
                .find(bn(n.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${o})`)
                .transition(t.params.speed);
          }
          "custom" === n.type && n.renderCustom
            ? (s.html(n.renderCustom(t, u + 1, d)), i("paginationRender", s[0]))
            : i("paginationUpdate", s[0]),
            t.params.watchOverflow &&
              t.enabled &&
              s[t.isLocked ? "addClass" : "removeClass"](n.lockClass);
        }
        function d() {
          const e = t.params.pagination;
          if (l()) return;
          const n =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            r = t.pagination.$el;
          let s = "";
          if ("bullets" === e.type) {
            let i = t.params.loop
              ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.loop &&
              i > n &&
              (i = n);
            for (let n = 0; n < i; n += 1)
              e.renderBullet
                ? (s += e.renderBullet.call(t, n, e.bulletClass))
                : (s += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
            r.html(s), (t.pagination.bullets = r.find(bn(e.bulletClass)));
          }
          "fraction" === e.type &&
            ((s = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            r.html(s)),
            "progressbar" === e.type &&
              ((s = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
              r.html(s)),
            "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
        }
        function p() {
          t.params.pagination = mn(
            t,
            t.originalParams.pagination,
            t.params.pagination,
            { el: "swiper-pagination" }
          );
          const e = t.params.pagination;
          if (!e.el) return;
          let n = At(e.el);
          0 !== n.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              n.length > 1 &&
              ((n = t.$el.find(e.el)),
              n.length > 1 &&
                (n = n.filter((e) => At(e).parents(".swiper")[0] === t.el))),
            "bullets" === e.type && e.clickable && n.addClass(e.clickableClass),
            n.addClass(e.modifierClass + e.type),
            n.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            "bullets" === e.type &&
              e.dynamicBullets &&
              (n.addClass(`${e.modifierClass}${e.type}-dynamic`),
              (a = 0),
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type &&
              e.progressbarOpposite &&
              n.addClass(e.progressbarOppositeClass),
            e.clickable &&
              n.on("click", bn(e.bulletClass), function (e) {
                e.preventDefault();
                let n = At(this).index() * t.params.slidesPerGroup;
                t.params.loop && (n += t.loopedSlides), t.slideTo(n);
              }),
            Object.assign(t.pagination, { $el: n, el: n[0] }),
            t.enabled || n.addClass(e.lockClass));
        }
        function f() {
          const e = t.params.pagination;
          if (l()) return;
          const n = t.pagination.$el;
          n.removeClass(e.hiddenClass),
            n.removeClass(e.modifierClass + e.type),
            n.removeClass(
              t.isHorizontal() ? e.horizontalClass : e.verticalClass
            ),
            t.pagination.bullets &&
              t.pagination.bullets.removeClass &&
              t.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && n.off("click", bn(e.bulletClass));
        }
        r("init", () => {
          !1 === t.params.pagination.enabled ? h() : (p(), d(), u());
        }),
          r("activeIndexChange", () => {
            (t.params.loop || void 0 === t.snapIndex) && u();
          }),
          r("snapIndexChange", () => {
            t.params.loop || u();
          }),
          r("slidesLengthChange", () => {
            t.params.loop && (d(), u());
          }),
          r("snapGridLengthChange", () => {
            t.params.loop || (d(), u());
          }),
          r("destroy", () => {
            f();
          }),
          r("enable disable", () => {
            const { $el: e } = t.pagination;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.pagination.lockClass
              );
          }),
          r("lock unlock", () => {
            u();
          }),
          r("click", (e, n) => {
            const r = n.target,
              { $el: s } = t.pagination;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              s &&
              s.length > 0 &&
              !At(r).hasClass(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && r === t.navigation.nextEl) ||
                  (t.navigation.prevEl && r === t.navigation.prevEl))
              )
                return;
              const e = s.hasClass(t.params.pagination.hiddenClass);
              i(!0 === e ? "paginationShow" : "paginationHide"),
                s.toggleClass(t.params.pagination.hiddenClass);
            }
          });
        const h = () => {
          t.$el.addClass(t.params.pagination.paginationDisabledClass),
            t.pagination.$el &&
              t.pagination.$el.addClass(
                t.params.pagination.paginationDisabledClass
              ),
            f();
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.$el.removeClass(t.params.pagination.paginationDisabledClass),
              t.pagination.$el &&
                t.pagination.$el.removeClass(
                  t.params.pagination.paginationDisabledClass
                ),
              p(),
              d(),
              u();
          },
          disable: h,
          render: d,
          update: u,
          init: p,
          destroy: f,
        });
      }
      function xn(e) {
        let t,
          { swiper: n, extendParams: r, on: i, emit: s } = e;
        function o() {
          if (!n.size)
            return (n.autoplay.running = !1), void (n.autoplay.paused = !1);
          const e = n.slides.eq(n.activeIndex);
          let r = n.params.autoplay.delay;
          e.attr("data-swiper-autoplay") &&
            (r = e.attr("data-swiper-autoplay") || n.params.autoplay.delay),
            clearTimeout(t),
            (t = Mt(() => {
              let e;
              n.params.autoplay.reverseDirection
                ? n.params.loop
                  ? (n.loopFix(),
                    (e = n.slidePrev(n.params.speed, !0, !0)),
                    s("autoplay"))
                  : n.isBeginning
                  ? n.params.autoplay.stopOnLastSlide
                    ? l()
                    : ((e = n.slideTo(
                        n.slides.length - 1,
                        n.params.speed,
                        !0,
                        !0
                      )),
                      s("autoplay"))
                  : ((e = n.slidePrev(n.params.speed, !0, !0)), s("autoplay"))
                : n.params.loop
                ? (n.loopFix(),
                  (e = n.slideNext(n.params.speed, !0, !0)),
                  s("autoplay"))
                : n.isEnd
                ? n.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((e = n.slideTo(0, n.params.speed, !0, !0)), s("autoplay"))
                : ((e = n.slideNext(n.params.speed, !0, !0)), s("autoplay")),
                ((n.params.cssMode && n.autoplay.running) || !1 === e) && o();
            }, r));
        }
        function a() {
          return (
            void 0 === t &&
            !n.autoplay.running &&
            ((n.autoplay.running = !0), s("autoplayStart"), o(), !0)
          );
        }
        function l() {
          return (
            !!n.autoplay.running &&
            void 0 !== t &&
            (t && (clearTimeout(t), (t = void 0)),
            (n.autoplay.running = !1),
            s("autoplayStop"),
            !0)
          );
        }
        function c(e) {
          n.autoplay.running &&
            (n.autoplay.paused ||
              (t && clearTimeout(t),
              (n.autoplay.paused = !0),
              0 !== e && n.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                    n.$wrapperEl[0].addEventListener(e, d);
                  })
                : ((n.autoplay.paused = !1), o())));
        }
        function u() {
          const e = yt();
          "hidden" === e.visibilityState && n.autoplay.running && c(),
            "visible" === e.visibilityState &&
              n.autoplay.paused &&
              (o(), (n.autoplay.paused = !1));
        }
        function d(e) {
          n &&
            !n.destroyed &&
            n.$wrapperEl &&
            e.target === n.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((e) => {
              n.$wrapperEl[0].removeEventListener(e, d);
            }),
            (n.autoplay.paused = !1),
            n.autoplay.running ? o() : l());
        }
        function p() {
          n.params.autoplay.disableOnInteraction
            ? l()
            : (s("autoplayPause"), c()),
            ["transitionend", "webkitTransitionEnd"].forEach((e) => {
              n.$wrapperEl[0].removeEventListener(e, d);
            });
        }
        function f() {
          n.params.autoplay.disableOnInteraction ||
            ((n.autoplay.paused = !1), s("autoplayResume"), o());
        }
        (n.autoplay = { running: !1, paused: !1 }),
          r({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          i("init", () => {
            if (n.params.autoplay.enabled) {
              a();
              yt().addEventListener("visibilitychange", u),
                n.params.autoplay.pauseOnMouseEnter &&
                  (n.$el.on("mouseenter", p), n.$el.on("mouseleave", f));
            }
          }),
          i("beforeTransitionStart", (e, t, r) => {
            n.autoplay.running &&
              (r || !n.params.autoplay.disableOnInteraction
                ? n.autoplay.pause(t)
                : l());
          }),
          i("sliderFirstMove", () => {
            n.autoplay.running &&
              (n.params.autoplay.disableOnInteraction ? l() : c());
          }),
          i("touchEnd", () => {
            n.params.cssMode &&
              n.autoplay.paused &&
              !n.params.autoplay.disableOnInteraction &&
              o();
          }),
          i("destroy", () => {
            n.$el.off("mouseenter", p),
              n.$el.off("mouseleave", f),
              n.autoplay.running && l();
            yt().removeEventListener("visibilitychange", u);
          }),
          Object.assign(n.autoplay, { pause: c, run: o, start: a, stop: l });
      }
      function wn() {
        let e = document.querySelectorAll(
          '[class*="__swiper"]:not(.swiper-wrapper)'
        );
        e &&
          e.forEach((e) => {
            e.parentElement.classList.add("swiper"),
              e.classList.add("swiper-wrapper");
            for (const t of e.children) t.classList.add("swiper-slide");
          });
      }
      window.addEventListener("load", function (e) {
        wn(),
          document.querySelector(".about-us-block__slider") &&
            new vn(".swiper", {
              modules: [gn, yn, xn],
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 0,
              autoHeight: !0,
              speed: 800,
              loop: !0,
              pagination: { el: ".slider-quality__pagging", clickable: !0 },
              navigation: {
                nextEl: ".about-us-block__button_next",
                prevEl: ".about-us-block__button_prev",
              },
              on: {},
            });
      });
      n(2352), n(3542);
      var En,
        Sn = n(1807),
        Tn = n.n(Sn),
        Cn =
          (n(4249),
          n(7692),
          n(8165),
          n(7543),
          n(3344),
          n(7323),
          n(4079),
          n(3096)),
        On = n.n(Cn),
        kn = n(1296),
        Ln = n.n(kn),
        An = n(773),
        Mn = n.n(An),
        Pn = [],
        _n = "ResizeObserver loop completed with undelivered notifications.";
      !(function (e) {
        (e.BORDER_BOX = "border-box"),
          (e.CONTENT_BOX = "content-box"),
          (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
      })(En || (En = {}));
      var $n,
        jn = function (e) {
          return Object.freeze(e);
        },
        In = function (e, t) {
          (this.inlineSize = e), (this.blockSize = t), jn(this);
        },
        zn = (function () {
          function e(e, t, n, r) {
            return (
              (this.x = e),
              (this.y = t),
              (this.width = n),
              (this.height = r),
              (this.top = this.y),
              (this.left = this.x),
              (this.bottom = this.top + this.height),
              (this.right = this.left + this.width),
              jn(this)
            );
          }
          return (
            (e.prototype.toJSON = function () {
              var e = this;
              return {
                x: e.x,
                y: e.y,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.width,
                height: e.height,
              };
            }),
            (e.fromRect = function (t) {
              return new e(t.x, t.y, t.width, t.height);
            }),
            e
          );
        })(),
        Dn = function (e) {
          return e instanceof SVGElement && "getBBox" in e;
        },
        Nn = function (e) {
          if (Dn(e)) {
            var t = e.getBBox(),
              n = t.width,
              r = t.height;
            return !n && !r;
          }
          var i = e,
            s = i.offsetWidth,
            o = i.offsetHeight;
          return !(s || o || e.getClientRects().length);
        },
        Rn = function (e) {
          var t;
          if (e instanceof Element) return !0;
          var n =
            null === (t = null == e ? void 0 : e.ownerDocument) || void 0 === t
              ? void 0
              : t.defaultView;
          return !!(n && e instanceof n.Element);
        },
        Bn = "undefined" != typeof window ? window : {},
        Wn = new WeakMap(),
        Fn = /auto|scroll/,
        Hn = /^tb|vertical/,
        Vn = /msie|trident/i.test(Bn.navigator && Bn.navigator.userAgent),
        Gn = function (e) {
          return parseFloat(e || "0");
        },
        qn = function (e, t, n) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            new In((n ? t : e) || 0, (n ? e : t) || 0)
          );
        },
        Xn = jn({
          devicePixelContentBoxSize: qn(),
          borderBoxSize: qn(),
          contentBoxSize: qn(),
          contentRect: new zn(0, 0, 0, 0),
        }),
        Yn = function (e, t) {
          if ((void 0 === t && (t = !1), Wn.has(e) && !t)) return Wn.get(e);
          if (Nn(e)) return Wn.set(e, Xn), Xn;
          var n = getComputedStyle(e),
            r = Dn(e) && e.ownerSVGElement && e.getBBox(),
            i = !Vn && "border-box" === n.boxSizing,
            s = Hn.test(n.writingMode || ""),
            o = !r && Fn.test(n.overflowY || ""),
            a = !r && Fn.test(n.overflowX || ""),
            l = r ? 0 : Gn(n.paddingTop),
            c = r ? 0 : Gn(n.paddingRight),
            u = r ? 0 : Gn(n.paddingBottom),
            d = r ? 0 : Gn(n.paddingLeft),
            p = r ? 0 : Gn(n.borderTopWidth),
            f = r ? 0 : Gn(n.borderRightWidth),
            h = r ? 0 : Gn(n.borderBottomWidth),
            v = d + c,
            m = l + u,
            g = (r ? 0 : Gn(n.borderLeftWidth)) + f,
            b = p + h,
            y = a ? e.offsetHeight - b - e.clientHeight : 0,
            x = o ? e.offsetWidth - g - e.clientWidth : 0,
            w = i ? v + g : 0,
            E = i ? m + b : 0,
            S = r ? r.width : Gn(n.width) - w - x,
            T = r ? r.height : Gn(n.height) - E - y,
            C = S + v + x + g,
            O = T + m + y + b,
            k = jn({
              devicePixelContentBoxSize: qn(
                Math.round(S * devicePixelRatio),
                Math.round(T * devicePixelRatio),
                s
              ),
              borderBoxSize: qn(C, O, s),
              contentBoxSize: qn(S, T, s),
              contentRect: new zn(d, l, S, T),
            });
          return Wn.set(e, k), k;
        },
        Un = function (e, t, n) {
          var r = Yn(e, n),
            i = r.borderBoxSize,
            s = r.contentBoxSize,
            o = r.devicePixelContentBoxSize;
          switch (t) {
            case En.DEVICE_PIXEL_CONTENT_BOX:
              return o;
            case En.BORDER_BOX:
              return i;
            default:
              return s;
          }
        },
        Kn = function (e) {
          var t = Yn(e);
          (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = jn([t.borderBoxSize])),
            (this.contentBoxSize = jn([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = jn([
              t.devicePixelContentBoxSize,
            ]));
        },
        Qn = function (e) {
          if (Nn(e)) return 1 / 0;
          for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
          return t;
        },
        Jn = function () {
          var e = 1 / 0,
            t = [];
          Pn.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
              var r = [];
              n.activeTargets.forEach(function (t) {
                var n = new Kn(t.target),
                  i = Qn(t.target);
                r.push(n),
                  (t.lastReportedSize = Un(t.target, t.observedBox)),
                  i < e && (e = i);
              }),
                t.push(function () {
                  n.callback.call(n.observer, r, n.observer);
                }),
                n.activeTargets.splice(0, n.activeTargets.length);
            }
          });
          for (var n = 0, r = t; n < r.length; n++) {
            (0, r[n])();
          }
          return e;
        },
        Zn = function (e) {
          Pn.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
              t.skippedTargets.splice(0, t.skippedTargets.length),
              t.observationTargets.forEach(function (n) {
                n.isActive() &&
                  (Qn(n.target) > e
                    ? t.activeTargets.push(n)
                    : t.skippedTargets.push(n));
              });
          });
        },
        er = function () {
          var e = 0;
          for (
            Zn(e);
            Pn.some(function (e) {
              return e.activeTargets.length > 0;
            });

          )
            (e = Jn()), Zn(e);
          return (
            Pn.some(function (e) {
              return e.skippedTargets.length > 0;
            }) &&
              (function () {
                var e;
                "function" == typeof ErrorEvent
                  ? (e = new ErrorEvent("error", { message: _n }))
                  : ((e = document.createEvent("Event")).initEvent(
                      "error",
                      !1,
                      !1
                    ),
                    (e.message = _n)),
                  window.dispatchEvent(e);
              })(),
            e > 0
          );
        },
        tr = [],
        nr = function (e) {
          if (!$n) {
            var t = 0,
              n = document.createTextNode("");
            new MutationObserver(function () {
              return tr.splice(0).forEach(function (e) {
                return e();
              });
            }).observe(n, { characterData: !0 }),
              ($n = function () {
                n.textContent = "".concat(t ? t-- : t++);
              });
          }
          tr.push(e), $n();
        },
        rr = 0,
        ir = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        sr = [
          "resize",
          "load",
          "transitionend",
          "animationend",
          "animationstart",
          "animationiteration",
          "keyup",
          "keydown",
          "mouseup",
          "mousedown",
          "mouseover",
          "mouseout",
          "blur",
          "focus",
        ],
        or = function (e) {
          return void 0 === e && (e = 0), Date.now() + e;
        },
        ar = !1,
        lr = new ((function () {
          function e() {
            var e = this;
            (this.stopped = !0),
              (this.listener = function () {
                return e.schedule();
              });
          }
          return (
            (e.prototype.run = function (e) {
              var t = this;
              if ((void 0 === e && (e = 250), !ar)) {
                ar = !0;
                var n,
                  r = or(e);
                (n = function () {
                  var n = !1;
                  try {
                    n = er();
                  } finally {
                    if (((ar = !1), (e = r - or()), !rr)) return;
                    n ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                  }
                }),
                  nr(function () {
                    requestAnimationFrame(n);
                  });
              }
            }),
            (e.prototype.schedule = function () {
              this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
              var e = this,
                t = function () {
                  return e.observer && e.observer.observe(document.body, ir);
                };
              document.body ? t() : Bn.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
              var e = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                sr.forEach(function (t) {
                  return Bn.addEventListener(t, e.listener, !0);
                }));
            }),
            (e.prototype.stop = function () {
              var e = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                sr.forEach(function (t) {
                  return Bn.removeEventListener(t, e.listener, !0);
                }),
                (this.stopped = !0));
            }),
            e
          );
        })())(),
        cr = function (e) {
          !rr && e > 0 && lr.start(), !(rr += e) && lr.stop();
        },
        ur = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || En.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (e.prototype.isActive = function () {
              var e,
                t = Un(this.target, this.observedBox, !0);
              return (
                (e = this.target),
                Dn(e) ||
                  (function (e) {
                    switch (e.tagName) {
                      case "INPUT":
                        if ("image" !== e.type) break;
                      case "VIDEO":
                      case "AUDIO":
                      case "EMBED":
                      case "OBJECT":
                      case "CANVAS":
                      case "IFRAME":
                      case "IMG":
                        return !0;
                    }
                    return !1;
                  })(e) ||
                  "inline" !== getComputedStyle(e).display ||
                  (this.lastReportedSize = t),
                this.lastReportedSize.inlineSize !== t.inlineSize ||
                  this.lastReportedSize.blockSize !== t.blockSize
              );
            }),
            e
          );
        })(),
        dr = function (e, t) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
        },
        pr = new WeakMap(),
        fr = function (e, t) {
          for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
          return -1;
        },
        hr = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var n = new dr(e, t);
              pr.set(e, n);
            }),
            (e.observe = function (e, t, n) {
              var r = pr.get(e),
                i = 0 === r.observationTargets.length;
              fr(r.observationTargets, t) < 0 &&
                (i && Pn.push(r),
                r.observationTargets.push(new ur(t, n && n.box)),
                cr(1),
                lr.schedule());
            }),
            (e.unobserve = function (e, t) {
              var n = pr.get(e),
                r = fr(n.observationTargets, t),
                i = 1 === n.observationTargets.length;
              r >= 0 &&
                (i && Pn.splice(Pn.indexOf(n), 1),
                n.observationTargets.splice(r, 1),
                cr(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                n = pr.get(e);
              n.observationTargets.slice().forEach(function (n) {
                return t.unobserve(e, n.target);
              }),
                n.activeTargets.splice(0, n.activeTargets.length);
            }),
            e
          );
        })(),
        vr = (function () {
          function e(e) {
            if (0 === arguments.length)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
              );
            if ("function" != typeof e)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
              );
            hr.connect(this, e);
          }
          return (
            (e.prototype.observe = function (e, t) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!Rn(e))
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              hr.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!Rn(e))
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              hr.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
              hr.disconnect(this);
            }),
            (e.toString = function () {
              return "function ResizeObserver () { [polyfill code] }";
            }),
            e
          );
        })(),
        mr =
          (n(7985),
          n(9989),
          n(8307),
          n(6618),
          n(4390),
          function (e) {
            return Array.prototype.reduce.call(
              e,
              function (e, t) {
                var n = t.name.match(/data-simplebar-(.+)/);
                if (n) {
                  var r = n[1].replace(/\W+(.)/g, function (e, t) {
                    return t.toUpperCase();
                  });
                  switch (t.value) {
                    case "true":
                      e[r] = !0;
                      break;
                    case "false":
                      e[r] = !1;
                      break;
                    case void 0:
                      e[r] = !0;
                      break;
                    default:
                      e[r] = t.value;
                  }
                }
                return e;
              },
              {}
            );
          });
      function gr(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView
          ? e.ownerDocument.defaultView
          : window;
      }
      function br(e) {
        return e && e.ownerDocument ? e.ownerDocument : document;
      }
      var yr = null,
        xr = null;
      function wr(e) {
        if (null === yr) {
          var t = br(e);
          if (void 0 === t) return (yr = 0);
          var n = t.body,
            r = t.createElement("div");
          r.classList.add("simplebar-hide-scrollbar"), n.appendChild(r);
          var i = r.getBoundingClientRect().right;
          n.removeChild(r), (yr = i);
        }
        return yr;
      }
      Tn() &&
        window.addEventListener("resize", function () {
          xr !== window.devicePixelRatio &&
            ((xr = window.devicePixelRatio), (yr = null));
        });
      var Er = (function () {
        function e(t, n) {
          var r = this;
          (this.onScroll = function () {
            var e = gr(r.el);
            r.scrollXTicking ||
              (e.requestAnimationFrame(r.scrollX), (r.scrollXTicking = !0)),
              r.scrollYTicking ||
                (e.requestAnimationFrame(r.scrollY), (r.scrollYTicking = !0));
          }),
            (this.scrollX = function () {
              r.axis.x.isOverflowing &&
                (r.showScrollbar("x"), r.positionScrollbar("x")),
                (r.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              r.axis.y.isOverflowing &&
                (r.showScrollbar("y"), r.positionScrollbar("y")),
                (r.scrollYTicking = !1);
            }),
            (this.onMouseEnter = function () {
              r.showScrollbar("x"), r.showScrollbar("y");
            }),
            (this.onMouseMove = function (e) {
              (r.mouseX = e.clientX),
                (r.mouseY = e.clientY),
                (r.axis.x.isOverflowing || r.axis.x.forceVisible) &&
                  r.onMouseMoveForAxis("x"),
                (r.axis.y.isOverflowing || r.axis.y.forceVisible) &&
                  r.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              r.onMouseMove.cancel(),
                (r.axis.x.isOverflowing || r.axis.x.forceVisible) &&
                  r.onMouseLeaveForAxis("x"),
                (r.axis.y.isOverflowing || r.axis.y.forceVisible) &&
                  r.onMouseLeaveForAxis("y"),
                (r.mouseX = -1),
                (r.mouseY = -1);
            }),
            (this.onWindowResize = function () {
              (r.scrollbarWidth = r.getScrollbarWidth()),
                r.hideNativeScrollbar();
            }),
            (this.hideScrollbars = function () {
              (r.axis.x.track.rect = r.axis.x.track.el.getBoundingClientRect()),
                (r.axis.y.track.rect =
                  r.axis.y.track.el.getBoundingClientRect()),
                r.isWithinBounds(r.axis.y.track.rect) ||
                  (r.axis.y.scrollbar.el.classList.remove(r.classNames.visible),
                  (r.axis.y.isVisible = !1)),
                r.isWithinBounds(r.axis.x.track.rect) ||
                  (r.axis.x.scrollbar.el.classList.remove(r.classNames.visible),
                  (r.axis.x.isVisible = !1));
            }),
            (this.onPointerEvent = function (e) {
              var t, n;
              (r.axis.x.track.rect = r.axis.x.track.el.getBoundingClientRect()),
                (r.axis.y.track.rect =
                  r.axis.y.track.el.getBoundingClientRect()),
                (r.axis.x.isOverflowing || r.axis.x.forceVisible) &&
                  (t = r.isWithinBounds(r.axis.x.track.rect)),
                (r.axis.y.isOverflowing || r.axis.y.forceVisible) &&
                  (n = r.isWithinBounds(r.axis.y.track.rect)),
                (t || n) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  "mousedown" === e.type &&
                    (t &&
                      ((r.axis.x.scrollbar.rect =
                        r.axis.x.scrollbar.el.getBoundingClientRect()),
                      r.isWithinBounds(r.axis.x.scrollbar.rect)
                        ? r.onDragStart(e, "x")
                        : r.onTrackClick(e, "x")),
                    n &&
                      ((r.axis.y.scrollbar.rect =
                        r.axis.y.scrollbar.el.getBoundingClientRect()),
                      r.isWithinBounds(r.axis.y.scrollbar.rect)
                        ? r.onDragStart(e, "y")
                        : r.onTrackClick(e, "y"))));
            }),
            (this.drag = function (t) {
              var n = r.axis[r.draggedAxis].track,
                i = n.rect[r.axis[r.draggedAxis].sizeAttr],
                s = r.axis[r.draggedAxis].scrollbar,
                o = r.contentWrapperEl[r.axis[r.draggedAxis].scrollSizeAttr],
                a = parseInt(r.elStyles[r.axis[r.draggedAxis].sizeAttr], 10);
              t.preventDefault(), t.stopPropagation();
              var l =
                ((("y" === r.draggedAxis ? t.pageY : t.pageX) -
                  n.rect[r.axis[r.draggedAxis].offsetAttr] -
                  r.axis[r.draggedAxis].dragOffset) /
                  (i - s.size)) *
                (o - a);
              "x" === r.draggedAxis &&
                ((l =
                  r.isRtl && e.getRtlHelpers().isRtlScrollbarInverted
                    ? l - (i + s.size)
                    : l),
                (l =
                  r.isRtl && e.getRtlHelpers().isRtlScrollingInverted
                    ? -l
                    : l)),
                (r.contentWrapperEl[r.axis[r.draggedAxis].scrollOffsetAttr] =
                  l);
            }),
            (this.onEndDrag = function (e) {
              var t = br(r.el),
                n = gr(r.el);
              e.preventDefault(),
                e.stopPropagation(),
                r.el.classList.remove(r.classNames.dragging),
                t.removeEventListener("mousemove", r.drag, !0),
                t.removeEventListener("mouseup", r.onEndDrag, !0),
                (r.removePreventClickId = n.setTimeout(function () {
                  t.removeEventListener("click", r.preventClick, !0),
                    t.removeEventListener("dblclick", r.preventClick, !0),
                    (r.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.minScrollbarWidth = 20),
            (this.options = Object.assign({}, e.defaultOptions, n)),
            (this.classNames = Object.assign(
              {},
              e.defaultOptions.classNames,
              this.options.classNames
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
            }),
            (this.removePreventClickId = null),
            e.instances.has(this.el) ||
              ((this.recalculate = On()(this.recalculate.bind(this), 64)),
              (this.onMouseMove = On()(this.onMouseMove.bind(this), 64)),
              (this.hideScrollbars = Ln()(
                this.hideScrollbars.bind(this),
                this.options.timeout
              )),
              (this.onWindowResize = Ln()(this.onWindowResize.bind(this), 64, {
                leading: !0,
              })),
              (e.getRtlHelpers = Mn()(e.getRtlHelpers)),
              this.init());
        }
        (e.getRtlHelpers = function () {
          var t = document.createElement("div");
          t.innerHTML =
            '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
          var n = t.firstElementChild;
          document.body.appendChild(n);
          var r = n.firstElementChild;
          n.scrollLeft = 0;
          var i = e.getOffset(n),
            s = e.getOffset(r);
          n.scrollLeft = 999;
          var o = e.getOffset(r);
          return {
            isRtlScrollingInverted: i.left !== s.left && s.left - o.left != 0,
            isRtlScrollbarInverted: i.left !== s.left,
          };
        }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              n = br(e),
              r = gr(e);
            return {
              top: t.top + (r.pageYOffset || n.documentElement.scrollTop),
              left: t.left + (r.pageXOffset || n.documentElement.scrollLeft),
            };
          });
        var t = e.prototype;
        return (
          (t.init = function () {
            e.instances.set(this.el, this),
              Tn() &&
                (this.initDOM(),
                this.setAccessibilityAttributes(),
                (this.scrollbarWidth = this.getScrollbarWidth()),
                this.recalculate(),
                this.initListeners());
          }),
          (t.initDOM = function () {
            var e = this;
            if (
              Array.prototype.filter.call(this.el.children, function (t) {
                return t.classList.contains(e.classNames.wrapper);
              }).length
            )
              (this.wrapperEl = this.el.querySelector(
                "." + this.classNames.wrapper
              )),
                (this.contentWrapperEl =
                  this.options.scrollableNode ||
                  this.el.querySelector("." + this.classNames.contentWrapper)),
                (this.contentEl =
                  this.options.contentNode ||
                  this.el.querySelector("." + this.classNames.contentEl)),
                (this.offsetEl = this.el.querySelector(
                  "." + this.classNames.offset
                )),
                (this.maskEl = this.el.querySelector(
                  "." + this.classNames.mask
                )),
                (this.placeholderEl = this.findChild(
                  this.wrapperEl,
                  "." + this.classNames.placeholder
                )),
                (this.heightAutoObserverWrapperEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverWrapperEl
                )),
                (this.heightAutoObserverEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverEl
                )),
                (this.axis.x.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.horizontal
                )),
                (this.axis.y.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.vertical
                ));
            else {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  this.wrapperEl.classList.add(this.classNames.wrapper),
                  this.contentWrapperEl.classList.add(
                    this.classNames.contentWrapper
                  ),
                  this.offsetEl.classList.add(this.classNames.offset),
                  this.maskEl.classList.add(this.classNames.mask),
                  this.contentEl.classList.add(this.classNames.contentEl),
                  this.placeholderEl.classList.add(this.classNames.placeholder),
                  this.heightAutoObserverWrapperEl.classList.add(
                    this.classNames.heightAutoObserverWrapperEl
                  ),
                  this.heightAutoObserverEl.classList.add(
                    this.classNames.heightAutoObserverEl
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var t = document.createElement("div"),
                n = document.createElement("div");
              t.classList.add(this.classNames.track),
                n.classList.add(this.classNames.scrollbar),
                t.appendChild(n),
                (this.axis.x.track.el = t.cloneNode(!0)),
                this.axis.x.track.el.classList.add(this.classNames.horizontal),
                (this.axis.y.track.el = t.cloneNode(!0)),
                this.axis.y.track.el.classList.add(this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
              "." + this.classNames.scrollbar
            )),
              (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
                "." + this.classNames.scrollbar
              )),
              this.options.autoHide ||
                (this.axis.x.scrollbar.el.classList.add(
                  this.classNames.visible
                ),
                this.axis.y.scrollbar.el.classList.add(
                  this.classNames.visible
                )),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.setAccessibilityAttributes = function () {
            var e = this.options.ariaLabel || "scrollable content";
            this.contentWrapperEl.setAttribute("tabindex", "0"),
              this.contentWrapperEl.setAttribute("role", "region"),
              this.contentWrapperEl.setAttribute("aria-label", e);
          }),
          (t.initListeners = function () {
            var e = this,
              t = gr(this.el);
            this.options.autoHide &&
              this.el.addEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl.addEventListener("scroll", this.onScroll),
              t.addEventListener("resize", this.onWindowResize);
            var n = !1,
              r = t.ResizeObserver || vr;
            (this.resizeObserver = new r(function () {
              n && e.recalculate();
            })),
              this.resizeObserver.observe(this.el),
              this.resizeObserver.observe(this.contentEl),
              t.requestAnimationFrame(function () {
                n = !0;
              }),
              (this.mutationObserver = new t.MutationObserver(
                this.recalculate
              )),
              this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0,
              });
          }),
          (t.recalculate = function () {
            var e = gr(this.el);
            (this.elStyles = e.getComputedStyle(this.el)),
              (this.isRtl = "rtl" === this.elStyles.direction);
            var t = this.heightAutoObserverEl.offsetHeight <= 1,
              n = this.heightAutoObserverEl.offsetWidth <= 1,
              r = this.contentEl.offsetWidth,
              i = this.contentWrapperEl.offsetWidth,
              s = this.elStyles.overflowX,
              o = this.elStyles.overflowY;
            (this.contentEl.style.padding =
              this.elStyles.paddingTop +
              " " +
              this.elStyles.paddingRight +
              " " +
              this.elStyles.paddingBottom +
              " " +
              this.elStyles.paddingLeft),
              (this.wrapperEl.style.margin =
                "-" +
                this.elStyles.paddingTop +
                " -" +
                this.elStyles.paddingRight +
                " -" +
                this.elStyles.paddingBottom +
                " -" +
                this.elStyles.paddingLeft);
            var a = this.contentEl.scrollHeight,
              l = this.contentEl.scrollWidth;
            (this.contentWrapperEl.style.height = t ? "auto" : "100%"),
              (this.placeholderEl.style.width = n ? r + "px" : "auto"),
              (this.placeholderEl.style.height = a + "px");
            var c = this.contentWrapperEl.offsetHeight;
            (this.axis.x.isOverflowing = l > r),
              (this.axis.y.isOverflowing = a > c),
              (this.axis.x.isOverflowing =
                "hidden" !== s && this.axis.x.isOverflowing),
              (this.axis.y.isOverflowing =
                "hidden" !== o && this.axis.y.isOverflowing),
              (this.axis.x.forceVisible =
                "x" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              (this.axis.y.forceVisible =
                "y" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              this.hideNativeScrollbar();
            var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
              d = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            (this.axis.x.isOverflowing =
              this.axis.x.isOverflowing && l > i - d),
              (this.axis.y.isOverflowing =
                this.axis.y.isOverflowing && a > c - u),
              (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
              (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
              (this.axis.x.scrollbar.el.style.width =
                this.axis.x.scrollbar.size + "px"),
              (this.axis.y.scrollbar.el.style.height =
                this.axis.y.scrollbar.size + "px"),
              this.positionScrollbar("x"),
              this.positionScrollbar("y"),
              this.toggleTrackVisibility("x"),
              this.toggleTrackVisibility("y");
          }),
          (t.getScrollbarSize = function (e) {
            if ((void 0 === e && (e = "y"), !this.axis[e].isOverflowing))
              return 0;
            var t,
              n = this.contentEl[this.axis[e].scrollSizeAttr],
              r = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
              i = r / n;
            return (
              (t = Math.max(~~(i * r), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (t = Math.min(t, this.options.scrollbarMaxSize)),
              t
            );
          }),
          (t.positionScrollbar = function (t) {
            if ((void 0 === t && (t = "y"), this.axis[t].isOverflowing)) {
              var n = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                r = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                i = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                s = this.axis[t].scrollbar,
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  (o =
                    "x" === t &&
                    this.isRtl &&
                    e.getRtlHelpers().isRtlScrollingInverted
                      ? -o
                      : o) /
                  (n - i),
                l = ~~((r - s.size) * a);
              (l =
                "x" === t &&
                this.isRtl &&
                e.getRtlHelpers().isRtlScrollbarInverted
                  ? l + (r - s.size)
                  : l),
                (s.el.style.transform =
                  "x" === t
                    ? "translate3d(" + l + "px, 0, 0)"
                    : "translate3d(0, " + l + "px, 0)");
            }
          }),
          (t.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              n = this.axis[e].scrollbar.el;
            this.axis[e].isOverflowing || this.axis[e].forceVisible
              ? ((t.style.visibility = "visible"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "scroll"))
              : ((t.style.visibility = "hidden"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "hidden")),
              this.axis[e].isOverflowing
                ? (n.style.display = "block")
                : (n.style.display = "none");
          }),
          (t.hideNativeScrollbar = function () {
            (this.offsetEl.style[this.isRtl ? "left" : "right"] =
              this.axis.y.isOverflowing || this.axis.y.forceVisible
                ? "-" + this.scrollbarWidth + "px"
                : 0),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-" + this.scrollbarWidth + "px"
                  : 0);
          }),
          (t.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y"),
              (this.axis[e].track.rect =
                this.axis[e].track.el.getBoundingClientRect()),
              (this.axis[e].scrollbar.rect =
                this.axis[e].scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(this.axis[e].scrollbar.rect)
                ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover)
                : this.axis[e].scrollbar.el.classList.remove(
                    this.classNames.hover
                  ),
              this.isWithinBounds(this.axis[e].track.rect)
                ? (this.showScrollbar(e),
                  this.axis[e].track.el.classList.add(this.classNames.hover))
                : this.axis[e].track.el.classList.remove(this.classNames.hover);
          }),
          (t.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].track.el.classList.remove(this.classNames.hover),
              this.axis[e].scrollbar.el.classList.remove(this.classNames.hover);
          }),
          (t.showScrollbar = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].scrollbar.el;
            this.axis[e].isVisible ||
              (t.classList.add(this.classNames.visible),
              (this.axis[e].isVisible = !0)),
              this.options.autoHide && this.hideScrollbars();
          }),
          (t.onDragStart = function (e, t) {
            void 0 === t && (t = "y");
            var n = br(this.el),
              r = gr(this.el),
              i = this.axis[t].scrollbar,
              s = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset = s - i.rect[this.axis[t].offsetAttr]),
              (this.draggedAxis = t),
              this.el.classList.add(this.classNames.dragging),
              n.addEventListener("mousemove", this.drag, !0),
              n.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (n.addEventListener("click", this.preventClick, !0),
                  n.addEventListener("dblclick", this.preventClick, !0))
                : (r.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (t.onTrackClick = function (e, t) {
            var n = this;
            if ((void 0 === t && (t = "y"), this.options.clickOnTrack)) {
              var r = gr(this.el);
              this.axis[t].scrollbar.rect =
                this.axis[t].scrollbar.el.getBoundingClientRect();
              var i = this.axis[t].scrollbar.rect[this.axis[t].offsetAttr],
                s = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  ("y" === t ? this.mouseY - i : this.mouseX - i) < 0 ? -1 : 1,
                l = -1 === a ? o - s : o + s;
              !(function e() {
                var i, s;
                -1 === a
                  ? o > l &&
                    ((o -= n.options.clickOnTrackSpeed),
                    n.contentWrapperEl.scrollTo(
                      (((i = {})[n.axis[t].offsetAttr] = o), i)
                    ),
                    r.requestAnimationFrame(e))
                  : o < l &&
                    ((o += n.options.clickOnTrackSpeed),
                    n.contentWrapperEl.scrollTo(
                      (((s = {})[n.axis[t].offsetAttr] = o), s)
                    ),
                    r.requestAnimationFrame(e));
              })();
            }
          }),
          (t.getContentElement = function () {
            return this.contentEl;
          }),
          (t.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (t.getScrollbarWidth = function () {
            try {
              return "none" ===
                getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                  .display ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : wr(this.el);
            } catch (e) {
              return wr(this.el);
            }
          }),
          (t.removeListeners = function () {
            var e = this,
              t = gr(this.el);
            this.options.autoHide &&
              this.el.removeEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll
                ),
              t.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.recalculate.cancel(),
              this.onMouseMove.cancel(),
              this.hideScrollbars.cancel(),
              this.onWindowResize.cancel();
          }),
          (t.unMount = function () {
            this.removeListeners(), e.instances.delete(this.el);
          }),
          (t.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (t.findChild = function (e, t) {
            var n =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return n.call(e, t);
            })[0];
          }),
          e
        );
      })();
      (Er.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        clickOnTrackSpeed: 40,
        classNames: {
          contentEl: "simplebar-content",
          contentWrapper: "simplebar-content-wrapper",
          offset: "simplebar-offset",
          mask: "simplebar-mask",
          wrapper: "simplebar-wrapper",
          placeholder: "simplebar-placeholder",
          scrollbar: "simplebar-scrollbar",
          track: "simplebar-track",
          heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
          heightAutoObserverEl: "simplebar-height-auto-observer",
          visible: "simplebar-visible",
          horizontal: "simplebar-horizontal",
          vertical: "simplebar-vertical",
          hover: "simplebar-hover",
          dragging: "simplebar-dragging",
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3,
      }),
        (Er.instances = new WeakMap()),
        (Er.initDOMLoadedElements = function () {
          document.removeEventListener(
            "DOMContentLoaded",
            this.initDOMLoadedElements
          ),
            window.removeEventListener("load", this.initDOMLoadedElements),
            Array.prototype.forEach.call(
              document.querySelectorAll("[data-simplebar]"),
              function (e) {
                "init" === e.getAttribute("data-simplebar") ||
                  Er.instances.has(e) ||
                  new Er(e, mr(e.attributes));
              }
            );
        }),
        (Er.removeObserver = function () {
          this.globalObserver.disconnect();
        }),
        (Er.initHtmlApi = function () {
          (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
            "undefined" != typeof MutationObserver &&
              ((this.globalObserver = new MutationObserver(Er.handleMutations)),
              this.globalObserver.observe(document, {
                childList: !0,
                subtree: !0,
              })),
            "complete" === document.readyState ||
            ("loading" !== document.readyState &&
              !document.documentElement.doScroll)
              ? window.setTimeout(this.initDOMLoadedElements)
              : (document.addEventListener(
                  "DOMContentLoaded",
                  this.initDOMLoadedElements
                ),
                window.addEventListener("load", this.initDOMLoadedElements));
        }),
        (Er.handleMutations = function (e) {
          e.forEach(function (e) {
            Array.prototype.forEach.call(e.addedNodes, function (e) {
              1 === e.nodeType &&
                (e.hasAttribute("data-simplebar")
                  ? !Er.instances.has(e) &&
                    document.documentElement.contains(e) &&
                    new Er(e, mr(e.attributes))
                  : Array.prototype.forEach.call(
                      e.querySelectorAll("[data-simplebar]"),
                      function (e) {
                        "init" !== e.getAttribute("data-simplebar") &&
                          !Er.instances.has(e) &&
                          document.documentElement.contains(e) &&
                          new Er(e, mr(e.attributes));
                      }
                    ));
            }),
              Array.prototype.forEach.call(e.removedNodes, function (e) {
                1 === e.nodeType &&
                  ("init" === e.getAttribute("data-simplebar")
                    ? Er.instances.has(e) &&
                      !document.documentElement.contains(e) &&
                      Er.instances.get(e).unMount()
                    : Array.prototype.forEach.call(
                        e.querySelectorAll('[data-simplebar="init"]'),
                        function (e) {
                          Er.instances.has(e) &&
                            !document.documentElement.contains(e) &&
                            Er.instances.get(e).unMount();
                        }
                      ));
              });
          });
        }),
        (Er.getOptions = mr),
        Tn() && Er.initHtmlApi();
      let Sr = !1;
      setTimeout(() => {
        if (Sr) {
          let e = new Event("windowScroll");
          window.addEventListener("scroll", function (t) {
            document.dispatchEvent(e);
          });
        }
      }, 0),
        window.addEventListener("scroll", (e) => {
          const t = document.querySelector(".parallax-image");
          t && (t.style.cssText = `top: ${0.5 * window.scrollY}px;`);
        }),
        (window.FLS = !0),
        (function (e) {
          let t = new Image();
          (t.onload = t.onerror =
            function () {
              e(2 == t.height);
            }),
            (t.src =
              "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
        })(function (e) {
          let t = !0 === e ? "webp" : "no-webp";
          document.documentElement.classList.add(t);
        }),
        (function () {
          let e = document.querySelector(".icon-menu");
          e &&
            e.addEventListener("click", function (e) {
              i &&
                (((e = 500) => {
                  document.documentElement.classList.contains("lock")
                    ? s(e)
                    : o(e);
                })(),
                document.documentElement.classList.toggle("menu-open"));
            });
        })(),
        (function () {
          const e = document.querySelectorAll("[data-spollers]");
          if (e.length > 0) {
            const n = Array.from(e).filter(function (e, t, n) {
              return !e.dataset.spollers.split(",")[0];
            });
            n.length && s(n);
            let i = l(e, "spollers");
            function s(e, t = !1) {
              e.forEach((e) => {
                (e = t ? e.item : e),
                  t.matches || !t
                    ? (e.classList.add("_spoller-init"),
                      o(e),
                      e.addEventListener("click", a))
                    : (e.classList.remove("_spoller-init"),
                      o(e, !1),
                      e.removeEventListener("click", a));
              });
            }
            function o(e, t = !0) {
              const n = e.querySelectorAll("[data-spoller]");
              n.length > 0 &&
                n.forEach((e) => {
                  t
                    ? (e.removeAttribute("tabindex"),
                      e.classList.contains("_spoller-active") ||
                        (e.nextElementSibling.hidden = !0))
                    : (e.setAttribute("tabindex", "-1"),
                      (e.nextElementSibling.hidden = !1));
                });
            }
            function a(e) {
              const n = e.target;
              if (n.closest("[data-spoller]")) {
                const i = n.closest("[data-spoller]"),
                  s = i.closest("[data-spollers]"),
                  o = !!s.hasAttribute("data-one-spoller");
                s.querySelectorAll("._slide").length ||
                  (o && !i.classList.contains("_spoller-active") && c(s),
                  i.classList.toggle("_spoller-active"),
                  ((e, n = 500) => {
                    e.hidden ? r(e, n) : t(e, n);
                  })(i.nextElementSibling, 300)),
                  e.preventDefault();
              }
            }
            function c(e) {
              const n = e.querySelector("[data-spoller]._spoller-active");
              n &&
                (n.classList.remove("_spoller-active"),
                t(n.nextElementSibling, 300));
            }
            i &&
              i.length &&
              i.forEach((e) => {
                e.matchMedia.addEventListener("change", function () {
                  s(e.itemsArray, e.matchMedia);
                }),
                  s(e.itemsArray, e.matchMedia);
              });
          }
        })(),
        (function () {
          const e = document.querySelectorAll(".rating");
          e.length > 0 &&
            (function () {
              let t, n;
              for (let t = 0; t < e.length; t++) {
                r(e[t]);
              }
              function r(e) {
                i(e), s(), e.classList.contains("rating_set") && o(e);
              }
              function i(e) {
                (t = e.querySelector(".rating__active")),
                  (n = e.querySelector(".rating__value"));
              }
              function s(e = n.innerHTML) {
                const r = e / 0.05;
                t.style.width = `${r}%`;
              }
              function o(e) {
                const t = e.querySelectorAll(".rating__item");
                for (let r = 0; r < t.length; r++) {
                  const o = t[r];
                  o.addEventListener("mouseenter", function (t) {
                    i(e), s(o.value);
                  }),
                    o.addEventListener("mouseleave", function (e) {
                      s();
                    }),
                    o.addEventListener("click", function (t) {
                      i(e),
                        e.dataset.ajax
                          ? a(o.value, e)
                          : ((n.innerHTML = r + 1), s());
                    });
                }
              }
              async function a(e, t) {
                if (!t.classList.contains("rating_sending")) {
                  t.classList.add("rating_sending");
                  let e = await fetch("rating.json", { method: "GET" });
                  if (e.ok) {
                    const r = (await e.json()).newRating;
                    (n.innerHTML = r),
                      s(),
                      t.classList.remove("rating_sending");
                  } else alert("Ошибка"), t.classList.remove("rating_sending");
                }
              }
            })();
        })(),
        (function () {
          function e(e) {
            if ("click" === e.type) {
              const t = e.target;
              if (t.closest("[data-goto]")) {
                const n = t.closest("[data-goto]"),
                  r = n.dataset.goto ? n.dataset.goto : "",
                  i = !!n.hasAttribute("data-goto-header"),
                  s = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
                c(r, i, s), e.preventDefault();
              }
            } else if ("watcherCallback" === e.type && e.detail) {
              const t = e.detail.entry,
                n = t.target;
              if ("navigator" === n.dataset.watch) {
                const e = n.id,
                  r =
                    (document.querySelector("[data-goto]._navigator-active"),
                    document.querySelector(`[data-goto="${e}"]`));
                t.isIntersecting
                  ? r && r.classList.add("_navigator-active")
                  : r && r.classList.remove("_navigator-active");
              }
            }
          }
          document.addEventListener("click", e),
            document.addEventListener("watcherCallback", e);
        })(),
        (function () {
          Sr = !0;
          const e = document.querySelector("header.header"),
            t = e.hasAttribute("data-scroll-show"),
            n = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
            r = e.dataset.scroll ? e.dataset.scroll : 1;
          let i,
            s = 0;
          document.addEventListener("windowScroll", function (o) {
            const a = window.scrollY;
            clearTimeout(i),
              a >= r
                ? (!e.classList.contains("_header-scroll") &&
                    e.classList.add("_header-scroll"),
                  t &&
                    (a > s
                      ? e.classList.contains("_header-show") &&
                        e.classList.remove("_header-show")
                      : !e.classList.contains("_header-show") &&
                        e.classList.add("_header-show"),
                    (i = setTimeout(() => {
                      !e.classList.contains("_header-show") &&
                        e.classList.add("_header-show");
                    }, n))))
                : (e.classList.contains("_header-scroll") &&
                    e.classList.remove("_header-scroll"),
                  t &&
                    e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")),
              (s = a <= 0 ? 0 : a);
          });
        })();
    })();
})();
