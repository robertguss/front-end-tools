import 'airbnb-browser-shims';
import '../scss/index.scss';
import Vue from 'vue';
import Log from './components/Log.vue';

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  render: (h) => h(Log),
}).$mount('#loadingBox');
