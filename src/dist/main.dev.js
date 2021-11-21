"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

require("./assets/tailwind.css");

require("./dateFormat.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Vue.use(require('vue-moment'));
(0, _vue.createApp)(_App["default"]).use(_router["default"]).mount('#app');