(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ArrayInput"] = factory(require("react"));
	else
		root["ArrayInput"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(8)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(11)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(2);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _coloredbutton = __webpack_require__(12);

var _coloredbutton2 = _interopRequireDefault(_coloredbutton);

var _textfield = __webpack_require__(13);

var _textfield2 = _interopRequireDefault(_textfield);

var _lookupfield = __webpack_require__(14);

var _lookupfield2 = _interopRequireDefault(_lookupfield);

var _reactFontawesome = __webpack_require__(15);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _react_tags = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayInput = function (_React$Component) {
  _inherits(ArrayInput, _React$Component);

  function ArrayInput(props) {
    _classCallCheck(this, ArrayInput);

    var _this = _possibleConstructorReturn(this, (ArrayInput.__proto__ || Object.getPrototypeOf(ArrayInput)).call(this, props));

    _this.state = {
      displayText: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleLookupEnter = _this.handleLookupEnter.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.addItem = _this.addItem.bind(_this);
    _this.removeItem = _this.removeItem.bind(_this);
    return _this;
  }
  //index of item in array
  //newValue value of item in array
  //selectedIndex if LookupField, index of selected item in popup menu


  _createClass(ArrayInput, [{
    key: 'handleChange',
    value: function handleChange(newValue, selectedIndex) {
      var self = this;
      return new Promise(function (res, rej) {
        if (newValue !== null) {
          self.setState({ displayText: newValue }, function () {
            res();
          });
        } else {
          self.setState({ displayText: self.props.dataSource[selectedIndex] }, function () {
            res();
          });
        }
      });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      if (this.props.onBlur) {
        this.props.onBlur();
      }
    }
  }, {
    key: 'handleLookupEnter',
    value: function handleLookupEnter(newValue, selectedIndex) {
      var self = this;
      this.handleChange(newValue, selectedIndex).then(function () {
        self.addItem();
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'addItem',
    value: function addItem() {
      if (this.state.displayText != '') {
        this.props.onChange(-1, this.state.displayText);
        this.setState({ displayText: '' });
      }
    }
  }, {
    key: 'removeItem',
    value: function removeItem(item) {
      var index = this.props.value.indexOf(item);
      this.props.onChange(-2, index);
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      var isMobile = !window.matchMedia('(min-width : 500px)').matches;
      var styles = {
        main: {
          'position': 'relative',
          'margin': '10px 0px'
        },
        inputs: {
          display: 'inline-block',
          width: 'calc(100% - 79px)',
          verticalAlign: 'bottom',
          margin: '0px'
        },
        lookupTextField: {
          margin: '0px'
        },
        pseudo: {
          borderRadius: '2px 0px 0px 2px'
        },
        addBtn: {
          lineHeight: '31.5px',
          padding: '7px 24px',
          display: 'inline-block',
          verticalAlign: 'bottom',
          borderRadius: '0px 2px 2px 0px'
        }
      };
      styles.delBtn = Object.assign({}, styles.delBtn, this.props.delStyle);

      return _react2.default.createElement(
        'div',
        { style: styles.main },
        self.props.lookup ? _react2.default.createElement(_lookupfield2.default, { label: self.props.label,
          inputStyle: self.props.inputStyle,
          style: styles.inputs,
          textFieldStyle: styles.lookupTextField,
          pseudoStyle: styles.pseudo,
          topLabel: self.props.topLabel,
          fullWidth: self.props.fullWidth,
          onBlur: self.handleBlur,
          value: self.state.displayText,
          onEnter: self.handleLookupEnter,
          onSelect: self.handleChange,
          onSearch: self.props.onSearch.bind(self),
          dataSource: self.props.dataSource }) : _react2.default.createElement(_textfield2.default, { label: self.props.label,
          inputStyle: self.props.inputStyle,
          style: styles.inputs,
          pseudoStyle: styles.pseudo,
          topLabel: self.props.topLabel,
          fullWidth: self.props.fullWidth,
          onBlur: self.handleBlur,
          value: self.state.displayText,
          onEnter: self.addItem,
          onChange: self.handleChange }),
        _react2.default.createElement(_coloredbutton2.default, { label: 'Add',
          primary: true,
          style: styles.addBtn,
          onTouchTap: self.addItem }),
        this.props.template ? this.props.value.map(this.props.template) : _react2.default.createElement(_react_tags.TagList, { items: self.props.value,
          bgColor: 'rgba(255,255,255,1)',
          onRemove: self.props.noDelete ? null : self.removeItem })
      );
    }
  }]);

  return ArrayInput;
}(_react2.default.Component);

;

ArrayInput.propTypes = {
  fullWidth: _propTypes2.default.bool,
  noDelete: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  topLabel: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  value: _propTypes2.default.array,
  lookup: _propTypes2.default.bool,
  //template arguments:
  //item : generic item object of which it is an array
  //itemIndex : index of item in array
  //callback to call when value changes (takes newValue)
  //template returns jsx dom tree
  template: _propTypes2.default.func,
  onSearch: _propTypes2.default.func,
  dataSource: _propTypes2.default.array,
  delStyle: _propTypes2.default.object
};
exports.default = ArrayInput;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(3);
var warning = __webpack_require__(6);
var assign = __webpack_require__(9);

var ReactPropTypesSecret = __webpack_require__(4);
var checkPropTypes = __webpack_require__(10);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(3);
  var warning = __webpack_require__(6);
  var ReactPropTypesSecret = __webpack_require__(4);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(3);
var ReactPropTypesSecret = __webpack_require__(4);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ColoredButton"] = factory(require("react"));
	else
		root["ColoredButton"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/process/browser.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n * \n */\n\nfunction makeEmptyFunction(arg) {\n  return function () {\n    return arg;\n  };\n}\n\n/**\n * This function accepts and discards inputs; it has no side effects. This is\n * primarily useful idiomatically for overridable function endpoints which\n * always need to be callable, since JS lacks a null-call idiom ala Cocoa.\n */\nvar emptyFunction = function emptyFunction() {};\n\nemptyFunction.thatReturns = makeEmptyFunction;\nemptyFunction.thatReturnsFalse = makeEmptyFunction(false);\nemptyFunction.thatReturnsTrue = makeEmptyFunction(true);\nemptyFunction.thatReturnsNull = makeEmptyFunction(null);\nemptyFunction.thatReturnsThis = function () {\n  return this;\n};\nemptyFunction.thatReturnsArgument = function (arg) {\n  return arg;\n};\n\nmodule.exports = emptyFunction;\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/fbjs/lib/emptyFunction.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/emptyFunction.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar validateFormat = function validateFormat(format) {};\n\nif (process.env.NODE_ENV !== 'production') {\n  validateFormat = function validateFormat(format) {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  };\n}\n\nfunction invariant(condition, format, a, b, c, d, e, f) {\n  validateFormat(format);\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(format.replace(/%s/g, function () {\n        return args[argIndex++];\n      }));\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n}\n\nmodule.exports = invariant;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/fbjs/lib/invariant.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/invariant.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\n\nmodule.exports = ReactPropTypesSecret;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/prop-types/lib/ReactPropTypesSecret.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/prop-types/lib/ReactPropTypesSecret.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n\n\nvar emptyFunction = __webpack_require__(1);\n\n/**\n * Similar to invariant but only logs a warning if the condition is not met.\n * This can be used to log issues in development environments in critical\n * paths. Removing the logging code for production environments will keep the\n * same logic and follow the same code paths.\n */\n\nvar warning = emptyFunction;\n\nif (process.env.NODE_ENV !== 'production') {\n  var printWarning = function printWarning(format) {\n    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    var argIndex = 0;\n    var message = 'Warning: ' + format.replace(/%s/g, function () {\n      return args[argIndex++];\n    });\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n\n  warning = function warning(condition, format) {\n    if (format === undefined) {\n      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');\n    }\n\n    if (format.indexOf('Failed Composite propType: ') === 0) {\n      return; // Ignore CompositeComponent proptype check.\n    }\n\n    if (!condition) {\n      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {\n        args[_key2 - 2] = arguments[_key2];\n      }\n\n      printWarning.apply(undefined, [format].concat(args));\n    }\n  };\n}\n\nmodule.exports = warning;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/fbjs/lib/warning.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/warning.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _palette = __webpack_require__(7);\n\nvar _palette2 = _interopRequireDefault(_palette);\n\nvar _propTypes = __webpack_require__(8);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ColoredButton = function (_React$Component) {\n  _inherits(ColoredButton, _React$Component);\n\n  function ColoredButton(props) {\n    _classCallCheck(this, ColoredButton);\n\n    var _this = _possibleConstructorReturn(this, (ColoredButton.__proto__ || Object.getPrototypeOf(ColoredButton)).call(this, props));\n\n    _this.state = {\n      hovered: false\n    };\n    _this.hoverIn = _this.hoverIn.bind(_this);\n    _this.hoverOut = _this.hoverOut.bind(_this);\n    _this.handleTouchTap = _this.handleTouchTap.bind(_this);\n    _this.handleEnter = _this.handleEnter.bind(_this);\n    return _this;\n  }\n\n  _createClass(ColoredButton, [{\n    key: 'hoverIn',\n    value: function hoverIn() {\n      this.setState({\n        hovered: true\n      });\n    }\n  }, {\n    key: 'hoverOut',\n    value: function hoverOut() {\n      this.setState({\n        hovered: false\n      });\n    }\n  }, {\n    key: 'handleTouchTap',\n    value: function handleTouchTap() {\n      if (!this.props.disabled) {\n        this.props.onTouchTap();\n      }\n    }\n  }, {\n    key: 'handleEnter',\n    value: function handleEnter(evt) {\n      if (this.props.default && evt.key === 'Enter') {\n        this.handleTouchTap();\n      }\n    }\n  }, {\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(props) {\n      if (props.label && props.label !== this.state.label) {\n        this.setState({ label: props.label });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var styles = {\n        main: {\n          'display': 'inline-block',\n          'textAlign': 'center',\n          'borderRadius': '4px',\n          border: '1px solid ' + (this.props.primary ? _palette2.default.yellow : this.props.secondary ? _palette2.default.blue : this.props.tertiary ? _palette2.default.green : _palette2.default.greyLight),\n          'background': this.props.disabled ? _palette2.default.greyLight : this.props.primary ? this.state.hovered ? _palette2.default.yellowDark : 'linear-gradient(45deg, ' + _palette2.default.yellow + ' 0%, ' + _palette2.default.yellowLight + ' 100%)' : this.props.secondary ? this.state.hovered ? _palette2.default.blueDark : 'linear-gradient(45deg, ' + _palette2.default.blue + ' 0%, ' + _palette2.default.blueLight + ' 100%)' : this.props.tertiary ? this.state.hovered ? _palette2.default.greenDark : 'linear-gradient(45deg, ' + _palette2.default.green + ' 0%, ' + _palette2.default.greenLight + ' 100%)' : _palette2.default.whiteReal,\n          'color': this.props.primary || this.props.secondary || this.props.tertiary ? _palette2.default.whiteReal : _palette2.default.black,\n          'cursor': this.props.disabled ? 'not-allowed' : 'pointer',\n          'padding': this.props.large ? '13px 4.5vw' : this.props.small ? '2px 10px' : '7px 14px',\n          'fontSize': this.props.large ? '20pt' : this.props.small ? '10pt' : '12pt',\n          'verticalAlign': this.props.small ? 'top' : null,\n          outline: 'none',\n          'transition': this.props.primary || this.props.secondary || this.props.tertiary ? null : 'all 300ms ease-in-out'\n        }\n      };\n      styles.main = Object.assign({}, styles.main, this.props.style);\n      if (this.state.hovered && this.props.hoverColor && !this.props.disabled) {\n        styles.main.background = this.props.hoverColor;\n        //set text color based on brightness of background \n        if (this.props.hoverColor.indexOf('#') === 0) {\n          var colorVal = parseInt(this.props.hoverColor.substring(1), 16);\n          var r = colorVal >> 16 & 0xff;\n          var g = colorVal >> 8 & 0xff;\n          var b = colorVal >> 0 & 0xff;\n          if (0.299 * r + 0.587 * g + 0.114 * b < 140) {\n            styles.main.color = _palette2.default.whiteReal;\n          } else {\n            styles.main.color = _palette2.default.black;\n          }\n        }\n      }\n      return _react2.default.createElement(\n        'div',\n        { onMouseEnter: this.hoverIn,\n          tabIndex: this.props.default ? 1 : null,\n          onFocus: this.hoverIn,\n          onBlur: this.hoverOut,\n          onMouseUp: this.hoverOut,\n          onMouseLeave: this.hoverOut,\n          onKeyPress: this.handleEnter,\n          onClick: this.handleTouchTap,\n          style: styles.main },\n        this.props.label\n      );\n    }\n  }]);\n\n  return ColoredButton;\n}(_react2.default.Component);\n\n;\n\nColoredButton.propTypes = {\n  disabled: _propTypes2.default.bool,\n  onTouchTap: _propTypes2.default.func,\n  default: _propTypes2.default.func,\n  label: _propTypes2.default.node,\n  primary: _propTypes2.default.bool,\n  secondary: _propTypes2.default.bool,\n  tertiary: _propTypes2.default.bool,\n  large: _propTypes2.default.bool,\n  small: _propTypes2.default.bool,\n  hoverColor: _propTypes2.default.string,\n  style: _propTypes2.default.object\n};\nexports.default = ColoredButton;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_6__;\n\n//////////////////\n// WEBPACK FOOTER\n// external {\"root\":\"React\",\"commonjs2\":\"react\",\"commonjs\":\"react\",\"amd\":\"react\"}\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar palette = {\n  red: '#ff5353',\n  redDark: '#e43e3e',\n  errorOrange: '#f7814c',\n  blue: '#344164',\n  blueDark: '#283760',\n  blueLight: '#526490',\n  blueDarkTransparent: 'rgba(40, 55, 96, 0.83)',\n  linkedInBlueDark: '#0077B5',\n  linkedInBlueLight: '#54A4CD',\n  linkedInBlueHover: '#006BA3',\n  green: '#2EBE71',\n  greenDark: '#29AC66',\n  greenLight: '#9FE6BA',\n  yellow: '#FFB200',\n  yellowDark: '#E9A300',\n  yellowLight: '#FCC700',\n  whiteReal: '#FFFFFF',\n  white: '#FAFAF9',\n  whiteDarker: '#F6F6F6',\n  grey: '#3F454A',\n  greyTransparent: 'rgba(45,51,56,0.95)',\n  greyMedium: '#797979',\n  greyLight: '#AEAEAE',\n  greyLightTransparent: 'rgba(174, 174, 174, 0.58)',\n  black: '#000000',\n  realWhite: '#FFFFFF'\n};\n\nmodule.exports = palette;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/palette.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/palette.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nif (process.env.NODE_ENV !== 'production') {\n  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&\n    Symbol.for &&\n    Symbol.for('react.element')) ||\n    0xeac7;\n\n  var isValidElement = function(object) {\n    return typeof object === 'object' &&\n      object !== null &&\n      object.$$typeof === REACT_ELEMENT_TYPE;\n  };\n\n  // By explicitly using `prop-types` you are opting into new development behavior.\n  // http://fb.me/prop-types-in-prod\n  var throwOnDirectAccess = true;\n  module.exports = __webpack_require__(9)(isValidElement, throwOnDirectAccess);\n} else {\n  // By explicitly using `prop-types` you are opting into new production behavior.\n  // http://fb.me/prop-types-in-prod\n  module.exports = __webpack_require__(12)();\n}\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/prop-types/index.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/prop-types/index.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar emptyFunction = __webpack_require__(1);\nvar invariant = __webpack_require__(2);\nvar warning = __webpack_require__(4);\nvar assign = __webpack_require__(10);\n\nvar ReactPropTypesSecret = __webpack_require__(3);\nvar checkPropTypes = __webpack_require__(11);\n\nmodule.exports = function(isValidElement, throwOnDirectAccess) {\n  /* global Symbol */\n  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;\n  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.\n\n  /**\n   * Returns the iterator method function contained on the iterable object.\n   *\n   * Be sure to invoke the function with the iterable as context:\n   *\n   *     var iteratorFn = getIteratorFn(myIterable);\n   *     if (iteratorFn) {\n   *       var iterator = iteratorFn.call(myIterable);\n   *       ...\n   *     }\n   *\n   * @param {?object} maybeIterable\n   * @return {?function}\n   */\n  function getIteratorFn(maybeIterable) {\n    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);\n    if (typeof iteratorFn === 'function') {\n      return iteratorFn;\n    }\n  }\n\n  /**\n   * Collection of methods that allow declaration and validation of props that are\n   * supplied to React components. Example usage:\n   *\n   *   var Props = require('ReactPropTypes');\n   *   var MyArticle = React.createClass({\n   *     propTypes: {\n   *       // An optional string prop named \"description\".\n   *       description: Props.string,\n   *\n   *       // A required enum prop named \"category\".\n   *       category: Props.oneOf(['News','Photos']).isRequired,\n   *\n   *       // A prop named \"dialog\" that requires an instance of Dialog.\n   *       dialog: Props.instanceOf(Dialog).isRequired\n   *     },\n   *     render: function() { ... }\n   *   });\n   *\n   * A more formal specification of how these methods are used:\n   *\n   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)\n   *   decl := ReactPropTypes.{type}(.isRequired)?\n   *\n   * Each and every declaration produces a function with the same signature. This\n   * allows the creation of custom validation functions. For example:\n   *\n   *  var MyLink = React.createClass({\n   *    propTypes: {\n   *      // An optional string or URI prop named \"href\".\n   *      href: function(props, propName, componentName) {\n   *        var propValue = props[propName];\n   *        if (propValue != null && typeof propValue !== 'string' &&\n   *            !(propValue instanceof URI)) {\n   *          return new Error(\n   *            'Expected a string or an URI for ' + propName + ' in ' +\n   *            componentName\n   *          );\n   *        }\n   *      }\n   *    },\n   *    render: function() {...}\n   *  });\n   *\n   * @internal\n   */\n\n  var ANONYMOUS = '<<anonymous>>';\n\n  // Important!\n  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.\n  var ReactPropTypes = {\n    array: createPrimitiveTypeChecker('array'),\n    bool: createPrimitiveTypeChecker('boolean'),\n    func: createPrimitiveTypeChecker('function'),\n    number: createPrimitiveTypeChecker('number'),\n    object: createPrimitiveTypeChecker('object'),\n    string: createPrimitiveTypeChecker('string'),\n    symbol: createPrimitiveTypeChecker('symbol'),\n\n    any: createAnyTypeChecker(),\n    arrayOf: createArrayOfTypeChecker,\n    element: createElementTypeChecker(),\n    instanceOf: createInstanceTypeChecker,\n    node: createNodeChecker(),\n    objectOf: createObjectOfTypeChecker,\n    oneOf: createEnumTypeChecker,\n    oneOfType: createUnionTypeChecker,\n    shape: createShapeTypeChecker,\n    exact: createStrictShapeTypeChecker,\n  };\n\n  /**\n   * inlined Object.is polyfill to avoid requiring consumers ship their own\n   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\n   */\n  /*eslint-disable no-self-compare*/\n  function is(x, y) {\n    // SameValue algorithm\n    if (x === y) {\n      // Steps 1-5, 7-10\n      // Steps 6.b-6.e: +0 != -0\n      return x !== 0 || 1 / x === 1 / y;\n    } else {\n      // Step 6.a: NaN == NaN\n      return x !== x && y !== y;\n    }\n  }\n  /*eslint-enable no-self-compare*/\n\n  /**\n   * We use an Error-like object for backward compatibility as people may call\n   * PropTypes directly and inspect their output. However, we don't use real\n   * Errors anymore. We don't inspect their stack anyway, and creating them\n   * is prohibitively expensive if they are created too often, such as what\n   * happens in oneOfType() for any type before the one that matched.\n   */\n  function PropTypeError(message) {\n    this.message = message;\n    this.stack = '';\n  }\n  // Make `instanceof Error` still work for returned errors.\n  PropTypeError.prototype = Error.prototype;\n\n  function createChainableTypeChecker(validate) {\n    if (process.env.NODE_ENV !== 'production') {\n      var manualPropTypeCallCache = {};\n      var manualPropTypeWarningCount = 0;\n    }\n    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {\n      componentName = componentName || ANONYMOUS;\n      propFullName = propFullName || propName;\n\n      if (secret !== ReactPropTypesSecret) {\n        if (throwOnDirectAccess) {\n          // New behavior only for users of `prop-types` package\n          invariant(\n            false,\n            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\n            'Use `PropTypes.checkPropTypes()` to call them. ' +\n            'Read more at http://fb.me/use-check-prop-types'\n          );\n        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {\n          // Old behavior for people using React.PropTypes\n          var cacheKey = componentName + ':' + propName;\n          if (\n            !manualPropTypeCallCache[cacheKey] &&\n            // Avoid spamming the console because they are often not actionable except for lib authors\n            manualPropTypeWarningCount < 3\n          ) {\n            warning(\n              false,\n              'You are manually calling a React.PropTypes validation ' +\n              'function for the `%s` prop on `%s`. This is deprecated ' +\n              'and will throw in the standalone `prop-types` package. ' +\n              'You may be seeing this warning due to a third-party PropTypes ' +\n              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',\n              propFullName,\n              componentName\n            );\n            manualPropTypeCallCache[cacheKey] = true;\n            manualPropTypeWarningCount++;\n          }\n        }\n      }\n      if (props[propName] == null) {\n        if (isRequired) {\n          if (props[propName] === null) {\n            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));\n          }\n          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));\n        }\n        return null;\n      } else {\n        return validate(props, propName, componentName, location, propFullName);\n      }\n    }\n\n    var chainedCheckType = checkType.bind(null, false);\n    chainedCheckType.isRequired = checkType.bind(null, true);\n\n    return chainedCheckType;\n  }\n\n  function createPrimitiveTypeChecker(expectedType) {\n    function validate(props, propName, componentName, location, propFullName, secret) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== expectedType) {\n        // `propValue` being instance of, say, date/regexp, pass the 'object'\n        // check, but we can offer a more precise error message here rather than\n        // 'of type `object`'.\n        var preciseType = getPreciseType(propValue);\n\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createAnyTypeChecker() {\n    return createChainableTypeChecker(emptyFunction.thatReturnsNull);\n  }\n\n  function createArrayOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');\n      }\n      var propValue = props[propName];\n      if (!Array.isArray(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));\n      }\n      for (var i = 0; i < propValue.length; i++) {\n        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);\n        if (error instanceof Error) {\n          return error;\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createElementTypeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      if (!isValidElement(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createInstanceTypeChecker(expectedClass) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!(props[propName] instanceof expectedClass)) {\n        var expectedClassName = expectedClass.name || ANONYMOUS;\n        var actualClassName = getClassName(props[propName]);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createEnumTypeChecker(expectedValues) {\n    if (!Array.isArray(expectedValues)) {\n      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;\n      return emptyFunction.thatReturnsNull;\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      for (var i = 0; i < expectedValues.length; i++) {\n        if (is(propValue, expectedValues[i])) {\n          return null;\n        }\n      }\n\n      var valuesString = JSON.stringify(expectedValues);\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createObjectOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');\n      }\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));\n      }\n      for (var key in propValue) {\n        if (propValue.hasOwnProperty(key)) {\n          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n          if (error instanceof Error) {\n            return error;\n          }\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createUnionTypeChecker(arrayOfTypeCheckers) {\n    if (!Array.isArray(arrayOfTypeCheckers)) {\n      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;\n      return emptyFunction.thatReturnsNull;\n    }\n\n    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n      var checker = arrayOfTypeCheckers[i];\n      if (typeof checker !== 'function') {\n        warning(\n          false,\n          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +\n          'received %s at index %s.',\n          getPostfixForTypeWarning(checker),\n          i\n        );\n        return emptyFunction.thatReturnsNull;\n      }\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n        var checker = arrayOfTypeCheckers[i];\n        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {\n          return null;\n        }\n      }\n\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createNodeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!isNode(props[propName])) {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n      for (var key in shapeTypes) {\n        var checker = shapeTypes[key];\n        if (!checker) {\n          continue;\n        }\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n        if (error) {\n          return error;\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createStrictShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n      // We need to check all keys in case some are required but missing from\n      // props.\n      var allKeys = assign({}, props[propName], shapeTypes);\n      for (var key in allKeys) {\n        var checker = shapeTypes[key];\n        if (!checker) {\n          return new PropTypeError(\n            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +\n            '\\nBad object: ' + JSON.stringify(props[propName], null, '  ') +\n            '\\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')\n          );\n        }\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n        if (error) {\n          return error;\n        }\n      }\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function isNode(propValue) {\n    switch (typeof propValue) {\n      case 'number':\n      case 'string':\n      case 'undefined':\n        return true;\n      case 'boolean':\n        return !propValue;\n      case 'object':\n        if (Array.isArray(propValue)) {\n          return propValue.every(isNode);\n        }\n        if (propValue === null || isValidElement(propValue)) {\n          return true;\n        }\n\n        var iteratorFn = getIteratorFn(propValue);\n        if (iteratorFn) {\n          var iterator = iteratorFn.call(propValue);\n          var step;\n          if (iteratorFn !== propValue.entries) {\n            while (!(step = iterator.next()).done) {\n              if (!isNode(step.value)) {\n                return false;\n              }\n            }\n          } else {\n            // Iterator will provide entry [k,v] tuples rather than values.\n            while (!(step = iterator.next()).done) {\n              var entry = step.value;\n              if (entry) {\n                if (!isNode(entry[1])) {\n                  return false;\n                }\n              }\n            }\n          }\n        } else {\n          return false;\n        }\n\n        return true;\n      default:\n        return false;\n    }\n  }\n\n  function isSymbol(propType, propValue) {\n    // Native Symbol.\n    if (propType === 'symbol') {\n      return true;\n    }\n\n    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'\n    if (propValue['@@toStringTag'] === 'Symbol') {\n      return true;\n    }\n\n    // Fallback for non-spec compliant Symbols which are polyfilled.\n    if (typeof Symbol === 'function' && propValue instanceof Symbol) {\n      return true;\n    }\n\n    return false;\n  }\n\n  // Equivalent of `typeof` but with special handling for array and regexp.\n  function getPropType(propValue) {\n    var propType = typeof propValue;\n    if (Array.isArray(propValue)) {\n      return 'array';\n    }\n    if (propValue instanceof RegExp) {\n      // Old webkits (at least until Android 4.0) return 'function' rather than\n      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/\n      // passes PropTypes.object.\n      return 'object';\n    }\n    if (isSymbol(propType, propValue)) {\n      return 'symbol';\n    }\n    return propType;\n  }\n\n  // This handles more types than `getPropType`. Only used for error messages.\n  // See `createPrimitiveTypeChecker`.\n  function getPreciseType(propValue) {\n    if (typeof propValue === 'undefined' || propValue === null) {\n      return '' + propValue;\n    }\n    var propType = getPropType(propValue);\n    if (propType === 'object') {\n      if (propValue instanceof Date) {\n        return 'date';\n      } else if (propValue instanceof RegExp) {\n        return 'regexp';\n      }\n    }\n    return propType;\n  }\n\n  // Returns a string that is postfixed to a warning about an invalid type.\n  // For example, \"undefined\" or \"of type array\"\n  function getPostfixForTypeWarning(value) {\n    var type = getPreciseType(value);\n    switch (type) {\n      case 'array':\n      case 'object':\n        return 'an ' + type;\n      case 'boolean':\n      case 'date':\n      case 'regexp':\n        return 'a ' + type;\n      default:\n        return type;\n    }\n  }\n\n  // Returns class name of the object, if any.\n  function getClassName(propValue) {\n    if (!propValue.constructor || !propValue.constructor.name) {\n      return ANONYMOUS;\n    }\n    return propValue.constructor.name;\n  }\n\n  ReactPropTypes.checkPropTypes = checkPropTypes;\n  ReactPropTypes.PropTypes = ReactPropTypes;\n\n  return ReactPropTypes;\n};\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/prop-types/factoryWithTypeCheckers.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/prop-types/factoryWithTypeCheckers.js?");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/object-assign/index.js\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/object-assign/index.js?");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (process.env.NODE_ENV !== 'production') {\n  var invariant = __webpack_require__(2);\n  var warning = __webpack_require__(4);\n  var ReactPropTypesSecret = __webpack_require__(3);\n  var loggedTypeFailures = {};\n}\n\n/**\n * Assert that the values match with the type specs.\n * Error messages are memorized and will only be shown once.\n *\n * @param {object} typeSpecs Map of name to a ReactPropType\n * @param {object} values Runtime values that need to be type-checked\n * @param {string} location e.g. \"prop\", \"context\", \"child context\"\n * @param {string} componentName Name of the component for error messages.\n * @param {?Function} getStack Returns the component stack.\n * @private\n */\nfunction checkPropTypes(typeSpecs, values, location, componentName, getStack) {\n  if (process.env.NODE_ENV !== 'production') {\n    for (var typeSpecName in typeSpecs) {\n      if (typeSpecs.hasOwnProperty(typeSpecName)) {\n        var error;\n        // Prop type validation may throw. In case they do, we don't want to\n        // fail the render phase where it didn't fail before. So we log it.\n        // After these have been cleaned up, we'll let them throw.\n        try {\n          // This is intentionally an invariant that gets caught. It's the same\n          // behavior as without this statement except with a better message.\n          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);\n          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);\n        } catch (ex) {\n          error = ex;\n        }\n        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);\n        if (error instanceof Error && !(error.message in loggedTypeFailures)) {\n          // Only monitor this failure once because there tends to be a lot of the\n          // same error.\n          loggedTypeFailures[error.message] = true;\n\n          var stack = getStack ? getStack() : '';\n\n          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');\n        }\n      }\n    }\n  }\n}\n\nmodule.exports = checkPropTypes;\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/prop-types/checkPropTypes.js\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/prop-types/checkPropTypes.js?");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar emptyFunction = __webpack_require__(1);\nvar invariant = __webpack_require__(2);\nvar ReactPropTypesSecret = __webpack_require__(3);\n\nmodule.exports = function() {\n  function shim(props, propName, componentName, location, propFullName, secret) {\n    if (secret === ReactPropTypesSecret) {\n      // It is still safe when called from React.\n      return;\n    }\n    invariant(\n      false,\n      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\n      'Use PropTypes.checkPropTypes() to call them. ' +\n      'Read more at http://fb.me/use-check-prop-types'\n    );\n  };\n  shim.isRequired = shim;\n  function getShim() {\n    return shim;\n  };\n  // Important!\n  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.\n  var ReactPropTypes = {\n    array: shim,\n    bool: shim,\n    func: shim,\n    number: shim,\n    object: shim,\n    string: shim,\n    symbol: shim,\n\n    any: shim,\n    arrayOf: getShim,\n    element: shim,\n    instanceOf: getShim,\n    node: shim,\n    objectOf: getShim,\n    oneOf: getShim,\n    oneOfType: getShim,\n    shape: getShim,\n    exact: getShim\n  };\n\n  ReactPropTypes.checkPropTypes = emptyFunction;\n  ReactPropTypes.PropTypes = ReactPropTypes;\n\n  return ReactPropTypes;\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/prop-types/factoryWithThrowingShims.js\n// module id = 12\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/prop-types/factoryWithThrowingShims.js?");

/***/ })
/******/ ]);
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["TextField"] = factory(require("react"));
	else
		root["TextField"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/process/browser.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n * \n */\n\nfunction makeEmptyFunction(arg) {\n  return function () {\n    return arg;\n  };\n}\n\n/**\n * This function accepts and discards inputs; it has no side effects. This is\n * primarily useful idiomatically for overridable function endpoints which\n * always need to be callable, since JS lacks a null-call idiom ala Cocoa.\n */\nvar emptyFunction = function emptyFunction() {};\n\nemptyFunction.thatReturns = makeEmptyFunction;\nemptyFunction.thatReturnsFalse = makeEmptyFunction(false);\nemptyFunction.thatReturnsTrue = makeEmptyFunction(true);\nemptyFunction.thatReturnsNull = makeEmptyFunction(null);\nemptyFunction.thatReturnsThis = function () {\n  return this;\n};\nemptyFunction.thatReturnsArgument = function (arg) {\n  return arg;\n};\n\nmodule.exports = emptyFunction;\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/fbjs/lib/emptyFunction.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/emptyFunction.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar validateFormat = function validateFormat(format) {};\n\nif (process.env.NODE_ENV !== 'production') {\n  validateFormat = function validateFormat(format) {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  };\n}\n\nfunction invariant(condition, format, a, b, c, d, e, f) {\n  validateFormat(format);\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(format.replace(/%s/g, function () {\n        return args[argIndex++];\n      }));\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n}\n\nmodule.exports = invariant;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/fbjs/lib/invariant.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/invariant.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\n\nmodule.exports = ReactPropTypesSecret;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/prop-types/lib/ReactPropTypesSecret.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/prop-types/lib/ReactPropTypesSecret.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n\n\nvar emptyFunction = __webpack_require__(1);\n\n/**\n * Similar to invariant but only logs a warning if the condition is not met.\n * This can be used to log issues in development environments in critical\n * paths. Removing the logging code for production environments will keep the\n * same logic and follow the same code paths.\n */\n\nvar warning = emptyFunction;\n\nif (process.env.NODE_ENV !== 'production') {\n  var printWarning = function printWarning(format) {\n    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    var argIndex = 0;\n    var message = 'Warning: ' + format.replace(/%s/g, function () {\n      return args[argIndex++];\n    });\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n\n  warning = function warning(condition, format) {\n    if (format === undefined) {\n      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');\n    }\n\n    if (format.indexOf('Failed Composite propType: ') === 0) {\n      return; // Ignore CompositeComponent proptype check.\n    }\n\n    if (!condition) {\n      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {\n        args[_key2 - 2] = arguments[_key2];\n      }\n\n      printWarning.apply(undefined, [format].concat(args));\n    }\n  };\n}\n\nmodule.exports = warning;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/fbjs/lib/warning.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/warning.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(7);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _palette = __webpack_require__(12);\n\nvar _palette2 = _interopRequireDefault(_palette);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TextInput = function (_React$Component) {\n  _inherits(TextInput, _React$Component);\n\n  function TextInput(props) {\n    _classCallCheck(this, TextInput);\n\n    var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));\n\n    _this.state = { focused: false };\n    if (props.palette) {\n      _this.palette = _this.props.palette;\n    } else {\n      _this.palette = _palette2.default;\n    }\n    _this.setFocus = _this.setFocus.bind(_this);\n    _this.unsetFocus = _this.unsetFocus.bind(_this);\n    _this.handleChange = _this.handleChange.bind(_this);\n    _this.handleKeyDown = _this.handleKeyDown.bind(_this);\n    return _this;\n  }\n\n  _createClass(TextInput, [{\n    key: 'setFocus',\n    value: function setFocus() {\n      if (this.props.onFocus) this.props.onFocus();\n      this.setState({ focused: true });\n    }\n  }, {\n    key: 'unsetFocus',\n    value: function unsetFocus(evt) {\n      if (this.props.onBlur) {\n        this.props.onBlur(evt);\n      }\n      this.setState({ focused: false });\n    }\n  }, {\n    key: 'handleChange',\n    value: function handleChange(evt) {\n      if (typeof this.props.onChange === 'function') {\n        this.props.onChange(evt.target.value);\n      }\n    }\n  }, {\n    key: 'handleKeyDown',\n    value: function handleKeyDown(evt) {\n      if (this.props.onKeyDown) this.props.onKeyDown(evt);\n      if (evt.key === 'Enter' && this.props.onEnter) this.props.onEnter();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var isMobile = !window.matchMedia('(min-width : 500px)').matches;\n      var styles = {\n        main: {\n          'margin': '10px 0px',\n          'position': 'relative'\n        },\n        pseudo: {\n          'position': 'relative',\n          'borderTop': this.state.focused ? '1px solid ' + (this.props.focusBorder ? this.props.focusBorder : this.palette.grey) : '1px solid ' + (this.props.errorText ? this.palette.errorOrange : this.palette.greyLight),\n          'borderRight': this.state.focused ? '1px solid ' + (this.props.focusBorder ? this.props.focusBorder : this.palette.grey) : '1px solid ' + (this.props.errorText ? this.palette.errorOrange : this.palette.greyLight),\n          'borderBottom': this.state.focused ? '1px solid ' + (this.props.focusBorder ? this.props.focusBorder : this.palette.grey) : '1px solid ' + (this.props.errorText ? this.palette.errorOrange : this.palette.greyLight),\n          'borderLeft': this.state.focused ? '1px solid ' + (this.props.focusBorder ? this.props.focusBorder : this.palette.grey) : '1px solid ' + (this.props.errorText ? this.palette.errorOrange : this.palette.greyLight),\n          'backgroundColor': this.props.disabled ? '#c3c3c3' : this.palette.white,\n          'color': this.props.disable ? '#868686' : null,\n          'borderRadius': this.props.borderRadius ? this.props.borderRadius : '2px',\n          'maxWidth': this.props.fullWidth ? null : isMobile ? '89%' : '380px',\n          'margin': 'auto',\n          'textAlign': 'left',\n          'overflow': 'hidden'\n        },\n        inputContainer: {\n          'width': this.props.isProfile || this.props.type === 'multiline' ? '100%' : '89%',\n          'overflow': this.props.type !== 'multiline' ? 'hidden' : 'visible',\n          marginLeft: this.props.leftIcon ? '6%' : null\n        },\n        textField: {\n          'border': 'none',\n          'outline': 'none',\n          'backgroundColor': this.props.disabled ? '#c3c3c3' : this.palette.white,\n          'lineHeight': this.props.type === 'multiline' ? null : this.props.height || '45px',\n          'height': this.props.type === 'multiline' ? '200px' : this.props.height || '45px',\n          'width': '100%',\n          'padding': '0px 15px',\n          'fontSize': this.props.textSize ? this.props.textSize : '13pt',\n          'fontFamily': \"'Lato', sans-serif\"\n        },\n        iconContainerRight: {\n          'color': this.state.focused ? this.palette.secondaryLight : this.palette.greyLight,\n          'position': 'absolute',\n          'right': '10px',\n          'top': '0px',\n          'lineHeight': this.props.height || '45px',\n          'textAlign': 'center',\n          'width': '20px',\n          'fontSize': '18pt',\n          'transition': 'all 300ms ease-in-out'\n        },\n        iconContainerLeft: {\n          'color': this.state.focused ? this.palette.blueLight : this.palette.greyLight,\n          'position': 'absolute',\n          'left': '10px',\n          'top': '0px',\n          'lineHeight': this.props.height || '45px',\n          'textAlign': 'center',\n          'width': '20px',\n          'fontSize': '18pt',\n          'transition': 'all 300ms ease-in-out'\n        },\n        error: {\n          'color': this.palette.white,\n          'backgroundColor': this.palette.errorOrange,\n          'textAlign': 'center',\n          'fontSize': '11pt',\n          'position': 'absolute',\n          'maxWidth': this.props.fullWidth ? null : isMobile ? '89%' : '380px',\n          'margin': 'auto',\n          'border': !this.props.fullWidth && this.props.errorText ? '1px solid ' + this.palette.errorOrange : null,\n          'left': '0px',\n          'right': '0px',\n          'bottom': this.props.errorText ? '-8px' : '0px',\n          'height': this.props.errorText ? '19px' : '0px',\n          'borderRadius': '0px 0px 2px 2px',\n          'transition': 'all 300ms ease-in-out',\n          'overflow': 'hidden'\n        },\n        success: {\n          'color': this.palette.white,\n          'backgroundColor': this.palette.successGreen,\n          'textAlign': 'center',\n          'fontSize': '11pt',\n          'position': 'absolute',\n          'maxWidth': this.props.fullWidth ? null : isMobile ? '89%' : '380px',\n          'border': !this.props.fullWidth && this.props.successText ? '1px solid ' + this.palette.successGreen : null,\n          'margin': 'auto',\n          'left': '0px',\n          'right': '0px',\n          'bottom': this.props.successText ? '-8px' : '0px',\n          'height': this.props.successText ? '19px' : '0px',\n          'borderRadius': '0px 0px 2px 2px',\n          'transition': 'all 300ms ease-in-out',\n          'overflow': 'hidden'\n        },\n        label: {\n          fontWeight: '600',\n          marginBottom: '5px'\n        }\n      };\n      styles.main = Object.assign({}, styles.main, this.props.style);\n      styles.textField = Object.assign({}, styles.textField, this.props.inputStyle);\n      styles.pseudo = Object.assign({}, styles.pseudo, this.props.pseudoStyle);\n      styles.iconContainerLeft = Object.assign({}, styles.iconContainerLeft, this.props.iconStyle);\n      styles.iconContainerRight = Object.assign({}, styles.iconContainerRight, this.props.iconStyle);\n      return _react2.default.createElement(\n        'div',\n        { style: styles.main },\n        _react2.default.createElement(\n          'div',\n          { style: styles.label },\n          this.props.topLabel\n        ),\n        _react2.default.createElement(\n          'div',\n          { style: styles.pseudo },\n          _react2.default.createElement(\n            'div',\n            { style: styles.inputContainer },\n            this.props.type === 'multiline' ? _react2.default.createElement('textarea', { placeholder: this.props.label,\n              readOnly: !!this.props.disabled,\n              value: this.props.value,\n              onChange: this.handleChange,\n              onKeyDown: this.handleKeyDown,\n              onFocus: this.setFocus,\n              onBlur: this.unsetFocus,\n              style: styles.textField,\n              id: this.props.id,\n              autoFocus: this.props.autofocus,\n              name: this.props.name }) : _react2.default.createElement('input', { type: this.props.type || 'text',\n              placeholder: this.props.label,\n              readOnly: !!this.props.disabled,\n              value: this.props.value,\n              onChange: this.handleChange,\n              onKeyDown: this.handleKeyDown,\n              onFocus: this.setFocus,\n              onBlur: this.unsetFocus,\n              style: styles.textField,\n              id: this.props.id,\n              autoFocus: this.props.autofocus,\n              name: this.props.name,\n              maxLength: this.props.maxLength })\n          ),\n          this.props.rightIcon ? _react2.default.createElement(\n            'div',\n            { style: styles.iconContainerRight },\n            this.props.rightIcon\n          ) : this.props.leftIcon ? _react2.default.createElement(\n            'div',\n            { style: styles.iconContainerLeft },\n            this.props.leftIcon\n          ) : null\n        ),\n        _react2.default.createElement(\n          'div',\n          { style: styles.error },\n          this.props.errorText\n        ),\n        _react2.default.createElement(\n          'div',\n          { style: styles.success },\n          this.props.successText\n        )\n      );\n    }\n  }]);\n\n  return TextInput;\n}(_react2.default.Component);\n\n;\n\nTextInput.propTypes = {\n  fullWidth: _propTypes2.default.bool,\n  onChange: _propTypes2.default.func,\n  onFocus: _propTypes2.default.func,\n  onBlur: _propTypes2.default.func,\n  onEnter: _propTypes2.default.func,\n  label: _propTypes2.default.string,\n  topLabel: _propTypes2.default.string,\n  value: _propTypes2.default.string,\n  errorText: _propTypes2.default.string,\n  rightIcon: _propTypes2.default.node,\n  leftIcon: _propTypes2.default.node,\n  type: _propTypes2.default.string,\n  autofocus: _propTypes2.default.bool,\n  disabled: _propTypes2.default.bool,\n  style: _propTypes2.default.object,\n  inputStyle: _propTypes2.default.object,\n  pseudoStyle: _propTypes2.default.object,\n  textSize: _propTypes2.default.string,\n  height: _propTypes2.default.string,\n  palette: _propTypes2.default.object\n};\nexports.default = TextInput;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_6__;\n\n//////////////////\n// WEBPACK FOOTER\n// external {\"root\":\"React\",\"commonjs2\":\"react\",\"commonjs\":\"react\",\"amd\":\"react\"}\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nif (process.env.NODE_ENV !== 'production') {\n  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&\n    Symbol.for &&\n    Symbol.for('react.element')) ||\n    0xeac7;\n\n  var isValidElement = function(object) {\n    return typeof object === 'object' &&\n      object !== null &&\n      object.$$typeof === REACT_ELEMENT_TYPE;\n  };\n\n  // By explicitly using `prop-types` you are opting into new development behavior.\n  // http://fb.me/prop-types-in-prod\n  var throwOnDirectAccess = true;\n  module.exports = __webpack_require__(8)(isValidElement, throwOnDirectAccess);\n} else {\n  // By explicitly using `prop-types` you are opting into new production behavior.\n  // http://fb.me/prop-types-in-prod\n  module.exports = __webpack_require__(11)();\n}\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/prop-types/index.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/prop-types/index.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar emptyFunction = __webpack_require__(1);\nvar invariant = __webpack_require__(2);\nvar warning = __webpack_require__(4);\nvar assign = __webpack_require__(9);\n\nvar ReactPropTypesSecret = __webpack_require__(3);\nvar checkPropTypes = __webpack_require__(10);\n\nmodule.exports = function(isValidElement, throwOnDirectAccess) {\n  /* global Symbol */\n  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;\n  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.\n\n  /**\n   * Returns the iterator method function contained on the iterable object.\n   *\n   * Be sure to invoke the function with the iterable as context:\n   *\n   *     var iteratorFn = getIteratorFn(myIterable);\n   *     if (iteratorFn) {\n   *       var iterator = iteratorFn.call(myIterable);\n   *       ...\n   *     }\n   *\n   * @param {?object} maybeIterable\n   * @return {?function}\n   */\n  function getIteratorFn(maybeIterable) {\n    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);\n    if (typeof iteratorFn === 'function') {\n      return iteratorFn;\n    }\n  }\n\n  /**\n   * Collection of methods that allow declaration and validation of props that are\n   * supplied to React components. Example usage:\n   *\n   *   var Props = require('ReactPropTypes');\n   *   var MyArticle = React.createClass({\n   *     propTypes: {\n   *       // An optional string prop named \"description\".\n   *       description: Props.string,\n   *\n   *       // A required enum prop named \"category\".\n   *       category: Props.oneOf(['News','Photos']).isRequired,\n   *\n   *       // A prop named \"dialog\" that requires an instance of Dialog.\n   *       dialog: Props.instanceOf(Dialog).isRequired\n   *     },\n   *     render: function() { ... }\n   *   });\n   *\n   * A more formal specification of how these methods are used:\n   *\n   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)\n   *   decl := ReactPropTypes.{type}(.isRequired)?\n   *\n   * Each and every declaration produces a function with the same signature. This\n   * allows the creation of custom validation functions. For example:\n   *\n   *  var MyLink = React.createClass({\n   *    propTypes: {\n   *      // An optional string or URI prop named \"href\".\n   *      href: function(props, propName, componentName) {\n   *        var propValue = props[propName];\n   *        if (propValue != null && typeof propValue !== 'string' &&\n   *            !(propValue instanceof URI)) {\n   *          return new Error(\n   *            'Expected a string or an URI for ' + propName + ' in ' +\n   *            componentName\n   *          );\n   *        }\n   *      }\n   *    },\n   *    render: function() {...}\n   *  });\n   *\n   * @internal\n   */\n\n  var ANONYMOUS = '<<anonymous>>';\n\n  // Important!\n  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.\n  var ReactPropTypes = {\n    array: createPrimitiveTypeChecker('array'),\n    bool: createPrimitiveTypeChecker('boolean'),\n    func: createPrimitiveTypeChecker('function'),\n    number: createPrimitiveTypeChecker('number'),\n    object: createPrimitiveTypeChecker('object'),\n    string: createPrimitiveTypeChecker('string'),\n    symbol: createPrimitiveTypeChecker('symbol'),\n\n    any: createAnyTypeChecker(),\n    arrayOf: createArrayOfTypeChecker,\n    element: createElementTypeChecker(),\n    instanceOf: createInstanceTypeChecker,\n    node: createNodeChecker(),\n    objectOf: createObjectOfTypeChecker,\n    oneOf: createEnumTypeChecker,\n    oneOfType: createUnionTypeChecker,\n    shape: createShapeTypeChecker,\n    exact: createStrictShapeTypeChecker,\n  };\n\n  /**\n   * inlined Object.is polyfill to avoid requiring consumers ship their own\n   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\n   */\n  /*eslint-disable no-self-compare*/\n  function is(x, y) {\n    // SameValue algorithm\n    if (x === y) {\n      // Steps 1-5, 7-10\n      // Steps 6.b-6.e: +0 != -0\n      return x !== 0 || 1 / x === 1 / y;\n    } else {\n      // Step 6.a: NaN == NaN\n      return x !== x && y !== y;\n    }\n  }\n  /*eslint-enable no-self-compare*/\n\n  /**\n   * We use an Error-like object for backward compatibility as people may call\n   * PropTypes directly and inspect their output. However, we don't use real\n   * Errors anymore. We don't inspect their stack anyway, and creating them\n   * is prohibitively expensive if they are created too often, such as what\n   * happens in oneOfType() for any type before the one that matched.\n   */\n  function PropTypeError(message) {\n    this.message = message;\n    this.stack = '';\n  }\n  // Make `instanceof Error` still work for returned errors.\n  PropTypeError.prototype = Error.prototype;\n\n  function createChainableTypeChecker(validate) {\n    if (process.env.NODE_ENV !== 'production') {\n      var manualPropTypeCallCache = {};\n      var manualPropTypeWarningCount = 0;\n    }\n    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {\n      componentName = componentName || ANONYMOUS;\n      propFullName = propFullName || propName;\n\n      if (secret !== ReactPropTypesSecret) {\n        if (throwOnDirectAccess) {\n          // New behavior only for users of `prop-types` package\n          invariant(\n            false,\n            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\n            'Use `PropTypes.checkPropTypes()` to call them. ' +\n            'Read more at http://fb.me/use-check-prop-types'\n          );\n        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {\n          // Old behavior for people using React.PropTypes\n          var cacheKey = componentName + ':' + propName;\n          if (\n            !manualPropTypeCallCache[cacheKey] &&\n            // Avoid spamming the console because they are often not actionable except for lib authors\n            manualPropTypeWarningCount < 3\n          ) {\n            warning(\n              false,\n              'You are manually calling a React.PropTypes validation ' +\n              'function for the `%s` prop on `%s`. This is deprecated ' +\n              'and will throw in the standalone `prop-types` package. ' +\n              'You may be seeing this warning due to a third-party PropTypes ' +\n              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',\n              propFullName,\n              componentName\n            );\n            manualPropTypeCallCache[cacheKey] = true;\n            manualPropTypeWarningCount++;\n          }\n        }\n      }\n      if (props[propName] == null) {\n        if (isRequired) {\n          if (props[propName] === null) {\n            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));\n          }\n          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));\n        }\n        return null;\n      } else {\n        return validate(props, propName, componentName, location, propFullName);\n      }\n    }\n\n    var chainedCheckType = checkType.bind(null, false);\n    chainedCheckType.isRequired = checkType.bind(null, true);\n\n    return chainedCheckType;\n  }\n\n  function createPrimitiveTypeChecker(expectedType) {\n    function validate(props, propName, componentName, location, propFullName, secret) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== expectedType) {\n        // `propValue` being instance of, say, date/regexp, pass the 'object'\n        // check, but we can offer a more precise error message here rather than\n        // 'of type `object`'.\n        var preciseType = getPreciseType(propValue);\n\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createAnyTypeChecker() {\n    return createChainableTypeChecker(emptyFunction.thatReturnsNull);\n  }\n\n  function createArrayOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');\n      }\n      var propValue = props[propName];\n      if (!Array.isArray(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));\n      }\n      for (var i = 0; i < propValue.length; i++) {\n        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);\n        if (error instanceof Error) {\n          return error;\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createElementTypeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      if (!isValidElement(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createInstanceTypeChecker(expectedClass) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!(props[propName] instanceof expectedClass)) {\n        var expectedClassName = expectedClass.name || ANONYMOUS;\n        var actualClassName = getClassName(props[propName]);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createEnumTypeChecker(expectedValues) {\n    if (!Array.isArray(expectedValues)) {\n      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;\n      return emptyFunction.thatReturnsNull;\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      for (var i = 0; i < expectedValues.length; i++) {\n        if (is(propValue, expectedValues[i])) {\n          return null;\n        }\n      }\n\n      var valuesString = JSON.stringify(expectedValues);\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createObjectOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');\n      }\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));\n      }\n      for (var key in propValue) {\n        if (propValue.hasOwnProperty(key)) {\n          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n          if (error instanceof Error) {\n            return error;\n          }\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createUnionTypeChecker(arrayOfTypeCheckers) {\n    if (!Array.isArray(arrayOfTypeCheckers)) {\n      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;\n      return emptyFunction.thatReturnsNull;\n    }\n\n    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n      var checker = arrayOfTypeCheckers[i];\n      if (typeof checker !== 'function') {\n        warning(\n          false,\n          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +\n          'received %s at index %s.',\n          getPostfixForTypeWarning(checker),\n          i\n        );\n        return emptyFunction.thatReturnsNull;\n      }\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n        var checker = arrayOfTypeCheckers[i];\n        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {\n          return null;\n        }\n      }\n\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createNodeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!isNode(props[propName])) {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n      for (var key in shapeTypes) {\n        var checker = shapeTypes[key];\n        if (!checker) {\n          continue;\n        }\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n        if (error) {\n          return error;\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createStrictShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n      // We need to check all keys in case some are required but missing from\n      // props.\n      var allKeys = assign({}, props[propName], shapeTypes);\n      for (var key in allKeys) {\n        var checker = shapeTypes[key];\n        if (!checker) {\n          return new PropTypeError(\n            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +\n            '\\nBad object: ' + JSON.stringify(props[propName], null, '  ') +\n            '\\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')\n          );\n        }\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n        if (error) {\n          return error;\n        }\n      }\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function isNode(propValue) {\n    switch (typeof propValue) {\n      case 'number':\n      case 'string':\n      case 'undefined':\n        return true;\n      case 'boolean':\n        return !propValue;\n      case 'object':\n        if (Array.isArray(propValue)) {\n          return propValue.every(isNode);\n        }\n        if (propValue === null || isValidElement(propValue)) {\n          return true;\n        }\n\n        var iteratorFn = getIteratorFn(propValue);\n        if (iteratorFn) {\n          var iterator = iteratorFn.call(propValue);\n          var step;\n          if (iteratorFn !== propValue.entries) {\n            while (!(step = iterator.next()).done) {\n              if (!isNode(step.value)) {\n                return false;\n              }\n            }\n          } else {\n            // Iterator will provide entry [k,v] tuples rather than values.\n            while (!(step = iterator.next()).done) {\n              var entry = step.value;\n              if (entry) {\n                if (!isNode(entry[1])) {\n                  return false;\n                }\n              }\n            }\n          }\n        } else {\n          return false;\n        }\n\n        return true;\n      default:\n        return false;\n    }\n  }\n\n  function isSymbol(propType, propValue) {\n    // Native Symbol.\n    if (propType === 'symbol') {\n      return true;\n    }\n\n    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'\n    if (propValue['@@toStringTag'] === 'Symbol') {\n      return true;\n    }\n\n    // Fallback for non-spec compliant Symbols which are polyfilled.\n    if (typeof Symbol === 'function' && propValue instanceof Symbol) {\n      return true;\n    }\n\n    return false;\n  }\n\n  // Equivalent of `typeof` but with special handling for array and regexp.\n  function getPropType(propValue) {\n    var propType = typeof propValue;\n    if (Array.isArray(propValue)) {\n      return 'array';\n    }\n    if (propValue instanceof RegExp) {\n      // Old webkits (at least until Android 4.0) return 'function' rather than\n      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/\n      // passes PropTypes.object.\n      return 'object';\n    }\n    if (isSymbol(propType, propValue)) {\n      return 'symbol';\n    }\n    return propType;\n  }\n\n  // This handles more types than `getPropType`. Only used for error messages.\n  // See `createPrimitiveTypeChecker`.\n  function getPreciseType(propValue) {\n    if (typeof propValue === 'undefined' || propValue === null) {\n      return '' + propValue;\n    }\n    var propType = getPropType(propValue);\n    if (propType === 'object') {\n      if (propValue instanceof Date) {\n        return 'date';\n      } else if (propValue instanceof RegExp) {\n        return 'regexp';\n      }\n    }\n    return propType;\n  }\n\n  // Returns a string that is postfixed to a warning about an invalid type.\n  // For example, \"undefined\" or \"of type array\"\n  function getPostfixForTypeWarning(value) {\n    var type = getPreciseType(value);\n    switch (type) {\n      case 'array':\n      case 'object':\n        return 'an ' + type;\n      case 'boolean':\n      case 'date':\n      case 'regexp':\n        return 'a ' + type;\n      default:\n        return type;\n    }\n  }\n\n  // Returns class name of the object, if any.\n  function getClassName(propValue) {\n    if (!propValue.constructor || !propValue.constructor.name) {\n      return ANONYMOUS;\n    }\n    return propValue.constructor.name;\n  }\n\n  ReactPropTypes.checkPropTypes = checkPropTypes;\n  ReactPropTypes.PropTypes = ReactPropTypes;\n\n  return ReactPropTypes;\n};\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/prop-types/factoryWithTypeCheckers.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/prop-types/factoryWithTypeCheckers.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/object-assign/index.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/object-assign/index.js?");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (process.env.NODE_ENV !== 'production') {\n  var invariant = __webpack_require__(2);\n  var warning = __webpack_require__(4);\n  var ReactPropTypesSecret = __webpack_require__(3);\n  var loggedTypeFailures = {};\n}\n\n/**\n * Assert that the values match with the type specs.\n * Error messages are memorized and will only be shown once.\n *\n * @param {object} typeSpecs Map of name to a ReactPropType\n * @param {object} values Runtime values that need to be type-checked\n * @param {string} location e.g. \"prop\", \"context\", \"child context\"\n * @param {string} componentName Name of the component for error messages.\n * @param {?Function} getStack Returns the component stack.\n * @private\n */\nfunction checkPropTypes(typeSpecs, values, location, componentName, getStack) {\n  if (process.env.NODE_ENV !== 'production') {\n    for (var typeSpecName in typeSpecs) {\n      if (typeSpecs.hasOwnProperty(typeSpecName)) {\n        var error;\n        // Prop type validation may throw. In case they do, we don't want to\n        // fail the render phase where it didn't fail before. So we log it.\n        // After these have been cleaned up, we'll let them throw.\n        try {\n          // This is intentionally an invariant that gets caught. It's the same\n          // behavior as without this statement except with a better message.\n          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);\n          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);\n        } catch (ex) {\n          error = ex;\n        }\n        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);\n        if (error instanceof Error && !(error.message in loggedTypeFailures)) {\n          // Only monitor this failure once because there tends to be a lot of the\n          // same error.\n          loggedTypeFailures[error.message] = true;\n\n          var stack = getStack ? getStack() : '';\n\n          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');\n        }\n      }\n    }\n  }\n}\n\nmodule.exports = checkPropTypes;\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/prop-types/checkPropTypes.js\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/prop-types/checkPropTypes.js?");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar emptyFunction = __webpack_require__(1);\nvar invariant = __webpack_require__(2);\nvar ReactPropTypesSecret = __webpack_require__(3);\n\nmodule.exports = function() {\n  function shim(props, propName, componentName, location, propFullName, secret) {\n    if (secret === ReactPropTypesSecret) {\n      // It is still safe when called from React.\n      return;\n    }\n    invariant(\n      false,\n      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\n      'Use PropTypes.checkPropTypes() to call them. ' +\n      'Read more at http://fb.me/use-check-prop-types'\n    );\n  };\n  shim.isRequired = shim;\n  function getShim() {\n    return shim;\n  };\n  // Important!\n  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.\n  var ReactPropTypes = {\n    array: shim,\n    bool: shim,\n    func: shim,\n    number: shim,\n    object: shim,\n    string: shim,\n    symbol: shim,\n\n    any: shim,\n    arrayOf: getShim,\n    element: shim,\n    instanceOf: getShim,\n    node: shim,\n    objectOf: getShim,\n    oneOf: getShim,\n    oneOfType: getShim,\n    shape: getShim,\n    exact: getShim\n  };\n\n  ReactPropTypes.checkPropTypes = emptyFunction;\n  ReactPropTypes.PropTypes = ReactPropTypes;\n\n  return ReactPropTypes;\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/prop-types/factoryWithThrowingShims.js\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/prop-types/factoryWithThrowingShims.js?");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar palette = {\n  grey: '#3F454A',\n  greyLight: '#AEAEAE',\n  errorOrange: '#f7814c',\n  successGreen: '#2EBE71',\n  white: '#ffffff',\n  black: '#000000',\n  primary: '#FFB200',\n  pimaryDark: '#E9A300',\n  primaryLight: '#FCC700',\n  secondary: '#344164',\n  secondaryDark: '#283760',\n  secondaryLight: '#526490',\n  tertiary: '#2EBE71',\n  tertiaryDark: '#29AC66',\n  tertiaryLight: '#9FE6BA'\n};\n\nmodule.exports = palette;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/palette.js\n// module id = 12\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/palette.js?");

/***/ })
/******/ ]);
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["LookupField"] = factory(require("react"));
	else
		root["LookupField"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/process/browser.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_1__;\n\n//////////////////\n// WEBPACK FOOTER\n// external {\"root\":\"React\",\"commonjs2\":\"react\",\"commonjs\":\"react\",\"amd\":\"react\"}\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n * \n */\n\nfunction makeEmptyFunction(arg) {\n  return function () {\n    return arg;\n  };\n}\n\n/**\n * This function accepts and discards inputs; it has no side effects. This is\n * primarily useful idiomatically for overridable function endpoints which\n * always need to be callable, since JS lacks a null-call idiom ala Cocoa.\n */\nvar emptyFunction = function emptyFunction() {};\n\nemptyFunction.thatReturns = makeEmptyFunction;\nemptyFunction.thatReturnsFalse = makeEmptyFunction(false);\nemptyFunction.thatReturnsTrue = makeEmptyFunction(true);\nemptyFunction.thatReturnsNull = makeEmptyFunction(null);\nemptyFunction.thatReturnsThis = function () {\n  return this;\n};\nemptyFunction.thatReturnsArgument = function (arg) {\n  return arg;\n};\n\nmodule.exports = emptyFunction;\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/fbjs/lib/emptyFunction.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/emptyFunction.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar validateFormat = function validateFormat(format) {};\n\nif (process.env.NODE_ENV !== 'production') {\n  validateFormat = function validateFormat(format) {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  };\n}\n\nfunction invariant(condition, format, a, b, c, d, e, f) {\n  validateFormat(format);\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(format.replace(/%s/g, function () {\n        return args[argIndex++];\n      }));\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n}\n\nmodule.exports = invariant;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/fbjs/lib/invariant.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/invariant.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\n\nmodule.exports = ReactPropTypesSecret;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/prop-types/lib/ReactPropTypesSecret.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/prop-types/lib/ReactPropTypesSecret.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n\n\nvar emptyFunction = __webpack_require__(2);\n\n/**\n * Similar to invariant but only logs a warning if the condition is not met.\n * This can be used to log issues in development environments in critical\n * paths. Removing the logging code for production environments will keep the\n * same logic and follow the same code paths.\n */\n\nvar warning = emptyFunction;\n\nif (process.env.NODE_ENV !== 'production') {\n  var printWarning = function printWarning(format) {\n    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    var argIndex = 0;\n    var message = 'Warning: ' + format.replace(/%s/g, function () {\n      return args[argIndex++];\n    });\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n\n  warning = function warning(condition, format) {\n    if (format === undefined) {\n      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');\n    }\n\n    if (format.indexOf('Failed Composite propType: ') === 0) {\n      return; // Ignore CompositeComponent proptype check.\n    }\n\n    if (!condition) {\n      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {\n        args[_key2 - 2] = arguments[_key2];\n      }\n\n      printWarning.apply(undefined, [format].concat(args));\n    }\n  };\n}\n\nmodule.exports = warning;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/fbjs/lib/warning.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/warning.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(7);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _textfield = __webpack_require__(12);\n\nvar _textfield2 = _interopRequireDefault(_textfield);\n\nvar _palette = __webpack_require__(13);\n\nvar _palette2 = _interopRequireDefault(_palette);\n\nvar _react_popover = __webpack_require__(14);\n\nvar _react_popover2 = _interopRequireDefault(_react_popover);\n\nvar _react_menuitem = __webpack_require__(15);\n\nvar _react_menuitem2 = _interopRequireDefault(_react_menuitem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LookupField = function (_React$Component) {\n  _inherits(LookupField, _React$Component);\n\n  function LookupField(props) {\n    _classCallCheck(this, LookupField);\n\n    var _this = _possibleConstructorReturn(this, (LookupField.__proto__ || Object.getPrototypeOf(LookupField)).call(this, props));\n\n    _this.state = {\n      displayText: _this.props.value + '',\n      selectedIndex: -1,\n      anchorEl: null,\n      isFocused: false\n    };\n    _this.handleChange = _this.handleChange.bind(_this);\n    _this.handleSpecialKey = _this.handleSpecialKey.bind(_this);\n    _this.handleMenuClick = _this.handleMenuClick.bind(_this);\n    _this.handleFocus = _this.handleFocus.bind(_this);\n    _this.handleBlur = _this.handleBlur.bind(_this);\n    _this.setRef = _this.setRef.bind(_this);\n    return _this;\n  }\n\n  _createClass(LookupField, [{\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(newProps) {\n      if (this.props.value !== newProps.value) this.setState({ displayText: newProps.value });\n    }\n  }, {\n    key: 'handleChange',\n    value: function handleChange(value, selectedValue) {\n      if (value === -1) {\n        this.setState({ selectedIndex: -1 });\n        this.props.onSelect(selectedValue, this.state.selectedIndex);\n      } else {\n        this.props.onSearch(value);\n        this.setState({ displayText: value });\n      }\n    }\n  }, {\n    key: 'handleSpecialKey',\n    value: function handleSpecialKey(evt) {\n      if (evt.key === 'ArrowDown' && this.state.selectedIndex < this.props.dataSource.length) {\n        this.setState({\n          selectedIndex: this.state.selectedIndex + 1,\n          displayText: this.props.dataSource[this.state.selectedIndex + 1]\n        });\n      } else if (evt.key === 'ArrowUp' && this.state.selectedIndex >= 0) {\n        this.setState({\n          selectedIndex: this.state.selectedIndex - 1,\n          displayText: this.props.dataSource[this.state.selectedIndex - 1]\n        });\n      } else if (evt.key === 'Escape' || evt.key === 'Enter') {\n        if (this.props.isVerySmart && this.props.dataSource.length > 0 && this.state.selectedIndex === -1) {\n          this.props.onSelect(this.props.dataSource[0], 0);\n          if (typeof this.props.onEnter === 'function') {\n            this.props.onEnter(this.props.dataSource[0], 0);\n          }\n        } else {\n          this.props.onSelect(this.state.displayText, this.state.selectedIndex);\n          if (typeof this.props.onEnter === 'function') {\n            this.props.onEnter(this.state.displayText, this.state.selectedIndex);\n          }\n        }\n        this.setState({ selectedIndex: -1 });\n      }\n    }\n  }, {\n    key: 'handleMenuClick',\n    value: function handleMenuClick(index) {\n      this.setState({\n        displayText: this.props.dataSource[index],\n        selectedIndex: index\n      });\n    }\n  }, {\n    key: 'handleFocus',\n    value: function handleFocus() {\n      this.setState({ isFocused: true });\n    }\n  }, {\n    key: 'handleBlur',\n    value: function handleBlur() {\n      var self = this;\n      //Timeout gives menuitemClick the chance to set displayText\n      window.setTimeout(function () {\n        if (self.props.isVerySmart && self.props.dataSource.length > 0 && self.state.selectedIndex === -1) {\n          self.props.onSelect(self.props.dataSource[0], 0);\n        } else {\n          self.props.onSelect(self.state.displayText, self.state.selectedIndex);\n        }\n        self.setState({\n          selectedIndex: -1,\n          isFocused: false\n        });\n      }, 500);\n    }\n  }, {\n    key: 'setRef',\n    value: function setRef(ref) {\n      this.setState({ anchorEl: ref });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var self = this;\n      var styles = {\n        menuContainer: {\n          'width': '300px',\n          'maxHeight': '300px'\n        },\n        menuItem: {\n          'borderBottom': '1px solid ' + _palette2.default.greyLight,\n          'transition': 'all 300ms ease-in-out',\n          'margin': '0px 10px',\n          'padding': '10px',\n          'cursor': 'pointer'\n        },\n        selectedMenuItem: {\n          'backgroundColor': _palette2.default.greyLight,\n          'transition': 'all 300ms ease-in-out',\n          'borderBottom': '1px solid ' + _palette2.default.yellow,\n          'margin': '0px 10px',\n          'padding': '10px'\n        }\n      };\n      return _react2.default.createElement(\n        'div',\n        { ref: this.setRef,\n          style: this.props.style },\n        _react2.default.createElement(_textfield2.default, { label: this.props.label,\n          style: this.props.textFieldStyle,\n          topLabel: this.props.topLabel,\n          fullWidth: this.props.fullWidth,\n          leftIcon: this.props.leftIcon,\n          rightIcon: this.props.rightIcon,\n          height: this.props.height,\n          inputStyle: this.props.inputStyle,\n          pseudoStyle: this.props.pseudoStyle,\n          textSize: this.props.textSize,\n          borderRadius: this.props.borderRadius,\n          onChange: this.handleChange,\n          onKeyDown: this.handleSpecialKey,\n          onFocus: this.handleFocus,\n          onBlur: this.handleBlur,\n          value: this.state.displayText }),\n        _react2.default.createElement(\n          _react_popover2.default,\n          {\n            canAutoPosition: false,\n            style: styles.menuContainer,\n            open: this.state.isFocused && this.props.dataSource.length > 0,\n            onRequestClose: this.handleBlur,\n            anchorEl: this.state.anchorEl },\n          this.props.dataSource.map(function (item, n) {\n            return _react2.default.createElement(_react_menuitem2.default, { label: item,\n              key: n,\n              onTouchTap: self.handleMenuClick.bind(self, n),\n              active: n === self.state.selectedIndex });\n          })\n        )\n      );\n    }\n  }]);\n\n  return LookupField;\n}(_react2.default.Component);\n\n;\n\nLookupField.propTypes = {\n  label: _propTypes2.default.string,\n  topLabel: _propTypes2.default.string,\n  value: _propTypes2.default.string,\n  style: _propTypes2.default.object,\n  pseudoStyle: _propTypes2.default.object,\n  textFieldStyle: _propTypes2.default.object,\n  onSelect: _propTypes2.default.func,\n  onSearch: _propTypes2.default.func,\n  dataSource: _propTypes2.default.array.isRequired,\n  isVerySmart: _propTypes2.default.bool\n};\nexports.default = LookupField;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nif (process.env.NODE_ENV !== 'production') {\n  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&\n    Symbol.for &&\n    Symbol.for('react.element')) ||\n    0xeac7;\n\n  var isValidElement = function(object) {\n    return typeof object === 'object' &&\n      object !== null &&\n      object.$$typeof === REACT_ELEMENT_TYPE;\n  };\n\n  // By explicitly using `prop-types` you are opting into new development behavior.\n  // http://fb.me/prop-types-in-prod\n  var throwOnDirectAccess = true;\n  module.exports = __webpack_require__(8)(isValidElement, throwOnDirectAccess);\n} else {\n  // By explicitly using `prop-types` you are opting into new production behavior.\n  // http://fb.me/prop-types-in-prod\n  module.exports = __webpack_require__(11)();\n}\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/prop-types/index.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/prop-types/index.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar emptyFunction = __webpack_require__(2);\nvar invariant = __webpack_require__(3);\nvar warning = __webpack_require__(5);\nvar assign = __webpack_require__(9);\n\nvar ReactPropTypesSecret = __webpack_require__(4);\nvar checkPropTypes = __webpack_require__(10);\n\nmodule.exports = function(isValidElement, throwOnDirectAccess) {\n  /* global Symbol */\n  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;\n  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.\n\n  /**\n   * Returns the iterator method function contained on the iterable object.\n   *\n   * Be sure to invoke the function with the iterable as context:\n   *\n   *     var iteratorFn = getIteratorFn(myIterable);\n   *     if (iteratorFn) {\n   *       var iterator = iteratorFn.call(myIterable);\n   *       ...\n   *     }\n   *\n   * @param {?object} maybeIterable\n   * @return {?function}\n   */\n  function getIteratorFn(maybeIterable) {\n    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);\n    if (typeof iteratorFn === 'function') {\n      return iteratorFn;\n    }\n  }\n\n  /**\n   * Collection of methods that allow declaration and validation of props that are\n   * supplied to React components. Example usage:\n   *\n   *   var Props = require('ReactPropTypes');\n   *   var MyArticle = React.createClass({\n   *     propTypes: {\n   *       // An optional string prop named \"description\".\n   *       description: Props.string,\n   *\n   *       // A required enum prop named \"category\".\n   *       category: Props.oneOf(['News','Photos']).isRequired,\n   *\n   *       // A prop named \"dialog\" that requires an instance of Dialog.\n   *       dialog: Props.instanceOf(Dialog).isRequired\n   *     },\n   *     render: function() { ... }\n   *   });\n   *\n   * A more formal specification of how these methods are used:\n   *\n   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)\n   *   decl := ReactPropTypes.{type}(.isRequired)?\n   *\n   * Each and every declaration produces a function with the same signature. This\n   * allows the creation of custom validation functions. For example:\n   *\n   *  var MyLink = React.createClass({\n   *    propTypes: {\n   *      // An optional string or URI prop named \"href\".\n   *      href: function(props, propName, componentName) {\n   *        var propValue = props[propName];\n   *        if (propValue != null && typeof propValue !== 'string' &&\n   *            !(propValue instanceof URI)) {\n   *          return new Error(\n   *            'Expected a string or an URI for ' + propName + ' in ' +\n   *            componentName\n   *          );\n   *        }\n   *      }\n   *    },\n   *    render: function() {...}\n   *  });\n   *\n   * @internal\n   */\n\n  var ANONYMOUS = '<<anonymous>>';\n\n  // Important!\n  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.\n  var ReactPropTypes = {\n    array: createPrimitiveTypeChecker('array'),\n    bool: createPrimitiveTypeChecker('boolean'),\n    func: createPrimitiveTypeChecker('function'),\n    number: createPrimitiveTypeChecker('number'),\n    object: createPrimitiveTypeChecker('object'),\n    string: createPrimitiveTypeChecker('string'),\n    symbol: createPrimitiveTypeChecker('symbol'),\n\n    any: createAnyTypeChecker(),\n    arrayOf: createArrayOfTypeChecker,\n    element: createElementTypeChecker(),\n    instanceOf: createInstanceTypeChecker,\n    node: createNodeChecker(),\n    objectOf: createObjectOfTypeChecker,\n    oneOf: createEnumTypeChecker,\n    oneOfType: createUnionTypeChecker,\n    shape: createShapeTypeChecker,\n    exact: createStrictShapeTypeChecker,\n  };\n\n  /**\n   * inlined Object.is polyfill to avoid requiring consumers ship their own\n   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\n   */\n  /*eslint-disable no-self-compare*/\n  function is(x, y) {\n    // SameValue algorithm\n    if (x === y) {\n      // Steps 1-5, 7-10\n      // Steps 6.b-6.e: +0 != -0\n      return x !== 0 || 1 / x === 1 / y;\n    } else {\n      // Step 6.a: NaN == NaN\n      return x !== x && y !== y;\n    }\n  }\n  /*eslint-enable no-self-compare*/\n\n  /**\n   * We use an Error-like object for backward compatibility as people may call\n   * PropTypes directly and inspect their output. However, we don't use real\n   * Errors anymore. We don't inspect their stack anyway, and creating them\n   * is prohibitively expensive if they are created too often, such as what\n   * happens in oneOfType() for any type before the one that matched.\n   */\n  function PropTypeError(message) {\n    this.message = message;\n    this.stack = '';\n  }\n  // Make `instanceof Error` still work for returned errors.\n  PropTypeError.prototype = Error.prototype;\n\n  function createChainableTypeChecker(validate) {\n    if (process.env.NODE_ENV !== 'production') {\n      var manualPropTypeCallCache = {};\n      var manualPropTypeWarningCount = 0;\n    }\n    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {\n      componentName = componentName || ANONYMOUS;\n      propFullName = propFullName || propName;\n\n      if (secret !== ReactPropTypesSecret) {\n        if (throwOnDirectAccess) {\n          // New behavior only for users of `prop-types` package\n          invariant(\n            false,\n            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\n            'Use `PropTypes.checkPropTypes()` to call them. ' +\n            'Read more at http://fb.me/use-check-prop-types'\n          );\n        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {\n          // Old behavior for people using React.PropTypes\n          var cacheKey = componentName + ':' + propName;\n          if (\n            !manualPropTypeCallCache[cacheKey] &&\n            // Avoid spamming the console because they are often not actionable except for lib authors\n            manualPropTypeWarningCount < 3\n          ) {\n            warning(\n              false,\n              'You are manually calling a React.PropTypes validation ' +\n              'function for the `%s` prop on `%s`. This is deprecated ' +\n              'and will throw in the standalone `prop-types` package. ' +\n              'You may be seeing this warning due to a third-party PropTypes ' +\n              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',\n              propFullName,\n              componentName\n            );\n            manualPropTypeCallCache[cacheKey] = true;\n            manualPropTypeWarningCount++;\n          }\n        }\n      }\n      if (props[propName] == null) {\n        if (isRequired) {\n          if (props[propName] === null) {\n            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));\n          }\n          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));\n        }\n        return null;\n      } else {\n        return validate(props, propName, componentName, location, propFullName);\n      }\n    }\n\n    var chainedCheckType = checkType.bind(null, false);\n    chainedCheckType.isRequired = checkType.bind(null, true);\n\n    return chainedCheckType;\n  }\n\n  function createPrimitiveTypeChecker(expectedType) {\n    function validate(props, propName, componentName, location, propFullName, secret) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== expectedType) {\n        // `propValue` being instance of, say, date/regexp, pass the 'object'\n        // check, but we can offer a more precise error message here rather than\n        // 'of type `object`'.\n        var preciseType = getPreciseType(propValue);\n\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createAnyTypeChecker() {\n    return createChainableTypeChecker(emptyFunction.thatReturnsNull);\n  }\n\n  function createArrayOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');\n      }\n      var propValue = props[propName];\n      if (!Array.isArray(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));\n      }\n      for (var i = 0; i < propValue.length; i++) {\n        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);\n        if (error instanceof Error) {\n          return error;\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createElementTypeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      if (!isValidElement(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createInstanceTypeChecker(expectedClass) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!(props[propName] instanceof expectedClass)) {\n        var expectedClassName = expectedClass.name || ANONYMOUS;\n        var actualClassName = getClassName(props[propName]);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createEnumTypeChecker(expectedValues) {\n    if (!Array.isArray(expectedValues)) {\n      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;\n      return emptyFunction.thatReturnsNull;\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      for (var i = 0; i < expectedValues.length; i++) {\n        if (is(propValue, expectedValues[i])) {\n          return null;\n        }\n      }\n\n      var valuesString = JSON.stringify(expectedValues);\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createObjectOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');\n      }\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));\n      }\n      for (var key in propValue) {\n        if (propValue.hasOwnProperty(key)) {\n          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n          if (error instanceof Error) {\n            return error;\n          }\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createUnionTypeChecker(arrayOfTypeCheckers) {\n    if (!Array.isArray(arrayOfTypeCheckers)) {\n      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;\n      return emptyFunction.thatReturnsNull;\n    }\n\n    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n      var checker = arrayOfTypeCheckers[i];\n      if (typeof checker !== 'function') {\n        warning(\n          false,\n          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +\n          'received %s at index %s.',\n          getPostfixForTypeWarning(checker),\n          i\n        );\n        return emptyFunction.thatReturnsNull;\n      }\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n        var checker = arrayOfTypeCheckers[i];\n        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {\n          return null;\n        }\n      }\n\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createNodeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!isNode(props[propName])) {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n      for (var key in shapeTypes) {\n        var checker = shapeTypes[key];\n        if (!checker) {\n          continue;\n        }\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n        if (error) {\n          return error;\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createStrictShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n      // We need to check all keys in case some are required but missing from\n      // props.\n      var allKeys = assign({}, props[propName], shapeTypes);\n      for (var key in allKeys) {\n        var checker = shapeTypes[key];\n        if (!checker) {\n          return new PropTypeError(\n            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +\n            '\\nBad object: ' + JSON.stringify(props[propName], null, '  ') +\n            '\\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')\n          );\n        }\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n        if (error) {\n          return error;\n        }\n      }\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function isNode(propValue) {\n    switch (typeof propValue) {\n      case 'number':\n      case 'string':\n      case 'undefined':\n        return true;\n      case 'boolean':\n        return !propValue;\n      case 'object':\n        if (Array.isArray(propValue)) {\n          return propValue.every(isNode);\n        }\n        if (propValue === null || isValidElement(propValue)) {\n          return true;\n        }\n\n        var iteratorFn = getIteratorFn(propValue);\n        if (iteratorFn) {\n          var iterator = iteratorFn.call(propValue);\n          var step;\n          if (iteratorFn !== propValue.entries) {\n            while (!(step = iterator.next()).done) {\n              if (!isNode(step.value)) {\n                return false;\n              }\n            }\n          } else {\n            // Iterator will provide entry [k,v] tuples rather than values.\n            while (!(step = iterator.next()).done) {\n              var entry = step.value;\n              if (entry) {\n                if (!isNode(entry[1])) {\n                  return false;\n                }\n              }\n            }\n          }\n        } else {\n          return false;\n        }\n\n        return true;\n      default:\n        return false;\n    }\n  }\n\n  function isSymbol(propType, propValue) {\n    // Native Symbol.\n    if (propType === 'symbol') {\n      return true;\n    }\n\n    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'\n    if (propValue['@@toStringTag'] === 'Symbol') {\n      return true;\n    }\n\n    // Fallback for non-spec compliant Symbols which are polyfilled.\n    if (typeof Symbol === 'function' && propValue instanceof Symbol) {\n      return true;\n    }\n\n    return false;\n  }\n\n  // Equivalent of `typeof` but with special handling for array and regexp.\n  function getPropType(propValue) {\n    var propType = typeof propValue;\n    if (Array.isArray(propValue)) {\n      return 'array';\n    }\n    if (propValue instanceof RegExp) {\n      // Old webkits (at least until Android 4.0) return 'function' rather than\n      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/\n      // passes PropTypes.object.\n      return 'object';\n    }\n    if (isSymbol(propType, propValue)) {\n      return 'symbol';\n    }\n    return propType;\n  }\n\n  // This handles more types than `getPropType`. Only used for error messages.\n  // See `createPrimitiveTypeChecker`.\n  function getPreciseType(propValue) {\n    if (typeof propValue === 'undefined' || propValue === null) {\n      return '' + propValue;\n    }\n    var propType = getPropType(propValue);\n    if (propType === 'object') {\n      if (propValue instanceof Date) {\n        return 'date';\n      } else if (propValue instanceof RegExp) {\n        return 'regexp';\n      }\n    }\n    return propType;\n  }\n\n  // Returns a string that is postfixed to a warning about an invalid type.\n  // For example, \"undefined\" or \"of type array\"\n  function getPostfixForTypeWarning(value) {\n    var type = getPreciseType(value);\n    switch (type) {\n      case 'array':\n      case 'object':\n        return 'an ' + type;\n      case 'boolean':\n      case 'date':\n      case 'regexp':\n        return 'a ' + type;\n      default:\n        return type;\n    }\n  }\n\n  // Returns class name of the object, if any.\n  function getClassName(propValue) {\n    if (!propValue.constructor || !propValue.constructor.name) {\n      return ANONYMOUS;\n    }\n    return propValue.constructor.name;\n  }\n\n  ReactPropTypes.checkPropTypes = checkPropTypes;\n  ReactPropTypes.PropTypes = ReactPropTypes;\n\n  return ReactPropTypes;\n};\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/prop-types/factoryWithTypeCheckers.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/prop-types/factoryWithTypeCheckers.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/object-assign/index.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/object-assign/index.js?");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (process.env.NODE_ENV !== 'production') {\n  var invariant = __webpack_require__(3);\n  var warning = __webpack_require__(5);\n  var ReactPropTypesSecret = __webpack_require__(4);\n  var loggedTypeFailures = {};\n}\n\n/**\n * Assert that the values match with the type specs.\n * Error messages are memorized and will only be shown once.\n *\n * @param {object} typeSpecs Map of name to a ReactPropType\n * @param {object} values Runtime values that need to be type-checked\n * @param {string} location e.g. \"prop\", \"context\", \"child context\"\n * @param {string} componentName Name of the component for error messages.\n * @param {?Function} getStack Returns the component stack.\n * @private\n */\nfunction checkPropTypes(typeSpecs, values, location, componentName, getStack) {\n  if (process.env.NODE_ENV !== 'production') {\n    for (var typeSpecName in typeSpecs) {\n      if (typeSpecs.hasOwnProperty(typeSpecName)) {\n        var error;\n        // Prop type validation may throw. In case they do, we don't want to\n        // fail the render phase where it didn't fail before. So we log it.\n        // After these have been cleaned up, we'll let them throw.\n        try {\n          // This is intentionally an invariant that gets caught. It's the same\n          // behavior as without this statement except with a better message.\n          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);\n          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);\n        } catch (ex) {\n          error = ex;\n        }\n        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);\n        if (error instanceof Error && !(error.message in loggedTypeFailures)) {\n          // Only monitor this failure once because there tends to be a lot of the\n          // same error.\n          loggedTypeFailures[error.message] = true;\n\n          var stack = getStack ? getStack() : '';\n\n          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');\n        }\n      }\n    }\n  }\n}\n\nmodule.exports = checkPropTypes;\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/prop-types/checkPropTypes.js\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/prop-types/checkPropTypes.js?");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar emptyFunction = __webpack_require__(2);\nvar invariant = __webpack_require__(3);\nvar ReactPropTypesSecret = __webpack_require__(4);\n\nmodule.exports = function() {\n  function shim(props, propName, componentName, location, propFullName, secret) {\n    if (secret === ReactPropTypesSecret) {\n      // It is still safe when called from React.\n      return;\n    }\n    invariant(\n      false,\n      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\n      'Use PropTypes.checkPropTypes() to call them. ' +\n      'Read more at http://fb.me/use-check-prop-types'\n    );\n  };\n  shim.isRequired = shim;\n  function getShim() {\n    return shim;\n  };\n  // Important!\n  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.\n  var ReactPropTypes = {\n    array: shim,\n    bool: shim,\n    func: shim,\n    number: shim,\n    object: shim,\n    string: shim,\n    symbol: shim,\n\n    any: shim,\n    arrayOf: getShim,\n    element: shim,\n    instanceOf: getShim,\n    node: shim,\n    objectOf: getShim,\n    oneOf: getShim,\n    oneOfType: getShim,\n    shape: getShim,\n    exact: getShim\n  };\n\n  ReactPropTypes.checkPropTypes = emptyFunction;\n  ReactPropTypes.PropTypes = ReactPropTypes;\n\n  return ReactPropTypes;\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/prop-types/factoryWithThrowingShims.js\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/prop-types/factoryWithThrowingShims.js?");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory(__webpack_require__(1));\n\telse if(typeof define === 'function' && define.amd)\n\t\tdefine([\"react\"], factory);\n\telse if(typeof exports === 'object')\n\t\texports[\"TextField\"] = factory(require(\"react\"));\n\telse\n\t\troot[\"TextField\"] = factory(root[\"React\"]);\n})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_6__) {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 5);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, exports) {\n\neval(\"// shim for using process in browser\\nvar process = module.exports = {};\\n\\n// cached from whatever global is present so that test runners that stub it\\n// don't break things.  But we need to wrap it in a try catch in case it is\\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\\n// function because try/catches deoptimize in certain engines.\\n\\nvar cachedSetTimeout;\\nvar cachedClearTimeout;\\n\\nfunction defaultSetTimout() {\\n    throw new Error('setTimeout has not been defined');\\n}\\nfunction defaultClearTimeout () {\\n    throw new Error('clearTimeout has not been defined');\\n}\\n(function () {\\n    try {\\n        if (typeof setTimeout === 'function') {\\n            cachedSetTimeout = setTimeout;\\n        } else {\\n            cachedSetTimeout = defaultSetTimout;\\n        }\\n    } catch (e) {\\n        cachedSetTimeout = defaultSetTimout;\\n    }\\n    try {\\n        if (typeof clearTimeout === 'function') {\\n            cachedClearTimeout = clearTimeout;\\n        } else {\\n            cachedClearTimeout = defaultClearTimeout;\\n        }\\n    } catch (e) {\\n        cachedClearTimeout = defaultClearTimeout;\\n    }\\n} ())\\nfunction runTimeout(fun) {\\n    if (cachedSetTimeout === setTimeout) {\\n        //normal enviroments in sane situations\\n        return setTimeout(fun, 0);\\n    }\\n    // if setTimeout wasn't available but was latter defined\\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\\n        cachedSetTimeout = setTimeout;\\n        return setTimeout(fun, 0);\\n    }\\n    try {\\n        // when when somebody has screwed with setTimeout but no I.E. maddness\\n        return cachedSetTimeout(fun, 0);\\n    } catch(e){\\n        try {\\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\\n            return cachedSetTimeout.call(null, fun, 0);\\n        } catch(e){\\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\\n            return cachedSetTimeout.call(this, fun, 0);\\n        }\\n    }\\n\\n\\n}\\nfunction runClearTimeout(marker) {\\n    if (cachedClearTimeout === clearTimeout) {\\n        //normal enviroments in sane situations\\n        return clearTimeout(marker);\\n    }\\n    // if clearTimeout wasn't available but was latter defined\\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\\n        cachedClearTimeout = clearTimeout;\\n        return clearTimeout(marker);\\n    }\\n    try {\\n        // when when somebody has screwed with setTimeout but no I.E. maddness\\n        return cachedClearTimeout(marker);\\n    } catch (e){\\n        try {\\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\\n            return cachedClearTimeout.call(null, marker);\\n        } catch (e){\\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\\n            return cachedClearTimeout.call(this, marker);\\n        }\\n    }\\n\\n\\n\\n}\\nvar queue = [];\\nvar draining = false;\\nvar currentQueue;\\nvar queueIndex = -1;\\n\\nfunction cleanUpNextTick() {\\n    if (!draining || !currentQueue) {\\n        return;\\n    }\\n    draining = false;\\n    if (currentQueue.length) {\\n        queue = currentQueue.concat(queue);\\n    } else {\\n        queueIndex = -1;\\n    }\\n    if (queue.length) {\\n        drainQueue();\\n    }\\n}\\n\\nfunction drainQueue() {\\n    if (draining) {\\n        return;\\n    }\\n    var timeout = runTimeout(cleanUpNextTick);\\n    draining = true;\\n\\n    var len = queue.length;\\n    while(len) {\\n        currentQueue = queue;\\n        queue = [];\\n        while (++queueIndex < len) {\\n            if (currentQueue) {\\n                currentQueue[queueIndex].run();\\n            }\\n        }\\n        queueIndex = -1;\\n        len = queue.length;\\n    }\\n    currentQueue = null;\\n    draining = false;\\n    runClearTimeout(timeout);\\n}\\n\\nprocess.nextTick = function (fun) {\\n    var args = new Array(arguments.length - 1);\\n    if (arguments.length > 1) {\\n        for (var i = 1; i < arguments.length; i++) {\\n            args[i - 1] = arguments[i];\\n        }\\n    }\\n    queue.push(new Item(fun, args));\\n    if (queue.length === 1 && !draining) {\\n        runTimeout(drainQueue);\\n    }\\n};\\n\\n// v8 likes predictible objects\\nfunction Item(fun, array) {\\n    this.fun = fun;\\n    this.array = array;\\n}\\nItem.prototype.run = function () {\\n    this.fun.apply(null, this.array);\\n};\\nprocess.title = 'browser';\\nprocess.browser = true;\\nprocess.env = {};\\nprocess.argv = [];\\nprocess.version = ''; // empty string to avoid regexp issues\\nprocess.versions = {};\\n\\nfunction noop() {}\\n\\nprocess.on = noop;\\nprocess.addListener = noop;\\nprocess.once = noop;\\nprocess.off = noop;\\nprocess.removeListener = noop;\\nprocess.removeAllListeners = noop;\\nprocess.emit = noop;\\nprocess.prependListener = noop;\\nprocess.prependOnceListener = noop;\\n\\nprocess.listeners = function (name) { return [] }\\n\\nprocess.binding = function (name) {\\n    throw new Error('process.binding is not supported');\\n};\\n\\nprocess.cwd = function () { return '/' };\\nprocess.chdir = function (dir) {\\n    throw new Error('process.chdir is not supported');\\n};\\nprocess.umask = function() { return 0; };\\n\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./node_modules/process/browser.js\\n// module id = 0\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./node_modules/process/browser.js?\");\n\n/***/ }),\n/* 1 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"\\n\\n/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n *\\n * This source code is licensed under the MIT license found in the\\n * LICENSE file in the root directory of this source tree.\\n *\\n * \\n */\\n\\nfunction makeEmptyFunction(arg) {\\n  return function () {\\n    return arg;\\n  };\\n}\\n\\n/**\\n * This function accepts and discards inputs; it has no side effects. This is\\n * primarily useful idiomatically for overridable function endpoints which\\n * always need to be callable, since JS lacks a null-call idiom ala Cocoa.\\n */\\nvar emptyFunction = function emptyFunction() {};\\n\\nemptyFunction.thatReturns = makeEmptyFunction;\\nemptyFunction.thatReturnsFalse = makeEmptyFunction(false);\\nemptyFunction.thatReturnsTrue = makeEmptyFunction(true);\\nemptyFunction.thatReturnsNull = makeEmptyFunction(null);\\nemptyFunction.thatReturnsThis = function () {\\n  return this;\\n};\\nemptyFunction.thatReturnsArgument = function (arg) {\\n  return arg;\\n};\\n\\nmodule.exports = emptyFunction;\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./node_modules/fbjs/lib/emptyFunction.js\\n// module id = 1\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./node_modules/fbjs/lib/emptyFunction.js?\");\n\n/***/ }),\n/* 2 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"/* WEBPACK VAR INJECTION */(function(process) {/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n *\\n * This source code is licensed under the MIT license found in the\\n * LICENSE file in the root directory of this source tree.\\n *\\n */\\n\\n\\n\\n/**\\n * Use invariant() to assert state which your program assumes to be true.\\n *\\n * Provide sprintf-style format (only %s is supported) and arguments\\n * to provide information about what broke and what you were\\n * expecting.\\n *\\n * The invariant message will be stripped in production, but the invariant\\n * will remain to ensure logic does not differ in production.\\n */\\n\\nvar validateFormat = function validateFormat(format) {};\\n\\nif (process.env.NODE_ENV !== 'production') {\\n  validateFormat = function validateFormat(format) {\\n    if (format === undefined) {\\n      throw new Error('invariant requires an error message argument');\\n    }\\n  };\\n}\\n\\nfunction invariant(condition, format, a, b, c, d, e, f) {\\n  validateFormat(format);\\n\\n  if (!condition) {\\n    var error;\\n    if (format === undefined) {\\n      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');\\n    } else {\\n      var args = [a, b, c, d, e, f];\\n      var argIndex = 0;\\n      error = new Error(format.replace(/%s/g, function () {\\n        return args[argIndex++];\\n      }));\\n      error.name = 'Invariant Violation';\\n    }\\n\\n    error.framesToPop = 1; // we don't care about invariant's own frame\\n    throw error;\\n  }\\n}\\n\\nmodule.exports = invariant;\\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./node_modules/fbjs/lib/invariant.js\\n// module id = 2\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./node_modules/fbjs/lib/invariant.js?\");\n\n/***/ }),\n/* 3 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n *\\n * This source code is licensed under the MIT license found in the\\n * LICENSE file in the root directory of this source tree.\\n */\\n\\n\\n\\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\\n\\nmodule.exports = ReactPropTypesSecret;\\n\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./node_modules/prop-types/lib/ReactPropTypesSecret.js\\n// module id = 3\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./node_modules/prop-types/lib/ReactPropTypesSecret.js?\");\n\n/***/ }),\n/* 4 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"/* WEBPACK VAR INJECTION */(function(process) {/**\\n * Copyright (c) 2014-present, Facebook, Inc.\\n *\\n * This source code is licensed under the MIT license found in the\\n * LICENSE file in the root directory of this source tree.\\n *\\n */\\n\\n\\n\\nvar emptyFunction = __webpack_require__(1);\\n\\n/**\\n * Similar to invariant but only logs a warning if the condition is not met.\\n * This can be used to log issues in development environments in critical\\n * paths. Removing the logging code for production environments will keep the\\n * same logic and follow the same code paths.\\n */\\n\\nvar warning = emptyFunction;\\n\\nif (process.env.NODE_ENV !== 'production') {\\n  var printWarning = function printWarning(format) {\\n    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\\n      args[_key - 1] = arguments[_key];\\n    }\\n\\n    var argIndex = 0;\\n    var message = 'Warning: ' + format.replace(/%s/g, function () {\\n      return args[argIndex++];\\n    });\\n    if (typeof console !== 'undefined') {\\n      console.error(message);\\n    }\\n    try {\\n      // --- Welcome to debugging React ---\\n      // This error was thrown as a convenience so that you can use this stack\\n      // to find the callsite that caused this warning to fire.\\n      throw new Error(message);\\n    } catch (x) {}\\n  };\\n\\n  warning = function warning(condition, format) {\\n    if (format === undefined) {\\n      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');\\n    }\\n\\n    if (format.indexOf('Failed Composite propType: ') === 0) {\\n      return; // Ignore CompositeComponent proptype check.\\n    }\\n\\n    if (!condition) {\\n      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {\\n        args[_key2 - 2] = arguments[_key2];\\n      }\\n\\n      printWarning.apply(undefined, [format].concat(args));\\n    }\\n  };\\n}\\n\\nmodule.exports = warning;\\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./node_modules/fbjs/lib/warning.js\\n// module id = 4\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./node_modules/fbjs/lib/warning.js?\");\n\n/***/ }),\n/* 5 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"\\n\\nObject.defineProperty(exports, \\\"__esModule\\\", {\\n  value: true\\n});\\n\\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\\\"value\\\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\\n\\nvar _react = __webpack_require__(6);\\n\\nvar _react2 = _interopRequireDefault(_react);\\n\\nvar _propTypes = __webpack_require__(7);\\n\\nvar _propTypes2 = _interopRequireDefault(_propTypes);\\n\\nvar _palette = __webpack_require__(12);\\n\\nvar _palette2 = _interopRequireDefault(_palette);\\n\\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\\n\\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\\\"Cannot call a class as a function\\\"); } }\\n\\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\\\"this hasn't been initialised - super() hasn't been called\\\"); } return call && (typeof call === \\\"object\\\" || typeof call === \\\"function\\\") ? call : self; }\\n\\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \\\"function\\\" && superClass !== null) { throw new TypeError(\\\"Super expression must either be null or a function, not \\\" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\\n\\nvar TextInput = function (_React$Component) {\\n  _inherits(TextInput, _React$Component);\\n\\n  function TextInput(props) {\\n    _classCallCheck(this, TextInput);\\n\\n    var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));\\n\\n    _this.state = { focused: false };\\n    if (props.palette) {\\n      _this.palette = _this.props.palette;\\n    } else {\\n      _this.palette = _palette2.default;\\n    }\\n    _this.setFocus = _this.setFocus.bind(_this);\\n    _this.unsetFocus = _this.unsetFocus.bind(_this);\\n    _this.handleChange = _this.handleChange.bind(_this);\\n    _this.handleKeyDown = _this.handleKeyDown.bind(_this);\\n    return _this;\\n  }\\n\\n  _createClass(TextInput, [{\\n    key: 'setFocus',\\n    value: function setFocus() {\\n      if (this.props.onFocus) this.props.onFocus();\\n      this.setState({ focused: true });\\n    }\\n  }, {\\n    key: 'unsetFocus',\\n    value: function unsetFocus(evt) {\\n      if (this.props.onBlur) {\\n        this.props.onBlur(evt);\\n      }\\n      this.setState({ focused: false });\\n    }\\n  }, {\\n    key: 'handleChange',\\n    value: function handleChange(evt) {\\n      if (typeof this.props.onChange === 'function') {\\n        this.props.onChange(evt.target.value);\\n      }\\n    }\\n  }, {\\n    key: 'handleKeyDown',\\n    value: function handleKeyDown(evt) {\\n      if (this.props.onKeyDown) this.props.onKeyDown(evt);\\n      if (evt.key === 'Enter' && this.props.onEnter) this.props.onEnter();\\n    }\\n  }, {\\n    key: 'render',\\n    value: function render() {\\n      var isMobile = !window.matchMedia('(min-width : 500px)').matches;\\n      var styles = {\\n        main: {\\n          'margin': '10px 0px',\\n          'position': 'relative'\\n        },\\n        pseudo: {\\n          'position': 'relative',\\n          'borderTop': this.state.focused ? '1px solid ' + (this.props.focusBorder ? this.props.focusBorder : this.palette.grey) : '1px solid ' + (this.props.errorText ? this.palette.errorOrange : this.palette.greyLight),\\n          'borderRight': this.state.focused ? '1px solid ' + (this.props.focusBorder ? this.props.focusBorder : this.palette.grey) : '1px solid ' + (this.props.errorText ? this.palette.errorOrange : this.palette.greyLight),\\n          'borderBottom': this.state.focused ? '1px solid ' + (this.props.focusBorder ? this.props.focusBorder : this.palette.grey) : '1px solid ' + (this.props.errorText ? this.palette.errorOrange : this.palette.greyLight),\\n          'borderLeft': this.state.focused ? '1px solid ' + (this.props.focusBorder ? this.props.focusBorder : this.palette.grey) : '1px solid ' + (this.props.errorText ? this.palette.errorOrange : this.palette.greyLight),\\n          'backgroundColor': this.props.disabled ? '#c3c3c3' : this.palette.white,\\n          'color': this.props.disable ? '#868686' : null,\\n          'borderRadius': this.props.borderRadius ? this.props.borderRadius : '2px',\\n          'maxWidth': this.props.fullWidth ? null : isMobile ? '89%' : '380px',\\n          'margin': 'auto',\\n          'textAlign': 'left',\\n          'overflow': 'hidden'\\n        },\\n        inputContainer: {\\n          'width': this.props.isProfile || this.props.type === 'multiline' ? '100%' : '89%',\\n          'overflow': this.props.type !== 'multiline' ? 'hidden' : 'visible',\\n          marginLeft: this.props.leftIcon ? '6%' : null\\n        },\\n        textField: {\\n          'border': 'none',\\n          'outline': 'none',\\n          'backgroundColor': this.props.disabled ? '#c3c3c3' : this.palette.white,\\n          'lineHeight': this.props.type === 'multiline' ? null : this.props.height || '45px',\\n          'height': this.props.type === 'multiline' ? '200px' : this.props.height || '45px',\\n          'width': '100%',\\n          'padding': '0px 15px',\\n          'fontSize': this.props.textSize ? this.props.textSize : '13pt',\\n          'fontFamily': \\\"'Lato', sans-serif\\\"\\n        },\\n        iconContainerRight: {\\n          'color': this.state.focused ? this.palette.secondaryLight : this.palette.greyLight,\\n          'position': 'absolute',\\n          'right': '10px',\\n          'top': '0px',\\n          'lineHeight': this.props.height || '45px',\\n          'textAlign': 'center',\\n          'width': '20px',\\n          'fontSize': '18pt',\\n          'transition': 'all 300ms ease-in-out'\\n        },\\n        iconContainerLeft: {\\n          'color': this.state.focused ? this.palette.blueLight : this.palette.greyLight,\\n          'position': 'absolute',\\n          'left': '10px',\\n          'top': '0px',\\n          'lineHeight': this.props.height || '45px',\\n          'textAlign': 'center',\\n          'width': '20px',\\n          'fontSize': '18pt',\\n          'transition': 'all 300ms ease-in-out'\\n        },\\n        error: {\\n          'color': this.palette.white,\\n          'backgroundColor': this.palette.errorOrange,\\n          'textAlign': 'center',\\n          'fontSize': '11pt',\\n          'position': 'absolute',\\n          'maxWidth': this.props.fullWidth ? null : isMobile ? '89%' : '380px',\\n          'margin': 'auto',\\n          'border': !this.props.fullWidth && this.props.errorText ? '1px solid ' + this.palette.errorOrange : null,\\n          'left': '0px',\\n          'right': '0px',\\n          'bottom': this.props.errorText ? '-8px' : '0px',\\n          'height': this.props.errorText ? '19px' : '0px',\\n          'borderRadius': '0px 0px 2px 2px',\\n          'transition': 'all 300ms ease-in-out',\\n          'overflow': 'hidden'\\n        },\\n        success: {\\n          'color': this.palette.white,\\n          'backgroundColor': this.palette.successGreen,\\n          'textAlign': 'center',\\n          'fontSize': '11pt',\\n          'position': 'absolute',\\n          'maxWidth': this.props.fullWidth ? null : isMobile ? '89%' : '380px',\\n          'border': !this.props.fullWidth && this.props.successText ? '1px solid ' + this.palette.successGreen : null,\\n          'margin': 'auto',\\n          'left': '0px',\\n          'right': '0px',\\n          'bottom': this.props.successText ? '-8px' : '0px',\\n          'height': this.props.successText ? '19px' : '0px',\\n          'borderRadius': '0px 0px 2px 2px',\\n          'transition': 'all 300ms ease-in-out',\\n          'overflow': 'hidden'\\n        },\\n        label: {\\n          fontWeight: '600',\\n          marginBottom: '5px'\\n        }\\n      };\\n      styles.main = Object.assign({}, styles.main, this.props.style);\\n      styles.textField = Object.assign({}, styles.textField, this.props.inputStyle);\\n      styles.pseudo = Object.assign({}, styles.pseudo, this.props.pseudoStyle);\\n      styles.iconContainerLeft = Object.assign({}, styles.iconContainerLeft, this.props.iconStyle);\\n      styles.iconContainerRight = Object.assign({}, styles.iconContainerRight, this.props.iconStyle);\\n      return _react2.default.createElement(\\n        'div',\\n        { style: styles.main },\\n        _react2.default.createElement(\\n          'div',\\n          { style: styles.label },\\n          this.props.topLabel\\n        ),\\n        _react2.default.createElement(\\n          'div',\\n          { style: styles.pseudo },\\n          _react2.default.createElement(\\n            'div',\\n            { style: styles.inputContainer },\\n            this.props.type === 'multiline' ? _react2.default.createElement('textarea', { placeholder: this.props.label,\\n              readOnly: !!this.props.disabled,\\n              value: this.props.value,\\n              onChange: this.handleChange,\\n              onKeyDown: this.handleKeyDown,\\n              onFocus: this.setFocus,\\n              onBlur: this.unsetFocus,\\n              style: styles.textField,\\n              id: this.props.id,\\n              autoFocus: this.props.autofocus,\\n              name: this.props.name }) : _react2.default.createElement('input', { type: this.props.type || 'text',\\n              placeholder: this.props.label,\\n              readOnly: !!this.props.disabled,\\n              value: this.props.value,\\n              onChange: this.handleChange,\\n              onKeyDown: this.handleKeyDown,\\n              onFocus: this.setFocus,\\n              onBlur: this.unsetFocus,\\n              style: styles.textField,\\n              id: this.props.id,\\n              autoFocus: this.props.autofocus,\\n              name: this.props.name,\\n              maxLength: this.props.maxLength })\\n          ),\\n          this.props.rightIcon ? _react2.default.createElement(\\n            'div',\\n            { style: styles.iconContainerRight },\\n            this.props.rightIcon\\n          ) : this.props.leftIcon ? _react2.default.createElement(\\n            'div',\\n            { style: styles.iconContainerLeft },\\n            this.props.leftIcon\\n          ) : null\\n        ),\\n        _react2.default.createElement(\\n          'div',\\n          { style: styles.error },\\n          this.props.errorText\\n        ),\\n        _react2.default.createElement(\\n          'div',\\n          { style: styles.success },\\n          this.props.successText\\n        )\\n      );\\n    }\\n  }]);\\n\\n  return TextInput;\\n}(_react2.default.Component);\\n\\n;\\n\\nTextInput.propTypes = {\\n  fullWidth: _propTypes2.default.bool,\\n  onChange: _propTypes2.default.func,\\n  onFocus: _propTypes2.default.func,\\n  onBlur: _propTypes2.default.func,\\n  onEnter: _propTypes2.default.func,\\n  label: _propTypes2.default.string,\\n  topLabel: _propTypes2.default.string,\\n  value: _propTypes2.default.string,\\n  errorText: _propTypes2.default.string,\\n  rightIcon: _propTypes2.default.node,\\n  leftIcon: _propTypes2.default.node,\\n  type: _propTypes2.default.string,\\n  autofocus: _propTypes2.default.bool,\\n  disabled: _propTypes2.default.bool,\\n  style: _propTypes2.default.object,\\n  inputStyle: _propTypes2.default.object,\\n  pseudoStyle: _propTypes2.default.object,\\n  textSize: _propTypes2.default.string,\\n  height: _propTypes2.default.string,\\n  palette: _propTypes2.default.object\\n};\\nexports.default = TextInput;\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./src/index.js\\n// module id = 5\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./src/index.js?\");\n\n/***/ }),\n/* 6 */\n/***/ (function(module, exports) {\n\neval(\"module.exports = __WEBPACK_EXTERNAL_MODULE_6__;\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// external {\\\"root\\\":\\\"React\\\",\\\"commonjs2\\\":\\\"react\\\",\\\"commonjs\\\":\\\"react\\\",\\\"amd\\\":\\\"react\\\"}\\n// module id = 6\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?\");\n\n/***/ }),\n/* 7 */\n/***/ (function(module, exports, __webpack_require__) {\n\neval(\"/* WEBPACK VAR INJECTION */(function(process) {/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n *\\n * This source code is licensed under the MIT license found in the\\n * LICENSE file in the root directory of this source tree.\\n */\\n\\nif (process.env.NODE_ENV !== 'production') {\\n  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&\\n    Symbol.for &&\\n    Symbol.for('react.element')) ||\\n    0xeac7;\\n\\n  var isValidElement = function(object) {\\n    return typeof object === 'object' &&\\n      object !== null &&\\n      object.$$typeof === REACT_ELEMENT_TYPE;\\n  };\\n\\n  // By explicitly using `prop-types` you are opting into new development behavior.\\n  // http://fb.me/prop-types-in-prod\\n  var throwOnDirectAccess = true;\\n  module.exports = __webpack_require__(8)(isValidElement, throwOnDirectAccess);\\n} else {\\n  // By explicitly using `prop-types` you are opting into new production behavior.\\n  // http://fb.me/prop-types-in-prod\\n  module.exports = __webpack_require__(11)();\\n}\\n\\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./node_modules/prop-types/index.js\\n// module id = 7\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./node_modules/prop-types/index.js?\");\n\n/***/ }),\n/* 8 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"/* WEBPACK VAR INJECTION */(function(process) {/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n *\\n * This source code is licensed under the MIT license found in the\\n * LICENSE file in the root directory of this source tree.\\n */\\n\\n\\n\\nvar emptyFunction = __webpack_require__(1);\\nvar invariant = __webpack_require__(2);\\nvar warning = __webpack_require__(4);\\nvar assign = __webpack_require__(9);\\n\\nvar ReactPropTypesSecret = __webpack_require__(3);\\nvar checkPropTypes = __webpack_require__(10);\\n\\nmodule.exports = function(isValidElement, throwOnDirectAccess) {\\n  /* global Symbol */\\n  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;\\n  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.\\n\\n  /**\\n   * Returns the iterator method function contained on the iterable object.\\n   *\\n   * Be sure to invoke the function with the iterable as context:\\n   *\\n   *     var iteratorFn = getIteratorFn(myIterable);\\n   *     if (iteratorFn) {\\n   *       var iterator = iteratorFn.call(myIterable);\\n   *       ...\\n   *     }\\n   *\\n   * @param {?object} maybeIterable\\n   * @return {?function}\\n   */\\n  function getIteratorFn(maybeIterable) {\\n    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);\\n    if (typeof iteratorFn === 'function') {\\n      return iteratorFn;\\n    }\\n  }\\n\\n  /**\\n   * Collection of methods that allow declaration and validation of props that are\\n   * supplied to React components. Example usage:\\n   *\\n   *   var Props = require('ReactPropTypes');\\n   *   var MyArticle = React.createClass({\\n   *     propTypes: {\\n   *       // An optional string prop named \\\"description\\\".\\n   *       description: Props.string,\\n   *\\n   *       // A required enum prop named \\\"category\\\".\\n   *       category: Props.oneOf(['News','Photos']).isRequired,\\n   *\\n   *       // A prop named \\\"dialog\\\" that requires an instance of Dialog.\\n   *       dialog: Props.instanceOf(Dialog).isRequired\\n   *     },\\n   *     render: function() { ... }\\n   *   });\\n   *\\n   * A more formal specification of how these methods are used:\\n   *\\n   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)\\n   *   decl := ReactPropTypes.{type}(.isRequired)?\\n   *\\n   * Each and every declaration produces a function with the same signature. This\\n   * allows the creation of custom validation functions. For example:\\n   *\\n   *  var MyLink = React.createClass({\\n   *    propTypes: {\\n   *      // An optional string or URI prop named \\\"href\\\".\\n   *      href: function(props, propName, componentName) {\\n   *        var propValue = props[propName];\\n   *        if (propValue != null && typeof propValue !== 'string' &&\\n   *            !(propValue instanceof URI)) {\\n   *          return new Error(\\n   *            'Expected a string or an URI for ' + propName + ' in ' +\\n   *            componentName\\n   *          );\\n   *        }\\n   *      }\\n   *    },\\n   *    render: function() {...}\\n   *  });\\n   *\\n   * @internal\\n   */\\n\\n  var ANONYMOUS = '<<anonymous>>';\\n\\n  // Important!\\n  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.\\n  var ReactPropTypes = {\\n    array: createPrimitiveTypeChecker('array'),\\n    bool: createPrimitiveTypeChecker('boolean'),\\n    func: createPrimitiveTypeChecker('function'),\\n    number: createPrimitiveTypeChecker('number'),\\n    object: createPrimitiveTypeChecker('object'),\\n    string: createPrimitiveTypeChecker('string'),\\n    symbol: createPrimitiveTypeChecker('symbol'),\\n\\n    any: createAnyTypeChecker(),\\n    arrayOf: createArrayOfTypeChecker,\\n    element: createElementTypeChecker(),\\n    instanceOf: createInstanceTypeChecker,\\n    node: createNodeChecker(),\\n    objectOf: createObjectOfTypeChecker,\\n    oneOf: createEnumTypeChecker,\\n    oneOfType: createUnionTypeChecker,\\n    shape: createShapeTypeChecker,\\n    exact: createStrictShapeTypeChecker,\\n  };\\n\\n  /**\\n   * inlined Object.is polyfill to avoid requiring consumers ship their own\\n   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\\n   */\\n  /*eslint-disable no-self-compare*/\\n  function is(x, y) {\\n    // SameValue algorithm\\n    if (x === y) {\\n      // Steps 1-5, 7-10\\n      // Steps 6.b-6.e: +0 != -0\\n      return x !== 0 || 1 / x === 1 / y;\\n    } else {\\n      // Step 6.a: NaN == NaN\\n      return x !== x && y !== y;\\n    }\\n  }\\n  /*eslint-enable no-self-compare*/\\n\\n  /**\\n   * We use an Error-like object for backward compatibility as people may call\\n   * PropTypes directly and inspect their output. However, we don't use real\\n   * Errors anymore. We don't inspect their stack anyway, and creating them\\n   * is prohibitively expensive if they are created too often, such as what\\n   * happens in oneOfType() for any type before the one that matched.\\n   */\\n  function PropTypeError(message) {\\n    this.message = message;\\n    this.stack = '';\\n  }\\n  // Make `instanceof Error` still work for returned errors.\\n  PropTypeError.prototype = Error.prototype;\\n\\n  function createChainableTypeChecker(validate) {\\n    if (process.env.NODE_ENV !== 'production') {\\n      var manualPropTypeCallCache = {};\\n      var manualPropTypeWarningCount = 0;\\n    }\\n    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {\\n      componentName = componentName || ANONYMOUS;\\n      propFullName = propFullName || propName;\\n\\n      if (secret !== ReactPropTypesSecret) {\\n        if (throwOnDirectAccess) {\\n          // New behavior only for users of `prop-types` package\\n          invariant(\\n            false,\\n            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\\n            'Use `PropTypes.checkPropTypes()` to call them. ' +\\n            'Read more at http://fb.me/use-check-prop-types'\\n          );\\n        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {\\n          // Old behavior for people using React.PropTypes\\n          var cacheKey = componentName + ':' + propName;\\n          if (\\n            !manualPropTypeCallCache[cacheKey] &&\\n            // Avoid spamming the console because they are often not actionable except for lib authors\\n            manualPropTypeWarningCount < 3\\n          ) {\\n            warning(\\n              false,\\n              'You are manually calling a React.PropTypes validation ' +\\n              'function for the `%s` prop on `%s`. This is deprecated ' +\\n              'and will throw in the standalone `prop-types` package. ' +\\n              'You may be seeing this warning due to a third-party PropTypes ' +\\n              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',\\n              propFullName,\\n              componentName\\n            );\\n            manualPropTypeCallCache[cacheKey] = true;\\n            manualPropTypeWarningCount++;\\n          }\\n        }\\n      }\\n      if (props[propName] == null) {\\n        if (isRequired) {\\n          if (props[propName] === null) {\\n            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));\\n          }\\n          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));\\n        }\\n        return null;\\n      } else {\\n        return validate(props, propName, componentName, location, propFullName);\\n      }\\n    }\\n\\n    var chainedCheckType = checkType.bind(null, false);\\n    chainedCheckType.isRequired = checkType.bind(null, true);\\n\\n    return chainedCheckType;\\n  }\\n\\n  function createPrimitiveTypeChecker(expectedType) {\\n    function validate(props, propName, componentName, location, propFullName, secret) {\\n      var propValue = props[propName];\\n      var propType = getPropType(propValue);\\n      if (propType !== expectedType) {\\n        // `propValue` being instance of, say, date/regexp, pass the 'object'\\n        // check, but we can offer a more precise error message here rather than\\n        // 'of type `object`'.\\n        var preciseType = getPreciseType(propValue);\\n\\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));\\n      }\\n      return null;\\n    }\\n    return createChainableTypeChecker(validate);\\n  }\\n\\n  function createAnyTypeChecker() {\\n    return createChainableTypeChecker(emptyFunction.thatReturnsNull);\\n  }\\n\\n  function createArrayOfTypeChecker(typeChecker) {\\n    function validate(props, propName, componentName, location, propFullName) {\\n      if (typeof typeChecker !== 'function') {\\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');\\n      }\\n      var propValue = props[propName];\\n      if (!Array.isArray(propValue)) {\\n        var propType = getPropType(propValue);\\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));\\n      }\\n      for (var i = 0; i < propValue.length; i++) {\\n        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);\\n        if (error instanceof Error) {\\n          return error;\\n        }\\n      }\\n      return null;\\n    }\\n    return createChainableTypeChecker(validate);\\n  }\\n\\n  function createElementTypeChecker() {\\n    function validate(props, propName, componentName, location, propFullName) {\\n      var propValue = props[propName];\\n      if (!isValidElement(propValue)) {\\n        var propType = getPropType(propValue);\\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));\\n      }\\n      return null;\\n    }\\n    return createChainableTypeChecker(validate);\\n  }\\n\\n  function createInstanceTypeChecker(expectedClass) {\\n    function validate(props, propName, componentName, location, propFullName) {\\n      if (!(props[propName] instanceof expectedClass)) {\\n        var expectedClassName = expectedClass.name || ANONYMOUS;\\n        var actualClassName = getClassName(props[propName]);\\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));\\n      }\\n      return null;\\n    }\\n    return createChainableTypeChecker(validate);\\n  }\\n\\n  function createEnumTypeChecker(expectedValues) {\\n    if (!Array.isArray(expectedValues)) {\\n      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;\\n      return emptyFunction.thatReturnsNull;\\n    }\\n\\n    function validate(props, propName, componentName, location, propFullName) {\\n      var propValue = props[propName];\\n      for (var i = 0; i < expectedValues.length; i++) {\\n        if (is(propValue, expectedValues[i])) {\\n          return null;\\n        }\\n      }\\n\\n      var valuesString = JSON.stringify(expectedValues);\\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));\\n    }\\n    return createChainableTypeChecker(validate);\\n  }\\n\\n  function createObjectOfTypeChecker(typeChecker) {\\n    function validate(props, propName, componentName, location, propFullName) {\\n      if (typeof typeChecker !== 'function') {\\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');\\n      }\\n      var propValue = props[propName];\\n      var propType = getPropType(propValue);\\n      if (propType !== 'object') {\\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));\\n      }\\n      for (var key in propValue) {\\n        if (propValue.hasOwnProperty(key)) {\\n          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\\n          if (error instanceof Error) {\\n            return error;\\n          }\\n        }\\n      }\\n      return null;\\n    }\\n    return createChainableTypeChecker(validate);\\n  }\\n\\n  function createUnionTypeChecker(arrayOfTypeCheckers) {\\n    if (!Array.isArray(arrayOfTypeCheckers)) {\\n      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;\\n      return emptyFunction.thatReturnsNull;\\n    }\\n\\n    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\\n      var checker = arrayOfTypeCheckers[i];\\n      if (typeof checker !== 'function') {\\n        warning(\\n          false,\\n          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +\\n          'received %s at index %s.',\\n          getPostfixForTypeWarning(checker),\\n          i\\n        );\\n        return emptyFunction.thatReturnsNull;\\n      }\\n    }\\n\\n    function validate(props, propName, componentName, location, propFullName) {\\n      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\\n        var checker = arrayOfTypeCheckers[i];\\n        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {\\n          return null;\\n        }\\n      }\\n\\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));\\n    }\\n    return createChainableTypeChecker(validate);\\n  }\\n\\n  function createNodeChecker() {\\n    function validate(props, propName, componentName, location, propFullName) {\\n      if (!isNode(props[propName])) {\\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));\\n      }\\n      return null;\\n    }\\n    return createChainableTypeChecker(validate);\\n  }\\n\\n  function createShapeTypeChecker(shapeTypes) {\\n    function validate(props, propName, componentName, location, propFullName) {\\n      var propValue = props[propName];\\n      var propType = getPropType(propValue);\\n      if (propType !== 'object') {\\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\\n      }\\n      for (var key in shapeTypes) {\\n        var checker = shapeTypes[key];\\n        if (!checker) {\\n          continue;\\n        }\\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\\n        if (error) {\\n          return error;\\n        }\\n      }\\n      return null;\\n    }\\n    return createChainableTypeChecker(validate);\\n  }\\n\\n  function createStrictShapeTypeChecker(shapeTypes) {\\n    function validate(props, propName, componentName, location, propFullName) {\\n      var propValue = props[propName];\\n      var propType = getPropType(propValue);\\n      if (propType !== 'object') {\\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\\n      }\\n      // We need to check all keys in case some are required but missing from\\n      // props.\\n      var allKeys = assign({}, props[propName], shapeTypes);\\n      for (var key in allKeys) {\\n        var checker = shapeTypes[key];\\n        if (!checker) {\\n          return new PropTypeError(\\n            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +\\n            '\\\\nBad object: ' + JSON.stringify(props[propName], null, '  ') +\\n            '\\\\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')\\n          );\\n        }\\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\\n        if (error) {\\n          return error;\\n        }\\n      }\\n      return null;\\n    }\\n\\n    return createChainableTypeChecker(validate);\\n  }\\n\\n  function isNode(propValue) {\\n    switch (typeof propValue) {\\n      case 'number':\\n      case 'string':\\n      case 'undefined':\\n        return true;\\n      case 'boolean':\\n        return !propValue;\\n      case 'object':\\n        if (Array.isArray(propValue)) {\\n          return propValue.every(isNode);\\n        }\\n        if (propValue === null || isValidElement(propValue)) {\\n          return true;\\n        }\\n\\n        var iteratorFn = getIteratorFn(propValue);\\n        if (iteratorFn) {\\n          var iterator = iteratorFn.call(propValue);\\n          var step;\\n          if (iteratorFn !== propValue.entries) {\\n            while (!(step = iterator.next()).done) {\\n              if (!isNode(step.value)) {\\n                return false;\\n              }\\n            }\\n          } else {\\n            // Iterator will provide entry [k,v] tuples rather than values.\\n            while (!(step = iterator.next()).done) {\\n              var entry = step.value;\\n              if (entry) {\\n                if (!isNode(entry[1])) {\\n                  return false;\\n                }\\n              }\\n            }\\n          }\\n        } else {\\n          return false;\\n        }\\n\\n        return true;\\n      default:\\n        return false;\\n    }\\n  }\\n\\n  function isSymbol(propType, propValue) {\\n    // Native Symbol.\\n    if (propType === 'symbol') {\\n      return true;\\n    }\\n\\n    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'\\n    if (propValue['@@toStringTag'] === 'Symbol') {\\n      return true;\\n    }\\n\\n    // Fallback for non-spec compliant Symbols which are polyfilled.\\n    if (typeof Symbol === 'function' && propValue instanceof Symbol) {\\n      return true;\\n    }\\n\\n    return false;\\n  }\\n\\n  // Equivalent of `typeof` but with special handling for array and regexp.\\n  function getPropType(propValue) {\\n    var propType = typeof propValue;\\n    if (Array.isArray(propValue)) {\\n      return 'array';\\n    }\\n    if (propValue instanceof RegExp) {\\n      // Old webkits (at least until Android 4.0) return 'function' rather than\\n      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/\\n      // passes PropTypes.object.\\n      return 'object';\\n    }\\n    if (isSymbol(propType, propValue)) {\\n      return 'symbol';\\n    }\\n    return propType;\\n  }\\n\\n  // This handles more types than `getPropType`. Only used for error messages.\\n  // See `createPrimitiveTypeChecker`.\\n  function getPreciseType(propValue) {\\n    if (typeof propValue === 'undefined' || propValue === null) {\\n      return '' + propValue;\\n    }\\n    var propType = getPropType(propValue);\\n    if (propType === 'object') {\\n      if (propValue instanceof Date) {\\n        return 'date';\\n      } else if (propValue instanceof RegExp) {\\n        return 'regexp';\\n      }\\n    }\\n    return propType;\\n  }\\n\\n  // Returns a string that is postfixed to a warning about an invalid type.\\n  // For example, \\\"undefined\\\" or \\\"of type array\\\"\\n  function getPostfixForTypeWarning(value) {\\n    var type = getPreciseType(value);\\n    switch (type) {\\n      case 'array':\\n      case 'object':\\n        return 'an ' + type;\\n      case 'boolean':\\n      case 'date':\\n      case 'regexp':\\n        return 'a ' + type;\\n      default:\\n        return type;\\n    }\\n  }\\n\\n  // Returns class name of the object, if any.\\n  function getClassName(propValue) {\\n    if (!propValue.constructor || !propValue.constructor.name) {\\n      return ANONYMOUS;\\n    }\\n    return propValue.constructor.name;\\n  }\\n\\n  ReactPropTypes.checkPropTypes = checkPropTypes;\\n  ReactPropTypes.PropTypes = ReactPropTypes;\\n\\n  return ReactPropTypes;\\n};\\n\\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./node_modules/prop-types/factoryWithTypeCheckers.js\\n// module id = 8\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./node_modules/prop-types/factoryWithTypeCheckers.js?\");\n\n/***/ }),\n/* 9 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"/*\\nobject-assign\\n(c) Sindre Sorhus\\n@license MIT\\n*/\\n\\n\\n/* eslint-disable no-unused-vars */\\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\\n\\nfunction toObject(val) {\\n\\tif (val === null || val === undefined) {\\n\\t\\tthrow new TypeError('Object.assign cannot be called with null or undefined');\\n\\t}\\n\\n\\treturn Object(val);\\n}\\n\\nfunction shouldUseNative() {\\n\\ttry {\\n\\t\\tif (!Object.assign) {\\n\\t\\t\\treturn false;\\n\\t\\t}\\n\\n\\t\\t// Detect buggy property enumeration order in older V8 versions.\\n\\n\\t\\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\\n\\t\\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\\n\\t\\ttest1[5] = 'de';\\n\\t\\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\\n\\t\\t\\treturn false;\\n\\t\\t}\\n\\n\\t\\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\\n\\t\\tvar test2 = {};\\n\\t\\tfor (var i = 0; i < 10; i++) {\\n\\t\\t\\ttest2['_' + String.fromCharCode(i)] = i;\\n\\t\\t}\\n\\t\\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\\n\\t\\t\\treturn test2[n];\\n\\t\\t});\\n\\t\\tif (order2.join('') !== '0123456789') {\\n\\t\\t\\treturn false;\\n\\t\\t}\\n\\n\\t\\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\\n\\t\\tvar test3 = {};\\n\\t\\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\\n\\t\\t\\ttest3[letter] = letter;\\n\\t\\t});\\n\\t\\tif (Object.keys(Object.assign({}, test3)).join('') !==\\n\\t\\t\\t\\t'abcdefghijklmnopqrst') {\\n\\t\\t\\treturn false;\\n\\t\\t}\\n\\n\\t\\treturn true;\\n\\t} catch (err) {\\n\\t\\t// We don't expect any of the above to throw, but better to be safe.\\n\\t\\treturn false;\\n\\t}\\n}\\n\\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\\n\\tvar from;\\n\\tvar to = toObject(target);\\n\\tvar symbols;\\n\\n\\tfor (var s = 1; s < arguments.length; s++) {\\n\\t\\tfrom = Object(arguments[s]);\\n\\n\\t\\tfor (var key in from) {\\n\\t\\t\\tif (hasOwnProperty.call(from, key)) {\\n\\t\\t\\t\\tto[key] = from[key];\\n\\t\\t\\t}\\n\\t\\t}\\n\\n\\t\\tif (getOwnPropertySymbols) {\\n\\t\\t\\tsymbols = getOwnPropertySymbols(from);\\n\\t\\t\\tfor (var i = 0; i < symbols.length; i++) {\\n\\t\\t\\t\\tif (propIsEnumerable.call(from, symbols[i])) {\\n\\t\\t\\t\\t\\tto[symbols[i]] = from[symbols[i]];\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\\n\\treturn to;\\n};\\n\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./node_modules/object-assign/index.js\\n// module id = 9\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./node_modules/object-assign/index.js?\");\n\n/***/ }),\n/* 10 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"/* WEBPACK VAR INJECTION */(function(process) {/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n *\\n * This source code is licensed under the MIT license found in the\\n * LICENSE file in the root directory of this source tree.\\n */\\n\\n\\n\\nif (process.env.NODE_ENV !== 'production') {\\n  var invariant = __webpack_require__(2);\\n  var warning = __webpack_require__(4);\\n  var ReactPropTypesSecret = __webpack_require__(3);\\n  var loggedTypeFailures = {};\\n}\\n\\n/**\\n * Assert that the values match with the type specs.\\n * Error messages are memorized and will only be shown once.\\n *\\n * @param {object} typeSpecs Map of name to a ReactPropType\\n * @param {object} values Runtime values that need to be type-checked\\n * @param {string} location e.g. \\\"prop\\\", \\\"context\\\", \\\"child context\\\"\\n * @param {string} componentName Name of the component for error messages.\\n * @param {?Function} getStack Returns the component stack.\\n * @private\\n */\\nfunction checkPropTypes(typeSpecs, values, location, componentName, getStack) {\\n  if (process.env.NODE_ENV !== 'production') {\\n    for (var typeSpecName in typeSpecs) {\\n      if (typeSpecs.hasOwnProperty(typeSpecName)) {\\n        var error;\\n        // Prop type validation may throw. In case they do, we don't want to\\n        // fail the render phase where it didn't fail before. So we log it.\\n        // After these have been cleaned up, we'll let them throw.\\n        try {\\n          // This is intentionally an invariant that gets caught. It's the same\\n          // behavior as without this statement except with a better message.\\n          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);\\n          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);\\n        } catch (ex) {\\n          error = ex;\\n        }\\n        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);\\n        if (error instanceof Error && !(error.message in loggedTypeFailures)) {\\n          // Only monitor this failure once because there tends to be a lot of the\\n          // same error.\\n          loggedTypeFailures[error.message] = true;\\n\\n          var stack = getStack ? getStack() : '';\\n\\n          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');\\n        }\\n      }\\n    }\\n  }\\n}\\n\\nmodule.exports = checkPropTypes;\\n\\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./node_modules/prop-types/checkPropTypes.js\\n// module id = 10\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./node_modules/prop-types/checkPropTypes.js?\");\n\n/***/ }),\n/* 11 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"/**\\n * Copyright (c) 2013-present, Facebook, Inc.\\n *\\n * This source code is licensed under the MIT license found in the\\n * LICENSE file in the root directory of this source tree.\\n */\\n\\n\\n\\nvar emptyFunction = __webpack_require__(1);\\nvar invariant = __webpack_require__(2);\\nvar ReactPropTypesSecret = __webpack_require__(3);\\n\\nmodule.exports = function() {\\n  function shim(props, propName, componentName, location, propFullName, secret) {\\n    if (secret === ReactPropTypesSecret) {\\n      // It is still safe when called from React.\\n      return;\\n    }\\n    invariant(\\n      false,\\n      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\\n      'Use PropTypes.checkPropTypes() to call them. ' +\\n      'Read more at http://fb.me/use-check-prop-types'\\n    );\\n  };\\n  shim.isRequired = shim;\\n  function getShim() {\\n    return shim;\\n  };\\n  // Important!\\n  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.\\n  var ReactPropTypes = {\\n    array: shim,\\n    bool: shim,\\n    func: shim,\\n    number: shim,\\n    object: shim,\\n    string: shim,\\n    symbol: shim,\\n\\n    any: shim,\\n    arrayOf: getShim,\\n    element: shim,\\n    instanceOf: getShim,\\n    node: shim,\\n    objectOf: getShim,\\n    oneOf: getShim,\\n    oneOfType: getShim,\\n    shape: getShim,\\n    exact: getShim\\n  };\\n\\n  ReactPropTypes.checkPropTypes = emptyFunction;\\n  ReactPropTypes.PropTypes = ReactPropTypes;\\n\\n  return ReactPropTypes;\\n};\\n\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./node_modules/prop-types/factoryWithThrowingShims.js\\n// module id = 11\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./node_modules/prop-types/factoryWithThrowingShims.js?\");\n\n/***/ }),\n/* 12 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"\\n\\nvar palette = {\\n  grey: '#3F454A',\\n  greyLight: '#AEAEAE',\\n  errorOrange: '#f7814c',\\n  successGreen: '#2EBE71',\\n  white: '#ffffff',\\n  black: '#000000',\\n  primary: '#FFB200',\\n  pimaryDark: '#E9A300',\\n  primaryLight: '#FCC700',\\n  secondary: '#344164',\\n  secondaryDark: '#283760',\\n  secondaryLight: '#526490',\\n  tertiary: '#2EBE71',\\n  tertiaryDark: '#29AC66',\\n  tertiaryLight: '#9FE6BA'\\n};\\n\\nmodule.exports = palette;\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./src/palette.js\\n// module id = 12\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./src/palette.js?\");\n\n/***/ })\n/******/ ]);\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/textfield/dist/index.js\n// module id = 12\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/textfield/dist/index.js?");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar palette = {\n  red: '#ff5353',\n  redDark: '#e43e3e',\n  errorOrange: '#f7814c',\n  blue: '#344164',\n  blueDark: '#283760',\n  blueLight: '#526490',\n  blueDarkTransparent: 'rgba(40, 55, 96, 0.83)',\n  linkedInBlueDark: '#0077B5',\n  linkedInBlueLight: '#54A4CD',\n  linkedInBlueHover: '#006BA3',\n  green: '#2EBE71',\n  greenDark: '#29AC66',\n  greenLight: '#9FE6BA',\n  yellow: '#FFB200',\n  yellowDark: '#E9A300',\n  yellowLight: '#FCC700',\n  whiteReal: '#FFFFFF',\n  white: '#FAFAF9',\n  whiteDarker: '#F6F6F6',\n  grey: '#3F454A',\n  greyTransparent: 'rgba(45,51,56,0.95)',\n  greyMedium: '#797979',\n  greyLight: '#AEAEAE',\n  greyLightTransparent: 'rgba(174, 174, 174, 0.58)',\n  black: '#000000',\n  realWhite: '#FFFFFF'\n};\n\nmodule.exports = palette;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/palette.js\n// module id = 13\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/palette.js?");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory(__webpack_require__(1));\n\telse if(typeof define === 'function' && define.amd)\n\t\tdefine([\"react\"], factory);\n\telse if(typeof exports === 'object')\n\t\texports[\"Popover\"] = factory(require(\"react\"));\n\telse\n\t\troot[\"Popover\"] = factory(root[\"React\"]);\n})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 0);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"\\n\\nObject.defineProperty(exports, \\\"__esModule\\\", {\\n  value: true\\n});\\n\\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\\\"value\\\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\\n\\nvar _react = __webpack_require__(1);\\n\\nvar _react2 = _interopRequireDefault(_react);\\n\\nvar _palette = __webpack_require__(2);\\n\\nvar _palette2 = _interopRequireDefault(_palette);\\n\\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\\n\\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\\\"Cannot call a class as a function\\\"); } }\\n\\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\\\"this hasn't been initialised - super() hasn't been called\\\"); } return call && (typeof call === \\\"object\\\" || typeof call === \\\"function\\\") ? call : self; }\\n\\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \\\"function\\\" && superClass !== null) { throw new TypeError(\\\"Super expression must either be null or a function, not \\\" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\\n\\nvar Popover = function (_React$Component) {\\n  _inherits(Popover, _React$Component);\\n\\n  function Popover(props) {\\n    _classCallCheck(this, Popover);\\n\\n    var _this = _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));\\n\\n    _this.state = {\\n      menu: null,\\n      shift: 0\\n    };\\n    _this.setRef = _this.setRef.bind(_this);\\n    _this.isInView = _this.isInView.bind(_this);\\n    _this.reposition = _this.reposition.bind(_this);\\n    _this.wasUnfocused = _this.wasUnfocused.bind(_this);\\n    _this.setCenterShift = _this.setCenterShift.bind(_this);\\n    return _this;\\n  }\\n\\n  _createClass(Popover, [{\\n    key: 'setRef',\\n    value: function setRef(ref) {\\n      this.state.menu = ref;\\n      this.setState(this.state);\\n    }\\n  }, {\\n    key: 'componentDidMount',\\n    value: function componentDidMount() {\\n      window.addEventListener('scroll', this.reposition);\\n    }\\n  }, {\\n    key: 'componentWillUnmount',\\n    value: function componentWillUnmount() {\\n      window.removeEventListener('scroll', this.reposition);\\n    }\\n  }, {\\n    key: 'componentDidUpdate',\\n    value: function componentDidUpdate() {\\n      if (this.props.open) {\\n        if (this.props.anchorEl) {\\n          this.props.anchorEl.tabIndex = -1;\\n        }\\n        if (this.props.autoCloseOnBlur) {\\n          this.state.menu.focus();\\n        }\\n        if (!this.isInView()) {\\n          this.props.onRequestClose();\\n        }\\n      }\\n    }\\n  }, {\\n    key: 'isInView',\\n    value: function isInView() {\\n      if (this.state.menu) {\\n        var rect = this.state.menu.getBoundingClientRect();\\n        var html = document.documentElement;\\n        return rect.top <= (window.innerHeight || html.clientHeight) && rect.bottom > 0;\\n      }\\n      return false;\\n    }\\n  }, {\\n    key: 'reposition',\\n    value: function reposition() {\\n      if (this.props.anchorEl && this.props.open) {\\n        this.forceUpdate();\\n      }\\n    }\\n  }, {\\n    key: 'wasUnfocused',\\n    value: function wasUnfocused(evt) {\\n      if (this.props.autoCloseOnBlur && evt.relatedTarget !== this.props.anchorEl) {\\n        window.setTimeout(this.props.onRequestClose, 100);\\n      }\\n    }\\n  }, {\\n    key: 'setCenterShift',\\n    value: function setCenterShift() {\\n      var shift = 0;\\n      if (this.props.centered && this.state.menu) {\\n        shift = this.state.menu.getBoundingClientRect().width / 2;\\n      }\\n      this.setState({ shift: shift });\\n    }\\n  }, {\\n    key: 'render',\\n    value: function render() {\\n      var leftPos = 0;\\n      var rightPos = 0;\\n      if (this.props.centered && this.props.anchorEl) {\\n        setTimeout(this.setCenterShift, 20);\\n      }\\n      if (this.props.attachRight && this.props.anchorEl) {\\n        rightPos = Math.round(this.props.anchorEl.getBoundingClientRect().right - this.props.anchorEl.getBoundingClientRect().left);\\n      }\\n      if (!this.props.attachRight && this.props.anchorEl) {\\n        if (this.props.centered) {\\n          leftPos = Math.round(this.props.anchorEl.getBoundingClientRect().left - this.state.shift);\\n        } else {\\n          leftPos = Math.round(this.props.anchorEl.getBoundingClientRect().left);\\n        }\\n      }\\n      var styles = {\\n        main: {\\n          'position': 'fixed',\\n          'top': this.props.anchorEl && this.props.open ? Math.round(this.props.anchorEl.getBoundingClientRect().bottom + (this.props.verticalOffset || 0)) + 'px' : 0,\\n          'left': this.props.attachRight ? null : this.props.anchorEl && this.props.open ? leftPos + 'px' : 0,\\n          'right': this.props.attachRight ? this.props.anchorEl && this.props.open ? rightPos + 'px' : 0 : null,\\n          'display': this.props.open ? 'block' : 'none',\\n          'backgroundColor': _palette2.default.whiteReal,\\n          'zIndex': '2',\\n          border: this.props.withTriangle ? '1px solid rgba(0,0,0,0.2)' : null,\\n          'boxShadow': 'rgba(0, 0, 0, 0.45) 0px 1px 7px',\\n          'outline': 'none'\\n        }\\n      };\\n      return _react2.default.createElement(\\n        'div',\\n        { tabIndex: '-1',\\n          ref: this.setRef,\\n          onBlur: this.wasUnfocused,\\n          style: styles.main },\\n        this.props.children\\n      );\\n    }\\n  }]);\\n\\n  return Popover;\\n}(_react2.default.Component);\\n\\n;\\n\\nexports.default = Popover;\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./src/index.js\\n// module id = 0\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./src/index.js?\");\n\n/***/ }),\n/* 1 */\n/***/ (function(module, exports) {\n\neval(\"module.exports = __WEBPACK_EXTERNAL_MODULE_1__;\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// external {\\\"root\\\":\\\"React\\\",\\\"commonjs2\\\":\\\"react\\\",\\\"commonjs\\\":\\\"react\\\",\\\"amd\\\":\\\"react\\\"}\\n// module id = 1\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?\");\n\n/***/ }),\n/* 2 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"\\n\\nvar palette = {\\n  red: '#ff5353',\\n  redDark: '#e43e3e',\\n  errorOrange: '#f7814c',\\n  blue: '#344164',\\n  blueDark: '#283760',\\n  blueLight: '#526490',\\n  blueDarkTransparent: 'rgba(40, 55, 96, 0.83)',\\n  linkedInBlueDark: '#0077B5',\\n  linkedInBlueLight: '#54A4CD',\\n  linkedInBlueHover: '#006BA3',\\n  green: '#2EBE71',\\n  greenDark: '#29AC66',\\n  greenLight: '#9FE6BA',\\n  yellow: '#FFB200',\\n  yellowDark: '#E9A300',\\n  yellowLight: '#FCC700',\\n  whiteReal: '#FFFFFF',\\n  white: '#FAFAF9',\\n  whiteDarker: '#F6F6F6',\\n  grey: '#3F454A',\\n  greyTransparent: 'rgba(45,51,56,0.95)',\\n  greyMedium: '#797979',\\n  greyLight: '#AEAEAE',\\n  greyLightTransparent: 'rgba(174, 174, 174, 0.58)',\\n  black: '#000000',\\n  realWhite: '#FFFFFF'\\n};\\n\\nmodule.exports = palette;\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./src/palette.js\\n// module id = 2\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./src/palette.js?\");\n\n/***/ })\n/******/ ]);\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/react_popover/dist/index.js\n// module id = 14\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/react_popover/dist/index.js?");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory(__webpack_require__(1));\n\telse if(typeof define === 'function' && define.amd)\n\t\tdefine([\"react\"], factory);\n\telse if(typeof exports === 'object')\n\t\texports[\"MenuItem\"] = factory(require(\"react\"));\n\telse\n\t\troot[\"MenuItem\"] = factory(root[\"React\"]);\n})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 0);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"\\n\\nObject.defineProperty(exports, \\\"__esModule\\\", {\\n  value: true\\n});\\n\\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\\\"value\\\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\\n\\nvar _react = __webpack_require__(1);\\n\\nvar _react2 = _interopRequireDefault(_react);\\n\\nvar _palette = __webpack_require__(2);\\n\\nvar _palette2 = _interopRequireDefault(_palette);\\n\\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\\n\\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\\\"Cannot call a class as a function\\\"); } }\\n\\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\\\"this hasn't been initialised - super() hasn't been called\\\"); } return call && (typeof call === \\\"object\\\" || typeof call === \\\"function\\\") ? call : self; }\\n\\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \\\"function\\\" && superClass !== null) { throw new TypeError(\\\"Super expression must either be null or a function, not \\\" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\\n\\nvar MenuItem = function (_React$Component) {\\n  _inherits(MenuItem, _React$Component);\\n\\n  function MenuItem(props) {\\n    _classCallCheck(this, MenuItem);\\n\\n    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));\\n\\n    _this.state = {\\n      hovered: false\\n    };\\n    _this.handleClick = _this.handleClick.bind(_this);\\n    _this.hoverOn = _this.hoverOn.bind(_this);\\n    _this.hoverOff = _this.hoverOff.bind(_this);\\n    return _this;\\n  }\\n\\n  _createClass(MenuItem, [{\\n    key: 'handleClick',\\n    value: function handleClick() {\\n      if (typeof this.props.onTouchTap === 'function') {\\n        this.props.onTouchTap();\\n      }\\n    }\\n  }, {\\n    key: 'hoverOn',\\n    value: function hoverOn() {\\n      this.setState({ hovered: true });\\n    }\\n  }, {\\n    key: 'hoverOff',\\n    value: function hoverOff() {\\n      this.setState({ hovered: false });\\n    }\\n  }, {\\n    key: 'render',\\n    value: function render() {\\n      var styles = {\\n        main: {\\n          cursor: 'pointer',\\n          backgroundColor: this.state.hovered || this.props.active ? '#eaeaea' : null,\\n          padding: '5px 20px',\\n          color: _palette2.default.black,\\n          textAlign: 'left',\\n          transition: 'all 300ms ease-in-out',\\n          fontSize: '15px'\\n        }\\n      };\\n      return _react2.default.createElement(\\n        'div',\\n        { style: styles.main,\\n          onClick: this.handleClick,\\n          onMouseEnter: this.hoverOn,\\n          onMouseLeave: this.hoverOff },\\n        this.props.label\\n      );\\n    }\\n  }]);\\n\\n  return MenuItem;\\n}(_react2.default.Component);\\n\\nexports.default = MenuItem;\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./src/index.js\\n// module id = 0\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./src/index.js?\");\n\n/***/ }),\n/* 1 */\n/***/ (function(module, exports) {\n\neval(\"module.exports = __WEBPACK_EXTERNAL_MODULE_1__;\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// external {\\\"root\\\":\\\"React\\\",\\\"commonjs2\\\":\\\"react\\\",\\\"commonjs\\\":\\\"react\\\",\\\"amd\\\":\\\"react\\\"}\\n// module id = 1\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?\");\n\n/***/ }),\n/* 2 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"\\n\\nvar palette = {\\n  red: '#ff5353',\\n  redDark: '#e43e3e',\\n  errorOrange: '#f7814c',\\n  blue: '#344164',\\n  blueDark: '#283760',\\n  blueLight: '#526490',\\n  blueDarkTransparent: 'rgba(40, 55, 96, 0.83)',\\n  linkedInBlueDark: '#0077B5',\\n  linkedInBlueLight: '#54A4CD',\\n  linkedInBlueHover: '#006BA3',\\n  green: '#2EBE71',\\n  greenDark: '#29AC66',\\n  greenLight: '#9FE6BA',\\n  yellow: '#FFB200',\\n  yellowDark: '#E9A300',\\n  yellowLight: '#FCC700',\\n  whiteReal: '#FFFFFF',\\n  white: '#FAFAF9',\\n  whiteDarker: '#F6F6F6',\\n  grey: '#3F454A',\\n  greyTransparent: 'rgba(45,51,56,0.95)',\\n  greyMedium: '#797979',\\n  greyLight: '#AEAEAE',\\n  greyLightTransparent: 'rgba(174, 174, 174, 0.58)',\\n  black: '#000000',\\n  realWhite: '#FFFFFF'\\n};\\n\\nmodule.exports = palette;\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./src/palette.js\\n// module id = 2\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./src/palette.js?\");\n\n/***/ })\n/******/ ]);\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/react_menuitem/dist/index.js\n// module id = 15\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/react_menuitem/dist/index.js?");

/***/ })
/******/ ]);
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _screenReaderStyles = __webpack_require__(16);

var _screenReaderStyles2 = _interopRequireDefault(_screenReaderStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A React component for the font-awesome icon library.
 *
 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false]Inverse the icon's color
 * @param {String} name Name of the icon to use
 * @param {Boolean} [pulse=false] Rotate icon with 8 steps, rather than smoothly
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {String} [stack] Stack an icon on top of another
 * @param {String} [tag=span] The HTML tag to use as a string, eg 'i' or 'em'
 * @module FontAwesome
 * @type {ReactClass}
 */
var FontAwesome = function (_React$Component) {
  _inherits(FontAwesome, _React$Component);

  function FontAwesome() {
    _classCallCheck(this, FontAwesome);

    var _this = _possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this));

    _this.displayName = 'FontAwesome';
    return _this;
  }

  _createClass(FontAwesome, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          border = _props.border,
          cssModule = _props.cssModule,
          className = _props.className,
          fixedWidth = _props.fixedWidth,
          flip = _props.flip,
          inverse = _props.inverse,
          name = _props.name,
          pulse = _props.pulse,
          rotate = _props.rotate,
          size = _props.size,
          spin = _props.spin,
          stack = _props.stack,
          _props$tag = _props.tag,
          tag = _props$tag === undefined ? 'span' : _props$tag,
          ariaLabel = _props.ariaLabel,
          props = _objectWithoutProperties(_props, ['border', 'cssModule', 'className', 'fixedWidth', 'flip', 'inverse', 'name', 'pulse', 'rotate', 'size', 'spin', 'stack', 'tag', 'ariaLabel']);

      var classNames = [];

      if (cssModule) {
        classNames.push(cssModule['fa']);
        classNames.push(cssModule['fa-' + name]);
        size && classNames.push(cssModule['fa-' + size]);
        spin && classNames.push(cssModule['fa-spin']);
        pulse && classNames.push(cssModule['fa-pulse']);
        border && classNames.push(cssModule['fa-border']);
        fixedWidth && classNames.push(cssModule['fa-fw']);
        inverse && classNames.push(cssModule['fa-inverse']);
        flip && classNames.push(cssModule['fa-flip-' + flip]);
        rotate && classNames.push(cssModule['fa-rotate-' + rotate]);
        stack && classNames.push(cssModule['fa-stack-' + stack]);
      } else {
        classNames.push('fa');
        classNames.push('fa-' + name);
        size && classNames.push('fa-' + size);
        spin && classNames.push('fa-spin');
        pulse && classNames.push('fa-pulse');
        border && classNames.push('fa-border');
        fixedWidth && classNames.push('fa-fw');
        inverse && classNames.push('fa-inverse');
        flip && classNames.push('fa-flip-' + flip);
        rotate && classNames.push('fa-rotate-' + rotate);
        stack && classNames.push('fa-stack-' + stack);
      }

      // Add any custom class names at the end.
      className && classNames.push(className);
      return _react2.default.createElement(tag, _extends({}, props, { 'aria-hidden': true, className: classNames.join(' ') }), ariaLabel ? _react2.default.createElement('span', { style: _screenReaderStyles2.default }, ariaLabel) : null);
    }
  }]);

  return FontAwesome;
}(_react2.default.Component);

