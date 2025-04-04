<template>
  <div class="min-h-screen bg-white dark:bg-slate-800">
    <div id="top_border" />
    <Navbar />
    <div class="w-full">
      <router-view v-slot="{ Component }" class="p-6">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <AppFooter
      class="sticky top-[100vh] w-full"
      footer-class="border-slate-900/5 dark:border-slate-700"
      border-class=""
    />
  </div>
</template>

<script>
import Navbar from '@components/includes/AppNav.vue';
import AppFooter from '@components/includes/AppFooter.vue';

export default {
  components: {
    Navbar,
    AppFooter,
  },
};
</script>
