import { PE, px, rgb } from "@wormery/wtsc";
import { defineComponent } from "vue";
import { the, wtsc } from "../wtsc/wtsc";
export default defineComponent({
  name: "LoginTextField",
  props: { icon: String, label: String },
  setup(props) {
    const w = wtsc.scoped("loginTextField");
    return () => (
      <div
        style={w.add
          .flex(1)
          .add.display("flex")
          .add.padding(px(10))
          .add.color(the.color1.out(w))
          .add.background(the.color2.out(w))
          .add.boxShadow(
            px(0),
            px(1),
            px(1),
            the.color1.out(w).clone().setA(0.5)
          )
          .add.borderRadius(px(3))
          .out()}
      >
        <label style={w.add.flex(0).add.padding(px(0), px(5)).out()}>
          <i
            style={w.add.width(px(20)).out()}
            class={["fa-solid", `fa-${props.icon}`]}
          ></i>
        </label>
        <input
          type={
            props.icon === "lock" || props.icon === "key" ? "password" : "text"
          }
          class={w.add
            .color(the.color1.out(w))
            .class("input")
            .add.color(the.color1.out(w))
            .pseudo("::placeholder")
            .out()}
          style={w.add
            .flex(1)
            .add.minWidth(px(0))
            .add.border("none")
            .add.outline("none")
            .add.background("transparent")
            .add.outline("none")
            .out()}
          placeholder={props.label}
        />
      </div>
    );
  },
});