FontAwesome.propTypes = {
  ariaLabel: _propTypes2.default.string,
  border: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  fixedWidth: _propTypes2.default.bool,
  flip: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  inverse: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  pulse: _propTypes2.default.bool,
  rotate: _propTypes2.default.oneOf([90, 180, 270]),
  size: _propTypes2.default.oneOf(['lg', '2x', '3x', '4x', '5x']),
  spin: _propTypes2.default.bool,
  stack: _propTypes2.default.oneOf(['1x', '2x']),
  tag: _propTypes2.default.string
};

exports.default = FontAwesome;
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0px, 0px, 0px, 0px)',
  border: '0px'
};
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Tags"] = factory(require("react"));
	else
		root["Tags"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(1);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagList = exports.Tag = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(7);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tag = function (_React$Component) {
  _inherits(Tag, _React$Component);

  function Tag(props) {
    _classCallCheck(this, Tag);

    var _this = _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));

    _this.state = {
      shown: false
    };
    _this.handleRemove = _this.handleRemove.bind(_this);
    return _this;
  }

  _createClass(Tag, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      window.setTimeout(function () {
        self.setState({ shown: true });
      }, 100);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var self = this;
      if (this.state.shown === false && typeof this.props.onRemove === 'function') {
        window.setTimeout(function () {
          self.props.onRemove();
        }, 300);
      }
    }
  }, {
    key: 'handleRemove',
    value: function handleRemove() {
      if (typeof this.props.onRemove === 'function') {
        var self = this;
        this.setState({ shown: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var isMobile = !window.matchMedia('(min-width : 500px)').matches;
      var styles = {
        main: {
          display: 'inline-block',
          margin: isMobile ? '5px' : this.props.first ? '5px 5px 5px 0px' : '5px',
          borderRadius: '3px',
          backgroundColor: '#eaeaea',
          position: 'relative',
          transition: 'all 100ms ease-in-out',
          maxWidth: this.state.shown ? '500px' : '0px',
          padding: this.state.shown ? '4px 25px 7px 10px' : '0px',
          fontSize: '15px',
          overflow: 'hidden',
          height: '18px'
        },
        delBtn: {
          position: 'absolute',
          fontSize: '7.5pt',
          cursor: 'pointer',
          right: '10px',
          top: '9px',
          color: '#aeaeae'
        }
      };
      return _react2.default.createElement(
        'div',
        { style: styles.main },
        this.props.label,
        this.props.onRemove ? _react2.default.createElement(
          'span',
          { style: styles.delBtn, onClick: this.handleRemove },
          'X'
        ) : null
      );
    }
  }]);

  return Tag;
}(_react2.default.Component);

