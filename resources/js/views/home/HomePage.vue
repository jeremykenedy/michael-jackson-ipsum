<template>
  <div class="p-12">
    <div class="text-center">
      <div class="mb-5 flex items-center justify-between">
        <img id="mainLight" alt="{{ appName }}" class="show-light text-center ml-auto mr-auto w-40" />
        <img id="mainDark" alt="{{ appName }}" class="show-dark text-center ml-auto mr-auto w-40" />
      </div>
      <h1 class="text-4xl mb-5 quicksand-font text-slate-500 dark:text-slate-300">
        {{ appName }}
      </h1>
    </div>
    <IpsumComponent />
  </div>
</template>

<script>
import IpsumComponent from '@components/ipsums/IpsumComponent.vue';
import mainLight from '@img/logo/main-light.png';
import mainDark from '@img/logo/main-dark.png';

export default {
  name: 'HomePage',
  components: { IpsumComponent },
  computed: {
    appName() {
      return APP_NAME;
    },
  },
  mounted() {
    document.getElementById('mainLight').src = mainLight;
    document.getElementById('mainDark').src = mainDark;
  },
};
</script>
