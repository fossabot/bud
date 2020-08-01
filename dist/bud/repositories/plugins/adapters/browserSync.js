"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.browserSync = void 0;
var browser_sync_webpack_plugin_1 = __importDefault(require("browser-sync-webpack-plugin"));
var browserSync = {
    mergeOptions: function () {
        return this.bud.options.get('browserSync');
    },
    make: function () {
        return new browser_sync_webpack_plugin_1["default"](this.options);
    },
    when: function () {
        return (this.bud.features.enabled('browserSync') &&
            !this.bud.features.enabled('hot'));
    }
};
exports.browserSync = browserSync;
//# sourceMappingURL=browserSync.js.map