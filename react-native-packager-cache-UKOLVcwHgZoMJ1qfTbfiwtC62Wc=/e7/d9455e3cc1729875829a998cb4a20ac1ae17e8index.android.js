Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/aditya/workspace/reactnative/form_image_list/index.android.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeFormGenerator = require('react-native-form-generator');

var form_image_list = function (_Component) {
  babelHelpers.inherits(form_image_list, _Component);

  function form_image_list() {
    babelHelpers.classCallCheck(this, form_image_list);
    return babelHelpers.possibleConstructorReturn(this, (form_image_list.__proto__ || Object.getPrototypeOf(form_image_list)).apply(this, arguments));
  }

  babelHelpers.createClass(form_image_list, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        _react2.default.createElement(
          _reactNativeFormGenerator.Form,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          _react2.default.createElement(_reactNativeFormGenerator.InputField, {
            ref: 'first_name',
            label: 'First Name',
            placeholder: 'First Name',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          })
        ),
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.welcome, __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          'Welcome to React Native!'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.instructions, __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          },
          'To get started, edit index.android.js'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.instructions, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          },
          'Double tap R on your keyboard to reload,',
          '\n',
          'Shake or press menu button for dev menu'
        )
      );
    }
  }]);
  return form_image_list;
}(_react.Component);

exports.default = form_image_list;


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

_reactNative.AppRegistry.registerComponent('form_image_list', function () {
  return form_image_list;
});