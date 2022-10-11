parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    wM96: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.NAMED_TAG = 'named'),
          (exports.NAME_TAG = 'name'),
          (exports.UNMANAGED_TAG = 'unmanaged'),
          (exports.OPTIONAL_TAG = 'optional'),
          (exports.INJECT_TAG = 'inject'),
          (exports.MULTI_INJECT_TAG = 'multi_inject'),
          (exports.TAGGED = 'inversify:tagged'),
          (exports.TAGGED_PROP = 'inversify:tagged_props'),
          (exports.PARAM_TYPES = 'inversify:paramtypes'),
          (exports.DESIGN_PARAM_TYPES = 'design:paramtypes'),
          (exports.POST_CONSTRUCT = 'post_construct');
      },
      {},
    ],
    KPLa: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = {
          Request: 'Request',
          Singleton: 'Singleton',
          Transient: 'Transient',
        };
        exports.BindingScopeEnum = e;
        var n = {
          ConstantValue: 'ConstantValue',
          Constructor: 'Constructor',
          DynamicValue: 'DynamicValue',
          Factory: 'Factory',
          Function: 'Function',
          Instance: 'Instance',
          Invalid: 'Invalid',
          Provider: 'Provider',
        };
        exports.BindingTypeEnum = n;
        var t = {
          ClassProperty: 'ClassProperty',
          ConstructorArgument: 'ConstructorArgument',
          Variable: 'Variable',
        };
        exports.TargetTypeEnum = t;
      },
      {},
    ],
    ePY8: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = 0;
        function r() {
          return e++;
        }
        exports.id = r;
      },
      {},
    ],
    gbv5: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var t = require('../constants/literal_types'),
          i = require('../utils/id'),
          e = (function () {
            function e(e, n) {
              (this.id = i.id()),
                (this.activated = !1),
                (this.serviceIdentifier = e),
                (this.scope = n),
                (this.type = t.BindingTypeEnum.Invalid),
                (this.constraint = function (t) {
                  return !0;
                }),
                (this.implementationType = null),
                (this.cache = null),
                (this.factory = null),
                (this.provider = null),
                (this.onActivation = null),
                (this.dynamicValue = null);
            }
            return (
              (e.prototype.clone = function () {
                var t = new e(this.serviceIdentifier, this.scope);
                return (
                  (t.activated = !1),
                  (t.implementationType = this.implementationType),
                  (t.dynamicValue = this.dynamicValue),
                  (t.scope = this.scope),
                  (t.type = this.type),
                  (t.factory = this.factory),
                  (t.provider = this.provider),
                  (t.constraint = this.constraint),
                  (t.onActivation = this.onActivation),
                  (t.cache = this.cache),
                  t
                );
              }),
              e
            );
          })();
        exports.Binding = e;
      },
      { '../constants/literal_types': 'KPLa', '../utils/id': 'ePY8' },
    ],
    ozdg: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.DUPLICATED_INJECTABLE_DECORATOR =
            'Cannot apply @injectable decorator multiple times.'),
          (exports.DUPLICATED_METADATA =
            'Metadata key was used more than once in a parameter:'),
          (exports.NULL_ARGUMENT = 'NULL argument'),
          (exports.KEY_NOT_FOUND = 'Key Not Found'),
          (exports.AMBIGUOUS_MATCH =
            'Ambiguous match found for serviceIdentifier:'),
          (exports.CANNOT_UNBIND = 'Could not unbind serviceIdentifier:'),
          (exports.NOT_REGISTERED =
            'No matching bindings found for serviceIdentifier:'),
          (exports.MISSING_INJECTABLE_ANNOTATION =
            'Missing required @injectable annotation in:'),
          (exports.MISSING_INJECT_ANNOTATION =
            'Missing required @inject or @multiInject annotation in:'),
          (exports.UNDEFINED_INJECT_ANNOTATION = function (e) {
            return (
              '@inject called with undefined this could mean that the class ' +
              e +
              ' has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation.'
            );
          }),
          (exports.CIRCULAR_DEPENDENCY = 'Circular dependency found:'),
          (exports.NOT_IMPLEMENTED =
            'Sorry, this feature is not fully implemented yet.'),
          (exports.INVALID_BINDING_TYPE = 'Invalid binding type:'),
          (exports.NO_MORE_SNAPSHOTS_AVAILABLE =
            'No snapshot available to restore.'),
          (exports.INVALID_MIDDLEWARE_RETURN =
            'Invalid return type in middleware. Middleware must return!'),
          (exports.INVALID_FUNCTION_BINDING =
            'Value provided to function binding must be a function!'),
          (exports.INVALID_TO_SELF_VALUE =
            'The toSelf function can only be applied when a constructor is used as service identifier'),
          (exports.INVALID_DECORATOR_OPERATION =
            'The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.'),
          (exports.ARGUMENTS_LENGTH_MISMATCH = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return (
              'The number of constructor arguments in the derived class ' +
              e[0] +
              ' must be >= than the number of constructor arguments of its base class.'
            );
          }),
          (exports.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT =
            'Invalid Container constructor argument. Container options must be an object.'),
          (exports.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE =
            "Invalid Container option. Default scope must be a string ('singleton' or 'transient')."),
          (exports.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE =
            'Invalid Container option. Auto bind injectable must be a boolean'),
          (exports.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK =
            'Invalid Container option. Skip base check must be a boolean'),
          (exports.MULTIPLE_POST_CONSTRUCT_METHODS =
            'Cannot apply @postConstruct decorator multiple times in the same class'),
          (exports.POST_CONSTRUCT_ERROR = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return '@postConstruct error in class ' + e[0] + ': ' + e[1];
          }),
          (exports.CIRCULAR_DEPENDENCY_IN_FACTORY = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return (
              "It looks like there is a circular dependency in one of the '" +
              e[0] +
              "' bindings. Please investigate bindings withservice identifier '" +
              e[1] +
              "'."
            );
          }),
          (exports.STACK_OVERFLOW = 'Maximum call stack size exceeded');
      },
      {},
    ],
    cGpo: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('../constants/metadata_keys'),
          t = (function () {
            function t() {}
            return (
              (t.prototype.getConstructorMetadata = function (t) {
                return {
                  compilerGeneratedMetadata: Reflect.getMetadata(
                    e.PARAM_TYPES,
                    t,
                  ),
                  userGeneratedMetadata: Reflect.getMetadata(e.TAGGED, t) || {},
                };
              }),
              (t.prototype.getPropertiesMetadata = function (t) {
                return Reflect.getMetadata(e.TAGGED_PROP, t) || [];
              }),
              t
            );
          })();
        exports.MetadataReader = t;
      },
      { '../constants/metadata_keys': 'wM96' },
    ],
    AyTk: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = {
          MultipleBindingsAvailable: 2,
          NoBindingsAvailable: 0,
          OnlyOneBindingAvailable: 1,
        };
        exports.BindingCount = e;
      },
      {},
    ],
    zg9t: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('../constants/error_msgs');
        function r(r) {
          return r instanceof RangeError || r.message === e.STACK_OVERFLOW;
        }
        exports.isStackOverflowExeption = r;
      },
      { '../constants/error_msgs': 'ozdg' },
    ],
    XWMX: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('../constants/error_msgs');
        function t(e) {
          return 'function' == typeof e
            ? e.name
            : 'symbol' == typeof e
            ? e.toString()
            : e;
        }
        function n(e, t, n) {
          var r = '',
            i = n(e, t);
          return (
            0 !== i.length &&
              ((r = '\nRegistered bindings:'),
              i.forEach(function (e) {
                var t = 'Object';
                null !== e.implementationType && (t = a(e.implementationType)),
                  (r = r + '\n ' + t),
                  e.constraint.metaData &&
                    (r = r + ' - ' + e.constraint.metaData);
              })),
            r
          );
        }
        function r(e, t) {
          return (
            null !== e.parentRequest &&
            (e.parentRequest.serviceIdentifier === t || r(e.parentRequest, t))
          );
        }
        function i(e) {
          return (function e(n, r) {
            void 0 === r && (r = []);
            var i = t(n.serviceIdentifier);
            return (
              r.push(i), null !== n.parentRequest ? e(n.parentRequest, r) : r
            );
          })(e)
            .reverse()
            .join(' --\x3e ');
        }
        function o(t) {
          t.childRequests.forEach(function (t) {
            if (r(t, t.serviceIdentifier)) {
              var n = i(t);
              throw new Error(e.CIRCULAR_DEPENDENCY + ' ' + n);
            }
            o(t);
          });
        }
        function u(e, t) {
          if (t.isTagged() || t.isNamed()) {
            var n = '',
              r = t.getNamedTag(),
              i = t.getCustomTags();
            return (
              null !== r && (n += r.toString() + '\n'),
              null !== i &&
                i.forEach(function (e) {
                  n += e.toString() + '\n';
                }),
              ' ' + e + '\n ' + e + ' - ' + n
            );
          }
          return ' ' + e;
        }
        function a(e) {
          if (e.name) return e.name;
          var t = e.toString(),
            n = t.match(/^function\s*([^\s(]+)/);
          return n ? n[1] : 'Anonymous function: ' + t;
        }
        (exports.getServiceIdentifierAsString = t),
          (exports.listRegisteredBindingsForServiceIdentifier = n),
          (exports.circularDependencyToException = o),
          (exports.listMetadataForTarget = u),
          (exports.getFunctionName = a);
      },
      { '../constants/error_msgs': 'ozdg' },
    ],
    M0Da: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var t = require('../utils/id'),
          e = (function () {
            function e(e) {
              (this.id = t.id()), (this.container = e);
            }
            return (
              (e.prototype.addPlan = function (t) {
                this.plan = t;
              }),
              (e.prototype.setCurrentRequest = function (t) {
                this.currentRequest = t;
              }),
              e
            );
          })();
        exports.Context = e;
      },
      { '../utils/id': 'ePY8' },
    ],
    DalN: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var t = require('../constants/metadata_keys'),
          e = (function () {
            function e(t, e) {
              (this.key = t), (this.value = e);
            }
            return (
              (e.prototype.toString = function () {
                return this.key === t.NAMED_TAG
                  ? 'named: ' + this.value.toString() + ' '
                  : 'tagged: { key:' +
                      this.key.toString() +
                      ', value: ' +
                      this.value +
                      ' }';
              }),
              e
            );
          })();
        exports.Metadata = e;
      },
      { '../constants/metadata_keys': 'wM96' },
    ],
    yLDP: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var t = (function () {
          return function (t, e) {
            (this.parentContext = t), (this.rootRequest = e);
          };
        })();
        exports.Plan = t;
      },
      {},
    ],
    BUfm: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('../constants/error_msgs'),
          t = require('../constants/metadata_keys');
        function r(e, r, o, a) {
          n(t.TAGGED, e, r, a, o);
        }
        function o(e, r, o) {
          n(t.TAGGED_PROP, e.constructor, r, o);
        }
        function n(t, r, o, n, a) {
          var c = {},
            f = 'number' == typeof a,
            i = void 0 !== a && f ? a.toString() : o;
          if (f && void 0 !== o) throw new Error(e.INVALID_DECORATOR_OPERATION);
          Reflect.hasOwnMetadata(t, r) && (c = Reflect.getMetadata(t, r));
          var s = c[i];
          if (Array.isArray(s))
            for (var u = 0, d = s; u < d.length; u++) {
              var y = d[u];
              if (y.key === n.key)
                throw new Error(e.DUPLICATED_METADATA + ' ' + y.key.toString());
            }
          else s = [];
          s.push(n), (c[i] = s), Reflect.defineMetadata(t, c, r);
        }
        function a(e, t) {
          Reflect.decorate(e, t);
        }
        function c(e, t) {
          return function (r, o) {
            t(r, o, e);
          };
        }
        function f(e, t, r) {
          'number' == typeof r
            ? a([c(r, e)], t)
            : 'string' == typeof r
            ? Reflect.decorate([e], t, r)
            : a([e], t);
        }
        (exports.tagParameter = r),
          (exports.tagProperty = o),
          (exports.decorate = f);
      },
      {
        '../constants/error_msgs': 'ozdg',
        '../constants/metadata_keys': 'wM96',
      },
    ],
    lnlY: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('../constants/error_msgs'),
          r = require('../constants/metadata_keys'),
          t = require('../planning/metadata'),
          n = require('./decorator_utils'),
          a = (function () {
            function e(e) {
              this._cb = e;
            }
            return (
              (e.prototype.unwrap = function () {
                return this._cb();
              }),
              e
            );
          })();
        function o(a) {
          return function (o, i, u) {
            if (void 0 === a)
              throw new Error(e.UNDEFINED_INJECT_ANNOTATION(o.name));
            var s = new t.Metadata(r.INJECT_TAG, a);
            'number' == typeof u
              ? n.tagParameter(o, i, u, s)
              : n.tagProperty(o, i, s);
          };
        }
        (exports.LazyServiceIdentifer = a), (exports.inject = o);
      },
      {
        '../constants/error_msgs': 'ozdg',
        '../constants/metadata_keys': 'wM96',
        '../planning/metadata': 'DalN',
        './decorator_utils': 'BUfm',
      },
    ],
    Uls2: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var t = (function () {
          function t(t) {
            this.str = t;
          }
          return (
            (t.prototype.startsWith = function (t) {
              return 0 === this.str.indexOf(t);
            }),
            (t.prototype.endsWith = function (t) {
              var r,
                e = t.split('').reverse().join('');
              return (
                (r = this.str.split('').reverse().join('')),
                this.startsWith.call({ str: r }, e)
              );
            }),
            (t.prototype.contains = function (t) {
              return -1 !== this.str.indexOf(t);
            }),
            (t.prototype.equals = function (t) {
              return this.str === t;
            }),
            (t.prototype.value = function () {
              return this.str;
            }),
            t
          );
        })();
        exports.QueryableString = t;
      },
      {},
    ],
    Kc9B: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var t = require('../constants/metadata_keys'),
          e = require('../utils/id'),
          r = require('./metadata'),
          a = require('./queryable_string'),
          n = (function () {
            function n(n, i, s, u) {
              (this.id = e.id()),
                (this.type = n),
                (this.serviceIdentifier = s),
                (this.name = new a.QueryableString(i || '')),
                (this.metadata = new Array());
              var o = null;
              'string' == typeof u
                ? (o = new r.Metadata(t.NAMED_TAG, u))
                : u instanceof r.Metadata && (o = u),
                null !== o && this.metadata.push(o);
            }
            return (
              (n.prototype.hasTag = function (t) {
                for (var e = 0, r = this.metadata; e < r.length; e++) {
                  if (r[e].key === t) return !0;
                }
                return !1;
              }),
              (n.prototype.isArray = function () {
                return this.hasTag(t.MULTI_INJECT_TAG);
              }),
              (n.prototype.matchesArray = function (e) {
                return this.matchesTag(t.MULTI_INJECT_TAG)(e);
              }),
              (n.prototype.isNamed = function () {
                return this.hasTag(t.NAMED_TAG);
              }),
              (n.prototype.isTagged = function () {
                return this.metadata.some(function (e) {
                  return (
                    e.key !== t.INJECT_TAG &&
                    e.key !== t.MULTI_INJECT_TAG &&
                    e.key !== t.NAME_TAG &&
                    e.key !== t.UNMANAGED_TAG &&
                    e.key !== t.NAMED_TAG
                  );
                });
              }),
              (n.prototype.isOptional = function () {
                return this.matchesTag(t.OPTIONAL_TAG)(!0);
              }),
              (n.prototype.getNamedTag = function () {
                return this.isNamed()
                  ? this.metadata.filter(function (e) {
                      return e.key === t.NAMED_TAG;
                    })[0]
                  : null;
              }),
              (n.prototype.getCustomTags = function () {
                return this.isTagged()
                  ? this.metadata.filter(function (e) {
                      return (
                        e.key !== t.INJECT_TAG &&
                        e.key !== t.MULTI_INJECT_TAG &&
                        e.key !== t.NAME_TAG &&
                        e.key !== t.UNMANAGED_TAG &&
                        e.key !== t.NAMED_TAG
                      );
                    })
                  : null;
              }),
              (n.prototype.matchesNamedTag = function (e) {
                return this.matchesTag(t.NAMED_TAG)(e);
              }),
              (n.prototype.matchesTag = function (t) {
                var e = this;
                return function (r) {
                  for (var a = 0, n = e.metadata; a < n.length; a++) {
                    var i = n[a];
                    if (i.key === t && i.value === r) return !0;
                  }
                  return !1;
                };
              }),
              n
            );
          })();
        exports.Target = n;
      },
      {
        '../constants/metadata_keys': 'wM96',
        '../utils/id': 'ePY8',
        './metadata': 'DalN',
        './queryable_string': 'Uls2',
      },
    ],
    W8Q8: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var t = require('../annotation/inject'),
          e = require('../constants/error_msgs'),
          r = require('../constants/literal_types'),
          n = require('../constants/metadata_keys'),
          a = require('../utils/serialization');
        exports.getFunctionName = a.getFunctionName;
        var o = require('./target');
        function u(t, e) {
          return c(t, a.getFunctionName(e), e, !1);
        }
        function c(t, r, n, a) {
          var o = t.getConstructorMetadata(n),
            u = o.compilerGeneratedMetadata;
          if (void 0 === u) {
            var c = e.MISSING_INJECTABLE_ANNOTATION + ' ' + r + '.';
            throw new Error(c);
          }
          var i = o.userGeneratedMetadata,
            l = Object.keys(i),
            p = s(
              a,
              r,
              u,
              i,
              0 === n.length && l.length > 0 ? l.length : n.length,
            ),
            f = g(t, n);
          return p.concat(f);
        }
        function i(n, a, u, c, i) {
          var s = i[n.toString()] || [],
            g = p(s),
            l = !0 !== g.unmanaged,
            f = c[n],
            N = g.inject || g.multiInject;
          if (
            ((f = N || f) instanceof t.LazyServiceIdentifer && (f = f.unwrap()),
            l)
          ) {
            var m = f === Object,
              v = f === Function;
            if (!a && (m || v || void 0 === f)) {
              var T =
                e.MISSING_INJECT_ANNOTATION +
                ' argument ' +
                n +
                ' in class ' +
                u +
                '.';
              throw new Error(T);
            }
            var d = new o.Target(
              r.TargetTypeEnum.ConstructorArgument,
              g.targetName,
              f,
            );
            return (d.metadata = s), d;
          }
          return null;
        }
        function s(t, e, r, n, a) {
          for (var o = [], u = 0; u < a; u++) {
            var c = i(u, t, e, r, n);
            null !== c && o.push(c);
          }
          return o;
        }
        function g(t, e) {
          for (
            var n = t.getPropertiesMetadata(e),
              a = [],
              u = 0,
              c = Object.keys(n);
            u < c.length;
            u++
          ) {
            var i = c[u],
              s = n[i],
              l = p(n[i]),
              f = l.targetName || i,
              N = l.inject || l.multiInject,
              m = new o.Target(r.TargetTypeEnum.ClassProperty, f, N);
            (m.metadata = s), a.push(m);
          }
          var v = Object.getPrototypeOf(e.prototype).constructor;
          if (v !== Object) {
            var T = g(t, v);
            a = a.concat(T);
          }
          return a;
        }
        function l(t, e) {
          var r = Object.getPrototypeOf(e.prototype).constructor;
          if (r !== Object) {
            var o = c(t, a.getFunctionName(r), r, !0),
              u = o.map(function (t) {
                return t.metadata.filter(function (t) {
                  return t.key === n.UNMANAGED_TAG;
                });
              }),
              i = [].concat.apply([], u).length,
              s = o.length - i;
            return s > 0 ? s : l(t, r);
          }
          return 0;
        }
        function p(t) {
          var e = {};
          return (
            t.forEach(function (t) {
              e[t.key.toString()] = t.value;
            }),
            {
              inject: e[n.INJECT_TAG],
              multiInject: e[n.MULTI_INJECT_TAG],
              targetName: e[n.NAME_TAG],
              unmanaged: e[n.UNMANAGED_TAG],
            }
          );
        }
        (exports.getDependencies = u),
          (exports.getBaseClassDependencyCount = l);
      },
      {
        '../annotation/inject': 'lnlY',
        '../constants/error_msgs': 'ozdg',
        '../constants/literal_types': 'KPLa',
        '../constants/metadata_keys': 'wM96',
        '../utils/serialization': 'XWMX',
        './target': 'Kc9B',
      },
    ],
    aXtn: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var t = require('../utils/id'),
          e = (function () {
            function e(e, i, s, r, n) {
              (this.id = t.id()),
                (this.serviceIdentifier = e),
                (this.parentContext = i),
                (this.parentRequest = s),
                (this.target = n),
                (this.childRequests = []),
                (this.bindings = Array.isArray(r) ? r : [r]),
                (this.requestScope = null === s ? new Map() : null);
            }
            return (
              (e.prototype.addChildRequest = function (t, i, s) {
                var r = new e(t, this.parentContext, this, i, s);
                return this.childRequests.push(r), r;
              }),
              e
            );
          })();
        exports.Request = e;
      },
      { '../utils/id': 'ePY8' },
    ],
    RiEO: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('../bindings/binding_count'),
          n = require('../constants/error_msgs'),
          i = require('../constants/literal_types'),
          t = require('../constants/metadata_keys'),
          r = require('../utils/exceptions'),
          a = require('../utils/serialization'),
          o = require('./context'),
          s = require('./metadata'),
          u = require('./plan'),
          c = require('./reflection_utils'),
          l = require('./request'),
          d = require('./target');
        function f(e) {
          return e._bindingDictionary;
        }
        function p(e, n, i, r, a, o) {
          var u = e ? t.MULTI_INJECT_TAG : t.INJECT_TAG,
            c = new s.Metadata(u, i),
            l = new d.Target(n, r, i, c);
          if (void 0 !== a) {
            var f = new s.Metadata(a, o);
            l.metadata.push(f);
          }
          return l;
        }
        function v(n, i, t, r, a) {
          var o = T(t.container, a.serviceIdentifier),
            s = [];
          return (
            o.length === e.BindingCount.NoBindingsAvailable &&
              t.container.options.autoBindInjectable &&
              'function' == typeof a.serviceIdentifier &&
              n.getConstructorMetadata(a.serviceIdentifier)
                .compilerGeneratedMetadata &&
              (t.container.bind(a.serviceIdentifier).toSelf(),
              (o = T(t.container, a.serviceIdentifier))),
            (s = i
              ? o
              : o.filter(function (e) {
                  var n = new l.Request(e.serviceIdentifier, t, r, e, a);
                  return e.constraint(n);
                })),
            g(a.serviceIdentifier, s, a, t.container),
            s
          );
        }
        function g(i, t, r, o) {
          switch (t.length) {
            case e.BindingCount.NoBindingsAvailable:
              if (r.isOptional()) return t;
              var s = a.getServiceIdentifierAsString(i),
                u = n.NOT_REGISTERED;
              throw (
                ((u += a.listMetadataForTarget(s, r)),
                (u += a.listRegisteredBindingsForServiceIdentifier(o, s, T)),
                new Error(u))
              );
            case e.BindingCount.OnlyOneBindingAvailable:
              if (!r.isArray()) return t;
            case e.BindingCount.MultipleBindingsAvailable:
            default:
              if (r.isArray()) return t;
              (s = a.getServiceIdentifierAsString(i)),
                (u = n.AMBIGUOUS_MATCH + ' ' + s);
              throw (
                ((u += a.listRegisteredBindingsForServiceIdentifier(o, s, T)),
                new Error(u))
              );
          }
        }
        function I(e, t, r, a, o, s) {
          var d, f;
          if (null === o) {
            (d = v(e, t, a, null, s)), (f = new l.Request(r, a, null, d, s));
            var p = new u.Plan(a, f);
            a.addPlan(p);
          } else
            (d = v(e, t, a, o, s)),
              (f = o.addChildRequest(s.serviceIdentifier, d, s));
          d.forEach(function (t) {
            var r = null;
            if (s.isArray()) r = f.addChildRequest(t.serviceIdentifier, t, s);
            else {
              if (t.cache) return;
              r = f;
            }
            if (
              t.type === i.BindingTypeEnum.Instance &&
              null !== t.implementationType
            ) {
              var o = c.getDependencies(e, t.implementationType);
              if (!a.container.options.skipBaseClassChecks) {
                var u = c.getBaseClassDependencyCount(e, t.implementationType);
                if (o.length < u) {
                  var l = n.ARGUMENTS_LENGTH_MISMATCH(
                    c.getFunctionName(t.implementationType),
                  );
                  throw new Error(l);
                }
              }
              o.forEach(function (n) {
                I(e, !1, n.serviceIdentifier, a, r, n);
              });
            }
          });
        }
        function T(e, n) {
          var i = [],
            t = f(e);
          return (
            t.hasKey(n)
              ? (i = t.get(n))
              : null !== e.parent && (i = T(e.parent, n)),
            i
          );
        }
        function y(e, n, i, t, s, u, c, l) {
          void 0 === l && (l = !1);
          var d = new o.Context(n),
            f = p(i, t, s, '', u, c);
          try {
            return I(e, l, s, d, null, f), d;
          } catch (v) {
            throw (
              (r.isStackOverflowExeption(v) &&
                d.plan &&
                a.circularDependencyToException(d.plan.rootRequest),
              v)
            );
          }
        }
        function q(e, n, t, r) {
          var a = new d.Target(
              i.TargetTypeEnum.Variable,
              '',
              n,
              new s.Metadata(t, r),
            ),
            u = new o.Context(e);
          return new l.Request(n, u, null, [], a);
        }
        (exports.getBindingDictionary = f),
          (exports.plan = y),
          (exports.createMockRequest = q);
      },
      {
        '../bindings/binding_count': 'AyTk',
        '../constants/error_msgs': 'ozdg',
        '../constants/literal_types': 'KPLa',
        '../constants/metadata_keys': 'wM96',
        '../utils/exceptions': 'zg9t',
        '../utils/serialization': 'XWMX',
        './context': 'M0Da',
        './metadata': 'DalN',
        './plan': 'yLDP',
        './reflection_utils': 'W8Q8',
        './request': 'aXtn',
        './target': 'Kc9B',
      },
    ],
    Ga1m: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('../constants/error_msgs'),
          t = require('../constants/literal_types'),
          r = require('../constants/metadata_keys');
        function n(e, r, n) {
          var a = r.filter(function (e) {
              return (
                null !== e.target &&
                e.target.type === t.TargetTypeEnum.ClassProperty
              );
            }),
            u = a.map(n);
          return (
            a.forEach(function (t, r) {
              var n;
              n = t.target.name.value();
              var a = u[r];
              e[n] = a;
            }),
            e
          );
        }
        function a(e, t) {
          return new (e.bind.apply(e, [void 0].concat(t)))();
        }
        function u(t, n) {
          if (Reflect.hasMetadata(r.POST_CONSTRUCT, t)) {
            var a = Reflect.getMetadata(r.POST_CONSTRUCT, t);
            try {
              n[a.value]();
            } catch (u) {
              throw new Error(e.POST_CONSTRUCT_ERROR(t.name, u.message));
            }
          }
        }
        function o(e, r, o) {
          var s = null;
          r.length > 0
            ? (s = n(
                (s = a(
                  e,
                  r
                    .filter(function (e) {
                      return (
                        null !== e.target &&
                        e.target.type === t.TargetTypeEnum.ConstructorArgument
                      );
                    })
                    .map(o),
                )),
                r,
                o,
              ))
            : (s = new e());
          return u(e, s), s;
        }
        exports.resolveInstance = o;
      },
      {
        '../constants/error_msgs': 'ozdg',
        '../constants/literal_types': 'KPLa',
        '../constants/metadata_keys': 'wM96',
      },
    ],
    oJLS: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('../constants/error_msgs'),
          t = require('../constants/literal_types'),
          n = require('../utils/exceptions'),
          r = require('../utils/serialization'),
          i = require('./instantiation'),
          a = function (t, r, i) {
            try {
              return i();
            } catch (a) {
              throw n.isStackOverflowExeption(a)
                ? new Error(e.CIRCULAR_DEPENDENCY_IN_FACTORY(t, r.toString()))
                : a;
            }
          },
          o = function (n) {
            return function (u) {
              u.parentContext.setCurrentRequest(u);
              var s = u.bindings,
                c = u.childRequests,
                p = u.target && u.target.isArray(),
                l = !(
                  u.parentRequest &&
                  u.parentRequest.target &&
                  u.target &&
                  u.parentRequest.target.matchesArray(
                    u.target.serviceIdentifier,
                  )
                );
              if (p && l)
                return c.map(function (e) {
                  return o(n)(e);
                });
              var d = null;
              if (!u.target.isOptional() || 0 !== s.length) {
                var f = s[0],
                  y = f.scope === t.BindingScopeEnum.Singleton,
                  g = f.scope === t.BindingScopeEnum.Request;
                if (y && f.activated) return f.cache;
                if (g && null !== n && n.has(f.id)) return n.get(f.id);
                if (f.type === t.BindingTypeEnum.ConstantValue) d = f.cache;
                else if (f.type === t.BindingTypeEnum.Function) d = f.cache;
                else if (f.type === t.BindingTypeEnum.Constructor)
                  d = f.implementationType;
                else if (
                  f.type === t.BindingTypeEnum.DynamicValue &&
                  null !== f.dynamicValue
                )
                  d = a('toDynamicValue', f.serviceIdentifier, function () {
                    return f.dynamicValue(u.parentContext);
                  });
                else if (
                  f.type === t.BindingTypeEnum.Factory &&
                  null !== f.factory
                )
                  d = a('toFactory', f.serviceIdentifier, function () {
                    return f.factory(u.parentContext);
                  });
                else if (
                  f.type === t.BindingTypeEnum.Provider &&
                  null !== f.provider
                )
                  d = a('toProvider', f.serviceIdentifier, function () {
                    return f.provider(u.parentContext);
                  });
                else {
                  if (
                    f.type !== t.BindingTypeEnum.Instance ||
                    null === f.implementationType
                  ) {
                    var v = r.getServiceIdentifierAsString(u.serviceIdentifier);
                    throw new Error(e.INVALID_BINDING_TYPE + ' ' + v);
                  }
                  d = i.resolveInstance(f.implementationType, c, o(n));
                }
                return (
                  'function' == typeof f.onActivation &&
                    (d = f.onActivation(u.parentContext, d)),
                  y && ((f.cache = d), (f.activated = !0)),
                  g && null !== n && !n.has(f.id) && n.set(f.id, d),
                  d
                );
              }
            };
          };
        function u(e) {
          return o(e.plan.rootRequest.requestScope)(e.plan.rootRequest);
        }
        exports.resolve = u;
      },
      {
        '../constants/error_msgs': 'ozdg',
        '../constants/literal_types': 'KPLa',
        '../utils/exceptions': 'zg9t',
        '../utils/serialization': 'XWMX',
        './instantiation': 'Ga1m',
      },
    ],
    b0Sz: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var t = require('../constants/metadata_keys'),
          e = require('../planning/metadata'),
          n = function (t, e) {
            var r = t.parentRequest;
            return null !== r && (!!e(r) || n(r, e));
          };
        exports.traverseAncerstors = n;
        var r = function (t) {
          return function (n) {
            var r = function (e) {
              return (
                null !== e && null !== e.target && e.target.matchesTag(t)(n)
              );
            };
            return (r.metaData = new e.Metadata(t, n)), r;
          };
        };
        exports.taggedConstraint = r;
        var a = r(t.NAMED_TAG);
        exports.namedConstraint = a;
        var i = function (t) {
          return function (e) {
            var n = null;
            if (null !== e) {
              if (((n = e.bindings[0]), 'string' == typeof t))
                return n.serviceIdentifier === t;
              var r = e.bindings[0].implementationType;
              return t === r;
            }
            return !1;
          };
        };
        exports.typeConstraint = i;
      },
      { '../constants/metadata_keys': 'wM96', '../planning/metadata': 'DalN' },
    ],
    BHOz: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var n = require('./binding_on_syntax'),
          t = require('./constraint_helpers'),
          i = (function () {
            function i(n) {
              this._binding = n;
            }
            return (
              (i.prototype.when = function (t) {
                return (
                  (this._binding.constraint = t),
                  new n.BindingOnSyntax(this._binding)
                );
              }),
              (i.prototype.whenTargetNamed = function (i) {
                return (
                  (this._binding.constraint = t.namedConstraint(i)),
                  new n.BindingOnSyntax(this._binding)
                );
              }),
              (i.prototype.whenTargetIsDefault = function () {
                return (
                  (this._binding.constraint = function (n) {
                    return (
                      null !== n.target &&
                      !n.target.isNamed() &&
                      !n.target.isTagged()
                    );
                  }),
                  new n.BindingOnSyntax(this._binding)
                );
              }),
              (i.prototype.whenTargetTagged = function (i, e) {
                return (
                  (this._binding.constraint = t.taggedConstraint(i)(e)),
                  new n.BindingOnSyntax(this._binding)
                );
              }),
              (i.prototype.whenInjectedInto = function (i) {
                return (
                  (this._binding.constraint = function (n) {
                    return t.typeConstraint(i)(n.parentRequest);
                  }),
                  new n.BindingOnSyntax(this._binding)
                );
              }),
              (i.prototype.whenParentNamed = function (i) {
                return (
                  (this._binding.constraint = function (n) {
                    return t.namedConstraint(i)(n.parentRequest);
                  }),
                  new n.BindingOnSyntax(this._binding)
                );
              }),
              (i.prototype.whenParentTagged = function (i, e) {
                return (
                  (this._binding.constraint = function (n) {
                    return t.taggedConstraint(i)(e)(n.parentRequest);
                  }),
                  new n.BindingOnSyntax(this._binding)
                );
              }),
              (i.prototype.whenAnyAncestorIs = function (i) {
                return (
                  (this._binding.constraint = function (n) {
                    return t.traverseAncerstors(n, t.typeConstraint(i));
                  }),
                  new n.BindingOnSyntax(this._binding)
                );
              }),
              (i.prototype.whenNoAncestorIs = function (i) {
                return (
                  (this._binding.constraint = function (n) {
                    return !t.traverseAncerstors(n, t.typeConstraint(i));
                  }),
                  new n.BindingOnSyntax(this._binding)
                );
              }),
              (i.prototype.whenAnyAncestorNamed = function (i) {
                return (
                  (this._binding.constraint = function (n) {
                    return t.traverseAncerstors(n, t.namedConstraint(i));
                  }),
                  new n.BindingOnSyntax(this._binding)
                );
              }),
              (i.prototype.whenNoAncestorNamed = function (i) {
                return (
                  (this._binding.constraint = function (n) {
                    return !t.traverseAncerstors(n, t.namedConstraint(i));
                  }),
                  new n.BindingOnSyntax(this._binding)
                );
              }),
              (i.prototype.whenAnyAncestorTagged = function (i, e) {
                return (
                  (this._binding.constraint = function (n) {
                    return t.traverseAncerstors(n, t.taggedConstraint(i)(e));
                  }),
                  new n.BindingOnSyntax(this._binding)
                );
              }),
              (i.prototype.whenNoAncestorTagged = function (i, e) {
                return (
                  (this._binding.constraint = function (n) {
                    return !t.traverseAncerstors(n, t.taggedConstraint(i)(e));
                  }),
                  new n.BindingOnSyntax(this._binding)
                );
              }),
              (i.prototype.whenAnyAncestorMatches = function (i) {
                return (
                  (this._binding.constraint = function (n) {
                    return t.traverseAncerstors(n, i);
                  }),
                  new n.BindingOnSyntax(this._binding)
                );
              }),
              (i.prototype.whenNoAncestorMatches = function (i) {
                return (
                  (this._binding.constraint = function (n) {
                    return !t.traverseAncerstors(n, i);
                  }),
                  new n.BindingOnSyntax(this._binding)
                );
              }),
              i
            );
          })();
        exports.BindingWhenSyntax = i;
      },
      { './binding_on_syntax': 'QyVB', './constraint_helpers': 'b0Sz' },
    ],
    QyVB: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var n = require('./binding_when_syntax'),
          i = (function () {
            function i(n) {
              this._binding = n;
            }
            return (
              (i.prototype.onActivation = function (i) {
                return (
                  (this._binding.onActivation = i),
                  new n.BindingWhenSyntax(this._binding)
                );
              }),
              i
            );
          })();
        exports.BindingOnSyntax = i;
      },
      { './binding_when_syntax': 'BHOz' },
    ],
    OWaV: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var n = require('./binding_on_syntax'),
          t = require('./binding_when_syntax'),
          e = (function () {
            function e(e) {
              (this._binding = e),
                (this._bindingWhenSyntax = new t.BindingWhenSyntax(
                  this._binding,
                )),
                (this._bindingOnSyntax = new n.BindingOnSyntax(this._binding));
            }
            return (
              (e.prototype.when = function (n) {
                return this._bindingWhenSyntax.when(n);
              }),
              (e.prototype.whenTargetNamed = function (n) {
                return this._bindingWhenSyntax.whenTargetNamed(n);
              }),
              (e.prototype.whenTargetIsDefault = function () {
                return this._bindingWhenSyntax.whenTargetIsDefault();
              }),
              (e.prototype.whenTargetTagged = function (n, t) {
                return this._bindingWhenSyntax.whenTargetTagged(n, t);
              }),
              (e.prototype.whenInjectedInto = function (n) {
                return this._bindingWhenSyntax.whenInjectedInto(n);
              }),
              (e.prototype.whenParentNamed = function (n) {
                return this._bindingWhenSyntax.whenParentNamed(n);
              }),
              (e.prototype.whenParentTagged = function (n, t) {
                return this._bindingWhenSyntax.whenParentTagged(n, t);
              }),
              (e.prototype.whenAnyAncestorIs = function (n) {
                return this._bindingWhenSyntax.whenAnyAncestorIs(n);
              }),
              (e.prototype.whenNoAncestorIs = function (n) {
                return this._bindingWhenSyntax.whenNoAncestorIs(n);
              }),
              (e.prototype.whenAnyAncestorNamed = function (n) {
                return this._bindingWhenSyntax.whenAnyAncestorNamed(n);
              }),
              (e.prototype.whenAnyAncestorTagged = function (n, t) {
                return this._bindingWhenSyntax.whenAnyAncestorTagged(n, t);
              }),
              (e.prototype.whenNoAncestorNamed = function (n) {
                return this._bindingWhenSyntax.whenNoAncestorNamed(n);
              }),
              (e.prototype.whenNoAncestorTagged = function (n, t) {
                return this._bindingWhenSyntax.whenNoAncestorTagged(n, t);
              }),
              (e.prototype.whenAnyAncestorMatches = function (n) {
                return this._bindingWhenSyntax.whenAnyAncestorMatches(n);
              }),
              (e.prototype.whenNoAncestorMatches = function (n) {
                return this._bindingWhenSyntax.whenNoAncestorMatches(n);
              }),
              (e.prototype.onActivation = function (n) {
                return this._bindingOnSyntax.onActivation(n);
              }),
              e
            );
          })();
        exports.BindingWhenOnSyntax = e;
      },
      { './binding_on_syntax': 'QyVB', './binding_when_syntax': 'BHOz' },
    ],
    bmDA: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var n = require('../constants/literal_types'),
          i = require('./binding_when_on_syntax'),
          e = (function () {
            function e(n) {
              this._binding = n;
            }
            return (
              (e.prototype.inRequestScope = function () {
                return (
                  (this._binding.scope = n.BindingScopeEnum.Request),
                  new i.BindingWhenOnSyntax(this._binding)
                );
              }),
              (e.prototype.inSingletonScope = function () {
                return (
                  (this._binding.scope = n.BindingScopeEnum.Singleton),
                  new i.BindingWhenOnSyntax(this._binding)
                );
              }),
              (e.prototype.inTransientScope = function () {
                return (
                  (this._binding.scope = n.BindingScopeEnum.Transient),
                  new i.BindingWhenOnSyntax(this._binding)
                );
              }),
              e
            );
          })();
        exports.BindingInSyntax = e;
      },
      {
        '../constants/literal_types': 'KPLa',
        './binding_when_on_syntax': 'OWaV',
      },
    ],
    xSru: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var n = require('./binding_in_syntax'),
          t = require('./binding_on_syntax'),
          e = require('./binding_when_syntax'),
          i = (function () {
            function i(i) {
              (this._binding = i),
                (this._bindingWhenSyntax = new e.BindingWhenSyntax(
                  this._binding,
                )),
                (this._bindingOnSyntax = new t.BindingOnSyntax(this._binding)),
                (this._bindingInSyntax = new n.BindingInSyntax(i));
            }
            return (
              (i.prototype.inRequestScope = function () {
                return this._bindingInSyntax.inRequestScope();
              }),
              (i.prototype.inSingletonScope = function () {
                return this._bindingInSyntax.inSingletonScope();
              }),
              (i.prototype.inTransientScope = function () {
                return this._bindingInSyntax.inTransientScope();
              }),
              (i.prototype.when = function (n) {
                return this._bindingWhenSyntax.when(n);
              }),
              (i.prototype.whenTargetNamed = function (n) {
                return this._bindingWhenSyntax.whenTargetNamed(n);
              }),
              (i.prototype.whenTargetIsDefault = function () {
                return this._bindingWhenSyntax.whenTargetIsDefault();
              }),
              (i.prototype.whenTargetTagged = function (n, t) {
                return this._bindingWhenSyntax.whenTargetTagged(n, t);
              }),
              (i.prototype.whenInjectedInto = function (n) {
                return this._bindingWhenSyntax.whenInjectedInto(n);
              }),
              (i.prototype.whenParentNamed = function (n) {
                return this._bindingWhenSyntax.whenParentNamed(n);
              }),
              (i.prototype.whenParentTagged = function (n, t) {
                return this._bindingWhenSyntax.whenParentTagged(n, t);
              }),
              (i.prototype.whenAnyAncestorIs = function (n) {
                return this._bindingWhenSyntax.whenAnyAncestorIs(n);
              }),
              (i.prototype.whenNoAncestorIs = function (n) {
                return this._bindingWhenSyntax.whenNoAncestorIs(n);
              }),
              (i.prototype.whenAnyAncestorNamed = function (n) {
                return this._bindingWhenSyntax.whenAnyAncestorNamed(n);
              }),
              (i.prototype.whenAnyAncestorTagged = function (n, t) {
                return this._bindingWhenSyntax.whenAnyAncestorTagged(n, t);
              }),
              (i.prototype.whenNoAncestorNamed = function (n) {
                return this._bindingWhenSyntax.whenNoAncestorNamed(n);
              }),
              (i.prototype.whenNoAncestorTagged = function (n, t) {
                return this._bindingWhenSyntax.whenNoAncestorTagged(n, t);
              }),
              (i.prototype.whenAnyAncestorMatches = function (n) {
                return this._bindingWhenSyntax.whenAnyAncestorMatches(n);
              }),
              (i.prototype.whenNoAncestorMatches = function (n) {
                return this._bindingWhenSyntax.whenNoAncestorMatches(n);
              }),
              (i.prototype.onActivation = function (n) {
                return this._bindingOnSyntax.onActivation(n);
              }),
              i
            );
          })();
        exports.BindingInWhenOnSyntax = i;
      },
      {
        './binding_in_syntax': 'bmDA',
        './binding_on_syntax': 'QyVB',
        './binding_when_syntax': 'BHOz',
      },
    ],
    lhQt: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var n = require('../constants/error_msgs'),
          i = require('../constants/literal_types'),
          t = require('./binding_in_when_on_syntax'),
          e = require('./binding_when_on_syntax'),
          o = (function () {
            function o(n) {
              this._binding = n;
            }
            return (
              (o.prototype.to = function (n) {
                return (
                  (this._binding.type = i.BindingTypeEnum.Instance),
                  (this._binding.implementationType = n),
                  new t.BindingInWhenOnSyntax(this._binding)
                );
              }),
              (o.prototype.toSelf = function () {
                if ('function' != typeof this._binding.serviceIdentifier)
                  throw new Error('' + n.INVALID_TO_SELF_VALUE);
                var i = this._binding.serviceIdentifier;
                return this.to(i);
              }),
              (o.prototype.toConstantValue = function (n) {
                return (
                  (this._binding.type = i.BindingTypeEnum.ConstantValue),
                  (this._binding.cache = n),
                  (this._binding.dynamicValue = null),
                  (this._binding.implementationType = null),
                  new e.BindingWhenOnSyntax(this._binding)
                );
              }),
              (o.prototype.toDynamicValue = function (n) {
                return (
                  (this._binding.type = i.BindingTypeEnum.DynamicValue),
                  (this._binding.cache = null),
                  (this._binding.dynamicValue = n),
                  (this._binding.implementationType = null),
                  new t.BindingInWhenOnSyntax(this._binding)
                );
              }),
              (o.prototype.toConstructor = function (n) {
                return (
                  (this._binding.type = i.BindingTypeEnum.Constructor),
                  (this._binding.implementationType = n),
                  new e.BindingWhenOnSyntax(this._binding)
                );
              }),
              (o.prototype.toFactory = function (n) {
                return (
                  (this._binding.type = i.BindingTypeEnum.Factory),
                  (this._binding.factory = n),
                  new e.BindingWhenOnSyntax(this._binding)
                );
              }),
              (o.prototype.toFunction = function (t) {
                if ('function' != typeof t)
                  throw new Error(n.INVALID_FUNCTION_BINDING);
                var e = this.toConstantValue(t);
                return (this._binding.type = i.BindingTypeEnum.Function), e;
              }),
              (o.prototype.toAutoFactory = function (n) {
                return (
                  (this._binding.type = i.BindingTypeEnum.Factory),
                  (this._binding.factory = function (i) {
                    return function () {
                      return i.container.get(n);
                    };
                  }),
                  new e.BindingWhenOnSyntax(this._binding)
                );
              }),
              (o.prototype.toProvider = function (n) {
                return (
                  (this._binding.type = i.BindingTypeEnum.Provider),
                  (this._binding.provider = n),
                  new e.BindingWhenOnSyntax(this._binding)
                );
              }),
              (o.prototype.toService = function (n) {
                this.toDynamicValue(function (i) {
                  return i.container.get(n);
                });
              }),
              o
            );
          })();
        exports.BindingToSyntax = o;
      },
      {
        '../constants/error_msgs': 'ozdg',
        '../constants/literal_types': 'KPLa',
        './binding_in_when_on_syntax': 'xSru',
        './binding_when_on_syntax': 'OWaV',
      },
    ],
    jmiq: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = (function () {
          function e() {}
          return (
            (e.of = function (n, r) {
              var t = new e();
              return (t.bindings = n), (t.middleware = r), t;
            }),
            e
          );
        })();
        exports.ContainerSnapshot = e;
      },
      {},
    ],
    ej4u: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var t = require('../constants/error_msgs'),
          r = (function () {
            function r() {
              this._map = new Map();
            }
            return (
              (r.prototype.getMap = function () {
                return this._map;
              }),
              (r.prototype.add = function (r, o) {
                if (null == r) throw new Error(t.NULL_ARGUMENT);
                if (null == o) throw new Error(t.NULL_ARGUMENT);
                var e = this._map.get(r);
                void 0 !== e
                  ? (e.push(o), this._map.set(r, e))
                  : this._map.set(r, [o]);
              }),
              (r.prototype.get = function (r) {
                if (null == r) throw new Error(t.NULL_ARGUMENT);
                var o = this._map.get(r);
                if (void 0 !== o) return o;
                throw new Error(t.KEY_NOT_FOUND);
              }),
              (r.prototype.remove = function (r) {
                if (null == r) throw new Error(t.NULL_ARGUMENT);
                if (!this._map.delete(r)) throw new Error(t.KEY_NOT_FOUND);
              }),
              (r.prototype.removeByCondition = function (t) {
                var r = this;
                this._map.forEach(function (o, e) {
                  var n = o.filter(function (r) {
                    return !t(r);
                  });
                  n.length > 0 ? r._map.set(e, n) : r._map.delete(e);
                });
              }),
              (r.prototype.hasKey = function (r) {
                if (null == r) throw new Error(t.NULL_ARGUMENT);
                return this._map.has(r);
              }),
              (r.prototype.clone = function () {
                var t = new r();
                return (
                  this._map.forEach(function (r, o) {
                    r.forEach(function (r) {
                      return t.add(o, r.clone());
                    });
                  }),
                  t
                );
              }),
              (r.prototype.traverse = function (t) {
                this._map.forEach(function (r, o) {
                  t(o, r);
                });
              }),
              r
            );
          })();
        exports.Lookup = r;
      },
      { '../constants/error_msgs': 'ozdg' },
    ],
    Nreh: [
      function (require, module, exports) {
        'use strict';
        var n =
            (this && this.__awaiter) ||
            function (n, t, e, i) {
              return new (e || (e = Promise))(function (r, o) {
                function a(n) {
                  try {
                    s(i.next(n));
                  } catch (t) {
                    o(t);
                  }
                }
                function u(n) {
                  try {
                    s(i.throw(n));
                  } catch (t) {
                    o(t);
                  }
                }
                function s(n) {
                  n.done
                    ? r(n.value)
                    : new e(function (t) {
                        t(n.value);
                      }).then(a, u);
                }
                s((i = i.apply(n, t || [])).next());
              });
            },
          t =
            (this && this.__generator) ||
            function (n, t) {
              var e,
                i,
                r,
                o,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: u(0), throw: u(1), return: u(2) }),
                'function' == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function u(o) {
                return function (u) {
                  return (function (o) {
                    if (e)
                      throw new TypeError('Generator is already executing.');
                    for (; a; )
                      try {
                        if (
                          ((e = 1),
                          i &&
                            (r =
                              i[
                                2 & o[0] ? 'return' : o[0] ? 'throw' : 'next'
                              ]) &&
                            !(r = r.call(i, o[1])).done)
                        )
                          return r;
                        switch (((i = 0), r && (o = [0, r.value]), o[0])) {
                          case 0:
                          case 1:
                            r = o;
                            break;
                          case 4:
                            return a.label++, { value: o[1], done: !1 };
                          case 5:
                            a.label++, (i = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(r =
                                (r = a.trys).length > 0 && r[r.length - 1]) &&
                              (6 === o[0] || 2 === o[0])
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === o[0] &&
                              (!r || (o[1] > r[0] && o[1] < r[3]))
                            ) {
                              a.label = o[1];
                              break;
                            }
                            if (6 === o[0] && a.label < r[1]) {
                              (a.label = r[1]), (r = o);
                              break;
                            }
                            if (r && a.label < r[2]) {
                              (a.label = r[2]), a.ops.push(o);
                              break;
                            }
                            r[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        o = t.call(n, a);
                      } catch (u) {
                        (o = [6, u]), (i = 0);
                      } finally {
                        e = r = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, u]);
                };
              }
            };
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('../bindings/binding'),
          i = require('../constants/error_msgs'),
          r = require('../constants/literal_types'),
          o = require('../constants/metadata_keys'),
          a = require('../planning/metadata_reader'),
          u = require('../planning/planner'),
          s = require('../resolution/resolver'),
          c = require('../syntax/binding_to_syntax'),
          d = require('../utils/id'),
          l = require('../utils/serialization'),
          p = require('./container_snapshot'),
          f = require('./lookup'),
          h = (function () {
            function h(n) {
              var t = n || {};
              if ('object' != typeof t)
                throw new Error('' + i.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
              if (void 0 === t.defaultScope)
                t.defaultScope = r.BindingScopeEnum.Transient;
              else if (
                t.defaultScope !== r.BindingScopeEnum.Singleton &&
                t.defaultScope !== r.BindingScopeEnum.Transient &&
                t.defaultScope !== r.BindingScopeEnum.Request
              )
                throw new Error('' + i.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
              if (void 0 === t.autoBindInjectable) t.autoBindInjectable = !1;
              else if ('boolean' != typeof t.autoBindInjectable)
                throw new Error(
                  '' + i.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE,
                );
              if (void 0 === t.skipBaseClassChecks) t.skipBaseClassChecks = !1;
              else if ('boolean' != typeof t.skipBaseClassChecks)
                throw new Error(
                  '' + i.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK,
                );
              (this.options = {
                autoBindInjectable: t.autoBindInjectable,
                defaultScope: t.defaultScope,
                skipBaseClassChecks: t.skipBaseClassChecks,
              }),
                (this.id = d.id()),
                (this._bindingDictionary = new f.Lookup()),
                (this._snapshots = []),
                (this._middleware = null),
                (this.parent = null),
                (this._metadataReader = new a.MetadataReader());
            }
            return (
              (h.merge = function (n, t) {
                var e = new h(),
                  i = u.getBindingDictionary(e),
                  r = u.getBindingDictionary(n),
                  o = u.getBindingDictionary(t);
                function a(n, t) {
                  n.traverse(function (n, e) {
                    e.forEach(function (n) {
                      t.add(n.serviceIdentifier, n.clone());
                    });
                  });
                }
                return a(r, i), a(o, i), e;
              }),
              (h.prototype.load = function () {
                for (var n = [], t = 0; t < arguments.length; t++)
                  n[t] = arguments[t];
                for (
                  var e = this._getContainerModuleHelpersFactory(),
                    i = 0,
                    r = n;
                  i < r.length;
                  i++
                ) {
                  var o = r[i],
                    a = e(o.id);
                  o.registry(
                    a.bindFunction,
                    a.unbindFunction,
                    a.isboundFunction,
                    a.rebindFunction,
                  );
                }
              }),
              (h.prototype.loadAsync = function () {
                for (var e = [], i = 0; i < arguments.length; i++)
                  e[i] = arguments[i];
                return n(this, void 0, void 0, function () {
                  var n, i, r, o, a;
                  return t(this, function (t) {
                    switch (t.label) {
                      case 0:
                        (n = this._getContainerModuleHelpersFactory()),
                          (i = 0),
                          (r = e),
                          (t.label = 1);
                      case 1:
                        return i < r.length
                          ? ((o = r[i]),
                            (a = n(o.id)),
                            [
                              4,
                              o.registry(
                                a.bindFunction,
                                a.unbindFunction,
                                a.isboundFunction,
                                a.rebindFunction,
                              ),
                            ])
                          : [3, 4];
                      case 2:
                        t.sent(), (t.label = 3);
                      case 3:
                        return i++, [3, 1];
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (h.prototype.unload = function () {
                for (var n = this, t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                t.forEach(function (t) {
                  var e,
                    i =
                      ((e = t.id),
                      function (n) {
                        return n.moduleId === e;
                      });
                  n._bindingDictionary.removeByCondition(i);
                });
              }),
              (h.prototype.bind = function (n) {
                var t =
                    this.options.defaultScope || r.BindingScopeEnum.Transient,
                  i = new e.Binding(n, t);
                return (
                  this._bindingDictionary.add(n, i), new c.BindingToSyntax(i)
                );
              }),
              (h.prototype.rebind = function (n) {
                return this.unbind(n), this.bind(n);
              }),
              (h.prototype.unbind = function (n) {
                try {
                  this._bindingDictionary.remove(n);
                } catch (t) {
                  throw new Error(
                    i.CANNOT_UNBIND + ' ' + l.getServiceIdentifierAsString(n),
                  );
                }
              }),
              (h.prototype.unbindAll = function () {
                this._bindingDictionary = new f.Lookup();
              }),
              (h.prototype.isBound = function (n) {
                var t = this._bindingDictionary.hasKey(n);
                return !t && this.parent && (t = this.parent.isBound(n)), t;
              }),
              (h.prototype.isBoundNamed = function (n, t) {
                return this.isBoundTagged(n, o.NAMED_TAG, t);
              }),
              (h.prototype.isBoundTagged = function (n, t, e) {
                var i = !1;
                if (this._bindingDictionary.hasKey(n)) {
                  var r = this._bindingDictionary.get(n),
                    o = u.createMockRequest(this, n, t, e);
                  i = r.some(function (n) {
                    return n.constraint(o);
                  });
                }
                return (
                  !i && this.parent && (i = this.parent.isBoundTagged(n, t, e)),
                  i
                );
              }),
              (h.prototype.snapshot = function () {
                this._snapshots.push(
                  p.ContainerSnapshot.of(
                    this._bindingDictionary.clone(),
                    this._middleware,
                  ),
                );
              }),
              (h.prototype.restore = function () {
                var n = this._snapshots.pop();
                if (void 0 === n)
                  throw new Error(i.NO_MORE_SNAPSHOTS_AVAILABLE);
                (this._bindingDictionary = n.bindings),
                  (this._middleware = n.middleware);
              }),
              (h.prototype.createChild = function (n) {
                var t = new h(n || this.options);
                return (t.parent = this), t;
              }),
              (h.prototype.applyMiddleware = function () {
                for (var n = [], t = 0; t < arguments.length; t++)
                  n[t] = arguments[t];
                var e = this._middleware
                  ? this._middleware
                  : this._planAndResolve();
                this._middleware = n.reduce(function (n, t) {
                  return t(n);
                }, e);
              }),
              (h.prototype.applyCustomMetadataReader = function (n) {
                this._metadataReader = n;
              }),
              (h.prototype.get = function (n) {
                return this._get(!1, !1, r.TargetTypeEnum.Variable, n);
              }),
              (h.prototype.getTagged = function (n, t, e) {
                return this._get(!1, !1, r.TargetTypeEnum.Variable, n, t, e);
              }),
              (h.prototype.getNamed = function (n, t) {
                return this.getTagged(n, o.NAMED_TAG, t);
              }),
              (h.prototype.getAll = function (n) {
                return this._get(!0, !0, r.TargetTypeEnum.Variable, n);
              }),
              (h.prototype.getAllTagged = function (n, t, e) {
                return this._get(!1, !0, r.TargetTypeEnum.Variable, n, t, e);
              }),
              (h.prototype.getAllNamed = function (n, t) {
                return this.getAllTagged(n, o.NAMED_TAG, t);
              }),
              (h.prototype.resolve = function (n) {
                var t = this.createChild();
                return t.bind(n).toSelf(), t.get(n);
              }),
              (h.prototype._getContainerModuleHelpersFactory = function () {
                var n = this,
                  t = function (n, t) {
                    n._binding.moduleId = t;
                  },
                  e = function (e) {
                    return function (i) {
                      var r = n.rebind.bind(n)(i);
                      return t(r, e), r;
                    };
                  };
                return function (i) {
                  return {
                    bindFunction:
                      ((r = i),
                      function (e) {
                        var i = n.bind.bind(n)(e);
                        return t(i, r), i;
                      }),
                    isboundFunction: function (t) {
                      return n.isBound.bind(n)(t);
                    },
                    rebindFunction: e(i),
                    unbindFunction: function (t) {
                      n.unbind.bind(n)(t);
                    },
                  };
                  var r;
                };
              }),
              (h.prototype._get = function (n, t, e, r, o, a) {
                var u = null,
                  s = {
                    avoidConstraints: n,
                    contextInterceptor: function (n) {
                      return n;
                    },
                    isMultiInject: t,
                    key: o,
                    serviceIdentifier: r,
                    targetType: e,
                    value: a,
                  };
                if (this._middleware) {
                  if (null == (u = this._middleware(s)))
                    throw new Error(i.INVALID_MIDDLEWARE_RETURN);
                } else u = this._planAndResolve()(s);
                return u;
              }),
              (h.prototype._planAndResolve = function () {
                var n = this;
                return function (t) {
                  var e = u.plan(
                    n._metadataReader,
                    n,
                    t.isMultiInject,
                    t.targetType,
                    t.serviceIdentifier,
                    t.key,
                    t.value,
                    t.avoidConstraints,
                  );
                  return (e = t.contextInterceptor(e)), s.resolve(e);
                };
              }),
              h
            );
          })();
        exports.Container = h;
      },
      {
        '../bindings/binding': 'gbv5',
        '../constants/error_msgs': 'ozdg',
        '../constants/literal_types': 'KPLa',
        '../constants/metadata_keys': 'wM96',
        '../planning/metadata_reader': 'cGpo',
        '../planning/planner': 'RiEO',
        '../resolution/resolver': 'oJLS',
        '../syntax/binding_to_syntax': 'lhQt',
        '../utils/id': 'ePY8',
        '../utils/serialization': 'XWMX',
        './container_snapshot': 'jmiq',
        './lookup': 'ej4u',
      },
    ],
    BAeF: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var t = require('../utils/id'),
          e = (function () {
            return function (e) {
              (this.id = t.id()), (this.registry = e);
            };
          })();
        exports.ContainerModule = e;
        var i = (function () {
          return function (e) {
            (this.id = t.id()), (this.registry = e);
          };
        })();
        exports.AsyncContainerModule = i;
      },
      { '../utils/id': 'ePY8' },
    ],
    nVo5: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('../constants/error_msgs'),
          t = require('../constants/metadata_keys');
        function r() {
          return function (r) {
            if (Reflect.hasOwnMetadata(t.PARAM_TYPES, r))
              throw new Error(e.DUPLICATED_INJECTABLE_DECORATOR);
            var a = Reflect.getMetadata(t.DESIGN_PARAM_TYPES, r) || [];
            return Reflect.defineMetadata(t.PARAM_TYPES, a, r), r;
          };
        }
        exports.injectable = r;
      },
      {
        '../constants/error_msgs': 'ozdg',
        '../constants/metadata_keys': 'wM96',
      },
    ],
    ZrAH: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('../planning/metadata'),
          t = require('./decorator_utils');
        function r(r, a) {
          return function (n, o, u) {
            var i = new e.Metadata(r, a);
            'number' == typeof u
              ? t.tagParameter(n, o, u, i)
              : t.tagProperty(n, o, i);
          };
        }
        exports.tagged = r;
      },
      { '../planning/metadata': 'DalN', './decorator_utils': 'BUfm' },
    ],
    ozGY: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('../constants/metadata_keys'),
          t = require('../planning/metadata'),
          r = require('./decorator_utils');
        function a(a) {
          return function (n, o, u) {
            var i = new t.Metadata(e.NAMED_TAG, a);
            'number' == typeof u
              ? r.tagParameter(n, o, u, i)
              : r.tagProperty(n, o, i);
          };
        }
        exports.named = a;
      },
      {
        '../constants/metadata_keys': 'wM96',
        '../planning/metadata': 'DalN',
        './decorator_utils': 'BUfm',
      },
    ],
    JVMA: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('../constants/metadata_keys'),
          t = require('../planning/metadata'),
          r = require('./decorator_utils');
        function a() {
          return function (a, n, o) {
            var u = new t.Metadata(e.OPTIONAL_TAG, !0);
            'number' == typeof o
              ? r.tagParameter(a, n, o, u)
              : r.tagProperty(a, n, u);
          };
        }
        exports.optional = a;
      },
      {
        '../constants/metadata_keys': 'wM96',
        '../planning/metadata': 'DalN',
        './decorator_utils': 'BUfm',
      },
    ],
    Xv7D: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('../constants/metadata_keys'),
          t = require('../planning/metadata'),
          a = require('./decorator_utils');
        function r() {
          return function (r, n, u) {
            var i = new t.Metadata(e.UNMANAGED_TAG, !0);
            a.tagParameter(r, n, u, i);
          };
        }
        exports.unmanaged = r;
      },
      {
        '../constants/metadata_keys': 'wM96',
        '../planning/metadata': 'DalN',
        './decorator_utils': 'BUfm',
      },
    ],
    at3P: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('../constants/metadata_keys'),
          t = require('../planning/metadata'),
          r = require('./decorator_utils');
        function a(a) {
          return function (n, u, o) {
            var i = new t.Metadata(e.MULTI_INJECT_TAG, a);
            'number' == typeof o
              ? r.tagParameter(n, u, o, i)
              : r.tagProperty(n, u, i);
          };
        }
        exports.multiInject = a;
      },
      {
        '../constants/metadata_keys': 'wM96',
        '../planning/metadata': 'DalN',
        './decorator_utils': 'BUfm',
      },
    ],
    xoKS: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('../constants/metadata_keys'),
          t = require('../planning/metadata'),
          a = require('./decorator_utils');
        function r(r) {
          return function (n, u, i) {
            var o = new t.Metadata(e.NAME_TAG, r);
            a.tagParameter(n, u, i, o);
          };
        }
        exports.targetName = r;
      },
      {
        '../constants/metadata_keys': 'wM96',
        '../planning/metadata': 'DalN',
        './decorator_utils': 'BUfm',
      },
    ],
    tSN6: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var t = require('../constants/error_msgs'),
          e = require('../constants/metadata_keys'),
          r = require('../planning/metadata');
        function a() {
          return function (a, n, o) {
            var s = new r.Metadata(e.POST_CONSTRUCT, n);
            if (Reflect.hasOwnMetadata(e.POST_CONSTRUCT, a.constructor))
              throw new Error(t.MULTIPLE_POST_CONSTRUCT_METHODS);
            Reflect.defineMetadata(e.POST_CONSTRUCT, s, a.constructor);
          };
        }
        exports.postConstruct = a;
      },
      {
        '../constants/error_msgs': 'ozdg',
        '../constants/metadata_keys': 'wM96',
        '../planning/metadata': 'DalN',
      },
    ],
    qSPU: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.multiBindToService = function (e) {
            return function (r) {
              return function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                return t.forEach(function (t) {
                  return e.bind(t).toService(r);
                });
              };
            };
          });
      },
      {},
    ],
    PR7M: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('./constants/metadata_keys');
        exports.METADATA_KEY = e;
        var t = require('./container/container');
        exports.Container = t.Container;
        var r = require('./constants/literal_types');
        (exports.BindingScopeEnum = r.BindingScopeEnum),
          (exports.BindingTypeEnum = r.BindingTypeEnum),
          (exports.TargetTypeEnum = r.TargetTypeEnum);
        var n = require('./container/container_module');
        (exports.AsyncContainerModule = n.AsyncContainerModule),
          (exports.ContainerModule = n.ContainerModule);
        var a = require('./annotation/injectable');
        exports.injectable = a.injectable;
        var i = require('./annotation/tagged');
        exports.tagged = i.tagged;
        var o = require('./annotation/named');
        exports.named = o.named;
        var s = require('./annotation/inject');
        (exports.inject = s.inject),
          (exports.LazyServiceIdentifer = s.LazyServiceIdentifer);
        var u = require('./annotation/optional');
        exports.optional = u.optional;
        var p = require('./annotation/unmanaged');
        exports.unmanaged = p.unmanaged;
        var d = require('./annotation/multi_inject');
        exports.multiInject = d.multiInject;
        var c = require('./annotation/target_name');
        exports.targetName = c.targetName;
        var g = require('./annotation/post_construct');
        exports.postConstruct = g.postConstruct;
        var l = require('./planning/metadata_reader');
        exports.MetadataReader = l.MetadataReader;
        var v = require('./utils/id');
        exports.id = v.id;
        var x = require('./annotation/decorator_utils');
        exports.decorate = x.decorate;
        var m = require('./syntax/constraint_helpers');
        (exports.traverseAncerstors = m.traverseAncerstors),
          (exports.taggedConstraint = m.taggedConstraint),
          (exports.namedConstraint = m.namedConstraint),
          (exports.typeConstraint = m.typeConstraint);
        var q = require('./utils/serialization');
        exports.getServiceIdentifierAsString = q.getServiceIdentifierAsString;
        var y = require('./utils/binding_utils');
        exports.multiBindToService = y.multiBindToService;
      },
      {
        './constants/metadata_keys': 'wM96',
        './container/container': 'Nreh',
        './constants/literal_types': 'KPLa',
        './container/container_module': 'BAeF',
        './annotation/injectable': 'nVo5',
        './annotation/tagged': 'ZrAH',
        './annotation/named': 'ozGY',
        './annotation/inject': 'lnlY',
        './annotation/optional': 'JVMA',
        './annotation/unmanaged': 'Xv7D',
        './annotation/multi_inject': 'at3P',
        './annotation/target_name': 'xoKS',
        './annotation/post_construct': 'tSN6',
        './planning/metadata_reader': 'cGpo',
        './utils/id': 'ePY8',
        './annotation/decorator_utils': 'BUfm',
        './syntax/constraint_helpers': 'b0Sz',
        './utils/serialization': 'XWMX',
        './utils/binding_utils': 'qSPU',
      },
    ],
    nj0G: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var t = Symbol.for('INJECTION');
        function e(e, n, r, o) {
          Object.defineProperty(e, n, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return (
                o &&
                  !Reflect.hasMetadata(t, this, n) &&
                  Reflect.defineMetadata(t, r(), this, n),
                Reflect.hasMetadata(t, this, n)
                  ? Reflect.getMetadata(t, this, n)
                  : r()
              );
            },
            set: function (e) {
              Reflect.defineMetadata(t, e, this, n);
            },
          });
        }
        function n(t, n) {
          return function (r) {
            return function (o, u) {
              e(
                o,
                u,
                function () {
                  return t.get(r);
                },
                n,
              );
            };
          };
        }
        function r(t, n) {
          return function (r, o) {
            return function (u, c) {
              e(
                u,
                c,
                function () {
                  return t.getNamed(r, o);
                },
                n,
              );
            };
          };
        }
        function o(t, n) {
          return function (r, o, u) {
            return function (c, a) {
              e(
                c,
                a,
                function () {
                  return t.getTagged(r, o, u);
                },
                n,
              );
            };
          };
        }
        function u(t, n) {
          return function (r) {
            return function (o, u) {
              e(
                o,
                u,
                function () {
                  return t.getAll(r);
                },
                n,
              );
            };
          };
        }
        (exports.makePropertyInjectDecorator = n),
          (exports.makePropertyInjectNamedDecorator = r),
          (exports.makePropertyInjectTaggedDecorator = o),
          (exports.makePropertyMultiInjectDecorator = u);
      },
      {},
    ],
    zF2A: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = require('./decorators');
        function r(r, t) {
          return (
            void 0 === t && (t = !0),
            {
              lazyInject: e.makePropertyInjectDecorator(r, t),
              lazyInjectNamed: e.makePropertyInjectNamedDecorator(r, t),
              lazyInjectTagged: e.makePropertyInjectTaggedDecorator(r, t),
              lazyMultiInject: e.makePropertyMultiInjectDecorator(r, t),
            }
          );
        }
        exports.default = r;
      },
      { './decorators': 'nj0G' },
    ],
    KomH: [
      function (require, module, exports) {
        'use strict';
        function e(e) {
          return function () {
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
              n[o] = arguments[o];
            return new Promise(function (t) {
              e.apply(void 0, n.concat([t]));
            });
          };
        }
        function t(e) {
          var t = document.createElement('textarea');
          (t.innerHTML = e), document.body.appendChild(t), t.select();
          var n = document.execCommand('copy');
          return document.body.removeChild(t), n;
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.toPromise = e),
          (exports.copy = t);
      },
      {},
    ],
    pBGv: [
      function (require, module, exports) {
        var t,
          e,
          n = (module.exports = {});
        function r() {
          throw new Error('setTimeout has not been defined');
        }
        function o() {
          throw new Error('clearTimeout has not been defined');
        }
        function i(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === r || !t) && setTimeout)
            return (t = setTimeout), setTimeout(e, 0);
          try {
            return t(e, 0);
          } catch (n) {
            try {
              return t.call(null, e, 0);
            } catch (n) {
              return t.call(this, e, 0);
            }
          }
        }
        function u(t) {
          if (e === clearTimeout) return clearTimeout(t);
          if ((e === o || !e) && clearTimeout)
            return (e = clearTimeout), clearTimeout(t);
          try {
            return e(t);
          } catch (n) {
            try {
              return e.call(null, t);
            } catch (n) {
              return e.call(this, t);
            }
          }
        }
        !(function () {
          try {
            t = 'function' == typeof setTimeout ? setTimeout : r;
          } catch (n) {
            t = r;
          }
          try {
            e = 'function' == typeof clearTimeout ? clearTimeout : o;
          } catch (n) {
            e = o;
          }
        })();
        var c,
          s = [],
          l = !1,
          a = -1;
        function f() {
          l &&
            c &&
            ((l = !1),
            c.length ? (s = c.concat(s)) : (a = -1),
            s.length && h());
        }
        function h() {
          if (!l) {
            var t = i(f);
            l = !0;
            for (var e = s.length; e; ) {
              for (c = s, s = []; ++a < e; ) c && c[a].run();
              (a = -1), (e = s.length);
            }
            (c = null), (l = !1), u(t);
          }
        }
        function m(t, e) {
          (this.fun = t), (this.array = e);
        }
        function p() {}
        (n.nextTick = function (t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          s.push(new m(t, e)), 1 !== s.length || l || i(h);
        }),
          (m.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (n.title = 'browser'),
          (n.env = {}),
          (n.argv = []),
          (n.version = ''),
          (n.versions = {}),
          (n.on = p),
          (n.addListener = p),
          (n.once = p),
          (n.off = p),
          (n.removeListener = p),
          (n.removeAllListeners = p),
          (n.emit = p),
          (n.prependListener = p),
          (n.prependOnceListener = p),
          (n.listeners = function (t) {
            return [];
          }),
          (n.binding = function (t) {
            throw new Error('process.binding is not supported');
          }),
          (n.cwd = function () {
            return '/';
          }),
          (n.chdir = function (t) {
            throw new Error('process.chdir is not supported');
          }),
          (n.umask = function () {
            return 0;
          });
      },
      {},
    ],
    npqE: [
      function (require, module, exports) {
        var global = arguments[3];
        var process = require('process');
        var t,
          e = arguments[3],
          r = require('process');
        !(function (t) {
          !(function (n) {
            var i =
                'object' == typeof e
                  ? e
                  : 'object' == typeof self
                  ? self
                  : 'object' == typeof this
                  ? this
                  : Function('return this;')(),
              o = u(t);
            function u(t, e) {
              return function (r, n) {
                'function' != typeof t[r] &&
                  Object.defineProperty(t, r, {
                    configurable: !0,
                    writable: !0,
                    value: n,
                  }),
                  e && e(r, n);
              };
            }
            void 0 === i.Reflect ? (i.Reflect = t) : (o = u(i.Reflect, o)),
              (function (t) {
                var e = Object.prototype.hasOwnProperty,
                  n = 'function' == typeof Symbol,
                  i =
                    n && void 0 !== Symbol.toPrimitive
                      ? Symbol.toPrimitive
                      : '@@toPrimitive',
                  o =
                    n && void 0 !== Symbol.iterator
                      ? Symbol.iterator
                      : '@@iterator',
                  u = 'function' == typeof Object.create,
                  a = { __proto__: [] } instanceof Array,
                  f = !u && !a,
                  c = {
                    create: u
                      ? function () {
                          return I(Object.create(null));
                        }
                      : a
                      ? function () {
                          return I({ __proto__: null });
                        }
                      : function () {
                          return I({});
                        },
                    has: f
                      ? function (t, r) {
                          return e.call(t, r);
                        }
                      : function (t, e) {
                          return e in t;
                        },
                    get: f
                      ? function (t, r) {
                          return e.call(t, r) ? t[r] : void 0;
                        }
                      : function (t, e) {
                          return t[e];
                        },
                  },
                  s = Object.getPrototypeOf(Function),
                  h = 'object' == typeof r && r.env && !1,
                  y =
                    h ||
                    'function' != typeof Map ||
                    'function' != typeof Map.prototype.entries
                      ? (function () {
                          var t = {},
                            e = [],
                            r = (function () {
                              function t(t, e, r) {
                                (this._index = 0),
                                  (this._keys = t),
                                  (this._values = e),
                                  (this._selector = r);
                              }
                              return (
                                (t.prototype['@@iterator'] = function () {
                                  return this;
                                }),
                                (t.prototype[o] = function () {
                                  return this;
                                }),
                                (t.prototype.next = function () {
                                  var t = this._index;
                                  if (t >= 0 && t < this._keys.length) {
                                    var r = this._selector(
                                      this._keys[t],
                                      this._values[t],
                                    );
                                    return (
                                      t + 1 >= this._keys.length
                                        ? ((this._index = -1),
                                          (this._keys = e),
                                          (this._values = e))
                                        : this._index++,
                                      { value: r, done: !1 }
                                    );
                                  }
                                  return { value: void 0, done: !0 };
                                }),
                                (t.prototype.throw = function (t) {
                                  throw (
                                    (this._index >= 0 &&
                                      ((this._index = -1),
                                      (this._keys = e),
                                      (this._values = e)),
                                    t)
                                  );
                                }),
                                (t.prototype.return = function (t) {
                                  return (
                                    this._index >= 0 &&
                                      ((this._index = -1),
                                      (this._keys = e),
                                      (this._values = e)),
                                    { value: t, done: !0 }
                                  );
                                }),
                                t
                              );
                            })();
                          return (function () {
                            function e() {
                              (this._keys = []),
                                (this._values = []),
                                (this._cacheKey = t),
                                (this._cacheIndex = -2);
                            }
                            return (
                              Object.defineProperty(e.prototype, 'size', {
                                get: function () {
                                  return this._keys.length;
                                },
                                enumerable: !0,
                                configurable: !0,
                              }),
                              (e.prototype.has = function (t) {
                                return this._find(t, !1) >= 0;
                              }),
                              (e.prototype.get = function (t) {
                                var e = this._find(t, !1);
                                return e >= 0 ? this._values[e] : void 0;
                              }),
                              (e.prototype.set = function (t, e) {
                                var r = this._find(t, !0);
                                return (this._values[r] = e), this;
                              }),
                              (e.prototype.delete = function (e) {
                                var r = this._find(e, !1);
                                if (r >= 0) {
                                  for (
                                    var n = this._keys.length, i = r + 1;
                                    i < n;
                                    i++
                                  )
                                    (this._keys[i - 1] = this._keys[i]),
                                      (this._values[i - 1] = this._values[i]);
                                  return (
                                    this._keys.length--,
                                    this._values.length--,
                                    e === this._cacheKey &&
                                      ((this._cacheKey = t),
                                      (this._cacheIndex = -2)),
                                    !0
                                  );
                                }
                                return !1;
                              }),
                              (e.prototype.clear = function () {
                                (this._keys.length = 0),
                                  (this._values.length = 0),
                                  (this._cacheKey = t),
                                  (this._cacheIndex = -2);
                              }),
                              (e.prototype.keys = function () {
                                return new r(this._keys, this._values, n);
                              }),
                              (e.prototype.values = function () {
                                return new r(this._keys, this._values, i);
                              }),
                              (e.prototype.entries = function () {
                                return new r(this._keys, this._values, u);
                              }),
                              (e.prototype['@@iterator'] = function () {
                                return this.entries();
                              }),
                              (e.prototype[o] = function () {
                                return this.entries();
                              }),
                              (e.prototype._find = function (t, e) {
                                return (
                                  this._cacheKey !== t &&
                                    (this._cacheIndex = this._keys.indexOf(
                                      (this._cacheKey = t),
                                    )),
                                  this._cacheIndex < 0 &&
                                    e &&
                                    ((this._cacheIndex = this._keys.length),
                                    this._keys.push(t),
                                    this._values.push(void 0)),
                                  this._cacheIndex
                                );
                              }),
                              e
                            );
                          })();
                          function n(t, e) {
                            return t;
                          }
                          function i(t, e) {
                            return e;
                          }
                          function u(t, e) {
                            return [t, e];
                          }
                        })()
                      : Map,
                  p =
                    h ||
                    'function' != typeof Set ||
                    'function' != typeof Set.prototype.entries
                      ? (function () {
                          function t() {
                            this._map = new y();
                          }
                          return (
                            Object.defineProperty(t.prototype, 'size', {
                              get: function () {
                                return this._map.size;
                              },
                              enumerable: !0,
                              configurable: !0,
                            }),
                            (t.prototype.has = function (t) {
                              return this._map.has(t);
                            }),
                            (t.prototype.add = function (t) {
                              return this._map.set(t, t), this;
                            }),
                            (t.prototype.delete = function (t) {
                              return this._map.delete(t);
                            }),
                            (t.prototype.clear = function () {
                              this._map.clear();
                            }),
                            (t.prototype.keys = function () {
                              return this._map.keys();
                            }),
                            (t.prototype.values = function () {
                              return this._map.values();
                            }),
                            (t.prototype.entries = function () {
                              return this._map.entries();
                            }),
                            (t.prototype['@@iterator'] = function () {
                              return this.keys();
                            }),
                            (t.prototype[o] = function () {
                              return this.keys();
                            }),
                            t
                          );
                        })()
                      : Set,
                  l = new (h || 'function' != typeof WeakMap
                    ? (function () {
                        var t = 16,
                          r = c.create(),
                          n = i();
                        return (function () {
                          function t() {
                            this._key = i();
                          }
                          return (
                            (t.prototype.has = function (t) {
                              var e = o(t, !1);
                              return void 0 !== e && c.has(e, this._key);
                            }),
                            (t.prototype.get = function (t) {
                              var e = o(t, !1);
                              return void 0 !== e
                                ? c.get(e, this._key)
                                : void 0;
                            }),
                            (t.prototype.set = function (t, e) {
                              var r = o(t, !0);
                              return (r[this._key] = e), this;
                            }),
                            (t.prototype.delete = function (t) {
                              var e = o(t, !1);
                              return void 0 !== e && delete e[this._key];
                            }),
                            (t.prototype.clear = function () {
                              this._key = i();
                            }),
                            t
                          );
                        })();
                        function i() {
                          var t;
                          do {
                            t = '@@WeakMap@@' + a();
                          } while (c.has(r, t));
                          return (r[t] = !0), t;
                        }
                        function o(t, r) {
                          if (!e.call(t, n)) {
                            if (!r) return;
                            Object.defineProperty(t, n, { value: c.create() });
                          }
                          return t[n];
                        }
                        function u(t, e) {
                          for (var r = 0; r < e; ++r)
                            t[r] = (255 * Math.random()) | 0;
                          return t;
                        }
                        function a() {
                          var e = (function (t) {
                            if ('function' == typeof Uint8Array)
                              return 'undefined' != typeof crypto
                                ? crypto.getRandomValues(new Uint8Array(t))
                                : 'undefined' != typeof msCrypto
                                ? msCrypto.getRandomValues(new Uint8Array(t))
                                : u(new Uint8Array(t), t);
                            return u(new Array(t), t);
                          })(t);
                          (e[6] = (79 & e[6]) | 64),
                            (e[8] = (191 & e[8]) | 128);
                          for (var r = '', n = 0; n < t; ++n) {
                            var i = e[n];
                            (4 !== n && 6 !== n && 8 !== n) || (r += '-'),
                              i < 16 && (r += '0'),
                              (r += i.toString(16).toLowerCase());
                          }
                          return r;
                        }
                      })()
                    : WeakMap)();
                function v(t, e, r) {
                  var n = l.get(t);
                  if (k(n)) {
                    if (!r) return;
                    (n = new y()), l.set(t, n);
                  }
                  var i = n.get(e);
                  if (k(i)) {
                    if (!r) return;
                    (i = new y()), n.set(e, i);
                  }
                  return i;
                }
                function _(t, e, r) {
                  var n = v(e, r, !1);
                  return !k(n) && !!n.has(t);
                }
                function d(t, e, r) {
                  var n = v(e, r, !1);
                  if (!k(n)) return n.get(t);
                }
                function w(t, e, r, n) {
                  var i = v(r, n, !0);
                  i.set(t, e);
                }
                function g(t, e) {
                  var r = [],
                    n = v(t, e, !1);
                  if (k(n)) return r;
                  for (
                    var i = n.keys(),
                      u = (function (t) {
                        var e = A(t, o);
                        if (!x(e)) throw new TypeError();
                        var r = e.call(t);
                        if (!O(r)) throw new TypeError();
                        return r;
                      })(i),
                      a = 0;
                    ;

                  ) {
                    var f = S(u);
                    if (!f) return (r.length = a), r;
                    var c = f.value;
                    try {
                      r[a] = c;
                    } catch (s) {
                      try {
                        P(u);
                      } finally {
                        throw s;
                      }
                    }
                    a++;
                  }
                }
                function b(t) {
                  if (null === t) return 1;
                  switch (typeof t) {
                    case 'undefined':
                      return 0;
                    case 'boolean':
                      return 2;
                    case 'string':
                      return 3;
                    case 'symbol':
                      return 4;
                    case 'number':
                      return 5;
                    case 'object':
                      return null === t ? 1 : 6;
                    default:
                      return 6;
                  }
                }
                function k(t) {
                  return void 0 === t;
                }
                function m(t) {
                  return null === t;
                }
                function O(t) {
                  return 'object' == typeof t
                    ? null !== t
                    : 'function' == typeof t;
                }
                function E(t, e) {
                  switch (b(t)) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                      return t;
                  }
                  var r = 3 === e ? 'string' : 5 === e ? 'number' : 'default',
                    n = A(t, i);
                  if (void 0 !== n) {
                    var o = n.call(t, r);
                    if (O(o)) throw new TypeError();
                    return o;
                  }
                  return (function (t, e) {
                    if ('string' === e) {
                      var r = t.toString;
                      if (x(r)) {
                        var n = r.call(t);
                        if (!O(n)) return n;
                      }
                      var i = t.valueOf;
                      if (x(i)) {
                        var n = i.call(t);
                        if (!O(n)) return n;
                      }
                    } else {
                      var i = t.valueOf;
                      if (x(i)) {
                        var n = i.call(t);
                        if (!O(n)) return n;
                      }
                      var o = t.toString;
                      if (x(o)) {
                        var n = o.call(t);
                        if (!O(n)) return n;
                      }
                    }
                    throw new TypeError();
                  })(t, 'default' === r ? 'number' : r);
                }
                function T(t) {
                  var e = E(t, 3);
                  return 'symbol' == typeof e
                    ? e
                    : (function (t) {
                        return '' + t;
                      })(e);
                }
                function j(t) {
                  return Array.isArray
                    ? Array.isArray(t)
                    : t instanceof Object
                    ? t instanceof Array
                    : '[object Array]' === Object.prototype.toString.call(t);
                }
                function x(t) {
                  return 'function' == typeof t;
                }
                function M(t) {
                  return 'function' == typeof t;
                }
                function A(t, e) {
                  var r = t[e];
                  if (null != r) {
                    if (!x(r)) throw new TypeError();
                    return r;
                  }
                }
                function S(t) {
                  var e = t.next();
                  return !e.done && e;
                }
                function P(t) {
                  var e = t.return;
                  e && e.call(t);
                }
                function K(t) {
                  var e = Object.getPrototypeOf(t);
                  if ('function' != typeof t || t === s) return e;
                  if (e !== s) return e;
                  var r = t.prototype,
                    n = r && Object.getPrototypeOf(r);
                  if (null == n || n === Object.prototype) return e;
                  var i = n.constructor;
                  return 'function' != typeof i ? e : i === t ? e : i;
                }
                function I(t) {
                  return (t.__ = void 0), delete t.__, t;
                }
                t('decorate', function (t, e, r, n) {
                  if (k(r)) {
                    if (!j(t)) throw new TypeError();
                    if (!M(e)) throw new TypeError();
                    return (function (t, e) {
                      for (var r = t.length - 1; r >= 0; --r) {
                        var n = t[r],
                          i = n(e);
                        if (!k(i) && !m(i)) {
                          if (!M(i)) throw new TypeError();
                          e = i;
                        }
                      }
                      return e;
                    })(t, e);
                  }
                  if (!j(t)) throw new TypeError();
                  if (!O(e)) throw new TypeError();
                  if (!O(n) && !k(n) && !m(n)) throw new TypeError();
                  return (
                    m(n) && (n = void 0),
                    (r = T(r)),
                    (function (t, e, r, n) {
                      for (var i = t.length - 1; i >= 0; --i) {
                        var o = t[i],
                          u = o(e, r, n);
                        if (!k(u) && !m(u)) {
                          if (!O(u)) throw new TypeError();
                          n = u;
                        }
                      }
                      return n;
                    })(t, e, r, n)
                  );
                }),
                  t('metadata', function (t, e) {
                    return function (r, n) {
                      if (!O(r)) throw new TypeError();
                      if (
                        !k(n) &&
                        !(function (t) {
                          switch (b(t)) {
                            case 3:
                            case 4:
                              return !0;
                            default:
                              return !1;
                          }
                        })(n)
                      )
                        throw new TypeError();
                      w(t, e, r, n);
                    };
                  }),
                  t('defineMetadata', function (t, e, r, n) {
                    if (!O(r)) throw new TypeError();
                    k(n) || (n = T(n));
                    return w(t, e, r, n);
                  }),
                  t('hasMetadata', function (t, e, r) {
                    if (!O(e)) throw new TypeError();
                    k(r) || (r = T(r));
                    return (function t(e, r, n) {
                      var i = _(e, r, n);
                      if (i) return !0;
                      var o = K(r);
                      if (!m(o)) return t(e, o, n);
                      return !1;
                    })(t, e, r);
                  }),
                  t('hasOwnMetadata', function (t, e, r) {
                    if (!O(e)) throw new TypeError();
                    k(r) || (r = T(r));
                    return _(t, e, r);
                  }),
                  t('getMetadata', function (t, e, r) {
                    if (!O(e)) throw new TypeError();
                    k(r) || (r = T(r));
                    return (function t(e, r, n) {
                      var i = _(e, r, n);
                      if (i) return d(e, r, n);
                      var o = K(r);
                      if (!m(o)) return t(e, o, n);
                      return;
                    })(t, e, r);
                  }),
                  t('getOwnMetadata', function (t, e, r) {
                    if (!O(e)) throw new TypeError();
                    k(r) || (r = T(r));
                    return d(t, e, r);
                  }),
                  t('getMetadataKeys', function (t, e) {
                    if (!O(t)) throw new TypeError();
                    k(e) || (e = T(e));
                    return (function t(e, r) {
                      var n = g(e, r);
                      var i = K(e);
                      if (null === i) return n;
                      var o = t(i, r);
                      if (o.length <= 0) return n;
                      if (n.length <= 0) return o;
                      var u = new p();
                      var a = [];
                      for (var f = 0, c = n; f < c.length; f++) {
                        var s = c[f],
                          h = u.has(s);
                        h || (u.add(s), a.push(s));
                      }
                      for (var y = 0, l = o; y < l.length; y++) {
                        var s = l[y],
                          h = u.has(s);
                        h || (u.add(s), a.push(s));
                      }
                      return a;
                    })(t, e);
                  }),
                  t('getOwnMetadataKeys', function (t, e) {
                    if (!O(t)) throw new TypeError();
                    k(e) || (e = T(e));
                    return g(t, e);
                  }),
                  t('deleteMetadata', function (t, e, r) {
                    if (!O(e)) throw new TypeError();
                    k(r) || (r = T(r));
                    var n = v(e, r, !1);
                    if (k(n)) return !1;
                    if (!n.delete(t)) return !1;
                    if (n.size > 0) return !0;
                    var i = l.get(e);
                    return i.delete(r), i.size > 0 || (l.delete(e), !0);
                  });
              })(o);
          })();
        })(t || (t = {}));
      },
      { process: 'pBGv' },
    ],
    CDRn: [
      function (require, module, exports) {
        'use strict';
        function e(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function n(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        }
        function r(e) {
          return (r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                })(e);
        }
        var o =
            (this && this.__decorate) ||
            function (e, t, n, o) {
              var a,
                i = arguments.length,
                u =
                  i < 3
                    ? t
                    : null === o
                    ? (o = Object.getOwnPropertyDescriptor(t, n))
                    : o;
              if (
                'object' ===
                  ('undefined' == typeof Reflect ? 'undefined' : r(Reflect)) &&
                'function' == typeof Reflect.decorate
              )
                u = Reflect.decorate(e, t, n, o);
              else
                for (var c = e.length - 1; c >= 0; c--)
                  (a = e[c]) &&
                    (u = (i < 3 ? a(u) : i > 3 ? a(t, n, u) : a(t, n)) || u);
              return i > 3 && u && Object.defineProperty(t, n, u), u;
            },
          a =
            (this && this.__metadata) ||
            function (e, t) {
              if (
                'object' ===
                  ('undefined' == typeof Reflect ? 'undefined' : r(Reflect)) &&
                'function' == typeof Reflect.metadata
              )
                return Reflect.metadata(e, t);
            },
          i =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, a) {
                function i(e) {
                  try {
                    c(r.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  try {
                    c(r.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(i, u);
                }
                c((r = r.apply(e, t || [])).next());
              });
            };
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var u = require('inversify'),
          c = require('./utils');
        require('reflect-metadata');
        var s = (function () {
          function t() {
            e(this, t), (this.eventMap = {}), this.handleMessages();
          }
          return (
            n(t, [
              {
                key: 'sendTab',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return i(
                    this,
                    void 0,
                    void 0,
                    regeneratorRuntime.mark(function n() {
                      var r;
                      return regeneratorRuntime.wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (chrome.tabs) {
                                n.next = 2;
                                break;
                              }
                              return n.abrupt('return', Promise.resolve(null));
                            case 2:
                              return (
                                (n.next = 4),
                                c.toPromise(chrome.tabs.query)({
                                  active: !0,
                                  currentWindow: !0,
                                })
                              );
                            case 4:
                              return (
                                (r = n.sent),
                                n.abrupt(
                                  'return',
                                  c.toPromise(chrome.tabs.sendMessage)(
                                    r[0].id,
                                    { eventName: e, detail: t },
                                  ),
                                )
                              );
                            case 6:
                            case 'end':
                              return n.stop();
                          }
                      }, n);
                    }),
                  );
                },
              },
              {
                key: 'send',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return i(
                    this,
                    void 0,
                    void 0,
                    regeneratorRuntime.mark(function n() {
                      return regeneratorRuntime.wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return n.abrupt(
                                'return',
                                c.toPromise(chrome.runtime.sendMessage)({
                                  eventName: e,
                                  detail: t,
                                }),
                              );
                            case 1:
                            case 'end':
                              return n.stop();
                          }
                      }, n);
                    }),
                  );
                },
              },
              {
                key: 'on',
                value: function (e, t) {
                  this.eventMap[e] = t;
                },
              },
              {
                key: 'handleMessages',
                value: function () {
                  var e = this;
                  chrome.runtime.onMessage &&
                    chrome.runtime.onMessage.addListener(function (t, n, r) {
                      var o = e.eventMap[t.eventName];
                      return (
                        o &&
                          Promise.resolve(o(t.detail)).then(function (e) {
                            r(e);
                          }),
                        !0
                      );
                    });
                },
              },
            ]),
            t
          );
        })();
        (s = o([u.injectable(), a('design:paramtypes', [])], s)),
          (exports.MessageService = s);
      },
      { inversify: 'PR7M', './utils': 'KomH', 'reflect-metadata': 'npqE' },
    ],
    yDeg: [
      function (require, module, exports) {
        'use strict';
        var e =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var r = require('inversify'),
          t = e(require('inversify-inject-decorators')),
          i = require('./message-service'),
          s = new r.Container();
        (exports.container = s), s.bind(i.MessageService).toSelf();
        var n = t.default(s),
          a = n.lazyInject;
        exports.lazyInject = a;
      },
      {
        inversify: 'PR7M',
        'inversify-inject-decorators': 'zF2A',
        './message-service': 'CDRn',
      },
    ],
    ICI1: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
      },
      {},
    ],
    PeVv: [
      function (require, module, exports) {
        'use strict';
        function e(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function t(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        function r(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        }
        function n(e) {
          return (n =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                })(e);
        }
        var o =
            (this && this.__decorate) ||
            function (e, t, r, o) {
              var u,
                i = arguments.length,
                c =
                  i < 3
                    ? t
                    : null === o
                    ? (o = Object.getOwnPropertyDescriptor(t, r))
                    : o;
              if (
                'object' ===
                  ('undefined' == typeof Reflect ? 'undefined' : n(Reflect)) &&
                'function' == typeof Reflect.decorate
              )
                c = Reflect.decorate(e, t, r, o);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (u = e[a]) &&
                    (c = (i < 3 ? u(c) : i > 3 ? u(t, r, c) : u(t, r)) || c);
              return i > 3 && c && Object.defineProperty(t, r, c), c;
            },
          u =
            (this && this.__awaiter) ||
            function (e, t, r, n) {
              return new (r || (r = Promise))(function (o, u) {
                function i(e) {
                  try {
                    a(n.next(e));
                  } catch (t) {
                    u(t);
                  }
                }
                function c(e) {
                  try {
                    a(n.throw(e));
                  } catch (t) {
                    u(t);
                  }
                }
                function a(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof r
                        ? t
                        : new r(function (e) {
                            e(t);
                          })).then(i, c);
                }
                a((n = n.apply(e, t || [])).next());
              });
            };
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var i = require('inversify'),
          c = require('~/common');
        require('reflect-metadata');
        var a = (function () {
          function t() {
            e(this, t);
          }
          return (
            r(t, [
              {
                key: 'inject',
                value: function (e) {
                  return u(
                    this,
                    void 0,
                    void 0,
                    regeneratorRuntime.mark(function t() {
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.isInjected(e);
                              case 2:
                                if (!t.sent) {
                                  t.next = 5;
                                  break;
                                }
                                return t.abrupt('return');
                              case 5:
                                return t.abrupt(
                                  'return',
                                  c.toPromise(chrome.scripting.executeScript)({
                                    target: { tabId: e },
                                    files: ['content.js'],
                                  }),
                                );
                              case 6:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  );
                },
              },
              {
                key: 'getActiveTabId',
                value: function () {
                  return u(
                    this,
                    void 0,
                    void 0,
                    regeneratorRuntime.mark(function e() {
                      var t;
                      return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                c.toPromise(chrome.tabs.query)({
                                  active: !0,
                                  currentWindow: !0,
                                })
                              );
                            case 2:
                              return (t = e.sent), e.abrupt('return', t[0].id);
                            case 4:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                },
              },
              {
                key: 'runCode',
                value: function () {
                  return !!document.querySelector('ac-root') || null;
                },
              },
              {
                key: 'isInjected',
                value: function (e) {
                  return u(
                    this,
                    void 0,
                    void 0,
                    regeneratorRuntime.mark(function t() {
                      var r;
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  c.toPromise(chrome.scripting.executeScript)({
                                    target: { tabId: e },
                                    func: this.runCode,
                                  })
                                );
                              case 2:
                                return (
                                  (r = t.sent), t.abrupt('return', r[0].result)
                                );
                              case 4:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  );
                },
              },
            ]),
            t
          );
        })();
        (a = o([i.injectable()], a)), (exports.ContentInjector = a);
      },
      { inversify: 'PR7M', '~/common': 'rTqy', 'reflect-metadata': 'npqE' },
    ],
    rTqy: [
      function (require, module, exports) {
        'use strict';
        function e(e) {
          for (var r in e) exports.hasOwnProperty(r) || (exports[r] = e[r]);
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          e(require('./inversify.config')),
          e(require('./message-service')),
          e(require('./utils')),
          e(require('./models')),
          e(require('./content-injector'));
      },
      {
        './inversify.config': 'yDeg',
        './message-service': 'CDRn',
        './utils': 'KomH',
        './models': 'ICI1',
        './content-injector': 'PeVv',
      },
    ],
    QVnC: [
      function (require, module, exports) {
        var t = (function (t) {
          'use strict';
          var r,
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            c = o.toStringTag || '@@toStringTag';
          function u(t, r, e, n) {
            var o = r && r.prototype instanceof v ? r : v,
              i = Object.create(o.prototype),
              a = new k(n || []);
            return (
              (i._invoke = (function (t, r, e) {
                var n = f;
                return function (o, i) {
                  if (n === l) throw new Error('Generator is already running');
                  if (n === p) {
                    if ('throw' === o) throw i;
                    return N();
                  }
                  for (e.method = o, e.arg = i; ; ) {
                    var a = e.delegate;
                    if (a) {
                      var c = _(a, e);
                      if (c) {
                        if (c === y) continue;
                        return c;
                      }
                    }
                    if ('next' === e.method) e.sent = e._sent = e.arg;
                    else if ('throw' === e.method) {
                      if (n === f) throw ((n = p), e.arg);
                      e.dispatchException(e.arg);
                    } else 'return' === e.method && e.abrupt('return', e.arg);
                    n = l;
                    var u = h(t, r, e);
                    if ('normal' === u.type) {
                      if (((n = e.done ? p : s), u.arg === y)) continue;
                      return { value: u.arg, done: e.done };
                    }
                    'throw' === u.type &&
                      ((n = p), (e.method = 'throw'), (e.arg = u.arg));
                  }
                };
              })(t, e, a)),
              i
            );
          }
          function h(t, r, e) {
            try {
              return { type: 'normal', arg: t.call(r, e) };
            } catch (n) {
              return { type: 'throw', arg: n };
            }
          }
          t.wrap = u;
          var f = 'suspendedStart',
            s = 'suspendedYield',
            l = 'executing',
            p = 'completed',
            y = {};
          function v() {}
          function d() {}
          function g() {}
          var m = {};
          m[i] = function () {
            return this;
          };
          var w = Object.getPrototypeOf,
            L = w && w(w(G([])));
          L && L !== e && n.call(L, i) && (m = L);
          var x = (g.prototype = v.prototype = Object.create(m));
          function E(t) {
            ['next', 'throw', 'return'].forEach(function (r) {
              t[r] = function (t) {
                return this._invoke(r, t);
              };
            });
          }
          function b(t, r) {
            var e;
            this._invoke = function (o, i) {
              function a() {
                return new r(function (e, a) {
                  !(function e(o, i, a, c) {
                    var u = h(t[o], t, i);
                    if ('throw' !== u.type) {
                      var f = u.arg,
                        s = f.value;
                      return s && 'object' == typeof s && n.call(s, '__await')
                        ? r.resolve(s.__await).then(
                            function (t) {
                              e('next', t, a, c);
                            },
                            function (t) {
                              e('throw', t, a, c);
                            },
                          )
                        : r.resolve(s).then(
                            function (t) {
                              (f.value = t), a(f);
                            },
                            function (t) {
                              return e('throw', t, a, c);
                            },
                          );
                    }
                    c(u.arg);
                  })(o, i, e, a);
                });
              }
              return (e = e ? e.then(a, a) : a());
            };
          }
          function _(t, e) {
            var n = t.iterator[e.method];
            if (n === r) {
              if (((e.delegate = null), 'throw' === e.method)) {
                if (
                  t.iterator.return &&
                  ((e.method = 'return'),
                  (e.arg = r),
                  _(t, e),
                  'throw' === e.method)
                )
                  return y;
                (e.method = 'throw'),
                  (e.arg = new TypeError(
                    "The iterator does not provide a 'throw' method",
                  ));
              }
              return y;
            }
            var o = h(n, t.iterator, e.arg);
            if ('throw' === o.type)
              return (
                (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((e[t.resultName] = i.value),
                  (e.next = t.nextLoc),
                  'return' !== e.method && ((e.method = 'next'), (e.arg = r)),
                  (e.delegate = null),
                  y)
                : i
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                y);
          }
          function j(t) {
            var r = { tryLoc: t[0] };
            1 in t && (r.catchLoc = t[1]),
              2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
              this.tryEntries.push(r);
          }
          function O(t) {
            var r = t.completion || {};
            (r.type = 'normal'), delete r.arg, (t.completion = r);
          }
          function k(t) {
            (this.tryEntries = [{ tryLoc: 'root' }]),
              t.forEach(j, this),
              this.reset(!0);
          }
          function G(t) {
            if (t) {
              var e = t[i];
              if (e) return e.call(t);
              if ('function' == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < t.length; )
                      if (n.call(t, o))
                        return (e.value = t[o]), (e.done = !1), e;
                    return (e.value = r), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            return { next: N };
          }
          function N() {
            return { value: r, done: !0 };
          }
          return (
            (d.prototype = x.constructor = g),
            (g.constructor = d),
            (g[c] = d.displayName = 'GeneratorFunction'),
            (t.isGeneratorFunction = function (t) {
              var r = 'function' == typeof t && t.constructor;
              return (
                !!r &&
                (r === d || 'GeneratorFunction' === (r.displayName || r.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, g)
                  : ((t.__proto__ = g), c in t || (t[c] = 'GeneratorFunction')),
                (t.prototype = Object.create(x)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            E(b.prototype),
            (b.prototype[a] = function () {
              return this;
            }),
            (t.AsyncIterator = b),
            (t.async = function (r, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new b(u(r, e, n, o), i);
              return t.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            E(x),
            (x[c] = 'Generator'),
            (x[i] = function () {
              return this;
            }),
            (x.toString = function () {
              return '[object Generator]';
            }),
            (t.keys = function (t) {
              var r = [];
              for (var e in t) r.push(e);
              return (
                r.reverse(),
                function e() {
                  for (; r.length; ) {
                    var n = r.pop();
                    if (n in t) return (e.value = n), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = G),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = r),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = r),
                  this.tryEntries.forEach(O),
                  !t)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = r);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var e = this;
                function o(n, o) {
                  return (
                    (c.type = 'throw'),
                    (c.arg = t),
                    (e.next = n),
                    o && ((e.method = 'next'), (e.arg = r)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ('root' === a.tryLoc) return o('end');
                  if (a.tryLoc <= this.prev) {
                    var u = n.call(a, 'catchLoc'),
                      h = n.call(a, 'finallyLoc');
                    if (u && h) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!h)
                        throw new Error(
                          'try statement without catch or finally',
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var o = this.tryEntries[e];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, 'finallyLoc') &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ('break' === t || 'continue' === t) &&
                  i.tryLoc <= r &&
                  r <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = r),
                  i
                    ? ((this.method = 'next'), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function (t, r) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && r && (this.next = r),
                  y
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e.finallyLoc === t)
                    return this.complete(e.completion, e.afterLoc), O(e), y;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e.tryLoc === t) {
                    var n = e.completion;
                    if ('throw' === n.type) {
                      var o = n.arg;
                      O(e);
                    }
                    return o;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function (t, e, n) {
                return (
                  (this.delegate = {
                    iterator: G(t),
                    resultName: e,
                    nextLoc: n,
                  }),
                  'next' === this.method && (this.arg = r),
                  y
                );
              },
            }),
            t
          );
        })('object' == typeof module ? module.exports : {});
        try {
          regeneratorRuntime = t;
        } catch (r) {
          Function('r', 'regeneratorRuntime = r')(t);
        }
      },
      {},
    ],
    uL3H: [
      function (require, module, exports) {
        'use strict';
        function e(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function n(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        }
        function r(e) {
          return (r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                })(e);
        }
        var o,
          i,
          c =
            (this && this.__decorate) ||
            function (e, t, n, o) {
              var i,
                c = arguments.length,
                a =
                  c < 3
                    ? t
                    : null === o
                    ? (o = Object.getOwnPropertyDescriptor(t, n))
                    : o;
              if (
                'object' ===
                  ('undefined' == typeof Reflect ? 'undefined' : r(Reflect)) &&
                'function' == typeof Reflect.decorate
              )
                a = Reflect.decorate(e, t, n, o);
              else
                for (var s = e.length - 1; s >= 0; s--)
                  (i = e[s]) &&
                    (a = (c < 3 ? i(a) : c > 3 ? i(t, n, a) : i(t, n)) || a);
              return c > 3 && a && Object.defineProperty(t, n, a), a;
            },
          a =
            (this && this.__metadata) ||
            function (e, t) {
              if (
                'object' ===
                  ('undefined' == typeof Reflect ? 'undefined' : r(Reflect)) &&
                'function' == typeof Reflect.metadata
              )
                return Reflect.metadata(e, t);
            },
          s =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function c(e) {
                  try {
                    s(r.next(e));
                  } catch (t) {
                    i(t);
                  }
                }
                function a(e) {
                  try {
                    s(r.throw(e));
                  } catch (t) {
                    i(t);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(c, a);
                }
                s((r = r.apply(e, t || [])).next());
              });
            };
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var u = require('inversify'),
          f = require('~/common');
        require('regenerator-runtime/runtime'), require('reflect-metadata');
        var l = (function () {
          function t(n, r) {
            var o = this;
            e(this, t),
              (this.messageService = n),
              (this.contentInjector = r),
              (this.captureVisibleTab = function () {
                return s(
                  o,
                  void 0,
                  void 0,
                  regeneratorRuntime.mark(function e() {
                    var t, n, r, o, i, c, a;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              f.toPromise(chrome.tabs.query)({
                                active: !0,
                                currentWindow: !0,
                              })
                            );
                          case 2:
                            return (
                              (t = e.sent),
                              (n = t[0]),
                              (e.next = 6),
                              f.toPromise(chrome.tabs.getZoom)()
                            );
                          case 6:
                            return (
                              (r = e.sent),
                              (o = n.width / r),
                              (i = n.height / r),
                              (e.next = 11),
                              f.toPromise(chrome.tabs.captureVisibleTab)(null, {
                                format: 'png',
                              })
                            );
                          case 11:
                            return (
                              (c = e.sent),
                              (a = { imgSrc: c, width: o, height: i }),
                              console.log('captureVisibleTab:', a),
                              e.abrupt('return', a)
                            );
                          case 15:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
              }),
              chrome.runtime.onInstalled.addListener(function () {
                console.log('AnyColor installed.');
              }),
              this.messageService.on('requestCapture', this.captureVisibleTab),
              this.handleCommands(),
              this.handleBrowserAction();
          }
          return (
            n(t, [
              {
                key: 'handleCommands',
                value: function () {
                  var e = this;
                  chrome.commands.onCommand.addListener(function (t) {
                    return s(
                      e,
                      void 0,
                      void 0,
                      regeneratorRuntime.mark(function e() {
                        var n;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if ('toggle-inspector' !== t) {
                                    e.next = 5;
                                    break;
                                  }
                                  return (
                                    (e.next = 3),
                                    this.contentInjector.getActiveTabId()
                                  );
                                case 3:
                                  (n = e.sent), this.toggleInspector(n);
                                case 5:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                  });
                },
              },
              {
                key: 'handleBrowserAction',
                value: function () {
                  var e = this;
                  chrome.action.onClicked.addListener(function (t) {
                    var n = t.id;
                    e.toggleInspector(n);
                  });
                },
              },
              {
                key: 'toggleInspector',
                value: function (e) {
                  return s(
                    this,
                    void 0,
                    void 0,
                    regeneratorRuntime.mark(function t() {
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2), this.contentInjector.inject(e)
                                );
                              case 2:
                                this.messageService.sendTab('toggleInspector');
                              case 3:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  );
                },
              },
            ]),
            t
          );
        })();
        (l = c(
          [
            u.injectable(),
            a('design:paramtypes', [
              'function' ==
              typeof (o = void 0 !== f.MessageService && f.MessageService)
                ? o
                : Object,
              'function' ==
              typeof (i = void 0 !== f.ContentInjector && f.ContentInjector)
                ? i
                : Object,
            ]),
          ],
          l,
        )),
          f.container.bind(l).toSelf(),
          f.container.bind(f.ContentInjector).toSelf(),
          f.container.resolve(l);
      },
      {
        inversify: 'PR7M',
        '~/common': 'rTqy',
        'regenerator-runtime/runtime': 'QVnC',
        'reflect-metadata': 'npqE',
      },
    ],
  },
  {},
  ['uL3H'],
  null,
);
