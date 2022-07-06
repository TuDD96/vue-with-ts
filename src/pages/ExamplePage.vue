<template>
  <div>aaaa</div>
  <div>{{ t("login.title") }}</div>
  <select v-model="locale">
    <option v-for="(lang, index) in availableLocales" :key="index" :value="lang">{{ lang }}</option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "HomeView",
  setup() {
    const { t, locale, availableLocales } = useI18n({
      useScope: 'global'
    });

    return { t, locale, availableLocales };
  },
});
</script>
