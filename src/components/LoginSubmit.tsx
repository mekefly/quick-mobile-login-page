import { mixColor, ms, PE, px, rgb, s } from "@wormery/wtsc";
import { defineComponent } from "vue";
import { the, wtsc } from "../wtsc/wtsc";
import { stateProps } from "./LoginTabs";
export default defineComponent({
  name: "LoginSubmit",
  props: { ...stateProps },
  setup(props) {
    const w = wtsc.scoped("LoginSubmit");
    const rowHeight = 40;

    return () => {
      const isSigin = props.state == "sigin";
      const isSigup = props.state == "sigup";
      const labelStyle = w.add
        .position("absolute")
        .add.display("flex")
        .add.justifyContent("center")
        .add.alignContent("center")

        .add.height(PE(100))
        .add.width(PE(100))
        .add.lineHeight(px(rowHeight))

        .add.overflow("hidden")

        .add.transition("all", ms(the.duration.out(w)), "ease")
        .add.pointerEvents("none")
        .out();

      return (
        <span
          style={w.add
            .flex(1)
            .add.position("relative")
            .add.display("flex")
            .add.borderRadius(px(3))
            .add.overflow("hidden")
            .out()}
        >
          <input
            class={w.add
              .background(
                mixColor(the.color1.out(w), the.color2.out(w).clone().setA(0.3))
              )
              .class("input")
              .add.background(
                mixColor(the.color1.out(w), the.color2.out(w).clone().setA(0.5))
              )
              .pseudo(":hover")
              .add.background(
                mixColor(the.color1.out(w), the.color2.out(w).clone().setA(0.8))
              )
              .pseudo(":active")
              .out()}
            style={w.add
              .display("block")
              .add.flex(1)
              .add.height(px(rowHeight))
              .add.border("none")
              .add.outline("none")
              .add.transition("all", ms(the.duration.out(w) / 3), "ease")
              .out()}
            type="button"
            value=""
          />
          <label
            style={[
              labelStyle,
              w.if(!isSigin, () => w.add.transform(`translateY(-100%)`)).out(),
            ]}
          >
            SigIn
          </label>
          <label
            style={[
              labelStyle,
              w.if(!isSigup, () => w.add.transform(`translateY(100%)`)).out(),
            ]}
          >
            SigUp
          </label>
        </span>
      );
    };
  },
});
