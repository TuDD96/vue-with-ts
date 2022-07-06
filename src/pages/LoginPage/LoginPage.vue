<template>
  <div class="container">
    <div class="row full-height align-items-center">
      <div class="col-md-5 mx-auto">
        <div class="card">
          <div class="card-body">
            <div class="p-15">
              <div class="m-b-30">
                <img
                  class="img-responsive inline-block"
                  src="assets/images/logo/logo.png"
                  alt=""
                />
                <h2 class="inline-block pull-right m-v-0 p-t-15">Login</h2>
              </div>
              <p class="m-t-15 font-size-13">
                Please enter your user name and password to login
              </p>
              <form>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="User name"
                    v-model="email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
                <div class="checkbox font-size-13 d-inline-block p-v-0 m-v-0">
                  <input id="agreement" name="agreement" type="checkbox" />
                  <label for="agreement">Keep Me Signed In</label>
                </div>
                <div class="pull-right">
                  <a href="#">Forgot Password?</a>
                </div>
                <div class="m-t-20 text-right">
                  <button
                    type="button"
                    @click="loginAdmin()"
                    class="btn btn-gradient-success"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { mapActions } from "vuex";

export default defineComponent({
  name: "HomePage",
  setup() {
    const { t, locale, availableLocales } = useI18n({
      useScope: "global",
    });
    const email = "";
    const password = "";

    return { t, locale, availableLocales, email, password };
  },
  methods: {
    ...mapActions({
      login: "Auth/login",
    }),
    loginAdmin() {
      this.login({ email: this.email, password: this.password })
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
});
</script>
