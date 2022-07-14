"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_map_gl_1 = require("react-map-gl");
var getCenter_1 = require("geolib/es/getCenter");
require("mapbox-gl/dist/mapbox-gl.css");
function Map(_a) {
    var searchResult = _a.searchResult;
    var _b = react_1.useState(null), selectedLocation = _b[0], setSelectedLocation = _b[1];
    var coordinates = searchResult.map(function (res) { return ({
        longitude: res.long,
        latitude: res.lat
    }); });
    var center = getCenter_1["default"](coordinates);
    return (React.createElement(react_map_gl_1.Map, { mapStyle: "mapbox://styles/mkdir404/cl5lkuuvc004v14t1m33wrbf0", mapboxAccessToken: process.env.mapbox_key, initialViewState: {
            longitude: center.longitude,
            latitude: center.latitude,
            zoom: 10
        }, style: { width: 500, height: '100%' } }, searchResult.map(function (res) { return (React.createElement("div", { key: res.long },
        React.createElement(react_map_gl_1.Marker, { longitude: res.long, latitude: res.lat },
            React.createElement("p", { role: "img", className: 'cursor-pointer text-2xl animate-bounce', onClick: function () { return setSelectedLocation(res); }, "arial-label": "push-pin" }, "\uD83E\uDD81")),
        (selectedLocation === null || selectedLocation === void 0 ? void 0 : selectedLocation.long) === res.long ? (React.createElement(react_map_gl_1.Popup, { onClose: function () { return setSelectedLocation(null); }, 
            //closeOnClick={true}
            longitude: res.long, latitude: res.lat },
            React.createElement("div", null,
                React.createElement("h1", null, res.title)))) : (null))); })));
}
exports["default"] = Map;
