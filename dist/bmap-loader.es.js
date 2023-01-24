function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$j =
// eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) ||
// eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
// eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();var objectGetOwnPropertyDescriptor = {};var fails$i = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};var fails$h = fails$i;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$h(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});var fails$g = fails$i;
var functionBindNative = !fails$g(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () {/* empty */}.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});var NATIVE_BIND$3 = functionBindNative;
var call$h = Function.prototype.call;
var functionCall = NATIVE_BIND$3 ? call$h.bind(call$h) : function () {
  return call$h.apply(call$h, arguments);
};var objectPropertyIsEnumerable = {};var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$4 && !$propertyIsEnumerable.call({
  1: 2
}, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$4(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;var createPropertyDescriptor$6 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};var NATIVE_BIND$2 = functionBindNative;
var FunctionPrototype$2 = Function.prototype;
var call$g = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$g, call$g);
var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$g.apply(fn, arguments);
  };
};var uncurryThis$j = functionUncurryThis;
var toString$6 = uncurryThis$j({}.toString);
var stringSlice$4 = uncurryThis$j(''.slice);
var classofRaw$2 = function (it) {
  return stringSlice$4(toString$6(it), 8, -1);
};var uncurryThis$i = functionUncurryThis;
var fails$f = fails$i;
var classof$8 = classofRaw$2;
var $Object$4 = Object;
var split$3 = uncurryThis$i(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$f(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$8(it) == 'String' ? split$3(it, '') : $Object$4(it);
} : $Object$4;// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$4 = function (it) {
  return it === null || it === undefined;
};var isNullOrUndefined$3 = isNullOrUndefined$4;
var $TypeError$f = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$3 = function (it) {
  if (isNullOrUndefined$3(it)) throw $TypeError$f("Can't call method on " + it);
  return it;
};// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$2 = requireObjectCoercible$3;
var toIndexedObject$5 = function (it) {
  return IndexedObject$1(requireObjectCoercible$2(it));
};var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;
var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};var $documentAll$1 = documentAll_1;
var documentAll$1 = $documentAll$1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$m = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};var isCallable$l = isCallable$m;
var $documentAll = documentAll_1;
var documentAll = $documentAll.all;
var isObject$c = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$l(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$l(it);
};var global$i = global$j;
var isCallable$k = isCallable$m;
var aFunction = function (argument) {
  return isCallable$k(argument) ? argument : undefined;
};
var getBuiltIn$8 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$i[namespace]) : global$i[namespace] && global$i[namespace][method];
};var uncurryThis$h = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$h({}.isPrototypeOf);var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';var global$h = global$j;
var userAgent$3 = engineUserAgent;
var process$4 = global$h.process;
var Deno$1 = global$h.Deno;
var versions = process$4 && process$4.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent$3) {
  match = userAgent$3.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$3.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}
var engineV8Version = version;/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$2 = engineV8Version;
var fails$e = fails$i;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$e(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
  // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';var getBuiltIn$7 = getBuiltIn$8;
var isCallable$j = isCallable$m;
var isPrototypeOf$4 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var $Object$3 = Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$7('Symbol');
  return isCallable$j($Symbol) && isPrototypeOf$4($Symbol.prototype, $Object$3(it));
};var $String$4 = String;
var tryToString$5 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};var isCallable$i = isCallable$m;
var tryToString$4 = tryToString$5;
var $TypeError$e = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$7 = function (argument) {
  if (isCallable$i(argument)) return argument;
  throw $TypeError$e(tryToString$4(argument) + ' is not a function');
};var aCallable$6 = aCallable$7;
var isNullOrUndefined$2 = isNullOrUndefined$4;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$3 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$2(func) ? undefined : aCallable$6(func);
};var call$f = functionCall;
var isCallable$h = isCallable$m;
var isObject$b = isObject$c;
var $TypeError$d = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$h(fn = input.toString) && !isObject$b(val = call$f(fn, input))) return val;
  if (isCallable$h(fn = input.valueOf) && !isObject$b(val = call$f(fn, input))) return val;
  if (pref !== 'string' && isCallable$h(fn = input.toString) && !isObject$b(val = call$f(fn, input))) return val;
  throw $TypeError$d("Can't convert object to primitive value");
};var sharedExports = {};
var shared$3 = {
  get exports(){ return sharedExports; },
  set exports(v){ sharedExports = v; },
};var isPure = false;var global$g = global$j;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$7 = Object.defineProperty;
var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$7(global$g, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$g[key] = value;
  }
  return value;
};var global$f = global$j;
var defineGlobalProperty$2 = defineGlobalProperty$3;
var SHARED = '__core-js_shared__';
var store$3 = global$f[SHARED] || defineGlobalProperty$2(SHARED, {});
var sharedStore = store$3;var store$2 = sharedStore;
(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.27.2',
  mode: 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});var requireObjectCoercible$1 = requireObjectCoercible$3;
var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$6 = function (argument) {
  return $Object$2(requireObjectCoercible$1(argument));
};var uncurryThis$g = functionUncurryThis;
var toObject$5 = toObject$6;
var hasOwnProperty = uncurryThis$g({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$5(it), key);
};var uncurryThis$f = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$5 = uncurryThis$f(1.0.toString);
var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$5(++id + postfix, 36);
};var global$e = global$j;
var shared$2 = sharedExports;
var hasOwn$d = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var Symbol$1 = global$e.Symbol;
var WellKnownSymbolsStore = shared$2('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;
var wellKnownSymbol$i = function (name) {
  if (!hasOwn$d(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$d(Symbol$1, name) ? Symbol$1[name] : createWellKnownSymbol('Symbol.' + name);
  }
  return WellKnownSymbolsStore[name];
};var call$e = functionCall;
var isObject$a = isObject$c;
var isSymbol$1 = isSymbol$2;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$h = wellKnownSymbol$i;
var $TypeError$c = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$h('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$a(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$e(exoticToPrim, input, pref);
    if (!isObject$a(result) || isSymbol$1(result)) return result;
    throw $TypeError$c("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};var global$d = global$j;
var isObject$9 = isObject$c;
var document$3 = global$d.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$9(document$3) && isObject$9(document$3.createElement);
var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};var DESCRIPTORS$e = descriptors;
var fails$d = fails$i;
var createElement$1 = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$e && !fails$d(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});var DESCRIPTORS$d = descriptors;
var call$d = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$5 = createPropertyDescriptor$6;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$c = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$d ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {/* empty */}
  if (hasOwn$c(O, P)) return createPropertyDescriptor$5(!call$d(propertyIsEnumerableModule$1.f, O, P), O[P]);
};var objectDefineProperty = {};var DESCRIPTORS$c = descriptors;
var fails$c = fails$i;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$c && fails$c(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {/* empty */}, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});var isObject$8 = isObject$c;
var $String$3 = String;
var $TypeError$b = TypeError;

