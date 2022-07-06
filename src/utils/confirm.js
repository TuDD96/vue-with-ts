import Vue from "vue";
import i18n from "./i18n";

const confirm = (message = "", title = "") => {
  const vm = new Vue({});
  
return vm.$bvModal
    .msgBoxConfirm(message, {
      modalClass: "c-confirm-box-modal",
      dialogClass: "c-confirm-box-dialog",
      okOnly: true,
      title,
      cancelDisabled: true,
      size: "sm",
      buttonSize: "lg",
      okVariant: "primary",
      headerClass: "p-2 border-bottom-0",
      footerClass:
        "p-2 border-top-0 d-flex justify-content-around confirm-modal",
      hideHeaderClose: false,
      centered: true,
      cancelTitle: i18n.t("commons.button.cancel"),
      okTitle: i18n.t("commons.button.confirm"),
    })
    .then((value) => value)
    .catch((err) => err);
};

export default confirm;
