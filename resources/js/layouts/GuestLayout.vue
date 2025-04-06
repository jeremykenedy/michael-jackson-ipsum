<template>
  <div class="min-h-screen bg-white dark:bg-slate-800">
    <div id="top_border" />
    <AppNav />
    <div class="mx-auto w-full max-w-7xl">
      <router-view
        v-slot="{ Component }"
        class="p-6"
      >
        <transition
          name="fade"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <AppFooter
      class="sticky top-[100vh] w-full"
      footer-class="border-slate-900/5 dark:border-slate-700"
    />
  </div>
</template>

<script>
import AppNav from '@components/includes/AppNav.vue';
import AppFooter from '@components/includes/AppFooter.vue';

export default {
  components: {
    AppNav,
    AppFooter,
  },
};
</script>