// `Assert: Type(argument) is Object`
var anObject$e = function (argument) {
  if (isObject$8(argument)) return argument;
  throw $TypeError$b($String$3(argument) + ' is not an object');
};var DESCRIPTORS$b = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$d = anObject$e;
var toPropertyKey$1 = toPropertyKey$3;
var $TypeError$a = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$b ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$d(O);
  P = toPropertyKey$1(P);
  anObject$d(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }
  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$d(O);
  P = toPropertyKey$1(P);
  anObject$d(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$a('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};var DESCRIPTORS$a = descriptors;
var definePropertyModule$5 = objectDefineProperty;
var createPropertyDescriptor$4 = createPropertyDescriptor$6;
var createNonEnumerableProperty$7 = DESCRIPTORS$a ? function (object, key, value) {
  return definePropertyModule$5.f(object, key, createPropertyDescriptor$4(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};var makeBuiltInExports = {};
var makeBuiltIn$3 = {
  get exports(){ return makeBuiltInExports; },
  set exports(v){ makeBuiltInExports = v; },
};var DESCRIPTORS$9 = descriptors;
var hasOwn$b = hasOwnProperty_1;
var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$9 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$b(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && function something() {/* empty */}.name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$9 || DESCRIPTORS$9 && getDescriptor(FunctionPrototype$1, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};var uncurryThis$e = functionUncurryThis;
var isCallable$g = isCallable$m;
var store$1 = sharedStore;
var functionToString = uncurryThis$e(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$g(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}
var inspectSource$3 = store$1.inspectSource;var global$c = global$j;
var isCallable$f = isCallable$m;
var WeakMap$1 = global$c.WeakMap;
var weakMapBasicDetection = isCallable$f(WeakMap$1) && /native code/.test(String(WeakMap$1));var shared$1 = sharedExports;
var uid = uid$2;
var keys = shared$1('keys');
var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};var hiddenKeys$4 = {};var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$b = global$j;
var isObject$7 = isObject$c;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$7;
var hasOwn$a = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$4 = global$b.TypeError;
var WeakMap = global$b.WeakMap;
var set$1, get, has;
var enforce = function (it) {
  return has(it) ? get(it) : set$1(it, {});
};
var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$7(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$4('Incompatible receiver, ' + TYPE + ' required');
    }
    return state;
  };
};
if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set$1 = function (it, metadata) {
    if (store.has(it)) throw TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$3[STATE] = true;
  set$1 = function (it, metadata) {
    if (hasOwn$a(it, STATE)) throw TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$6(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$a(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$a(it, STATE);
  };
}
var internalState = {
  set: set$1,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};var uncurryThis$d = functionUncurryThis;
var fails$b = fails$i;
var isCallable$e = isCallable$m;
var hasOwn$9 = hasOwnProperty_1;
var DESCRIPTORS$8 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$5 = internalState;
var enforceInternalState = InternalStateModule$5.enforce;
var getInternalState$2 = InternalStateModule$5.get;
var $String$2 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;
var stringSlice$3 = uncurryThis$d(''.slice);
var replace$4 = uncurryThis$d(''.replace);
var join$3 = uncurryThis$d([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS$8 && !fails$b(function () {
  return defineProperty$6(function () {/* empty */}, 'length', {
    value: 8
  }).length !== 8;
});
var TEMPLATE = String(String).split('String');
var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$3($String$2(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$4($String$2(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$9(value, 'name') || CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name) {
    if (DESCRIPTORS$8) defineProperty$6(value, 'name', {
      value: name,
      configurable: true
    });else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$9(options, 'arity') && value.length !== options.arity) {
    defineProperty$6(value, 'length', {
      value: options.arity
    });
  }
  try {
    if (options && hasOwn$9(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$8) defineProperty$6(value, 'prototype', {
        writable: false
      });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) {/* empty */}
  var state = enforceInternalState(value);
  if (!hasOwn$9(state, 'source')) {
    state.source = join$3(TEMPLATE, typeof name == 'string' ? name : '');
  }
  return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$e(this) && getInternalState$2(this).source || inspectSource$2(this);
}, 'toString');var isCallable$d = isCallable$m;
var definePropertyModule$4 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;
var defineBuiltIn$a = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$d(value)) makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];else if (O[key]) simple = true;
    } catch (error) {/* empty */}
    if (simple) O[key] = value;else definePropertyModule$4.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  }
  return O;
};var objectGetOwnPropertyNames = {};var ceil = Math.ceil;
var floor$3 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$3 : ceil)(n);
};var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$4 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;
var max$2 = Math.max;
var min$2 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$3 = function (index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
};var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;
var min$1 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$1 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};var toLength = toLength$1;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$6 = function (obj) {
  return toLength(obj.length);
};var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex$2 = toAbsoluteIndex$3;
var lengthOfArrayLike$5 = lengthOfArrayLike$6;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
    var length = lengthOfArrayLike$5(O);
    var index = toAbsoluteIndex$2(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};
var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};var uncurryThis$c = functionUncurryThis;
var hasOwn$8 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;
var push$3 = uncurryThis$c([].push);
var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$8(hiddenKeys$2, key) && hasOwn$8(O, key) && push$3(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$8(O, key = names[i++])) {
    ~indexOf(result, key) || push$3(result, key);
  }
  return result;
};// IE8- don't enum bug keys
var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};var objectGetOwnPropertySymbols = {};// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;var getBuiltIn$6 = getBuiltIn$8;
var uncurryThis$b = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$c = anObject$e;
var concat$1 = uncurryThis$b([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$6('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$c(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
};var hasOwn$7 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;
var copyConstructorProperties$2 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$3.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$7(target, key) && !(exceptions && hasOwn$7(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};var fails$a = fails$i;
var isCallable$c = isCallable$m;
var replacement = /#|\.prototype\./;
var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$c(detection) ? fails$a(detection) : !!detection;
};
var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';
var isForced_1 = isForced$2;var global$a = global$j;
var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$7;
var defineBuiltIn$9 = defineBuiltIn$a;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties$1 = copyConstructorProperties$2;
var isForced$1 = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$a;
  } else if (STATIC) {
    target = global$a[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$a[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$3(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties$1(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty$5(sourceProperty, 'sham', true);
    }
    defineBuiltIn$9(target, key, sourceProperty, options);
  }
};var NATIVE_BIND$1 = functionBindNative;
var FunctionPrototype = Function.prototype;
var apply$2 = FunctionPrototype.apply;
var call$c = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$c.bind(apply$2) : function () {
  return call$c.apply(apply$2, arguments);
});var isCallable$b = isCallable$m;
var $String$1 = String;
var $TypeError$9 = TypeError;
var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$b(argument)) return argument;
  throw $TypeError$9("Can't set " + $String$1(argument) + ' as a prototype');
};/* eslint-disable no-proto -- safe */
var uncurryThis$a = functionUncurryThis;
var anObject$b = anObject$e;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis$a(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {/* empty */}
  return function setPrototypeOf(O, proto) {
    anObject$b(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);var defineProperty$5 = objectDefineProperty.f;
var proxyAccessor$1 = function (Target, Source, key) {
  key in Target || defineProperty$5(Target, key, {
    configurable: true,
    get: function () {
      return Source[key];
    },
    set: function (it) {
      Source[key] = it;
    }
  });
};var isCallable$a = isCallable$m;
var isObject$6 = isObject$c;
var setPrototypeOf$3 = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
  // it can work only with native `setPrototypeOf`
  setPrototypeOf$3 &&
  // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  isCallable$a(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject$6(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf$3($this, NewTargetPrototype);
  return $this;
};var wellKnownSymbol$g = wellKnownSymbol$i;
var TO_STRING_TAG$3 = wellKnownSymbol$g('toStringTag');
var test = {};
test[TO_STRING_TAG$3] = 'z';
var toStringTagSupport = String(test) === '[object z]';var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$9 = isCallable$m;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$f = wellKnownSymbol$i;
var TO_STRING_TAG$2 = wellKnownSymbol$f('toStringTag');
var $Object$1 = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw$1(function () {
  return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {/* empty */}
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$7 = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$2)) == 'string' ? tag
  // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw$1(O)
  // ES3 arguments fallback
  : (result = classofRaw$1(O)) == 'Object' && isCallable$9(O.callee) ? 'Arguments' : result;
};var classof$6 = classof$7;
var $String = String;
var toString$4 = function (argument) {
  if (classof$6(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};var toString$3 = toString$4;
var normalizeStringArgument$1 = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$3(argument);
};var isObject$5 = isObject$c;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$7;

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
var installErrorCause$1 = function (O, options) {
  if (isObject$5(options) && 'cause' in options) {
    createNonEnumerableProperty$4(O, 'cause', options.cause);
  }
};var uncurryThis$9 = functionUncurryThis;
var $Error = Error;
var replace$3 = uncurryThis$9(''.replace);
var TEST = function (arg) {
  return String($Error(arg).stack);
}('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
var errorStackClear = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace$3(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  }
  return stack;
};var fails$9 = fails$i;
var createPropertyDescriptor$3 = createPropertyDescriptor$6;
var errorStackInstallable = !fails$9(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor$3(1, 7));
  return error.stack !== 7;
});var createNonEnumerableProperty$3 = createNonEnumerableProperty$7;
var clearErrorStack = errorStackClear;
var ERROR_STACK_INSTALLABLE = errorStackInstallable;

// non-standard V8
var captureStackTrace = Error.captureStackTrace;
var errorStackInstall = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C);else createNonEnumerableProperty$3(error, 'stack', clearErrorStack(stack, dropEntries));
  }
};var getBuiltIn$5 = getBuiltIn$8;
var hasOwn$6 = hasOwnProperty_1;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$7;
var isPrototypeOf$3 = objectIsPrototypeOf;
var setPrototypeOf$2 = objectSetPrototypeOf;
var copyConstructorProperties = copyConstructorProperties$2;
var proxyAccessor = proxyAccessor$1;
var inheritIfRequired = inheritIfRequired$1;
var normalizeStringArgument = normalizeStringArgument$1;
var installErrorCause = installErrorCause$1;
var installErrorStack = errorStackInstall;
var DESCRIPTORS$7 = descriptors;
var wrapErrorConstructorWithCause$1 = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn$5.apply(null, path);
  if (!OriginalError) return;
  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (hasOwn$6(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;
  if (!FORCED) return OriginalError;
  var BaseError = getBuiltIn$5('Error');
  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty$2(result, 'message', message);
    installErrorStack(result, WrappedError, result.stack, 2);
    if (this && isPrototypeOf$3(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });
  WrappedError.prototype = OriginalErrorPrototype;
  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf$2) setPrototypeOf$2(WrappedError, BaseError);else copyConstructorProperties(WrappedError, BaseError, {
      name: true
    });
  } else if (DESCRIPTORS$7 && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }
  copyConstructorProperties(WrappedError, OriginalError);
  try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty$2(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) {/* empty */}
  return WrappedError;
};/* eslint-disable no-unused-vars -- required for functions `.length` */
var $$b = _export;
var global$9 = global$j;
var apply$1 = functionApply;
var wrapErrorConstructorWithCause = wrapErrorConstructorWithCause$1;
var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = global$9[WEB_ASSEMBLY];
var FORCED$1 = Error('e', {
  cause: 7
}).cause !== 7;
var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED$1);
  $$b({
    global: true,
    constructor: true,
    arity: 1,
    forced: FORCED$1
  }, O);
};
var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED$1);
    $$b({
      target: WEB_ASSEMBLY,
      stat: true,
      constructor: true,
      arity: 1,
      forced: FORCED$1
    }, O);
  }
};

