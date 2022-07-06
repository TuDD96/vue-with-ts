<template>
  <div class="side-nav expand-lg">
    <div class="side-nav-inner">
      <ul class="side-nav-menu scrollable">
        <li class="nav-item dropdown open">
          <a class="dropdown-toggle" href="javascript:void(0);">
            <span class="icon-holder">
              <i class="mdi mdi-gauge"></i>
            </span>
            <span class="title">Dashboard</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle" href="javascript:void(0);">
            <span class="icon-holder">
              <i class="mdi mdi-account"></i>
            </span>
            <span class="title">Users</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle" href="javascript:void(0);">
            <span class="icon-holder">
              <i class="mdi mdi-image-filter-drama"></i>
            </span>
            <span class="title">Apps</span>
            <span class="arrow">
              <i class="mdi mdi-chevron-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="email.html">Email</a>
            </li>
            <li>
              <a href="calendar.html">Calendar</a>
            </li>
            <li>
              <a href="chat-app.html">Chat App</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="task.html">Task</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "NavBarComponent",
  setup() {
    const { t, locale, availableLocales } = useI18n({
      useScope: "global",
    });

    return { t, locale, availableLocales };
  },
  mounted() {
    const dropdown = document.querySelectorAll(".dropdown");
    dropdown.forEach((elm) => this.toggleNavMenu(elm));
  },
  methods: {
    toggleNavMenu(elm) {
      elm.addEventListener("click", function () {
        if (elm.classList.contains("open")) {
          elm.classList.remove("open")
        } else {
          elm.classList.add("open")
        }
      });
    },
  },
});
</script>
