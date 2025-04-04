import './bootstrap';

import { createApp, ref, watchEffect } from 'vue';
import { createPinia, storeToRefs } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from '@routes';
import { useAuthStore } from '@store/auth';
import VueSweetalert2 from 'vue-sweetalert2';
import { plugin as VueTippy } from 'vue-tippy';
import AppButton from '@components/common/AppButton.vue';
import AppSwitch from '@components/common/AppSwitch.vue';
import AdminBreadcrumbContainer from '@components/includes/AdminBreadcrumbContainer.vue';
import AdminBreadcrumb from '@components/includes/AdminBreadcrumb.vue';
import AdminBreadcrumbSep from '@components/includes/AdminBreadcrumbSep.vue';

import vSelect from 'vue-select';
import useAuth from './composables/auth';
import i18n from './plugins/i18n';
import VueAwesomePaginate from 'vue-awesome-paginate';
import VueSecureHTML from 'vue-html-secure';
import VueGtag from 'vue-gtag-next';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import swal from 'sweetalert2';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-select/dist/vue-select.css';
import 'vue-awesome-paginate/dist/style.css';
import 'vue3-easy-data-table/dist/style.css';

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
  created() {
    useAuthStore().getLogins();
    useAuth().getUser();
  },
});
app.use(pinia);

const store = useAuthStore();
const { user, authenticated } = storeToRefs(store);

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
app.use(VueSecureHTML);
app.use(VueAwesomePaginate);
app.use(i18n);
if (APP_GA_ENABLED == 1) {
  let UID = null;
  if (store && store.user && store.user.id && store.authenticated) {
    UID = store.user.id;
  }
  app.use(VueGtag, {
    property: {
      id: APP_GA_TAG,
      params: {
        user_id: UID,
        send_page_view: true,
        linker: {
          domain: [VUE_APP_URL],
        },
      },
    },
  });
}
app.component('EasyDataTable', Vue3EasyDataTable);
app.component('AppButton', AppButton);
app.component('AdminBreadcrumbContainer', AdminBreadcrumbContainer);
app.component('AdminBreadcrumb', AdminBreadcrumb);
app.component('AdminBreadcrumbSep', AdminBreadcrumbSep);
app.component('VSelect', vSelect);
app.component('AppSwitch', AppSwitch);
app.mount('#app');
