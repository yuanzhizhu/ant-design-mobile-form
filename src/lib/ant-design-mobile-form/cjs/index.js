'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var rcForm = require('rc-form');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var addErrorExplanation = function addErrorExplanation(Component) {
  var NewComponent = /*#__PURE__*/function (_React$Component) {
    _inherits(NewComponent, _React$Component);

    function NewComponent() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, NewComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NewComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "render", function () {
        var _this$props = _this.props,
            getFieldError = _this$props.getFieldError,
            fieldKey = _this$props.fieldKey,
            restProps = _objectWithoutProperties(_this$props, ["getFieldError", "fieldKey"]);

        var error = getFieldError(fieldKey);
        var errorMsg = error ? error.join("") : "";
        return React.createElement(React.Fragment, null, React.createElement(Component, restProps), React.createElement("span", {
          style: {
            color: "#f5222d",
            lineHeight: "30px"
          },
          className: "form-error-explain"
        }, errorMsg));
      });

      return _this;
    }

    return NewComponent;
  }(React.Component);

  return NewComponent;
};
var create = function create(options) {
  return function (FormComponent) {
    var NewFormComponent = /*#__PURE__*/function (_React$Component2) {
      _inherits(NewFormComponent, _React$Component2);

      function NewFormComponent() {
        var _getPrototypeOf3;

        var _this2;

        _classCallCheck(this, NewFormComponent);

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(NewFormComponent)).call.apply(_getPrototypeOf3, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_this2), "myGetFieldDecorator", function (name) {
          var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return function (element) {
            // 下面这行代码主要用于validator；如果不使用validator可以删除
            option.validateFirst = option.validateFirst === undefined ? true : option.validateFirst;
            return _this2.props.form.getFieldDecorator(name, option)(React.cloneElement(element, {
              fieldKey: name,
              getFieldError: _this2.props.form.getFieldError
            }));
          };
        });

        _defineProperty(_assertThisInitialized(_this2), "render", function () {
          return React.createElement(FormComponent, _extends({}, _this2.props, {
            form: _objectSpread2({}, _this2.props.form, {
              getFieldDecorator: _this2.myGetFieldDecorator
            })
          }));
        });

        return _this2;
      }

      return NewFormComponent;
    }(React.Component);

    return rcForm.createForm(options)(NewFormComponent);
  };
};

exports.addErrorExplanation = addErrorExplanation;
exports.create = create;
