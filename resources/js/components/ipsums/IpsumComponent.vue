<template>
  <!--
  <fieldset aria-label="Choose type">
    <div class="mt-2 grid grid-cols-2 gap-3 text-gray-600 dark:text-gray-200">
      <label
        class="flex cursor-pointer items-center justify-center rounded-md px-1 py-2 text-sm font-semibold capitalize focus:outline-none sm:flex-1 border"
        :class="type == 'paragraph' ? 'bg-gray-800 dark:bg-gray-500 text-white' : 'bg-gray-100 dark:bg-gray-800'"
      >
        <input id="paragraphType" v-model="type" type="radio" name="paragraphType" value="paragraph" class="sr-only" />
        <span>Paragraphs</span>
      </label>
      <label
        class="flex cursor-pointer items-center justify-center rounded-md px-1 py-2 text-sm font-semibold capitalize focus:outline-none sm:flex-1 border"
        :class="type == 'words' ? 'bg-gray-800 dark:bg-gray-500 text-white' : 'bg-gray-100 dark:bg-gray-800'"
      >
        <input id="wordsType" v-model="type" type="radio" name="wordsType" value="words" class="sr-only" />
        <span>Words</span>
      </label>
    </div>
  </fieldset>
  -->

  <AppButton
    v-tippy="'Copy to Clipboard'"
    secondary
    :disabled="clipped"
    class="text-sm float-right mb-3 p-0"
    btn-class="px-0 py-0 h-0"
    @click.prevent="copyToClipboard()"
  >
    <template #text>
      <ClipboardIcon
        v-if="!clipped"
        class="ml-2 mr-2 mt-0 h-4 w-4"
      />
      <ClipboardDocumentCheckIcon
        v-if="clipped"
        class="ml-2 mr-2 mt-0 h-4 w-4"
      />

      <span class="sr-only">Copy to Clipboard</span>
    </template>
  </AppButton>

  <div class="clear-both clearfix">
    <div class="mt-3">
      <div
        class="flex items-center rounded-md bg-white dark:bg-gray-900 px-3 outline-0 border border-gray-300 focus:outline-0"
      >
        <input
          v-if="type == 'paragraph'"
          v-model="paragraphs"
          type="number"
          name="paragraphs"
          class="block min-w-0 grow py-1.5 pr-3 text-base text-gray-900 dark:bg-gray-900 dark:text-gray-200 placeholder:text-gray-400 sm:text-sm outline-0 border-0 focus:outline-2 focus:-outline-offset-2"
          min="1"
          max="100"
          placeholder="1"
          aria-describedby="ipsum_type"
        >

        <input
          v-if="type == 'words'"
          v-model="words"
          type="number"
          name="words"
          class="block min-w-0 grow py-1.5 pr-3 text-base text-gray-900 dark:bg-gray-900 dark:text-gray-200 placeholder:text-gray-400 sm:text-sm outline-0 border-0 focus:outline-2 focus:-outline-offset-2"
          min="1"
          placeholder="1"
          aria-describedby="ipsum_type"
        >

        <div
          id="ipsum_type"
          class="shrink-0 pl-4 pr-1 select-none text-base text-gray-500 dark:text-gray-300 sm:text-sm"
        >
          {{ type == 'paragraph' ? 'Paragraphs' : type == 'words' ? 'Words' : type }}
        </div>
      </div>
    </div>
  </div>

  <div
    id="ipsum_content"
    class="my-3 p-4 pb-0 border border-gray-300 rounded-lg text-left lorem-paragraphs bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200"
  >
    <div
      id="paragraph"
      ref="paragraph"
    />
    <div
      id="words"
      ref="words"
      class="mb-4"
    />
  </div>
</template>

<script lang="ts">
import { mapActions } from 'pinia';
import { track } from '@services/analytics';
import Lorem from '@services/words';
import { ClipboardIcon, ClipboardDocumentCheckIcon } from '@heroicons/vue/24/outline';
import { useToastStore } from '@store/toast';
var lorem;

export default {
  name: 'IpsumComponent',
  components: {
    ClipboardIcon,
    ClipboardDocumentCheckIcon,
  },
  data() {
    return {
      type: 'paragraph',
      paragraphs: 2,
      words: 1,
      clipped: false,
      timeout: 4000,
    };
  },
  computed: {
    loremQuery() {
      let t = this.words;
      if (this.type == 'paragraph') {
        t = this.paragraphs;
      }
      return t + this.type;
    },
    loremQueryDisplay() {
      let t = this.words;
      if (this.type == 'paragraph') {
        t = this.paragraphs;
      }
      return t + ' ' + (this.type == 'paragraph' ? 'Paragraphs' : this.type == 'words' ? 'Words' : this.type);
    },
  },
  watch: {
    paragraphs(newVal, oldVal) {
      if (newVal <= 0) {
        this.paragraphs = 1;
      }
      if (newVal >= 100) {
        this.paragraphs = 100;
      }
      this.createAndPutLoremText();
    },
    words(newVal, oldVal) {
      if (newVal <= 0) {
        this.words = 1;
      }
      this.createAndPutLoremText();
    },
    type(newVal, oldVal) {
      this.createAndPutLoremText();
    },
  },
  mounted: function () {
    this.createAndPutLoremText();
  },
  methods: {
    ...mapActions(useToastStore, ['error', 'success']),
    track,
    createAndPutLoremText: function () {
      this.clearContent();
      lorem = new Lorem();
      lorem.type = Lorem.TEXT;
      lorem.query = this.loremQuery;
      lorem.createLorem(this.$refs[this.type]);
    },
    clearContent() {
      this.clipped = false;
      document.getElementById('paragraph').html = '';
      document.getElementById('words').html = '';
      document.getElementById('paragraph').innerHTML = '';
      document.getElementById('words').innerHTML = '';
    },
    copyToClipboard() {
      const self = this;
      let element = 'paragraph';
      if (this.type == 'words') {
        element = 'words';
      }
      try {
        self.clipped = true;
        self.copyElementToClipboard(element);
        self.success('Copied to Clipboard');
      } catch (error) {
        self.error('Error copying to Clipboard');
      } finally {
        setTimeout(function () {
          self.clipped = false;
        }, self.timeout);
      }
    },
    copyElementToClipboard(element) {
      window.getSelection().removeAllRanges();
      let range = document.createRange();
      range.selectNode(typeof element === 'string' ? document.getElementById(element) : element);
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
    },
  },
};
</script>
