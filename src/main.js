// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import "@/assets/style/reset.css";
import echarts from "echarts";
import "echarts/map/js/china.js";

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
