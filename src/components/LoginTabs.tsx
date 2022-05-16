import { px, s, ms } from "@wormery/wtsc";
import { computed, defineComponent, PropType } from "vue";
import { the, wtsc } from "../wtsc/wtsc";

export const stateProps = {
  state: {
    type: String as PropType<"sigin" | "sigup">,
    default: "sigup",
  },
};

export default defineComponent({
  name: "LoginTabs",
  props: {
    ["onUpdate:state"]: { type: Function },
    ...stateProps,
  },
  setup(props) {
    const w = wtsc.scoped("loginTabs");
    const duration = 0.6;
    const isSigup = computed(() => {
      return props.state == "sigup";
    });
    const isSigin = computed(() => {
      return props.state == "sigin";
    });
    return () => {
      const ulLiStyle = w.add
        .display("flex")
        .add.justifyContent("space-around")
        .add.alignItems("center")
        .add.padding(px(10))
        .add.flex(1)
        .add.transitionProperty("all")
        .add.transitionDuration(ms(the.duration.out(w)))
        // .add.transition("all", s(duration), "ease")
        .out();
      const ulLiSpanStyle = w.add
        .display("block")
        .add.padding(px(4), px(10))
        .add.border(px(1), "solid", "white")
        .add.borderRadius(px(3))
        .add.textAlign("center")
        .add.transition("all", s(duration), "ease")
        .out();

      const switchState = () => {
        props["onUpdate:state"]?.(props.state === "sigin" ? "sigup" : "sigin");
      };

      const delay = 100;
      const delay1 = 50;
      return (
        <div class="root login-tabs" onClick={switchState}>
          <ul
            style={wtsc.add
              .display("flex")
              .add.padding(px(0), px(34))
              .add.userSelect("none")
              .out()}
          >
            <li
              style={[
                ulLiStyle,
                w
                  .if(isSigup.value, () =>
                    w.add
                      .transitionDuration(ms(the.duration.out(w) - delay))
                      .add.transitionDelay(ms(delay))
                      .add.transform("translateX(100%)", `scale(1.5)`)
                  )
                  .if(isSigin.value, () =>
                    w.add.transform(`scale(0.6)`).add.opacity(0.4)
                  )
                  .out(),
              ]}
            >
              <span
                style={[
                  ulLiSpanStyle,
                  w
                    .if(isSigup.value, () => w.add.borderColor("transparent"))
                    .out(),
                ]}
              >
                Sign up
              </span>
            </li>
            <li
              class={w
                .class("loginTabsOr")
                .add.content("'-'")
                .pseudo("::before")
                .add.content("'-'")
                .pseudo("::after")
                .out()}
              style={[
                ulLiStyle,
                w.add
                  .justifyContent("center")
                  .add.transitionDelay(ms(delay1))
                  .add.transitionDuration(ms(the.duration.out(w)))
                  .if(isSigup.value, () =>
                    w.add.transform(`translateX(58%)`).add.opacity(0.8)
                  )
                  .if(isSigin.value, () =>
                    w.add.transform(`translateX(-58%)`).add.opacity(0.8)
                  )
                  .out(),
              ]}
            >
              or
            </li>
            <li
              style={[
                ulLiStyle,
                w
                  .if(isSigin.value, () =>
                    w.add
                      .transitionDuration(ms(the.duration.out(w) - delay))
                      .add.transitionDelay(ms(delay))
                      .add.transform("translateX(-100%)", `scale(1.5)`)
                  )
                  .if(isSigup.value, () =>
                    w.add.transform(`scale(0.6)`).add.opacity(0.4)
                  )
                  .out(),
              ]}
            >
              <span
                style={[
                  ulLiSpanStyle,
                  w
                    .if(isSigin.value, () => w.add.borderColor("transparent"))
                    .out(),
                ]}
              >
                Sign in
              </span>
            </li>
          </ul>
        </div>
      );
    };
  },
});
