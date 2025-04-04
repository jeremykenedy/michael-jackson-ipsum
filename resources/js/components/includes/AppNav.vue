<template>
  <div class="relative bg-white dark:bg-slate-800 z-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div
        class="flex items-center justify-between border-b-2 border-gray-100 py-6 dark:border-slate-700 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link :to="{ name: 'home' }">
            <span class="sr-only">{{ appName }}</span>
            <div>
              <img id="mjHeadLight" alt="Michael Jackson" class="show-light text-center ml-auto mr-auto w-10" />
              <img id="mjHeadDark" alt="Michael Jackson" class="show-dark text-center ml-auto mr-auto w-10" />
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
import mjHeadLight from '@img/mj/mj-head-dark.png';
import mjHeadDark from '@img/mj/mj-head-light.png';

export default {
  name: 'AppNav',
  components: { ToggleDarkMode },
  computed: {
    appName() {
      return APP_NAME;
    },
  },
  mounted() {
    document.getElementById('mjHeadLight').src = mjHeadLight;
    document.getElementById('mjHeadDark').src = mjHeadDark;
  },
};
</script>
