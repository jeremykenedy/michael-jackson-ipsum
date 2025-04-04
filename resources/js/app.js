import './bootstrap';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from '@routes';
import VueSweetalert2 from 'vue-sweetalert2';
import { plugin as VueTippy } from 'vue-tippy';
import AppButton from '@components/common/AppButton.vue';
import VueGtag from 'vue-gtag-next';
import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

window.Swal = swal;

const APP_GA_TAG = GA_TAG;
const APP_GA_ENABLED = GA_ENABLED;
const VUE_APP_URL = APP_URL;

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp({
  setup() {
    if (localStorage.getItem('data-theme') == 'dark') {
      document.documentElement.className = 'dark';
    } else {
      localStorage.setItem('data-theme', 'light');
    }
  },
});
app.use(pinia);
app.use(router);
app.use(VueSweetalert2);
app.use(VueTippy, {
  directive: 'tippy', // => v-tippy
  component: 'tippy', // => <tippy/>
  componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
  defaultProps: {
    arrow: true,
    theme: 'material',
    animation: 'perspective',
    placement: 'auto-end',
    allowHTML: true,
  },
});
if (APP_GA_ENABLED == 1) {
  app.use(VueGtag, {
    property: {
      id: APP_GA_TAG,
      params: {
        send_page_view: true,
        linker: {
          domain: [VUE_APP_URL],
        },
      },
    },
  });
}
app.component('AppButton', AppButton);
app.mount('#app');
