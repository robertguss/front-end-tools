import 'airbnb-browser-shims';
import '../scss/index.scss';
import Vue from 'vue';
import Log from '../components/Log.vue';

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#loadingBox',
  render: (h) =>
    h(Log, {
      props: { propMessage: 'World!' },
    }),
});