// https://tc39.es/ecma262/#sec-nativeerror
// https://github.com/tc39/proposal-error-cause
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) {
    return apply$1(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) {
    return apply$1(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) {
    return apply$1(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) {
    return apply$1(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) {
    return apply$1(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) {
    return apply$1(init, this, arguments);
  };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) {
    return apply$1(init, this, arguments);
  };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) {
    return apply$1(init, this, arguments);
  };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) {
    return apply$1(init, this, arguments);
  };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) {
    return apply$1(init, this, arguments);
  };
});var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$5 = classof$7;

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$5(this) + ']';
};var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineBuiltIn$8 = defineBuiltIn$a;
var toString$2 = objectToString;

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn$8(Object.prototype, 'toString', toString$2, {
    unsafe: true
  });
}var classof$4 = classofRaw$2;
var engineIsNode = typeof process != 'undefined' && classof$4(process) == 'process';var defineProperty$4 = objectDefineProperty.f;
var hasOwn$5 = hasOwnProperty_1;
var wellKnownSymbol$e = wellKnownSymbol$i;
var TO_STRING_TAG$1 = wellKnownSymbol$e('toStringTag');
var setToStringTag$5 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$5(target, TO_STRING_TAG$1)) {
    defineProperty$4(target, TO_STRING_TAG$1, {
      configurable: true,
      value: TAG
    });
  }
};var getBuiltIn$4 = getBuiltIn$8;
var definePropertyModule$2 = objectDefineProperty;
var wellKnownSymbol$d = wellKnownSymbol$i;
var DESCRIPTORS$6 = descriptors;
var SPECIES$4 = wellKnownSymbol$d('species');
var setSpecies$1 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$4(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule$2.f;
  if (DESCRIPTORS$6 && Constructor && !Constructor[SPECIES$4]) {
    defineProperty(Constructor, SPECIES$4, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};var isPrototypeOf$2 = objectIsPrototypeOf;
var $TypeError$8 = TypeError;
var anInstance$3 = function (it, Prototype) {
  if (isPrototypeOf$2(Prototype, it)) return it;
  throw $TypeError$8('Incorrect invocation');
};var uncurryThis$8 = functionUncurryThis;
var fails$8 = fails$i;
var isCallable$8 = isCallable$m;
var classof$3 = classof$7;
var getBuiltIn$3 = getBuiltIn$8;
var inspectSource$1 = inspectSource$3;
var noop = function () {/* empty */};
var empty = [];
var construct = getBuiltIn$3('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$8(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$8(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$8(argument)) return false;
  switch (classof$3(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};
isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$3 = !construct || fails$8(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;var isConstructor$2 = isConstructor$3;
var tryToString$3 = tryToString$5;
var $TypeError$7 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$1 = function (argument) {
  if (isConstructor$2(argument)) return argument;
  throw $TypeError$7(tryToString$3(argument) + ' is not a constructor');
};var anObject$a = anObject$e;
var aConstructor = aConstructor$1;
var isNullOrUndefined$1 = isNullOrUndefined$4;
var wellKnownSymbol$c = wellKnownSymbol$i;
var SPECIES$3 = wellKnownSymbol$c('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$a(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$1(S = anObject$a(C)[SPECIES$3]) ? defaultConstructor : aConstructor(S);
};var classofRaw = classofRaw$2;
var uncurryThis$7 = functionUncurryThis;
var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$7(fn);
};var uncurryThis$6 = functionUncurryThisClause;
var aCallable$5 = aCallable$7;
var NATIVE_BIND = functionBindNative;
var bind$7 = uncurryThis$6(uncurryThis$6.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$5(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$7(fn, that) : function /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};var getBuiltIn$2 = getBuiltIn$8;
var html$2 = getBuiltIn$2('document', 'documentElement');var uncurryThis$5 = functionUncurryThis;
var arraySlice$3 = uncurryThis$5([].slice);var $TypeError$6 = TypeError;
var validateArgumentsLength$3 = function (passed, required) {
  if (passed < required) throw $TypeError$6('Not enough arguments');
  return passed;
};var userAgent$2 = engineUserAgent;
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);var global$8 = global$j;
var apply = functionApply;
var bind$6 = functionBindContext;
var isCallable$7 = isCallable$m;
var hasOwn$4 = hasOwnProperty_1;
var fails$7 = fails$i;
var html$1 = html$2;
var arraySlice$2 = arraySlice$3;
var createElement = documentCreateElement$2;
var validateArgumentsLength$2 = validateArgumentsLength$3;
var IS_IOS$1 = engineIsIos;
var IS_NODE$3 = engineIsNode;
var set = global$8.setImmediate;
var clear = global$8.clearImmediate;
var process$3 = global$8.process;
var Dispatch = global$8.Dispatch;
var Function$1 = global$8.Function;
var MessageChannel = global$8.MessageChannel;
var String$1 = global$8.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;
fails$7(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global$8.location;
});
var run = function (id) {
  if (hasOwn$4(queue$2, id)) {
    var fn = queue$2[id];
    delete queue$2[id];
    fn();
  }
};
var runner = function (id) {
  return function () {
    run(id);
  };
};
var eventListener = function (event) {
  run(event.data);
};
var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  global$8.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength$2(arguments.length, 1);
    var fn = isCallable$7(handler) ? handler : Function$1(handler);
    var args = arraySlice$2(arguments, 1);
    queue$2[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue$2[id];
  };
  // Node.js 0.8-
  if (IS_NODE$3) {
    defer = function (id) {
      process$3.nextTick(runner(id));
    };
    // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
    // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind$6(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global$8.addEventListener && isCallable$7(global$8.postMessage) && !global$8.importScripts && $location && $location.protocol !== 'file:' && !fails$7(globalPostMessageDefer)) {
    defer = globalPostMessageDefer;
    global$8.addEventListener('message', eventListener, false);
    // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html$1.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html$1.removeChild(this);
        run(id);
      };
    };
    // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}
var task$1 = {
  set: set,
  clear: clear
};var Queue$2 = function () {
  this.head = null;
  this.tail = null;
};
Queue$2.prototype = {
  add: function (item) {
    var entry = {
      item: item,
      next: null
    };
    var tail = this.tail;
    if (tail) tail.next = entry;else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};
var queue$1 = Queue$2;var userAgent$1 = engineUserAgent;
var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != 'undefined';var userAgent = engineUserAgent;
var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);var global$7 = global$j;
var bind$5 = functionBindContext;
var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var Queue$1 = queue$1;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$2 = engineIsNode;
var MutationObserver = global$7.MutationObserver || global$7.WebKitMutationObserver;
var document$2 = global$7.document;
var process$2 = global$7.process;
var Promise$1 = global$7.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(global$7, 'queueMicrotask');
var microtask$1 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var notify$1, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask$1) {
  var queue = new Queue$1();
  var flush = function () {
    var parent, fn;
    if (IS_NODE$2 && (parent = process$2.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify$1();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, {
      characterData: true
    });
    notify$1 = function () {
      node.data = toggle = !toggle;
    };
    // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise$1;
    then = bind$5(promise.then, promise);
    notify$1 = function () {
      then(flush);
    };
    // Node.js without promises
  } else if (IS_NODE$2) {
    notify$1 = function () {
      process$2.nextTick(flush);
    };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessage
    // - onreadystatechange
    // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind$5(macrotask, global$7);
    notify$1 = function () {
      macrotask(flush);
    };
  }
  microtask$1 = function (fn) {
    if (!queue.head) notify$1();
    queue.add(fn);
  };
}
var microtask_1 = microtask$1;var hostReportErrors$1 = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  } catch (error) {/* empty */}
};var perform$3 = function (exec) {
  try {
    return {
      error: false,
      value: exec()
    };
  } catch (error) {
    return {
      error: true,
      value: error
    };
  }
};var global$6 = global$j;
var promiseNativeConstructor = global$6.Promise;/* global Deno -- Deno case */
var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';var IS_DENO$1 = engineIsDeno;
var IS_NODE$1 = engineIsNode;
var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1 && typeof window == 'object' && typeof document == 'object';var global$5 = global$j;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$6 = isCallable$m;
var isForced = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$b = wellKnownSymbol$i;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION$1 = engineV8Version;
NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES$2 = wellKnownSymbol$b('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$6(global$5.PromiseRejectionEvent);
var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION$1 === 66) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION$1 || V8_VERSION$1 < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor$3(function (resolve) {
      resolve(1);
    });
    var FakePromise = function (exec) {
      exec(function () {/* empty */}, function () {/* empty */});
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES$2] = FakePromise;
    SUBCLASSING = promise.then(function () {/* empty */}) instanceof FakePromise;
    if (!SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  }
  return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
});
var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING: SUBCLASSING
};var newPromiseCapability$2 = {};var aCallable$4 = aCallable$7;
var $TypeError$5 = TypeError;
var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError$5('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$4(resolve);
  this.reject = aCallable$4(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};var $$a = _export;
var IS_NODE = engineIsNode;
var global$4 = global$j;
var call$b = functionCall;
var defineBuiltIn$7 = defineBuiltIn$a;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag$4 = setToStringTag$5;
var setSpecies = setSpecies$1;
var aCallable$3 = aCallable$7;
var isCallable$5 = isCallable$m;
var isObject$4 = isObject$c;
var anInstance$2 = anInstance$3;
var speciesConstructor = speciesConstructor$1;
var task = task$1.set;
var microtask = microtask_1;
var hostReportErrors = hostReportErrors$1;
var perform$2 = perform$3;
var Queue = queue$1;
var InternalStateModule$4 = internalState;
var NativePromiseConstructor$2 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;
var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule$4.getterFor(PROMISE);
var setInternalState$4 = InternalStateModule$4.set;
var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
var PromiseConstructor = NativePromiseConstructor$2;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$3 = global$4.TypeError;
var document$1 = global$4.document;
var process$1 = global$4.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
var newGenericPromiseCapability = newPromiseCapability$1;
var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$4.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject$4(it) && isCallable$5(then = it.then) ? then : false;
};
var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError$3('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$b(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};
var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};
var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$4.dispatchEvent(event);
  } else event = {
    promise: promise,
    reason: reason
  };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$4['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};
var onUnhandled = function (state) {
  call$b(task, global$4, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$2(function () {
        if (IS_NODE) {
          process$1.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};
var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};
var onHandleUnhandled = function (state) {
  call$b(task, global$4, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process$1.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};
var bind$4 = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};
var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};
var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$3("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = {
          done: false
        };
        try {
          call$b(then, value, bind$4(internalResolve, wrapper, state), bind$4(internalReject, wrapper, state));
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({
      done: false
    }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance$2(this, PromisePrototype);
    aCallable$3(executor);
    call$b(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$4(internalResolve, state), bind$4(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState$4(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn$7(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$5(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$5(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process$1.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind$4(internalResolve, state);
    this.reject = bind$4(internalReject, state);
  };
  newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
  if (isCallable$5(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;
    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn$7(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call$b(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
      }, {
        unsafe: true
      });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype$1.constructor;
    } catch (error) {/* empty */}

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf$1) {
      setPrototypeOf$1(NativePromisePrototype$1, PromisePrototype);
    }
  }
}
$$a({
  global: true,
  constructor: true,
  wrap: true,
  forced: FORCED_PROMISE_CONSTRUCTOR$4
}, {
  Promise: PromiseConstructor
});
setToStringTag$4(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);var iterators = {};var wellKnownSymbol$a = wellKnownSymbol$i;
var Iterators$4 = iterators;
var ITERATOR$7 = wellKnownSymbol$a('iterator');
var ArrayPrototype$1 = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$2 = function (it) {
  return it !== undefined && (Iterators$4.Array === it || ArrayPrototype$1[ITERATOR$7] === it);
};var classof$2 = classof$7;
var getMethod$1 = getMethod$3;
var isNullOrUndefined = isNullOrUndefined$4;
var Iterators$3 = iterators;
var wellKnownSymbol$9 = wellKnownSymbol$i;
var ITERATOR$6 = wellKnownSymbol$9('iterator');
var getIteratorMethod$4 = function (it) {
  if (!isNullOrUndefined(it)) return getMethod$1(it, ITERATOR$6) || getMethod$1(it, '@@iterator') || Iterators$3[classof$2(it)];
};var call$a = functionCall;
var aCallable$2 = aCallable$7;
var anObject$9 = anObject$e;
var tryToString$2 = tryToString$5;
var getIteratorMethod$3 = getIteratorMethod$4;
var $TypeError$4 = TypeError;
var getIterator$3 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$3(argument) : usingIterator;
  if (aCallable$2(iteratorMethod)) return anObject$9(call$a(iteratorMethod, argument));
  throw $TypeError$4(tryToString$2(argument) + ' is not iterable');
};var call$9 = functionCall;
var anObject$8 = anObject$e;
var getMethod = getMethod$3;
var iteratorClose$2 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$8(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$9(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$8(innerResult);
  return value;
};var bind$3 = functionBindContext;
var call$8 = functionCall;
var anObject$7 = anObject$e;
var tryToString$1 = tryToString$5;
var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
var lengthOfArrayLike$4 = lengthOfArrayLike$6;
var isPrototypeOf$1 = objectIsPrototypeOf;
var getIterator$2 = getIterator$3;
var getIteratorMethod$2 = getIteratorMethod$4;
var iteratorClose$1 = iteratorClose$2;
var $TypeError$3 = TypeError;
var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};
var ResultPrototype = Result.prototype;
var iterate$2 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$3(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;
  var stop = function (condition) {
    if (iterator) iteratorClose$1(iterator, 'normal', condition);
    return new Result(true, condition);
  };
  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$7(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }
    return INTERRUPTED ? fn(value, stop) : fn(value);
  };
  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod$2(iterable);
    if (!iterFn) throw $TypeError$3(tryToString$1(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod$1(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$4(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$1(ResultPrototype, result)) return result;
      }
      return new Result(false);
    }
    iterator = getIterator$2(iterable, iterFn);
  }
  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$8(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose$1(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$1(ResultPrototype, result)) return result;
  }
  return new Result(false);
};var wellKnownSymbol$8 = wellKnownSymbol$i;
var ITERATOR$5 = wellKnownSymbol$8('iterator');
var SAFE_CLOSING = false;
try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return {
        done: !!called++
      };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR$5] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () {
    throw 2;
  });
} catch (error) {/* empty */}
var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$5] = function () {
      return {
        next: function () {
          return {
            done: ITERATION_SUPPORT = true
          };
        }
      };
    };
    exec(object);
  } catch (error) {/* empty */}
  return ITERATION_SUPPORT;
};var NativePromiseConstructor$1 = promiseNativeConstructor;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;
var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor$1.all(iterable).then(undefined, function () {/* empty */});
});var $$9 = _export;
var call$7 = functionCall;
var aCallable$1 = aCallable$7;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$1 = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$9({
  target: 'Promise',
  stat: true,
  forced: PROMISE_STATICS_INCORRECT_ITERATION$1
}, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var $promiseResolve = aCallable$1(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$1(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$7($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});var $$8 = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$1 = getBuiltIn$8;
var isCallable$4 = isCallable$m;
var defineBuiltIn$6 = defineBuiltIn$a;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$8({
  target: 'Promise',
  proto: true,
  forced: FORCED_PROMISE_CONSTRUCTOR$2,
  real: true
}, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable$4(NativePromiseConstructor)) {
  var method = getBuiltIn$1('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn$6(NativePromisePrototype, 'catch', method, {
      unsafe: true
    });
  }
}var $$7 = _export;
var call$6 = functionCall;
var aCallable = aCallable$7;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform = perform$3;
var iterate = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$7({
  target: 'Promise',
  stat: true,
  forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call$6($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});var $$6 = _export;
var call$5 = functionCall;
var newPromiseCapabilityModule = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$6({
  target: 'Promise',
  stat: true,
  forced: FORCED_PROMISE_CONSTRUCTOR$1
}, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call$5(capability.reject, undefined, r);
    return capability.promise;
  }
});var anObject$6 = anObject$e;
var isObject$3 = isObject$c;
var newPromiseCapability = newPromiseCapability$2;
var promiseResolve$1 = function (C, x) {
  anObject$6(C);
  if (isObject$3(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};var $$5 = _export;
var getBuiltIn = getBuiltIn$8;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;
getBuiltIn('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$$5({
  target: 'Promise',
  stat: true,
  forced: FORCED_PROMISE_CONSTRUCTOR
}, {
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});var classof$1 = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$2 = Array.isArray || function isArray(argument) {
  return classof$1(argument) == 'Array';
};var DESCRIPTORS$5 = descriptors;
var isArray$1 = isArray$2;
var $TypeError$2 = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$5 && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', {
      writable: false
    }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();
