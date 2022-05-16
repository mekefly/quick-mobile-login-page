import { createApp } from "vue";
import App from "./App.vue";
import { setConfig } from "@wormery/wtsc";

const app = createApp(App);
// app.config.compilerOptions.isCustomElement = (tag) => {
//   console.log(tag);

//   return ["i"].includes(tag);
// };
app.mount("#app");
