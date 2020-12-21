"use strict";
/**
https://github.com/fionawhim/gatsby-plugin-google-fonts
MIT License

Copyright (c) 2017 Didier Franc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
let _react = require("react");
let _interopRequireDefault = (obj) => {
  return obj && obj.__esModule ? obj : { default: obj };
};
let _react2 = _interopRequireDefault(_react);

let format = (string) => {
  return string
    .split(" ")
    .map(function (s) {
      return s.replace(/^\w/, function (s) {
        return s.toUpperCase();
      });
    })
    .join(" ");
};

let getFonts = (options) => {
  return options.fonts.map(format).join("|").replace(/ /g, "+");
};

const getDisplay = (options) => {
  return options.display ? "&display=" + options.display : "";
};

exports.onRenderBody = (_ref) => {
  let setHeadComponents = _ref.setHeadComponents;
  const options = {
    fonts: [`Ranchers`, `open sans`],
    display: "swap",
  };

  let link =
    "https://fonts.googleapis.com/css?family=" +
    getFonts(options) +
    getDisplay(options);
  setHeadComponents([
    _react2.default.createElement("link", {
      key: "google-fonts-preconnect",
      rel: "preconnect",
      href: "https://fonts.gstatic.com/",
      crossOrigin: "anonymous",
    }),
    _react2.default.createElement("link", {
      key: "fonts",
      href: link,
      rel: "stylesheet",
      crossOrigin: "anonymous",
    }),
  ]);
};