var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray$1(O) && !getOwnPropertyDescriptor$1(O, 'length').writable) {
    throw $TypeError$2('Cannot set read only .length');
  }
  return O.length = length;
} : function (O, length) {
  return O.length = length;
};var $TypeError$1 = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

var doesNotExceedSafeInteger$2 = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError$1('Maximum allowed index exceeded');
  return it;
};var $$4 = _export;
var toObject$4 = toObject$6;
var lengthOfArrayLike$3 = lengthOfArrayLike$6;
var setArrayLength$1 = arraySetLength;
var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;
var fails$6 = fails$i;
var INCORRECT_TO_LENGTH = fails$6(function () {
  return [].push.call({
    length: 0x100000000
  }, 1) !== 4294967297;
});

// V8 and Safari <= 15.4, FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', {
      writable: false
    }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};
var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$$4({
  target: 'Array',
  proto: true,
  arity: 1,
  forced: FORCED
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject$4(this);
    var len = lengthOfArrayLike$3(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger$1(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength$1(O, len);
    return len;
  }
});var objectDefineProperties = {};var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};var DESCRIPTORS$4 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$5 = anObject$e;
var toIndexedObject$1 = toIndexedObject$5;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$4 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$5(O);
  var props = toIndexedObject$1(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
  return O;
};/* global ActiveXObject -- old IE, WSH */
var anObject$4 = anObject$e;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$2;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$1 = sharedKey$3;
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$1('IE_PROTO');
var EmptyConstructor = function () {/* empty */};
var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$1('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {/* ignore */}
  NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};
