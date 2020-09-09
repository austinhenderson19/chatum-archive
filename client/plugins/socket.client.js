import Vue from "vue";
import VueSocketIO from "vue-socket.io";

export default function() {
  Vue.use(
    new VueSocketIO({
      debug: false,
      connection: "http://localhost",
      options: { path: "/api/v1/chat/socket.io" }
    })
  );
}
