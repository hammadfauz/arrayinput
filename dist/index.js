'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _coloredbutton = require('coloredbutton');

var _coloredbutton2 = _interopRequireDefault(_coloredbutton);

var _textfield = require('textfield');

var _textfield2 = _interopRequireDefault(_textfield);

var _lookupfield = require('lookupfield');

var _lookupfield2 = _interopRequireDefault(_lookupfield);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _react_tags = require('react_tags');

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
