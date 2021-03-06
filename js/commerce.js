var Commerce = function() {
	"use strict";

	function _objectWithoutPropertiesLoose(e, t) {
		if (e == null) return {};
		var r = {};
		var n = Object.keys(e);
		var i, o;
		for (o = 0; o < n.length; o++) {
			i = n[o];
			if (t.indexOf(i) >= 0) continue;
			r[i] = e[i]
		}
		return r
	}
	var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

	function _objectWithoutProperties(e, t) {
		if (e == null) return {};
		var r = objectWithoutPropertiesLoose(e, t);
		var n, i;
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			for (i = 0; i < o.length; i++) {
				n = o[i];
				if (t.indexOf(n) >= 0) continue;
				if (!Object.prototype.propertyIsEnumerable.call(e, n)) continue;
				r[n] = e[n]
			}
		}
		return r
	}
	var objectWithoutProperties = _objectWithoutProperties;

	function _arrayLikeToArray(e, t) {
		if (t == null || t > e.length) t = e.length;
		for (var r = 0, n = new Array(t); r < t; r++) {
			n[r] = e[r]
		}
		return n
	}
	var arrayLikeToArray = _arrayLikeToArray;

	function _arrayWithoutHoles(e) {
		if (Array.isArray(e)) return arrayLikeToArray(e)
	}
	var arrayWithoutHoles = _arrayWithoutHoles;

	function _iterableToArray(e) {
		if (typeof Symbol !== "undefined" && Symbol.iterator in Object(e)) return Array.from(e)
	}
	var iterableToArray = _iterableToArray;

	function _unsupportedIterableToArray(e, t) {
		if (!e) return;
		if (typeof e === "string") return arrayLikeToArray(e, t);
		var r = Object.prototype.toString.call(e).slice(8, -1);
		if (r === "Object" && e.constructor) r = e.constructor.name;
		if (r === "Map" || r === "Set") return Array.from(e);
		if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return arrayLikeToArray(e, t)
	}
	var unsupportedIterableToArray = _unsupportedIterableToArray;

	function _nonIterableSpread() {
		throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}
	var nonIterableSpread = _nonIterableSpread;

	function _toConsumableArray(e) {
		return arrayWithoutHoles(e) || iterableToArray(e) || unsupportedIterableToArray(e) || nonIterableSpread()
	}
	var toConsumableArray = _toConsumableArray;

	function createCommonjsModule(e, t) {
		return t = {
			t: {}
		}, e(t, t.t), t.t
	}
	var _typeof_1 = createCommonjsModule((function(e) {
		function t(r) {
			"@babel/helpers - typeof";
			if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
				e.t = t = function e(t) {
					return typeof t
				}
			} else {
				e.t = t = function e(t) {
					return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}
			}
			return t(r)
		}
		e.t = t
	}));

	function _defineProperty(e, t, r) {
		if (t in e) {
			Object.defineProperty(e, t, {
				value: r,
				i: true,
				o: true,
				writable: true
			})
		} else {
			e[t] = r
		}
		return e
	}
	var defineProperty = _defineProperty;

	function _classCallCheck(e, t) {
		if (!(e instanceof t)) {
			throw new TypeError("Cannot call a class as a function")
		}
	}
	var classCallCheck = _classCallCheck;

	function _defineProperties(e, t) {
		for (var r = 0; r < t.length; r++) {
			var n = t[r];
			n.i = n.i || false;
			n.o = true;
			if ("value" in n) n.writable = true;
			Object.defineProperty(e, n.key, n)
		}
	}

	function _createClass(e, t, r) {
		if (t) _defineProperties(e.prototype, t);
		if (r) _defineProperties(e, r);
		return e
	}
	var createClass = _createClass;
	var Storage = function() {
		function e(t) {
			classCallCheck(this, e);
			this.u = t
		}
		createClass(e, [{
			key: "set",
			value: function e(t, r, n) {
				if (!document) {
					return null
				}
				var i;
				var o = "";
				if (!this.u.options.l || typeof this.u.options.l.h === "undefined") {
					i = "/"
				} else {
					i = this.u.options.l.h
				}
				if (n) {
					var u = new Date;
					u.setTime(u.getTime() + n * 24 * 60 * 60 * 1e3);
					o = "; expires=" + u.toGMTString()
				}
				return document.cookie = t + "=" + r + o + "; path=" + i
			}
		}, {
			key: "get",
			value: function e(t) {
				if (!document) {
					return null
				}
				t = t + "=";
				for (var r = 0, n = Array.from(document.cookie.split(";")); r < n.length; r++) {
					var i = n[r];
					while (i.charAt(0) === " ") {
						i = i.substring(1, i.length)
					}
					if (i.indexOf(t) === 0) {
						return i.substring(t.length, i.length)
					}
				}
				return null
			}
		}, {
			key: "remove",
			value: function e(t) {
				return this.set(t, "", -1)
			}
		}]);
		return e
	}();
	var runtime_1 = createCommonjsModule((function(e) {
		var t = function(e) {
			var t = Object.prototype;
			var r = t.hasOwnProperty;
			var n;
			var i = typeof Symbol === "function" ? Symbol : {};
			var o = i.iterator || "@@iterator";
			var u = i.asyncIterator || "@@asyncIterator";
			var a = i.toStringTag || "@@toStringTag";

			function s(e, t, r) {
				Object.defineProperty(e, t, {
					value: r,
					i: true,
					o: true,
					writable: true
				});
				return e[t]
			}
			try {
				s({}, "")
			} catch (e) {
				s = function(e, t, r) {
					return e[t] = r
				}
			}

			function c(e, t, r, n) {
				var i = t && t.prototype instanceof y ? t : y;
				var o = Object.create(i.prototype);
				var u = new E(n || []);
				o.v = S(e, r, u);
				return o
			}
			e.wrap = c;

			function f(e, t, r) {
				try {
					return {
						type: "normal",
						p: e.call(t, r)
					}
				} catch (e) {
					return {
						type: "throw",
						p: e
					}
				}
			}
			var l = "suspendedStart";
			var h = "suspendedYield";
			var d = "executing";
			var v = "completed";
			var p = {};

			function y() {}

			function m() {}

			function b() {}
			var g = {};
			g[o] = function() {
				return this
			};
			var k = Object.getPrototypeOf;
			var w = k && k(k(T([])));
			if (w && w !== t && r.call(w, o)) {
				g = w
			}
			var C = b.prototype = y.prototype = Object.create(g);
			m.prototype = C.constructor = b;
			b.constructor = m;
			m.displayName = s(b, a, "GeneratorFunction");

			function j(e) {
				["next", "throw", "return"].forEach((function(t) {
					s(e, t, (function(e) {
						return this.v(t, e)
					}))
				}))
			}
			e.m = function(e) {
				var t = typeof e === "function" && e.constructor;
				return t ? t === m || (t.displayName || t.name) === "GeneratorFunction" : false
			};
			e.mark = function(e) {
				if (Object.setPrototypeOf) {
					Object.setPrototypeOf(e, b)
				} else {
					e.__proto__ = b;
					s(e, a, "GeneratorFunction")
				}
				e.prototype = Object.create(C);
				return e
			};
			e.g = function(e) {
				return {
					k: e
				}
			};

			function _(e, t) {
				function n(i, o, u, a) {
					var s = f(e[i], e, o);
					if (s.type === "throw") {
						a(s.p)
					} else {
						var c = s.p;
						var l = c.value;
						if (l && typeof l === "object" && r.call(l, "__await")) {
							return t.resolve(l.k).then((function(e) {
								n("next", e, u, a)
							}), (function(e) {
								n("throw", e, u, a)
							}))
						}
						return t.resolve(l).then((function(e) {
							c.value = e;
							u(c)
						}), (function(e) {
							return n("throw", e, u, a)
						}))
					}
				}
				var i;

				function o(e, r) {
					function o() {
						return new t((function(t, i) {
							n(e, r, t, i)
						}))
					}
					return i = i ? i.then(o, o) : o()
				}
				this.v = o
			}
			j(_.prototype);
			_.prototype[u] = function() {
				return this
			};
			e.C = _;
			e.async = function(t, r, n, i, o) {
				if (o === void 0) o = Promise;
				var u = new _(c(t, r, n, i), o);
				return e.m(r) ? u : u.next().then((function(e) {
					return e.done ? e.value : u.next()
				}))
			};

			function S(e, t, r) {
				var n = l;
				return function i(o, u) {
					if (n === d) {
						throw new Error("Generator is already running")
					}
					if (n === v) {
						if (o === "throw") {
							throw u
						}
						return P()
					}
					r.method = o;
					r.p = u;
					while (true) {
						var a = r.j;
						if (a) {
							var s = x(a, r);
							if (s) {
								if (s === p) continue;
								return s
							}
						}
						if (r.method === "next") {
							r._ = r.S = r.p
						} else if (r.method === "throw") {
							if (n === l) {
								n = v;
								throw r.p
							}
							r.O(r.p)
						} else if (r.method === "return") {
							r.A("return", r.p)
						}
						n = d;
						var c = f(e, t, r);
						if (c.type === "normal") {
							n = r.done ? v : h;
							if (c.p === p) {
								continue
							}
							return {
								value: c.p,
								done: r.done
							}
						} else if (c.type === "throw") {
							n = v;
							r.method = "throw";
							r.p = c.p
						}
					}
				}
			}

			function x(e, t) {
				var r = e.iterator[t.method];
				if (r === n) {
					t.j = null;
					if (t.method === "throw") {
						if (e.iterator["T"]) {
							t.method = "return";
							t.p = n;
							x(e, t);
							if (t.method === "throw") {
								return p
							}
						}
						t.method = "throw";
						t.p = new TypeError("The iterator does not provide a 'throw' method")
					}
					return p
				}
				var i = f(r, e.iterator, t.p);
				if (i.type === "throw") {
					t.method = "throw";
					t.p = i.p;
					t.j = null;
					return p
				}
				var o = i.p;
				if (!o) {
					t.method = "throw";
					t.p = new TypeError("iterator result is not an object");
					t.j = null;
					return p
				}
				if (o.done) {
					t[e.P] = o.value;
					t.next = e.R;
					if (t.method !== "return") {
						t.method = "next";
						t.p = n
					}
				} else {
					return o
				}
				t.j = null;
				return p
			}
			j(C);
			s(C, a, "Generator");
			C[o] = function() {
				return this
			};
			C.toString = function() {
				return "[object Generator]"
			};

			function O(e) {
				var t = {
					L: e[0]
				};
				if (1 in e) {
					t.D = e[1]
				}
				if (2 in e) {
					t.N = e[2];
					t.I = e[3]
				}
				this.B.push(t)
			}

			function A(e) {
				var t = e.F || {};
				t.type = "normal";
				delete t.p;
				e.F = t
			}

			function E(e) {
				this.B = [{
					L: "root"
				}];
				e.forEach(O, this);
				this.reset(true)
			}
			e.keys = function(e) {
				var t = [];
				for (var r in e) {
					t.push(r)
				}
				t.reverse();
				return function r() {
					while (t.length) {
						var n = t.pop();
						if (n in e) {
							r.value = n;
							r.done = false;
							return r
						}
					}
					r.done = true;
					return r
				}
			};

			function T(e) {
				if (e) {
					var t = e[o];
					if (t) {
						return t.call(e)
					}
					if (typeof e.next === "function") {
						return e
					}
					if (!isNaN(e.length)) {
						var i = -1,
							u = function t() {
								while (++i < e.length) {
									if (r.call(e, i)) {
										t.value = e[i];
										t.done = false;
										return t
									}
								}
								t.value = n;
								t.done = true;
								return t
							};
						return u.next = u
					}
				}
				return {
					next: P
				}
			}
			e.values = T;

			function P() {
				return {
					value: n,
					done: true
				}
			}
			E.prototype = {
				constructor: E,
				reset: function(e) {
					this.U = 0;
					this.next = 0;
					this._ = this.S = n;
					this.done = false;
					this.j = null;
					this.method = "next";
					this.p = n;
					this.B.forEach(A);
					if (!e) {
						for (var t in this) {
							if (t.charAt(0) === "t" && r.call(this, t) && !isNaN(+t.slice(1))) {
								this[t] = n
							}
						}
					}
				},
				stop: function() {
					this.done = true;
					var e = this.B[0];
					var t = e.F;
					if (t.type === "throw") {
						throw t.p
					}
					return this.H
				},
				O: function(e) {
					if (this.done) {
						throw e
					}
					var t = this;

					function i(r, i) {
						a.type = "throw";
						a.p = e;
						t.next = r;
						if (i) {
							t.method = "next";
							t.p = n
						}
						return !!i
					}
					for (var o = this.B.length - 1; o >= 0; --o) {
						var u = this.B[o];
						var a = u.F;
						if (u.L === "root") {
							return i("end")
						}
						if (u.L <= this.U) {
							var s = r.call(u, "catchLoc");
							var c = r.call(u, "finallyLoc");
							if (s && c) {
								if (this.U < u.D) {
									return i(u.D, true)
								} else if (this.U < u.N) {
									return i(u.N)
								}
							} else if (s) {
								if (this.U < u.D) {
									return i(u.D, true)
								}
							} else if (c) {
								if (this.U < u.N) {
									return i(u.N)
								}
							} else {
								throw new Error("try statement without catch or finally")
							}
						}
					}
				},
				A: function(e, t) {
					for (var n = this.B.length - 1; n >= 0; --n) {
						var i = this.B[n];
						if (i.L <= this.U && r.call(i, "finallyLoc") && this.U < i.N) {
							var o = i;
							break
						}
					}
					if (o && (e === "break" || e === "continue") && o.L <= t && t <= o.N) {
						o = null
					}
					var u = o ? o.F : {};
					u.type = e;
					u.p = t;
					if (o) {
						this.method = "next";
						this.next = o.N;
						return p
					}
					return this.complete(u)
				},
				complete: function(e, t) {
					if (e.type === "throw") {
						throw e.p
					}
					if (e.type === "break" || e.type === "continue") {
						this.next = e.p
					} else if (e.type === "return") {
						this.H = this.p = e.p;
						this.method = "return";
						this.next = "end"
					} else if (e.type === "normal" && t) {
						this.next = t
					}
					return p
				},
				finish: function(e) {
					for (var t = this.B.length - 1; t >= 0; --t) {
						var r = this.B[t];
						if (r.N === e) {
							this.complete(r.F, r.I);
							A(r);
							return p
						}
					}
				},
				catch: function(e) {
					for (var t = this.B.length - 1; t >= 0; --t) {
						var r = this.B[t];
						if (r.L === e) {
							var n = r.F;
							if (n.type === "throw") {
								var i = n.p;
								A(r)
							}
							return i
						}
					}
					throw new Error("illegal catch attempt")
				},
				$: function(e, t, r) {
					this.j = {
						iterator: T(e),
						P: t,
						R: r
					};
					if (this.method === "next") {
						this.p = n
					}
					return p
				}
			};
			return e
		}(e.t);
		try {
			regeneratorRuntime = t
		} catch (e) {
			Function("r", "regeneratorRuntime = r")(t)
		}
	}));
	var regenerator = runtime_1;

	function asyncGeneratorStep(e, t, r, n, i, o, u) {
		try {
			var a = e[o](u);
			var s = a.value
		} catch (e) {
			r(e);
			return
		}
		if (a.done) {
			t(s)
		} else {
			Promise.resolve(s).then(n, i)
		}
	}

	function _asyncToGenerator(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise((function(n, i) {
				var o = e.apply(t, r);

				function u(e) {
					asyncGeneratorStep(o, n, i, u, a, "next", e)
				}

				function a(e) {
					asyncGeneratorStep(o, n, i, u, a, "throw", e)
				}
				u(undefined)
			}))
		}
	}
	var asyncToGenerator = _asyncToGenerator;
	var Cart = function() {
		function e(t) {
			classCallCheck(this, e);
			this.u = t;
			this.M = null
		}
		createClass(e, [{
			key: "refresh",
			value: function e() {
				var t = this;
				return this.u.request("carts").then((function(e) {
					var r = e.id;
					t.u.storage.set("commercejs_cart_id", r, 30);
					t.M = r;
					return e
				}))
			}
		}, {
			key: "id",
			value: function e() {
				if (this.M !== null) {
					return this.M
				}
				var t = this.u.storage.get("commercejs_cart_id");
				if (typeof t === "string" && t.length) {
					return t
				}
				return null
			}
		}, {
			key: "request",
			value: function() {
				var e = asyncToGenerator(regenerator.mark((function e() {
					var t = this;
					var r, n, i, o, u, a = arguments;
					return regenerator.wrap((function e(s) {
						while (1) {
							switch (s.U = s.next) {
								case 0:
									r = a.length > 0 && a[0] !== undefined ? a[0] : "";
									n = a.length > 1 && a[1] !== undefined ? a[1] : "get";
									i = a.length > 2 && a[2] !== undefined ? a[2] : null;
									o = a.length > 3 && a[3] !== undefined ? a[3] : false;
									u = typeof r === "string" && r.length ? "/".concat(r) : "";
									if (this.id()) {
										s.next = 8;
										break
									}
									s.next = 8;
									return this.refresh();
								case 8:
									return s.A("return", this.u.request("carts/".concat(this.id()).concat(u), n, i, o).catch((function(e) {
										if (e.statusCode && e.statusCode === 404) {
											return t.refresh().then((function() {
												return t.u.request("carts/".concat(t.id()).concat(u), n, i, o)
											}))
										}
										throw e
									})));
								case 9:
								case "end":
									return s.stop()
							}
						}
					}), e, this)
				})));

				function t() {
					return e.apply(this, arguments)
				}
				return t
			}()
		}, {
			key: "add",
			value: function e(t) {
				var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
				var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var i = {
					id: _typeof_1(t) === "object" ? t.id : t,
					q: r,
					variant: n
				};
				return this.request("", "post", i)
			}
		}, {
			key: "retrieve",
			value: function e() {
				var t = this;
				var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
				if (r) {
					this.M = r
				}
				return this.request().then((function(e) {
					t.M = e && e.id || null;
					return e
				}))
			}
		}, {
			key: "checkQuantity",
			value: function e(t, r) {
				return this.u.request("products/".concat(t)).then((function(e) {
					return r <= e.q
				}))
			}
		}, {
			key: "remove",
			value: function e(t) {
				return this.request("items/".concat(t), "delete")
			}
		}, {
			key: "delete",
			value: function e() {
				return this.request("", "delete")
			}
		}, {
			key: "update",
			value: function e(t, r) {
				return this.request("items/".concat(t), "put", r)
			}
		}, {
			key: "contents",
			value: function e() {
				return this.request("items")
			}
		}, {
			key: "empty",
			value: function e() {
				return this.request("items", "delete")
			}
		}]);
		return e
	}();
	var Categories = function() {
		function e(t) {
			classCallCheck(this, e);
			this.u = t
		}
		createClass(e, [{
			key: "list",
			value: function e() {
				var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
				if (typeof t === "function") {
					return this.u.request("categories")
				}
				return this.u.request("categories", "get", t)
			}
		}, {
			key: "retrieve",
			value: function e(t) {
				var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				return this.u.request("categories/".concat(t), "get", r)
			}
		}]);
		return e
	}();
	var Checkout = function() {
		function Checkout(e) {
			classCallCheck(this, Checkout);
			this.u = e
		}
		createClass(Checkout, [{
			key: "protect",
			value: function protect(token) {
				return this.u.request("checkouts/".concat(token, "/protect")).then((function(data) {
					return eval(data.G)
				}))
			}
		}, {
			key: "generateToken",
			value: function e(t, r) {
				return this.u.request("checkouts/".concat(t), "get", r)
			}
		}, {
			key: "generateTokenFrom",
			value: function e(t, r) {
				if (!["product_id", "cart", "permalink"].includes(t)) {
					throw new Error('Cannot generate a token with unknown "'.concat(t, '" type'))
				}
				return this.W(r, {
					type: t
				})
			}
		}, {
			key: "capture",
			value: function e(t, r) {
				var n = this;
				return this.u.request("checkouts/".concat(t), "post", r).then((function(e) {
					n.u.K.refresh();
					return e
				}))
			}
		}, {
			key: "receipt",
			value: function e(t) {
				return this.u.request("checkouts/".concat(t, "/receipt"))
			}
		}, {
			key: "checkPayWhatYouWant",
			value: function e(t, r) {
				return this.u.request("checkouts/".concat(t, "/check/pay_what_you_want"), "get", r)
			}
		}, {
			key: "fields",
			value: function e(t) {
				return this.u.request("checkouts/".concat(t, "/fields"))
			}
		}, {
			key: "setTaxZone",
			value: function e(t, r) {
				return this.u.request("checkouts/".concat(t, "/helper/set_tax_zone"), "get", r)
			}
		}, {
			key: "getLocationFromIP",
			value: function e(t) {
				var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
				var n = r && r.length ? "?ip_address=".concat(r) : "";
				return this.u.request("checkouts/".concat(t, "/helper/location_from_ip").concat(n))
			}
		}, {
			key: "isFree",
			value: function e(t) {
				return this.u.request("checkouts/".concat(t, "/check/is_free"))
			}
		}, {
			key: "checkVariant",
			value: function e(t, r, n) {
				return this.u.request("checkouts/".concat(t, "/check/").concat(r, "/variant"), "get", n)
			}
		}, {
			key: "checkDiscount",
			value: function e(t, r) {
				return this.u.request("checkouts/".concat(t, "/check/discount"), "get", r)
			}
		}, {
			key: "checkShippingOption",
			value: function e(t, r) {
				return this.u.request("checkouts/".concat(t, "/check/shipping"), "get", r)
			}
		}, {
			key: "getShippingOptions",
			value: function e(t, r) {
				return this.u.request("checkouts/".concat(t, "/helper/shipping_options"), "get", r)
			}
		}, {
			key: "checkQuantity",
			value: function e(t, r, n) {
				return this.u.request("checkouts/".concat(t, "/check/").concat(r, "/quantity"), "get", n)
			}
		}, {
			key: "helperValidation",
			value: function e(t) {
				return this.u.request("checkouts/".concat(t, "/helper/validation"))
			}
		}, {
			key: "getLive",
			value: function e(t) {
				return this.u.request("checkouts/".concat(t, "/live"))
			}
		}, {
			key: "getToken",
			value: function e(t) {
				return this.u.request("checkouts/tokens/".concat(t))
			}
		}, {
			key: "checkGiftcard",
			value: function e(t, r) {
				return this.u.request("checkouts/".concat(t, "/check/giftcard"), "get", r)
			}
		}]);
		return Checkout
	}();

	function ownKeys(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			if (t) n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).i
			}));
			r.push.apply(r, n)
		}
		return r
	}

	function _objectSpread(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = arguments[t] != null ? arguments[t] : {};
			if (t % 2) {
				ownKeys(r, true).forEach((function(t) {
					defineProperty(e, t, r[t])
				}))
			} else if (Object.getOwnPropertyDescriptors) {
				Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
			} else {
				ownKeys(r).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
				}))
			}
		}
		return e
	}
	var Customer = function() {
		function e(t) {
			classCallCheck(this, e);
			this.u = t;
			this.data = {}
		}
		createClass(e, [{
			key: "login",
			value: function e(t, r) {
				return this.u.request("customers/email-token", "post", {
					email: t,
					X: r
				})
			}
		}, {
			key: "getToken",
			value: function e(t) {
				var r = this;
				var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
				return this.u.request("customers/exchange-token", "post", {
					V: t
				}).then((function(e) {
					if (n && (e.Y || e.J)) {
						r.data = {
							id: e.Y || null,
							V: e.J || null
						};
						window.localStorage.setItem("commercejs_customer_id", r.data.id);
						window.localStorage.setItem("commercejs_customer_token", r.data.V)
					}
					return e
				}))
			}
		}, {
			key: "update",
			value: function e() {
				var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				this.Z(r, n);
				return this.ee("customers/".concat(r || this.id()), "PUT", t, {}, n)
			}
		}, {
			key: "getOrders",
			value: function e() {
				var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
				var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
				this.Z(t, r);
				var i = _objectSpread({
					te: "created",
					re: "desc"
				}, n);
				return this.ee("customers/".concat(t || this.id(), "/orders"), "get", i, {}, r)
			}
		}, {
			key: "getOrder",
			value: function e(t) {
				var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				this.Z(r, n);
				return this.ee("customers/".concat(r || this.id(), "/orders/").concat(t), "get", {}, {}, n)
			}
		}, {
			key: "about",
			value: function e() {
				return this.ee("customers/".concat(this.id()))
			}
		}, {
			key: "id",
			value: function e() {
				return this.ne("id")
			}
		}, {
			key: "token",
			value: function e() {
				return this.ne("token")
			}
		}, {
			key: "isLoggedIn",
			value: function e() {
				return this.id() !== null && this.V() !== null
			}
		}, {
			key: "logout",
			value: function e() {
				this.data = {};
				window.localStorage.removeItem("commercejs_customer_id");
				window.localStorage.removeItem("commercejs_customer_token")
			}
		}, {
			key: "_fromStorage",
			value: function e(t) {
				if (this.data[t] && this.data[t].length) {
					return this.data[t]
				}
				var r = window.localStorage.getItem("commercejs_customer_".concat(t));
				if (typeof r === "string" && r.length) {
					return r
				}
				return null
			}
		}, {
			key: "_request",
			value: function e(t) {
				var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "get";
				var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
				var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
				var u = o || this.V();
				return this.u.request(t, r, n, _objectSpread({
					ie: undefined,
					oe: "Bearer ".concat(u)
				}, i), u)
			}
		}, {
			key: "_assertArgsProvided",
			value: function e() {
				var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
				var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				if (t === null && !this.id()) {
					throw new Error("A customer ID must be provided when customer is not logged in")
				}
				if (r === null && !this.V()) {
					throw new Error("A customer access token must be provided when customer is not logged in")
				}
			}
		}]);
		return e
	}();
	var Merchants = function() {
		function e(t) {
			classCallCheck(this, e);
			this.u = t
		}
		createClass(e, [{
			key: "about",
			value: function e() {
				return this.u.request("merchants")
			}
		}]);
		return e
	}();
	var Products = function() {
		function e(t) {
			classCallCheck(this, e);
			this.u = t
		}
		createClass(e, [{
			key: "list",
			value: function e() {
				var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
				return this.u.request("products", "get", t)
			}
		}, {
			key: "retrieve",
			value: function e(t) {
				var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				return this.u.request("products/".concat(t), "get", r)
			}
		}]);
		return e
	}();
	var Services = function() {
		function e(t) {
			classCallCheck(this, e);
			this.u = t
		}
		createClass(e, [{
			key: "localeListCountries",
			value: function e() {
				return this.u.request("services/locale/countries")
			}
		}, {
			key: "localeListShippingCountries",
			value: function e(t) {
				return this.u.request("services/locale/".concat(t, "/countries"))
			}
		}, {
			key: "localeListShippingSubdivisions",
			value: function e(t, r) {
				return this.u.request("services/locale/".concat(t, "/countries/").concat(r, "/subdivisions"))
			}
		}, {
			key: "localeListSubdivisions",
			value: function e(t) {
				return this.u.request("services/locale/".concat(t, "/subdivisions"))
			}
		}]);
		return e
	}();
	var Features = {
		ue: Cart,
		ae: Categories,
		se: Checkout,
		ce: Customer,
		fe: Merchants,
		le: Products,
		he: Services
	};
	var consoleHelper = function e() {
		var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "black";
		var r = arguments.length > 1 ? arguments[1] : undefined;
		var n = arguments.length > 2 ? arguments[2] : undefined;
		var i = arguments.length > 3 ? arguments[3] : undefined;
		var o;
		var u;
		var a = false;
		var s;
		var c;
		var f;
		switch (t) {
			case "success":
				t = "#488f5a";
				o = "???   ";
				break;
			case "info":
				t = "DodgerBlue";
				o = "";
				break;
			case "error":
				t = "rgba(244, 67, 54, 1)";
				if (i.error.type === "validation") {
					o = "???? Validation/missing fields";
					r = ""
				} else {
					o = "??? HTTP ERROR "
				}
				a = true;
				break;
			case "warning":
				t = "rgba(208, 154, 35, 1)";
				o = "??????  "
		}
		if (a === true) {
			console.log("%c" + o + r, "color:" + t + ";display:block; width: 100%;padding:2px 2px 2px 0px;font-family: Open Sans, Helvetica, Sans-serif;font-weight:bold;background-color:rgba(244, 67, 54, 0.15);");
			if (_typeof_1(i.error.message) === "object") {
				c = i.error.message;
				u = 0;
				s = c.length;
				f = [];
				while (u < s) {
					console.log("%c" + c[u].de + " %c" + c[u].error, "color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:800;", "color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;");
					f.push(u++)
				}
				return f
			}
			return console.log("%c" + i.error.message, "color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;")
		}
		if (_typeof_1(t) === "object") {
			console.log("%c" + r, "color: PowderBlue;font-weight:bold;font-family: Open Sans, Helvetica, Sans-serif; background-color: RoyalBlue;");
			console.log(t);
			return
		}
		console.log("%c" + o + r, "color:" + t + ";display:block;font-family: Open Sans, Helvetica, Sans-serif;line-height:28px; width: 100%;padding:2px 2px 2px 0px;font-weight:bold;");
		if (n) {
			console.log("%c" + n, "color:#515D6D;line-height:22px;font-weight:400; font-family: Open Sans, Helvetica, Sans-serif;")
		}
	};
	var debuggerOnNotice = function e() {
		var t = "\r\n \r\n                           Che         EcC\r\n                         c....c2    2c....:C\r\n                       c........c2   2c.....:C\r\n                     c............c2   2c.....:C\r\n                   c................c2   2c.....:C\r\n                 c....................c2   2c.....:C\r\n               c........................c2   2c.....:C\r\n             c............................c2   2c.....:C\r\n           c.......:E2  2c..................c2   2c.....:C\r\n         c........h  $$   2c..................c2   2c.....:C\r\n       c.........:C  $cc$  E....................c2   2c.....:C\r\n     c............h    $$  c......................c2   2c.....:C\r\n   c...............:E    E:.........................c2   2c.....:C\r\n   E............................:C c..................h2   2c...:C\r\n     E........................:C     c..................h2   2hC\r\n       E....................:C         c..................h2\r\n         E................:C             c................:C\r\n           E............:C                 c............:C\r\n             E........:C                     c........:C\r\n               E....:C                         c....:C\r\n                 EcC                             EcC\r\n \r\n \r\n \r\n";
		console.log("%c" + t, "font-family: Courier New, Courier, monospace; color: #788ba4; font-weight:bold; font-size: 11px;");
		console.log("%cCommerce.js console debugger is on!  ????", "text-align:center; display:block; font-family: Open Sans, Helvetica, Sans-serif; color: #488f5a; line-height:28px; font-size: 14px");
		console.log("%c????   Need some help? Join our Slack channel - http://slack.commercejs.com \r\n", "text-align:center; display:block; font-family: Open Sans, Helvetica, Sans-serif; color: #515D6D; line-height:20px; font-size: 12px")
	};
	var bind = function e(t, r) {
		return function e() {
			var n = new Array(arguments.length);
			for (var i = 0; i < n.length; i++) {
				n[i] = arguments[i]
			}
			return t.apply(r, n)
		}
	};
	var toString = Object.prototype.toString;

	function isArray(e) {
		return toString.call(e) === "[object Array]"
	}

	function isUndefined(e) {
		return typeof e === "undefined"
	}

	function isBuffer(e) {
		return e !== null && !isUndefined(e) && e.constructor !== null && !isUndefined(e.constructor) && typeof e.constructor.isBuffer === "function" && e.constructor.isBuffer(e)
	}

	function isArrayBuffer(e) {
		return toString.call(e) === "[object ArrayBuffer]"
	}

	function isFormData(e) {
		return typeof FormData !== "undefined" && e instanceof FormData
	}

	function isArrayBufferView(e) {
		var t;
		if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
			t = ArrayBuffer.isView(e)
		} else {
			t = e && e.buffer && e.buffer instanceof ArrayBuffer
		}
		return t
	}

	function isString(e) {
		return typeof e === "string"
	}

	function isNumber(e) {
		return typeof e === "number"
	}

	function isObject(e) {
		return e !== null && typeof e === "object"
	}

	function isPlainObject(e) {
		if (toString.call(e) !== "[object Object]") {
			return false
		}
		var t = Object.getPrototypeOf(e);
		return t === null || t === Object.prototype
	}

	function isDate(e) {
		return toString.call(e) === "[object Date]"
	}

	function isFile(e) {
		return toString.call(e) === "[object File]"
	}

	function isBlob(e) {
		return toString.call(e) === "[object Blob]"
	}

	function isFunction(e) {
		return toString.call(e) === "[object Function]"
	}

	function isStream(e) {
		return isObject(e) && isFunction(e.ve)
	}

	function isURLSearchParams(e) {
		return typeof URLSearchParams !== "undefined" && e instanceof URLSearchParams
	}

	function trim(e) {
		return e.replace(/^\s*/, "").replace(/\s*$/, "")
	}

	function isStandardBrowserEnv() {
		if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
			return false
		}
		return typeof window !== "undefined" && typeof document !== "undefined"
	}

	function forEach(e, t) {
		if (e === null || typeof e === "undefined") {
			return
		}
		if (typeof e !== "object") {
			e = [e]
		}
		if (isArray(e)) {
			for (var r = 0, n = e.length; r < n; r++) {
				t.call(null, e[r], r, e)
			}
		} else {
			for (var i in e) {
				if (Object.prototype.hasOwnProperty.call(e, i)) {
					t.call(null, e[i], i, e)
				}
			}
		}
	}

	function merge() {
		var e = {};

		function t(t, r) {
			if (isPlainObject(e[r]) && isPlainObject(t)) {
				e[r] = merge(e[r], t)
			} else if (isPlainObject(t)) {
				e[r] = merge({}, t)
			} else if (isArray(t)) {
				e[r] = t.slice()
			} else {
				e[r] = t
			}
		}
		for (var r = 0, n = arguments.length; r < n; r++) {
			forEach(arguments[r], t)
		}
		return e
	}

	function extend(e, t, r) {
		forEach(t, (function t(n, i) {
			if (r && typeof n === "function") {
				e[i] = bind(n, r)
			} else {
				e[i] = n
			}
		}));
		return e
	}

	function stripBOM(e) {
		if (e.charCodeAt(0) === 65279) {
			e = e.slice(1)
		}
		return e
	}
	var utils = {
		isArray: isArray,
		pe: isArrayBuffer,
		isBuffer: isBuffer,
		ye: isFormData,
		me: isArrayBufferView,
		be: isString,
		ge: isNumber,
		ke: isObject,
		we: isPlainObject,
		Ce: isUndefined,
		je: isDate,
		isFile: isFile,
		_e: isBlob,
		Se: isFunction,
		xe: isStream,
		Oe: isURLSearchParams,
		Ae: isStandardBrowserEnv,
		forEach: forEach,
		Ee: merge,
		extend: extend,
		trim: trim,
		Te: stripBOM
	};

	function encode(e) {
		return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
	}
	var buildURL = function e(t, r, n) {
		if (!r) {
			return t
		}
		var i;
		if (n) {
			i = n(r)
		} else if (utils.Oe(r)) {
			i = r.toString()
		} else {
			var o = [];
			utils.forEach(r, (function e(t, r) {
				if (t === null || typeof t === "undefined") {
					return
				}
				if (utils.isArray(t)) {
					r = r + "[]"
				} else {
					t = [t]
				}
				utils.forEach(t, (function e(t) {
					if (utils.je(t)) {
						t = t.toISOString()
					} else if (utils.ke(t)) {
						t = JSON.stringify(t)
					}
					o.push(encode(r) + "=" + encode(t))
				}))
			}));
			i = o.join("&")
		}
		if (i) {
			var u = t.indexOf("#");
			if (u !== -1) {
				t = t.slice(0, u)
			}
			t += (t.indexOf("?") === -1 ? "?" : "&") + i
		}
		return t
	};

	function InterceptorManager() {
		this.Pe = []
	}
	InterceptorManager.prototype.Re = function e(t, r) {
		this.Pe.push({
			Le: t,
			De: r
		});
		return this.Pe.length - 1
	};
	InterceptorManager.prototype.Ne = function e(t) {
		if (this.Pe[t]) {
			this.Pe[t] = null
		}
	};
	InterceptorManager.prototype.forEach = function e(t) {
		utils.forEach(this.Pe, (function e(r) {
			if (r !== null) {
				t(r)
			}
		}))
	};
	var InterceptorManager_1 = InterceptorManager;
	var transformData = function e(t, r, n) {
		utils.forEach(n, (function e(n) {
			t = n(t, r)
		}));
		return t
	};
	var isCancel = function e(t) {
		return !!(t && t.Ie)
	};
	var normalizeHeaderName = function e(t, r) {
		utils.forEach(t, (function e(n, i) {
			if (i !== r && i.toUpperCase() === r.toUpperCase()) {
				t[r] = n;
				delete t[i]
			}
		}))
	};
	var enhanceError = function e(t, r, n, i, o) {
		t.l = r;
		if (n) {
			t.code = n
		}
		t.request = i;
		t.response = o;
		t.Be = true;
		t.toJSON = function e() {
			return {
				message: this.message,
				name: this.name,
				description: this.description,
				number: this.number,
				fileName: this.fileName,
				lineNumber: this.lineNumber,
				columnNumber: this.columnNumber,
				stack: this.stack,
				l: this.l,
				code: this.code
			}
		};
		return t
	};
	var createError = function e(t, r, n, i, o) {
		var u = new Error(t);
		return enhanceError(u, r, n, i, o)
	};
	var settle = function e(t, r, n) {
		var i = n.l.Fe;
		if (!n.status || !i || i(n.status)) {
			t(n)
		} else {
			r(createError("Request failed with status code " + n.status, n.l, null, n.request, n))
		}
	};
	var cookies = utils.Ae() ? function e() {
		return {
			write: function e(t, r, n, i, o, u) {
				var a = [];
				a.push(t + "=" + encodeURIComponent(r));
				if (utils.ge(n)) {
					a.push("expires=" + new Date(n).toGMTString())
				}
				if (utils.be(i)) {
					a.push("path=" + i)
				}
				if (utils.be(o)) {
					a.push("domain=" + o)
				}
				if (u === true) {
					a.push("secure")
				}
				document.cookie = a.join("; ")
			},
			read: function e(t) {
				var r = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
				return r ? decodeURIComponent(r[3]) : null
			},
			remove: function e(t) {
				this.write(t, "", Date.now() - 864e5)
			}
		}
	}() : function e() {
		return {
			write: function e() {},
			read: function e() {
				return null
			},
			remove: function e() {}
		}
	}();
	var isAbsoluteURL = function e(t) {
		return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
	};
	var combineURLs = function e(t, r) {
		return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t
	};
	var buildFullPath = function e(t, r) {
		if (t && !isAbsoluteURL(r)) {
			return combineURLs(t, r)
		}
		return r
	};
	var ignoreDuplicateOf = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
	var parseHeaders = function e(t) {
		var r = {};
		var n;
		var i;
		var o;
		if (!t) {
			return r
		}
		utils.forEach(t.split("\n"), (function e(t) {
			o = t.indexOf(":");
			n = utils.trim(t.substr(0, o)).toLowerCase();
			i = utils.trim(t.substr(o + 1));
			if (n) {
				if (r[n] && ignoreDuplicateOf.indexOf(n) >= 0) {
					return
				}
				if (n === "set-cookie") {
					r[n] = (r[n] ? r[n] : []).concat([i])
				} else {
					r[n] = r[n] ? r[n] + ", " + i : i
				}
			}
		}));
		return r
	};
	var isURLSameOrigin = utils.Ae() ? function e() {
		var t = /(msie|trident)/i.test(navigator.userAgent);
		var r = document.createElement("a");
		var n;

		function i(e) {
			var n = e;
			if (t) {
				r.setAttribute("href", n);
				n = r.href
			}
			r.setAttribute("href", n);
			return {
				href: r.href,
				protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
				host: r.host,
				search: r.search ? r.search.replace(/^\?/, "") : "",
				hash: r.hash ? r.hash.replace(/^#/, "") : "",
				hostname: r.hostname,
				port: r.port,
				pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
			}
		}
		n = i(window.location.href);
		return function e(t) {
			var r = utils.be(t) ? i(t) : t;
			return r.protocol === n.protocol && r.host === n.host
		}
	}() : function e() {
		return function e() {
			return true
		}
	}();
	var xhr = function e(t) {
		return new Promise((function e(r, n) {
			var i = t.data;
			var o = t.headers;
			if (utils.ye(i)) {
				delete o["Ue"]
			}
			var u = new XMLHttpRequest;
			if (t.He) {
				var a = t.He.username || "";
				var s = t.He.password ? unescape(encodeURIComponent(t.He.password)) : "";
				o.oe = "Basic " + btoa(a + ":" + s)
			}
			var c = buildFullPath(t.$e, t.url);
			u.open(t.method.toUpperCase(), buildURL(c, t.Me, t.qe), true);
			u.timeout = t.timeout;
			u.onreadystatechange = function e() {
				if (!u || u.readyState !== 4) {
					return
				}
				if (u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0)) {
					return
				}
				var i = "getAllResponseHeaders" in u ? parseHeaders(u.getAllResponseHeaders()) : null;
				var o = !t.responseType || t.responseType === "text" ? u.responseText : u.response;
				var a = {
					data: o,
					status: u.status,
					statusText: u.statusText,
					headers: i,
					l: t,
					request: u
				};
				settle(r, n, a);
				u = null
			};
			u.onabort = function e() {
				if (!u) {
					return
				}
				n(createError("Request aborted", t, "ECONNABORTED", u));
				u = null
			};
			u.onerror = function e() {
				n(createError("Network Error", t, null, u));
				u = null
			};
			u.ontimeout = function e() {
				var r = "timeout of " + t.timeout + "ms exceeded";
				if (t.ze) {
					r = t.ze
				}
				n(createError(r, t, "ECONNABORTED", u));
				u = null
			};
			if (utils.Ae()) {
				var f = (t.withCredentials || isURLSameOrigin(c)) && t.Ge ? cookies.read(t.Ge) : undefined;
				if (f) {
					o[t.We] = f
				}
			}
			if ("setRequestHeader" in u) {
				utils.forEach(o, (function e(t, r) {
					if (typeof i === "undefined" && r.toLowerCase() === "content-type") {
						delete o[r]
					} else {
						u.setRequestHeader(r, t)
					}
				}))
			}
			if (!utils.Ce(t.withCredentials)) {
				u.withCredentials = !!t.withCredentials
			}
			if (t.responseType) {
				try {
					u.responseType = t.responseType
				} catch (e) {
					if (t.responseType !== "json") {
						throw e
					}
				}
			}
			if (typeof t.Ke === "function") {
				u.addEventListener("progress", t.Ke)
			}
			if (typeof t.Xe === "function" && u.upload) {
				u.upload.addEventListener("progress", t.Xe)
			}
			if (t.Ve) {
				t.Ve.promise.then((function e(t) {
					if (!u) {
						return
					}
					u.abort();
					n(t);
					u = null
				}))
			}
			if (!i) {
				i = null
			}
			u.send(i)
		}))
	};
	var DEFAULT_CONTENT_TYPE = {
		Ue: "application/x-www-form-urlencoded"
	};

	function setContentTypeIfUnset(e, t) {
		if (!utils.Ce(e) && utils.Ce(e["Ue"])) {
			e["Ue"] = t
		}
	}

	function getDefaultAdapter() {
		var e;
		if (typeof XMLHttpRequest !== "undefined") {
			e = xhr
		} else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
			e = xhr
		}
		return e
	}
	var defaults = {
		Ye: getDefaultAdapter(),
		Je: [function e(t, r) {
			normalizeHeaderName(r, "Accept");
			normalizeHeaderName(r, "Content-Type");
			if (utils.ye(t) || utils.pe(t) || utils.isBuffer(t) || utils.xe(t) || utils.isFile(t) || utils._e(t)) {
				return t
			}
			if (utils.me(t)) {
				return t.buffer
			}
			if (utils.Oe(t)) {
				setContentTypeIfUnset(r, "application/x-www-form-urlencoded;charset=utf-8");
				return t.toString()
			}
			if (utils.ke(t)) {
				setContentTypeIfUnset(r, "application/json;charset=utf-8");
				return JSON.stringify(t)
			}
			return t
		}],
		Qe: [function e(t) {
			if (typeof t === "string") {
				try {
					t = JSON.parse(t)
				} catch (e) {}
			}
			return t
		}],
		timeout: 0,
		Ge: "XSRF-TOKEN",
		We: "X-XSRF-TOKEN",
		Ze: -1,
		et: -1,
		Fe: function e(t) {
			return t >= 200 && t < 300
		}
	};
	defaults.headers = {
		tt: {
			rt: "application/json, text/plain, */*"
		}
	};
	utils.forEach(["delete", "get", "head"], (function e(t) {
		defaults.headers[t] = {}
	}));
	utils.forEach(["post", "put", "patch"], (function e(t) {
		defaults.headers[t] = utils.Ee(DEFAULT_CONTENT_TYPE)
	}));
	var defaults_1 = defaults;

	function throwIfCancellationRequested(e) {
		if (e.Ve) {
			e.Ve.nt()
		}
	}
	var dispatchRequest = function e(t) {
		throwIfCancellationRequested(t);
		t.headers = t.headers || {};
		t.data = transformData(t.data, t.headers, t.Je);
		t.headers = utils.Ee(t.headers.tt || {}, t.headers[t.method] || {}, t.headers);
		utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function e(r) {
			delete t.headers[r]
		}));
		var r = t.Ye || defaults_1.Ye;
		return r(t).then((function e(r) {
			throwIfCancellationRequested(t);
			r.data = transformData(r.data, r.headers, t.Qe);
			return r
		}), (function e(r) {
			if (!isCancel(r)) {
				throwIfCancellationRequested(t);
				if (r && r.response) {
					r.response.data = transformData(r.response.data, r.response.headers, t.Qe)
				}
			}
			return Promise.reject(r)
		}))
	};
	var mergeConfig = function e(t, r) {
		r = r || {};
		var n = {};
		var i = ["url", "method", "data"];
		var o = ["headers", "auth", "proxy", "params"];
		var u = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"];
		var a = ["validateStatus"];

		function s(e, t) {
			if (utils.we(e) && utils.we(t)) {
				return utils.Ee(e, t)
			} else if (utils.we(t)) {
				return utils.Ee({}, t)
			} else if (utils.isArray(t)) {
				return t.slice()
			}
			return t
		}

		function c(e) {
			if (!utils.Ce(r[e])) {
				n[e] = s(t[e], r[e])
			} else if (!utils.Ce(t[e])) {
				n[e] = s(undefined, t[e])
			}
		}
		utils.forEach(i, (function e(t) {
			if (!utils.Ce(r[t])) {
				n[t] = s(undefined, r[t])
			}
		}));
		utils.forEach(o, c);
		utils.forEach(u, (function e(i) {
			if (!utils.Ce(r[i])) {
				n[i] = s(undefined, r[i])
			} else if (!utils.Ce(t[i])) {
				n[i] = s(undefined, t[i])
			}
		}));
		utils.forEach(a, (function e(i) {
			if (i in r) {
				n[i] = s(t[i], r[i])
			} else if (i in t) {
				n[i] = s(undefined, t[i])
			}
		}));
		var f = i.concat(o).concat(u).concat(a);
		var l = Object.keys(t).concat(Object.keys(r)).filter((function e(t) {
			return f.indexOf(t) === -1
		}));
		utils.forEach(l, c);
		return n
	};

	function Axios(e) {
		this.it = e;
		this.ot = {
			request: new InterceptorManager_1,
			response: new InterceptorManager_1
		}
	}
	Axios.prototype.request = function e(t) {
		if (typeof t === "string") {
			t = arguments[1] || {};
			t.url = arguments[0]
		} else {
			t = t || {}
		}
		t = mergeConfig(this.it, t);
		if (t.method) {
			t.method = t.method.toLowerCase()
		} else if (this.it.method) {
			t.method = this.it.method.toLowerCase()
		} else {
			t.method = "get"
		}
		var r = [dispatchRequest, undefined];
		var n = Promise.resolve(t);
		this.ot.request.forEach((function e(t) {
			r.unshift(t.Le, t.De)
		}));
		this.ot.response.forEach((function e(t) {
			r.push(t.Le, t.De)
		}));
		while (r.length) {
			n = n.then(r.shift(), r.shift())
		}
		return n
	};
	Axios.prototype.ut = function e(t) {
		t = mergeConfig(this.it, t);
		return buildURL(t.url, t.Me, t.qe).replace(/^\?/, "")
	};
	utils.forEach(["delete", "get", "head", "options"], (function e(t) {
		Axios.prototype[t] = function(e, r) {
			return this.request(mergeConfig(r || {}, {
				method: t,
				url: e,
				data: (r || {}).data
			}))
		}
	}));
	utils.forEach(["post", "put", "patch"], (function e(t) {
		Axios.prototype[t] = function(e, r, n) {
			return this.request(mergeConfig(n || {}, {
				method: t,
				url: e,
				data: r
			}))
		}
	}));
	var Axios_1 = Axios;

	function Cancel(e) {
		this.message = e
	}
	Cancel.prototype.toString = function e() {
		return "Cancel" + (this.message ? ": " + this.message : "")
	};
	Cancel.prototype.Ie = true;
	var Cancel_1 = Cancel;

	function CancelToken(e) {
		if (typeof e !== "function") {
			throw new TypeError("executor must be a function.")
		}
		var t;
		this.promise = new Promise((function e(r) {
			t = r
		}));
		var r = this;
		e((function e(n) {
			if (r.reason) {
				return
			}
			r.reason = new Cancel_1(n);
			t(r.reason)
		}))
	}
	CancelToken.prototype.nt = function e() {
		if (this.reason) {
			throw this.reason
		}
	};
	CancelToken.source = function e() {
		var t;
		var r = new CancelToken((function e(r) {
			t = r
		}));
		return {
			V: r,
			cancel: t
		}
	};
	var CancelToken_1 = CancelToken;
	var spread = function e(t) {
		return function e(r) {
			return t.apply(null, r)
		}
	};
	var isAxiosError = function e(t) {
		return typeof t === "object" && t.Be === true
	};

	function createInstance(e) {
		var t = new Axios_1(e);
		var r = bind(Axios_1.prototype.request, t);
		utils.extend(r, Axios_1.prototype, t);
		utils.extend(r, t);
		return r
	}
	var axios = createInstance(defaults_1);
	axios.at = Axios_1;
	axios.create = function e(t) {
		return createInstance(mergeConfig(axios.it, t))
	};
	axios.st = Cancel_1;
	axios.ct = CancelToken_1;
	axios.ft = isCancel;
	axios.all = function e(t) {
		return Promise.all(t)
	};
	axios.lt = spread;
	axios.Be = isAxiosError;
	var axios_1 = axios;
	var default_1 = axios;
	axios_1.default = default_1;
	var axios$1 = axios_1;

	function ownKeys$1(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			if (t) n = n.filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).i
			}));
			r.push.apply(r, n)
		}
		return r
	}

	function _objectSpread$1(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = arguments[t] != null ? arguments[t] : {};
			if (t % 2) {
				ownKeys$1(r, true).forEach((function(t) {
					defineProperty(e, t, r[t])
				}))
			} else if (Object.getOwnPropertyDescriptors) {
				Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
			} else {
				ownKeys$1(r).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
				}))
			}
		}
		return e
	}
	var defaultEventCallback = function e(t) {
		var r = new CustomEvent("Commercejs.".concat(t), {
			bubbles: false,
			cancelable: false
		});
		return window.dispatchEvent(r)
	};
	var Commerce = function() {
		function e(t) {
			var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			classCallCheck(this, e);
			this.options = _objectSpread$1(_objectSpread$1({
				version: "v1",
				url: "https://api.chec.io/",
				ht: defaultEventCallback
			}, n), {}, {
				publicKey: t,
				debug: r
			});
			if (typeof t !== "string" || t.length === 0) {
				throw new Error("?????? Invalid public key given to Commerce.js client")
			}
			if (t.toLowerCase().substring(0, 3) === "sk_") {
				throw new Error("Secret key provided. You must use a public key with Commerce.js!")
			}
			this.storage = new Storage(this);
			this.K = new Features.ue(this);
			this.dt = new Features.se(this);
			this.vt = new Features.ce(this);
			this.yt = new Features.le(this);
			this.bt = new Features.he(this);
			this.gt = new Features.ae(this);
			this.kt = new Features.fe(this);
			if (r) {
				this.wt = consoleHelper;
				debuggerOnNotice()
			}
		}
		createClass(e, [{
			key: "error",
			value: function e(t) {
				if (!this.wt || !this.options.debug) {
					return
				}
				var r = t.response;
				var n = "[".concat(r.status, "] Type: ").concat(r.statusText);
				var i = typeof r.data === "string" ? r.data : r.statusText;
				return this.wt("error", n, i, r.data)
			}
		}, {
			key: "request",
			value: function e(t) {
				var r = this;
				var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "get";
				var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
				var u = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
				var a = {
					ie: this.options.publicKey,
					Ct: "commerce.js/v2",
					Ue: "application/json"
				};
				var s = n === "get" ? i : null;
				var c = n === "get" ? null : i;
				var f = this.options.jt || 6e4;
				var l = this.options._t || {};
				var h = this.options.url;
				if (h.substring(h.length - 1) !== "/") {
					h += "/"
				}
				var d = axios$1(_objectSpread$1(_objectSpread$1({
					url: t,
					method: n,
					$e: "".concat(h).concat(this.options.version, "/"),
					Me: s,
					data: c,
					timeout: f
				}, l), {}, {
					headers: _objectSpread$1(_objectSpread$1(_objectSpread$1({}, a), l.headers), o)
				}));
				if (u) {
					return d
				}
				var v = this.options.ht;
				return d.then((function(e) {
					if (r.wt && r.options.debug && _typeof_1(e.data.St) === "object") {
						r.wt.apply(r, toConsumableArray(e.data.St))
					}
					if (_typeof_1(e.data) !== "object" || Array.isArray(e.data)) {
						return e.data
					}
					var t = e.data,
						n = t.xt,
						i = objectWithoutProperties(t, ["_event"]);
					if (typeof n === "string" && typeof v === "function") {
						v(n)
					}
					return i
				})).catch((function(e) {
					r.error(e);
					throw {
						message: "Unsuccessful response (".concat(e.response.status, ": ").concat(e.response.statusText, ") received"),
						statusCode: e.response.status,
						statusText: e.response.statusText,
						data: e.response.data,
						Ot: e
					}
				}))
			}
		}]);
		return e
	}();
	return Commerce
}();