"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("../styles/globals.css");
var bar_of_progress_1 = require("@badrap/bar-of-progress");
var router_1 = require("next/router");
var progress = new bar_of_progress_1["default"]({
    size: 8,
    color: "#FE595E",
    className: "z-50",
    delay: 100
});
router_1["default"].events.on('routeChangeStart', progress.start);
router_1["default"].events.on('routeChangeComplete', progress.finish);
router_1["default"].events.on('routeChangeError', progress.finish);
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return React.createElement(Component, __assign({}, pageProps));
}
exports["default"] = MyApp;
