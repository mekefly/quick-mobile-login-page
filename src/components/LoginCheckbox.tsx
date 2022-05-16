import { PE, rgb, px, vh, s, em, ms } from "@wormery/wtsc";
import { defineComponent, ref } from "vue";
import { the, wtsc } from "../wtsc/wtsc";
let lcid = 0;
export default defineComponent({
  name: "LoginCheckbox",
  props: { label: String },
  setup(props) {
    const w = wtsc.scoped("login-checkbox");
    const id = `login-checkbox-${lcid}`;

    const checked = ref(false);
    return () => {
      return (
        <span>
          <input
            v-model={checked.value}
            style={w.add.display("none").out()}
            type="checkbox"
            id={id}
          />
          <label
            style={w.add.display("flex").add.userSelect("none").out()}
            for={id}
          >
            <div
              style={w.add
                .position("relative")
                .add.display("flex")
                .add.justifyContent("center")
                .add.alignItems("center")
                .add.marginRight(px(10))
                .add.height(em(1))
                .add.width(em(1))
                .add.backgroundImage(
                  `linear-gradient(270deg, ${the.color2
                    .out(w)
                    .out(w)} 0%, ${the.color2.out(w).out(w)} 45%,
                    transparent 56%,
                    transparent 100%)`
                )
                .add.backgroundSize(PE(200))
                .if(
                  !checked.value,
                  () => w.add.backgroundPosition(PE(100)),
                  () => w.add.backgroundPosition(PE(0))
                )
                .add.transition("background", ms(the.duration.out(w)), "ease")
                .add.borderRadius(px(3))
                .out()}
            >
              <i
                style={w.add.fontSize(em(1.5)).add.left(px(0)).out()}
                class="fa-solid fa-square-check"
              ></i>
            </div>
            {props.label}
          </label>
        </span>
      );
    };
  },
});
