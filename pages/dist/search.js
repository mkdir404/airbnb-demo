"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getServerSideProps = void 0;
var router_1 = require("next/router");
var Footer_1 = require("../components/Footer");
var Header_1 = require("../components/Header");
var date_fns_1 = require("date-fns");
var InfoCard_1 = require("../components/InfoCard");
var Map_1 = require("../components/Map");
function Search(_a) {
    var searchResults = _a.searchResults;
    var router = router_1.useRouter();
    var _b = router.query, location = _b.location, startDate = _b.startDate, endDate = _b.endDate, noOfGuests = _b.noOfGuests;
    var formatStartDate = date_fns_1.format(new Date(startDate), "dd MM yy");
    var formatEndDate = date_fns_1.format(new Date(endDate), "dd MM yy");
    var range = formatStartDate + " - " + formatEndDate;
    return (React.createElement("div", null,
        React.createElement(Header_1["default"], { placeholder: location + " | " + range + " | " + noOfGuests + " gests " }),
        React.createElement("main", { className: "flex" },
            React.createElement("section", { className: "flex-grow pt-14 px-6" },
                React.createElement("p", { className: "text-xs" },
                    "300+ Stays - ",
                    range,
                    " - for ",
                    noOfGuests,
                    " guests"),
                React.createElement("h1", { className: "text-3xl font-semibold mt-2 mb-6" },
                    "Stay in ",
                    location),
                React.createElement("div", { className: "hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap" },
                    React.createElement("p", { className: "button" }, "Cancelation Flexibility"),
                    React.createElement("p", { className: "button" }, "Type of Place"),
                    React.createElement("p", { className: "button" }, "Price"),
                    React.createElement("p", { className: "button" }, "Rooms and Bends"),
                    React.createElement("p", { className: "button" }, "More filters")),
                React.createElement("div", { className: "flex flex-col" }, searchResults.map(function (_a) {
                    var img = _a.img, title = _a.title, location = _a.location, description = _a.description, star = _a.star, price = _a.price, total = _a.total;
                    return (React.createElement(InfoCard_1["default"], { key: img, img: img, location: location, title: title, description: description, star: star, price: price, total: total }));
                }))),
            React.createElement("section", { className: "hidden xl:inline-flex" },
                React.createElement(Map_1["default"], { searchResult: searchResults }),
                React.createElement("p", null, "2"))),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Search;
function getServerSideProps() {
    return __awaiter(this, void 0, void 0, function () {
        var searchResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://links.papareact.com/isz").
                        then(function (res) { return res.json(); })];
                case 1:
                    searchResults = _a.sent();
                    return [2 /*return*/, {
                            props: {
                                searchResults: searchResults
                            }
                        }];
            }
        });
    });
}
exports.getServerSideProps = getServerSideProps;
