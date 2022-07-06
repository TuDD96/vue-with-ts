import Cookies from "js-cookie";

const ROLE = "role";

export default {
  getRole() {
    return Cookies.get(ROLE);
  },

  setRole(role: string) {
    Cookies.set(ROLE, role);
  },

  removeRole() {
    Cookies.remove(ROLE);
  },
};
