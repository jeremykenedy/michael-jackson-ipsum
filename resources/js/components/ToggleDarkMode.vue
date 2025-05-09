<template>
  <span
    v-tippy="'Switch Theme to ' + (isDarkMode ? 'Light' : 'Dark') + ' Mode'"
    class="mr-8 cursor-pointer"
    @click="switchDarkMode()"
  >
    <SwitchComp
      :default-checked="isDarkMode"
      :class="isDarkMode ? 'bg-gray-500' : 'bg-gray-400'"
      class="relative inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      style="margin-top: 5px"
    >
      <span class="sr-only">Toggle Theme</span>
      <span
        aria-hidden="true"
        :class="isDarkMode ? 'translate-x-4 bg-gray-800' : 'translate-x-0 bg-white'"
        class="pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out"
      />

      <SunIcon v-if="!isDarkMode" class="text-white h-4 w-4" />
      <MoonIcon v-if="isDarkMode" class="absolute h-4 w-4 text-gray-800" style="left: -1px" />
    </SwitchComp>
  </span>
</template>

<script>
import { mapActions } from 'pinia';
import useDarkMode from '@composables/darkmode';
import { Switch as SwitchComp } from '@headlessui/vue';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'ToggleDarkMode',
  components: {
    SunIcon,
    MoonIcon,
    SwitchComp,
  },
  data() {
    return {
      darkMode: false,
    };
  },
  computed: {
    isDarkMode() {
      return this.darkMode;
    },
  },
  mounted() {
    this.checkDarkMode();
  },
  methods: {
    ...mapActions(useDarkMode, ['toggleDarkMode', 'enableDarkMode', 'disableDarkMode']),
    checkDarkMode() {
      let lst = localStorage.getItem('data-theme');
      if (lst == 'dark') {
        this.enableDarkMode();
        this.darkMode = true;
      } else {
        this.disableDarkMode();
        this.darkMode = false;
      }
    },
    switchDarkMode() {
      let theme;
      this.toggleDarkMode(false);
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        theme = 'dark';
      } else {
        theme = 'light';
      }
      window.dispatchEvent(
        new CustomEvent('theme-localstorage-changed', {
          detail: {
            storage: theme,
          },
        }),
      );
    },
  },
};
</script>
