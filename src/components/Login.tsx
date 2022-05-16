import { em, PE, px, vw } from "@wormery/wtsc";
import { defineComponent, onUnmounted, PropType, Ref, ref } from "vue";
import { the, wtsc } from "../wtsc/wtsc";
import LoginFrom from "./LoginFrom";
import LoginTabs from "./LoginTabs";
import Theme from "./Theme";

export default defineComponent({
  name: "Login",
  setup() {
    const w = wtsc.scoped("Login");
    let state: Ref<"sigin" | "sigup"> = ref("sigin");
    const isShow = ref(false);
    const handelClick = () => {
      isShow.value = false;
    };

    window.document.addEventListener("click", handelClick);
    onUnmounted(() => {
      window.document.removeEventListener("click", handelClick);
    });
    return () => (
      <div
        style={w.add
          .width(PE(100))
          .add.color(the.color2.out(w))
          .add.fontSize(px(14))
          .add.overflow("hidden")
          .out()}
      >
        <LoginTabs v-model:state={state.value}></LoginTabs>
        <LoginFrom state={state.value}></LoginFrom>
        <Theme isShow={isShow.value}></Theme>
        <div
          onClick={(e) => {
            e.stopPropagation();
            isShow.value = !isShow.value;
          }}
          style={w.add
            .position("absolute")
            .add.top(px(8))
            .add.left(px(8))
            .out()}
        >
          <i
            style={w.add.fontSize(em(2)).out()}
            class="fa-brands fa-affiliatetheme"
          ></i>
        </div>
      </div>
    );
  },
});