hiddenKeys[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$4(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};var wellKnownSymbol$7 = wellKnownSymbol$i;
var create$2 = objectCreate;
var defineProperty$3 = objectDefineProperty.f;
var UNSCOPABLES = wellKnownSymbol$7('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty$3(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$2(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$1 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};var fails$5 = fails$i;
var correctPrototypeGetter = !fails$5(function () {
  function F() {/* empty */}
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});var hasOwn$3 = hasOwnProperty_1;
var isCallable$3 = isCallable$m;
var toObject$3 = toObject$6;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject$3(O);
  if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$3(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }
  return object instanceof $Object ? ObjectPrototype : null;
};var fails$4 = fails$i;
var isCallable$2 = isCallable$m;
var isObject$2 = isObject$c;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$5 = defineBuiltIn$a;
var wellKnownSymbol$6 = wellKnownSymbol$i;
var ITERATOR$4 = wellKnownSymbol$6('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}
var NEW_ITERATOR_PROTOTYPE = !isObject$2(IteratorPrototype$2) || fails$4(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$4].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$2(IteratorPrototype$2[ITERATOR$4])) {
  defineBuiltIn$5(IteratorPrototype$2, ITERATOR$4, function () {
    return this;
  });
}
var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$1 = objectCreate;
var createPropertyDescriptor$2 = createPropertyDescriptor$6;
var setToStringTag$3 = setToStringTag$5;
var Iterators$2 = iterators;
var returnThis$1 = function () {
  return this;
};
var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$1(IteratorPrototype$1, {
    next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next)
  });
  setToStringTag$3(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$2[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};var $$3 = _export;
var call$4 = functionCall;
var FunctionName = functionName;
var isCallable$1 = isCallable$m;
var createIteratorConstructor$1 = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag$2 = setToStringTag$5;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$7;
var defineBuiltIn$4 = defineBuiltIn$a;
var wellKnownSymbol$5 = wellKnownSymbol$i;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;
var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$3 = wellKnownSymbol$5('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';
var returnThis = function () {
  return this;
};
var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor$1(IteratorConstructor, NAME, next);
  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };
      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };
      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }
    return function () {
      return new IteratorConstructor(this);
    };
  };
  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$3] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$1(CurrentIteratorPrototype[ITERATOR$3])) {
          defineBuiltIn$4(CurrentIteratorPrototype, ITERATOR$3, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$1 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$1(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() {
        return call$4(nativeIterator, this);
      };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn$4(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$3({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$3] !== defaultIterator) {
    defineBuiltIn$4(IterablePrototype, ITERATOR$3, defaultIterator, {
      name: DEFAULT
    });
  }
  Iterators$1[NAME] = defaultIterator;
  return methods;
};// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$2 = function (value, done) {
  return {
    value: value,
    done: done
  };
};var toIndexedObject = toIndexedObject$5;
var addToUnscopables = addToUnscopables$1;
var Iterators = iterators;
var InternalStateModule$3 = internalState;
var defineProperty$2 = objectDefineProperty.f;
var defineIterator$1 = iteratorDefine;
var createIterResultObject$1 = createIterResultObject$2;
var DESCRIPTORS$3 = descriptors;
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$3 = InternalStateModule$3.set;
var getInternalState$1 = InternalStateModule$3.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator$1(Array, 'Array', function (iterated, kind) {
  setInternalState$3(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind
  });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject$1(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject$1(index, false);
  if (kind == 'values') return createIterResultObject$1(target[index], false);
  return createIterResultObject$1([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$3 && values.name !== 'values') try {
  defineProperty$2(values, 'name', {
    value: 'values'
  });
} catch (error) {/* empty */}var uncurryThis$4 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$1 = toString$4;
var requireObjectCoercible = requireObjectCoercible$3;
var charAt$3 = uncurryThis$4(''.charAt);
var charCodeAt$1 = uncurryThis$4(''.charCodeAt);
var stringSlice$2 = uncurryThis$4(''.slice);
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$1(requireObjectCoercible($this));
    var position = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt$1(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$3(S, position) : first : CONVERT_TO_STRING ? stringSlice$2(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};
var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};var charAt$2 = stringMultibyte.charAt;
var toString = toString$4;
var InternalStateModule$2 = internalState;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$2;
var STRING_ITERATOR = 'String Iterator';
var setInternalState$2 = InternalStateModule$2.set;
var getInternalState = InternalStateModule$2.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState$2(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt$2(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
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
  TouchList: 0
};// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = documentCreateElement$2;
var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;
var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;var global$3 = global$j;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty = createNonEnumerableProperty$7;
var wellKnownSymbol$4 = wellKnownSymbol$i;
var ITERATOR$2 = wellKnownSymbol$4('iterator');
var TO_STRING_TAG = wellKnownSymbol$4('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;
var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$2] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR$2, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$2] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};
for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$3[COLLECTION_NAME] && global$3[COLLECTION_NAME].prototype, COLLECTION_NAME);
}
handlePrototype(DOMTokenListPrototype, 'DOMTokenList');var fails$3 = fails$i;
var wellKnownSymbol$3 = wellKnownSymbol$i;
var IS_PURE = isPure;
var ITERATOR$1 = wellKnownSymbol$3('iterator');
var urlConstructorDetection = !fails$3(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return IS_PURE && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?a=1&c=3' || searchParams.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[ITERATOR$1]
  // throws in Edge
  || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
  // not punycoded in Edge
  || new URL('http://тест').host !== 'xn--e1aybc'
  // not escaped in Chrome 62-
  || new URL('http://a#б').hash !== '#%D0%B1'
  // fails in Chrome 66-
  || result !== 'a1c3'
  // throws in Safari
  || new URL('http://x', undefined).host !== 'x';
});var makeBuiltIn = makeBuiltInExports;
var defineProperty$1 = objectDefineProperty;
var defineBuiltInAccessor$1 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, {
    getter: true
  });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, {
    setter: true
  });
  return defineProperty$1.f(target, name, descriptor);
};var DESCRIPTORS$2 = descriptors;
var uncurryThis$3 = functionUncurryThis;
var call$3 = functionCall;
var fails$2 = fails$i;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$2 = toObject$6;
var IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis$3([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$2(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$2 && $assign({
    b: 1
  }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$2(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$2 || call$3(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  }
  return T;
} : $assign;var anObject$3 = anObject$e;
var iteratorClose = iteratorClose$2;

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject$3(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$6;
var createProperty$3 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor$1(0, value));else object[propertyKey] = value;
};var bind$2 = functionBindContext;
var call$2 = functionCall;
var toObject$1 = toObject$6;
var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
var isArrayIteratorMethod = isArrayIteratorMethod$2;
var isConstructor$1 = isConstructor$3;
var lengthOfArrayLike$2 = lengthOfArrayLike$6;
var createProperty$2 = createProperty$3;
var getIterator$1 = getIterator$3;
var getIteratorMethod$1 = getIteratorMethod$4;
var $Array$2 = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject$1(arrayLike);
  var IS_CONSTRUCTOR = isConstructor$1(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind$2(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod$1(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array$2 && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator$1(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (; !(step = call$2(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty$2(result, index, value);
    }
  } else {
    length = lengthOfArrayLike$2(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array$2(length);
    for (; length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty$2(result, index, value);
    }
  }
  result.length = index;
  return result;
};var toAbsoluteIndex$1 = toAbsoluteIndex$3;
var lengthOfArrayLike$1 = lengthOfArrayLike$6;
var createProperty$1 = createProperty$3;
var $Array$1 = Array;
var max$1 = Math.max;
var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$1(O);
  var k = toAbsoluteIndex$1(start, length);
  var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
  var result = $Array$1(max$1(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty$1(result, n, O[k]);
  result.length = n;
  return result;
};// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var uncurryThis$2 = functionUncurryThis;
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var $RangeError = RangeError;
var exec$1 = uncurryThis$2(regexSeparators.exec);
var floor$2 = Math.floor;
var fromCharCode = String.fromCharCode;
var charCodeAt = uncurryThis$2(''.charCodeAt);
var join$2 = uncurryThis$2([].join);
var push$2 = uncurryThis$2([].push);
var replace$2 = uncurryThis$2(''.replace);
var split$2 = uncurryThis$2(''.split);
var toLowerCase$1 = uncurryThis$2(''.toLowerCase);

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = charCodeAt(string, counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = charCodeAt(string, counter++);
      if ((extra & 0xFC00) == 0xDC00) {
        // Low surrogate.
        push$2(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        push$2(output, value);
        counter--;
      }
    } else {
      push$2(output, value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor$2(delta / damp) : delta >> 1;
  delta += floor$2(delta / numPoints);
  while (delta > baseMinusTMin * tMax >> 1) {
    delta = floor$2(delta / baseMinusTMin);
    k += base;
  }
  return floor$2(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      push$2(output, fromCharCode(currentValue));
    }
  }
  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    push$2(output, delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor$2((maxInt - delta) / handledCPCountPlusOne)) {
      throw $RangeError(OVERFLOW_ERROR);
    }
    delta += (m - n) * handledCPCountPlusOne;
    n = m;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw $RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        var k = base;
        while (true) {
          var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          push$2(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor$2(qMinusT / baseMinusT);
          k += base;
        }
        push$2(output, fromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        handledCPCount++;
      }
    }
    delta++;
    n++;
  }
  return join$2(output, '');
};
var stringPunycodeToAscii = function (input) {
  var encoded = [];
  var labels = split$2(replace$2(toLowerCase$1(input), regexSeparators, '\u002E'), '.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    push$2(encoded, exec$1(regexNonASCII, label) ? 'xn--' + encode(label) : label);
  }
  return join$2(encoded, '.');
};var defineBuiltIn$3 = defineBuiltIn$a;
var defineBuiltIns$1 = function (target, src, options) {
  for (var key in src) defineBuiltIn$3(target, key, src[key], options);
  return target;
};var arraySlice$1 = arraySliceSimple;
var floor$1 = Math.floor;
var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor$1(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(array, mergeSort(arraySlice$1(array, 0, middle), comparefn), mergeSort(arraySlice$1(array, middle), comparefn), comparefn);
};
var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;
  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  }
  return array;
};
var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;
  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
  }
  return array;
};
var arraySort$1 = mergeSort;// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $$2 = _export;
var global$2 = global$j;
var call$1 = functionCall;
var uncurryThis$1 = functionUncurryThis;
var DESCRIPTORS$1 = descriptors;
var USE_NATIVE_URL$1 = urlConstructorDetection;
var defineBuiltIn$2 = defineBuiltIn$a;
var defineBuiltIns = defineBuiltIns$1;
var setToStringTag$1 = setToStringTag$5;
var createIteratorConstructor = iteratorCreateConstructor;
var InternalStateModule$1 = internalState;
var anInstance$1 = anInstance$3;
var isCallable = isCallable$m;
var hasOwn$2 = hasOwnProperty_1;
var bind$1 = functionBindContext;
var classof = classof$7;
var anObject$2 = anObject$e;
var isObject$1 = isObject$c;
var $toString$2 = toString$4;
var create = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$6;
var getIterator = getIterator$3;
var getIteratorMethod = getIteratorMethod$4;
var validateArgumentsLength$1 = validateArgumentsLength$3;
var wellKnownSymbol$2 = wellKnownSymbol$i;
var arraySort = arraySort$1;
var ITERATOR = wellKnownSymbol$2('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR);
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuiltIn = function (name) {
  if (!DESCRIPTORS$1) return global$2[name];
  var descriptor = getOwnPropertyDescriptor(global$2, name);
  return descriptor && descriptor.value;
};
var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp$1 = global$2.RegExp;
var TypeError$2 = global$2.TypeError;
var decodeURIComponent = global$2.decodeURIComponent;
var encodeURIComponent$1 = global$2.encodeURIComponent;
var charAt$1 = uncurryThis$1(''.charAt);
var join$1 = uncurryThis$1([].join);
var push$1 = uncurryThis$1([].push);
var replace$1 = uncurryThis$1(''.replace);
var shift$1 = uncurryThis$1([].shift);
var splice = uncurryThis$1([].splice);
var split$1 = uncurryThis$1(''.split);
var stringSlice$1 = uncurryThis$1(''.slice);
var plus = /\+/g;
var sequences = Array(4);
var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp$1('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};
var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};
var deserialize = function (it) {
  var result = replace$1(it, plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = replace$1(result, percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};
var find = /[!'()~]|%20/g;
var replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};
var replacer = function (match) {
  return replacements[match];
};
var serialize = function (it) {
  return replace$1(encodeURIComponent$1(it), find, replacer);
};
var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState$1(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  }
  return step;
}, true);
var URLSearchParamsState = function (init) {
  this.entries = [];
  this.url = null;
  if (init !== undefined) {
    if (isObject$1(init)) this.parseObject(init);else this.parseQuery(typeof init == 'string' ? charAt$1(init, 0) === '?' ? stringSlice$1(init, 1) : init : $toString$2(init));
  }
};
URLSearchParamsState.prototype = {
  type: URL_SEARCH_PARAMS,
  bindURL: function (url) {
    this.url = url;
    this.update();
  },
  parseObject: function (object) {
    var iteratorMethod = getIteratorMethod(object);
    var iterator, next, step, entryIterator, entryNext, first, second;
    if (iteratorMethod) {
      iterator = getIterator(object, iteratorMethod);
      next = iterator.next;
      while (!(step = call$1(next, iterator)).done) {
        entryIterator = getIterator(anObject$2(step.value));
        entryNext = entryIterator.next;
        if ((first = call$1(entryNext, entryIterator)).done || (second = call$1(entryNext, entryIterator)).done || !call$1(entryNext, entryIterator).done) throw TypeError$2('Expected sequence with length 2');
        push$1(this.entries, {
          key: $toString$2(first.value),
          value: $toString$2(second.value)
        });
      }
    } else for (var key in object) if (hasOwn$2(object, key)) {
      push$1(this.entries, {
        key: key,
        value: $toString$2(object[key])
      });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var attributes = split$1(query, '&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = split$1(attribute, '=');
          push$1(this.entries, {
            key: deserialize(shift$1(entry)),
            value: deserialize(join$1(entry, '='))
          });
        }
      }
    }
  },
  serialize: function () {
    var entries = this.entries;
    var result = [];
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      push$1(result, serialize(entry.key) + '=' + serialize(entry.value));
    }
    return join$1(result, '&');
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) this.url.update();
  }
};

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams( /* init */
) {
  anInstance$1(this, URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  setInternalState$1(this, new URLSearchParamsState(init));
};
var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
defineBuiltIns(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength$1(arguments.length, 2);
    var state = getInternalParamsState(this);
    push$1(state.entries, {
      key: $toString$2(name),
      value: $toString$2(value)
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength$1(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = $toString$2(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) splice(entries, index, 1);else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength$1(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString$2(name);
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength$1(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString$2(name);
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) push$1(result, entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength$1(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString$2(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength$1(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = $toString$2(name);
    var val = $toString$2(value);
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) splice(entries, index--, 1);else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) push$1(entries, {
      key: key,
      value: val
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    arraySort(state.entries, function (a, b) {
      return a.key > b.key ? 1 : -1;
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind$1(callback, arguments.length > 1 ? arguments[1] : undefined);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, {
  enumerable: true
});

// `URLSearchParams.prototype[@@iterator]` method
defineBuiltIn$2(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, {
  name: 'entries'
});

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
defineBuiltIn$2(URLSearchParamsPrototype, 'toString', function toString() {
  return getInternalParamsState(this).serialize();
}, {
  enumerable: true
});
setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
$$2({
  global: true,
  constructor: true,
  forced: !USE_NATIVE_URL$1
}, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL$1 && isCallable(Headers)) {
  var headersHas = uncurryThis$1(HeadersPrototype.has);
  var headersSet = uncurryThis$1(HeadersPrototype.set);
  var wrapRequestOptions = function (init) {
    if (isObject$1(init)) {
      var body = init.body;
      var headers;
      if (classof(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create(init, {
          body: createPropertyDescriptor(0, $toString$2(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    }
    return init;
  };
  if (isCallable(nativeFetch)) {
    $$2({
      global: true,
      enumerable: true,
      dontCallGetSet: true,
      forced: true
    }, {
      fetch: function fetch(input /* , init */) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }
  if (isCallable(NativeRequest)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance$1(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };
    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;
    $$2({
      global: true,
      constructor: true,
      dontCallGetSet: true,
      forced: true
    }, {
      Request: RequestConstructor
    });
  }
}
var web_urlSearchParams_constructor = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $$1 = _export;
var DESCRIPTORS = descriptors;
var USE_NATIVE_URL = urlConstructorDetection;
var global$1 = global$j;
var bind = functionBindContext;
var uncurryThis = functionUncurryThis;
var defineBuiltIn$1 = defineBuiltIn$a;
var defineBuiltInAccessor = defineBuiltInAccessor$1;
var anInstance = anInstance$3;
var hasOwn$1 = hasOwnProperty_1;
var assign = objectAssign;
var arrayFrom = arrayFrom$1;
var arraySlice = arraySliceSimple;
var codeAt = stringMultibyte.codeAt;
var toASCII = stringPunycodeToAscii;
var $toString$1 = toString$4;
var setToStringTag = setToStringTag$5;
var validateArgumentsLength = validateArgumentsLength$3;
var URLSearchParamsModule = web_urlSearchParams_constructor;
var InternalStateModule = internalState;
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var NativeURL = global$1.URL;
var TypeError$1 = global$1.TypeError;
var parseInt = global$1.parseInt;
var floor = Math.floor;
var pow = Math.pow;
var charAt = uncurryThis(''.charAt);
var exec = uncurryThis(/./.exec);
var join = uncurryThis([].join);
var numberToString = uncurryThis(1.0.toString);
var pop = uncurryThis([].pop);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);
var toLowerCase = uncurryThis(''.toLowerCase);
var unshift = uncurryThis([].unshift);
var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';
var ALPHA = /[a-z]/i;
// eslint-disable-next-line regexp/no-obscure-range -- safe
var ALPHANUMERIC = /[\d+-.a-z]/i;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\da-f]+$/i;
/* eslint-disable regexp/no-control-character -- safe */
var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable regexp/no-control-character -- safe */
var EOF;

// https://url.spec.whatwg.org/#ipv4-number-parser
var parseIPv4 = function (input) {
  var parts = split(input, '.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.length--;
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && charAt(part, 0) == '0') {
      radix = exec(HEX_START, part) ? 16 : 8;
      part = stringSlice(part, radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!exec(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part)) return input;
      number = parseInt(part, radix);
    }
    push(numbers, number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = pop(numbers);
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// https://url.spec.whatwg.org/#concept-ipv6-parser
// eslint-disable-next-line max-statements -- TODO
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
  var chr = function () {
    return charAt(input, pointer);
  };
  if (chr() == ':') {
    if (charAt(input, 1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (chr()) {
    if (pieceIndex == 8) return;
    if (chr() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && exec(HEX, chr())) {
      value = value * 16 + parseInt(chr(), 16);
      pointer++;
      length++;
    }
    if (chr() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (chr()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (chr() == '.' && numbersSeen < 4) pointer++;else return;
        }
        if (!exec(DIGIT, chr())) return;
        while (exec(DIGIT, chr())) {
          number = parseInt(chr(), 10);
          if (ipv4Piece === null) ipv4Piece = number;else if (ipv4Piece == 0) return;else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (chr() == ':') {
      pointer++;
      if (!chr()) return;
    } else if (chr()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};
var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

// https://url.spec.whatwg.org/#host-serializing
var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      unshift(result, host % 256);
      host = floor(host / 256);
    }
    return join(result, '.');
    // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += numberToString(host[index], 16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  }
  return host;
};
var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1,
  '"': 1,
  '<': 1,
  '>': 1,
  '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1,
  '?': 1,
  '{': 1,
  '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1,
  ':': 1,
  ';': 1,
  '=': 1,
  '@': 1,
  '[': 1,
  '\\': 1,
  ']': 1,
  '^': 1,
  '|': 1
});
var percentEncode = function (chr, set) {
  var code = codeAt(chr, 0);
  return code > 0x20 && code < 0x7F && !hasOwn$1(set, chr) ? chr : encodeURIComponent(chr);
};

// https://url.spec.whatwg.org/#special-scheme
var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

// https://url.spec.whatwg.org/#windows-drive-letter
var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && exec(ALPHA, charAt(string, 0)) && ((second = charAt(string, 1)) == ':' || !normalized && second == '|');
};

// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (string.length == 2 || (third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#');
};

// https://url.spec.whatwg.org/#single-dot-path-segment
var isSingleDot = function (segment) {
  return segment === '.' || toLowerCase(segment) === '%2e';
};

// https://url.spec.whatwg.org/#double-dot-path-segment
var isDoubleDot = function (segment) {
  segment = toLowerCase(segment);
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};
var URLState = function (url, isBase, base) {
  var urlString = $toString$1(url);
  var baseState, failure, searchParams;
  if (isBase) {
    failure = this.parse(urlString);
    if (failure) throw TypeError$1(failure);
    this.searchParams = null;
  } else {
    if (base !== undefined) baseState = new URLState(base, true);
    failure = this.parse(urlString, null, baseState);
    if (failure) throw TypeError$1(failure);
    searchParams = getInternalSearchParamsState(new URLSearchParams$1());
    searchParams.bindURL(this);
    this.searchParams = searchParams;
  }
};
URLState.prototype = {
  type: 'URL',
  // https://url.spec.whatwg.org/#url-parsing
  // eslint-disable-next-line max-statements -- TODO
  parse: function (input, stateOverride, base) {
    var url = this;
    var state = stateOverride || SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, chr, bufferCodePoints, failure;
    input = $toString$1(input);
    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = replace(input, LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
    }
    input = replace(input, TAB_AND_NEW_LINE, '');
    codePoints = arrayFrom(input);
    while (pointer <= codePoints.length) {
      chr = codePoints[pointer];
      switch (state) {
        case SCHEME_START:
          if (chr && exec(ALPHA, chr)) {
            buffer += toLowerCase(chr);
            state = SCHEME;
          } else if (!stateOverride) {
            state = NO_SCHEME;
            continue;
          } else return INVALID_SCHEME;
          break;
        case SCHEME:
          if (chr && (exec(ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) {
            buffer += toLowerCase(chr);
          } else if (chr == ':') {
            if (stateOverride && (url.isSpecial() != hasOwn$1(specialSchemes, buffer) || buffer == 'file' && (url.includesCredentials() || url.port !== null) || url.scheme == 'file' && !url.host)) return;
            url.scheme = buffer;
            if (stateOverride) {
              if (url.isSpecial() && specialSchemes[url.scheme] == url.port) url.port = null;
              return;
            }
            buffer = '';
            if (url.scheme == 'file') {
              state = FILE;
            } else if (url.isSpecial() && base && base.scheme == url.scheme) {
              state = SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if (url.isSpecial()) {
              state = SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] == '/') {
              state = PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              push(url.path, '');
              state = CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = NO_SCHEME;
            pointer = 0;
            continue;
          } else return INVALID_SCHEME;
          break;
        case NO_SCHEME:
          if (!base || base.cannotBeABaseURL && chr != '#') return INVALID_SCHEME;
          if (base.cannotBeABaseURL && chr == '#') {
            url.scheme = base.scheme;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = FRAGMENT;
            break;
          }
          state = base.scheme == 'file' ? FILE : RELATIVE;
          continue;
        case SPECIAL_RELATIVE_OR_AUTHORITY:
          if (chr == '/' && codePoints[pointer + 1] == '/') {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = RELATIVE;
            continue;
          }
          break;
        case PATH_OR_AUTHORITY:
          if (chr == '/') {
            state = AUTHORITY;
            break;
          } else {
            state = PATH;
            continue;
          }
        case RELATIVE:
          url.scheme = base.scheme;
          if (chr == EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
          } else if (chr == '/' || chr == '\\' && url.isSpecial()) {
            state = RELATIVE_SLASH;
          } else if (chr == '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.path.length--;
            state = PATH;
            continue;
          }
          break;
        case RELATIVE_SLASH:
          if (url.isSpecial() && (chr == '/' || chr == '\\')) {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (chr == '/') {
            state = AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = PATH;
            continue;
          }
          break;
        case SPECIAL_AUTHORITY_SLASHES:
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (chr != '/' || charAt(buffer, pointer + 1) != '/') continue;
          pointer++;
          break;
        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (chr != '/' && chr != '\\') {
            state = AUTHORITY;
            continue;
          }
          break;
        case AUTHORITY:
          if (chr == '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = arrayFrom(buffer);
            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];
              if (codePoint == ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }
              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;else url.username += encodedCodePoints;
            }
            buffer = '';
          } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial()) {
            if (seenAt && buffer == '') return INVALID_AUTHORITY;
            pointer -= arrayFrom(buffer).length + 1;
            buffer = '';
            state = HOST;
          } else buffer += chr;
          break;
        case HOST:
        case HOSTNAME:
          if (stateOverride && url.scheme == 'file') {
            state = FILE_HOST;
            continue;
          } else if (chr == ':' && !seenBracket) {
            if (buffer == '') return INVALID_HOST;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PORT;
            if (stateOverride == HOSTNAME) return;
          } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial()) {
            if (url.isSpecial() && buffer == '') return INVALID_HOST;
            if (stateOverride && buffer == '' && (url.includesCredentials() || url.port !== null)) return;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (chr == '[') seenBracket = true;else if (chr == ']') seenBracket = false;
            buffer += chr;
          }
          break;
        case PORT:
          if (exec(DIGIT, chr)) {
            buffer += chr;
          } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial() || stateOverride) {
            if (buffer != '') {
              var port = parseInt(buffer, 10);
              if (port > 0xFFFF) return INVALID_PORT;
              url.port = url.isSpecial() && port === specialSchemes[url.scheme] ? null : port;
              buffer = '';
            }
            if (stateOverride) return;
            state = PATH_START;
            continue;
          } else return INVALID_PORT;
          break;
        case FILE:
          url.scheme = 'file';
          if (chr == '/' || chr == '\\') state = FILE_SLASH;else if (base && base.scheme == 'file') {
            if (chr == EOF) {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = base.query;
            } else if (chr == '?') {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.shortenPath();
              }
              state = PATH;
              continue;
            }
          } else {
            state = PATH;
            continue;
          }
          break;
        case FILE_SLASH:
          if (chr == '/' || chr == '\\') {
            state = FILE_HOST;
            break;
          }
          if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
            if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);else url.host = base.host;
          }
          state = PATH;
          continue;
        case FILE_HOST:
          if (chr == EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
            if (!stateOverride && isWindowsDriveLetter(buffer)) {
              state = PATH;
            } else if (buffer == '') {
              url.host = '';
              if (stateOverride) return;
              state = PATH_START;
            } else {
              failure = url.parseHost(buffer);
              if (failure) return failure;
              if (url.host == 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = PATH_START;
            }
            continue;
          } else buffer += chr;
          break;
        case PATH_START:
          if (url.isSpecial()) {
            state = PATH;
            if (chr != '/' && chr != '\\') continue;
          } else if (!stateOverride && chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            state = PATH;
            if (chr != '/') continue;
          }
          break;
        case PATH:
          if (chr == EOF || chr == '/' || chr == '\\' && url.isSpecial() || !stateOverride && (chr == '?' || chr == '#')) {
            if (isDoubleDot(buffer)) {
              url.shortenPath();
              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else if (isSingleDot(buffer)) {
              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else {
              if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                if (url.host) url.host = '';
                buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
              }

              push(url.path, buffer);
            }
            buffer = '';
            if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                shift(url.path);
              }
            }
            if (chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            }
          } else {
            buffer += percentEncode(chr, pathPercentEncodeSet);
          }
          break;
        case CANNOT_BE_A_BASE_URL_PATH:
          if (chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
          }
          break;
        case QUERY:
          if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            if (chr == "'" && url.isSpecial()) url.query += '%27';else if (chr == '#') url.query += '%23';else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
          }
          break;
        case FRAGMENT:
          if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
          break;
      }
      pointer++;
    }
  },
  // https://url.spec.whatwg.org/#host-parsing
  parseHost: function (input) {
    var result, codePoints, index;
    if (charAt(input, 0) == '[') {
      if (charAt(input, input.length - 1) != ']') return INVALID_HOST;
      result = parseIPv6(stringSlice(input, 1, -1));
      if (!result) return INVALID_HOST;
      this.host = result;
      // opaque host
    } else if (!this.isSpecial()) {
      if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
      result = '';
      codePoints = arrayFrom(input);
      for (index = 0; index < codePoints.length; index++) {
        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
      }
      this.host = result;
    } else {
      input = toASCII(input);
      if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
      result = parseIPv4(input);
      if (result === null) return INVALID_HOST;
      this.host = result;
    }
  },
  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || this.scheme == 'file';
  },
  // https://url.spec.whatwg.org/#include-credentials
  includesCredentials: function () {
    return this.username != '' || this.password != '';
  },
  // https://url.spec.whatwg.org/#is-special
  isSpecial: function () {
    return hasOwn$1(specialSchemes, this.scheme);
  },
  // https://url.spec.whatwg.org/#shorten-a-urls-path
  shortenPath: function () {
    var path = this.path;
    var pathSize = path.length;
    if (pathSize && (this.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
      path.length--;
    }
  },
  // https://url.spec.whatwg.org/#concept-url-serializer
  serialize: function () {
    var url = this;
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';
    if (host !== null) {
      output += '//';
      if (url.includesCredentials()) {
        output += username + (password ? ':' + password : '') + '@';
      }
      output += serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme == 'file') output += '//';
    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  },
  // https://url.spec.whatwg.org/#dom-url-href
  setHref: function (href) {
    var failure = this.parse(href);
    if (failure) throw TypeError$1(failure);
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-origin
  getOrigin: function () {
    var scheme = this.scheme;
    var port = this.port;
    if (scheme == 'blob') try {
      return new URLConstructor(scheme.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme == 'file' || !this.isSpecial()) return 'null';
    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
  },
  // https://url.spec.whatwg.org/#dom-url-protocol
  getProtocol: function () {
    return this.scheme + ':';
  },
  setProtocol: function (protocol) {
    this.parse($toString$1(protocol) + ':', SCHEME_START);
  },
  // https://url.spec.whatwg.org/#dom-url-username
  getUsername: function () {
    return this.username;
  },
  setUsername: function (username) {
    var codePoints = arrayFrom($toString$1(username));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.username = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-password
  getPassword: function () {
    return this.password;
  },
  setPassword: function (password) {
    var codePoints = arrayFrom($toString$1(password));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.password = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-host
  getHost: function () {
    var host = this.host;
    var port = this.port;
    return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
  },
  setHost: function (host) {
    if (this.cannotBeABaseURL) return;
    this.parse(host, HOST);
  },
  // https://url.spec.whatwg.org/#dom-url-hostname
  getHostname: function () {
    var host = this.host;
    return host === null ? '' : serializeHost(host);
  },
  setHostname: function (hostname) {
    if (this.cannotBeABaseURL) return;
    this.parse(hostname, HOSTNAME);
  },
  // https://url.spec.whatwg.org/#dom-url-port
  getPort: function () {
    var port = this.port;
    return port === null ? '' : $toString$1(port);
  },
  setPort: function (port) {
    if (this.cannotHaveUsernamePasswordPort()) return;
    port = $toString$1(port);
    if (port == '') this.port = null;else this.parse(port, PORT);
  },
  // https://url.spec.whatwg.org/#dom-url-pathname
  getPathname: function () {
    var path = this.path;
    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
  },
  setPathname: function (pathname) {
    if (this.cannotBeABaseURL) return;
    this.path = [];
    this.parse(pathname, PATH_START);
  },
  // https://url.spec.whatwg.org/#dom-url-search
  getSearch: function () {
    var query = this.query;
    return query ? '?' + query : '';
  },
  setSearch: function (search) {
    search = $toString$1(search);
    if (search == '') {
      this.query = null;
    } else {
      if ('?' == charAt(search, 0)) search = stringSlice(search, 1);
      this.query = '';
      this.parse(search, QUERY);
    }
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-searchparams
  getSearchParams: function () {
    return this.searchParams.facade;
  },
  // https://url.spec.whatwg.org/#dom-url-hash
  getHash: function () {
    var fragment = this.fragment;
    return fragment ? '#' + fragment : '';
  },
  setHash: function (hash) {
    hash = $toString$1(hash);
    if (hash == '') {
      this.fragment = null;
      return;
    }
    if ('#' == charAt(hash, 0)) hash = stringSlice(hash, 1);
    this.fragment = '';
    this.parse(hash, FRAGMENT);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLPrototype);
  var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
  var state = setInternalState(that, new URLState(url, false, base));
  if (!DESCRIPTORS) {
    that.href = state.serialize();
    that.origin = state.getOrigin();
    that.protocol = state.getProtocol();
    that.username = state.getUsername();
    that.password = state.getPassword();
    that.host = state.getHost();
    that.hostname = state.getHostname();
    that.port = state.getPort();
    that.pathname = state.getPathname();
    that.search = state.getSearch();
    that.searchParams = state.getSearchParams();
    that.hash = state.getHash();
  }
};
var URLPrototype = URLConstructor.prototype;
var accessorDescriptor = function (getter, setter) {
  return {
    get: function () {
      return getInternalURLState(this)[getter]();
    },
    set: setter && function (value) {
      return getInternalURLState(this)[setter](value);
    },
    configurable: true,
    enumerable: true
  };
};
if (DESCRIPTORS) {
  // `URL.prototype.href` accessors pair
  // https://url.spec.whatwg.org/#dom-url-href
  defineBuiltInAccessor(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
  // `URL.prototype.origin` getter
  // https://url.spec.whatwg.org/#dom-url-origin
  defineBuiltInAccessor(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
  // `URL.prototype.protocol` accessors pair
  // https://url.spec.whatwg.org/#dom-url-protocol
  defineBuiltInAccessor(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
  // `URL.prototype.username` accessors pair
  // https://url.spec.whatwg.org/#dom-url-username
  defineBuiltInAccessor(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
  // `URL.prototype.password` accessors pair
  // https://url.spec.whatwg.org/#dom-url-password
  defineBuiltInAccessor(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
  // `URL.prototype.host` accessors pair
  // https://url.spec.whatwg.org/#dom-url-host
  defineBuiltInAccessor(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
  // `URL.prototype.hostname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hostname
  defineBuiltInAccessor(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
  // `URL.prototype.port` accessors pair
  // https://url.spec.whatwg.org/#dom-url-port
  defineBuiltInAccessor(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
  // `URL.prototype.pathname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-pathname
  defineBuiltInAccessor(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
  // `URL.prototype.search` accessors pair
  // https://url.spec.whatwg.org/#dom-url-search
  defineBuiltInAccessor(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
  // `URL.prototype.searchParams` getter
  // https://url.spec.whatwg.org/#dom-url-searchparams
  defineBuiltInAccessor(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
  // `URL.prototype.hash` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hash
  defineBuiltInAccessor(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
defineBuiltIn$1(URLPrototype, 'toJSON', function toJSON() {
  return getInternalURLState(this).serialize();
}, {
  enumerable: true
});

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
defineBuiltIn$1(URLPrototype, 'toString', function toString() {
  return getInternalURLState(this).serialize();
}, {
  enumerable: true
});
if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  if (nativeCreateObjectURL) defineBuiltIn$1(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  if (nativeRevokeObjectURL) defineBuiltIn$1(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
}
setToStringTag(URLConstructor, 'URL');
$$1({
  global: true,
  constructor: true,
  forced: !USE_NATIVE_URL,
  sham: !DESCRIPTORS
}, {
  URL: URLConstructor
});var anObject$1 = anObject$e;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags = function () {
  var that = anObject$1(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};var call = functionCall;
var hasOwn = hasOwnProperty_1;
var isPrototypeOf = objectIsPrototypeOf;
var regExpFlags = regexpFlags;
var RegExpPrototype$1 = RegExp.prototype;
var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$1) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype$1, R) ? call(regExpFlags, R) : flags;
};var PROPER_FUNCTION_NAME = functionName.PROPER;
var defineBuiltIn = defineBuiltIn$a;
var anObject = anObject$e;
var $toString = toString$4;
var fails$1 = fails$i;
var getRegExpFlags = regexpGetFlags;
var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];
var NOT_GENERIC = fails$1(function () {
  return nativeToString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
});
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, {
    unsafe: true
  });
}var isArray = isArray$2;
var isConstructor = isConstructor$3;
var isObject = isObject$c;
var wellKnownSymbol$1 = wellKnownSymbol$i;
var SPECIES$1 = wellKnownSymbol$1('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  }
  return C === undefined ? $Array : C;
};var arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$1 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};var tryToString = tryToString$5;
var $TypeError = TypeError;
var deletePropertyOrThrow$1 = function (O, P) {
  if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};var fails = fails$i;
var wellKnownSymbol = wellKnownSymbol$i;
var V8_VERSION = engineV8Version;
var SPECIES = wellKnownSymbol('species');
var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return {
        foo: 1
      };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};var $ = _export;
var toObject = toObject$6;
var toAbsoluteIndex = toAbsoluteIndex$3;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var lengthOfArrayLike = lengthOfArrayLike$6;
var setArrayLength = arraySetLength;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;
var arraySpeciesCreate = arraySpeciesCreate$1;
var createProperty = createProperty$3;
var deletePropertyOrThrow = deletePropertyOrThrow$1;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var max = Math.max;
var min = Math.min;

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];else deletePropertyOrThrow(O, to);
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];else deletePropertyOrThrow(O, to);
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    setArrayLength(O, len - actualDeleteCount + insertCount);
    return A;
  }
});if (!window && (typeof process === "undefined" ? "undefined" : _typeof(process)) !== undefined) {
  throw Error("BMap-loader should run in broswer env, system detected that your project is running on node.");
}
if (!window) {
  throw Error("cannot access the window object");
}
var BMAP_API_HOST = "https://api.map.baidu.com/api";
var LOADER_STATE = {
  NOT_LOAD: 1 << 1,
  LOADING: 1 << 2,
  LOADED: 1 << 3,
  FAILED: 1 << 4
};
function loader(params) {
  var v = params.v,
    type = params.type,
    ak = params.ak;
  if (!v) return Promise.reject("please set bmap version");
  if (!ak) return Promise.reject("please provide your bmap webapp ak");
  if (type && type !== "webgl") return Promise.reject("type value could only be webgl");
  if (type === "webgl" && v !== "1.0") return Promise.reject("JavaScript API GL version can only be 1.0");
  return type === "webgl" ? installGLBMap(params) : installBMap(params);
}
var installGLState = LOADER_STATE.NOT_LOAD;
var pendingGLTask = [];
function installGLBMap(params) {
  return new Promise(function (resolve, rejected) {
    if (installGLState & LOADER_STATE.LOADED) resolve(BMapGL);else {
      if (installGLState & LOADER_STATE.LOADING) {
        pendingGLTask.push(resolve);
      } else {
        var mapUrl = new URL(BMAP_API_HOST);
        var ak = params.ak,
          v = params.v,
          type = params.type;
        mapUrl.searchParams.set("ak", ak);
        mapUrl.searchParams.set("v", v);
        mapUrl.searchParams.set("type", type);
        mapUrl.searchParams.set("callback", "__BMAPGL_LOADED_CALLBACK");
        var script = document.createElement("script");
        script.src = mapUrl.toString();
        installGLState = LOADER_STATE.LOADING;
        document.body.appendChild(script);
        script.addEventListener("error", function (e) {
          installGLState = LOADER_STATE.FAILED;
          rejected(e.message);
        });
        window.__BMAPGL_LOADED_CALLBACK = function () {
          installGLBMap = LOADER_STATE.LOADED;
          resolve(BMapGL);
          pendingGLTask.forEach(function (resolve) {
            return resolve(BMapGL);
          });
          pendingGLTask.splice(0);
        };
      }
    }
  });
}
var pendingDefaultTask = [];
function installBMap(params) {
  return new Promise(function (resolve, rejected) {
    {
      var mapUrl = new URL(BMAP_API_HOST);
      var ak = params.ak,
        v = params.v;
      mapUrl.searchParams.set("ak", ak);
      mapUrl.searchParams.set("v", v);
      mapUrl.searchParams.set("callback", "__BMAP_LOADED_CALLBACK");
      var script = document.createElement("script");
      script.src = mapUrl.toString();
      installGLState = LOADER_STATE.LOADING;
      document.body.appendChild(script);
      script.addEventListener("error", function (e) {
        installGLState = LOADER_STATE.FAILED;
        rejected(e.message);
      });
      window.__BMAP_LOADED_CALLBACK = function () {
        installGLBMap = LOADER_STATE.LOADED;
        resolve(BMap);
        pendingDefaultTask.forEach(function (resolve) {
          return resolve(BMap);
        });
        pendingDefaultTask.splice(0);
      };
    }
  });
}export{loader as default};