var TagList = function (_React$Component2) {
  _inherits(TagList, _React$Component2);

  function TagList(props) {
    _classCallCheck(this, TagList);

    var _this2 = _possibleConstructorReturn(this, (TagList.__proto__ || Object.getPrototypeOf(TagList)).call(this, props));

    _this2.state = {
      container: null
    };
    _this2.handleRemove = _this2.handleRemove.bind(_this2);
    _this2.setRef = _this2.setRef.bind(_this2);
    _this2.scrollLeft = _this2.scrollLeft.bind(_this2);
    _this2.scrollRight = _this2.scrollRight.bind(_this2);
    return _this2;
  }

  _createClass(TagList, [{
    key: 'handleRemove',
    value: function handleRemove(item) {
      if (typeof this.props.onRemove === 'function') {
        this.props.onRemove(item);
      }
    }
  }, {
    key: 'setRef',
    value: function setRef(el) {
      var self = this;
      this.setState({ container: el });
      setTimeout(function () {
        self.forceUpdate();
      }, 200);
    }
  }, {
    key: 'scrollLeft',
    value: function scrollLeft() {
      if (this.state.container.scrollLeft > 30) {
        this.state.container.scrollLeft = this.state.container.scrollLeft - 30;
      } else {
        this.state.container.scrollLeft = 0;
      }
    }
  }, {
    key: 'scrollRight',
    value: function scrollRight() {
      if (this.state.container.scrollLeft < this.state.container.scrollWidth - this.state.container.clientWidth) {
        this.state.container.scrollLeft = this.state.container.scrollLeft + 30;
      } else {
        this.state.container.scrollLeft = this.state.container.scrollWidth - this.state.container.clientWidth;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      var isMobile = !window.matchMedia('(min-width : 500px)').matches;
      var isOverflowing = this.state.container && this.state.container.scrollWidth > this.state.container.clientWidth;
      var styles = {
        main: {
          position: 'relative'
        },
        container: {
          margin: '5px 0px',
          padding: isOverflowing ? '0px 20px' : '0px',
          minHeight: '15px',
          whiteSpace: isMobile ? null : 'nowrap',
          overflow: 'hidden'
        },
        btnLeft: {
          position: 'absolute',
          background: 'linear-gradient(90deg,' + (this.props.bgColor ? this.props.bgColor : 'rgba(250,250,249,1)') + ' 0%,rgba(0,0,0,0) 100%)',
          padding: '7px 7px 0px 0px',
          height: '38px',
          fontSize: '16pt',
          top: '0px',
          left: '0px',
          cursor: 'pointer'
        },
        btnRight: {
          position: 'absolute',
          background: 'linear-gradient(90deg,rgba(0,0,0,0) 0%, ' + (this.props.bgColor ? this.props.bgColor : 'rgba(250,250,249,1)') + ' 100%)',
          padding: '7px 0px 0px 7px',
          height: '38px',
          fontSize: '16pt',
          top: '0px',
          right: '0px',
          cursor: 'pointer'
        }
      };
      return _react2.default.createElement(
        'div',
        { style: styles.main },
        _react2.default.createElement(
          'div',
          { style: styles.container, ref: this.setRef },
          this.props.items.map(function (item, n) {
            return _react2.default.createElement(Tag, { first: n === 0, key: item, label: item, onRemove: self.handleRemove.bind(self, item) });
          })
        ),
        isOverflowing ? [_react2.default.createElement(
          'div',
          { key: 'L', style: styles.btnLeft, onClick: this.scrollLeft },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'chevron-left' })
        ), _react2.default.createElement(
          'div',
          { key: 'R', style: styles.btnRight, onClick: this.scrollRight },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'chevron-right' })
        )] : null
      );
    }
  }]);

  return TagList;
}(_react2.default.Component);

