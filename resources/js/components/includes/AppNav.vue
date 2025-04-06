<template>
  <div class="relative bg-white dark:bg-slate-800 z-10">
    <div class="border-b-2 border-gray-100">
      <div
        class="flex items-center justify-between mx-auto max-w-7xl py-6 px-4 sm:px-6 dark:border-slate-700 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link :to="{ name: 'home' }">
            <span class="sr-only">{{ appName }}</span>
            <div>
              <img
                id="LogoLight"
                :alt="appName"
                class="show-light text-center ml-auto mr-auto w-10"
              >
              <img
                id="LogoDark"
                :alt="appName"
                class="show-dark text-center ml-auto mr-auto w-10"
              >
            </div>
          </router-link>
        </div>
        <div class="items-center justify-end md:flex md:flex-1 lg:w-0">
          <ToggleDarkMode />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToggleDarkMode from '@components/ToggleDarkMode.vue';
import LogoLight from '@img/logo/logo-dark.png';
import LogoDark from '@img/logo/logo-light.png';

export default {
  name: 'AppNav',
  components: { ToggleDarkMode },
  computed: {
    appName() {
      return APP_NAME;
    },
  },
  mounted() {
    document.getElementById('LogoLight').src = LogoLight;
    document.getElementById('LogoDark').src = LogoDark;
  },
};
</script>
