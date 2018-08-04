import { match, not } from "@ember/object/computed";
import Controller from "@ember/controller";

export default Controller.extend({
  responseMessage: "",

  emailAddress: "",

  isValid: match("emailAddress", /^.+@.+\..+$/),

  isDisabled: not("isValid"),

  message: "",

  actions: {
    saveConformation() {
      alert(
        `Saving of the following email address is in progress: ${this.get(
          "emailAddress"
        )}` + ` The message: ${this.get("message")}`
      );
      this.set(
        "responseMessage",
        `We got your message and we’ll get in touch soon`
      );
      this.set("emailAddress", "");
      this.set("message", "");
    }
  }
});
