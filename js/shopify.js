/*
The MIT License (MIT)

Copyright (c) 2016 Shopify Inc.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function(e, d) {
	'object' == typeof exports && 'undefined' != typeof module ? module.exports = d() : 'function' == typeof define && define.amd ? define(d) : e.ShopifyBuy = d()
})(this, function() {
	'use strict';

	function e() {
		for (var e = arguments.length, d = Array(e), a = 0; a < e; a++) d[a] = arguments[a];
		return d.join(' ')
	}

	function d(e) {
		return !!e && '[object Object]' === Object.prototype.toString.call(e.valueOf())
	}

	function a(e, t) {
		return e(t) ? t : d(t) ? Object.freeze(Object.keys(t).reduce(function(d, n) {
			return d[n] = a(e, t[n]), d
		}, {})) : Array.isArray(t) ? Object.freeze(t.map(function(d) {
			return a(e, d)
		})) : t
	}

	function t(e, d) {
		var a = e.types[d];
		if (a) return a;
		throw new Error('No type of ' + d + ' found in schema')
	}

	function n(e) {
		return Te.prototype.isPrototypeOf(e)
	}

	function i(e, d, a) {
		return new Te(e, d, a)
	}

	function r(a) {
		return Te.prototype.isPrototypeOf(a) ? a.toInputValueString() : De.prototype.isPrototypeOf(a) ? a + '' : Ee.prototype.isPrototypeOf(a) ? JSON.stringify(a.valueOf()) : Array.isArray(a) ? '[' + e.apply(void 0, be(a.map(r))) + ']' : d(a) ? o(a, '{', '}') : JSON.stringify(a)
	}

	function o(d) {
		var a = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : '',
			t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : '',
			n = Object.keys(d).map(function(e) {
				return e + ': ' + r(d[e])
			});
		return '' + a + e.apply(void 0, be(n)) + t
	}

	function s(e) {
		return Object.keys(e).length ? ' (' + o(e) + ')' : ''
	}

	function l(e) {
		var d = Ne,
			a = {},
			t = null;
		if (!(2 === e.length)) 1 === e.length && (Je.prototype.isPrototypeOf(e[0]) ? t = e[0] : 'function' == typeof e[0] ? d = e[0] : a = e[0]);
		else if ('function' == typeof e[1]) {
			var n = Oe(e, 2);
			a = n[0], d = n[1]
		} else {
			var i = Oe(e, 2);
			a = i[0], t = i[1]
		}
		return {
			options: a,
			selectionSet: t,
			callback: d
		}
	}

	function c(e) {
		return e.some(function(e) {
			if (Me.prototype.isPrototypeOf(e)) return 'id' === e.name;
			return Re.prototype.isPrototypeOf(e) && e.selectionSet.typeSchema.implementsNode && c(e.selectionSet.selections)
		})
	}

	function p(e) {
		return e.some(function(e) {
			if (Me.prototype.isPrototypeOf(e)) return '__typename' === e.name;
			return Re.prototype.isPrototypeOf(e) && e.selectionSet.typeSchema.implementsNode && p(e.selectionSet.selections)
		})
	}

	function u(e) {
		function d(e, d, a) {
			Array.isArray(e[d]) ? e[d].push(a) : e[d] = [a]
		}
		var a = e.reduce(function(e, a) {
			if (a.responseKey) d(e, a.responseKey, a);
			else {
				var t = Object.keys(a.selectionSet.selectionsByResponseKey);
				t.forEach(function(t) {
					d(e, t, a)
				})
			}
			return e
		}, {});
		return Object.keys(a).forEach(function(e) {
			Object.freeze(a[e])
		}), Object.freeze(a)
	}

	function g(e) {
		var d, a, t;
		if (3 === e.length) {
			var n = Oe(e, 3);
			d = n[0], a = n[1], t = n[2]
		} else 2 === e.length ? ('[object String]' === Object.prototype.toString.call(e[0]) ? (d = e[0], a = null) : Array.isArray(e[0]) && (a = e[0], d = null), t = e[1]) : (t = e[0], d = null);
		return {
			name: d,
			variables: a,
			selectionSetCallback: t
		}
	}

	function m(e) {
		return e.isAnonymous
	}

	function y(e) {
		return e.some(m)
	}

	function h(e) {
		var d = e.map(function(e) {
			return e.name
		});
		return d.reduce(function(e, a, t) {
			return e || d.indexOf(a) !== t
		}, !1)
	}

	function f(e, d) {
		for (var a = arguments.length, t = Array(2 < a ? a - 2 : 0), n = 2; n < a; n++) t[n - 2] = arguments[n];
		return ze.prototype.isPrototypeOf(t[0]) ? t[0] : 'query' === d ? new(Function.prototype.bind.apply(He, [null].concat([e], t))) : new(Function.prototype.bind.apply(je, [null].concat([e], t)))
	}

	function F(e) {
		return 1 !== e.length && (y(e) || h(e))
	}

	function P(e, d) {
		return e.some(function(e) {
			return e.name === d
		})
	}

	function k(e) {
		return '[object Null]' !== Object.prototype.toString.call(e) && '[object Undefined]' !== Object.prototype.toString.call(e)
	}

	function _(e) {
		return e.selection.selectionSet.typeSchema.implementsNode
	}

	function A(e) {
		return e.selection.selectionSet.typeSchema.name.endsWith('Connection')
	}

	function C(e) {
		return null == e ? null : _(e) ? e : C(e.parent)
	}

	function v(e) {
		return e.parent ? v(e.parent).concat(e) : [e]
	}

	function S(e) {
		return e.selection.selectionSet.typeSchema.implementsNode ? [e] : S(e.parent).concat(e)
	}

	function I(e, d) {
		var a = d[d.length - 1],
			t = a.selection.args.first,
			r = Object.keys(a.selection.args).filter(function(e) {
				return n(a.selection.args[e])
			}).map(function(e) {
				return a.selection.args[e]
			}),
			o = r.find(function(e) {
				return 'first' === e.name
			});
		o || (o = i('first', 'Int', t), r.push(o));
		var s = new Xe(e.selection.selectionSet.typeBundle);
		return [s, r, o]
	}

	function O(e, d, a, t) {
		var r = d.shift();
		if (a.push(r.selection.responseKey), d.length) e.add(r.selection.name, {
			alias: r.selection.alias,
			args: r.selection.args
		}, function(e) {
			O(e, d, a, t)
		});
		else {
			var o, s = r.selection.selectionSet.selections.find(function(e) {
					return 'edges' === e.name
				}),
				l = s.selectionSet.selections.find(function(e) {
					return 'node' === e.name
				});
			o = n(r.selection.args.first) ? r.selection.args.first : i('first', 'Int', r.selection.args.first);
			var c = {
				alias: r.selection.alias,
				args: Object.assign({}, r.selection.args, {
					after: t,
					first: o
				})
			};
			e.addConnection(r.selection.name, c, l.selectionSet)
		}
	}

	function b(e) {
		return e.reduce(function(e, d) {
			return qe.prototype.isPrototypeOf(d) && e.push(d.toDefinition()), e.push.apply(e, be(b(d.selectionSet.selections))), e
		}, [])
	}

	function T(e, d) {
		var a = C(e);
		return a ? function() {
			var t, n = [],
				i = a.selection.selectionSet.typeSchema,
				r = a.responseData.id,
				o = S(e),
				s = I(e, o),
				l = Oe(s, 2),
				c = l[0],
				p = l[1];
			c.addQuery(p, function(e) {
				n.push('node'), e.add('node', {
					args: {
						id: r
					}
				}, function(e) {
					e.addInlineFragmentOn(i.name, function(e) {
						O(e, o.slice(1), n, d)
					})
				})
			});
			var u = b(c.operations[0].selectionSet.selections);
			return (t = c.definitions).unshift.apply(t, be(u)), [c, n]
		} : function() {
			var a, t = [],
				n = v(e),
				i = I(e, n),
				r = Oe(i, 2),
				o = r[0],
				s = r[1];
			o.addQuery(s, function(e) {
				O(e, n.slice(1), t, d)
			});
			var l = b(o.operations[0].selectionSet.selections);
			return (a = o.definitions).unshift.apply(a, be(l)), [o, t]
		}
	}

	function D(e, d) {
		return d === e.edges[e.edges.length - 1] ? e.pageInfo.hasNextPage : new Ee(!0)
	}

	function V(e, d) {
		return d === e.edges[0] ? e.pageInfo.hasPreviousPage : new Ee(!0)
	}

	function E(e) {
		return function(d, a) {
			if (A(d)) {
				if (!(a.pageInfo && a.pageInfo.hasOwnProperty('hasNextPage') && a.pageInfo.hasOwnProperty('hasPreviousPage'))) throw new Error('Connections must include the selections "pageInfo { hasNextPage, hasPreviousPage }".');
				return a.edges.map(function(t) {
					return Object.assign(t.node, {
						nextPageQueryAndPath: T(d, t.cursor),
						hasNextPage: D(a, t),
						hasPreviousPage: V(a, t),
						variableValues: e
					})
				})
			}
			return a
		}
	}

	function N(e, d) {
		return e.responseData.map(function(a) {
			return U(e.contextForArrayItem(a), d)
		})
	}

	function x(e, d) {
		return Object.keys(e.responseData).reduce(function(a, t) {
			return a[t] = U(e.contextForObjectProperty(t), d), a
		}, {})
	}

	function B(e, d, a) {
		return e.reduce(function(e, a) {
			return a(d, e)
		}, a)
	}

	function U(e, a) {
		var t = e.responseData;
		return Array.isArray(t) ? t = N(e, a) : d(t) && (t = x(e, a)), B(a, e, t)
	}

	function L(e, d) {
		return k(d) && _(e) && (d.refetchQuery = function() {
			return new He(e.selection.selectionSet.typeBundle, function(d) {
				d.add('node', {
					args: {
						id: e.responseData.id
					}
				}, function(d) {
					d.addInlineFragmentOn(e.selection.selectionSet.typeSchema.name, e.selection.selectionSet)
				})
			})
		}), d
	}

	function M(e) {
		return function(a, t) {
			if (d(t)) {
				var n = e.classForType(a.selection.selectionSet.typeSchema.name);
				return new n(t)
			}
			return t
		}
	}

	function R(e, d) {
		if (k(d)) {
			if ('SCALAR' === e.selection.selectionSet.typeSchema.kind) return new Ee(d);
			if ('ENUM' === e.selection.selectionSet.typeSchema.kind) return new De(d)
		}
		return d
	}

	function Q(e, d) {
		return k(d) && (d.__typename ? d.type = t(e.selection.selectionSet.typeBundle, d.__typename) : d.type = e.selection.selectionSet.typeSchema), d
	}

	function q(e) {
		var d = e.classRegistry,
			a = d === void 0 ? new Ge : d,
			t = e.variableValues;
		return [R, L, E(t), Q, M(a)]
	}

	function w(e, d) {
		var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {},
			t = a.transformers || q(a),
			n = new Ye(e, d);
		return U(n, t)
	}

	function J(e) {
		var d = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
		return function(a) {
			return fetch(e, ve({
				body: JSON.stringify(a),
				method: 'POST',
				mode: 'cors'
			}, d, {
				headers: ve({
					"Content-Type": 'application/json',
					Accept: 'application/json'
				}, d.headers)
			})).then(function(e) {
				return e.json()
			})
		}
	}

	function K(e) {
		return e && e.length && e[e.length - 1].hasNextPage
	}

	function W(e) {
		var d = e.split('.');
		return function(e) {
			var a = e.model,
				t = e.errors;
			return new Promise(function(e, n) {
				try {
					var i = d.reduce(function(e, d) {
						return e[d]
					}, a);
					e(i)
				} catch (e) {
					t ? n(t) : n(ad)
				}
			})
		}
	}

	function z(e, d) {
		var a = [].concat(e);
		return Promise.all(a.reduce(function(e, a) {
			return e.push(d.fetchAllPages(a.images, {
				pageSize: 250
			}).then(function(e) {
				a.attrs.images = e
			})), e.push(d.fetchAllPages(a.variants, {
				pageSize: 250
			}).then(function(e) {
				a.attrs.variants = e
			})), e
		}, []))
	}

	function H(e) {
		return function(d) {
			return z(d, e).then(function() {
				return d
			})
		}
	}

	function j(e) {
		return function(d) {
			var a = [].concat(d);
			return Promise.all(a.reduce(function(d, a) {
				return d.concat(z(a.products, e))
			}, [])).then(function() {
				return d
			})
		}
	}

	function X(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.__defaultOperation__ = {}, t.__defaultOperation__.id = e.variable('id', 'ID!'), a.VariantFragment = d.defineFragment('VariantFragment', 'ProductVariant', function(e) {
			e.add('id'), e.add('title'), e.add('price'), e.add('weight'), e.add('availableForSale', {
				alias: 'available'
			}), e.add('sku'), e.add('compareAtPrice'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			}), e.add('selectedOptions', function(e) {
				e.add('name'), e.add('value')
			})
		}), a.ProductFragment = d.defineFragment('ProductFragment', 'Product', function(e) {
			e.add('id'), e.add('availableForSale'), e.add('createdAt'), e.add('updatedAt'), e.add('descriptionHtml'), e.add('description'), e.add('handle'), e.add('productType'), e.add('title'), e.add('vendor'), e.add('publishedAt'), e.add('onlineStoreUrl'), e.add('options', function(e) {
				e.add('name'), e.add('values')
			}), e.add('images', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.add('id'), e.add('src'), e.add('altText')
					})
				})
			}), e.add('variants', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.addFragment(a.VariantFragment)
					})
				})
			})
		}), d.addQuery([t.__defaultOperation__.id], function(e) {
			e.add('node', {
				args: {
					id: t.__defaultOperation__.id
				}
			}, function(e) {
				e.addFragment(a.ProductFragment)
			})
		}), d
	}

	function $(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.__defaultOperation__ = {}, t.__defaultOperation__.ids = e.variable('ids', '[ID!]!'), a.VariantFragment = d.defineFragment('VariantFragment', 'ProductVariant', function(e) {
			e.add('id'), e.add('title'), e.add('price'), e.add('weight'), e.add('availableForSale', {
				alias: 'available'
			}), e.add('sku'), e.add('compareAtPrice'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			}), e.add('selectedOptions', function(e) {
				e.add('name'), e.add('value')
			})
		}), a.ProductFragment = d.defineFragment('ProductFragment', 'Product', function(e) {
			e.add('id'), e.add('availableForSale'), e.add('createdAt'), e.add('updatedAt'), e.add('descriptionHtml'), e.add('description'), e.add('handle'), e.add('productType'), e.add('title'), e.add('vendor'), e.add('publishedAt'), e.add('onlineStoreUrl'), e.add('options', function(e) {
				e.add('name'), e.add('values')
			}), e.add('images', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.add('id'), e.add('src'), e.add('altText')
					})
				})
			}), e.add('variants', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.addFragment(a.VariantFragment)
					})
				})
			})
		}), d.addQuery([t.__defaultOperation__.ids], function(e) {
			e.add('nodes', {
				args: {
					ids: t.__defaultOperation__.ids
				}
			}, function(e) {
				e.addFragment(a.ProductFragment)
			})
		}), d
	}

	function G(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.__defaultOperation__ = {}, t.__defaultOperation__.first = e.variable('first', 'Int!'), t.__defaultOperation__.query = e.variable('query', 'String'), t.__defaultOperation__.sortKey = e.variable('sortKey', 'ProductSortKeys'), t.__defaultOperation__.reverse = e.variable('reverse', 'Boolean'), a.VariantFragment = d.defineFragment('VariantFragment', 'ProductVariant', function(e) {
			e.add('id'), e.add('title'), e.add('price'), e.add('weight'), e.add('availableForSale', {
				alias: 'available'
			}), e.add('sku'), e.add('compareAtPrice'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			}), e.add('selectedOptions', function(e) {
				e.add('name'), e.add('value')
			})
		}), a.ProductFragment = d.defineFragment('ProductFragment', 'Product', function(e) {
			e.add('id'), e.add('availableForSale'), e.add('createdAt'), e.add('updatedAt'), e.add('descriptionHtml'), e.add('description'), e.add('handle'), e.add('productType'), e.add('title'), e.add('vendor'), e.add('publishedAt'), e.add('onlineStoreUrl'), e.add('options', function(e) {
				e.add('name'), e.add('values')
			}), e.add('images', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.add('id'), e.add('src'), e.add('altText')
					})
				})
			}), e.add('variants', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.addFragment(a.VariantFragment)
					})
				})
			})
		}), d.addQuery([t.__defaultOperation__.first, t.__defaultOperation__.query, t.__defaultOperation__.sortKey, t.__defaultOperation__.reverse], function(e) {
			e.add('shop', function(e) {
				e.add('products', {
					args: {
						first: t.__defaultOperation__.first,
						query: t.__defaultOperation__.query,
						sortKey: t.__defaultOperation__.sortKey,
						reverse: t.__defaultOperation__.reverse
					}
				}, function(e) {
					e.add('pageInfo', function(e) {
						e.add('hasNextPage'), e.add('hasPreviousPage')
					}), e.add('edges', function(e) {
						e.add('cursor'), e.add('node', function(e) {
							e.addFragment(a.ProductFragment)
						})
					})
				})
			})
		}), d
	}

	function Y(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.__defaultOperation__ = {}, t.__defaultOperation__.handle = e.variable('handle', 'String!'), a.VariantFragment = d.defineFragment('VariantFragment', 'ProductVariant', function(e) {
			e.add('id'), e.add('title'), e.add('price'), e.add('weight'), e.add('availableForSale', {
				alias: 'available'
			}), e.add('sku'), e.add('compareAtPrice'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			}), e.add('selectedOptions', function(e) {
				e.add('name'), e.add('value')
			})
		}), a.ProductFragment = d.defineFragment('ProductFragment', 'Product', function(e) {
			e.add('id'), e.add('availableForSale'), e.add('createdAt'), e.add('updatedAt'), e.add('descriptionHtml'), e.add('description'), e.add('handle'), e.add('productType'), e.add('title'), e.add('vendor'), e.add('publishedAt'), e.add('onlineStoreUrl'), e.add('options', function(e) {
				e.add('name'), e.add('values')
			}), e.add('images', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.add('id'), e.add('src'), e.add('altText')
					})
				})
			}), e.add('variants', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.addFragment(a.VariantFragment)
					})
				})
			})
		}), d.addQuery([t.__defaultOperation__.handle], function(e) {
			e.add('shop', function(e) {
				e.add('productByHandle', {
					args: {
						handle: t.__defaultOperation__.handle
					}
				}, function(e) {
					e.addFragment(a.ProductFragment)
				})
			})
		}), d
	}

	function Z(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.__defaultOperation__ = {}, t.__defaultOperation__.id = e.variable('id', 'ID!'), a.CollectionFragment = d.defineFragment('CollectionFragment', 'Collection', function(e) {
			e.add('id'), e.add('handle'), e.add('description'), e.add('descriptionHtml'), e.add('updatedAt'), e.add('title'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			})
		}), d.addQuery([t.__defaultOperation__.id], function(e) {
			e.add('node', {
				args: {
					id: t.__defaultOperation__.id
				}
			}, function(e) {
				e.addFragment(a.CollectionFragment)
			})
		}), d
	}

	function ee(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.__defaultOperation__ = {}, t.__defaultOperation__.id = e.variable('id', 'ID!'), a.VariantFragment = d.defineFragment('VariantFragment', 'ProductVariant', function(e) {
			e.add('id'), e.add('title'), e.add('price'), e.add('weight'), e.add('availableForSale', {
				alias: 'available'
			}), e.add('sku'), e.add('compareAtPrice'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			}), e.add('selectedOptions', function(e) {
				e.add('name'), e.add('value')
			})
		}), a.ProductFragment = d.defineFragment('ProductFragment', 'Product', function(e) {
			e.add('id'), e.add('availableForSale'), e.add('createdAt'), e.add('updatedAt'), e.add('descriptionHtml'), e.add('description'), e.add('handle'), e.add('productType'), e.add('title'), e.add('vendor'), e.add('publishedAt'), e.add('onlineStoreUrl'), e.add('options', function(e) {
				e.add('name'), e.add('values')
			}), e.add('images', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.add('id'), e.add('src'), e.add('altText')
					})
				})
			}), e.add('variants', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.addFragment(a.VariantFragment)
					})
				})
			})
		}), a.CollectionFragment = d.defineFragment('CollectionFragment', 'Collection', function(e) {
			e.add('id'), e.add('handle'), e.add('description'), e.add('descriptionHtml'), e.add('updatedAt'), e.add('title'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			})
		}), a.CollectionsProductsFragment = d.defineFragment('CollectionsProductsFragment', 'Collection', function(e) {
			e.add('products', {
				args: {
					first: 20
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.addFragment(a.ProductFragment)
					})
				})
			})
		}), d.addQuery([t.__defaultOperation__.id], function(e) {
			e.add('node', {
				args: {
					id: t.__defaultOperation__.id
				}
			}, function(e) {
				e.addFragment(a.CollectionFragment), e.addFragment(a.CollectionsProductsFragment)
			})
		}), d
	}

	function de(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.__defaultOperation__ = {}, t.__defaultOperation__.first = e.variable('first', 'Int!'), t.__defaultOperation__.query = e.variable('query', 'String'), t.__defaultOperation__.sortKey = e.variable('sortKey', 'CollectionSortKeys'), t.__defaultOperation__.reverse = e.variable('reverse', 'Boolean'), a.CollectionFragment = d.defineFragment('CollectionFragment', 'Collection', function(e) {
			e.add('id'), e.add('handle'), e.add('description'), e.add('descriptionHtml'), e.add('updatedAt'), e.add('title'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			})
		}), d.addQuery([t.__defaultOperation__.first, t.__defaultOperation__.query, t.__defaultOperation__.sortKey, t.__defaultOperation__.reverse], function(e) {
			e.add('shop', function(e) {
				e.add('collections', {
					args: {
						first: t.__defaultOperation__.first,
						query: t.__defaultOperation__.query,
						sortKey: t.__defaultOperation__.sortKey,
						reverse: t.__defaultOperation__.reverse
					}
				}, function(e) {
					e.add('pageInfo', function(e) {
						e.add('hasNextPage'), e.add('hasPreviousPage')
					}), e.add('edges', function(e) {
						e.add('cursor'), e.add('node', function(e) {
							e.addFragment(a.CollectionFragment)
						})
					})
				})
			})
		}), d
	}

	function ae(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.__defaultOperation__ = {}, t.__defaultOperation__.first = e.variable('first', 'Int!'), t.__defaultOperation__.query = e.variable('query', 'String'), t.__defaultOperation__.sortKey = e.variable('sortKey', 'CollectionSortKeys'), t.__defaultOperation__.reverse = e.variable('reverse', 'Boolean'), t.__defaultOperation__.productsFirst = e.variable('productsFirst', 'Int!'), a.VariantFragment = d.defineFragment('VariantFragment', 'ProductVariant', function(e) {
			e.add('id'), e.add('title'), e.add('price'), e.add('weight'), e.add('availableForSale', {
				alias: 'available'
			}), e.add('sku'), e.add('compareAtPrice'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			}), e.add('selectedOptions', function(e) {
				e.add('name'), e.add('value')
			})
		}), a.CollectionFragment = d.defineFragment('CollectionFragment', 'Collection', function(e) {
			e.add('id'), e.add('handle'), e.add('description'), e.add('descriptionHtml'), e.add('updatedAt'), e.add('title'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			})
		}), a.ProductFragment = d.defineFragment('ProductFragment', 'Product', function(e) {
			e.add('id'), e.add('availableForSale'), e.add('createdAt'), e.add('updatedAt'), e.add('descriptionHtml'), e.add('description'), e.add('handle'), e.add('productType'), e.add('title'), e.add('vendor'), e.add('publishedAt'), e.add('onlineStoreUrl'), e.add('options', function(e) {
				e.add('name'), e.add('values')
			}), e.add('images', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.add('id'), e.add('src'), e.add('altText')
					})
				})
			}), e.add('variants', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.addFragment(a.VariantFragment)
					})
				})
			})
		}), d.addQuery([t.__defaultOperation__.first, t.__defaultOperation__.query, t.__defaultOperation__.sortKey, t.__defaultOperation__.reverse, t.__defaultOperation__.productsFirst], function(e) {
			e.add('shop', function(e) {
				e.add('collections', {
					args: {
						first: t.__defaultOperation__.first,
						query: t.__defaultOperation__.query,
						sortKey: t.__defaultOperation__.sortKey,
						reverse: t.__defaultOperation__.reverse
					}
				}, function(e) {
					e.add('pageInfo', function(e) {
						e.add('hasNextPage'), e.add('hasPreviousPage')
					}), e.add('edges', function(e) {
						e.add('cursor'), e.add('node', function(e) {
							e.addFragment(a.CollectionFragment), e.add('products', {
								args: {
									first: t.__defaultOperation__.productsFirst
								}
							}, function(e) {
								e.add('pageInfo', function(e) {
									e.add('hasNextPage'), e.add('hasPreviousPage')
								}), e.add('edges', function(e) {
									e.add('cursor'), e.add('node', function(e) {
										e.addFragment(a.ProductFragment)
									})
								})
							})
						})
					})
				})
			})
		}), d
	}

	function te(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.__defaultOperation__ = {}, t.__defaultOperation__.handle = e.variable('handle', 'String!'), a.VariantFragment = d.defineFragment('VariantFragment', 'ProductVariant', function(e) {
			e.add('id'), e.add('title'), e.add('price'), e.add('weight'), e.add('availableForSale', {
				alias: 'available'
			}), e.add('sku'), e.add('compareAtPrice'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			}), e.add('selectedOptions', function(e) {
				e.add('name'), e.add('value')
			})
		}), a.ProductFragment = d.defineFragment('ProductFragment', 'Product', function(e) {
			e.add('id'), e.add('availableForSale'), e.add('createdAt'), e.add('updatedAt'), e.add('descriptionHtml'), e.add('description'), e.add('handle'), e.add('productType'), e.add('title'), e.add('vendor'), e.add('publishedAt'), e.add('onlineStoreUrl'), e.add('options', function(e) {
				e.add('name'), e.add('values')
			}), e.add('images', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.add('id'), e.add('src'), e.add('altText')
					})
				})
			}), e.add('variants', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.addFragment(a.VariantFragment)
					})
				})
			})
		}), a.CollectionFragment = d.defineFragment('CollectionFragment', 'Collection', function(e) {
			e.add('id'), e.add('handle'), e.add('description'), e.add('descriptionHtml'), e.add('updatedAt'), e.add('title'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			})
		}), a.CollectionsProductsFragment = d.defineFragment('CollectionsProductsFragment', 'Collection', function(e) {
			e.add('products', {
				args: {
					first: 20
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.addFragment(a.ProductFragment)
					})
				})
			})
		}), d.addQuery([t.__defaultOperation__.handle], function(e) {
			e.add('shop', function(e) {
				e.add('collectionByHandle', {
					args: {
						handle: t.__defaultOperation__.handle
					}
				}, function(e) {
					e.addFragment(a.CollectionFragment), e.addFragment(a.CollectionsProductsFragment)
				})
			})
		}), d
	}

	function ne(e) {
		var d = e.document();
		return d.addQuery(function(e) {
			e.add('shop', function(e) {
				e.add('currencyCode'), e.add('description'), e.add('moneyFormat'), e.add('name'), e.add('primaryDomain', function(e) {
					e.add('host'), e.add('sslEnabled'), e.add('url')
				})
			})
		}), d
	}

	function ie(e) {
		var d = e.document(),
			a = {};
		return a.PolicyFragment = d.defineFragment('PolicyFragment', 'ShopPolicy', function(e) {
			e.add('id'), e.add('title'), e.add('url'), e.add('body')
		}), d.addQuery(function(e) {
			e.add('shop', function(e) {
				e.add('privacyPolicy', function(e) {
					e.addFragment(a.PolicyFragment)
				}), e.add('termsOfService', function(e) {
					e.addFragment(a.PolicyFragment)
				}), e.add('refundPolicy', function(e) {
					e.addFragment(a.PolicyFragment)
				})
			})
		}), d
	}

	function re(e, d) {
		return function(a) {
			var t = a.data,
				n = a.errors,
				i = a.model,
				r = t[e],
				o = i[e];
			return r && r.checkout ? d.fetchAllPages(o.checkout.lineItems, {
				pageSize: 250
			}).then(function(e) {
				return o.checkout.attrs.lineItems = e, o.checkout.errors = n, o.checkout.userErrors = o.userErrors, o.checkout
			}) : n && n.length ? Promise.reject(new Error(JSON.stringify(n))) : r && r.userErrors && r.userErrors.length ? Promise.reject(new Error(JSON.stringify(r.userErrors))) : Promise.reject(new Error('The ' + e + ' mutation failed due to an unknown error.'))
		}
	}

	function oe(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.__defaultOperation__ = {}, t.__defaultOperation__.id = e.variable('id', 'ID!'), a.VariantFragment = d.defineFragment('VariantFragment', 'ProductVariant', function(e) {
			e.add('id'), e.add('title'), e.add('price'), e.add('weight'), e.add('availableForSale', {
				alias: 'available'
			}), e.add('sku'), e.add('compareAtPrice'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			}), e.add('selectedOptions', function(e) {
				e.add('name'), e.add('value')
			})
		}), a.DiscountApplicationFragment = d.defineFragment('DiscountApplicationFragment', 'DiscountApplication', function(e) {
			e.add('targetSelection'), e.add('allocationMethod'), e.add('targetType'), e.addInlineFragmentOn('ManualDiscountApplication', function(e) {
				e.add('title'), e.add('description')
			}), e.addInlineFragmentOn('DiscountCodeApplication', function(e) {
				e.add('code'), e.add('applicable')
			}), e.addInlineFragmentOn('ScriptDiscountApplication', function(e) {
				e.add('description')
			})
		}), a.VariantWithProductFragment = d.defineFragment('VariantWithProductFragment', 'ProductVariant', function(e) {
			e.addFragment(a.VariantFragment), e.add('product', function(e) {
				e.add('id')
			})
		}), a.MailingAddressFragment = d.defineFragment('MailingAddressFragment', 'MailingAddress', function(e) {
			e.add('id'), e.add('address1'), e.add('address2'), e.add('city'), e.add('company'), e.add('country'), e.add('firstName'), e.add('formatted'), e.add('lastName'), e.add('latitude'), e.add('longitude'), e.add('phone'), e.add('province'), e.add('zip'), e.add('name'), e.add('countryCodeV2', {
				alias: 'countryCode'
			}), e.add('provinceCode')
		}), a.CheckoutFragment = d.defineFragment('CheckoutFragment', 'Checkout', function(e) {
			e.add('id'), e.add('ready'), e.add('requiresShipping'), e.add('note'), e.add('paymentDue'), e.add('webUrl'), e.add('orderStatusUrl'), e.add('taxExempt'), e.add('taxesIncluded'), e.add('currencyCode'), e.add('totalTax'), e.add('subtotalPrice'), e.add('totalPrice'), e.add('completedAt'), e.add('createdAt'), e.add('updatedAt'), e.add('email'), e.add('discountApplications', {
				args: {
					first: 10
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('node', function(e) {
						e.addFragment(a.DiscountApplicationFragment)
					})
				})
			}), e.add('shippingAddress', function(e) {
				e.addFragment(a.MailingAddressFragment)
			}), e.add('shippingLine', function(e) {
				e.add('handle'), e.add('price'), e.add('title')
			}), e.add('customAttributes', function(e) {
				e.add('key'), e.add('value')
			}), e.add('order', function(e) {
				e.add('id'), e.add('processedAt'), e.add('orderNumber'), e.add('subtotalPrice'), e.add('totalShippingPrice'), e.add('totalTax'), e.add('totalPrice'), e.add('currencyCode'), e.add('totalRefunded'), e.add('customerUrl'), e.add('shippingAddress', function(e) {
					e.addFragment(a.MailingAddressFragment)
				}), e.add('lineItems', {
					args: {
						first: 250
					}
				}, function(e) {
					e.add('pageInfo', function(e) {
						e.add('hasNextPage'), e.add('hasPreviousPage')
					}), e.add('edges', function(e) {
						e.add('cursor'), e.add('node', function(e) {
							e.add('title'), e.add('variant', function(e) {
								e.addFragment(a.VariantWithProductFragment)
							}), e.add('quantity'), e.add('customAttributes', function(e) {
								e.add('key'), e.add('value')
							})
						})
					})
				})
			}), e.add('lineItems', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.add('id'), e.add('title'), e.add('variant', function(e) {
							e.addFragment(a.VariantWithProductFragment)
						}), e.add('quantity'), e.add('customAttributes', function(e) {
							e.add('key'), e.add('value')
						}), e.add('discountAllocations', function(e) {
							e.add('allocatedAmount', function(e) {
								e.add('amount'), e.add('currencyCode')
							}), e.add('discountApplication', function(e) {
								e.addFragment(a.DiscountApplicationFragment)
							})
						})
					})
				})
			})
		}), d.addQuery([t.__defaultOperation__.id], function(e) {
			e.add('node', {
				args: {
					id: t.__defaultOperation__.id
				}
			}, function(e) {
				e.addFragment(a.CheckoutFragment)
			})
		}), d
	}

	function se(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.__defaultOperation__ = {}, t.__defaultOperation__.input = e.variable('input', 'CheckoutCreateInput!'), a.VariantFragment = d.defineFragment('VariantFragment', 'ProductVariant', function(e) {
			e.add('id'), e.add('title'), e.add('price'), e.add('weight'), e.add('availableForSale', {
				alias: 'available'
			}), e.add('sku'), e.add('compareAtPrice'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			}), e.add('selectedOptions', function(e) {
				e.add('name'), e.add('value')
			})
		}), a.DiscountApplicationFragment = d.defineFragment('DiscountApplicationFragment', 'DiscountApplication', function(e) {
			e.add('targetSelection'), e.add('allocationMethod'), e.add('targetType'), e.addInlineFragmentOn('ManualDiscountApplication', function(e) {
				e.add('title'), e.add('description')
			}), e.addInlineFragmentOn('DiscountCodeApplication', function(e) {
				e.add('code'), e.add('applicable')
			}), e.addInlineFragmentOn('ScriptDiscountApplication', function(e) {
				e.add('description')
			})
		}), a.VariantWithProductFragment = d.defineFragment('VariantWithProductFragment', 'ProductVariant', function(e) {
			e.addFragment(a.VariantFragment), e.add('product', function(e) {
				e.add('id')
			})
		}), a.UserErrorFragment = d.defineFragment('UserErrorFragment', 'UserError', function(e) {
			e.add('field'), e.add('message')
		}), a.MailingAddressFragment = d.defineFragment('MailingAddressFragment', 'MailingAddress', function(e) {
			e.add('id'), e.add('address1'), e.add('address2'), e.add('city'), e.add('company'), e.add('country'), e.add('firstName'), e.add('formatted'), e.add('lastName'), e.add('latitude'), e.add('longitude'), e.add('phone'), e.add('province'), e.add('zip'), e.add('name'), e.add('countryCodeV2', {
				alias: 'countryCode'
			}), e.add('provinceCode')
		}), a.CheckoutFragment = d.defineFragment('CheckoutFragment', 'Checkout', function(e) {
			e.add('id'), e.add('ready'), e.add('requiresShipping'), e.add('note'), e.add('paymentDue'), e.add('webUrl'), e.add('orderStatusUrl'), e.add('taxExempt'), e.add('taxesIncluded'), e.add('currencyCode'), e.add('totalTax'), e.add('subtotalPrice'), e.add('totalPrice'), e.add('completedAt'), e.add('createdAt'), e.add('updatedAt'), e.add('email'), e.add('discountApplications', {
				args: {
					first: 10
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('node', function(e) {
						e.addFragment(a.DiscountApplicationFragment)
					})
				})
			}), e.add('shippingAddress', function(e) {
				e.addFragment(a.MailingAddressFragment)
			}), e.add('shippingLine', function(e) {
				e.add('handle'), e.add('price'), e.add('title')
			}), e.add('customAttributes', function(e) {
				e.add('key'), e.add('value')
			}), e.add('order', function(e) {
				e.add('id'), e.add('processedAt'), e.add('orderNumber'), e.add('subtotalPrice'), e.add('totalShippingPrice'), e.add('totalTax'), e.add('totalPrice'), e.add('currencyCode'), e.add('totalRefunded'), e.add('customerUrl'), e.add('shippingAddress', function(e) {
					e.addFragment(a.MailingAddressFragment)
				}), e.add('lineItems', {
					args: {
						first: 250
					}
				}, function(e) {
					e.add('pageInfo', function(e) {
						e.add('hasNextPage'), e.add('hasPreviousPage')
					}), e.add('edges', function(e) {
						e.add('cursor'), e.add('node', function(e) {
							e.add('title'), e.add('variant', function(e) {
								e.addFragment(a.VariantWithProductFragment)
							}), e.add('quantity'), e.add('customAttributes', function(e) {
								e.add('key'), e.add('value')
							})
						})
					})
				})
			}), e.add('lineItems', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.add('id'), e.add('title'), e.add('variant', function(e) {
							e.addFragment(a.VariantWithProductFragment)
						}), e.add('quantity'), e.add('customAttributes', function(e) {
							e.add('key'), e.add('value')
						}), e.add('discountAllocations', function(e) {
							e.add('allocatedAmount', function(e) {
								e.add('amount'), e.add('currencyCode')
							}), e.add('discountApplication', function(e) {
								e.addFragment(a.DiscountApplicationFragment)
							})
						})
					})
				})
			})
		}), d.addMutation([t.__defaultOperation__.input], function(e) {
			e.add('checkoutCreate', {
				args: {
					input: t.__defaultOperation__.input
				}
			}, function(e) {
				e.add('userErrors', function(e) {
					e.addFragment(a.UserErrorFragment)
				}), e.add('checkout', function(e) {
					e.addFragment(a.CheckoutFragment)
				})
			})
		}), d
	}

	function le(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.__defaultOperation__ = {}, t.__defaultOperation__.checkoutId = e.variable('checkoutId', 'ID!'), t.__defaultOperation__.lineItems = e.variable('lineItems', '[CheckoutLineItemInput!]!'), a.VariantFragment = d.defineFragment('VariantFragment', 'ProductVariant', function(e) {
			e.add('id'), e.add('title'), e.add('price'), e.add('weight'), e.add('availableForSale', {
				alias: 'available'
			}), e.add('sku'), e.add('compareAtPrice'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			}), e.add('selectedOptions', function(e) {
				e.add('name'), e.add('value')
			})
		}), a.DiscountApplicationFragment = d.defineFragment('DiscountApplicationFragment', 'DiscountApplication', function(e) {
			e.add('targetSelection'), e.add('allocationMethod'), e.add('targetType'), e.addInlineFragmentOn('ManualDiscountApplication', function(e) {
				e.add('title'), e.add('description')
			}), e.addInlineFragmentOn('DiscountCodeApplication', function(e) {
				e.add('code'), e.add('applicable')
			}), e.addInlineFragmentOn('ScriptDiscountApplication', function(e) {
				e.add('description')
			})
		}), a.VariantWithProductFragment = d.defineFragment('VariantWithProductFragment', 'ProductVariant', function(e) {
			e.addFragment(a.VariantFragment), e.add('product', function(e) {
				e.add('id')
			})
		}), a.UserErrorFragment = d.defineFragment('UserErrorFragment', 'UserError', function(e) {
			e.add('field'), e.add('message')
		}), a.MailingAddressFragment = d.defineFragment('MailingAddressFragment', 'MailingAddress', function(e) {
			e.add('id'), e.add('address1'), e.add('address2'), e.add('city'), e.add('company'), e.add('country'), e.add('firstName'), e.add('formatted'), e.add('lastName'), e.add('latitude'), e.add('longitude'), e.add('phone'), e.add('province'), e.add('zip'), e.add('name'), e.add('countryCodeV2', {
				alias: 'countryCode'
			}), e.add('provinceCode')
		}), a.CheckoutFragment = d.defineFragment('CheckoutFragment', 'Checkout', function(e) {
			e.add('id'), e.add('ready'), e.add('requiresShipping'), e.add('note'), e.add('paymentDue'), e.add('webUrl'), e.add('orderStatusUrl'), e.add('taxExempt'), e.add('taxesIncluded'), e.add('currencyCode'), e.add('totalTax'), e.add('subtotalPrice'), e.add('totalPrice'), e.add('completedAt'), e.add('createdAt'), e.add('updatedAt'), e.add('email'), e.add('discountApplications', {
				args: {
					first: 10
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('node', function(e) {
						e.addFragment(a.DiscountApplicationFragment)
					})
				})
			}), e.add('shippingAddress', function(e) {
				e.addFragment(a.MailingAddressFragment)
			}), e.add('shippingLine', function(e) {
				e.add('handle'), e.add('price'), e.add('title')
			}), e.add('customAttributes', function(e) {
				e.add('key'), e.add('value')
			}), e.add('order', function(e) {
				e.add('id'), e.add('processedAt'), e.add('orderNumber'), e.add('subtotalPrice'), e.add('totalShippingPrice'), e.add('totalTax'), e.add('totalPrice'), e.add('currencyCode'), e.add('totalRefunded'), e.add('customerUrl'), e.add('shippingAddress', function(e) {
					e.addFragment(a.MailingAddressFragment)
				}), e.add('lineItems', {
					args: {
						first: 250
					}
				}, function(e) {
					e.add('pageInfo', function(e) {
						e.add('hasNextPage'), e.add('hasPreviousPage')
					}), e.add('edges', function(e) {
						e.add('cursor'), e.add('node', function(e) {
							e.add('title'), e.add('variant', function(e) {
								e.addFragment(a.VariantWithProductFragment)
							}), e.add('quantity'), e.add('customAttributes', function(e) {
								e.add('key'), e.add('value')
							})
						})
					})
				})
			}), e.add('lineItems', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.add('id'), e.add('title'), e.add('variant', function(e) {
							e.addFragment(a.VariantWithProductFragment)
						}), e.add('quantity'), e.add('customAttributes', function(e) {
							e.add('key'), e.add('value')
						}), e.add('discountAllocations', function(e) {
							e.add('allocatedAmount', function(e) {
								e.add('amount'), e.add('currencyCode')
							}), e.add('discountApplication', function(e) {
								e.addFragment(a.DiscountApplicationFragment)
							})
						})
					})
				})
			})
		}), d.addMutation([t.__defaultOperation__.checkoutId, t.__defaultOperation__.lineItems], function(e) {
			e.add('checkoutLineItemsAdd', {
				args: {
					checkoutId: t.__defaultOperation__.checkoutId,
					lineItems: t.__defaultOperation__.lineItems
				}
			}, function(e) {
				e.add('userErrors', function(e) {
					e.addFragment(a.UserErrorFragment)
				}), e.add('checkout', function(e) {
					e.addFragment(a.CheckoutFragment)
				})
			})
		}), d
	}

	function ce(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.__defaultOperation__ = {}, t.__defaultOperation__.checkoutId = e.variable('checkoutId', 'ID!'), t.__defaultOperation__.lineItemIds = e.variable('lineItemIds', '[ID!]!'), a.VariantFragment = d.defineFragment('VariantFragment', 'ProductVariant', function(e) {
			e.add('id'), e.add('title'), e.add('price'), e.add('weight'), e.add('availableForSale', {
				alias: 'available'
			}), e.add('sku'), e.add('compareAtPrice'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			}), e.add('selectedOptions', function(e) {
				e.add('name'), e.add('value')
			})
		}), a.DiscountApplicationFragment = d.defineFragment('DiscountApplicationFragment', 'DiscountApplication', function(e) {
			e.add('targetSelection'), e.add('allocationMethod'), e.add('targetType'), e.addInlineFragmentOn('ManualDiscountApplication', function(e) {
				e.add('title'), e.add('description')
			}), e.addInlineFragmentOn('DiscountCodeApplication', function(e) {
				e.add('code'), e.add('applicable')
			}), e.addInlineFragmentOn('ScriptDiscountApplication', function(e) {
				e.add('description')
			})
		}), a.VariantWithProductFragment = d.defineFragment('VariantWithProductFragment', 'ProductVariant', function(e) {
			e.addFragment(a.VariantFragment), e.add('product', function(e) {
				e.add('id')
			})
		}), a.UserErrorFragment = d.defineFragment('UserErrorFragment', 'UserError', function(e) {
			e.add('field'), e.add('message')
		}), a.MailingAddressFragment = d.defineFragment('MailingAddressFragment', 'MailingAddress', function(e) {
			e.add('id'), e.add('address1'), e.add('address2'), e.add('city'), e.add('company'), e.add('country'), e.add('firstName'), e.add('formatted'), e.add('lastName'), e.add('latitude'), e.add('longitude'), e.add('phone'), e.add('province'), e.add('zip'), e.add('name'), e.add('countryCodeV2', {
				alias: 'countryCode'
			}), e.add('provinceCode')
		}), a.CheckoutFragment = d.defineFragment('CheckoutFragment', 'Checkout', function(e) {
			e.add('id'), e.add('ready'), e.add('requiresShipping'), e.add('note'), e.add('paymentDue'), e.add('webUrl'), e.add('orderStatusUrl'), e.add('taxExempt'), e.add('taxesIncluded'), e.add('currencyCode'), e.add('totalTax'), e.add('subtotalPrice'), e.add('totalPrice'), e.add('completedAt'), e.add('createdAt'), e.add('updatedAt'), e.add('email'), e.add('discountApplications', {
				args: {
					first: 10
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('node', function(e) {
						e.addFragment(a.DiscountApplicationFragment)
					})
				})
			}), e.add('shippingAddress', function(e) {
				e.addFragment(a.MailingAddressFragment)
			}), e.add('shippingLine', function(e) {
				e.add('handle'), e.add('price'), e.add('title')
			}), e.add('customAttributes', function(e) {
				e.add('key'), e.add('value')
			}), e.add('order', function(e) {
				e.add('id'), e.add('processedAt'), e.add('orderNumber'), e.add('subtotalPrice'), e.add('totalShippingPrice'), e.add('totalTax'), e.add('totalPrice'), e.add('currencyCode'), e.add('totalRefunded'), e.add('customerUrl'), e.add('shippingAddress', function(e) {
					e.addFragment(a.MailingAddressFragment)
				}), e.add('lineItems', {
					args: {
						first: 250
					}
				}, function(e) {
					e.add('pageInfo', function(e) {
						e.add('hasNextPage'), e.add('hasPreviousPage')
					}), e.add('edges', function(e) {
						e.add('cursor'), e.add('node', function(e) {
							e.add('title'), e.add('variant', function(e) {
								e.addFragment(a.VariantWithProductFragment)
							}), e.add('quantity'), e.add('customAttributes', function(e) {
								e.add('key'), e.add('value')
							})
						})
					})
				})
			}), e.add('lineItems', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.add('id'), e.add('title'), e.add('variant', function(e) {
							e.addFragment(a.VariantWithProductFragment)
						}), e.add('quantity'), e.add('customAttributes', function(e) {
							e.add('key'), e.add('value')
						}), e.add('discountAllocations', function(e) {
							e.add('allocatedAmount', function(e) {
								e.add('amount'), e.add('currencyCode')
							}), e.add('discountApplication', function(e) {
								e.addFragment(a.DiscountApplicationFragment)
							})
						})
					})
				})
			})
		}), d.addMutation([t.__defaultOperation__.checkoutId, t.__defaultOperation__.lineItemIds], function(e) {
			e.add('checkoutLineItemsRemove', {
				args: {
					checkoutId: t.__defaultOperation__.checkoutId,
					lineItemIds: t.__defaultOperation__.lineItemIds
				}
			}, function(e) {
				e.add('userErrors', function(e) {
					e.addFragment(a.UserErrorFragment)
				}), e.add('checkout', function(e) {
					e.addFragment(a.CheckoutFragment)
				})
			})
		}), d
	}

	function pe(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.__defaultOperation__ = {}, t.__defaultOperation__.checkoutId = e.variable('checkoutId', 'ID!'), t.__defaultOperation__.lineItems = e.variable('lineItems', '[CheckoutLineItemUpdateInput!]!'), a.VariantFragment = d.defineFragment('VariantFragment', 'ProductVariant', function(e) {
			e.add('id'), e.add('title'), e.add('price'), e.add('weight'), e.add('availableForSale', {
				alias: 'available'
			}), e.add('sku'), e.add('compareAtPrice'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			}), e.add('selectedOptions', function(e) {
				e.add('name'), e.add('value')
			})
		}), a.DiscountApplicationFragment = d.defineFragment('DiscountApplicationFragment', 'DiscountApplication', function(e) {
			e.add('targetSelection'), e.add('allocationMethod'), e.add('targetType'), e.addInlineFragmentOn('ManualDiscountApplication', function(e) {
				e.add('title'), e.add('description')
			}), e.addInlineFragmentOn('DiscountCodeApplication', function(e) {
				e.add('code'), e.add('applicable')
			}), e.addInlineFragmentOn('ScriptDiscountApplication', function(e) {
				e.add('description')
			})
		}), a.VariantWithProductFragment = d.defineFragment('VariantWithProductFragment', 'ProductVariant', function(e) {
			e.addFragment(a.VariantFragment), e.add('product', function(e) {
				e.add('id')
			})
		}), a.UserErrorFragment = d.defineFragment('UserErrorFragment', 'UserError', function(e) {
			e.add('field'), e.add('message')
		}), a.MailingAddressFragment = d.defineFragment('MailingAddressFragment', 'MailingAddress', function(e) {
			e.add('id'), e.add('address1'), e.add('address2'), e.add('city'), e.add('company'), e.add('country'), e.add('firstName'), e.add('formatted'), e.add('lastName'), e.add('latitude'), e.add('longitude'), e.add('phone'), e.add('province'), e.add('zip'), e.add('name'), e.add('countryCodeV2', {
				alias: 'countryCode'
			}), e.add('provinceCode')
		}), a.CheckoutFragment = d.defineFragment('CheckoutFragment', 'Checkout', function(e) {
			e.add('id'), e.add('ready'), e.add('requiresShipping'), e.add('note'), e.add('paymentDue'), e.add('webUrl'), e.add('orderStatusUrl'), e.add('taxExempt'), e.add('taxesIncluded'), e.add('currencyCode'), e.add('totalTax'), e.add('subtotalPrice'), e.add('totalPrice'), e.add('completedAt'), e.add('createdAt'), e.add('updatedAt'), e.add('email'), e.add('discountApplications', {
				args: {
					first: 10
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('node', function(e) {
						e.addFragment(a.DiscountApplicationFragment)
					})
				})
			}), e.add('shippingAddress', function(e) {
				e.addFragment(a.MailingAddressFragment)
			}), e.add('shippingLine', function(e) {
				e.add('handle'), e.add('price'), e.add('title')
			}), e.add('customAttributes', function(e) {
				e.add('key'), e.add('value')
			}), e.add('order', function(e) {
				e.add('id'), e.add('processedAt'), e.add('orderNumber'), e.add('subtotalPrice'), e.add('totalShippingPrice'), e.add('totalTax'), e.add('totalPrice'), e.add('currencyCode'), e.add('totalRefunded'), e.add('customerUrl'), e.add('shippingAddress', function(e) {
					e.addFragment(a.MailingAddressFragment)
				}), e.add('lineItems', {
					args: {
						first: 250
					}
				}, function(e) {
					e.add('pageInfo', function(e) {
						e.add('hasNextPage'), e.add('hasPreviousPage')
					}), e.add('edges', function(e) {
						e.add('cursor'), e.add('node', function(e) {
							e.add('title'), e.add('variant', function(e) {
								e.addFragment(a.VariantWithProductFragment)
							}), e.add('quantity'), e.add('customAttributes', function(e) {
								e.add('key'), e.add('value')
							})
						})
					})
				})
			}), e.add('lineItems', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.add('id'), e.add('title'), e.add('variant', function(e) {
							e.addFragment(a.VariantWithProductFragment)
						}), e.add('quantity'), e.add('customAttributes', function(e) {
							e.add('key'), e.add('value')
						}), e.add('discountAllocations', function(e) {
							e.add('allocatedAmount', function(e) {
								e.add('amount'), e.add('currencyCode')
							}), e.add('discountApplication', function(e) {
								e.addFragment(a.DiscountApplicationFragment)
							})
						})
					})
				})
			})
		}), d.addMutation([t.__defaultOperation__.checkoutId, t.__defaultOperation__.lineItems], function(e) {
			e.add('checkoutLineItemsUpdate', {
				args: {
					checkoutId: t.__defaultOperation__.checkoutId,
					lineItems: t.__defaultOperation__.lineItems
				}
			}, function(e) {
				e.add('userErrors', function(e) {
					e.addFragment(a.UserErrorFragment)
				}), e.add('checkout', function(e) {
					e.addFragment(a.CheckoutFragment)
				})
			})
		}), d
	}

	function ue(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.checkoutAttributesUpdateV2 = {}, t.checkoutAttributesUpdateV2.checkoutId = e.variable('checkoutId', 'ID!'), t.checkoutAttributesUpdateV2.input = e.variable('input', 'CheckoutAttributesUpdateV2Input!'), a.VariantFragment = d.defineFragment('VariantFragment', 'ProductVariant', function(e) {
			e.add('id'), e.add('title'), e.add('price'), e.add('weight'), e.add('availableForSale', {
				alias: 'available'
			}), e.add('sku'), e.add('compareAtPrice'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			}), e.add('selectedOptions', function(e) {
				e.add('name'), e.add('value')
			})
		}), a.DiscountApplicationFragment = d.defineFragment('DiscountApplicationFragment', 'DiscountApplication', function(e) {
			e.add('targetSelection'), e.add('allocationMethod'), e.add('targetType'), e.addInlineFragmentOn('ManualDiscountApplication', function(e) {
				e.add('title'), e.add('description')
			}), e.addInlineFragmentOn('DiscountCodeApplication', function(e) {
				e.add('code'), e.add('applicable')
			}), e.addInlineFragmentOn('ScriptDiscountApplication', function(e) {
				e.add('description')
			})
		}), a.VariantWithProductFragment = d.defineFragment('VariantWithProductFragment', 'ProductVariant', function(e) {
			e.addFragment(a.VariantFragment), e.add('product', function(e) {
				e.add('id')
			})
		}), a.UserErrorFragment = d.defineFragment('UserErrorFragment', 'UserError', function(e) {
			e.add('field'), e.add('message')
		}), a.MailingAddressFragment = d.defineFragment('MailingAddressFragment', 'MailingAddress', function(e) {
			e.add('id'), e.add('address1'), e.add('address2'), e.add('city'), e.add('company'), e.add('country'), e.add('firstName'), e.add('formatted'), e.add('lastName'), e.add('latitude'), e.add('longitude'), e.add('phone'), e.add('province'), e.add('zip'), e.add('name'), e.add('countryCodeV2', {
				alias: 'countryCode'
			}), e.add('provinceCode')
		}), a.CheckoutFragment = d.defineFragment('CheckoutFragment', 'Checkout', function(e) {
			e.add('id'), e.add('ready'), e.add('requiresShipping'), e.add('note'), e.add('paymentDue'), e.add('webUrl'), e.add('orderStatusUrl'), e.add('taxExempt'), e.add('taxesIncluded'), e.add('currencyCode'), e.add('totalTax'), e.add('subtotalPrice'), e.add('totalPrice'), e.add('completedAt'), e.add('createdAt'), e.add('updatedAt'), e.add('email'), e.add('discountApplications', {
				args: {
					first: 10
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('node', function(e) {
						e.addFragment(a.DiscountApplicationFragment)
					})
				})
			}), e.add('shippingAddress', function(e) {
				e.addFragment(a.MailingAddressFragment)
			}), e.add('shippingLine', function(e) {
				e.add('handle'), e.add('price'), e.add('title')
			}), e.add('customAttributes', function(e) {
				e.add('key'), e.add('value')
			}), e.add('order', function(e) {
				e.add('id'), e.add('processedAt'), e.add('orderNumber'), e.add('subtotalPrice'), e.add('totalShippingPrice'), e.add('totalTax'), e.add('totalPrice'), e.add('currencyCode'), e.add('totalRefunded'), e.add('customerUrl'), e.add('shippingAddress', function(e) {
					e.addFragment(a.MailingAddressFragment)
				}), e.add('lineItems', {
					args: {
						first: 250
					}
				}, function(e) {
					e.add('pageInfo', function(e) {
						e.add('hasNextPage'), e.add('hasPreviousPage')
					}), e.add('edges', function(e) {
						e.add('cursor'), e.add('node', function(e) {
							e.add('title'), e.add('variant', function(e) {
								e.addFragment(a.VariantWithProductFragment)
							}), e.add('quantity'), e.add('customAttributes', function(e) {
								e.add('key'), e.add('value')
							})
						})
					})
				})
			}), e.add('lineItems', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.add('id'), e.add('title'), e.add('variant', function(e) {
							e.addFragment(a.VariantWithProductFragment)
						}), e.add('quantity'), e.add('customAttributes', function(e) {
							e.add('key'), e.add('value')
						}), e.add('discountAllocations', function(e) {
							e.add('allocatedAmount', function(e) {
								e.add('amount'), e.add('currencyCode')
							}), e.add('discountApplication', function(e) {
								e.addFragment(a.DiscountApplicationFragment)
							})
						})
					})
				})
			})
		}), d.addMutation('checkoutAttributesUpdateV2', [t.checkoutAttributesUpdateV2.checkoutId, t.checkoutAttributesUpdateV2.input], function(e) {
			e.add('checkoutAttributesUpdateV2', {
				args: {
					checkoutId: t.checkoutAttributesUpdateV2.checkoutId,
					input: t.checkoutAttributesUpdateV2.input
				}
			}, function(e) {
				e.add('userErrors', function(e) {
					e.addFragment(a.UserErrorFragment)
				}), e.add('checkout', function(e) {
					e.addFragment(a.CheckoutFragment)
				})
			})
		}), d
	}

	function ge(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.checkoutDiscountCodeApplyV2 = {}, t.checkoutDiscountCodeApplyV2.discountCode = e.variable('discountCode', 'String!'), t.checkoutDiscountCodeApplyV2.checkoutId = e.variable('checkoutId', 'ID!'), a.VariantFragment = d.defineFragment('VariantFragment', 'ProductVariant', function(e) {
			e.add('id'), e.add('title'), e.add('price'), e.add('weight'), e.add('availableForSale', {
				alias: 'available'
			}), e.add('sku'), e.add('compareAtPrice'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			}), e.add('selectedOptions', function(e) {
				e.add('name'), e.add('value')
			})
		}), a.DiscountApplicationFragment = d.defineFragment('DiscountApplicationFragment', 'DiscountApplication', function(e) {
			e.add('targetSelection'), e.add('allocationMethod'), e.add('targetType'), e.addInlineFragmentOn('ManualDiscountApplication', function(e) {
				e.add('title'), e.add('description')
			}), e.addInlineFragmentOn('DiscountCodeApplication', function(e) {
				e.add('code'), e.add('applicable')
			}), e.addInlineFragmentOn('ScriptDiscountApplication', function(e) {
				e.add('description')
			})
		}), a.VariantWithProductFragment = d.defineFragment('VariantWithProductFragment', 'ProductVariant', function(e) {
			e.addFragment(a.VariantFragment), e.add('product', function(e) {
				e.add('id')
			})
		}), a.UserErrorFragment = d.defineFragment('UserErrorFragment', 'UserError', function(e) {
			e.add('field'), e.add('message')
		}), a.MailingAddressFragment = d.defineFragment('MailingAddressFragment', 'MailingAddress', function(e) {
			e.add('id'), e.add('address1'), e.add('address2'), e.add('city'), e.add('company'), e.add('country'), e.add('firstName'), e.add('formatted'), e.add('lastName'), e.add('latitude'), e.add('longitude'), e.add('phone'), e.add('province'), e.add('zip'), e.add('name'), e.add('countryCodeV2', {
				alias: 'countryCode'
			}), e.add('provinceCode')
		}), a.CheckoutFragment = d.defineFragment('CheckoutFragment', 'Checkout', function(e) {
			e.add('id'), e.add('ready'), e.add('requiresShipping'), e.add('note'), e.add('paymentDue'), e.add('webUrl'), e.add('orderStatusUrl'), e.add('taxExempt'), e.add('taxesIncluded'), e.add('currencyCode'), e.add('totalTax'), e.add('subtotalPrice'), e.add('totalPrice'), e.add('completedAt'), e.add('createdAt'), e.add('updatedAt'), e.add('email'), e.add('discountApplications', {
				args: {
					first: 10
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('node', function(e) {
						e.addFragment(a.DiscountApplicationFragment)
					})
				})
			}), e.add('shippingAddress', function(e) {
				e.addFragment(a.MailingAddressFragment)
			}), e.add('shippingLine', function(e) {
				e.add('handle'), e.add('price'), e.add('title')
			}), e.add('customAttributes', function(e) {
				e.add('key'), e.add('value')
			}), e.add('order', function(e) {
				e.add('id'), e.add('processedAt'), e.add('orderNumber'), e.add('subtotalPrice'), e.add('totalShippingPrice'), e.add('totalTax'), e.add('totalPrice'), e.add('currencyCode'), e.add('totalRefunded'), e.add('customerUrl'), e.add('shippingAddress', function(e) {
					e.addFragment(a.MailingAddressFragment)
				}), e.add('lineItems', {
					args: {
						first: 250
					}
				}, function(e) {
					e.add('pageInfo', function(e) {
						e.add('hasNextPage'), e.add('hasPreviousPage')
					}), e.add('edges', function(e) {
						e.add('cursor'), e.add('node', function(e) {
							e.add('title'), e.add('variant', function(e) {
								e.addFragment(a.VariantWithProductFragment)
							}), e.add('quantity'), e.add('customAttributes', function(e) {
								e.add('key'), e.add('value')
							})
						})
					})
				})
			}), e.add('lineItems', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.add('id'), e.add('title'), e.add('variant', function(e) {
							e.addFragment(a.VariantWithProductFragment)
						}), e.add('quantity'), e.add('customAttributes', function(e) {
							e.add('key'), e.add('value')
						}), e.add('discountAllocations', function(e) {
							e.add('allocatedAmount', function(e) {
								e.add('amount'), e.add('currencyCode')
							}), e.add('discountApplication', function(e) {
								e.addFragment(a.DiscountApplicationFragment)
							})
						})
					})
				})
			})
		}), d.addMutation('checkoutDiscountCodeApplyV2', [t.checkoutDiscountCodeApplyV2.discountCode, t.checkoutDiscountCodeApplyV2.checkoutId], function(e) {
			e.add('checkoutDiscountCodeApplyV2', {
				args: {
					discountCode: t.checkoutDiscountCodeApplyV2.discountCode,
					checkoutId: t.checkoutDiscountCodeApplyV2.checkoutId
				}
			}, function(e) {
				e.add('userErrors', function(e) {
					e.addFragment(a.UserErrorFragment)
				}), e.add('checkout', function(e) {
					e.addFragment(a.CheckoutFragment)
				})
			})
		}), d
	}

	function me(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.checkoutDiscountCodeRemove = {}, t.checkoutDiscountCodeRemove.checkoutId = e.variable('checkoutId', 'ID!'), a.VariantFragment = d.defineFragment('VariantFragment', 'ProductVariant', function(e) {
			e.add('id'), e.add('title'), e.add('price'), e.add('weight'), e.add('availableForSale', {
				alias: 'available'
			}), e.add('sku'), e.add('compareAtPrice'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			}), e.add('selectedOptions', function(e) {
				e.add('name'), e.add('value')
			})
		}), a.DiscountApplicationFragment = d.defineFragment('DiscountApplicationFragment', 'DiscountApplication', function(e) {
			e.add('targetSelection'), e.add('allocationMethod'), e.add('targetType'), e.addInlineFragmentOn('ManualDiscountApplication', function(e) {
				e.add('title'), e.add('description')
			}), e.addInlineFragmentOn('DiscountCodeApplication', function(e) {
				e.add('code'), e.add('applicable')
			}), e.addInlineFragmentOn('ScriptDiscountApplication', function(e) {
				e.add('description')
			})
		}), a.VariantWithProductFragment = d.defineFragment('VariantWithProductFragment', 'ProductVariant', function(e) {
			e.addFragment(a.VariantFragment), e.add('product', function(e) {
				e.add('id')
			})
		}), a.UserErrorFragment = d.defineFragment('UserErrorFragment', 'UserError', function(e) {
			e.add('field'), e.add('message')
		}), a.MailingAddressFragment = d.defineFragment('MailingAddressFragment', 'MailingAddress', function(e) {
			e.add('id'), e.add('address1'), e.add('address2'), e.add('city'), e.add('company'), e.add('country'), e.add('firstName'), e.add('formatted'), e.add('lastName'), e.add('latitude'), e.add('longitude'), e.add('phone'), e.add('province'), e.add('zip'), e.add('name'), e.add('countryCodeV2', {
				alias: 'countryCode'
			}), e.add('provinceCode')
		}), a.CheckoutFragment = d.defineFragment('CheckoutFragment', 'Checkout', function(e) {
			e.add('id'), e.add('ready'), e.add('requiresShipping'), e.add('note'), e.add('paymentDue'), e.add('webUrl'), e.add('orderStatusUrl'), e.add('taxExempt'), e.add('taxesIncluded'), e.add('currencyCode'), e.add('totalTax'), e.add('subtotalPrice'), e.add('totalPrice'), e.add('completedAt'), e.add('createdAt'), e.add('updatedAt'), e.add('email'), e.add('discountApplications', {
				args: {
					first: 10
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('node', function(e) {
						e.addFragment(a.DiscountApplicationFragment)
					})
				})
			}), e.add('shippingAddress', function(e) {
				e.addFragment(a.MailingAddressFragment)
			}), e.add('shippingLine', function(e) {
				e.add('handle'), e.add('price'), e.add('title')
			}), e.add('customAttributes', function(e) {
				e.add('key'), e.add('value')
			}), e.add('order', function(e) {
				e.add('id'), e.add('processedAt'), e.add('orderNumber'), e.add('subtotalPrice'), e.add('totalShippingPrice'), e.add('totalTax'), e.add('totalPrice'), e.add('currencyCode'), e.add('totalRefunded'), e.add('customerUrl'), e.add('shippingAddress', function(e) {
					e.addFragment(a.MailingAddressFragment)
				}), e.add('lineItems', {
					args: {
						first: 250
					}
				}, function(e) {
					e.add('pageInfo', function(e) {
						e.add('hasNextPage'), e.add('hasPreviousPage')
					}), e.add('edges', function(e) {
						e.add('cursor'), e.add('node', function(e) {
							e.add('title'), e.add('variant', function(e) {
								e.addFragment(a.VariantWithProductFragment)
							}), e.add('quantity'), e.add('customAttributes', function(e) {
								e.add('key'), e.add('value')
							})
						})
					})
				})
			}), e.add('lineItems', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.add('id'), e.add('title'), e.add('variant', function(e) {
							e.addFragment(a.VariantWithProductFragment)
						}), e.add('quantity'), e.add('customAttributes', function(e) {
							e.add('key'), e.add('value')
						}), e.add('discountAllocations', function(e) {
							e.add('allocatedAmount', function(e) {
								e.add('amount'), e.add('currencyCode')
							}), e.add('discountApplication', function(e) {
								e.addFragment(a.DiscountApplicationFragment)
							})
						})
					})
				})
			})
		}), d.addMutation('checkoutDiscountCodeRemove', [t.checkoutDiscountCodeRemove.checkoutId], function(e) {
			e.add('checkoutDiscountCodeRemove', {
				args: {
					checkoutId: t.checkoutDiscountCodeRemove.checkoutId
				}
			}, function(e) {
				e.add('userErrors', function(e) {
					e.addFragment(a.UserErrorFragment)
				}), e.add('checkout', function(e) {
					e.addFragment(a.CheckoutFragment)
				})
			})
		}), d
	}

	function ye(e) {
		var d = e.document(),
			a = {},
			t = {};
		return t.checkoutEmailUpdateV2 = {}, t.checkoutEmailUpdateV2.checkoutId = e.variable('checkoutId', 'ID!'), t.checkoutEmailUpdateV2.email = e.variable('email', 'String!'), a.VariantFragment = d.defineFragment('VariantFragment', 'ProductVariant', function(e) {
			e.add('id'), e.add('title'), e.add('price'), e.add('weight'), e.add('availableForSale', {
				alias: 'available'
			}), e.add('sku'), e.add('compareAtPrice'), e.add('image', function(e) {
				e.add('id'), e.add('originalSrc', {
					alias: 'src'
				}), e.add('altText')
			}), e.add('selectedOptions', function(e) {
				e.add('name'), e.add('value')
			})
		}), a.DiscountApplicationFragment = d.defineFragment('DiscountApplicationFragment', 'DiscountApplication', function(e) {
			e.add('targetSelection'), e.add('allocationMethod'), e.add('targetType'), e.addInlineFragmentOn('ManualDiscountApplication', function(e) {
				e.add('title'), e.add('description')
			}), e.addInlineFragmentOn('DiscountCodeApplication', function(e) {
				e.add('code'), e.add('applicable')
			}), e.addInlineFragmentOn('ScriptDiscountApplication', function(e) {
				e.add('description')
			})
		}), a.VariantWithProductFragment = d.defineFragment('VariantWithProductFragment', 'ProductVariant', function(e) {
			e.addFragment(a.VariantFragment), e.add('product', function(e) {
				e.add('id')
			})
		}), a.UserErrorFragment = d.defineFragment('UserErrorFragment', 'UserError', function(e) {
			e.add('field'), e.add('message')
		}), a.MailingAddressFragment = d.defineFragment('MailingAddressFragment', 'MailingAddress', function(e) {
			e.add('id'), e.add('address1'), e.add('address2'), e.add('city'), e.add('company'), e.add('country'), e.add('firstName'), e.add('formatted'), e.add('lastName'), e.add('latitude'), e.add('longitude'), e.add('phone'), e.add('province'), e.add('zip'), e.add('name'), e.add('countryCodeV2', {
				alias: 'countryCode'
			}), e.add('provinceCode')
		}), a.CheckoutFragment = d.defineFragment('CheckoutFragment', 'Checkout', function(e) {
			e.add('id'), e.add('ready'), e.add('requiresShipping'), e.add('note'), e.add('paymentDue'), e.add('webUrl'), e.add('orderStatusUrl'), e.add('taxExempt'), e.add('taxesIncluded'), e.add('currencyCode'), e.add('totalTax'), e.add('subtotalPrice'), e.add('totalPrice'), e.add('completedAt'), e.add('createdAt'), e.add('updatedAt'), e.add('email'), e.add('discountApplications', {
				args: {
					first: 10
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('node', function(e) {
						e.addFragment(a.DiscountApplicationFragment)
					})
				})
			}), e.add('shippingAddress', function(e) {
				e.addFragment(a.MailingAddressFragment)
			}), e.add('shippingLine', function(e) {
				e.add('handle'), e.add('price'), e.add('title')
			}), e.add('customAttributes', function(e) {
				e.add('key'), e.add('value')
			}), e.add('order', function(e) {
				e.add('id'), e.add('processedAt'), e.add('orderNumber'), e.add('subtotalPrice'), e.add('totalShippingPrice'), e.add('totalTax'), e.add('totalPrice'), e.add('currencyCode'), e.add('totalRefunded'), e.add('customerUrl'), e.add('shippingAddress', function(e) {
					e.addFragment(a.MailingAddressFragment)
				}), e.add('lineItems', {
					args: {
						first: 250
					}
				}, function(e) {
					e.add('pageInfo', function(e) {
						e.add('hasNextPage'), e.add('hasPreviousPage')
					}), e.add('edges', function(e) {
						e.add('cursor'), e.add('node', function(e) {
							e.add('title'), e.add('variant', function(e) {
								e.addFragment(a.VariantWithProductFragment)
							}), e.add('quantity'), e.add('customAttributes', function(e) {
								e.add('key'), e.add('value')
							})
						})
					})
				})
			}), e.add('lineItems', {
				args: {
					first: 250
				}
			}, function(e) {
				e.add('pageInfo', function(e) {
					e.add('hasNextPage'), e.add('hasPreviousPage')
				}), e.add('edges', function(e) {
					e.add('cursor'), e.add('node', function(e) {
						e.add('id'), e.add('title'), e.add('variant', function(e) {
							e.addFragment(a.VariantWithProductFragment)
						}), e.add('quantity'), e.add('customAttributes', function(e) {
							e.add('key'), e.add('value')
						}), e.add('discountAllocations', function(e) {
							e.add('allocatedAmount', function(e) {
								e.add('amount'), e.add('currencyCode')
							}), e.add('discountApplication', function(e) {
								e.addFragment(a.DiscountApplicationFragment)
							})
						})
					})
				})
			})
		}), d.addMutation('checkoutEmailUpdateV2', [t.checkoutEmailUpdateV2.checkoutId, t.checkoutEmailUpdateV2.email], function(e) {
			e.add('checkoutEmailUpdateV2', {
				args: {
					checkoutId: t.checkoutEmailUpdateV2.checkoutId,
					email: t.checkoutEmailUpdateV2.email
				}
			}, function(e) {
				e.add('userErrors', function(e) {
					e.addFragment(a.UserErrorFragment)
				}), e.add('checkout', function(e) {
					e.addFragment(a.CheckoutFragment)
				})
			})
		}), d
	}

	function he(e) {
		return Object.getOwnPropertyNames(e).forEach(function(d) {
			var a = e[d];
			a && 'object' === ('undefined' == typeof a ? 'undefined' : fe(a)) && he(a)
		}), Object.freeze(e), e
	}
	var fe = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
		},
		Fe = function(e, d) {
			if (!(e instanceof d)) throw new TypeError('Cannot call a class as a function')
		},
		Pe = function() {
			function e(e, d) {
				for (var a, t = 0; t < d.length; t++) a = d[t], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
			return function(d, a, t) {
				return a && e(d.prototype, a), t && e(d, t), d
			}
		}(),
		ke = function(e, d) {
			if ('function' != typeof d && null !== d) throw new TypeError('Super expression must either be null or a function, not ' + typeof d);
			e.prototype = Object.create(d && d.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), d && (Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : e.__proto__ = d)
		},
		_e = function(e, d) {
			if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
			return d && ('object' == typeof d || 'function' == typeof d) ? d : e
		},
		Ae = function(e, d) {
			if (!(e instanceof d)) throw new TypeError('Cannot call a class as a function')
		},
		Ce = function() {
			function e(e, d) {
				for (var a, t = 0; t < d.length; t++) a = d[t], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
			return function(d, a, t) {
				return a && e(d.prototype, a), t && e(d, t), d
			}
		}(),
		ve = Object.assign || function(e) {
			for (var d, a = 1; a < arguments.length; a++)
				for (var t in d = arguments[a], d) Object.prototype.hasOwnProperty.call(d, t) && (e[t] = d[t]);
			return e
		},
		Se = function(e, d) {
			if ('function' != typeof d && null !== d) throw new TypeError('Super expression must either be null or a function, not ' + ('undefined' == typeof d ? 'undefined' : fe(d)));
			e.prototype = Object.create(d && d.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), d && (Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : e.__proto__ = d)
		},
		Ie = function(e, d) {
			if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
			return d && ('object' === ('undefined' == typeof d ? 'undefined' : fe(d)) || 'function' == typeof d) ? d : e
		},
		Oe = function() {
			function e(e, d) {
				var a, t = [],
					n = !0,
					i = !1;
				try {
					for (var r, o = e[Symbol.iterator](); !(n = (r = o.next()).done) && (t.push(r.value), !(d && t.length === d)); n = !0);
				} catch (e) {
					i = !0, a = e
				} finally {
					try {
						!n && o['return'] && o['return']()
					} finally {
						if (i) throw a
					}
				}
				return t
			}
			return function(d, a) {
				if (Array.isArray(d)) return d;
				if (Symbol.iterator in Object(d)) return e(d, a);
				throw new TypeError('Invalid attempt to destructure non-iterable instance')
			}
		}(),
		be = function(e) {
			if (Array.isArray(e)) {
				for (var d = 0, a = Array(e.length); d < e.length; d++) a[d] = e[d];
				return a
			}
			return Array.from(e)
		},
		Te = function() {
			function e(d, a, t) {
				Ae(this, e), this.name = d, this.type = a, this.defaultValue = t, Object.freeze(this)
			}
			return Ce(e, [{
				key: 'toInputValueString',
				value: function() {
					return '$' + this.name
				}
			}, {
				key: 'toString',
				value: function() {
					var e = this.defaultValue ? ' = ' + r(this.defaultValue) : '';
					return '$' + this.name + ':' + this.type + e
				}
			}]), e
		}(),
		De = function() {
			function e(d) {
				Ae(this, e), this.key = d
			}
			return Ce(e, [{
				key: 'toString',
				value: function() {
					return this.key
				}
			}, {
				key: 'valueOf',
				value: function() {
					return this.key.valueOf()
				}
			}]), e
		}(),
		Ve = function(e) {
			return new De(e)
		},
		Ee = function() {
			function e(d) {
				Ae(this, e), this.value = d
			}
			return Ce(e, [{
				key: 'toString',
				value: function() {
					return this.value.toString()
				}
			}, {
				key: 'valueOf',
				value: function() {
					return this.value.valueOf()
				}
			}, {
				key: 'unwrapped',
				get: function() {
					return this.value
				}
			}]), e
		}(),
		Ne = function() {},
		xe = {
			trackTypeDependency: Ne,
			trackFieldDependency: Ne
		},
		Be = xe.trackTypeDependency,
		Ue = xe.trackFieldDependency,
		Le = Object.freeze({}),
		Me = function() {
			function e(d, t, i) {
				Ae(this, e), this.name = d, this.alias = t.alias || null, this.responseKey = this.alias || this.name, this.args = t.args ? a(n, t.args) : Le, this.selectionSet = i, Object.freeze(this)
			}
			return Ce(e, [{
				key: 'toString',
				value: function() {
					var e = this.alias ? this.alias + ': ' : '';
					return '' + e + this.name + s(this.args) + this.selectionSet
				}
			}]), e
		}(),
		Re = function e() {
			Ae(this, e)
		},
		Qe = function(e) {
			function d(e, a) {
				Ae(this, d);
				var t = Ie(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this));
				return t.typeName = e, t.selectionSet = a, Object.freeze(t), t
			}
			return Se(d, e), Ce(d, [{
				key: 'toString',
				value: function() {
					return '... on ' + this.typeName + this.selectionSet
				}
			}]), d
		}(Re),
		qe = function(e) {
			function d(e) {
				Ae(this, d);
				var a = Ie(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this));
				return a.name = e.name, a.selectionSet = e.selectionSet, Object.freeze(a), a
			}
			return Se(d, e), Ce(d, [{
				key: 'toString',
				value: function() {
					return '...' + this.name
				}
			}, {
				key: 'toDefinition',
				value: function() {
					return new we(this.name, this.selectionSet.typeSchema.name, this.selectionSet)
				}
			}]), d
		}(Re),
		we = function() {
			function e(d, a, t) {
				Ae(this, e), this.name = d, this.typeName = a, this.selectionSet = t, this.spread = new qe(this), Object.freeze(this)
			}
			return Ce(e, [{
				key: 'toString',
				value: function() {
					return 'fragment ' + this.name + ' on ' + this.typeName + ' ' + this.selectionSet
				}
			}]), e
		}(),
		Je = function() {
			function d(e, a, n) {
				Ae(this, d), this.typeSchema = 'string' == typeof a ? t(e, a) : a, Be(this.typeSchema.name), this.typeBundle = e, this.selections = [], n && n(new Ke(this.typeBundle, this.typeSchema, this.selections)), (this.typeSchema.implementsNode || 'Node' === this.typeSchema.name) && !c(this.selections) && this.selections.unshift(new Me('id', {}, new d(e, 'ID'))), 'INTERFACE' !== this.typeSchema.kind || p(this.selections) || this.selections.unshift(new Me('__typename', {}, new d(e, 'String'))), this.selectionsByResponseKey = u(this.selections), Object.freeze(this.selections), Object.freeze(this)
			}
			return Ce(d, [{
				key: 'toString',
				value: function() {
					return 'SCALAR' === this.typeSchema.kind || 'ENUM' === this.typeSchema.kind ? '' : ' { ' + e(this.selections) + ' }'
				}
			}]), d
		}(),
		Ke = function() {
			function e(d, a, t) {
				Ae(this, e), this.typeBundle = d, this.typeSchema = a, this.selections = t
			}
			return Ce(e, [{
				key: 'hasSelectionWithResponseKey',
				value: function(e) {
					return this.selections.some(function(d) {
						return d.responseKey === e
					})
				}
			}, {
				key: 'add',
				value: function(e) {
					var d;
					if ('[object String]' === Object.prototype.toString.call(e)) {
						Ue(this.typeSchema.name, e);
						for (var a = arguments.length, t = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) t[n - 1] = arguments[n];
						d = this.field.apply(this, [e].concat(t))
					} else Me.prototype.isPrototypeOf(e) && Ue(this.typeSchema.name, e.name), d = e;
					if (d.responseKey && this.hasSelectionWithResponseKey(d.responseKey)) throw new Error('The field name or alias \'' + d.responseKey + '\' has already been added.');
					this.selections.push(d)
				}
			}, {
				key: 'field',
				value: function(e) {
					for (var d = arguments.length, a = Array(1 < d ? d - 1 : 0), n = 1; n < d; n++) a[n - 1] = arguments[n];
					var i = l(a),
						r = i.options,
						o = i.callback,
						s = i.selectionSet;
					if (!s) {
						if (!this.typeSchema.fieldBaseTypes[e]) throw new Error('No field of name "' + e + '" found on type "' + this.typeSchema.name + '" in schema');
						var c = t(this.typeBundle, this.typeSchema.fieldBaseTypes[e]);
						s = new Je(this.typeBundle, c, o)
					}
					return new Me(e, r, s)
				}
			}, {
				key: 'inlineFragmentOn',
				value: function(e) {
					var d, a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Ne;
					return d = Je.prototype.isPrototypeOf(a) ? a : new Je(this.typeBundle, t(this.typeBundle, e), a), new Qe(e, d)
				}
			}, {
				key: 'addField',
				value: function(e) {
					for (var d = arguments.length, a = Array(1 < d ? d - 1 : 0), t = 1; t < d; t++) a[t - 1] = arguments[t];
					this.add.apply(this, [e].concat(a))
				}
			}, {
				key: 'addConnection',
				value: function(e) {
					for (var d = arguments.length, a = Array(1 < d ? d - 1 : 0), t = 1; t < d; t++) a[t - 1] = arguments[t];
					var n = l(a),
						i = n.options,
						r = n.callback,
						o = n.selectionSet;
					this.add(e, i, function(e) {
						e.add('pageInfo', {}, function(e) {
							e.add('hasNextPage'), e.add('hasPreviousPage')
						}), e.add('edges', {}, function(e) {
							e.add('cursor'), e.addField('node', {}, o || r)
						})
					})
				}
			}, {
				key: 'addInlineFragmentOn',
				value: function(e) {
					var d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Ne;
					this.add(this.inlineFragmentOn(e, d))
				}
			}, {
				key: 'addFragment',
				value: function(e) {
					this.add(e)
				}
			}]), e
		}(),
		We = function() {
			function d(e) {
				Ae(this, d), this.variableDefinitions = e ? [].concat(be(e)) : [], Object.freeze(this.variableDefinitions), Object.freeze(this)
			}
			return Ce(d, [{
				key: 'toString',
				value: function() {
					return 0 === this.variableDefinitions.length ? '' : ' (' + e(this.variableDefinitions) + ') '
				}
			}]), d
		}(),
		ze = function() {
			function e(d, a) {
				Ae(this, e);
				for (var n = arguments.length, i = Array(2 < n ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r];
				var o = g(i),
					s = o.name,
					l = o.variables,
					c = o.selectionSetCallback;
				this.typeBundle = d, this.name = s, this.variableDefinitions = new We(l), this.operationType = a, 'query' === a ? (this.selectionSet = new Je(d, d.queryType, c), this.typeSchema = t(d, d.queryType)) : (this.selectionSet = new Je(d, d.mutationType, c), this.typeSchema = t(d, d.mutationType)), Object.freeze(this)
			}
			return Ce(e, [{
				key: 'toString',
				value: function() {
					var e = this.name ? ' ' + this.name : '';
					return '' + this.operationType + e + this.variableDefinitions + this.selectionSet
				}
			}, {
				key: 'isAnonymous',
				get: function() {
					return !this.name
				}
			}]), e
		}(),
		He = function(e) {
			function d(e) {
				var a;
				Ae(this, d);
				for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
				return Ie(this, (a = d.__proto__ || Object.getPrototypeOf(d)).call.apply(a, [this, e, 'query'].concat(n)))
			}
			return Se(d, e), d
		}(ze),
		je = function(e) {
			function d(e) {
				var a;
				Ae(this, d);
				for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
				return Ie(this, (a = d.__proto__ || Object.getPrototypeOf(d)).call.apply(a, [this, e, 'mutation'].concat(n)))
			}
			return Se(d, e), d
		}(ze),
		Xe = function() {
			function d(e) {
				Ae(this, d), this.typeBundle = e, this.definitions = []
			}
			return Ce(d, [{
				key: 'toString',
				value: function() {
					return e(this.definitions)
				}
			}, {
				key: 'addOperation',
				value: function(e) {
					for (var d = arguments.length, a = Array(1 < d ? d - 1 : 0), t = 1; t < d; t++) a[t - 1] = arguments[t];
					var n = f.apply(void 0, [this.typeBundle, e].concat(a));
					if (F(this.operations.concat(n))) throw new Error('All operations must be uniquely named on a multi-operation document');
					this.definitions.push(n)
				}
			}, {
				key: 'addQuery',
				value: function() {
					for (var e = arguments.length, d = Array(e), a = 0; a < e; a++) d[a] = arguments[a];
					this.addOperation.apply(this, ['query'].concat(d))
				}
			}, {
				key: 'addMutation',
				value: function() {
					for (var e = arguments.length, d = Array(e), a = 0; a < e; a++) d[a] = arguments[a];
					this.addOperation.apply(this, ['mutation'].concat(d))
				}
			}, {
				key: 'defineFragment',
				value: function(e, d, a) {
					if (P(this.fragmentDefinitions, e)) throw new Error('All fragments must be uniquely named on a multi-fragment document');
					var t = new Je(this.typeBundle, d, a),
						n = new we(e, d, t);
					return this.definitions.push(n), n.spread
				}
			}, {
				key: 'operations',
				get: function() {
					return this.definitions.filter(function(e) {
						return ze.prototype.isPrototypeOf(e)
					})
				}
			}, {
				key: 'fragmentDefinitions',
				get: function() {
					return this.definitions.filter(function(e) {
						return we.prototype.isPrototypeOf(e)
					})
				}
			}]), d
		}(),
		$e = function e(d) {
			var a = this;
			Ae(this, e), Object.defineProperty(this, 'attrs', {
				value: d,
				enumerable: !1
			}), Object.keys(this.attrs).filter(function(e) {
				return !(e in a)
			}).forEach(function(e) {
				var t;
				t = null === d[e] ? {
					enumerable: !0,
					get: function() {
						return null
					}
				} : {
					enumerable: !0,
					get: function() {
						return this.attrs[e].valueOf()
					}
				}, Object.defineProperty(a, e, t)
			})
		},
		Ge = function() {
			function e() {
				Ae(this, e), this.classStore = {}
			}
			return Ce(e, [{
				key: 'registerClassForType',
				value: function(e, d) {
					this.classStore[d] = e
				}
			}, {
				key: 'unregisterClassForType',
				value: function(e) {
					delete this.classStore[e]
				}
			}, {
				key: 'classForType',
				value: function(e) {
					return this.classStore[e] || $e
				}
			}]), e
		}(),
		Ye = function() {
			function e(d, a) {
				var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
				Ae(this, e), this.selection = d, this.responseData = a, this.parent = t, Object.freeze(this)
			}
			return Ce(e, [{
				key: 'contextForObjectProperty',
				value: function(d) {
					var a, t = this.selection.selectionSet.selectionsByResponseKey[d],
						n = t && t[0];
					if (a = Re.prototype.isPrototypeOf(n) ? new e(n, this.responseData, this.parent) : new e(n, this.responseData[d], this), !n) throw new Error('Unexpected response key "' + d + '", not found in selection set: ' + this.selection.selectionSet);
					return Me.prototype.isPrototypeOf(n) ? a : a.contextForObjectProperty(d)
				}
			}, {
				key: 'contextForArrayItem',
				value: function(d) {
					return new e(this.selection, d, this.parent)
				}
			}]), e
		}(),
		Ze = function() {
			function e(d, a) {
				var t = a.url,
					n = a.fetcherOptions,
					i = a.fetcher,
					r = a.registry,
					o = void 0 === r ? new Ge : r;
				if (Ae(this, e), this.typeBundle = d, this.classRegistry = o, t && i) throw new Error('Arguments not supported: supply either `url` and optional `fetcherOptions` OR use a `fetcher` function for further customization.');
				if (t) this.fetcher = J(t, n);
				else if (i) {
					if (n) throw new Error('Arguments not supported: when specifying your own `fetcher`, set options through it and not with `fetcherOptions`');
					this.fetcher = i
				} else throw new Error('Invalid arguments: one of `url` or `fetcher` is needed.')
			}
			return Ce(e, [{
				key: 'document',
				value: function() {
					return new Xe(this.typeBundle)
				}
			}, {
				key: 'query',
				value: function() {
					for (var e = arguments.length, d = Array(e), a = 0; a < e; a++) d[a] = arguments[a];
					return new(Function.prototype.bind.apply(He, [null].concat([this.typeBundle], d)))
				}
			}, {
				key: 'mutation',
				value: function() {
					for (var e = arguments.length, d = Array(e), a = 0; a < e; a++) d[a] = arguments[a];
					return new(Function.prototype.bind.apply(je, [null].concat([this.typeBundle], d)))
				}
			}, {
				key: 'send',
				value: function(e) {
					var d, a = this,
						t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
						n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
					d = Function.prototype.isPrototypeOf(e) ? e(this) : e;
					var i = {
						query: d.toString()
					};
					t && (i.variables = t), Object.assign(i, n);
					var r;
					if (ze.prototype.isPrototypeOf(d)) r = d;
					else {
						var o = d;
						if (1 === o.operations.length) r = o.operations[0];
						else if (n.operationName) r = o.operations.find(function(e) {
							return e.name === n.operationName
						});
						else throw new Error('\n          A document must contain exactly one operation, or an operationName\n          must be specified. Example:\n\n            client.send(document, null, {operationName: \'myFancyQuery\'});\n        ')
					}
					return this.fetcher(i).then(function(e) {
						return e.data && (e.model = w(r, e.data, {
							classRegistry: a.classRegistry,
							variableValues: t
						})), e
					})
				}
			}, {
				key: 'fetchNextPage',
				value: function(e, d) {
					var a = Array.isArray(e) ? e[e.length - 1] : e;
					var t, n = a.nextPageQueryAndPath(),
						i = Oe(n, 2),
						r = i[0],
						o = i[1];
					return (a.variableValues || d) && (t = Object.assign({}, a.variableValues, d)), this.send(r, t).then(function(e) {
						return e.model = o.reduce(function(e, d) {
							return e[d]
						}, e.model), e
					})
				}
			}, {
				key: 'fetchAllPages',
				value: function(e, d) {
					var a = this,
						t = d.pageSize;
					return K(e) ? this.fetchNextPage(e, {
						first: t
					}).then(function(d) {
						var n = d.model,
							i = e.concat(n);
						return a.fetchAllPages(i, {
							pageSize: t
						})
					}) : Promise.resolve(e)
				}
			}, {
				key: 'refetch',
				value: function(e) {
					if (!e) throw new Error('\'client#refetch\' must be called with a non-null instance of a Node.');
					else if (!e.type.implementsNode) throw new Error('\'client#refetch\' must be called with a type that implements Node. Received ' + e.type.name + '.');
					return this.send(e.refetchQuery()).then(function(e) {
						var d = e.model;
						return d.node
					})
				}
			}, {
				key: 'variable',
				value: function(e, d, a) {
					return i(e, d, a)
				}
			}, {
				key: 'enum',
				value: function(e) {
					return Ve(e)
				}
			}]), e
		}(),
		ed = function() {
			function e(d) {
				var a = this;
				Fe(this, e), Object.keys(this.deprecatedProperties).forEach(function(e) {
					d.hasOwnProperty(e) && (console.warn('[ShopifyBuy] Config property ' + e + ' is deprecated as of v1.0, please use ' + a.deprecatedProperties[e] + ' instead.'), d[a.deprecatedProperties[e]] = d[e])
				}), this.requiredProperties.forEach(function(e) {
					if (d.hasOwnProperty(e)) a[e] = d[e];
					else throw new Error('new Config() requires the option \'' + e + '\'')
				})
			}
			return Pe(e, [{
				key: 'requiredProperties',
				get: function() {
					return ['storefrontAccessToken', 'domain']
				}
			}, {
				key: 'deprecatedProperties',
				get: function() {
					return {
						accessToken: 'storefrontAccessToken',
						apiKey: 'storefrontAccessToken'
					}
				}
			}]), e
		}(),
		dd = function e(d) {
			Fe(this, e), this.graphQLClient = d
		},
		ad = [{
			message: 'an unknown error has occured.'
		}],
		td = {
			variantForOptions: function(e, d) {
				return e.variants.find(function(e) {
					return e.selectedOptions.every(function(e) {
						return d[e.name] === e.value.valueOf()
					})
				})
			}
		},
		nd = function(e) {
			function d() {
				return Fe(this, d), _e(this, (d.__proto__ || Object.getPrototypeOf(d)).apply(this, arguments))
			}
			return ke(d, e), Pe(d, [{
				key: 'fetchAll',
				value: function() {
					var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 20;
					return this.graphQLClient.send(G, {
						first: e
					}).then(W('shop.products')).then(H(this.graphQLClient))
				}
			}, {
				key: 'fetch',
				value: function(e) {
					return this.graphQLClient.send(X, {
						id: e
					}).then(W('node')).then(H(this.graphQLClient))
				}
			}, {
				key: 'fetchMultiple',
				value: function(e) {
					return this.graphQLClient.send($, {
						ids: e
					}).then(W('nodes')).then(H(this.graphQLClient))
				}
			}, {
				key: 'fetchByHandle',
				value: function(e) {
					return this.graphQLClient.send(Y, {
						handle: e
					}).then(W('shop.productByHandle')).then(H(this.graphQLClient))
				}
			}, {
				key: 'fetchQuery',
				value: function() {
					var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
						d = e.first,
						a = void 0 === d ? 20 : d,
						t = e.sortKey,
						n = void 0 === t ? 'ID' : t,
						i = e.query,
						r = e.reverse;
					return this.graphQLClient.send(G, {
						first: a,
						sortKey: n,
						query: i,
						reverse: r
					}).then(W('shop.products')).then(H(this.graphQLClient))
				}
			}, {
				key: 'helpers',
				get: function() {
					return td
				}
			}]), d
		}(dd),
		id = function(e) {
			function d() {
				return Fe(this, d), _e(this, (d.__proto__ || Object.getPrototypeOf(d)).apply(this, arguments))
			}
			return ke(d, e), Pe(d, [{
				key: 'fetchAll',
				value: function() {
					var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 20;
					return this.graphQLClient.send(de, {
						first: e
					}).then(W('shop.collections'))
				}
			}, {
				key: 'fetchAllWithProducts',
				value: function() {
					var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
						d = e.first,
						a = void 0 === d ? 20 : d,
						t = e.productsFirst,
						n = void 0 === t ? 20 : t;
					return this.graphQLClient.send(ae, {
						first: a,
						productsFirst: n
					}).then(W('shop.collections')).then(j(this.graphQLClient))
				}
			}, {
				key: 'fetch',
				value: function(e) {
					return this.graphQLClient.send(Z, {
						id: e
					}).then(W('node'))
				}
			}, {
				key: 'fetchWithProducts',
				value: function(e) {
					return this.graphQLClient.send(ee, {
						id: e
					}).then(W('node')).then(j(this.graphQLClient))
				}
			}, {
				key: 'fetchByHandle',
				value: function(e) {
					return this.graphQLClient.send(te, {
						handle: e
					}).then(W('shop.collectionByHandle'))
				}
			}, {
				key: 'fetchQuery',
				value: function() {
					var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
						d = e.first,
						a = void 0 === d ? 20 : d,
						t = e.sortKey,
						n = void 0 === t ? 'ID' : t,
						i = e.query,
						r = e.reverse;
					return this.graphQLClient.send(de, {
						first: a,
						sortKey: n,
						query: i,
						reverse: r
					}).then(W('shop.collections'))
				}
			}]), d
		}(dd),
		rd = function(e) {
			function d() {
				return Fe(this, d), _e(this, (d.__proto__ || Object.getPrototypeOf(d)).apply(this, arguments))
			}
			return ke(d, e), Pe(d, [{
				key: 'fetchInfo',
				value: function() {
					return this.graphQLClient.send(ne).then(W('shop'))
				}
			}, {
				key: 'fetchPolicies',
				value: function() {
					return this.graphQLClient.send(ie).then(W('shop'))
				}
			}]), d
		}(dd),
		od = function(e) {
			function d() {
				return Fe(this, d), _e(this, (d.__proto__ || Object.getPrototypeOf(d)).apply(this, arguments))
			}
			return ke(d, e), Pe(d, [{
				key: 'fetch',
				value: function(e) {
					var d = this;
					return this.graphQLClient.send(oe, {
						id: e
					}).then(W('node')).then(function(e) {
						return e ? d.graphQLClient.fetchAllPages(e.lineItems, {
							pageSize: 250
						}).then(function(d) {
							return e.attrs.lineItems = d, e
						}) : null
					})
				}
			}, {
				key: 'create',
				value: function() {
					var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
					return this.graphQLClient.send(se, {
						input: e
					}).then(re('checkoutCreate', this.graphQLClient))
				}
			}, {
				key: 'updateAttributes',
				value: function(e) {
					var d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
					return this.graphQLClient.send(ue, {
						checkoutId: e,
						input: d
					}).then(re('checkoutAttributesUpdateV2', this.graphQLClient))
				}
			}, {
				key: 'updateEmail',
				value: function(e, d) {
					return this.graphQLClient.send(ye, {
						checkoutId: e,
						email: d
					}).then(re('checkoutEmailUpdateV2', this.graphQLClient))
				}
			}, {
				key: 'addLineItems',
				value: function(e, d) {
					return this.graphQLClient.send(le, {
						checkoutId: e,
						lineItems: d
					}).then(re('checkoutLineItemsAdd', this.graphQLClient))
				}
			}, {
				key: 'addDiscount',
				value: function(e, d) {
					return this.graphQLClient.send(ge, {
						checkoutId: e,
						discountCode: d
					}).then(re('checkoutDiscountCodeApplyV2', this.graphQLClient))
				}
			}, {
				key: 'removeDiscount',
				value: function(e) {
					return this.graphQLClient.send(me, {
						checkoutId: e
					}).then(re('checkoutDiscountCodeRemove', this.graphQLClient))
				}
			}, {
				key: 'removeLineItems',
				value: function(e, d) {
					return this.graphQLClient.send(ce, {
						checkoutId: e,
						lineItemIds: d
					}).then(re('checkoutLineItemsRemove', this.graphQLClient))
				}
			}, {
				key: 'updateLineItems',
				value: function(e, d) {
					return this.graphQLClient.send(pe, {
						checkoutId: e,
						lineItems: d
					}).then(re('checkoutLineItemsUpdate', this.graphQLClient))
				}
			}]), d
		}(dd),
		sd = {
			imageForSize: function(e, d) {
				var a = d.maxWidth,
					t = d.maxHeight,
					n = e.src.split('?'),
					i = n[0],
					r = n[1] ? '?' + n[1] : '',
					o = i.split('.'),
					s = o.length - 2;
				return o[s] = o[s] + '_' + a + 'x' + t, '' + o.join('.') + r
			}
		},
		ld = function(e) {
			function d() {
				return Fe(this, d), _e(this, (d.__proto__ || Object.getPrototypeOf(d)).apply(this, arguments))
			}
			return ke(d, e), Pe(d, [{
				key: 'helpers',
				get: function() {
					return sd
				}
			}]), d
		}(dd),
		cd = {
			types: {}
		};
	cd.types.Boolean = {
		name: 'Boolean',
		kind: 'SCALAR'
	}, cd.types.String = {
		name: 'String',
		kind: 'SCALAR'
	}, cd.types.QueryRoot = {
		name: 'QueryRoot',
		kind: 'OBJECT',
		fieldBaseTypes: {
			node: 'Node',
			nodes: 'Node',
			shop: 'Shop'
		},
		implementsNode: !1
	}, cd.types.Node = {
		name: 'Node',
		kind: 'INTERFACE',
		fieldBaseTypes: {},
		possibleTypes: ['AppliedGiftCard', 'Article', 'Blog', 'Checkout', 'CheckoutLineItem', 'Collection', 'Comment', 'MailingAddress', 'Order', 'Payment', 'Product', 'ProductOption', 'ProductVariant', 'ShopPolicy']
	}, cd.types.ID = {
		name: 'ID',
		kind: 'SCALAR'
	}, cd.types.DateTime = {
		name: 'DateTime',
		kind: 'SCALAR'
	}, cd.types.MailingAddress = {
		name: 'MailingAddress',
		kind: 'OBJECT',
		fieldBaseTypes: {
			address1: 'String',
			address2: 'String',
			city: 'String',
			company: 'String',
			country: 'String',
			countryCodeV2: 'CountryCode',
			firstName: 'String',
			formatted: 'String',
			id: 'ID',
			lastName: 'String',
			latitude: 'Float',
			longitude: 'Float',
			name: 'String',
			phone: 'String',
			province: 'String',
			provinceCode: 'String',
			zip: 'String'
		},
		implementsNode: !0
	}, cd.types.Float = {
		name: 'Float',
		kind: 'SCALAR'
	}, cd.types.CountryCode = {
		name: 'CountryCode',
		kind: 'ENUM'
	}, cd.types.PageInfo = {
		name: 'PageInfo',
		kind: 'OBJECT',
		fieldBaseTypes: {
			hasNextPage: 'Boolean',
			hasPreviousPage: 'Boolean'
		},
		implementsNode: !1
	}, cd.types.Int = {
		name: 'Int',
		kind: 'SCALAR'
	}, cd.types.Order = {
		name: 'Order',
		kind: 'OBJECT',
		fieldBaseTypes: {
			currencyCode: 'CurrencyCode',
			customerUrl: 'URL',
			id: 'ID',
			lineItems: 'OrderLineItemConnection',
			orderNumber: 'Int',
			processedAt: 'DateTime',
			shippingAddress: 'MailingAddress',
			subtotalPrice: 'Money',
			totalPrice: 'Money',
			totalRefunded: 'Money',
			totalShippingPrice: 'Money',
			totalTax: 'Money'
		},
		implementsNode: !0
	}, cd.types.Money = {
		name: 'Money',
		kind: 'SCALAR'
	}, cd.types.CurrencyCode = {
		name: 'CurrencyCode',
		kind: 'ENUM'
	}, cd.types.URL = {
		name: 'URL',
		kind: 'SCALAR'
	}, cd.types.DiscountAllocation = {
		name: 'DiscountAllocation',
		kind: 'OBJECT',
		fieldBaseTypes: {
			allocatedAmount: 'MoneyV2',
			discountApplication: 'DiscountApplication'
		},
		implementsNode: !1
	}, cd.types.MoneyV2 = {
		name: 'MoneyV2',
		kind: 'OBJECT',
		fieldBaseTypes: {
			amount: 'Decimal',
			currencyCode: 'CurrencyCode'
		},
		implementsNode: !1
	}, cd.types.Decimal = {
		name: 'Decimal',
		kind: 'SCALAR'
	}, cd.types.DiscountApplication = {
		name: 'DiscountApplication',
		kind: 'INTERFACE',
		fieldBaseTypes: {
			allocationMethod: 'DiscountApplicationAllocationMethod',
			targetSelection: 'DiscountApplicationTargetSelection',
			targetType: 'DiscountApplicationTargetType'
		},
		possibleTypes: ['DiscountCodeApplication', 'ManualDiscountApplication', 'ScriptDiscountApplication']
	}, cd.types.DiscountApplicationAllocationMethod = {
		name: 'DiscountApplicationAllocationMethod',
		kind: 'ENUM'
	}, cd.types.DiscountApplicationTargetSelection = {
		name: 'DiscountApplicationTargetSelection',
		kind: 'ENUM'
	}, cd.types.DiscountApplicationTargetType = {
		name: 'DiscountApplicationTargetType',
		kind: 'ENUM'
	}, cd.types.OrderLineItemConnection = {
		name: 'OrderLineItemConnection',
		kind: 'OBJECT',
		fieldBaseTypes: {
			edges: 'OrderLineItemEdge',
			pageInfo: 'PageInfo'
		},
		implementsNode: !1
	}, cd.types.OrderLineItemEdge = {
		name: 'OrderLineItemEdge',
		kind: 'OBJECT',
		fieldBaseTypes: {
			cursor: 'String',
			node: 'OrderLineItem'
		},
		implementsNode: !1
	}, cd.types.OrderLineItem = {
		name: 'OrderLineItem',
		kind: 'OBJECT',
		fieldBaseTypes: {
			customAttributes: 'Attribute',
			quantity: 'Int',
			title: 'String',
			variant: 'ProductVariant'
		},
		implementsNode: !1
	}, cd.types.ProductVariant = {
		name: 'ProductVariant',
		kind: 'OBJECT',
		fieldBaseTypes: {
			availableForSale: 'Boolean',
			compareAtPrice: 'Money',
			id: 'ID',
			image: 'Image',
			price: 'Money',
			product: 'Product',
			selectedOptions: 'SelectedOption',
			sku: 'String',
			title: 'String',
			weight: 'Float'
		},
		implementsNode: !0
	}, cd.types.Image = {
		name: 'Image',
		kind: 'OBJECT',
		fieldBaseTypes: {
			altText: 'String',
			id: 'ID',
			originalSrc: 'URL',
			src: 'URL'
		},
		implementsNode: !1
	}, cd.types.SelectedOption = {
		name: 'SelectedOption',
		kind: 'OBJECT',
		fieldBaseTypes: {
			name: 'String',
			value: 'String'
		},
		implementsNode: !1
	}, cd.types.Product = {
		name: 'Product',
		kind: 'OBJECT',
		fieldBaseTypes: {
			availableForSale: 'Boolean',
			createdAt: 'DateTime',
			description: 'String',
			descriptionHtml: 'HTML',
			handle: 'String',
			id: 'ID',
			images: 'ImageConnection',
			onlineStoreUrl: 'URL',
			options: 'ProductOption',
			productType: 'String',
			publishedAt: 'DateTime',
			title: 'String',
			updatedAt: 'DateTime',
			variants: 'ProductVariantConnection',
			vendor: 'String'
		},
		implementsNode: !0
	}, cd.types.CollectionConnection = {
		name: 'CollectionConnection',
		kind: 'OBJECT',
		fieldBaseTypes: {
			edges: 'CollectionEdge',
			pageInfo: 'PageInfo'
		},
		implementsNode: !1
	}, cd.types.CollectionEdge = {
		name: 'CollectionEdge',
		kind: 'OBJECT',
		fieldBaseTypes: {
			cursor: 'String',
			node: 'Collection'
		},
		implementsNode: !1
	}, cd.types.Collection = {
		name: 'Collection',
		kind: 'OBJECT',
		fieldBaseTypes: {
			description: 'String',
			descriptionHtml: 'HTML',
			handle: 'String',
			id: 'ID',
			image: 'Image',
			products: 'ProductConnection',
			title: 'String',
			updatedAt: 'DateTime'
		},
		implementsNode: !0
	}, cd.types.HTML = {
		name: 'HTML',
		kind: 'SCALAR'
	}, cd.types.ProductConnection = {
		name: 'ProductConnection',
		kind: 'OBJECT',
		fieldBaseTypes: {
			edges: 'ProductEdge',
			pageInfo: 'PageInfo'
		},
		implementsNode: !1
	}, cd.types.ProductEdge = {
		name: 'ProductEdge',
		kind: 'OBJECT',
		fieldBaseTypes: {
			cursor: 'String',
			node: 'Product'
		},
		implementsNode: !1
	}, cd.types.ImageConnection = {
		name: 'ImageConnection',
		kind: 'OBJECT',
		fieldBaseTypes: {
			edges: 'ImageEdge',
			pageInfo: 'PageInfo'
		},
		implementsNode: !1
	}, cd.types.ImageEdge = {
		name: 'ImageEdge',
		kind: 'OBJECT',
		fieldBaseTypes: {
			cursor: 'String',
			node: 'Image'
		},
		implementsNode: !1
	}, cd.types.ProductOption = {
		name: 'ProductOption',
		kind: 'OBJECT',
		fieldBaseTypes: {
			name: 'String',
			values: 'String'
		},
		implementsNode: !0
	}, cd.types.ProductVariantConnection = {
		name: 'ProductVariantConnection',
		kind: 'OBJECT',
		fieldBaseTypes: {
			edges: 'ProductVariantEdge',
			pageInfo: 'PageInfo'
		},
		implementsNode: !1
	}, cd.types.ProductVariantEdge = {
		name: 'ProductVariantEdge',
		kind: 'OBJECT',
		fieldBaseTypes: {
			cursor: 'String',
			node: 'ProductVariant'
		},
		implementsNode: !1
	}, cd.types.Attribute = {
		name: 'Attribute',
		kind: 'OBJECT',
		fieldBaseTypes: {
			key: 'String',
			value: 'String'
		},
		implementsNode: !1
	}, cd.types.DiscountApplicationConnection = {
		name: 'DiscountApplicationConnection',
		kind: 'OBJECT',
		fieldBaseTypes: {
			edges: 'DiscountApplicationEdge',
			pageInfo: 'PageInfo'
		},
		implementsNode: !1
	}, cd.types.DiscountApplicationEdge = {
		name: 'DiscountApplicationEdge',
		kind: 'OBJECT',
		fieldBaseTypes: {
			node: 'DiscountApplication'
		},
		implementsNode: !1
	}, cd.types.Checkout = {
		name: 'Checkout',
		kind: 'OBJECT',
		fieldBaseTypes: {
			completedAt: 'DateTime',
			createdAt: 'DateTime',
			currencyCode: 'CurrencyCode',
			customAttributes: 'Attribute',
			discountApplications: 'DiscountApplicationConnection',
			email: 'String',
			id: 'ID',
			lineItems: 'CheckoutLineItemConnection',
			note: 'String',
			order: 'Order',
			orderStatusUrl: 'URL',
			paymentDue: 'Money',
			ready: 'Boolean',
			requiresShipping: 'Boolean',
			shippingAddress: 'MailingAddress',
			shippingLine: 'ShippingRate',
			subtotalPrice: 'Money',
			taxExempt: 'Boolean',
			taxesIncluded: 'Boolean',
			totalPrice: 'Money',
			totalTax: 'Money',
			updatedAt: 'DateTime',
			webUrl: 'URL'
		},
		implementsNode: !0
	}, cd.types.CheckoutLineItemConnection = {
		name: 'CheckoutLineItemConnection',
		kind: 'OBJECT',
		fieldBaseTypes: {
			edges: 'CheckoutLineItemEdge',
			pageInfo: 'PageInfo'
		},
		implementsNode: !1
	}, cd.types.CheckoutLineItemEdge = {
		name: 'CheckoutLineItemEdge',
		kind: 'OBJECT',
		fieldBaseTypes: {
			cursor: 'String',
			node: 'CheckoutLineItem'
		},
		implementsNode: !1
	}, cd.types.CheckoutLineItem = {
		name: 'CheckoutLineItem',
		kind: 'OBJECT',
		fieldBaseTypes: {
			customAttributes: 'Attribute',
			discountAllocations: 'DiscountAllocation',
			id: 'ID',
			quantity: 'Int',
			title: 'String',
			variant: 'ProductVariant'
		},
		implementsNode: !0
	}, cd.types.ShippingRate = {
		name: 'ShippingRate',
		kind: 'OBJECT',
		fieldBaseTypes: {
			handle: 'String',
			price: 'Money',
			title: 'String'
		},
		implementsNode: !1
	}, cd.types.Shop = {
		name: 'Shop',
		kind: 'OBJECT',
		fieldBaseTypes: {
			collectionByHandle: 'Collection',
			collections: 'CollectionConnection',
			currencyCode: 'CurrencyCode',
			description: 'String',
			moneyFormat: 'String',
			name: 'String',
			primaryDomain: 'Domain',
			privacyPolicy: 'ShopPolicy',
			productByHandle: 'Product',
			products: 'ProductConnection',
			refundPolicy: 'ShopPolicy',
			termsOfService: 'ShopPolicy'
		},
		implementsNode: !1
	}, cd.types.Domain = {
		name: 'Domain',
		kind: 'OBJECT',
		fieldBaseTypes: {
			host: 'String',
			sslEnabled: 'Boolean',
			url: 'URL'
		},
		implementsNode: !1
	}, cd.types.ShopPolicy = {
		name: 'ShopPolicy',
		kind: 'OBJECT',
		fieldBaseTypes: {
			body: 'String',
			id: 'ID',
			title: 'String',
			url: 'URL'
		},
		implementsNode: !0
	}, cd.types.Mutation = {
		name: 'Mutation',
		kind: 'OBJECT',
		fieldBaseTypes: {
			checkoutAttributesUpdateV2: 'CheckoutAttributesUpdateV2Payload',
			checkoutCreate: 'CheckoutCreatePayload',
			checkoutDiscountCodeApplyV2: 'CheckoutDiscountCodeApplyV2Payload',
			checkoutDiscountCodeRemove: 'CheckoutDiscountCodeRemovePayload',
			checkoutEmailUpdateV2: 'CheckoutEmailUpdateV2Payload',
			checkoutLineItemsAdd: 'CheckoutLineItemsAddPayload',
			checkoutLineItemsRemove: 'CheckoutLineItemsRemovePayload',
			checkoutLineItemsUpdate: 'CheckoutLineItemsUpdatePayload'
		},
		implementsNode: !1,
		relayInputObjectBaseTypes: {
			checkoutAttributesUpdate: 'CheckoutAttributesUpdateInput',
			checkoutAttributesUpdateV2: 'CheckoutAttributesUpdateV2Input',
			checkoutCreate: 'CheckoutCreateInput',
			customerAccessTokenCreate: 'CustomerAccessTokenCreateInput',
			customerActivate: 'CustomerActivateInput',
			customerCreate: 'CustomerCreateInput',
			customerReset: 'CustomerResetInput'
		}
	}, cd.types.UserError = {
		name: 'UserError',
		kind: 'OBJECT',
		fieldBaseTypes: {
			field: 'String',
			message: 'String'
		},
		implementsNode: !1
	}, cd.types.CheckoutAttributesUpdateV2Payload = {
		name: 'CheckoutAttributesUpdateV2Payload',
		kind: 'OBJECT',
		fieldBaseTypes: {
			checkout: 'Checkout',
			userErrors: 'UserError'
		},
		implementsNode: !1
	}, cd.types.CheckoutDiscountCodeApplyV2Payload = {
		name: 'CheckoutDiscountCodeApplyV2Payload',
		kind: 'OBJECT',
		fieldBaseTypes: {
			checkout: 'Checkout',
			userErrors: 'UserError'
		},
		implementsNode: !1
	}, cd.types.CheckoutCreatePayload = {
		name: 'CheckoutCreatePayload',
		kind: 'OBJECT',
		fieldBaseTypes: {
			checkout: 'Checkout',
			userErrors: 'UserError'
		},
		implementsNode: !1
	}, cd.types.CheckoutEmailUpdateV2Payload = {
		name: 'CheckoutEmailUpdateV2Payload',
		kind: 'OBJECT',
		fieldBaseTypes: {
			checkout: 'Checkout',
			userErrors: 'UserError'
		},
		implementsNode: !1
	}, cd.types.CheckoutDiscountCodeRemovePayload = {
		name: 'CheckoutDiscountCodeRemovePayload',
		kind: 'OBJECT',
		fieldBaseTypes: {
			checkout: 'Checkout',
			userErrors: 'UserError'
		},
		implementsNode: !1
	}, cd.types.CheckoutLineItemsAddPayload = {
		name: 'CheckoutLineItemsAddPayload',
		kind: 'OBJECT',
		fieldBaseTypes: {
			checkout: 'Checkout',
			userErrors: 'UserError'
		},
		implementsNode: !1
	}, cd.types.CheckoutLineItemsRemovePayload = {
		name: 'CheckoutLineItemsRemovePayload',
		kind: 'OBJECT',
		fieldBaseTypes: {
			checkout: 'Checkout',
			userErrors: 'UserError'
		},
		implementsNode: !1
	}, cd.types.CheckoutLineItemsUpdatePayload = {
		name: 'CheckoutLineItemsUpdatePayload',
		kind: 'OBJECT',
		fieldBaseTypes: {
			checkout: 'Checkout',
			userErrors: 'UserError'
		},
		implementsNode: !1
	}, cd.types.DiscountCodeApplication = {
		name: 'DiscountCodeApplication',
		kind: 'OBJECT',
		fieldBaseTypes: {
			applicable: 'Boolean',
			code: 'String'
		},
		implementsNode: !1
	}, cd.types.ManualDiscountApplication = {
		name: 'ManualDiscountApplication',
		kind: 'OBJECT',
		fieldBaseTypes: {
			description: 'String',
			title: 'String'
		},
		implementsNode: !1
	}, cd.types.ScriptDiscountApplication = {
		name: 'ScriptDiscountApplication',
		kind: 'OBJECT',
		fieldBaseTypes: {
			description: 'String'
		},
		implementsNode: !1
	}, cd.queryType = 'QueryRoot', cd.mutationType = 'Mutation', cd.subscriptionType = null;
	var pd = he(cd),
		ud = function() {
			function e(d) {
				var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Ze,
					t = arguments[2];
				Fe(this, e);
				var n = 'https://' + d.domain + '/api/graphql',
					i = {
						"X-SDK-Variant": 'javascript',
						"X-SDK-Version": '1.11.0',
						"X-Shopify-Storefront-Access-Token": d.storefrontAccessToken
					};
				t ? (i['Content-Type'] = 'application/json', i.Accept = 'application/json', this.graphQLClient = new a(pd, {
					fetcher: function(e) {
						return t(n, {
							body: JSON.stringify(e),
							method: 'POST',
							mode: 'cors',
							headers: i
						}).then(function(e) {
							return e.json()
						})
					}
				})) : this.graphQLClient = new a(pd, {
					url: n,
					fetcherOptions: {
						headers: i
					}
				}), this.product = new nd(this.graphQLClient), this.collection = new id(this.graphQLClient), this.shop = new rd(this.graphQLClient), this.checkout = new od(this.graphQLClient), this.image = new ld(this.graphQLClient)
			}
			return Pe(e, null, [{
				key: 'buildClient',
				value: function(d, a) {
					var t = new ed(d),
						n = new e(t, Ze, a);
					return n.config = t, n
				}
			}]), Pe(e, [{
				key: 'fetchNextPage',
				value: function(e) {
					return this.graphQLClient.fetchNextPage(e)
				}
			}]), e
		}();
	return ud
});