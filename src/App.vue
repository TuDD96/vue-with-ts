<template>
  <div class="app header-default side-nav-dark">
    <div class="layout" :class="setClass()">
      <router-view name="header"/>
      <router-view name="navbar"/>
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "HomeView",
  setup() {    
    const { t, locale, availableLocales } = useI18n({
      useScope: 'global'
    });
    
    return { t, locale, availableLocales };
  },
  methods: {
    setClass() {
      if (this.$route.name == "Login") {
        return "bg-gradient-info"
      }

      return ""
    }
  },
});
</script>

<style></style>