exports.Tag = Tag;
exports.TagList = TagList;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _screenReaderStyles = __webpack_require__(13);

var _screenReaderStyles2 = _interopRequireDefault(_screenReaderStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A React component for the font-awesome icon library.
 *
 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false]Inverse the icon's color
 * @param {String} name Name of the icon to use
 * @param {Boolean} [pulse=false] Rotate icon with 8 steps, rather than smoothly
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {String} [stack] Stack an icon on top of another
 * @param {String} [tag=span] The HTML tag to use as a string, eg 'i' or 'em'
 * @module FontAwesome
 * @type {ReactClass}
 */
var FontAwesome = function (_React$Component) {
  _inherits(FontAwesome, _React$Component);

  function FontAwesome() {
    _classCallCheck(this, FontAwesome);

    var _this = _possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this));

    _this.displayName = 'FontAwesome';
    return _this;
  }

  _createClass(FontAwesome, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          border = _props.border,
          cssModule = _props.cssModule,
          className = _props.className,
          fixedWidth = _props.fixedWidth,
          flip = _props.flip,
          inverse = _props.inverse,
          name = _props.name,
          pulse = _props.pulse,
          rotate = _props.rotate,
          size = _props.size,
          spin = _props.spin,
          stack = _props.stack,
          _props$tag = _props.tag,
          tag = _props$tag === undefined ? 'span' : _props$tag,
          ariaLabel = _props.ariaLabel,
          props = _objectWithoutProperties(_props, ['border', 'cssModule', 'className', 'fixedWidth', 'flip', 'inverse', 'name', 'pulse', 'rotate', 'size', 'spin', 'stack', 'tag', 'ariaLabel']);

      var classNames = [];

      if (cssModule) {
        classNames.push(cssModule['fa']);
        classNames.push(cssModule['fa-' + name]);
        size && classNames.push(cssModule['fa-' + size]);
        spin && classNames.push(cssModule['fa-spin']);
        pulse && classNames.push(cssModule['fa-pulse']);
        border && classNames.push(cssModule['fa-border']);
        fixedWidth && classNames.push(cssModule['fa-fw']);
        inverse && classNames.push(cssModule['fa-inverse']);
        flip && classNames.push(cssModule['fa-flip-' + flip]);
        rotate && classNames.push(cssModule['fa-rotate-' + rotate]);
        stack && classNames.push(cssModule['fa-stack-' + stack]);
      } else {
        classNames.push('fa');
        classNames.push('fa-' + name);
        size && classNames.push('fa-' + size);
        spin && classNames.push('fa-spin');
        pulse && classNames.push('fa-pulse');
        border && classNames.push('fa-border');
        fixedWidth && classNames.push('fa-fw');
        inverse && classNames.push('fa-inverse');
        flip && classNames.push('fa-flip-' + flip);
        rotate && classNames.push('fa-rotate-' + rotate);
        stack && classNames.push('fa-stack-' + stack);
      }

      // Add any custom class names at the end.
      className && classNames.push(className);
      return _react2.default.createElement(tag, _extends({}, props, { 'aria-hidden': true, className: classNames.join(' ') }), ariaLabel ? _react2.default.createElement('span', { style: _screenReaderStyles2.default }, ariaLabel) : null);
    }
  }]);

  return FontAwesome;
}(_react2.default.Component);

FontAwesome.propTypes = {
  ariaLabel: _propTypes2.default.string,
  border: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  fixedWidth: _propTypes2.default.bool,
  flip: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  inverse: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  pulse: _propTypes2.default.bool,
  rotate: _propTypes2.default.oneOf([90, 180, 270]),
  size: _propTypes2.default.oneOf(['lg', '2x', '3x', '4x', '5x']),
  spin: _propTypes2.default.bool,
  stack: _propTypes2.default.oneOf(['1x', '2x']),
  tag: _propTypes2.default.string
};

exports.default = FontAwesome;
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(9)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(12)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(2);
var warning = __webpack_require__(5);
var assign = __webpack_require__(10);

var ReactPropTypesSecret = __webpack_require__(3);
var checkPropTypes = __webpack_require__(11);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(2);
  var warning = __webpack_require__(5);
  var ReactPropTypesSecret = __webpack_require__(3);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(2);
var ReactPropTypesSecret = __webpack_require__(3);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0px, 0px, 0px, 0px)',
  border: '0px'
};
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map